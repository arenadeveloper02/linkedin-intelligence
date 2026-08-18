"use client"

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { ArenaRunEntry, PlaybookContent, PlaybookSource } from '@/lib/types';

interface PlaybookModalProps {
  open: boolean;
  onClose: () => void;
  runId: string | null;
  hasCompetitor: boolean;
}

type ModalStatus = 'idle' | 'loading' | 'error' | 'done';

function stripCodeFences(text: string): string {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/);
  return fenced ? fenced[1].trim() : trimmed;
}

function renderInline(text: string, prefix: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${prefix}-b-${i}`} className="font-semibold text-[var(--ds-text-primary)]">
        {part}
      </strong>
    ) : (
      <span key={`${prefix}-t-${i}`}>{part}</span>
    ),
  );
}

function RichText({ text }: { text: string }) {
  const lines = text.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];

  const flush = (key: string) => {
    if (bullets.length === 0) return;
    const items = bullets;
    bullets = [];
    blocks.push(
      <ul
        key={key}
        className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]"
      >
        {items.map((item, i) => (
          <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
        ))}
      </ul>,
    );
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();
    if (!line) {
      flush(`ul-${idx}`);
      return;
    }
    const bullet = line.match(/^[-*\u2022]\s+(.*)$/) ?? line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }
    flush(`ul-${idx}`);
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) {
      blocks.push(
        <h3 key={`h-${idx}`} className="text-base font-semibold text-[var(--ds-text-primary)]">
          {renderInline(heading[1], `h-${idx}`)}
        </h3>,
      );
      return;
    }
    blocks.push(
      <p key={`p-${idx}`} className="text-sm leading-6 text-[var(--ds-text-secondary)]">
        {renderInline(line, `p-${idx}`)}
      </p>,
    );
  });
  flush('ul-end');

  return <div className="space-y-3">{blocks}</div>;
}

export default function PlaybookModal({ open, onClose, runId, hasCompetitor }: PlaybookModalProps) {
  const [source, setSource] = useState<PlaybookSource>('own');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [playbook, setPlaybook] = useState<PlaybookContent | null>(null);
  const [playbookText, setPlaybookText] = useState<string | null>(null);
  const [hasExisting, setHasExisting] = useState(false);
  const [runHasCompetitor, setRunHasCompetitor] = useState(false);
  const [prefetching, setPrefetching] = useState(false);

  // When the modal opens, check the Arena history for this run. If a playbook
  // summary was already generated, show it directly and skip the playbook API.
  useEffect(() => {
    if (!open || !runId) return;
    let cancelled = false;
    setPrefetching(true);
    const load = async () => {
      try {
        const res = await fetch('/api/arena-history');
        if (!res.ok) return;
        const data = (await res.json()) as { runs?: ArenaRunEntry[] };
        const runs = Array.isArray(data.runs) ? data.runs : [];
        const run = runs.find((r) => r.id === runId);
        if (!run || cancelled) return;
        if (run.hasCompetitor) setRunHasCompetitor(true);
        const summary = typeof run.summary === 'string' ? run.summary.trim() : '';
        if (!summary) return;
        const cleaned = stripCodeFences(summary);
        let parsedPlaybook: PlaybookContent | null = null;
        let parsedText: string | null = null;
        try {
          const parsed: unknown = JSON.parse(cleaned);
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            parsedPlaybook = parsed as PlaybookContent;
          } else {
            parsedText = cleaned;
          }
        } catch {
          parsedText = cleaned;
        }
        if (cancelled) return;
        setPlaybook(parsedPlaybook);
        setPlaybookText(parsedText);
        setHasExisting(true);
        setStatus('done');
      } catch {
        // ignore — generation stays available via the button
      } finally {
        if (!cancelled) setPrefetching(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [open, runId]);

  if (!open) return null;

  const generate = async () => {
    if (!runId || status === 'loading') return;
    setStatus('loading');
    setPlaybook(null);
    setPlaybookText(null);
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
      const data = (await res.json()) as { playbook?: PlaybookContent; playbookText?: string };
      if (data.playbook) {
        setPlaybook(data.playbook);
        setStatus('done');
        return;
      }
      if (typeof data.playbookText === 'string' && data.playbookText.trim().length > 0) {
        setPlaybookText(data.playbookText);
        setStatus('done');
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const showCompetitorRadio = hasCompetitor || runHasCompetitor;

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
              {hasExisting ? 'Strategic playbook' : 'Generate a strategic playbook'}
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              {hasExisting
                ? 'This playbook was already generated for this analysis run.'
                : 'Choose which analysis the playbook should be based on.'}
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

        {!hasExisting ? (
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
            {showCompetitorRadio ? (
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
              disabled={!runId || status === 'loading' || prefetching}
              className="btn-gradient ml-auto"
            >
              {status === 'loading' ? 'Generating playbook\u2026' : 'Playbook'}
            </button>
          </div>
        ) : null}

        {!runId ? (
          <p className="mt-3 text-xs text-[var(--ds-text-tertiary)]">
            The playbook becomes available once this analysis run has been saved to your history.
          </p>
        ) : null}

        {prefetching ? <div className="progress-indeterminate mt-5" /> : null}

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
                  {playbook.engagementPlays.map((e, i) => (
                    <li key={`ep-${i}`}>{e}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        ) : null}

        {playbookText ? (
          <div className="mt-6">
            <RichText text={playbookText} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
