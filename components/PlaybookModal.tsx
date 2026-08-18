"use client"

import { useState } from 'react';
import type { PlaybookContent, PlaybookSource } from '@/lib/types';

interface PlaybookModalProps {
  open: boolean;
  onClose: () => void;
  runId: string | null;
  hasCompetitor: boolean;
}

type ModalStatus = 'idle' | 'loading' | 'error' | 'done';

export default function PlaybookModal({ open, onClose, runId, hasCompetitor }: PlaybookModalProps) {
  const [source, setSource] = useState<PlaybookSource>('own');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [playbook, setPlaybook] = useState<PlaybookContent | null>(null);

  if (!open) return null;

  const generate = async () => {
    if (!runId || status === 'loading') return;
    setStatus('loading');
    setPlaybook(null);
    try {
      const res = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: runId, source }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      const data = (await res.json()) as { playbook?: PlaybookContent };
      if (!data.playbook) {
        setStatus('error');
        return;
      }
      setPlaybook(data.playbook);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 45, 51, 0.72)' }}
    >
      <div className="ds-card max-h-[85vh] w-full max-w-3xl overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="ds-chip">Playbook</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ds-text-primary)]">
              Generate a strategic playbook
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              Choose which analysis the playbook should be based on.
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--ds-text-primary)]">
            <input
              type="radio"
              name="playbook-source"
              checked={source === 'own'}
              onChange={() => setSource('own')}
            />
            Own Brand
          </label>
          {hasCompetitor ? (
            <label className="flex items-center gap-2 text-sm font-medium text-[var(--ds-text-primary)]">
              <input
                type="radio"
                name="playbook-source"
                checked={source === 'competitor'}
                onChange={() => setSource('competitor')}
              />
              Competitor
            </label>
          ) : null}
          <button
            type="button"
            onClick={() => void generate()}
            disabled={!runId || status === 'loading'}
            className="btn-gradient ml-auto"
          >
            {status === 'loading' ? 'Generating playbook\u2026' : 'Playbook'}
          </button>
        </div>

        {!runId ? (
          <p className="mt-3 text-xs text-[var(--ds-text-tertiary)]">
            The playbook becomes available once this analysis run has been saved to your history.
          </p>
        ) : null}

        {status === 'loading' ? <div className="progress-indeterminate mt-5" /> : null}

        {status === 'error' ? (
          <p className="mt-4 text-sm font-medium text-[var(--ds-text-error)]">
            The playbook could not be generated. Please try again.
          </p>
        ) : null}

        {playbook ? (
          <div className="mt-6 space-y-6">
            {playbook.headline ? (
              <p className="text-lg font-semibold leading-7 text-[var(--ds-text-primary)]">
                {playbook.headline}
              </p>
            ) : null}

            {Array.isArray(playbook.quickWins) && playbook.quickWins.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">Quick wins</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {playbook.quickWins.map((w, i) => (
                    <li key={`qw-${i}`}>{w}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {playbook.currentVsTarget ? (
              <section className="rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
                  Posting cadence
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {typeof playbook.currentVsTarget.currentPostsPerWeek === 'number' ? (
                    <span className="pill">
                      Current: {playbook.currentVsTarget.currentPostsPerWeek}/week
                    </span>
                  ) : null}
                  {typeof playbook.currentVsTarget.targetPostsPerWeek === 'number' ? (
                    <span className="ds-chip">
                      Target: {playbook.currentVsTarget.targetPostsPerWeek}/week
                    </span>
                  ) : null}
                </div>
                {playbook.currentVsTarget.rationale ? (
                  <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
                    {playbook.currentVsTarget.rationale}
                  </p>
                ) : null}
              </section>
            ) : null}

            {Array.isArray(playbook.recommendations) && playbook.recommendations.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
                  Recommendations
                </h3>
                <div className="mt-3 space-y-3">
                  {playbook.recommendations.map((rec, i) => (
                    <div
                      key={`rec-${i}`}
                      className="rounded-xl border border-[var(--ds-border-default)] bg-white p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {rec.area ? (
                          <span className="font-semibold text-[var(--ds-text-primary)]">
                            {rec.area}
                          </span>
                        ) : null}
                        {rec.priority ? <span className="ds-chip">{rec.priority}</span> : null}
                      </div>
                      {rec.action ? (
                        <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
                          {rec.action}
                        </p>
                      ) : null}
                      {rec.impact ? (
                        <p className="mt-2 text-xs leading-5 text-[var(--ds-text-tertiary)]">
                          {rec.impact}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {Array.isArray(playbook.gaps) && playbook.gaps.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">Gaps</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {playbook.gaps.map((g, i) => (
                    <li key={`gap-${i}`}>{g}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {Array.isArray(playbook.campaignIdeas) && playbook.campaignIdeas.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
                  Campaign ideas
                </h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {playbook.campaignIdeas.map((idea, i) => (
                    <div
                      key={`idea-${i}`}
                      className="rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4"
                    >
                      {idea.name ? (
                        <p className="font-semibold text-[var(--ds-text-primary)]">{idea.name}</p>
                      ) : null}
                      {idea.concept ? (
                        <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
                          {idea.concept}
                        </p>
                      ) : null}
                      {idea.cadence ? (
                        <p className="mt-2 text-xs text-[var(--ds-text-tertiary)]">
                          Cadence: {idea.cadence}
                        </p>
                      ) : null}
                      {idea.cta ? (
                        <p className="mt-1 text-xs font-medium text-[var(--ds-text-link)]">
                          CTA: {idea.cta}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {Array.isArray(playbook.activities) && playbook.activities.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">Activities</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {playbook.activities.map((a, i) => (
                    <li key={`act-${i}`}>{a}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {Array.isArray(playbook.engagementPlays) && playbook.engagementPlays.length > 0 ? (
              <section>
                <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">
                  Engagement plays
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {playbook.engagementPlays.map((p, i) => (
                    <li key={`play-${i}`}>{p}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
