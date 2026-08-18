# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-18T10:50:58.246Z.

## Overview

LinkedIn Intelligence (Watchtower). Changed files: (1) components/CompetitorModal.tsx — added the 'Try:' example chips (Position2, Sambanova, Stripe) to the competitor popup, allowed runSearch to accept a term so chips trigger an immediate search, and added a parent-run-id fallback that resolves the previous run's id from /api/arena-history when the parentId prop is not supplied so the competitor workflow call is always linked to the previous own-brand run; results still render inside the popup only. (2) app/api/analyze/route.ts — the analyze workflow body now always includes isCompetitor (false for OWN, true for COMPETITOR) and id ('' for OWN, parent run id for COMPETITOR) exactly per the provided curl spec. (3) prisma/schema.prisma — echoed unchanged (mandatory on every database-backed edit). No other files touched.

**Repository:** `linkedin-intelligence`  
**File count:** 42

## Features

- Company search via Arena workflow
- Own-brand LinkedIn intelligence analysis
- Competitor analysis popup with Try: examples, in-popup search, and in-popup report
- Playbook generation
- Server-side history keyed by Arena email id

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

- **Updated at:** 2026-08-18T10:50:58.246Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:



1) Once the user clicks on Analyse in the 1 st screen home page  …
API 

curl --location 'https://agent.thearena.ai/api/workflows/13e76c2b-bbdc-43c5-835e-92027a6c43e9/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"companyName":"Position2","companyId":"60223","email":"anush.ms@position2.com","type”:”OWN”,”isCompetitor”:false,”id”:””,”stream":true,"selectedOutputs":["strategyagent.strategy","strategyagent.personas","strategyagent.hookLibrary","strategyagent.ctaLibrary","strategyagent.audienceDetail","contentcreativeagent.content","contentcreativeagent.creative","contentcreativeagent.engagement","contentcreativeagent.topicClusters","messagingagent.company","messagingagent.messaging","messagingagent.stats","messagingagent.summary","creativeinsightagent.imageryTypes","creativeinsightagent.recommendations","creativeinsightagent.observations","creativeinsightagent.textStyle","competitiveagent.campaigns","competitiveagent.competitive","competitiveagent.launches","competitiveagent.messagingEvolution","competitiveagent.recommendations","competitiveagent.scorecard","competitiveagent.scorecardOverall","getcompanyprofile.id","getcompanyprofile.name","getcompanyprofile.description","getcompanyprofile.public_identifier","getcompanyprofile.profile_url","getcompanyprofile.followers_count","getcompanyprofile.employee_count","getcompanyprofile.website","getcompanyprofile.logo","getcompanyprofile.profile","getcompanypost.items"],"includeThinking":false,"includeToolCalls":false}'


1) Once the user clicks on Competitor analysis after the above response in the next screen…
Show a pop up to take the Company name also with the Try: options as well 
Then they click on analyse competitor then an API CALL 
curl --location 'https://agent.thearena.ai/api/workflows/c821b89f-5f32-44b3-9cc6-c0eea5b72b36/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'X-Sim-Stream-Protocol: agent-events-v1' \
--header 'Content-Type: application/json' \
--data '{
    "companyName": "Position2",
    "stream": false,
    "selectedOutputs": [
        "companylistingagent.companies"
    ],
    "includeThinking": false,
    "includeToolCalls": false
}'

Show the details in the popup only 
Then  once the user selects the company … then Call this API 

curl --location 'https://agent.thearena.ai/api/workflows/13e76c2b-bbdc-43c5-835e-92027a6c43e9/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"companyName":"Position2","companyId":"60223","email":"anush.ms@position2.com","type”:”COMPETITOR”,”isCompetitor”:true,”id”:”Id from the previosu run “,”stream":true,"selectedOutputs":["strategyagent.strategy","strategyagent.personas","strategyagent.hookLibrary","strategyagent.ctaLibrary","strategyagent.audienceDetail","contentcreativeagent.content","contentcreativeagent.creative","contentcreativeagent.engagement","contentcreativeagent.topicClusters","messagingagent.company","messagingagent.messaging","messagingagent.stats","messagingagent.summary","creativeinsightagent.imageryTypes","creativeinsightagent.recommendations","creativeinsightagent.observations","creativeinsightagent.textStyle","competitiveagent.campaigns","competitiveagent.competitive","competitiveagent.launches","competitiveagent.messagingEvolution","competitiveagent.recommendations","competitiveagent.scorecard","competitiveagent.scorecardOverall","getcompanyprofile.id","getcompanyprofile.name","getcompanyprofile.description","getcompanyprofile.public_identifier","getcompanyprofile.profile_url","getcompanyprofile.followers_count","getcompanyprofile.employee_count","getcompanyprofile.website","getcompanyprofile.logo","getcompanyprofile.profile","getcompanypost.items"],"includeThinking":false,"includeToolCalls":false}'



Show the results in the pop Only … 




Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
