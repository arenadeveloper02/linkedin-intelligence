import type { CompanyResult } from '@/lib/types';

const ARENA_BASE = 'https://agent.thearena.ai/api/workflows';

const ARENA_API_KEY_FALLBACK = 'sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg';

export const SEARCH_WORKFLOW_ID = 'c821b89f-5f32-44b3-9cc6-c0eea5b72b36';

export const HISTORY_WORKFLOW_ID = 'bc8877bb-bdda-445f-a1a0-9eb1709af4b6';

export const PLAYBOOK_WORKFLOW_ID = '00bfdfb5-3726-4a32-a130-1eeb51d6a238';

export const analysisWorkflows: { ownBrand: string; competitor: string | null } = {
  ownBrand: '13e76c2b-bbdc-43c5-835e-92027a6c43e9',
  competitor: '13e76c2b-bbdc-43c5-835e-92027a6c43e9',
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export async function executeWorkflow(
  workflowId: string,
  payload: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const apiKey = process.env.ARENA_API_KEY || ARENA_API_KEY_FALLBACK;
  if (!apiKey) throw new Error('ARENA_API_KEY is not configured');

  const res = await fetch(`${ARENA_BASE}/${workflowId}/execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const text = await res.text();
  if (!res.ok) throw new Error(`Arena workflow failed with status ${res.status}`);
  return parseWorkflowText(text);
}

function parseWorkflowText(text: string): Record<string, unknown> {
  const trimmed = text.trim();
  try {
    const parsed: unknown = JSON.parse(trimmed);
    if (isRecord(parsed)) return parsed;
  } catch {
    // fall through to SSE-style parsing below
  }

  const output: Record<string, unknown> = {};
  let finalOutput: Record<string, unknown> | null = null;
  const chunksByBlock: Record<string, string> = {};

  for (const line of trimmed.split('\n')) {
    const l = line.trim();
    if (!l.startsWith('data:')) continue;
    const body = l.slice(5).trim();
    if (!body || body === '[DONE]' || body === '"[DONE]"') continue;
    try {
      const evt: unknown = JSON.parse(body);
      if (!isRecord(evt)) continue;
      // The streaming API delivers the complete, structured output in a final
      // event: { event: 'final', data: { success, output: { <blockId>: {...} } } }.
      // Always prefer this over intermediate chunk events.
      if (evt.event === 'final' && isRecord(evt.data) && isRecord(evt.data.output)) {
        finalOutput = evt.data.output as Record<string, unknown>;
        continue;
      }
      // Intermediate streamed text chunks per block; accumulated as a fallback
      // in case no final event is present in the stream.
      if (typeof evt.blockId === 'string' && typeof evt.chunk === 'string') {
        chunksByBlock[evt.blockId] = (chunksByBlock[evt.blockId] ?? '') + evt.chunk;
        continue;
      }
      mergeEventOutput(evt, output);
    } catch {
      // ignore malformed event chunks
    }
  }

  if (finalOutput) return { output: finalOutput };

  if (Object.keys(output).length === 0) {
    for (const [blockId, chunkText] of Object.entries(chunksByBlock)) {
      const merged = parseChunkRecords(chunkText);
      if (Object.keys(merged).length > 0) output[blockId] = merged;
    }
  }
  return { output };
}

/**
 * Streamed chunks contain newline-separated JSON documents. Merge every
 * top-level JSON object into a single record for the block; non-object
 * documents (arrays / scalars) cannot be keyed reliably and are skipped
 * in this fallback path.
 */
function parseChunkRecords(chunkText: string): Record<string, unknown> {
  const merged: Record<string, unknown> = {};
  for (const line of chunkText.split('\n')) {
    const doc = line.trim();
    if (!doc) continue;
    try {
      const parsed: unknown = JSON.parse(doc);
      if (isRecord(parsed)) Object.assign(merged, parsed);
    } catch {
      // ignore partial / malformed documents
    }
  }
  return merged;
}

function mergeEventOutput(evt: Record<string, unknown>, output: Record<string, unknown>): void {
  const candidates: unknown[] = [evt.output, evt.result, evt.data];
  for (const c of candidates) {
    if (!isRecord(c)) continue;
    if (isRecord(c.output)) {
      Object.assign(output, c.output);
    } else {
      Object.assign(output, c);
    }
  }
  if (typeof evt.key === 'string' && 'value' in evt) {
    output[evt.key] = evt.value;
  }
}

export function extractOutput(parsed: Record<string, unknown>): Record<string, unknown> {
  if (isRecord(parsed.output)) return parsed.output;
  if (isRecord(parsed.result)) {
    const result = parsed.result;
    if (isRecord(result.output)) return result.output;
  }
  return parsed;
}

const AGENT_KEY_GROUPS: { namespace: string; keys: string[] }[] = [
  {
    namespace: 'strategyagent',
    keys: ['strategy', 'personas', 'hookLibrary', 'ctaLibrary', 'audienceDetail'],
  },
  {
    namespace: 'contentcreativeagent',
    keys: ['content', 'creative', 'engagement', 'topicClusters'],
  },
  {
    namespace: 'messagingagent',
    keys: ['company', 'messaging', 'stats', 'summary'],
  },
  {
    namespace: 'creativeinsightagent',
    keys: ['imageryTypes', 'recommendations', 'observations', 'textStyle'],
  },
  {
    namespace: 'competitiveagent',
    keys: [
      'campaigns',
      'competitive',
      'launches',
      'messagingEvolution',
      'recommendations',
      'scorecard',
      'scorecardOverall',
    ],
  },
  {
    namespace: 'getcompanyprofile',
    keys: [
      'id',
      'name',
      'description',
      'public_identifier',
      'profile_url',
      'followers_count',
      'employee_count',
      'website',
      'logo',
      'profile',
    ],
  },
  {
    namespace: 'getcompanypost',
    keys: ['items'],
  },
];

/**
 * The Arena streaming response returns the final output keyed by opaque block IDs
 * (UUIDs), each containing that agent's fields. This normalizes the output into
 * the namespaced keys the report expects (e.g. 'strategyagent.strategy',
 * 'getcompanypost.items') by matching each block's field names against the known
 * agent key groups. If the output is already namespaced, it is returned as-is.
 */
export function normalizeAnalysisOutput(
  output: Record<string, unknown>,
): Record<string, unknown> {
  const hasNamespacedKeys = Object.keys(output).some((k) => k.includes('.'));
  if (hasNamespacedKeys) return output;

  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(output)) {
    if (!isRecord(value)) {
      normalized[key] = value;
      continue;
    }
    const childKeys = Object.keys(value);
    let best: { namespace: string; score: number } | null = null;
    for (const group of AGENT_KEY_GROUPS) {
      const score = childKeys.filter((k) => group.keys.includes(k)).length;
      if (score > 0 && (!best || score > best.score)) {
        best = { namespace: group.namespace, score };
      }
    }
    if (best) {
      for (const [childKey, childValue] of Object.entries(value)) {
        normalized[`${best.namespace}.${childKey}`] = childValue;
      }
    } else {
      normalized[key] = value;
    }
  }
  return normalized;
}

/**
 * The history workflow returns each run's saved output as one flat record
 * (keys like 'items', 'strategy', 'stats', 'name', ...). This maps those flat
 * keys onto the namespaced keys the report dashboard expects
 * (e.g. 'getcompanypost.items', 'strategyagent.strategy'). Already-namespaced
 * records are returned as-is.
 */
export function namespaceHistoryOutput(
  flat: Record<string, unknown>,
): Record<string, unknown> {
  const hasNamespacedKeys = Object.keys(flat).some((k) => k.includes('.'));
  if (hasNamespacedKeys) return flat;

  const namespaced: Record<string, unknown> = {};
  for (const group of AGENT_KEY_GROUPS) {
    for (const key of group.keys) {
      if (Object.prototype.hasOwnProperty.call(flat, key)) {
        namespaced[`${group.namespace}.${key}`] = flat[key];
      }
    }
  }
  return namespaced;
}

export function extractCompanies(parsed: Record<string, unknown>): CompanyResult[] {
  const output = extractOutput(parsed);
  const candidates: unknown[] = [output.companies, output['companylistingagent.companies']];
  const listing = output.companylistingagent;
  if (isRecord(listing)) candidates.push(listing.companies);

  let raw: unknown[] = [];
  for (const c of candidates) {
    if (Array.isArray(c) && c.length > 0) {
      raw = c;
      break;
    }
  }

  if (raw.length === 0) {
    for (const v of Object.values(output)) {
      if (Array.isArray(v) && v.some((x) => isRecord(x) && typeof x.name === 'string')) {
        raw = v;
        break;
      }
      if (isRecord(v) && Array.isArray(v.companies) && v.companies.length > 0) {
        raw = v.companies;
        break;
      }
    }
  }

  return raw
    .filter(isRecord)
    .map(toCompany)
    .filter((c): c is CompanyResult => c !== null);
}

function toCompany(r: Record<string, unknown>): CompanyResult | null {
  const name = typeof r.name === 'string' && r.name.trim() ? r.name : null;
  if (!name) return null;

  const str = (v: unknown): string | null => (typeof v === 'string' && v.trim() ? v : null);
  const num = (v: unknown): number | null => {
    const n = typeof v === 'number' ? v : typeof v === 'string' && v.trim() ? Number(v) : NaN;
    return Number.isFinite(n) ? n : null;
  };

  const id = str(r.id) ?? (typeof r.id === 'number' ? String(r.id) : '');

  return {
    id,
    name,
    logo: str(r.logo),
    industry: str(r.industry),
    location: str(r.location),
    description: str(r.description),
    summary: str(r.summary),
    followers_count: num(r.followers_count),
    profile_url: str(r.profile_url) ?? str(r.linkedinUrl),
    website: str(r.website),
  };
}
