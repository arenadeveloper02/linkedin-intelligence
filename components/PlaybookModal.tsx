"use client"

import { useEffect, useState } from 'react';
import type { ArenaRunEntry, PlaybookContent, PlaybookResult } from '@/lib/types';

interface PlaybookModalProps {
  open: boolean;
  onClose: () => void;
  runId: string | null;
  /** Called with the playbook payload; the result renders on the main screen. */
  onResult: (result: PlaybookResult) => void;
}

type ModalStatus = 'idle' | 'loading' | 'error';

type PlaybookMode = 'OWN' | 'COMPETITOR';

function stripCodeFences(text: string): string {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/);
  return fenced ? fenced[1].trim() : trimmed;
}

export default function PlaybookModal({ open, onClose, runId, onResult }: PlaybookModalProps) {
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [existing, setExisting] = useState<PlaybookResult | null>(null);
  const [prefetching, setPrefetching] = useState(false);
  const [mode, setMode] = useState<PlaybookMode>('OWN');

  // When the modal opens, fetch ONLY this run via the single-run Arena
  // workflow (instead of loading the whole history). If a playbook summary
  // was already generated, reuse it instead of calling the playbook API.
  useEffect(() => {
    if (!open || !runId) return;
    let cancelled = false;
    setExisting(null);
    setPrefetching(true);
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
        setExisting({ playbook: parsedPlaybook, playbookText: parsedText });
      } catch {
        // ignore \u2014 generation stays available via the button
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
    // When a saved playbook exists, just open it \u2014 no mode selection needed.
    if (existing) {
      onResult(existing);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: runId, mode, source: mode === 'COMPETITOR' ? 'competitor' : 'own' }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      const data = (await res.json()) as { playbook?: PlaybookContent; playbookText?: string };
      if (data.playbook) {
        setStatus('idle');
        onResult({ playbook: data.playbook, playbookText: null });
        return;
      }
      if (typeof data.playbookText === 'string' && data.playbookText.trim().length > 0) {
        setStatus('idle');
        onResult({ playbook: null, playbookText: data.playbookText });
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(44, 45, 51, 0.72)' }}
    >
      <div className="ds-card w-full max-w-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="ds-chip">Playbook</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ds-text-primary)]">
              Get the playbook
            </h2>
            <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
              {existing
                ? 'A playbook was already generated for this analysis run. Open it to view it on the main screen.'
                : 'Generate a prioritized strategic playbook for this analysis. The result opens on the main screen.'}
            </p>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary shrink-0">
            Close
          </button>
        </div>

        {!existing ? (
          <fieldset className="mt-5">
            <legend className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
              Playbook mode
            </legend>
            <div className="mt-2 flex flex-wrap gap-3">
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                  mode === 'OWN'
                    ? 'border-[var(--ds-border-focus,#1A73E8)] bg-[var(--ds-brand-surface,#F3F8FE)] text-[var(--ds-text-link,#1A73E8)]'
                    : 'border-[var(--ds-border-default)] bg-white text-[var(--ds-text-secondary)]'
                }`}
              >
                <input
                  type="radio"
                  name="playbook-mode"
                  value="OWN"
                  checked={mode === 'OWN'}
                  onChange={() => {
                    setMode('OWN');
                    if (status === 'error') setStatus('idle');
                  }}
                  className="h-4 w-4 accent-[#1A73E8]"
                />
                Own brand
              </label>
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                  mode === 'COMPETITOR'
                    ? 'border-[var(--ds-border-focus,#1A73E8)] bg-[var(--ds-brand-surface,#F3F8FE)] text-[var(--ds-text-link,#1A73E8)]'
                    : 'border-[var(--ds-border-default)] bg-white text-[var(--ds-text-secondary)]'
                }`}
              >
                <input
                  type="radio"
                  name="playbook-mode"
                  value="COMPETITOR"
                  checked={mode === 'COMPETITOR'}
                  onChange={() => {
                    setMode('COMPETITOR');
                    if (status === 'error') setStatus('idle');
                  }}
                  className="h-4 w-4 accent-[#1A73E8]"
                />
                Competitor
              </label>
            </div>
          </fieldset>
        ) : null}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => void generate()}
            disabled={!runId || status === 'loading' || prefetching}
            className="btn-gradient"
          >
            {status === 'loading'
              ? 'Generating playbook\u2026'
              : existing
                ? 'Open'
                : 'Get the playbook'}
          </button>
        </div>

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
      </div>
    </div>
  );
}
