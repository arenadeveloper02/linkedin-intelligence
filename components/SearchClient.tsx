"use client"

import { useState } from 'react';
import AnalysisProgress from '@/components/AnalysisProgress';
import CompanyLogo from '@/components/CompanyLogo';
import CompanyResults from '@/components/CompanyResults';
import CompetitorModal from '@/components/CompetitorModal';
import PlaybookModal from '@/components/PlaybookModal';
import PlaybookView from '@/components/PlaybookView';
import ReportDashboard from '@/components/ReportDashboard';
import { saveAnalysis } from '@/lib/actions';
import { formatDate } from '@/lib/format';
import type {
  AnalysisOutput,
  ArenaRunEntry,
  CompanyResult,
  JsonValue,
  PlaybookResult,
  SelectedCompany,
} from '@/lib/types';

type View =
  | 'search'
  | 'searching'
  | 'results'
  | 'empty'
  | 'search-error'
  | 'analyzing'
  | 'analysis-error'
  | 'competitor-unavailable'
  | 'report'
  | 'playbook'
  | 'history';

const EXAMPLES = ['Position2', 'Sambanova', 'Stripe'];

const INFO_CARDS = [
  {
    title: 'Messaging & creative decode',
    body: 'Themes, hooks, CTAs, tone, formats, imagery, and caption mechanics \u2014 everything a company ships on organic LinkedIn.',
    icon: 'M8 10h8M8 14h5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  },
  {
    title: 'Engagement forensics',
    body: 'Best and worst posts, cadence, posting patterns, reaction breakdowns, engagement behavior, and trend lines.',
    icon: 'M4 19V5M4 19h16M8 15l3-4 3 2 4-6',
  },
  {
    title: 'Actionable playbook',
    body: 'A prioritized strategic plan with quick wins, content opportunities, campaign ideas, messaging gaps, and recommendations.',
    icon: 'M9 12l2 2 4-5M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z',
  },
];

/** Snapshot of the initial (own-brand) report so the user can navigate back
 *  to it after viewing a competitor comparison on the main screen. */
interface OwnReportSnapshot {
  company: SelectedCompany;
  report: AnalysisOutput;
  runId: string | null;
  hasCompetitor: boolean;
}

function summaryPreview(run: ArenaRunEntry): string | null {
  const s: JsonValue | undefined = run.output['messagingagent.summary'];
  if (typeof s === 'string') return s;
  if (s && typeof s === 'object' && !Array.isArray(s)) {
    const t = s.text;
    if (typeof t === 'string') return t;
  }
  return null;
}

function pickProfileField(output: AnalysisOutput, field: string): JsonValue | undefined {
  const flat = output[`getcompanyprofile.${field}`];
  if (flat !== undefined) return flat;
  const profile = output['getcompanyprofile'];
  if (profile && typeof profile === 'object' && !Array.isArray(profile)) {
    return (profile as { [key: string]: JsonValue })[field];
  }
  return undefined;
}

function strOrNull(v: JsonValue | undefined): string | null {
  return typeof v === 'string' && v.trim().length > 0 ? v : null;
}

function numOrNull(v: JsonValue | undefined): number | null {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() && Number.isFinite(Number(v))) return Number(v);
  return null;
}

