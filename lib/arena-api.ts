import type { CompanyResult } from '@/lib/types';

const ARENA_BASE = 'https://agent.thearena.ai/api/workflows';

const ARENA_API_KEY_FALLBACK = 'sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg';

export const SEARCH_WORKFLOW_ID = 'c821b89f-5f32-44b3-9cc6-c0eea5b72b36';

export const analysisWorkflows: { ownBrand: string; competitor: string | null } = {
  ownBrand: '13e76c2b-bbdc-43c5-835e-92027a6c43e9',
  competitor: null,
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
  for (const line of trimmed.split('\n')) {
    const l = line.trim();
    if (!l.startsWith('data:')) continue;
    const body = l.slice(5).trim();
    if (!body || body === '[DONE]') continue;
    try {
      const evt: unknown = JSON.parse(body);
      if (isRecord(evt)) mergeEventOutput(evt, output);
    } catch {
      // ignore malformed event chunks
    }
  }
  return { output };
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
