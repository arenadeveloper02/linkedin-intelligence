"use client"

import { useState } from 'react';
import CompanyLogo from '@/components/CompanyLogo';
import { formatFollowers } from '@/lib/format';
import type { CompanyResult } from '@/lib/types';

interface CompetitorModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (company: CompanyResult) => void;
}

type ModalStatus = 'idle' | 'searching' | 'results' | 'empty' | 'error';

export default function CompetitorModal({ open, onClose, onSelect }: CompetitorModalProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [companies, setCompanies] = useState<CompanyResult[]>([]);

  if (!open) return null;

  const runSearch = async () => {
    const term = query.trim();
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 45, 51, 0.72)' }}
    >
      <div className="ds-card max-h-[85vh] w-full max-w-2xl overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="ds-chip">Competitor Analysis</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ds-text-primary)]">
              Analyze a competitor
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              Search for a competitor&apos;s LinkedIn company page, pick the right match, and
              Watchtower will run the same intelligence analysis linked to this report.
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

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
                    onClick={() => onSelect(c)}
                    className="btn-gradient"
                  >
                    Analyze competitor
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
