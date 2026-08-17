"use client"

import { useState } from 'react';

interface CompanyLogoProps {
  name: string;
  logo: string | null;
  size?: 'sm' | 'md' | 'lg';
}

export default function CompanyLogo({ name, logo, size = 'md' }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);
  const dims =
    size === 'lg' ? 'h-16 w-16 text-2xl' : size === 'sm' ? 'h-9 w-9 text-sm' : 'h-12 w-12 text-lg';
  const letter = (name.trim().charAt(0) || '?').toUpperCase();

  if (logo && !failed) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        className={`${dims} shrink-0 rounded-xl border border-[var(--ds-border-default)] bg-white object-cover`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`${dims} flex shrink-0 items-center justify-center rounded-xl font-semibold text-white`}
      style={{ background: 'var(--ds-gradient-brand)' }}
      aria-hidden="true"
    >
      {letter}
    </div>
  );
}
