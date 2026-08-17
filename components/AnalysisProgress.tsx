"use client"

import { useEffect, useState } from 'react';
import CompanyLogo from '@/components/CompanyLogo';
import type { SelectedCompany } from '@/lib/types';

const STAGES = [
  'Resolving company profile',
  'Collecting LinkedIn posts',
  'Analyzing messaging',
  'Evaluating content & creative',
  'Measuring engagement',
  'Mapping audience signals',
  'Detecting competitive patterns',
  'Building recommendations',
  'Creating strategic playbook',
];

interface AnalysisProgressProps {
  company: SelectedCompany;
}

export default function AnalysisProgress({ company }: AnalysisProgressProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((a) => Math.min(a + 1, STAGES.length - 1));
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="ds-card flex items-center gap-4">
        <CompanyLogo name={company.companyName} logo={company.companyLogo} size="lg" />
        <div>
          <p className="text-lg font-semibold text-[var(--ds-text-primary)]">{company.companyName}</p>
          <span className="ds-chip mt-1">
            {company.analysisType === 'competitor' ? 'Competitor Intelligence' : 'Own Brand Intelligence'}
          </span>
        </div>
      </div>

      <div className="ds-card mt-6">
        <h1 className="text-xl font-semibold text-[var(--ds-text-primary)]">
          Building LinkedIn Intelligence Report
        </h1>
        <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
          Analyzing messaging, content, creative patterns, audience signals, engagement, competitive
          positioning, and strategic opportunities.
        </p>
        <div className="progress-indeterminate mt-5" />

        <ul className="mt-6 space-y-3">
          {STAGES.map((stage, i) => {
            const state = i < active ? 'completed' : i === active ? 'processing' : 'waiting';
            return (
              <li key={stage} className="flex items-center gap-3">
                {state === 'completed' ? (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ds-green-50)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="var(--ds-green-700)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </span>
                ) : state === 'processing' ? (
                  <span className="h-6 w-6 shrink-0 animate-spin rounded-full border-2 border-[var(--ds-blue-100)] border-t-[var(--ds-brand)]" />
                ) : (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[var(--ds-grey-300)]" />
                  </span>
                )}
                <span
                  className={`text-sm ${
                    state === 'waiting'
                      ? 'text-[var(--ds-text-tertiary)]'
                      : state === 'processing'
                        ? 'font-medium text-[var(--ds-text-primary)]'
                        : 'text-[var(--ds-text-secondary)]'
                  }`}
                >
                  {stage}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