export default function SearchClient() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<View>('search');
  const [companies, setCompanies] = useState<CompanyResult[]>([]);
  const [selected, setSelected] = useState<SelectedCompany | null>(null);
  const [report, setReport] = useState<AnalysisOutput | null>(null);
  // The Arena run id for the current report; required for Playbook and
  // Competitor Analysis calls. Resolved from the remote history workflow.
  const [runId, setRunId] = useState<string | null>(null);
  const [hasCompetitor, setHasCompetitor] = useState(false);
  // History is persisted server-side by the Arena history workflow (keyed by
  // the visitor's Arena email id), so it survives page reloads.
  const [historyRuns, setHistoryRuns] = useState<ArenaRunEntry[]>([]);
  const [historyStatus, setHistoryStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    'idle',
  );
  const [showCompetitorModal, setShowCompetitorModal] = useState(false);
  const [showPlaybookModal, setShowPlaybookModal] = useState(false);
  // Snapshot of the initial output so the competitor comparison (shown on the
  // main screen) offers a back option to the original report.
  const [ownSnapshot, setOwnSnapshot] = useState<OwnReportSnapshot | null>(null);
  // Playbook result shown on the main screen with a back option to the report.
  const [playbookResult, setPlaybookResult] = useState<PlaybookResult | null>(null);
  // Saved comparison report text ('compare' key from the Arena history) for
  // the currently open competitor report; used by the "Comparison report"
  // button on the report dashboard.
  const [savedCompare, setSavedCompare] = useState<string | null>(null);

  const runSearch = async () => {
    const term = query.trim();
    if (!term || view === 'searching') return;
    setView('searching');
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: term }),
      });
      if (!res.ok) {
        setView('search-error');
        return;
      }
      const data = (await res.json()) as { companies?: CompanyResult[] };
      const list = Array.isArray(data.companies) ? data.companies : [];
      setCompanies(list);
      setView(list.length > 0 ? 'results' : 'empty');
    } catch {
      setView('search-error');
    }
  };

  const resolveRunId = async (companyId: string) => {
    try {
      const res = await fetch('/api/arena-history');
      if (!res.ok) return;
      const data = (await res.json()) as { runs?: ArenaRunEntry[] };
      const runs = Array.isArray(data.runs) ? data.runs : [];
      const match = runs.find((r) => r.companyId === companyId) ?? runs[0];
      if (match) {
        setRunId(match.id);
        setHasCompetitor(match.hasCompetitor);
      }
    } catch {
      // run id stays unresolved; playbook/competitor linking will be limited
    }
  };

  const runAnalysis = async (sel: SelectedCompany, parentId?: string | null) => {
    setSelected(sel);
    setView('analyzing');
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: sel.companyName,
          companyId: sel.companyId,
          analysisType: sel.analysisType,
          parentId: parentId ?? undefined,
        }),
      });
      if (res.status === 501) {
        setView('competitor-unavailable');
        return;
      }
      if (!res.ok) {
        setView('analysis-error');
        return;
      }
      const data = (await res.json()) as { output?: AnalysisOutput };
      const output = data.output ?? {};
      setReport(output);
      setView('report');
      if (sel.analysisType === 'competitor') {
        setHasCompetitor(true);
      } else {
        setRunId(null);
        setHasCompetitor(false);
        void resolveRunId(sel.companyId);
      }
      void saveAnalysis({
        companyName: sel.companyName,
        companyId: sel.companyId,
        companyLogo: sel.companyLogo,
        industry: sel.industry,
        location: sel.location,
        followers: sel.followers,
        profileUrl: sel.profileUrl,
        analysisType: sel.analysisType,
        output,
      });
    } catch {
      setView('analysis-error');
    }
  };

  const handleAnalyze = (c: CompanyResult) => {
    if (!c.id) return;
    setOwnSnapshot(null);
    setPlaybookResult(null);
    setSavedCompare(null);
    void runAnalysis({
      companyName: c.name,
      companyId: c.id,
      companyLogo: c.logo,
      industry: c.industry,
      location: c.location,
      followers: c.followers_count,
      description: c.description ?? c.summary,
      profileUrl: c.profile_url,
      analysisType: 'own-brand',
    });
  };

  const handleCompetitorSelect = (c: CompanyResult) => {
    if (!c.id) return;
    // Snapshot the initial output so the user can navigate back to it after
    // the comparison renders on the main screen.
    if (selected && report) {
      setOwnSnapshot({ company: selected, report, runId, hasCompetitor });
    }
    setShowCompetitorModal(false);
    setSavedCompare(null);
    void runAnalysis(
      {
        companyName: c.name,
        companyId: c.id,
        companyLogo: c.logo,
        industry: c.industry,
        location: c.location,
        followers: c.followers_count,
        description: c.description ?? c.summary,
        profileUrl: c.profile_url,
        analysisType: 'competitor',
      },
      runId,
    );
  };

  // Opens an already-saved competitor comparison on the main screen (no new
  // analysis run) when the Arena history carries a competitorOutput. Any saved
  // comparison report text ('compare' key) is kept for the report's
  // "Comparison report" button.
  const handleOpenExistingCompetitor = (output: AnalysisOutput, compare: string | null) => {
    if (selected && report) {
      setOwnSnapshot({ company: selected, report, runId, hasCompetitor });
    }
    setShowCompetitorModal(false);
    setSelected({
      companyName: strOrNull(pickProfileField(output, 'name')) ?? 'Competitor',
      companyId: strOrNull(pickProfileField(output, 'id')) ?? '',
      companyLogo: strOrNull(pickProfileField(output, 'logo')),
      industry: strOrNull(pickProfileField(output, 'industry')),
      location: strOrNull(pickProfileField(output, 'location')),
      followers: numOrNull(
        pickProfileField(output, 'followers_count') ?? pickProfileField(output, 'followers'),
      ),
      description: null,
      profileUrl: strOrNull(
        pickProfileField(output, 'url') ?? pickProfileField(output, 'profile_url'),
      ),
      analysisType: 'competitor',
    });
    setReport(output);
    setHasCompetitor(true);
    setSavedCompare(compare);
    setView('report');
  };

  const backToOwnReport = () => {
    if (!ownSnapshot) return;
    setSelected(ownSnapshot.company);
    setReport(ownSnapshot.report);
    setRunId(ownSnapshot.runId);
    setHasCompetitor(ownSnapshot.hasCompetitor);
    setOwnSnapshot(null);
    setSavedCompare(null);
    setView('report');
  };

  const handlePlaybookResult = (result: PlaybookResult) => {
    setPlaybookResult(result);
    setShowPlaybookModal(false);
    setView('playbook');
  };

  const openHistory = () => {
    setView('history');
    setHistoryStatus('loading');
    void (async () => {
      try {
        const res = await fetch('/api/arena-history');
        if (!res.ok) {
          setHistoryStatus('error');
          return;
        }
        const data = (await res.json()) as { runs?: ArenaRunEntry[] };
        setHistoryRuns(Array.isArray(data.runs) ? data.runs : []);
        setHistoryStatus('ready');
      } catch {
        setHistoryStatus('error');
      }
    })();
  };

  const viewHistoryEntry = (run: ArenaRunEntry) => {
    setSelected({
      companyName: run.companyName,
      companyId: run.companyId,
      companyLogo: run.companyLogo,
      industry: null,
      location: null,
      followers: null,
      description: null,
      profileUrl: null,
      analysisType: 'own-brand',
    });
    setReport(run.output);
    setRunId(run.id);
    setHasCompetitor(run.hasCompetitor);
    setOwnSnapshot(null);
    setPlaybookResult(null);
    setSavedCompare(null);
    setShowCompetitorModal(false);
    setShowPlaybookModal(false);
    setView('report');
  };

  const resetToSearch = () => {
    setView('search');
    setSelected(null);
    setReport(null);
    setRunId(null);
    setHasCompetitor(false);
    setOwnSnapshot(null);
    setPlaybookResult(null);
    setSavedCompare(null);
    setShowCompetitorModal(false);
    setShowPlaybookModal(false);
  };

  if (view === 'results') {
    return (
      <CompanyResults companies={companies} onBack={resetToSearch} onAnalyze={handleAnalyze} />
    );
  }

  if (view === 'analyzing' && selected) {
    return <AnalysisProgress company={selected} />;
  }

  if (view === 'playbook' && playbookResult) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <button
          type="button"
          onClick={() => setView('report')}
          className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
        >
          &larr; Back to report
        </button>
        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[var(--ds-text-tertiary)]">
          PLAYBOOK
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-[var(--ds-text-primary)]">
          Strategic playbook{selected ? ` \u2014 ${selected.companyName}` : ''}
        </h1>
        <div className="ds-card mt-8">
          <PlaybookView
            playbook={playbookResult.playbook}
            playbookText={playbookResult.playbookText}
          />
        </div>
      </main>
    );
  }

  if (view === 'report' && selected && report) {
    return (
      <>
        <ReportDashboard
          company={selected}
          output={report}
          onBack={ownSnapshot ? backToOwnReport : resetToSearch}
          onRunCompetitor={
            selected.analysisType === 'own-brand' ? () => setShowCompetitorModal(true) : undefined
          }
          onGetPlaybook={() => setShowPlaybookModal(true)}
          runId={runId}
          savedCompare={savedCompare}
        />
        <CompetitorModal
          open={showCompetitorModal}
          onClose={() => setShowCompetitorModal(false)}
          onSelect={handleCompetitorSelect}
          company={selected}
          runId={runId}
          onOpenExisting={handleOpenExistingCompetitor}
        />
        <PlaybookModal
          open={showPlaybookModal}
          onClose={() => setShowPlaybookModal(false)}
          runId={runId}
          onResult={handlePlaybookResult}
        />
      </>
    );
  }

  if (view === 'history') {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <button
          type="button"
          onClick={resetToSearch}
          className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
        >
          &larr; Back to search
        </button>
        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[var(--ds-text-tertiary)]">
          HISTORY
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-[var(--ds-text-primary)]">
          Previous analyses
        </h1>

        {historyStatus === 'loading' ? <div className="progress-indeterminate mt-8" /> : null}

        {historyStatus === 'error' ? (
          <div className="ds-card mt-8">
            <p className="text-sm font-medium text-[var(--ds-text-error)]">
              Unable to load your history. Please try again.
            </p>
            <button type="button" onClick={openHistory} className="btn-secondary mt-4">
              Retry
            </button>
          </div>
        ) : null}

        {historyStatus === 'ready' && historyRuns.length === 0 ? (
          <div className="ds-card mt-8 text-center">
            <h2 className="text-base font-semibold text-[var(--ds-text-primary)]">
              No analyses yet
            </h2>
            <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
              Run your first LinkedIn intelligence report to see it here.
            </p>
            <button type="button" onClick={resetToSearch} className="btn-gradient mt-5">
              Start a search
            </button>
          </div>
        ) : null}

        {historyStatus === 'ready' && historyRuns.length > 0 ? (
          <div className="mt-8 space-y-4">
            {historyRuns.map((run) => {
              const preview = summaryPreview(run);
              return (
                <div key={run.id} className="ds-card flex flex-wrap items-center gap-4">
                  <CompanyLogo name={run.companyName} logo={run.companyLogo} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[var(--ds-text-primary)]">
                      {run.companyName}
                    </p>
                    {run.createdAt ? (
                      <p className="text-xs text-[var(--ds-text-tertiary)]">
                        {formatDate(run.createdAt)}
                      </p>
                    ) : null}
                    {preview ? (
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--ds-text-secondary)]">
                        {preview}
                      </p>
                    ) : null}
                  </div>
                  {run.hasCompetitor ? <span className="ds-chip">Competitor linked</span> : null}
                  <button
                    type="button"
                    onClick={() => viewHistoryEntry(run)}
                    className="btn-secondary"
                  >
                    Open report &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </main>
    );
  }

  const searching = view === 'searching';

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-center justify-between">
        <span className="ds-chip">LinkedIn Intelligence</span>
        <button type="button" onClick={openHistory} className="btn-secondary">
          History
        </button>
      </div>

      <h1 className="mt-8 text-3xl font-semibold leading-tight text-[var(--ds-text-primary)] md:text-4xl">
        Decode any company&rsquo;s LinkedIn playbook
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--ds-text-secondary)]">
        Search a company, run the analysis, and get messaging, content, creative, engagement,
        audience, and competitive intelligence with an actionable playbook.
      </p>

      <div className="mt-8 flex items-center gap-2 rounded-2xl border border-[var(--ds-border-default)] bg-white p-2 shadow-[var(--ds-elevation-sm)]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              void runSearch();
            }
          }}
          placeholder="Company name, e.g. Position2"
          disabled={searching}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-[var(--ds-text-primary)] outline-none placeholder:text-[var(--ds-grey-400)] disabled:opacity-60"
        />
        <button
          type="button"
          onClick={() => void runSearch()}
          disabled={searching || !query.trim()}
          className="btn-gradient shrink-0"
        >
          {searching ? 'Searching\u2026' : 'Search'}
        </button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-[var(--ds-text-tertiary)]">Try:</span>
        {EXAMPLES.map((name) => (
          <button
            key={name}
            type="button"
            disabled={searching}
            onClick={() => setQuery(name)}
            className="pill transition hover:bg-[var(--ds-brand-surface,#F3F8FE)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {name}
          </button>
        ))}
      </div>

      {searching ? <div className="progress-indeterminate mt-6" /> : null}

      {view === 'search-error' ? (
        <p className="mt-6 text-sm font-medium text-[var(--ds-text-error)]">
          Unable to search companies. Please try again.
        </p>
      ) : null}

      {view === 'empty' ? (
        <p className="mt-6 text-sm text-[var(--ds-text-secondary)]">
          No matching companies found. Try a different name.
        </p>
      ) : null}

      {view === 'analysis-error' ? (
        <p className="mt-6 text-sm font-medium text-[var(--ds-text-error)]">
          The analysis could not be completed. Please try again.
        </p>
      ) : null}

      {view === 'competitor-unavailable' ? (
        <p className="mt-6 text-sm font-medium text-[var(--ds-text-error)]">
          Competitor analysis is not configured yet.
        </p>
      ) : null}

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {INFO_CARDS.map((card) => (
          <div key={card.title} className="ds-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ds-brand-surface,#F3F8FE)]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="var(--ds-brand, #1A73E8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={card.icon} />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold text-[var(--ds-text-primary)]">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">{card.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
