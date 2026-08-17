import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ArenaEmailProvider } from '@/components/arena-email-provider';
import { getArenaEmailId } from '@/lib/arena-email';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'LinkedIn Intelligence \u2014 Watchtower',
  description:
    'Decode any company\u2019s LinkedIn playbook with organic messaging, content, creative, engagement, audience, and competitive intelligence.',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const emailId = await getArenaEmailId();
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ArenaEmailProvider emailId={emailId}>{children}</ArenaEmailProvider>
      </body>
    </html>
  );
}
