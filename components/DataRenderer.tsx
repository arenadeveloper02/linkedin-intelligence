import type { JsonValue } from '@/lib/types';

export function humanizeKey(key: string): string {
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

interface DataRendererProps {
  value: JsonValue | null | undefined;
  depth?: number;
}

export function DataRenderer({ value, depth = 0 }: DataRendererProps) {
  if (value === null || value === undefined || !hasContent(value)) return null;

  if (typeof value === 'string') {
    return (
      <p className="whitespace-pre-line text-sm leading-6 text-[var(--ds-text-secondary)]">{value}</p>
    );
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return <p className="text-sm font-medium text-[var(--ds-text-primary)]">{String(value)}</p>;
  }

  if (Array.isArray(value)) {
    const items = value.filter((v) => hasContent(v));
    const strings = items.filter((v): v is string => typeof v === 'string');

    if (strings.length === items.length && strings.length > 0) {
      const short = strings.every((s) => s.length <= 48);
      if (short) {
        return (
          <div className="flex flex-wrap gap-2">
            {strings.map((s, i) => (
              <span key={`${i}-${s.slice(0, 12)}`} className="ds-chip">
                {s}
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
              <span>{s}</span>
            </li>
          ))}
        </ul>
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
              <span className="text-sm text-[var(--ds-text-primary)]">{String(v)}</span>
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
