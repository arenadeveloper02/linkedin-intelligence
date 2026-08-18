import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { executeWorkflow, extractOutput, PLAYBOOK_WORKFLOW_ID } from '@/lib/arena-api';
import { getArenaEmailId } from '@/lib/arena-email';
import type { PlaybookContent } from '@/lib/types';

export const maxDuration = 300;

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
  const source = payload.source === 'competitor' ? 'competitor' : 'own';

  if (!id) {
    return NextResponse.json({ error: 'Run id is required.' }, { status: 400 });
  }

  const email = await getArenaEmailId();
  if (!email) {
    return NextResponse.json({ error: 'Missing Arena email id' }, { status: 401 });
  }

  try {
    const parsed = await executeWorkflow(PLAYBOOK_WORKFLOW_ID, {
      email,
      id,
      type: source === 'competitor' ? 'COMPETITOR' : 'OWN',
      stream: false,
      selectedOutputs: ['playbookagent.content'],
      includeThinking: false,
      includeToolCalls: false,
    });
    const output = extractOutput(parsed);
    const contentRaw = output.content ?? output['playbookagent.content'];

    let playbook: PlaybookContent | null = null;
    if (typeof contentRaw === 'string') {
      try {
        const p: unknown = JSON.parse(contentRaw);
        if (isRecord(p)) playbook = p as PlaybookContent;
      } catch {
        playbook = null;
      }
    } else if (isRecord(contentRaw)) {
      playbook = contentRaw as PlaybookContent;
    }

    if (!playbook) {
      return NextResponse.json({ error: 'Playbook could not be generated' }, { status: 502 });
    }
    return NextResponse.json({ playbook });
  } catch {
    return NextResponse.json({ error: 'Playbook could not be generated' }, { status: 502 });
  }
}
