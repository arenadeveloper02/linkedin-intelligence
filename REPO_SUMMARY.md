# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-19T05:18:20.553Z.

## Overview

LinkedIn Intelligence (Watchtower). Changes: (1) components/DataRenderer.tsx — isImageUrl now treats LinkedIn media CDN URLs as images and object entries with a 'logo' key render an <img> instead of a URL link, so the brand snapshot shows the logo image. (2) components/SearchClient.tsx — button texts changed to 'Get the playbook' and 'Compare with another'; competitor results now render on the main screen with a back button to the initial own-brand output (ownSnapshot state); playbook results render on the main screen (new 'playbook' view) with a back button to the report. (3) components/PlaybookModal.tsx — radio buttons removed (always own-brand source); modal now only triggers generation and forwards the result to the main screen via onResult. (4) components/CompetitorModal.tsx — popup now shows the current client's name, logo, LinkedIn link and followers; search + results stay in the popup; listing button renamed to 'Compare with another' and selecting a listing runs the comparison on the main screen via onSelect. (5) components/PlaybookView.tsx — new component with the playbook rendering extracted from the old modal. (6) lib/types.ts — added PlaybookResult interface only. (7) prisma/schema.prisma — echoed unchanged (no schema changes).

**Repository:** `linkedin-intelligence`  
**File count:** 43

## Features

- Brand snapshot renders the company logo image instead of a raw URL
- 'Get the playbook' and 'Compare with another' popups with results on the main screen
- Back navigation from competitor report and playbook to the initial output
- Competitor popup shows current client name, logo, LinkedIn link and followers
- Playbook generation without source radio buttons

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

- **Updated at:** 2026-08-19T05:18:20.553Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:



1) Logo In brand snapshot should show the image instead of URL 

2) Change text from competitor analysis to “Compare with another”  and Playbook to “Get the playbook”

3)  Remove the logic to show both the radio buttons in the “Get the playbook”

4) Both “Get the playbook” and  “Compare with another” should open the open popup and the results should be in the main screen … there should be back option to go to the initial  Output 

5) Show The current Client name and the logo and LinkedIn Link  and the followers in the popup Once the user clicks on  “Compare with another”   then the search should come once the user clicks on search the results will show in the popup and once the user clicks on the one of the listing then show the results in the main screen  and change the text only in this popup from Analyse to   “Compare with another” only in this popup 

Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
