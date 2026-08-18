import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  analysisWorkflows,
  executeWorkflow,
  extractOutput,
  normalizeAnalysisOutput,
} from '@/lib/arena-api';
import { getArenaEmailId } from '@/lib/arena-email';

export const maxDuration = 300;

const OWN_BRAND_OUTPUTS = [
  'strategyagent.strategy',
  'strategyagent.personas',
  'strategyagent.hookLibrary',
  'strategyagent.ctaLibrary',
  'strategyagent.audienceDetail',
  'contentcreativeagent.content',
  'contentcreativeagent.creative',
  'contentcreativeagent.engagement',
  'contentcreativeagent.topicClusters',
  'messagingagent.company',
  'messagingagent.messaging',
  'messagingagent.stats',
  'messagingagent.summary',
  'creativeinsightagent.imageryTypes',
  'creativeinsightagent.recommendations',
  'creativeinsightagent.observations',
  'creativeinsightagent.textStyle',
  'competitiveagent.campaigns',
  'competitiveagent.competitive',
  'competitiveagent.launches',
  'competitiveagent.messagingEvolution',
  'competitiveagent.recommendations',
  'competitiveagent.scorecard',
  'competitiveagent.scorecardOverall',
  'getcompanyprofile.id',
  'getcompanyprofile.name',
  'getcompanyprofile.description',
  'getcompanyprofile.public_identifier',
  'getcompanyprofile.profile_url',
  'getcompanyprofile.followers_count',
  'getcompanyprofile.employee_count',
  'getcompanyprofile.website',
  'getcompanyprofile.logo',
  'getcompanyprofile.profile',
  'getcompanypost.items',
];

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
  const companyId = typeof payload.companyId === 'string' ? payload.companyId.trim() : '';
  const analysisType = payload.analysisType === 'competitor' ? 'competitor' : 'own-brand';
  const parentId = typeof payload.parentId === 'string' ? payload.parentId.trim() : '';

  if (!companyName || !companyId) {
    return NextResponse.json(
      { error: 'Company name and company ID are required.' },
      { status: 400 },
    );
  }

  const workflowId =
    analysisType === 'competitor' ? analysisWorkflows.competitor : analysisWorkflows.ownBrand;

  if (!workflowId) {
    return NextResponse.json(
      { error: 'Competitor analysis workflow is not configured yet.' },
      { status: 501 },
    );
  }

  const email = (await getArenaEmailId()) ?? '';

  // Per the workflow contract: OWN runs send type=OWN, isCompetitor=false and
  // an empty id; COMPETITOR runs send type=COMPETITOR, isCompetitor=true and
  // the id of the previous (own-brand) run so both runs are linked.
  const body: Record<string, unknown> = {
    companyName,
    companyId,
    email,
    type: analysisType === 'competitor' ? 'COMPETITOR' : 'OWN',
    isCompetitor: analysisType === 'competitor',
    id: analysisType === 'competitor' ? parentId : '',
    stream: true,
    selectedOutputs: OWN_BRAND_OUTPUTS,
    includeThinking: false,
    includeToolCalls: false,
  };

  try {
    const parsed = await executeWorkflow(workflowId, body);
    const output = normalizeAnalysisOutput(extractOutput(parsed));
    return NextResponse.json({ output });
  } catch {
    return NextResponse.json({ error: 'Analysis could not be completed' }, { status: 502 });
  }
}
