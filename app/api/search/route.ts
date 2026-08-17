import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { executeWorkflow, extractCompanies, SEARCH_WORKFLOW_ID } from '@/lib/arena-api';

export const maxDuration = 120;

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

  const companyName = typeof payload.companyName === 'string' ? payload.companyName.trim() : '';
  if (!companyName) {
    return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
  }

  try {
    const parsed = await executeWorkflow(SEARCH_WORKFLOW_ID, {
      companyName,
      stream: false,
      selectedOutputs: ['companylistingagent.companies'],
      includeThinking: false,
      includeToolCalls: false,
    });
    const companies = extractCompanies(parsed);
    return NextResponse.json({ companies });
  } catch {
    return NextResponse.json({ error: 'Unable to search companies' }, { status: 502 });
  }
}
