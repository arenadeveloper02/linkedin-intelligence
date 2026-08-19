import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COMPARE_WORKFLOW_ID, executeWorkflow, extractOutput } from '@/lib/arena-api';
import { getArenaEmailId } from '@/lib/arena-email';

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

  if (!id) {
    return NextResponse.json({ error: 'Run id is required.' }, { status: 400 });
  }

  const email = await getArenaEmailId();
  if (!email) {
    return NextResponse.json({ error: 'Missing Arena email id' }, { status: 401 });
  }

  try {
    // Payload matches the documented compare workflow API exactly:
    // { email, id, stream: true, selectedOutputs: ['compareagent.content'], ... }
    const parsed = await executeWorkflow(COMPARE_WORKFLOW_ID, {
      email,
      id,
      stream: true,
      selectedOutputs: ['compareagent.content'],
      includeThinking: false,
      includeToolCalls: false,
    });
    const output = extractOutput(parsed);
    // The workflow may return the content at output.content, under the
    // namespaced key, or nested inside a compareagent block — map all three.
    const agentBlock = output.compareagent;
    let contentRaw: unknown =
      output.content ??
      output['compareagent.content'] ??
      (isRecord(agentBlock) ? agentBlock.content : undefined);

    // Streamed responses key the content by an opaque block id (UUID) with an
    // empty final event — fall back to the first block value that carries the
    // comparison (a raw string or a { content } record).
    if (contentRaw === undefined || contentRaw === null) {
      for (const v of Object.values(output)) {
        if (typeof v === 'string' && v.trim().length > 0) {
          contentRaw = v;
          break;
        }
        if (isRecord(v) && typeof v.content === 'string' && v.content.trim().length > 0) {
          contentRaw = v.content;
          break;
        }
      }
    }

    const compareText = typeof contentRaw === 'string' ? contentRaw.trim() : '';
    if (compareText.length > 0) {
      return NextResponse.json({ compareText });
    }
    return NextResponse.json({ error: 'Comparison could not be generated' }, { status: 502 });
  } catch {
    return NextResponse.json({ error: 'Comparison could not be generated' }, { status: 502 });
  }
}
