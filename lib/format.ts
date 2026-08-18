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

/**
 * Decodes raw Unicode escape sequences (\uXXXX or \u{XXXXX}) that can arrive
 * as literal text inside API responses or stored JSON, so the UI never shows
 * sequences like \u00b7 to the user.
 */
export function decodeUnicodeEscapes(text: string): string {
  if (!text.includes('\\u')) return text;
  return text.replace(
    /\\u\{([0-9a-fA-F]{1,6})\}|\\u([0-9a-fA-F]{4})/g,
    (match, braced: string | undefined, plain: string | undefined) => {
      const hex = braced ?? plain;
      if (!hex) return match;
      const code = Number.parseInt(hex, 16);
      if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return match;
      try {
        return String.fromCodePoint(code);
      } catch {
        return match;
      }
    },
  );
}
