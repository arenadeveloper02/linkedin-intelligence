"use client"

import { useEffect, useState } from 'react';
import CompanyLogo from '@/components/CompanyLogo';
import { formatFollowers } from '@/lib/format';
import type {
  AnalysisOutput,
  ArenaRunEntry,
  CompanyResult,
  JsonValue,
  SelectedCompany,
} from '@/lib/types';

interface CompetitorModalProps {
  open: boolean;
  onClose: () => void;
  /** Called when the user picks a competitor listing; the comparison analysis
   *  runs and renders on the main screen (not inside this popup). */
  onSelect: (company: CompanyResult) => void;
  /** The current client whose report is open, shown at the top of the popup. */
  company: SelectedCompany | null;
  /** The Arena run id for the open report; used to detect a saved comparison. */
  runId: string | null;
  /** Called with the saved competitor output; the comparison renders on the main screen. */
  onOpenExisting: (output: AnalysisOutput) => void;
}

type ModalStatus = 'idle' | 'searching' | 'results' | 'empty' | 'error';

const EXAMPLES = ['Position2', 'Sambanova', 'Stripe'];

function existingCompetitorName(output: AnalysisOutput): string | null {
  const flat = output['getcompanyprofile.name'];
  if (typeof flat === 'string' && flat.trim().length > 0) return flat;
  const profile = output['getcompanyprofile'];
  if (profile && typeof profile === 'object' && !Array.isArray(profile)) {
    const n = (profile as { [key: string]: JsonValue })['name'];
    if (typeof n === 'string' && n.trim().length > 0) return n;
  }
  return null;
}

export default function CompetitorModal({
  open,
  onClose,
  onSelect,
  company,
  runId,
  onOpenExisting,
}: CompetitorModalProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [companies, setCompanies] = useState<CompanyResult[]>([]);
  // Saved competitor analysis for this run (if the comparison already exists).
  const [existingOutput, setExistingOutput] = useState<AnalysisOutput | null>(null);
  const [checking, setChecking] = useState(false);

  // When the modal opens, fetch ONLY this run via the single-run Arena
  // workflow (instead of loading the whole history). If a competitor analysis
  // was already generated, show its details with an option to open it on the
  // main screen.
  useEffect(() => {
    if (!open || !runId) return;
    let cancelled = false;
    setExistingOutput(null);
    setChecking(true);
    const load = async () => {
      try {
        const res = await fetch('/api/arena-run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: runId }),
        });
        if (!res.ok) return;
        const data = (await res.json()) as { runs?: ArenaRunEntry[] };
        const runs = Array.isArray(data.runs) ? data.runs : [];
        const run = runs.find((r) => r.id === runId) ?? runs[0];
        if (!run || cancelled) return;
        const out = run.competitorOutput;
        if (
          out &&
          typeof out === 'object' &&
          !Array.isArray(out) &&
          Object.keys(out).length > 0
        ) {
          setExistingOutput(out);
        }
      } catch {
        // ignore \u2014 the search flow below stays available
      } finally {
        if (!cancelled) setChecking(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [open, runId]);

  if (!open) return null;

  const runSearch = async (termInput?: string) => {
    const term = (termInput ?? query).trim();
    if (!term || status === 'searching') return;
    setStatus('searching');
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: term }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      const data = (await res.json()) as { companies?: CompanyResult[] };
      const list = Array.isArray(data.companies) ? data.companies : [];
      setCompanies(list);
      setStatus(list.length > 0 ? 'results' : 'empty');
    } catch {
      setStatus('error');
    }
  };

  const followers = company ? formatFollowers(company.followers) : '';
  const existingName = existingOutput ? existingCompetitorName(existingOutput) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 45, 51, 0.72)' }}
    >
      <div className="ds-card max-h-[85vh] w-full max-w-3xl overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="ds-chip">Compare with another</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ds-text-primary)]">
              Compare with another
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              Search for another company&rsquo;s LinkedIn page, pick the right match, and the
              comparison report opens on the main screen.
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

        {company ? (
          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <CompanyLogo name={company.companyName} logo={company.companyLogo} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-[var(--ds-text-primary)]">
                {company.companyName}
              </p>
              {company.profileUrl ? (
                <a
                  href={company.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[var(--ds-text-link)] hover:underline"
                >
                  View on LinkedIn {'\u2197'}
                </a>
              ) : null}
            </div>
            {followers ? <span className="pill">{followers}</span> : null}
          </div>
        ) : null}

        {checking ? <div className="progress-indeterminate mt-4" /> : null}

        {existingOutput ? (
          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-brand-surface,#F3F8FE)] p-4">
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--ds-text-primary)]">
                {existingName
                  ? `Comparison with ${existingName} is ready`
                  : 'A comparison already exists for this run'}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--ds-text-secondary)]">
                A competitor analysis was already generated for this analysis run. Open it to view
                it on the main screen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenExisting(existingOutput)}
              className="btn-gradient shrink-0"
            >
              Open
            </button>
          </div>
        ) : null}

        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-[var(--ds-border-default)] bg-white p-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                void runSearch();
              }
            }}
            placeholder="Competitor company name"
            disabled={status === 'searching'}
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-[var(--ds-text-primary)] outline-none placeholder:text-[var(--ds-grey-400)] disabled:opacity-60"
          />
          <button
            type="button"
            onClick={() => void runSearch()}
            disabled={status === 'searching' || !query.trim()}
            className="btn-gradient shrink-0"
          >
            {status === 'searching' ? 'Searching\u2026' : 'Search'}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[var(--ds-text-tertiary)]">Try:</span>
          {EXAMPLES.map((name) => (
            <button
              key={name}
              type="button"
              disabled={status === 'searching'}
              onClick={() => {
                setQuery(name);
                void runSearch(name);
              }}
              className="pill transition hover:bg-[var(--ds-brand-surface,#F3F8FE)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {name}
            </button>
          ))}
        </div>

        {status === 'searching' ? <div className="progress-indeterminate mt-4" /> : null}

        {status === 'error' ? (
          <p className="mt-4 text-sm font-medium text-[var(--ds-text-error)]">
            Unable to search companies. Please try again.
          </p>
        ) : null}

        {status === 'empty' ? (
          <p className="mt-4 text-sm text-[var(--ds-text-secondary)]">
            No matching companies found. Try a different name.
          </p>
        ) : null}

        {status === 'results' ? (
          <div className="mt-5 space-y-3">
            {companies.map((c, index) => {
              const meta = [c.industry, c.location].filter(Boolean).join(' \u00b7 ');
              const cFollowers = formatFollowers(c.followers_count);
              return (
                <div
                  key={`${c.id || 'no-id'}-${index}`}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4"
                >
                  <CompanyLogo name={c.name} logo={c.logo} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[var(--ds-text-primary)]">{c.name}</p>
                    {meta ? (
                      <p className="text-xs text-[var(--ds-text-tertiary)]">{meta}</p>
                    ) : null}
                  </div>
                  {cFollowers ? <span className="pill">{cFollowers}</span> : null}
                  <button
                    type="button"
                    disabled={!c.id}
                    onClick={() => onSelect(c)}
                    className="btn-gradient"
                  >
                    Compare with another
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
