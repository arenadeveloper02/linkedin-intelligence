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

/**
 * A single analysis run entry from the Arena history workflow.
 * History is persisted server-side by the Arena service (keyed by the
 * visitor's Arena email id), so it survives page reloads.
 */
export interface ArenaRunEntry {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo: string | null;
  createdAt: string;
  type: string;
  hasCompetitor: boolean;
  output: AnalysisOutput;
  /** Saved playbook summary for this run (raw text or JSON string), when already generated. */
  summary?: string | null;
  /** Saved competitor analysis output (namespaced) for this run, when a competitor analysis exists. */
  competitorOutput?: AnalysisOutput | null;
}

export type PlaybookSource = 'own' | 'competitor';

export interface PlaybookRecommendation {
  area?: string;
  action?: string;
  impact?: string;
  priority?: string;
}

export interface PlaybookCampaignIdea {
  name?: string;
  concept?: string;
  cadence?: string;
  cta?: string;
}

export interface PlaybookCadence {
  currentPostsPerWeek?: number;
  targetPostsPerWeek?: number;
  rationale?: string;
}

export interface PlaybookContent {
  headline?: string;
  quickWins?: string[];
  recommendations?: PlaybookRecommendation[];
  currentVsTarget?: PlaybookCadence;
  gaps?: string[];
  campaignIdeas?: PlaybookCampaignIdea[];
  activities?: string[];
  engagementPlays?: string[];
}

/** The generated (or previously saved) playbook payload shown on the main screen. */
export interface PlaybookResult {
  playbook: PlaybookContent | null;
  playbookText: string | null;
}
