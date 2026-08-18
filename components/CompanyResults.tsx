"use client"

import CompanyLogo from '@/components/CompanyLogo';
import { formatFollowers } from '@/lib/format';
import type { CompanyResult } from '@/lib/types';

interface CompanyResultsProps {
  companies: CompanyResult[];
  onBack: () => void;
  onAnalyze: (company: CompanyResult) => void;
}

export default function CompanyResults({ companies, onBack, onAnalyze }: CompanyResultsProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
      >
        &larr; Back to search
      </button>

      <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[var(--ds-text-tertiary)]">
        SELECT THE RIGHT COMPANY
      </p>
      <h2 className="mt-1 text-2xl font-semibold text-[var(--ds-text-primary)]">
        We found {companies.length} matching {companies.length === 1 ? 'company' : 'companies'}
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {companies.map((c, index) => {
          const desc = c.description ?? c.summary;
          const meta = [c.industry, c.location].filter(Boolean).join(' \u00b7 ');
          const followers = formatFollowers(c.followers_count);
          return (
            <div key={`${c.id || 'no-id'}-${index}`} className="ds-card flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <CompanyLogo name={c.name} logo={c.logo} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-lg font-semibold text-[var(--ds-text-primary)]">
                      {c.name}
                    </h3>
                    {c.profile_url ? (
                      <a
                        href={c.profile_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open LinkedIn profile"
                        className="shrink-0 text-[var(--ds-text-link)] hover:text-[var(--ds-brand-hover)]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.16h4.52V23H.24V8.16zM8.34 8.16h4.33v2.03h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.52v-6.57c0-1.57-.03-3.58-2.18-3.58-2.19 0-2.52 1.7-2.52 3.46V23H8.34V8.16z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                  {meta ? (
                    <p className="mt-0.5 text-sm text-[var(--ds-text-secondary)]">{meta}</p>
                  ) : null}
                </div>
              </div>

              {desc ? (
                <p className="line-clamp-3 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {desc}
                </p>
              ) : null}

              <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--ds-border-subtle)] pt-4">
                {followers ? <span className="pill">{followers}</span> : null}
                <div className="ml-auto flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={!c.id}
                    onClick={() => onAnalyze(c)}
                    className="btn-gradient"
                  >
                    Analyze
                  </button>
                </div>
              </div>
              {!c.id ? (
                <p className="text-xs font-medium text-[var(--ds-text-error)]">
                  Company ID unavailable
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </main>
  );
}
