# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-19T12:45:40.055Z.

## Overview

LinkedIn intelligence app. This edit: (1) CompetitorModal hides the competitor search UI when a saved comparison already exists (only the Open panel shows); (2) added a 'Comparison report' button on competitor reports that reuses the saved 'compare' text from the Arena history/run APIs or calls the new compare workflow (674e91f8-608e-447a-89d4-19bbbc415e53) via the new app/api/compare route and renders the streamed markdown; (3) PlaybookModal hides the Playbook mode selector and shows only the Open button when a saved playbook exists. Changed files: lib/types.ts (added optional ArenaRunEntry.compare), lib/arena-api.ts (added COMPARE_WORKFLOW_ID), app/api/compare/route.ts (new), app/api/arena-history/route.ts + app/api/arena-run/route.ts (map r.compare into runs), components/CompetitorModal.tsx (hide search when existing; pass compare on open), components/PlaybookModal.tsx (hide mode fieldset when existing; Open reuses saved playbook), components/PlaybookView.tsx (exported RichText for compare rendering), components/SearchClient.tsx (savedCompare state wired to ReportDashboard/CompetitorModal), components/ReportDashboard.tsx (new optional runId/savedCompare/onGetPlaybook props + Comparison report button and panel), prisma/schema.prisma (echoed unchanged baseline).

**Repository:** `linkedin-intelligence`  
**File count:** 46

## Features

- Company search via Arena workflow
- Own-brand and competitor LinkedIn analysis reports
- Saved comparison report reuse with on-demand compare generation
- Playbook generation with saved-summary reuse
- Server-side Arena history keyed by Arena email id
- Postgres-backed analysis history

## Tech Stack

- Next.js ^15.3.3 (App Router)
- React ^19.0.0
- Tailwind CSS v3
- TypeScript
- Prisma + PostgreSQL (Neon on Vercel)

## Infrastructure

- **DATABASE_URL:** set on Vercel when Neon is connected — do not commit real credentials

## Routes & Pages

- `/` — `app/page.tsx`
- `/access-denied` — `app/access-denied/page.tsx`
- `/history` — `app/history/page.tsx`
- `/report/:id` — `app/report/[id]/page.tsx`

## Database Models

- `Analysis`

## File Inventory

### App pages

- `app/access-denied/page.tsx`
- `app/arena-ds-tokens.css`
- `app/globals.css`
- `app/history/page.tsx`
- `app/layout.tsx`
- `app/loading.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `app/report/[id]/page.tsx`

### API routes

- `app/api/analyze/route.ts`
- `app/api/arena-history/route.ts`
- `app/api/arena-run/route.ts`
- `app/api/compare/route.ts`
- `app/api/playbook/route.ts`
- `app/api/search/route.ts`

### Components

- `components/AnalysisProgress.tsx`
- `components/AppHeader.tsx`
- `components/CompanyLogo.tsx`
- `components/CompanyResults.tsx`
- `components/CompetitorModal.tsx`
- `components/DataRenderer.tsx`
- `components/HistoryClient.tsx`
- `components/PlaybookModal.tsx`
- `components/PlaybookView.tsx`
- `components/ReportDashboard.tsx`
- `components/SearchClient.tsx`
- `components/arena-email-provider.tsx`

### Libraries

- `lib/actions.ts`
- `lib/arena-api.ts`
- `lib/arena-email-constants.ts`
- `lib/arena-email.ts`
- `lib/format.ts`
- `lib/prisma.ts`
- `lib/types.ts`
- `prisma/schema.prisma`

### Config

- `.env.example`
- `middleware.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package.json`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `tsconfig.json`

### Other

- `CHANGES.md`
- `README.md`
- `REPO_SUMMARY.md`

## Complete File Index

- `.env.example`
- `CHANGES.md`
- `README.md`
- `REPO_SUMMARY.md`
- `app/access-denied/page.tsx`
- `app/api/analyze/route.ts`
- `app/api/arena-history/route.ts`
- `app/api/arena-run/route.ts`
- `app/api/compare/route.ts`
- `app/api/playbook/route.ts`
- `app/api/search/route.ts`
- `app/arena-ds-tokens.css`
- `app/globals.css`
- `app/history/page.tsx`
- `app/layout.tsx`
- `app/loading.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `app/report/[id]/page.tsx`
- `components/AnalysisProgress.tsx`
- `components/AppHeader.tsx`
- `components/CompanyLogo.tsx`
- `components/CompanyResults.tsx`
- `components/CompetitorModal.tsx`
- `components/DataRenderer.tsx`
- `components/HistoryClient.tsx`
- `components/PlaybookModal.tsx`
- `components/PlaybookView.tsx`
- `components/ReportDashboard.tsx`
- `components/SearchClient.tsx`
- `components/arena-email-provider.tsx`
- `lib/actions.ts`
- `lib/arena-api.ts`
- `lib/arena-email-constants.ts`
- `lib/arena-email.ts`
- `lib/format.ts`
- `lib/prisma.ts`
- `lib/types.ts`
- `middleware.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package.json`
- `postcss.config.mjs`
- `prisma/schema.prisma`
- `tailwind.config.ts`
- `tsconfig.json`

## Latest Change

- **Updated at:** 2026-08-19T12:45:40.055Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:



1) If a competitor analysis was already generated for this analysis run. Open it to view it on the main screen.  This option then: don’t show the search button below; else, show it. 
2) After you open it, there is a “Comparison report” change it to a button to do the comparison. Make the API call 
curl --location 'https://agent.thearena.ai/api/workflows/674e91f8-608e-447a-89d4-19bbbc415e53/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'X-Sim-Stream-Protocol: agent-events-v1' \
--header 'Content-Type: application/json' \
--data-raw '{"email":"anush.ms@position2.com","id":"1787116888086","stream":true,"selectedOutputs":["compareagent.content"],"includeThinking":false,"includeToolCalls":false}'

Response :

data: {"blockId":"317329bd-8edf-4c20-b5a4-4200711f39f5","chunk":"##"}

data: {"blockId":"317329bd-8edf-4c20-b5a4-4200711f39f5","chunk":" Strategy"}

data: {"blockId":"317329bd-8edf-4c20-b5a4-4200711f39f5","chunk":" Overview"}

data: {"blockId":"317329bd-8edf-4c20-b5a4-4200711f39f5","chunk":"\n\n"} 



data: {"event":"final","data":{"success":true,"output":{},"executionId":"cb332cad-1398-41e8-a247-87f048d75434"}}

data: "[DONE]"



This will come in the history API as well, key is ‘compare,’ if compare is there, show the details, else  make the API call, and then streamed the results 

3) In the Get the playbook, if the data is present, then dont show Playbook mode just show the Open button

These should happen from the history tab as well 



Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
