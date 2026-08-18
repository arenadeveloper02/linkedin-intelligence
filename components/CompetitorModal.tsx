"use client"

import { useState } from 'react';
import CompanyLogo from '@/components/CompanyLogo';
import { DataRenderer, hasContent, humanizeKey } from '@/components/DataRenderer';
import { formatFollowers } from '@/lib/format';
import type { AnalysisOutput, ArenaRunEntry, CompanyResult } from '@/lib/types';

interface CompetitorModalProps {
  open: boolean;
  onClose: () => void;
  /** Kept for backward compatibility with existing callers; the modal now runs
   *  the competitor analysis itself and renders the result in the popup only. */
  onSelect?: (company: CompanyResult) => void;
  /** Arena run id of the previous (own-brand) analysis; forwarded to the
   *  competitor workflow as `id` so the runs are linked. */
  parentId?: string | null;
}

type ModalStatus =
  | 'idle'
  | 'searching'
  | 'results'
  | 'empty'
  | 'error'
  | 'analyzing'
  | 'report'
  | 'analysis-error';

const EXAMPLES = ['Position2', 'Sambanova', 'Stripe'];

export default function CompetitorModal({ open, onClose, parentId }: CompetitorModalProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [companies, setCompanies] = useState<CompanyResult[]>([]);
  const [selected, setSelected] = useState<CompanyResult | null>(null);
  const [report, setReport] = useState<AnalysisOutput | null>(null);

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

  /**
   * Resolves the parent (own-brand) run id to link the competitor run to.
   * Prefers the `parentId` prop; when it is absent, falls back to the most
   * recent run from the Arena history workflow.
   */
  const resolveParentId = async (): Promise<string> => {
    if (parentId) return parentId;
    try {
      const res = await fetch('/api/arena-history');
      if (!res.ok) return '';
      const data = (await res.json()) as { runs?: ArenaRunEntry[] };
      const runs = Array.isArray(data.runs) ? data.runs : [];
      return runs[0]?.id ?? '';
    } catch {
      return '';
    }
  };

  const runAnalysis = async (company: CompanyResult) => {
    if (status === 'analyzing') return;
    setSelected(company);
    setReport(null);
    setStatus('analyzing');
    try {
      const effectiveParentId = await resolveParentId();
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: company.name,
          companyId: company.id,
          analysisType: 'competitor',
          parentId: effectiveParentId,
        }),
      });
      if (!res.ok) {
        setStatus('analysis-error');
        return;
      }
      const data = (await res.json()) as { output?: AnalysisOutput };
      if (!data.output || Object.keys(data.output).length === 0) {
        setStatus('analysis-error');
        return;
      }
      setReport(data.output);
      setStatus('report');
    } catch {
      setStatus('analysis-error');
    }
  };

  const sections = report
    ? Object.entries(report).filter(
        ([k, v]) =>
          hasContent(v) && !k.startsWith('getcompanyprofile.') && !k.startsWith('getcompanypost.'),
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 45, 51, 0.72)' }}
    >
      <div className="ds-card max-h-[85vh] w-full max-w-3xl overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="ds-chip">Competitor Analysis</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ds-text-primary)]">
              {status === 'report' && selected
                ? `Competitor report \u00b7 ${selected.name}`
                : 'Analyze a competitor'}
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              {status === 'report' || status === 'analyzing'
                ? 'The competitor intelligence stays inside this panel and does not replace your main report.'
                : 'Search for a competitor\u2019s LinkedIn company page, pick the right match, and Watchtower will run the same intelligence analysis linked to this report.'}
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

        {status !== 'analyzing' && status !== 'report' ? (
          <>
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
          </>
        ) : null}

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
              const followers = formatFollowers(c.followers_count);
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
                  {followers ? <span className="pill">{followers}</span> : null}
                  <button
                    type="button"
                    disabled={!c.id}
                    onClick={() => void runAnalysis(c)}
                    className="btn-gradient"
                  >
                    Analyze competitor
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}

        {status === 'analyzing' && selected ? (
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
              <CompanyLogo name={selected.name} logo={selected.logo} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-[var(--ds-text-primary)]">{selected.name}</p>
                <p className="text-xs text-[var(--ds-text-tertiary)]">
                  Running competitor analysis{'\u2026'} this can take a few minutes.
                </p>
              </div>
            </div>
            <div className="progress-indeterminate mt-4" />
          </div>
        ) : null}

        {status === 'analysis-error' ? (
          <div className="mt-4">
            <p className="text-sm font-medium text-[var(--ds-text-error)]">
              The competitor analysis could not be completed. Please try again.
            </p>
            <button
              type="button"
              onClick={() => {
                if (selected) void runAnalysis(selected);
              }}
              disabled={!selected}
              className="btn-gradient mt-3"
            >
              Retry analysis
            </button>
          </div>
        ) : null}

        {status === 'report' && selected ? (
          <div className="mt-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
              <CompanyLogo name={selected.name} logo={selected.logo} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-[var(--ds-text-primary)]">{selected.name}</p>
                <p className="text-xs text-[var(--ds-text-tertiary)]">
                  {[selected.industry, selected.location].filter(Boolean).join(' \u00b7 ')}
                </p>
              </div>
              {formatFollowers(selected.followers_count) ? (
                <span className="pill">{formatFollowers(selected.followers_count)}</span>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  setReport(null);
                  setStatus(companies.length > 0 ? 'results' : 'idle');
                }}
                className="btn-secondary"
              >
                Back to results
              </button>
            </div>

            {sections.length === 0 ? (
              <p className="text-sm text-[var(--ds-text-secondary)]">
                The analysis completed but returned no readable sections.
              </p>
            ) : null}

            {sections.map(([k, v]) => {
              const dot = k.indexOf('.');
              const title =
                dot > 0
                  ? `${humanizeKey(k.slice(0, dot).replace(/agent$/, ''))} \u00b7 ${humanizeKey(k.slice(dot + 1))}`
                  : humanizeKey(k);
              return (
                <section
                  key={k}
                  className="rounded-xl border border-[var(--ds-border-default)] bg-white p-4"
                >
                  <h3 className="mb-3 text-sm font-semibold text-[var(--ds-text-primary)]">{title}</h3>
                  <DataRenderer value={v} />
                </section>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
