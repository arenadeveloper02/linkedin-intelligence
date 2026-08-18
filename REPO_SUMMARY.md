# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-18T11:32:40.798Z.

## Overview

LinkedIn Intelligence (Watchtower). Edit summary: (1) lib/arena-api.ts — parseWorkflowText no longer lets an EMPTY final event ({}) shadow accumulated streamed chunks, parseChunkRecords now parses the whole accumulated chunk text as one JSON document first (the playbook streams a single multiline JSON object), and raw non-JSON chunk text is preserved keyed by blockId so it reaches the route. (2) app/api/playbook/route.ts — payload now uses stream:true per the documented curl, and the output mapping gained a fallback that resolves content keyed by an opaque block UUID (string content, {content} record, or a direct playbook record). (3) components/PlaybookModal.tsx — the competitor radio now also appears when the run has saved competitorOutput data (not only the hasCompetitor flag). (4) components/AppHeader.tsx — removed sticky top-0 z-40 so header tabs are no longer sticky. prisma/schema.prisma echoed unchanged (Analysis model, no column edits).

**Repository:** `linkedin-intelligence`  
**File count:** 42

## Features

- Company search and LinkedIn analysis reports
- Competitor analysis modal
- Strategic playbook generation with streamed Arena workflow parsing
- Arena email-gated history persistence

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

- `README.md`
- `REPO_SUMMARY.md`

## Complete File Index

- `.env.example`
- `README.md`
- `REPO_SUMMARY.md`
- `app/access-denied/page.tsx`
- `app/api/analyze/route.ts`
- `app/api/arena-history/route.ts`
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

- **Updated at:** 2026-08-18T11:32:40.798Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:



1) In the playbook button click if the   competitors data are available then show both the radio buttons … 
The API call is happening but the response is not mapped in the UI .. 

curl --location 'https://agent.thearena.ai/api/workflows/00bfdfb5-3726-4a32-a130-1eeb51d6a238/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'X-Sim-Stream-Protocol: agent-events-v1' \
--header 'Content-Type: application/json' \
--data-raw '{"email":"anush.ms@position2.com","id":"1787050395731","stream":true,"selectedOutputs":["playbookagent.content"],"includeThinking":false,"includeToolCalls":false}'


Response Format : 
data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"{\n"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" "}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" \""}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"headline"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"\":"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" \""}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"Turn"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" Position"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"²"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"’s"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" strong"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" AI"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"-native"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" thought"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" leadership"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" into"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" a"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" proof"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"-led"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" demand"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" engine"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" with"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" more"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" customer"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" outcomes"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" and"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" clearer"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" conversion"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" paths"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":".\",\n"}

ddata: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" loop"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":","}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" and"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" human"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" judgment"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" plus"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" AI"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":" execution"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":".\",\n"}

data: {"blockId":"620c9ad8-a2bb-4f9b-9d31-2c3f8f1c9768","chunk":"   "}

data: {"event":"final","data":{"success":true,"output":{},"executionId":"a3e7a80d-d3ae-4a60-a8ec-000d90dce5ac"}}

data: "[DONE]"


2) Don’t make the Header tabs sticky 


Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
