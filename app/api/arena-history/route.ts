import { NextResponse } from 'next/server';
import {
  executeWorkflow,
  extractOutput,
  HISTORY_WORKFLOW_ID,
  namespaceHistoryOutput,
} from '@/lib/arena-api';
import { getArenaEmailId } from '@/lib/arena-email';
import type { AnalysisOutput, ArenaRunEntry } from '@/lib/types';

export const maxDuration = 120;
export const dynamic = 'force-dynamic';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export async function GET() {
  const email = await getArenaEmailId();
  if (!email) {
    return NextResponse.json({ runs: [] });
  }

  try {
    const parsed = await executeWorkflow(HISTORY_WORKFLOW_ID, {
      email,
      stream: false,
      selectedOutputs: ['response.result'],
      includeThinking: false,
      includeToolCalls: false,
    });
    const output = extractOutput(parsed);
    const rawList: unknown[] = Array.isArray(output.result) ? output.result : [];

    const runs: ArenaRunEntry[] = [];
    for (const r of rawList) {
      if (!isRecord(r)) continue;
      const idRaw = r.id;
      const id =
        typeof idRaw === 'string' ? idRaw : typeof idRaw === 'number' ? String(idRaw) : '';
      if (!id) continue;

      const input = isRecord(r.input) ? r.input : {};
      const out = isRecord(r.output) ? r.output : {};
      const comp = r.competitor_output;

      runs.push({
        id,
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
    return NextResponse.json({ error: 'Unable to load history' }, { status: 502 });
  }
}
