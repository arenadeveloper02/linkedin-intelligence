export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface AnalysisOutput {
  [key: string]: JsonValue;
}

export type AnalysisType = 'own-brand' | 'competitor';

export interface CompanyResult {
  id: string;
  name: string;
  logo: string | null;
  industry: string | null;
  location: string | null;
  description: string | null;
  summary: string | null;
  followers_count: number | null;
  profile_url: string | null;
  website: string | null;
}

export interface SelectedCompany {
  companyName: string;
  companyId: string;
  companyLogo: string | null;
  industry: string | null;
  location: string | null;
  followers: number | null;
  description: string | null;
  profileUrl: string | null;
  analysisType: AnalysisType;
}

export interface SaveAnalysisInput {
  companyName: string;
  companyId: string;
  companyLogo: string | null;
  industry: string | null;
  location: string | null;
  followers: number | null;
  profileUrl: string | null;
  analysisType: AnalysisType;
  output: AnalysisOutput;
}

export interface SaveAnalysisResult {
  success: boolean;
  id?: string;
  error?: string;
}

export interface HistoryItem {
  id: string;
  companyName: string;
  companyId: string;
  companyLogo: string | null;
  analysisType: AnalysisType;
  status: string;
  createdAt: string;
}

export interface SavedAnalysis {
  id: string;
  companyName: string;
  companyId: string;
  companyLogo: string | null;
  industry: string | null;
  location: string | null;
  followers: number | null;
  profileUrl: string | null;
  analysisType: AnalysisType;
  status: string;
  createdAt: string;
  output: AnalysisOutput;
}
