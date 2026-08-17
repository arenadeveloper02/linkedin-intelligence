"use client"

import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import { formatDate } from '@/lib/format';
import type { HistoryItem } from '@/lib/types';

interface HistoryClientProps {
  items: HistoryItem[];
}

export default function HistoryClient({ items }: HistoryClientProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ds-text-tertiary)]">HISTORY</p>
      <h1 className="mt-1 text-2xl font-semibold text-[var(--ds-text-primary)]">Previous analyses</h1>

      {items.length === 0 ? (
        <div className="ds-card mt-8 text-center">
          <h2 className="text-base font-semibold text-[var(--ds-text-primary)]">No analyses yet</h2>
          <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">
            Run your first LinkedIn intelligence report to see it here.
          </p>
          <Link href="/" className="btn-gradient mt-5 inline-flex">
            Start a search
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="ds-card flex flex-wrap items-center gap-4">
              <CompanyLogo name={item.companyName} logo={item.companyLogo} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-[var(--ds-text-primary)]">
                  {item.companyName}
                </p>
                <p className="text-xs text-[var(--ds-text-tertiary)]">{formatDate(item.createdAt)}</p>
              </div>
              <span className="ds-chip">
                {item.analysisType === 'competitor' ? 'Competitor' : 'Own Brand'}
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: 'var(--ds-green-50)',
                  color: 'var(--ds-green-700)',
                }}
              >
                {item.status}
              </span>
              <Link href={`/report/${item.id}`} className="btn-secondary">
                Open report &rarr;
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
