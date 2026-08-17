'use server';

import { prisma } from '@/lib/prisma';
import { getArenaEmailId } from '@/lib/arena-email';
import type {
  AnalysisOutput,
  HistoryItem,
  SaveAnalysisInput,
  SaveAnalysisResult,
  SavedAnalysis,
} from '@/lib/types';

export async function saveAnalysis(input: SaveAnalysisInput): Promise<SaveAnalysisResult> {
  try {
    const emailId = await getArenaEmailId();
    if (!emailId) return { success: false, error: 'Missing Arena email id' };
    if (!input.companyId || !input.companyName) {
      return { success: false, error: 'Missing company details' };
    }
    const record = await prisma.analysis.create({
      data: {
        emailId,
        companyId: input.companyId,
        companyName: input.companyName,
        companyLogo: input.companyLogo,
        industry: input.industry,
        location: input.location,
        followers: input.followers,
        profileUrl: input.profileUrl,
        analysisType: input.analysisType,
        status: 'completed',
        output: JSON.stringify(input.output ?? {}),
      },
    });
    return { success: true, id: record.id };
  } catch {
    return { success: false, error: 'Failed to save analysis' };
  }
}

export async function getHistory(): Promise<HistoryItem[]> {
  const emailId = await getArenaEmailId();
  if (!emailId) return [];
  const rows = await prisma.analysis.findMany({
    where: { emailId },
    orderBy: { createdAt: 'desc' },
    take: 100,
  });
  return rows.map((r) => ({
    id: r.id,
    companyName: r.companyName,
    companyId: r.companyId,
    companyLogo: r.companyLogo,
    analysisType: r.analysisType === 'competitor' ? 'competitor' : 'own-brand',
    status: r.status,
    createdAt: r.createdAt.toISOString(),
  }));
}

export async function getAnalysisById(id: string): Promise<SavedAnalysis | null> {
  const emailId = await getArenaEmailId();
  if (!emailId) return null;
  const r = await prisma.analysis.findFirst({ where: { id, emailId } });
  if (!r) return null;

  let output: AnalysisOutput = {};
  try {
    const parsed: unknown = JSON.parse(r.output);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      output = parsed as AnalysisOutput;
    }
  } catch {
    output = {};
  }

  return {
    id: r.id,
    companyName: r.companyName,
    companyId: r.companyId,
    companyLogo: r.companyLogo,
    industry: r.industry,
    location: r.location,
    followers: r.followers,
    profileUrl: r.profileUrl,
    analysisType: r.analysisType === 'competitor' ? 'competitor' : 'own-brand',
    status: r.status,
    createdAt: r.createdAt.toISOString(),
    output,
  };
}
