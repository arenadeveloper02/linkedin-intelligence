"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Search' },
  { href: '/history', label: 'History' },
];

export default function AppHeader() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ds-border-default)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: 'var(--ds-gradient-brand)' }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="2" />
              <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
            </svg>
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight text-[var(--ds-text-primary)]">
              LinkedIn Intelligence
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.3em] text-[var(--ds-text-tertiary)]">
              WATCHTOWER
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-[var(--ds-brand-surface)] text-[var(--ds-brand)]'
                  : 'text-[var(--ds-text-secondary)] hover:bg-[var(--ds-grey-100)] hover:text-[var(--ds-text-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
