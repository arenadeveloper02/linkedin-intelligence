import type { ReactNode } from 'react';
import { decodeUnicodeEscapes } from '@/lib/format';
import type { PlaybookContent } from '@/lib/types';

interface PlaybookViewProps {
  playbook: PlaybookContent | null;
  playbookText: string | null;
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

export function RichText({ text }: { text: string }) {
  const lines = decodeUnicodeEscapes(text).split(/\r?\n/);
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

export default function PlaybookView({ playbook, playbookText }: PlaybookViewProps) {
  if (playbook) {
    return (
      <div className="space-y-6">
        {playbook.headline ? (
          <p className="text-lg font-semibold leading-7 text-[var(--ds-text-primary)]">
            {decodeUnicodeEscapes(playbook.headline)}
          </p>
        ) : null}

        {Array.isArray(playbook.quickWins) && playbook.quickWins.length > 0 ? (
          <section>
            <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">Quick wins</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
              {playbook.quickWins.map((w, i) => (
                <li key={`qw-${i}`}>{decodeUnicodeEscapes(w)}</li>
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
                {decodeUnicodeEscapes(playbook.currentVsTarget.rationale)}
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
                        {decodeUnicodeEscapes(rec.area)}
                      </span>
                    ) : null}
                    {rec.priority ? (
                      <span className="ds-chip">{decodeUnicodeEscapes(rec.priority)}</span>
                    ) : null}
                  </div>
                  {rec.action ? (
                    <p className="mt-2 text-sm leading-6 text-[var(--ds-text-secondary)]">
                      {decodeUnicodeEscapes(rec.action)}
                    </p>
                  ) : null}
                  {rec.impact ? (
                    <p className="mt-1 text-xs text-[var(--ds-text-tertiary)]">
                      Impact: {decodeUnicodeEscapes(rec.impact)}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
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
                  key={`ci-${i}`}
                  className="rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4"
                >
                  {idea.name ? (
                    <p className="font-semibold text-[var(--ds-text-primary)]">
                      {decodeUnicodeEscapes(idea.name)}
                    </p>
                  ) : null}
                  {idea.concept ? (
                    <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
                      {decodeUnicodeEscapes(idea.concept)}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {idea.cadence ? (
                      <span className="pill">{decodeUnicodeEscapes(idea.cadence)}</span>
                    ) : null}
                    {idea.cta ? (
                      <span className="ds-chip">{decodeUnicodeEscapes(idea.cta)}</span>
                    ) : null}
                  </div>
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
                <li key={`gap-${i}`}>{decodeUnicodeEscapes(g)}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {Array.isArray(playbook.activities) && playbook.activities.length > 0 ? (
          <section>
            <h3 className="text-base font-semibold text-[var(--ds-text-primary)]">Activities</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--ds-text-secondary)]">
              {playbook.activities.map((a, i) => (
                <li key={`act-${i}`}>{decodeUnicodeEscapes(a)}</li>
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
                <li key={`ep-${i}`}>{decodeUnicodeEscapes(e)}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    );
  }

  if (playbookText && playbookText.trim().length > 0) {
    return <RichText text={playbookText} />;
  }

  return (
    <p className="text-sm text-[var(--ds-text-secondary)]">No playbook content available.</p>
  );
}
