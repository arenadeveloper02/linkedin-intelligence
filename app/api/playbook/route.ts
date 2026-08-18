import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { executeWorkflow, extractOutput, PLAYBOOK_WORKFLOW_ID } from '@/lib/arena-api';
import { getArenaEmailId } from '@/lib/arena-email';
import type { PlaybookContent } from '@/lib/types';

export const maxDuration = 300;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function stripCodeFences(text: string): string {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/);
  return fenced ? fenced[1].trim() : trimmed;
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

  const email = await getArenaEmailId();
  if (!email) {
    return NextResponse.json({ error: 'Missing Arena email id' }, { status: 401 });
  }

  try {
    // Payload matches the documented playbook workflow API exactly:
    // { email, id, stream: true, selectedOutputs: ['playbookagent.content'], ... }
    const parsed = await executeWorkflow(PLAYBOOK_WORKFLOW_ID, {
      email,
      id,
      stream: true,
      selectedOutputs: ['playbookagent.content'],
      includeThinking: false,
      includeToolCalls: false,
    });
    const output = extractOutput(parsed);
    // The workflow may return the content at output.content, under the
    // namespaced key, or nested inside a playbookagent block \u2014 map all three.
    const agentBlock = output.playbookagent;
    let contentRaw: unknown =
      output.content ??
      output['playbookagent.content'] ??
      (isRecord(agentBlock) ? agentBlock.content : undefined);

    // Streamed responses key the content by an opaque block id (UUID) with an
    // empty final event \u2014 fall back to the first block value that carries the
    // playbook (a raw string, a { content } record, or the playbook object).
    if (contentRaw === undefined || contentRaw === null) {
      for (const v of Object.values(output)) {
        if (typeof v === 'string' && v.trim().length > 0) {
          contentRaw = v;
          break;
        }
        if (isRecord(v)) {
          if (typeof v.content === 'string' && v.content.trim().length > 0) {
            contentRaw = v.content;
          } else {
            contentRaw = v;
          }
          break;
        }
      }
    }

    let playbook: PlaybookContent | null = null;
    let playbookText: string | null = null;

    if (typeof contentRaw === 'string') {
      const cleaned = stripCodeFences(contentRaw);
      try {
        const p: unknown = JSON.parse(cleaned);
        if (isRecord(p)) playbook = p as PlaybookContent;
        else playbookText = cleaned;
      } catch {
        // Not strict JSON \u2014 return the raw content so the client renders it as rich text.
        playbookText = cleaned;
      }
    } else if (isRecord(contentRaw)) {
      playbook = contentRaw as PlaybookContent;
    }

    if (playbook) {
      return NextResponse.json({ playbook });
    }
    if (playbookText && playbookText.trim().length > 0) {
      return NextResponse.json({ playbookText });
    }
    return NextResponse.json({ error: 'Playbook could not be generated' }, { status: 502 });
  } catch {
    return NextResponse.json({ error: 'Playbook could not be generated' }, { status: 502 });
  }
}
