export function formatCompact(count: number): string {
  if (!Number.isFinite(count)) return '0';
  const abs = Math.abs(count);
  if (abs < 1000) return String(count);
  if (abs < 1000000) {
    const v = count / 1000;
    const rounded = v >= 100 ? Math.round(v) : Math.round(v * 10) / 10;
    return `${rounded}K`;
  }
  const v = count / 1000000;
  return `${Math.round(v * 10) / 10}M`;
}

export function formatFollowers(count: number | null | undefined): string {
  if (count === null || count === undefined || !Number.isFinite(count)) return '';
  return `${formatCompact(count)} followers`;
}

export function formatDate(value: string | Date): string {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return typeof value === 'string' ? value : '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
