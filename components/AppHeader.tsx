"use client"

import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="border-b border-[var(--ds-border-default)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: 'linear-gradient(135deg, #2C2D33 0%, #41444C 100%)' }}
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
      </div>
    </header>
  );
}
