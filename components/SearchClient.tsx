"use client"

import { useState } from 'react';
import AnalysisProgress from '@/components/AnalysisProgress';
import CompanyLogo from '@/components/CompanyLogo';
import CompanyResults from '@/components/CompanyResults';
import CompetitorModal from '@/components/CompetitorModal';
import PlaybookModal from '@/components/PlaybookModal';
import ReportDashboard from '@/components/ReportDashboard';
import { saveAnalysis } from '@/lib/actions';
import { formatDate } from '@/lib/format';
import type {
  AnalysisOutput,
  ArenaRunEntry,
  CompanyResult,
  JsonValue,
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

function summaryPreview(run: ArenaRunEntry): string | null {
  const s: JsonValue | undefined = run.output['messagingagent.summary'];
  if (typeof s === 'string') return s;
  if (s && typeof s === 'object' && !Array.isArray(s)) {
    const t = s.text;
    if (typeof t === 'string') return t;
  }
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
    setShowCompetitorModal(false);
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

  if (view === 'report' && selected && report) {
    return (
      <>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 px-6 pt-6">
          <button
            type="button"
            onClick={() => setShowPlaybookModal(true)}
            className="btn-secondary"
          >
            Playbook
          </button>
          <button
            type="button"
            onClick={() => setShowCompetitorModal(true)}
            className="btn-gradient"
          >
            Competitor Analysis
          </button>
        </div>
        <ReportDashboard company={selected} output={report} onBack={resetToSearch} />
        <CompetitorModal
          open={showCompetitorModal}
          onClose={() => setShowCompetitorModal(false)}
          onSelect={handleCompetitorSelect}
        />
        <PlaybookModal
          open={showPlaybookModal}
          onClose={() => setShowPlaybookModal(false)}
          runId={runId}
          hasCompetitor={hasCompetitor}
        />
      </>
    );
  }

  if (view === 'analysis-error' && selected) {
    return (
      <main className="mx-auto max-w-xl px-6 py-16">
        <div className="ds-card border-[var(--ds-error-300)] text-center">
          <h2 className="text-lg font-semibold text-[var(--ds-text-primary)]">
            Analysis could not be completed
          </h2>
          <p className="mt-2 text-sm text-[var(--ds-text-secondary)]">
            Something went wrong while building the intelligence report for {selected.companyName}.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => void runAnalysis(selected, runId)}
              className="btn-gradient"
            >
              Retry analysis
            </button>
            <button type="button" onClick={() => setView('results')} className="btn-secondary">
              Back to company selection
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (view === 'competitor-unavailable') {
    return (
      <main className="mx-auto max-w-xl px-6 py-16">
        <div className="ds-card text-center">
          <span className="ds-chip">Competitor Analysis</span>
          <h2 className="mt-3 text-lg font-semibold text-[var(--ds-text-primary)]">
            Competitor analysis workflow is not configured yet.
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
            The competitor intelligence pipeline can be plugged in independently. Until then, run an
            Own Brand Analysis on the selected company.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setView('results')} className="btn-gradient">
              Back to company selection
            </button>
            <button type="button" onClick={resetToSearch} className="btn-secondary">
              Back to search
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (view === 'history') {
    return (
      <main className="mx-auto max-w-4xl px-6 py-10">
        <button
          type="button"
          onClick={() => setView('search')}
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

        {historyStatus === 'loading' ? (
          <div className="mt-8 space-y-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="ds-card">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-10 w-10" />
                  <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-1/3" />
                    <div className="skeleton h-3 w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : historyStatus === 'error' ? (
          <div className="ds-card mt-8 border-[var(--ds-error-300)] text-center">
            <h2 className="text-base font-semibold text-[var(--ds-text-primary)]">
              Unable to load history
            </h2>
            <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
              We couldn&apos;t retrieve your previous runs. Please try again.
            </p>
            <button type="button" onClick={openHistory} className="btn-secondary mt-4">
              Try again
            </button>
          </div>
        ) : historyRuns.length === 0 ? (
          <div className="ds-card mt-8 text-center">
            <h2 className="text-base font-semibold text-[var(--ds-text-primary)]">
              No previous runs yet
            </h2>
            <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
              Run your first LinkedIn intelligence analysis to see it here.
            </p>
            <button type="button" onClick={() => setView('search')} className="btn-gradient mt-5">
              Start a search
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {historyRuns.map((run) => {
              const preview = summaryPreview(run);
              return (
                <div key={run.id} className="ds-card">
                  <div className="flex flex-wrap items-center gap-4">
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
                    </div>
                    <span className="ds-chip">
                      {run.type === 'OWN_BRANDING' ? 'Own Brand' : run.type}
                    </span>
                    {run.hasCompetitor ? <span className="pill">Competitor data</span> : null}
                    <button
                      type="button"
                      onClick={() => viewHistoryEntry(run)}
                      className="btn-secondary"
                    >
                      View
                    </button>
                  </div>
                  {preview ? (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
                      {preview}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </main>
    );
  }

  const searching = view === 'searching';

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex justify-end">
        <button type="button" onClick={openHistory} disabled={searching} className="btn-secondary">
          History
        </button>
      </div>

      <div className="text-center">
        <span className="ds-chip">Organic LinkedIn intelligence</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[var(--ds-text-primary)] sm:text-5xl">
          Decode any company&apos;s LinkedIn playbook
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--ds-text-secondary)]">
          Type a company name. Watchtower resolves the profile, analyzes organic LinkedIn activity,
          and turns it into messaging, creative, engagement, audience, and strategic intelligence.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-2xl border border-[var(--ds-border-default)] bg-white p-2 shadow-[var(--ds-elevation-md)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="ml-2 h-5 w-5 shrink-0 text-[var(--ds-text-tertiary)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          placeholder="Company name"
          disabled={searching}
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-[var(--ds-text-primary)] outline-none placeholder:text-[var(--ds-grey-400)] disabled:opacity-60"
        />
        <button
          type="button"
          onClick={() => void runSearch()}
          disabled={searching || !query.trim()}
          className="btn-gradient shrink-0"
        >
          {searching ? 'Searching LinkedIn\u2026' : 'Analyze'}
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-[var(--ds-text-tertiary)]">Try:</span>
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            disabled={searching}
            onClick={() => setQuery(ex)}
            className="pill transition-colors hover:bg-[var(--ds-brand-surface)] hover:text-[var(--ds-brand)] disabled:opacity-50"
          >
            {ex}
          </button>
        ))}
      </div>

      {view === 'search-error' ? (
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="ds-card border-[var(--ds-error-300)] text-center">
            <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
              Unable to search companies
            </h3>
            <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
              We couldn&apos;t retrieve matching LinkedIn companies. Please try again.
            </p>
            <button
              type="button"
              onClick={() => void runSearch()}
              className="btn-secondary mt-4"
            >
              Try again
            </button>
          </div>
        </div>
      ) : null}

      {view === 'empty' ? (
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="ds-card text-center">
            <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
              No matching companies found
            </h3>
            <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
              Try a different company name, LinkedIn URL, or numeric company ID.
            </p>
            <button type="button" onClick={resetToSearch} className="btn-secondary mt-4">
              Back to search
            </button>
          </div>
        </div>
      ) : null}

      {searching ? (
        <div className="mt-12">
          <p className="text-center text-sm font-medium text-[var(--ds-text-secondary)]">
            Finding matching LinkedIn companies&hellip;
          </p>
          <div className="progress-indeterminate mx-auto mt-4 max-w-md" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="ds-card">
                <div className="flex gap-4">
                  <div className="skeleton h-12 w-12" />
                  <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-2/3" />
                    <div className="skeleton h-3 w-1/3" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="skeleton h-3 w-full" />
                  <div className="skeleton h-3 w-5/6" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="skeleton h-8 w-24 rounded-full" />
                  <div className="skeleton ml-auto h-9 w-40 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : view === 'search' ? (
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {INFO_CARDS.map((card) => (
            <div key={card.title} className="ds-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ds-brand-surface)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="var(--ds-brand)"
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
      ) : null}
    </main>
  );
}
