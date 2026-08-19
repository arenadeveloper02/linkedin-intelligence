import type { ReactNode } from 'react';
import { decodeUnicodeEscapes } from '@/lib/format';
import type { JsonValue } from '@/lib/types';

type Rec = { [key: string]: JsonValue };

function isRec(v: JsonValue | null | undefined): v is Rec {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

const KEY_LABELS: Record<string, string> = {
  l: 'Label',
  v: 'Value',
  h: 'Highlight',
  d: 'Detail',
  hookEx: 'Hook examples',
  ctas: 'CTAs',
  cta: 'CTA',
  usps: 'Unique selling points',
  recs: 'Recommendations',
  freq: 'Frequency',
};

export function humanizeKey(key: string): string {
  if (KEY_LABELS[key]) return KEY_LABELS[key];
  const cleaned = key
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return key;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export function hasContent(value: JsonValue | null | undefined): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.some((v) => hasContent(v));
  return Object.values(value).some((v) => hasContent(v));
}

function isUrl(s: string): boolean {
  return /^https?:\/\/\S+$/i.test(s.trim());
}

function isImageUrl(s: string): boolean {
  if (!isUrl(s)) return false;
  const t = s.trim();
  return (
    /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?.*)?(#.*)?$/i.test(t) ||
    /media\.licdn\.com/i.test(t)
  );
}

/**
 * Renders a string value: image URLs become inline images, other URLs become
 * links, and everything else is plain text with Unicode escapes decoded.
 */
function renderString(raw: string): ReactNode {
  const text = decodeUnicodeEscapes(raw);
  const trimmed = text.trim();
  if (isImageUrl(trimmed)) {
    return (
      <img
        src={trimmed}
        alt="Embedded content"
        className="max-h-64 max-w-full rounded-lg border border-[var(--ds-border-default)] bg-white object-contain"
      />
    );
  }
  if (isUrl(trimmed)) {
    return (
      <a
        href={trimmed}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-medium text-[var(--ds-text-link)] hover:underline"
      >
        {trimmed}
      </a>
    );
  }
  return <>{text}</>;
}

interface LvItem {
  l: string;
  v: JsonValue | null;
}

function toLvItems(items: JsonValue[]): LvItem[] | null {
  const out: LvItem[] = [];
  for (const it of items) {
    if (!isRec(it)) return null;
    const keys = Object.keys(it);
    if (typeof it['l'] !== 'string' || !keys.every((k) => k === 'l' || k === 'v')) return null;
    out.push({ l: it['l'], v: it['v'] ?? null });
  }
  return out.length > 0 ? out : null;
}

interface StatItem {
  h: string;
  v: string;
  d: string | null;
}

function toStatItems(items: JsonValue[]): StatItem[] | null {
  const out: StatItem[] = [];
  for (const it of items) {
    if (!isRec(it) || typeof it['h'] !== 'string') return null;
    const v = it['v'];
    if (typeof v !== 'string' && typeof v !== 'number') return null;
    const d = typeof it['d'] === 'string' ? it['d'] : null;
    out.push({ h: it['h'], v: String(v), d });
  }
  return out.length > 0 ? out : null;
}

interface PairItem {
  a: string;
  b: string;
}

function toPairItems(items: JsonValue[]): PairItem[] | null {
  const out: PairItem[] = [];
  for (const it of items) {
    if (!Array.isArray(it) || it.length < 2) return null;
    const a = it[0];
    const b = it[1];
    if (typeof a !== 'string') return null;
    if (typeof b !== 'string' && typeof b !== 'number') return null;
    out.push({ a, b: String(b) });
  }
  return out.length > 0 ? out : null;
}

interface DataRendererProps {
  value: JsonValue | null | undefined;
  depth?: number;
}

export function DataRenderer({ value, depth = 0 }: DataRendererProps) {
  if (value === null || value === undefined || !hasContent(value)) return null;

  if (typeof value === 'string') {
    const text = decodeUnicodeEscapes(value);
    const trimmed = text.trim();
    if (isImageUrl(trimmed)) {
      return (
        <img
          src={trimmed}
          alt="Embedded content"
          className="max-h-64 max-w-full rounded-lg border border-[var(--ds-border-default)] bg-white object-contain"
        />
      );
    }
    if (isUrl(trimmed)) {
      return (
        <a
          href={trimmed}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-sm font-medium text-[var(--ds-text-link)] hover:underline"
        >
          {trimmed}
        </a>
      );
    }
    return (
      <p className="whitespace-pre-line text-sm leading-6 text-[var(--ds-text-secondary)]">{text}</p>
    );
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return <p className="text-sm font-medium text-[var(--ds-text-primary)]">{String(value)}</p>;
  }

  if (Array.isArray(value)) {
    const items = value.filter((v) => hasContent(v));
    const strings = items.filter((v): v is string => typeof v === 'string');

    if (strings.length === items.length && strings.length > 0) {
      const short = strings.every((s) => s.length <= 48 && !isUrl(s.trim()));
      if (short) {
        return (
          <div className="flex flex-wrap gap-2">
            {strings.map((s, i) => (
              <span key={`${i}-${s.slice(0, 12)}`} className="ds-chip">
                {decodeUnicodeEscapes(s)}
              </span>
            ))}
          </div>
        );
      }
      return (
        <ul className="space-y-2">
          {strings.map((s, i) => (
            <li
              key={`${i}-${s.slice(0, 12)}`}
              className="flex gap-2 text-sm leading-6 text-[var(--ds-text-secondary)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ds-brand)]" />
              <span className="min-w-0">{renderString(s)}</span>
            </li>
          ))}
        </ul>
      );
    }

    const lv = toLvItems(items);
    if (lv) {
      const numeric = lv.every((i) => typeof i.v === 'number');
      if (numeric) {
        const rows = lv.map((i) => ({ l: i.l, n: typeof i.v === 'number' ? i.v : 0 }));
        const max = Math.max(...rows.map((r) => r.n), 1);
        return (
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.l}>
                <div className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="font-medium text-[var(--ds-text-primary)]">
                    {decodeUnicodeEscapes(r.l)}
                  </span>
                  <span className="text-[var(--ds-text-secondary)]">{r.n}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-[var(--ds-grey-100)]">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${Math.min(100, (r.n / max) * 100)}%`,
                      background: 'linear-gradient(135deg, #2C2D33 0%, #41444C 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
      return (
        <div className="space-y-3">
          {lv.map((i, idx) => (
            <div
              key={`${idx}-${i.l.slice(0, 16)}`}
              className="rounded-lg border border-[var(--ds-border-subtle)] bg-[var(--ds-surface-subtle)] p-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
                {decodeUnicodeEscapes(i.l)}
              </p>
              {typeof i.v === 'string' ? (
                <div className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">
                  {renderString(i.v)}
                </div>
              ) : typeof i.v === 'number' ? (
                <p className="mt-1 text-sm leading-6 text-[var(--ds-text-secondary)]">{String(i.v)}</p>
              ) : (
                <div className="mt-1">
                  <DataRenderer value={i.v} depth={depth + 1} />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    const stats = toStatItems(items);
    if (stats) {
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {stats.map((s, idx) => (
            <div
              key={`${idx}-${s.h.slice(0, 16)}`}
              className="rounded-xl border border-[var(--ds-border-default)] bg-white p-4 shadow-[var(--ds-elevation-sm)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
                {decodeUnicodeEscapes(s.h)}
              </p>
              <p className="mt-1 text-xl font-semibold text-[var(--ds-text-primary)]">
                {decodeUnicodeEscapes(s.v)}
              </p>
              {s.d ? (
                <p className="mt-1 text-xs leading-5 text-[var(--ds-text-secondary)]">
                  {decodeUnicodeEscapes(s.d)}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      );
    }

    const pairs = toPairItems(items);
    if (pairs) {
      return (
        <div className="flex flex-wrap gap-2">
          {pairs.map((p, idx) =>
            p.a.startsWith('#') ? (
              <span key={`${idx}-${p.a}`} className="pill">
                <span
                  className="mr-1.5 inline-block h-3 w-3 rounded-full border border-[var(--ds-border-default)]"
                  style={{ background: p.a }}
                />
                {decodeUnicodeEscapes(p.b)}
              </span>
            ) : (
              <span key={`${idx}-${p.a.slice(0, 12)}`} className="ds-chip">
                {decodeUnicodeEscapes(p.a)} {'\u00b7'} {decodeUnicodeEscapes(p.b)}
              </span>
            ),
          )}
        </div>
      );
    }

    return (
      <div className={depth === 0 ? 'grid gap-4 md:grid-cols-2' : 'space-y-3'}>
        {items.map((v, i) => (
          <div
            key={i}
            className={
              depth === 0
                ? 'rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4'
                : 'rounded-lg border border-[var(--ds-border-subtle)] p-3'
            }
          >
            <DataRenderer value={v} depth={depth + 1} />
          </div>
        ))}
      </div>
    );
  }

  const entries = Object.entries(value).filter(([, v]) => hasContent(v));
  if (entries.length === 0) return null;

  return (
    <div className="space-y-4">
      {entries.map(([k, v]) => {
        if (typeof v === 'string' && /logo/i.test(k) && isUrl(v.trim())) {
          return (
            <div key={k} className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
                {humanizeKey(k)}
              </span>
              <img
                src={v.trim()}
                alt={humanizeKey(k)}
                className="h-12 w-12 rounded-xl border border-[var(--ds-border-default)] bg-white object-cover"
              />
            </div>
          );
        }
        if (
          typeof v === 'number' ||
          typeof v === 'boolean' ||
          (typeof v === 'string' && v.length <= 80)
        ) {
          return (
            <div key={k} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
                {humanizeKey(k)}
              </span>
              <span className="text-sm text-[var(--ds-text-primary)]">
                {typeof v === 'string' ? renderString(v) : String(v)}
              </span>
            </div>
          );
        }
        return (
          <div key={k}>
            <h4
              className={
                depth === 0
                  ? 'mb-2 text-sm font-semibold text-[var(--ds-text-primary)]'
                  : 'mb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]'
              }
            >
              {humanizeKey(k)}
            </h4>
            <DataRenderer value={v} depth={depth + 1} />
          </div>
        );
      })}
    </div>
  );
}
