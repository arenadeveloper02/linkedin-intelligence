# LinkedIn Intelligence (Watchtower)

A premium SaaS-style LinkedIn organic intelligence app. Search any company, pick the correct LinkedIn profile match, then run an Own Brand or Competitor analysis and explore a full executive intelligence dashboard.

## Features

- Company search via the Arena company-listing workflow (server-side proxied, API key never reaches the browser)
- Company selection cards with logo fallbacks, formatted follower counts, and LinkedIn links
- Own Brand Analysis (primary) and Competitor Analysis (secondary) per company card
- Staged analysis progress screen while the workflow runs
- Intelligence dashboard: Overview, Messaging, Content, Creative, Engagement, Audience, Strategy, Competitive Intelligence, and Posts
- Copyable Hook and CTA libraries, scorecard bars, KPI tiles, top / weakest post cards
- Analysis history persisted in Postgres per Arena email with reopenable saved reports
- Pluggable competitor workflow config (`analysisWorkflows.competitor`) with a graceful not-configured state

## Tech stack

- Next.js ^15.3.3 (App Router), React ^19, TypeScript (strict)
- Tailwind CSS v3 with Arena DS tokens, Poppins via next/font
- Prisma + Neon Postgres for analysis history

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` (Postgres) and `ARENA_API_KEY`
3. `npm run dev`

The build script runs `prisma generate && prisma db push && next build`.

## Deploy notes

- On Vercel + Neon, `DATABASE_URL` is injected when the database is connected
- Set `ARENA_API_KEY` in project environment variables
- The app is designed to run inside a cross-origin iframe; access requires an `?emailId=` query parameter (persisted in the `arena_email_id` cookie)
