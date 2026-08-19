import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  executeWorkflow,
  extractOutput,
  RUN_WORKFLOW_ID,
  namespaceHistoryOutput,
} from '@/lib/arena-api';
import type { AnalysisOutput, ArenaRunEntry } from '@/lib/types';

export const maxDuration = 120;
export const dynamic = 'force-dynamic';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown> = {};
  try {
    const json: unknown = await req.json();
    if (json && typeof json === 'object' && !Array.isArray(json)) {
      payload = json as Record<string, unknown>;
    }
  } catch {
    payload = {};
  }

  const id = typeof payload.id === 'string' ? payload.id.trim() : '';

  if (!id) {
    return NextResponse.json({ error: 'Run id is required.' }, { status: 400 });
  }

  try {
    // Single-run lookup workflow: fetches only the requested run instead of
    // the visitor's entire history. Payload matches the documented API exactly:
    // { id, stream: false, selectedOutputs: ['response.result'] }.
    const parsed = await executeWorkflow(RUN_WORKFLOW_ID, {
      id,
      stream: false,
      selectedOutputs: ['response.result'],
    });
    const output = extractOutput(parsed);
    const rawList: unknown[] = Array.isArray(output.result) ? output.result : [];

    const runs: ArenaRunEntry[] = [];
    for (const r of rawList) {
      if (!isRecord(r)) continue;
      const idRaw = r.id;
      const runId =
        typeof idRaw === 'string' ? idRaw : typeof idRaw === 'number' ? String(idRaw) : '';
      if (!runId) continue;

      const input = isRecord(r.input) ? r.input : {};
      const out = isRecord(r.output) ? r.output : {};
      const comp = r.competitor_output;

      runs.push({
        id: runId,
        companyId: typeof input.companyId === 'string' ? input.companyId : '',
        companyName:
          typeof input.companyName === 'string' && input.companyName.trim()
            ? input.companyName
            : typeof out.name === 'string'
              ? out.name
              : 'Unknown company',
        companyLogo: typeof out.logo === 'string' ? out.logo : null,
        createdAt: typeof r.created_at === 'string' ? r.created_at : '',
        type: typeof r.type === 'string' ? r.type : 'OWN_BRANDING',
        hasCompetitor: isRecord(comp) && Object.keys(comp).length > 0,
        output: namespaceHistoryOutput(out) as AnalysisOutput,
        summary: typeof r.summary === 'string' && r.summary.trim() ? r.summary : null,
        competitorOutput:
          isRecord(comp) && Object.keys(comp).length > 0
            ? (namespaceHistoryOutput(comp) as AnalysisOutput)
            : null,
      });
    }

    return NextResponse.json({ runs });
  } catch {
    return NextResponse.json({ error: 'Unable to load run' }, { status: 502 });
  }
}
