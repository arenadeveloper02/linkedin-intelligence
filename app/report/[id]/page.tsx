import { notFound } from 'next/navigation';
import { getAnalysisById } from '@/lib/actions';
import ReportDashboard from '@/components/ReportDashboard';
import type { SelectedCompany } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const analysis = await getAnalysisById(id);
  if (!analysis) notFound();

  const company: SelectedCompany = {
    companyName: analysis.companyName,
    companyId: analysis.companyId,
    companyLogo: analysis.companyLogo,
    industry: analysis.industry,
    location: analysis.location,
    followers: analysis.followers,
    description: null,
    profileUrl: analysis.profileUrl,
    analysisType: analysis.analysisType,
  };

  return <ReportDashboard company={company} output={analysis.output} />;
}
