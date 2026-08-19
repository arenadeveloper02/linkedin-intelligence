# linkedin-intelligence

Added a mode radio selector (OWN / COMPETITOR) to the playbook modal and included the selected mode in the playbook workflow API payload. Files changed: components/PlaybookModal.tsx (added mode state, radio button group UI, mode sent in POST body, existing saved playbook only reused for OWN mode), app/api/playbook/route.ts (reads mode from the request body, validates it to OWN/COMPETITOR, forwards it in the executeWorkflow payload). prisma/schema.prisma is echoed unchanged (no schema changes).

## Features

- Playbook mode radio selector (Own brand / Competitor) in the playbook modal
- mode field (OWN / COMPETITOR) included in the playbook workflow API payload
- Saved playbook summaries reused only for OWN mode; COMPETITOR mode always generates fresh

## Tech Stack

- Next.js ^15.3.3 (App Router)
- React ^19.0.0
- Tailwind CSS v3
- TypeScript
- Prisma + PostgreSQL (Neon on Vercel)

## Routes

- `/`
- `/access-denied`
- `/history`
- `/report/:id`

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database

1. Copy `.env.example` to `.env` for local development
2. Set `DATABASE_URL` to your Postgres connection string
3. Run `npx prisma db push` before `npm run dev` if tables are missing

On Vercel, `DATABASE_URL` is injected when Neon is connected to the project.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build (runs Prisma generate/push when configured)
- `npm run start` — run the production server locally

## Deploy

This project is intended for deployment on [Vercel](https://vercel.com). Connect the GitHub repository and deploy the `main` branch.
