# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-18T10:15:10.497Z.

## Overview

LinkedIn Intelligence (Watchtower) — single Analyze action on search results (OWN analysis with Arena email), remote Arena run History view with read-only report reload, post-report Playbook (Own/Competitor radio) and Competitor Analysis popup flows wired to the Arena workflows. Changed files: components/SearchClient.tsx (single-analyze flow, History view via /api/arena-history, report action bar with Playbook + Competitor Analysis, run-id resolution), components/CompanyResults.tsx (single Analyze button), components/CompetitorModal.tsx (new popup: text + search + company select), components/PlaybookModal.tsx (new popup: Own/Competitor radio + playbook rendering), app/api/analyze/route.ts (adds email, type OWN/COMPETITOR, isCompetitor, parent id to workflow body), app/api/arena-history/route.ts (new: history workflow bc8877bb, maps runs + namespaces output), app/api/playbook/route.ts (new: playbook workflow 00bfdfb5), lib/arena-api.ts (competitor workflow id, HISTORY/PLAYBOOK workflow ids, namespaceHistoryOutput), lib/types.ts (ArenaRunEntry, Playbook* types), lib/actions.ts (unchanged echo), prisma/schema.prisma (unchanged baseline echo — no columns edited).

**Repository:** `linkedin-intelligence`  
**File count:** 42

## Features

- Single Analyze action on company results (runs OWN brand analysis with session email)
- History view backed by the Arena history workflow with View-to-report reload
- Competitor Analysis popup: search, select, and run competitor analysis linked to the current run id
- Playbook popup with Own/Competitor radio (Competitor only when competitor data exists)
- Playbook rendering: headline, quick wins, recommendations, cadence, gaps, campaign ideas, activities, engagement plays

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

- **Updated at:** 2026-08-18T10:15:10.497Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:

1)  After the list API results are shown , don’t show 2 options for Own brand Analysis or competitor analysis—> just show only analysis ..
In API call add these parameters "email":" Fromm the session”,”type":"OWN" in the body parameter fro the Request .. 
2) Add a "History" section to this **[Tool Name]** tool. Requirements:

**1. Location & trigger**
Add a "History" button/tab in the header area (next to or near the title) that toggles between the main "**[Main View Name — e.g. Generator/Editor/Builder]**" view and a "History" view.

**2. What gets saved**
Every time the user clicks "**[Primary Action Button Label — e.g. Get Recommendations / Generate / Submit]**" and a result is produced, save a history entry containing:
- **[Input Field 1 — e.g. Target Keyword / Prompt / Topic]**
- **[Input Field 2 — e.g. Client/Brand / Project Name / Category]** *(add or remove input fields as needed)*
- Timestamp (date + time of generation)
- The full generated output (**[describe output shape — e.g. the title, headings, and body content]**)

**3. History view UI**
Show entries as a reverse-chronological list (newest first), each as a card showing: **[input field(s)]**, timestamp, and a short preview of **[the most representative piece of the output, e.g. the title/first line/summary]**.

Each card should have:
- A "View" button/click action that loads that entry's full output back into the main results view (read-only, non-editable)

If there's no history yet, show an empty state message like "No previous runs yet — generate your first **[output type]** to see it here."

**4. Persistence**
Store history using in-memory React state (use `useState`/array), since browser storage isn't available in this environment. Note in a comment that this resets on page reload, and if the user wants persistence across sessions, they'd need to connect a backend/database.

**5. Styling**
Match the existing design — same **[card style — e.g. rounded cards]**, **[accent color — e.g. purple/indigo]** accent color, clean spacing, and typography already used in the tool.

Keep the existing **[Main View Name]** view and functionality fully intact — just add History as an additional view/tab.

---
API call :
curl --location 'https://agent.thearena.ai/api/workflows/bc8877bb-bdda-445f-a1a0-9eb1709af4b6/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"email":"anush.ms@position2.com","stream":false,"selectedOutputs":["response.result"]}'

Response :
{
    "success": true,
    "executionId": "1cdfb333-8df0-4f35-81e7-c3f6b9243b3b",
    "output": {
        "result": [
            {
                "id": "1787042977529",
                "user_email": "anush.ms@position2.com",
                "input": {
                    "companyId": "18464083",
                    "companyName": "Sambanova"
                },
                "output": {
                    "id": "18464083",
                    "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                    "name": "SambaNova",
                    "items": [
                        {
                            "id": "7495155059354181633",
                            "date": "16h",
                            "text": "We talk a lot about premium inference. And we get asked about it a lot, too.\n\n1. What is it?\nFast, responsive serving for large, intelligent models, a distinct tier for workloads where speed really matters.\n\n2. Why does agentic AI need it?\nA chatbot answers once. An agent plans, calls tools, reads results, and keeps going. When every step generates more tokens, slow inference slows down the entire workflow.\n\n3. What makes it hard?\nSpeed, throughput, reliability, and cost all have to work together. Bigger models bring more memory movement and serving complexity, while higher concurrency can improve overall throughput but hurt the experience for individual users.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_premium-inference-explained-activity-7495155059354181633-i5jR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495155058511110144",
                            "attachments": [
                                {
                                    "id": "D5610AQHSCAtFDrfRoA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHSCAtFDrfRoA/mp4-720p-30fp-crf28/B56aAQjyyTH4Bk-/0/1786984217783?e=1787648400&v=beta&t=0ZG11bY7eF_35vjZQW_fU2I7nxE4EmH1_ZJDo0Fhfew",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-17T16:30:19.397Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493782883715768320",
                            "date": "4d",
                            "text": "We're going to be at Hot Chips Symposium 2026 🔥\n\nRaghu Prabhakar will be presenting \"Dataflow at Scale: the SN50 RDU\" in the AI 2 session, a look at how dataflow architecture holds up when you push it to production inference scale.\n\nIf you're going to be at Stanford University next week, come find us.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/hotchips/",
                                    "start": 21,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAJnrIABgWqNu--cIIicrkWcIHVHYd8bIRU",
                                    "start": 49,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/stanford-university/",
                                    "start": 258,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_were-going-to-be-at-hot-chips-symposium-activity-7493782883715768320-F2Y-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493782882788790273",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-13T21:37:47.231Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493443489666408448",
                            "date": "5d",
                            "text": "What happens when bigger, smarter models also get faster? 🤔\n\nYou get a new category of AI experience: premium inference. \n\nAs models scale, speed becomes just as important as intelligence. For agents and other latency-sensitive workloads, every token matters.\n\nThe next step isn't just serving more tokens. It's serving better tokens, faster.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-premium-inference-moment-is-here-activity-7493443489666408448-fjR8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493443488844369920",
                            "attachments": [
                                {
                                    "id": "D4E10AQGgZ3vh7K1DHA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGgZ3vh7K1DHA/mp4-720p-30fp-crf28/B4EZ_4PIaNJQBk-/0/1786576147840?e=1787648400&v=beta&t=YxTKiPG_pq5epzn9CoQaHIi9J4U5cy3RknUJw8nfLWs",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-12T23:09:09.384Z",
                            "reaction_counter": 37,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493376720620736512",
                            "date": "5d",
                            "text": "Congratulations to our friends at INFERCOM on winning Gold in the International Business Awards for AI-Driven Startup of the Year! \n\nTheir vision for sovereign AI is one we’re proud to support: delivering fast, production-ready inference while keeping data and models securely in Europe.\n\nWell deserved 👏",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/infercomai/",
                                    "start": 34,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7493376720620736512",
                            "share_url": "https://www.linkedin.com/posts/sambanova_infercom-has-won-a-gold-stevie-for-ai-driven-activity-7493376720620736512-0nxK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7493376720620736512",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7493240856661962753",
                                "date": "5d",
                                "text": "Infercom has won a Gold Stevie for AI-Driven Startup of the Year in the 23rd International Business Awards.\n\nThe entry was titled \"European Sovereign Ultra Speed Inference Service\". That is a long name for two things the market keeps telling European companies they cannot have at the same time: keep your data in Europe, and run fast.\n\nThat combination is our commitment. Your AI runs with us without your data leaving Europe. We serve open-weight models only, so no model can be retired out from under you. We keep nothing: nothing stored, nothing trained on. Our API is OpenAI-compatible, so leaving us costs you a base URL and an API key.\n\nThen the speed, which is the part nobody expects from a sovereign provider. Time to first token of a few hundred ms, then 400 to 750 tokens per second depending on the model. That is not a brochure number. Try it yourself.\n\nThank you to the customers and partners who put production traffic on our platform and gave us their valuable feedback what we can improve further. They earned this one.",
                                "author": {
                                    "id": null,
                                    "name": "INFERCOM",
                                    "is_company": true,
                                    "public_identifier": "infercomai"
                                },
                                "parsed_datetime": "2026-08-12T09:43:57.911Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-12T18:43:50.403Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-12T18:43:50.403Z"
                        },
                        {
                            "id": "7493068208728403968",
                            "date": "6d",
                            "text": "Really enjoyed SemiAnalysis's deep dive on TileRT and ultra-high interactivity inference. Great explainer of why speed in AI responses comes down to how fast you can move data in and out of memory, not just how much compute you have, and how much work it takes to make a GPU act more like purpose-built dataflow hardware.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 15,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7493078823815553024",
                            "share_url": "https://www.linkedin.com/posts/sambanova_alert-tilert-from-tilertai-to-boost-activity-7493078823815553024-ahIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493068208728403968",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7493005299784794112",
                                "date": "6d",
                                "text": "ALERT🚨: TILERT from TileRT_AI  TO BOOST DECODE INTERACTIVITY BY 1.9X AT THE SAME PER-TOKEN COST ON THE SAME NVIDIA BLACKWELL GPUs. What does this mean for Groq/Cerebras/SambaNova? 👇️ \n\nAn 8-GPU HGX B200 server provides a theoretical HBM memory bandwidth of 64 TB/s. At batch size 1, GLM-5 at NVFP4 requires only ~21 GB of active parameters per generated token. The B200 bandwidth roofline would therefore suggest up to 3,047 tokens/s/user without speculative decoding. In practice, GPUs come nowhere close to this limit.\n\nThe gap comes from latency rather than bandwidth. The traditional GPU programming model launches and synchronizes many individual kernels, whose setup and teardown overhead becomes significant at ultra-high levels of interactivity. While these latency costs are less visible at conventional serving speeds, even with CUDA graphs, they dominate as token latency approaches the sub-millisecond Time Per Output Token (TPOT) range. Furthermore, although GPU memory bandwidth increases by roughly 2–3× each generation, memory latency has not improved at all.\n\nThis is where TileRT comes in. Instead of continuously launching kernels or replaying a DAG of kernels, TileRT has the GPU continuously execute a persistent pipeline, statically compiling the entire model ahead of time into a persistent Engine Kernel: the host launches once, execution stays resident on the GPU for the entire decode lifecycle, and most runtime orchestration moves into compile time.\n\nFor full explainer, check out our article:\nhttps://lnkd.in/ewQZq3sn",
                                "author": {
                                    "id": null,
                                    "name": "SemiAnalysis",
                                    "is_company": true,
                                    "public_identifier": "semianalysis"
                                },
                                "parsed_datetime": "2026-08-11T18:07:56.775Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-08-11T22:17:55.436Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-11T23:00:06.270Z"
                        },
                        {
                            "id": "7493055041961066496",
                            "date": "6d",
                            "text": "For years, the conversation around AI infrastructure was largely about how cheaply you could run a model.\n\nAgentic AI is changing that.\n\nWhen an agent plans, calls tools, reads context, and generates thousands—or even millions—of tokens across a workflow, latency compounds. Fast inference isn't just a better experience. It can determine whether the product works the way users expect.\n\nThat's creating a new category: premium inference.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_for-years-the-conversation-around-ai-infrastructure-activity-7493055041961066496-kxEF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7493055041961066496",
                            "attachments": [
                                {
                                    "id": "D5610AQHkVIiHvQG74w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkVIiHvQG74w/image-shrink_480/B56Z_yt1hmG4AQ-/0/1786483530282?e=1787648400&v=beta&t=kdD-MjyooGOxakRSNCcbUMuS4Pqo713vasrF_-G1MNU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-08-11T21:25:36.234Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7492994571178504194",
                            "date": "6d",
                            "text": "Training gets the headlines, but inference is where AI comes to life. Every token, every query, every agent interaction.\n\nWe're focused on making that inference faster and more efficient by tackling one of the biggest challenges at scale: data movement. ⚡",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_training-inference-activity-7492994571178504194-XVSA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7492994570448883713",
                            "attachments": [
                                {
                                    "id": "D5610AQHnbyZRMDPN3g",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHnbyZRMDPN3g/mp4-720p-30fp-crf28/B56Z_x2zWxHUBk-/0/1786469108530?e=1787648400&v=beta&t=BeQpId65lrCTgckM0jmHJbcVf_Oh60ertmx0DFDJjZI",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-11T17:25:18.876Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7492630435458351104",
                            "date": "1w",
                            "text": "Great to spend some time with our friends at NYSE today!  Thank you for the hospitality, Brian J. Baumann!",
                            "author": {
                                "id": "ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                "name": "Rodrigo Liang",
                                "headline": "Co-Founder & CEO at SambaNova Systems",
                                "is_company": false,
                                "public_identifier": "rodrigo-liang"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/nyse/",
                                    "start": 45,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACDH74Bz1V8FX9vdpWgMkBN0ZcDOr54uOw",
                                    "start": 89,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7492679116274642946",
                            "share_url": "https://www.linkedin.com/posts/rodrigo-liang_great-to-spend-some-time-with-our-friends-ugcPost-7492630435458351104-l8qr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7492630435458351104",
                            "attachments": [
                                {
                                    "id": "D5622AQFGSDe3Ag6gpg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFGSDe3Ag6gpg/feedshare-shrink_800/B56Z_sroKKKMAc-/0/1786382291948?e=1788393600&v=beta&t=1GMUdNHphojpkWv5MqoPjntwZNl7OCJjQfqBQ3ZBPuI",
                                    "size": {
                                        "width": 800,
                                        "height": 1037
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGu6e4-7mrvOQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGu6e4-7mrvOQ/feedshare-shrink_480/B56Z_sroSIKAAg-/0/1786382300797?e=1788393600&v=beta&t=Eu8hIYnajw-eM6grJX17mx96WGc8sbmohACP5frZPa4",
                                    "size": {
                                        "width": 480,
                                        "height": 716
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "reposted_by": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova"
                            },
                            "repost_counter": 6,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-08-10T17:18:22.155Z",
                            "reaction_counter": 183,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-10T20:31:48.566Z"
                        },
                        {
                            "id": "7491569873391792128",
                            "date": "1w",
                            "text": "Ai4 - Artificial Intelligence Conferences, you were a blast. 🦾 Thanks to everyone who stopped by our booth, shared ideas, and talked inference with us. We loved the conversations and can't wait to do it again.\n\nOn to the next! 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/ai4/",
                                    "start": 0,
                                    "length": 41
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai4-artificial-intelligence-conferences-activity-7491569873391792128-4MMN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7491569872578064384",
                            "attachments": [
                                {
                                    "id": "D4E10AQHh3CssXN79cA",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHh3CssXN79cA/image-shrink_480/B4EZ_dnGYcIsAQ-/0/1786129442685?e=1787648400&v=beta&t=zWrmjiK6Ewp6bADxXiBLDXtl03sOZ9JKUs7lI8IvV2I",
                                    "size": {
                                        "width": 480,
                                        "height": 320
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D4E10AQHeVL15OT_CZw",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHeVL15OT_CZw/image-shrink_480/B4EZ_dnGiyIgAU-/0/1786129444051?e=1787648400&v=beta&t=TAq-eqeFHN5TaVhtWkTjAZBI7jQzQfd2CRbdh9-gba8",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D4E10AQEBM2VvusHXVw",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQEBM2VvusHXVw/image-shrink_480/B4EZ_dnGyjJYAQ-/0/1786129445289?e=1787648400&v=beta&t=zdtJAzm8_Sz5JNX5k3n8WwxHOJSqf_CMlhy5VgWNHhU",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-07T19:04:04.454Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7491233687796232192",
                            "date": "1w",
                            "text": "Thank you to Washington Post Live for hosting our CEO, Rodrigo Liang, to discuss the growing demand for AI, the importance of inference, and what it will take to power the next generation of enterprise AI.\n\nCheck out their conversation. ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/washington-post-live/",
                                    "start": 13,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 55,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7491233688639328256",
                            "share_url": "https://www.linkedin.com/posts/sambanova_buildingamerica-activity-7491233688639328256-1oF5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7491233687796232192",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7486475558462152704",
                                "date": "3w",
                                "text": "Can AI infrastructure keep up with the demand from users? \n\n\"The capabilities of this technology far outpace what we even thought. The amount of infrastructure support to actually meet the needs of that demand is still catching up to it,\" AI chip startup SambaNova CEO told Adam O’Neal in a conversation for the #BuildingAmerica vodcast. \n\nThe series explores how America builds, innovates and manufactures heading into the future. \n\nThe first three episodes of the Building America vodcast are presented by Micron Technology.",
                                "author": {
                                    "id": null,
                                    "name": "Washington Post Live",
                                    "is_company": true,
                                    "public_identifier": "washington-post-live"
                                },
                                "parsed_datetime": "2026-07-24T17:41:05.127Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-06T20:48:11.562Z",
                            "reaction_counter": 37,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-06T20:48:11.763Z"
                        },
                        {
                            "id": "7490907525257580544",
                            "date": "1w",
                            "text": "Backed by not one, but TWO independent benchmarks. 😏\n\nSemiAnalysis recently benchmarked MiniMax M2.7 running on SN50 using vLLM, measuring ~800 tokens/second at the fastest interactivity.\n\nWhat's even more exciting? The results align with what we demonstrated live at the RAISE Summit, where Artificial Analysis measured 800+ tokens/second on SN50.\n\nTwo independent validations. One consistent result. See for yourself! ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 54,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 88,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 272,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 292,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_how-fast-is-minimax-m27-on-sn50-activity-7490907525257580544-8_CU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490907524355985409",
                            "attachments": [
                                {
                                    "id": "D5610AQEm2hdV3SUwvA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEm2hdV3SUwvA/mp4-720p-30fp-crf28/B56Z_UMr0CK8Bk-/0/1785971525242?e=1787648400&v=beta&t=wgMc-FX6xCkVgY9ymUVNEVtKpV6IA1us5-oTLqiqjOs",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-05T23:12:08.353Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490794117401284608",
                            "date": "1w",
                            "text": "NYSE Wired shoutouts always hit different 😎",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/thecube-wired/",
                                    "start": 0,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7490794117975781377",
                            "share_url": "https://www.linkedin.com/posts/sambanova_nysewired-thecube-sambanova-activity-7490794117975781377-ezrS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490794117401284608",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7490792973744529409",
                                "date": "1w",
                                "text": "Congratulations to Mohsen Moazami on his appointment as vice chair of global strategy and partnerships at SambaNova.\n\nWishing you every success as you begin this exciting new chapter. 🚀 \n\nJohn Furrier | Gemma Allen | Brian J. Baumann \n \n#NYSEWired #theCUBE #SambaNova",
                                "author": {
                                    "id": null,
                                    "name": "NYSE Wired",
                                    "is_company": true,
                                    "public_identifier": "thecube-wired"
                                },
                                "parsed_datetime": "2026-08-05T15:36:57.144Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-05T15:41:29.813Z",
                            "reaction_counter": 31,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-05T15:41:29.950Z"
                        },
                        {
                            "id": "7490439916649115648",
                            "date": "1w",
                            "text": "Mohsen Moazami is truly a force in the industry and this interview just highlights it even more. \n\nWe're incredibly honored to have him on the SambaNova team! Welcome aboard, Mohsen 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "start": 0,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7490439917425065984",
                            "share_url": "https://www.linkedin.com/posts/sambanova_mohsen-moazami-from-tehran-to-the-centre-activity-7490439917425065984-fFGK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490439916649115648",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7490018000138579969",
                                "date": "2w",
                                "text": "Thank you Sam Wellalage BSC MA for this opportunity to talk about life, AI and tech in general. DDN",
                                "author": {
                                    "id": "ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "name": "Mohsen Moazami",
                                    "is_company": false,
                                    "public_identifier": "mohsenmoazami"
                                },
                                "parsed_datetime": "2026-08-03T12:17:29.038Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-04T16:14:01.773Z",
                            "reaction_counter": 7,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-04T16:14:01.958Z"
                        },
                        {
                            "id": "7490380623509991424",
                            "date": "1w",
                            "text": "Our squad just keeps getting stronger. 🦾  Mohsen Moazami is joining SambaNova as Vice Chair of Global Strategy & Partnerships, reporting to Rodrigo Liang. \n\nMohsen has supported some of the world's hottest technology companies, enabling global expansion, forging strategic relationships, and navigating major industry shifts.\n\nAs demand for premium inference continues to grow, he’s the ideal person to help lead our next chapter.\n\nWelcome to SambaNova, Mohsen!",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "start": 42,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 140,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-squad-just-keeps-getting-stronger-activity-7490380623509991424-TBwA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490380622402822144",
                            "attachments": [
                                {
                                    "id": "D5610AQFttX39grkzSw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFttX39grkzSw/mp4-720p-30fp-crf28/B56Z_MteCDHUBk-/0/1785845902152?e=1787648400&v=beta&t=Jf6R3OsCg5Mh5OaRcs2jv6Geyyy2598tJuvStQgcLhg",
                                    "size": {
                                        "width": 1200,
                                        "height": 626
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 9,
                            "comment_counter": 14,
                            "parsed_datetime": "2026-08-04T12:18:25.187Z",
                            "reaction_counter": 149,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490108309706911744",
                            "date": "2w",
                            "text": "Companies are vying to harness AI's full potential, but with big funding comes big questions about value. With billions being raised, we'll see who rises to the top. \n\n\"We'll see some superb winners — and a lot of losers.\" — Dharmesh Thakker. \n\n🎥 Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 225,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 247,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-startups-will-have-superb-winners-and-activity-7490108309706911744-EpUq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490108308620529665",
                            "attachments": [
                                {
                                    "id": "D5610AQFUYvRf6NJ7WA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFUYvRf6NJ7WA/mp4-720p-30fp-crf28/B56Z_I1wx2G0Bo-/0/1785780970458?e=1787648400&v=beta&t=gaHvmE3wI5_kikunBoeaFN-c359RR65YyK0FsPFcpz4",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-03T18:16:20.517Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7489037475500367872",
                            "date": "2w",
                            "text": "Being verified by SemiAnalysis is such an important milestone for us. Not only is it our first demonstration of SN50 RDU system performance, but also a real working demonstration of heterogeneous inference with GPUs. \n\nSee how the SN50 compares to SN40 ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 18,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sn40-vs-sn50-activity-7489037475500367872-OquF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7489037474741014528",
                            "attachments": [
                                {
                                    "id": "D5610AQEQE5FMsJo_nw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEQE5FMsJo_nw/mp4-720p-30fp-crf28/B56Z.5n4lwGUBk-/0/1785525672363?e=1787648400&v=beta&t=gu-FI1qzZO3yjP_5SQi7PEytcvGkGZmnoNeKMIqM-e0",
                                    "size": {
                                        "width": 1266,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 11,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-31T19:21:13.747Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488705517587034112",
                            "date": "2w",
                            "text": "The best performance claims are the ones validated by someone else. ⚡️\n\nDylan Patel and the SemiAnalysis team just benchmarked the SN50 RDU running MiniMax M2.7, independently validating the decode performance we've been demonstrating.\n\nThe results speak for themselves. SN50 is over 3x faster than GPUs.\n\nFor developers building coding assistants and agentic applications, faster decode means faster responses, better interactivity, and a noticeably better user experience. We’ve got the first and fastest premium inference chip.\n\nAs inference becomes the defining AI workload, independent benchmarks matter. See the numbers for yourself ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB8d8VsBwtg6yQBH5VUPQlfMARk9Z8ca3s0",
                                    "start": 72,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 92,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 148,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-best-performance-claims-are-the-ones-activity-7488705517587034112-uPPQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7488705517587034112",
                            "attachments": [
                                {
                                    "id": "D5610AQGERz0SiIF_ew",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGERz0SiIF_ew/image-shrink_480/B56Z.0591RKEAQ-/0/1785446522796?e=1787648400&v=beta&t=90TMFWpH3bqGzlfh76wxATI7z20j9aqm4BLJ0LSqILc",
                                    "size": {
                                        "width": 480,
                                        "height": 293
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 29,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-07-30T21:22:08.813Z",
                            "reaction_counter": 157,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488635355429183488",
                            "date": "2w",
                            "text": "July was an absolute ride, from the RAISE Summit in Paris to joining The U.S. Department of Energy (DOE)'s Genesis Mission Consortium. \n\nSwipe through to catch up with our month— and where you can find us next 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 36,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 73,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_july-2026-sambanova-lightning-digest-activity-7488635355429183488-UMao?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7488635354439319552",
                            "attachments": [
                                {
                                    "id": "D561FAQGk-PZ36GQqUw",
                                    "url": "https://media.licdn.com/dms/document/media/v2/D561FAQGk-PZ36GQqUw/feedshare-document-sanitized-pdf/B56Z.z5JEPJoA8-/0/1785429530337?e=1787648400&v=beta&t=oEcbCWXuHHIoV22hP1KqeQCAwvTMgsM16_RYC0rg1uY",
                                    "type": "file",
                                    "mimetype": "application/pdf",
                                    "file_name": "July 2026 SambaNova Lightning Digest",
                                    "file_size": 0,
                                    "unavailable": false,
                                    "url_expires_at": 1787648400000
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-30T16:43:20.851Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488354847314890752",
                            "date": "2w",
                            "text": "SambaNova wouldn't exist without open source.\n\nOpen models have helped create an entire ecosystem of builders—from model developers to AI infrastructure companies like us.\n\nAs inference becomes the next frontier, we'll need innovation everywhere: models, silicon, systems, and software.\n\nIt's not open OR closed. It's open AND closed. Both push the industry forward.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7488354847314890752",
                            "share_url": "https://www.linkedin.com/posts/sambanova_industry-leaders-unite-in-open-secure-ai-activity-7488354847314890752-9Vip?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7488354847314890752",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7488037067751612416",
                                "date": "2w",
                                "text": "This letter is important, and SambaNova has signed it. \n\nSambaNova would not exist without open source models. In fact, every company building an AI chip today exists because of open weights.\n\nA chip is a multi-year bet on what will run on it. If the best models were locked inside a few frontier labs, chip startups would be designing blind - generic hardware, generic compiler, hand it over and hope. Nobody funds that company. The incumbent's software moat just gets deeper.\n\nOpen models flipped it. We can see exactly what the best models look like - architectures, weights, everything - and tune our systems down to the silicon before a customer runs a single token. That's the only reason a startup can take on the hardest problem in computing and win on real workloads.\n\nThis matters far beyond chip companies. Compute is the constraint on AI right now - especially inference, where the next decade of spend is going. No one company can supply it all. No one architecture solves everything. You break a constraint like that with more builders attacking it from more angles. Open source is what lets those builders exist.\n\nHere's the irony, and I mean it warmly: the openness Jensen is defending is the same openness that paved the way for companies like SambaNova. It takes confidence to argue for the conditions that expand the ecosystem - but he's right to. Nothing this important should depend on one company, one chip, or one model. And no, this isn't a knock on closed models. We work with frontier labs too. Both should win.\n\nSo: fierce agreement with the letter. Open models are why there's a race and everyone runs faster for it.",
                                "author": {
                                    "id": "ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "name": "Rodrigo Liang",
                                    "is_company": false,
                                    "public_identifier": "rodrigo-liang"
                                },
                                "parsed_datetime": "2026-07-29T01:05:57.953Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-29T22:08:42.505Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-29T22:08:42.505Z"
                        },
                        {
                            "id": "7488311674584715264",
                            "date": "2w",
                            "text": "Incredible conversation between Noah Bovenizer & Abhi I.! \n\nA few standout takeaways:\n\n- Shipping one AI chip is hard. Shipping five in seven years is what builds trust.\n- We don't try to solve every AI workload. We focus on what we do best: running large models fast.\n- Premium inference is where performance and efficiency matter most.\n- The best infrastructure is the one that helps customers succeed—whether that's all SambaNova or a heterogeneous, disaggregated stack.\n\nWorth a watch ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAC5EaCkB3TnonEQz6wAdlHZEOJwP13aY0dg",
                                    "start": 32,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 49,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7488311675440242688",
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-chips-startups-activity-7488311675440242688-V0jh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7488311674584715264",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7488228342349934592",
                                "date": "2w",
                                "text": "\"We are very confident about the niche that we occupy. That area of premium inferencing is growing, and we think there's going to be a place for all of these chips to be able to work together,\" says SambaNova CPSO Abhi I. about the startup's place in the booming chip industry.\n\nThe company has certainly staked its claim among #AI chip makers, achieving an $11bn valuation with its Series F earlier this month after finding success with selling #chips based on its RDU architecture for inference.\n\nIngle spoke to The Stack about this technology, why \"premium inferencing\" is the company's focus, and working with existing infrastructure.\n\n\nRead the full interview 👉 https://lnkd.in/eYNNa9Mb\n\n#Startups #AIChips #SambaNova",
                                "author": {
                                    "id": null,
                                    "name": "The Stack",
                                    "is_company": true,
                                    "public_identifier": "stackpublishing"
                                },
                                "parsed_datetime": "2026-07-29T13:46:01.371Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-29T19:17:09.324Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-29T19:17:09.528Z"
                        },
                        {
                            "id": "7487991830337220608",
                            "date": "2w",
                            "text": "🔥 Hot take: An AI data center isn't defined by how many GPUs it has.\n\nIt's defined by how efficiently it runs AI.\n\nHere's what makes an AI data center different—and why inference is changing the architecture.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-an-ai-data-center-isnt-defined-activity-7487991830337220608-vqWb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487991830337220608",
                            "attachments": [
                                {
                                    "id": "D5610AQFCAZNvuyFGnA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFCAZNvuyFGnA/image-shrink_480/B56Z.qw249KAAU-/0/1785276363208?e=1787648400&v=beta&t=rASlgcH3eaeCH_aO-yBUAutTGVlJZWIoWZtamwQzs1o",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-28T22:06:12.513Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7487922936289398785",
                            "date": "2w",
                            "text": "One of the standout conversations from RAISE Summit 🦾 \n\nRodrigo Liang, Monti Saroya, and Dylan Patel dug into one of the biggest shifts happening in AI today: the move from training to inference.\n\nAs models become more capable and agentic workloads become the norm, the conversation is no longer just about building bigger models, but about delivering them efficiently, economically, and at scale.\n\nDefinitely worth a watch ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 39,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 56,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAGrqoQcBbeEESWwkeMHkjzyiHGP0LZXCwSc",
                                    "start": 71,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB8d8VsBwtg6yQBH5VUPQlfMARk9Z8ca3s0",
                                    "start": 89,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7487922936289398785",
                            "share_url": "https://www.linkedin.com/posts/sambanova_earlier-this-month-monti-saroya-joined-rodrigo-activity-7487922936289398785-dtn0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487922936289398785",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7487891736472776704",
                                "date": "2w",
                                "text": "Earlier this month, Monti Saroya joined Rodrigo Liang, Co-Founder and CEO of SambaNova Systems, and Dylan Patel, Founder and CEO of SemiAnalysis, on stage at RAISE Summit in Paris. The conversation centered on the overwhelming demand for inference compute, \"tokenomics,\" and the increasingly important interplay between the hardware and software layers powering agentic solutions — themes that echoed across the summit. \n\nWatch the full session here: https://bit.ly/4fvSlFz",
                                "author": {
                                    "id": null,
                                    "name": "Vista Equity Partners",
                                    "is_company": true,
                                    "public_identifier": "vista-equity-partners"
                                },
                                "parsed_datetime": "2026-07-28T15:28:28.276Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-28T17:32:26.892Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-28T17:32:26.892Z"
                        },
                        {
                            "id": "7487900035112894465",
                            "date": "2w",
                            "text": "We tend to Linkup with the best partners. 😏\n\nFast inference is only part of the equation. Enterprise AI also needs trustworthy, up-to-date information.\n\nThat's why we're excited to partner with Linkup to help devs build AI applications that combine high-performance inference with fresh, verifiable web retrieval.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/linkup-platform/",
                                    "start": 194,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7487900035112894465",
                            "share_url": "https://www.linkedin.com/posts/sambanova_high-reliability-inference-needs-high-performance-activity-7487900035112894465-a0xJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487900035112894465",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7487810173240086529",
                                "date": "2w",
                                "text": "High-reliability inference needs high-performance retrieval.\n\nSambaNova is building one of the leading inference platforms for enterprises, helping organizations deploy frontier open models with the performance, security, and operational reliability required for production AI.\n\nWe’re excited to make Linkup seamlessly available on the SambaNova platform, enabling developers to enrich those models with fresh, verifiable information from the web.\n\nBeyond the technical integration, we share the same commitment to enterprise-grade AI: security, privacy, reliability, and production-ready deployments. \n\nRead more about the integration in comments.",
                                "author": {
                                    "id": null,
                                    "name": "Linkup",
                                    "is_company": true,
                                    "public_identifier": "linkup-platform"
                                },
                                "parsed_datetime": "2026-07-28T10:04:22.086Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-28T16:01:26.826Z",
                            "reaction_counter": 32,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-28T16:01:26.826Z"
                        },
                        {
                            "id": "7487636202876186624",
                            "date": "3w",
                            "text": "This is exactly the kind of news we love to celebrate! 🎉 \n\nCongrats to our customer, Texas Advanced Computing Center (TACC), on being awarded a $5M grant from the U.S. National Science Foundation (NSF) to implement the Sagebrush system.\n\nInvestments like these help equip researchers with the infrastructure they need to tackle some of the world's biggest scientific challenges—and that's something worth celebrating.\n\nWe also want to recognize the incredible work the NSF continues to do to advance research, scientific discovery, and AI innovation. From supporting groundbreaking projects like this to helping shape the future through initiatives like NAIRR, NSF plays a vital role in strengthening the U.S. research ecosystem.\n\nWell done to everyone involved. We're looking forward to seeing the impact of this work. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/texas-advanced-computing-center-tacc/",
                                    "start": 85,
                                    "length": 38
                                },
                                {
                                    "url": "https://www.linkedin.com/company/national-science-foundation/",
                                    "start": 168,
                                    "length": 33
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_tacc-awarded-5m-grant-from-the-us-national-activity-7487636202876186624-3U7f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7487636164951244800",
                            "attachments": [
                                {
                                    "id": "D5605AQGTddOEG4rdFQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGTddOEG4rdFQ/mp4-720p-30fp-crf28/B56Z.ltbVrGcB8-/0/1785191579781?e=1787648400&v=beta&t=WZTeUsOTeDMgn_DQnYljZn6gQEKhQo9lH3FMkSmdH5s",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-27T22:33:04.319Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7486495969073856512",
                            "date": "3w",
                            "text": "When you get a haute couture shoutout at RAISE Summit 🤩 \n\nHuge thanks to Charlie Kawwas & Tony Kim for highlighting the amazing collaboration between our teams across generations of AI infrastructure. So inspiring to watch heterogeneous AI infrastructure lead the way as we move into an exciting new chapter for enterprise AI! 🦾\n\nRodrigo Liang \nHenri Delahaye\nBroadcom \nBlackRock",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 41,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAZFOIB6SiC2BV-cC0NnGKD20UeDHPvZEE",
                                    "start": 73,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACI04EBiIxsG_dvs_rVmdbwWphK_xsTjTg",
                                    "start": 90,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 330,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABqQs3UBXr7x1dOKtZABSXGefMT1uFzDZ6M",
                                    "start": 345,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/broadcom/",
                                    "start": 360,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/blackrock/",
                                    "start": 370,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_broadcoms-charlie-kawwas-blackrocks-tony-activity-7486495969073856512-89-S?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7486495967958142976",
                            "attachments": [
                                {
                                    "id": "D5610AQE5CULZ2NepCA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE5CULZ2NepCA/mp4-720p-30fp-crf28/B56Z.VgW9dIMBo-/0/1784919726218?e=1787648400&v=beta&t=R2Y2O_Ke6bn7IJcXz78b2ENYT3wzcHEpqEfEiMNF3OM",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-24T19:02:11.396Z",
                            "reaction_counter": 81,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7486166787735302145",
                            "date": "3w",
                            "text": "“How do we solve the scaling problems as AI becomes a global problem?” — Rodrigo Liang\n\nThank you to Jon Fortt for having our CEO on CNBC Fortt Knox to discuss why enterprises are bringing AI on-prem and why we're the only proven premium AI chip inference.\n\nWe appreciate the chance to share our mission! 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 73,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAEcZkBIFPkmuI7RX3WBl_0W17G98fbtyY",
                                    "start": 101,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 133,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7486166787735302145",
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liang-sambanovas-co-founder-and-activity-7486166787735302145-8fw_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7486166787735302145",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7486095673625300992",
                                "date": "3w",
                                "text": "Rodrigo Liang, SambaNova's co-founder and CEO, argues in a Fortt Knox 1:1 that efficient general-purpose inference chips win as enterprises \"wake up\" and repatriate AI on-prem for privacy and cost. He touts a $1B raise at $11B and a multiyear Intel pact tied to chairman Lip-Bu Tan. Born in Taipei, raised from age one in Sao Paulo by a doctor father and schooled in rigorous German classes, he did Texas high school before Stanford, where pre-med gave way to engineering. Full Fortt Knox conversation linked in the comments:",
                                "author": {
                                    "id": "ACoAAAAEcZkBIFPkmuI7RX3WBl_0W17G98fbtyY",
                                    "name": "Jon Fortt",
                                    "is_company": false,
                                    "public_identifier": "jonfortt"
                                },
                                "parsed_datetime": "2026-07-23T16:31:33.524Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-23T21:14:08.449Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-23T21:14:08.449Z"
                        },
                        {
                            "id": "7486104896451031040",
                            "date": "3w",
                            "text": "Not going to lie, this one feels pretty special for us. 😎🦾\n\nSambaNova has joined the Genesis Mission Consortium, a public-private partnership led by the U.S. Department of Energy (DOE) that's bringing together leaders across industry, academia, and the National Laboratories to tackle some of the country's biggest scientific, energy, and national security challenges.\n\nWe're excited to contribute our AI inference platform and help power the next generation of scientific discovery.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 153,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_not-going-to-lie-this-one-feels-pretty-special-activity-7486104896451031040-GWOu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7486104896451031040",
                            "attachments": [
                                {
                                    "id": "D5610AQEkg2lp55M5aA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEkg2lp55M5aA/image-shrink_480/B56Z.P8txCIQAQ-/0/1784826486149?e=1787648400&v=beta&t=Ugb_J_J1BcXnwVufOLlcjcIVuNU_3Kt6B_2luLnsm3Y",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-23T17:08:12.417Z",
                            "reaction_counter": 45,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485810344511074304",
                            "date": "3w",
                            "text": "One of the most exciting parts of growth is welcoming new people to the team.\n\nFollowing our recent announcement that SambaNova completed the first close of a $1B Series F financing at an $11B valuation, we're growing and looking for builders, innovators, and problem-solvers who want to help shape the future of AI infrastructure.\n\nThere's never been a more exciting time to join us. If you've been thinking about what's next in your career, we'd love to meet you.\n\nOpen positions in the link below ⬇️\nhttps://bit.ly/3RtfwYT",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_one-of-the-most-exciting-parts-of-growth-activity-7485810344511074304-33vT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485810344511074304",
                            "attachments": [
                                {
                                    "id": "D5622AQHPfWWmpH5ViA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHPfWWmpH5ViA/feedshare-shrink_480/B56Z.LwxtzKEAg-/0/1784756264748?e=1788393600&v=beta&t=hbkpjI-WkkWr5NjzIF0kXoY9DBny0dfYsLzOrJbI3vA",
                                    "size": {
                                        "width": 480,
                                        "height": 480
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 10,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-22T21:37:45.762Z",
                            "reaction_counter": 54,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485765117150863360",
                            "date": "3w",
                            "text": "Round of applause for our fearless leader! 👏\n\nWe're so proud to share that our CEO Rodrigo Liang has been appointed to SEMAFOR's Silicon Valley & the World Advisory Board! His leadership and expertise in AI, technology, and innovation will make a powerful impact alongside such accomplished global leaders. \n\nAs AI scales across enterprises, Rodrigo is ready to shape pivotal conversations about inference, infrastructure, and sovereign AI.\n\nCongratulations on this appointment, Rodrigo! 🦾 \n\nhttps://bit.ly/3TNEOSi",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 83,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/semaformedia/",
                                    "start": 119,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_round-of-applause-for-our-fearless-leader-activity-7485765117150863360-ojHP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485765117150863360",
                            "attachments": [
                                {
                                    "id": "D5610AQFK1UcwR0bNZQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFK1UcwR0bNZQ/image-shrink_480/B56Z.LHtS6KcAQ-/0/1784745481660?e=1787648400&v=beta&t=q_quTmmVWzwTQbas1z1gtb-eQ5pYmGvsv4c749msjfU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-22T18:38:02.719Z",
                            "reaction_counter": 58,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485736717287600128",
                            "date": "3w",
                            "text": "“We are solving a different problem, which is how do you minimize data movement when you’re actually flowing the graph over the chip to get the answers that you want.\" — Abhi I. \n\nAI training made GPUs the standard. AI inference is changing the equation. As Abhi shared with Fierce Network, minimizing data movement is the key to faster, more efficient inference—and SambaNova RDUs are purpose-built to deliver enterprise AI without requiring entirely new data centers.\n\nThanks to Diana Goovaerts and the Fierce Network team! \n\nLink to the full article in the comments ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 170,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAATj4lMBESQfwvvNIfR7y15s_6RXelgwiA8",
                                    "start": 481,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/fierce-network/",
                                    "start": 505,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_we-are-solving-a-different-problem-which-activity-7485736717287600128-i0Wv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485736717287600128",
                            "attachments": [
                                {
                                    "id": "D5610AQHgbReKZJhRog",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHgbReKZJhRog/image-shrink_480/B56Z.Kt29KIUAQ-/0/1784738706716?e=1787648400&v=beta&t=fJ7qPZ57mIFxT7yZ8cHB-uDKoXqWAcEoPDOH8kHRUv8",
                                    "size": {
                                        "width": 480,
                                        "height": 269
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-22T16:45:11.664Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485400766518800384",
                            "date": "3w",
                            "text": "Prompt caching is now live on SambaCloud, starting with MiniMax M2.7.\n\nIf your app keeps sending the same long system prompt, reference doc, or set of examples on every call, this is for you. Those repeated tokens now get pulled from cache instead of reprocessed from scratch, automatically, with nothing to change on your end.\n\nWhat that actually gets you:\n\nCached tokens cost 90% less: $0.06 per million instead of $0.60 for MiniMax M2.7.\n\nTime-to-first-token barely moves as context grows. Up to 91% faster at longer lengths, dropping from 40.6 seconds to 3.7 at 192k tokens.\n\nYou can also see it working. Every response now shows exactly how many tokens hit the cache.\n\nSame workload, same code, just faster and cheaper. https://bit.ly/4b3KvBw",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 56,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_prompt-caching-is-now-live-on-sambacloud-activity-7485400766518800384-Y6xA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485400766518800384",
                            "attachments": [
                                {
                                    "id": "D5610AQG2gSZd0kd6vg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG2gSZd0kd6vg/image-shrink_480/B56Z.F8UAQIMAY-/0/1784658608658?e=1787648400&v=beta&t=3GsQgyUvK-DR5ZuQbS7sudky8ZCteHkUxe0pPApJyOU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-21T18:30:14.759Z",
                            "reaction_counter": 26,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485370350344544256",
                            "date": "3w",
                            "text": "Great news from down under 🇦🇺 \n\nMassive congratulations to our friends at SCX ai on announcing their IPO on the ASX to raise $40M.\n\nWe're proud to partner with SCX to bring the world's first RDU-powered sovereign AI cloud to Australia, giving enterprises and government agencies access to high-performance AI infrastructure while keeping data secure and sovereign.\n\nLet's go, SCX team! We're excited to see what's next 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 74,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7485370350877421568",
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-australia-ipo-activity-7485370350877421568-2KUF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7485370350344544256",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7485172998929281024",
                                "date": "4w",
                                "text": "SCX.ai is embarking on a significant journey, announcing its IPO on the ASX to raise $40 million.\n\nThis capital infusion is earmarked for developing Australia's sovereign AI infrastructure, positioning the company and its investors at the forefront of the nation's technological advancement. It's an invitation to shape the future of AI within Australia.\n\nThis strategic move underscores the growing importance of domestic AI capabilities and the opportunities for investment in this critical sector.\n#AI #Australia #IPO #Technology #Investment #SovereignAI",
                                "author": {
                                    "id": "ACoAAAGiJ1UBKoAgJfbvav4Or7Ts2widVGzfhjE",
                                    "name": "David Keane",
                                    "is_company": false,
                                    "public_identifier": "dakeane"
                                },
                                "parsed_datetime": "2026-07-21T03:25:10.734Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-21T16:29:22.978Z",
                            "reaction_counter": 26,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-21T16:29:23.105Z"
                        },
                        {
                            "id": "7485061366060552192",
                            "date": "4w",
                            "text": "T-2 days before the Genesis Mission Summit in Washington, D.C 🚀 \n\nOur team will be there discussing the future of AI infrastructure, scientific discovery, and high-performance inference.\n\nIf you're attending, stop by and say hello!",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_t-2-days-before-the-genesis-mission-summit-activity-7485061366060552192-UySz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485061366060552192",
                            "attachments": [
                                {
                                    "id": "D5610AQFTgJxTSzz6zg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFTgJxTSzz6zg/image-shrink_480/B56Z.BHoS6KEAQ-/0/1784577689271?e=1787648400&v=beta&t=g_7uDrTrW3MtlVp4qqTPV8mUNGeTEhFOdX7xDc-Qf2s",
                                    "size": {
                                        "width": 480,
                                        "height": 480
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-20T20:01:35.384Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483989163575259136",
                            "date": "1mo",
                            "text": "Congratulations to the General Compute team on securing a $400M loan from Upper90 🎉 \n\nGeneral Compute's inference neocloud runs on SambaNova's SN50 chips — power-efficient, no expensive water-cooling required, and deployable across a far wider range of data centers than traditional GPU clouds.\n\nCapital markets are catching up to what we've believed all along: not every workload needs a supercomputer, but every company needs fast, cost-efficient inference. As open-source models close the gap with frontier labs, infrastructure outside the Nvidia ecosystem is becoming a real competitive edge.\n\nProud to power General Compute's vision of the world's fastest inference cloud for AI agents. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 23,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_congratulations-to-the-general-compute-team-activity-7483989163575259136-vmu_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483989163575259136",
                            "attachments": [
                                {
                                    "id": "D5610AQHr7zsZRuf1wA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHr7zsZRuf1wA/image-shrink_480/B56Z9x4fa0GUAQ-/0/1784322062243?e=1787648400&v=beta&t=so-76T2a4vfka9vVCUUmjEyWE1gOwYnkMIX5qShqXfk",
                                    "size": {
                                        "width": 480,
                                        "height": 320
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 9,
                            "parsed_datetime": "2026-07-17T21:01:02.391Z",
                            "reaction_counter": 124,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483966573242896384",
                            "date": "1mo",
                            "text": "What makes AI agents more capable isn't always a bigger model, it's often better context.\n\nIn this conversation with our friends over at SCX ai, our own Shubhangi Upasani joins Qizheng Zhang from Stanford University to discuss Agentic Context Engineering (ACE) and how inference-time optimization can improve the way AI agents reason, adapt, and solve complex tasks.\n\nACE is a great example of how innovation is happening beyond the model itself. Pairing these techniques with fast, efficient inference unlocks more capable agentic AI without simply throwing more compute at the problem.\n\nThanks to the SCX ai team for the conversation. We're excited to see more devs explore what's possible with ACE.\n\nVideo link in the comments ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 137,
                                    "length": 6
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACsh3tcB6FDz8mWDt7T1UYYTw60mWYJga60",
                                    "start": 153,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACoyThcBUZtKBs48a2pfNq9zO-YWev6bUnI",
                                    "start": 177,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/stanford-university/",
                                    "start": 196,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 603,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_what-makes-ai-agents-more-capable-isnt-always-activity-7483966573242896384-zf8G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483966573242896384",
                            "attachments": [
                                {
                                    "id": "D5610AQEqQK0FkAw5MA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEqQK0FkAw5MA/image_225_300/B56Z9x7Ta3G4AE-/0/1784322799463?e=1787648400&v=beta&t=CatN8ctEPoktN633Rrq7FqdnUHKUGvKaSsTTUFLk6W4",
                                    "size": {
                                        "width": 300,
                                        "height": 225
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-07-17T19:31:16.436Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483941627506348033",
                            "date": "1mo",
                            "text": "It's here 😎 \n\nA massive thank you to Molly O'Shea for this wonderful Sourcery chat in one of the most beautiful cities in the world. Inference has cracked the market wide open and it's exciting to shine a light on how businesses can scale cost-effectively by pairing our technology with GPU racks, unlocking market differentiation through premium inference. 🔥\n\n🎥 Watch the full episode: https://lnkd.in/giKUwhBs",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 37,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sourcerydeals/",
                                    "start": 69,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7483941627506348033",
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liang-is-the-ceo-and-co-founder-of-activity-7483941627506348033-VPMB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483941627506348033",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7483868181116256256",
                                "date": "1mo",
                                "text": "Rodrigo Liang is the CEO and Co-Founder of SambaNova. The company just announced a first close on a $1B round at an $11B valuation, led by General Atlantic with T. Rowe Price and Capital Group participating.\n\nRodrigo has spent 32 years building chips. We covered the 101 of semiconductors and data centers: what inference is, why it is a different problem than training, and why inference will require orders of magnitude more chips than training.\n\nHe walks through SambaNova's chip lineup from SN10 to the new SN50, why a 10 kilowatt air-cooled rack changes where AI can be deployed, and why running a trillion parameter model in a single rack matters for agents, latency, and edge.\n\nWe also covered the era of premium inference, how providers measure revenue per rack, coopetition and traffic routing across Nvidia and AMD, sovereign models, the move back to on-prem, and why tokenmaxxing is the wrong goal.\n\nSpecial thank you to Brex, MongoDB, & AssemblyAI for helping make this RAISE AI Summit mini-series in Paris, France happen.\n\nSourcery covers the people building the future across AI, hardware, and the private and public markets, subscribe for more.",
                                "author": {
                                    "id": "ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "name": "Molly O'Shea",
                                    "is_company": false,
                                    "public_identifier": "mollysoshea"
                                },
                                "parsed_datetime": "2026-07-17T13:00:17.925Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-17T17:52:08.909Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-17T17:52:08.909Z"
                        },
                        {
                            "id": "7483632674159374336",
                            "date": "1mo",
                            "text": "Rodrigo Liang's Sourcery conversation with Molly O'Shea on premium inference (with Paris as a backdrop, NBD 😎) coming VERY soon. And the topics they covered were hotter than Paris was last week at RAISE Summit. 🔥\n\nWatch this space 👀\n\n📸: Molly O'Shea",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 0,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sourcerydeals/",
                                    "start": 16,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 43,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 197,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 237,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liangs-sourcery-conversation-with-activity-7483632674159374336-637D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483632674159374336",
                            "attachments": [
                                {
                                    "id": "D5622AQG2RCeqyCcfGg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG2RCeqyCcfGg/feedshare-shrink_800/B56Z9s0QxgGcAc-/0/1784237067607?e=1788393600&v=beta&t=WPGRP3jo5L_r9YKFGYHh4AiFUPgcEEtu68Y0deXHV3s",
                                    "size": {
                                        "width": 800,
                                        "height": 452
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-16T21:24:28.691Z",
                            "reaction_counter": 43,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483597153521528832",
                            "date": "1mo",
                            "text": "\"The benefit of SambaNova, uniquely, which is a result of our architecture, is our systems are fully air cooled. They're 30 kilowatts and they can go into most datacenters in the world today.\" — Anton McGonnell \n\nMany AI racks need 600 kW of power. No datacenter in the world can handle that today. \n\nSambaNova runs on 30kW and fits in existing infrastructure. 🦾 \n\n🎥: Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 195,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 368,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-power-crisis-no-one-is-talking-about-activity-7483597153521528832-fBFu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7483597152598900736",
                            "attachments": [
                                {
                                    "id": "D5610AQEiLaoYHWICvg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEiLaoYHWICvg/mp4-720p-30fp-crf28/B56Z9sT5pzGgBk-/0/1784228592092?e=1787648400&v=beta&t=krXEMNyhIlKNjatnQ219hdedctl7CZmdXn6MsxHA6tg",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-16T19:03:19.911Z",
                            "reaction_counter": 47,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483266427148214272",
                            "date": "1mo",
                            "text": "The datacenter power crisis isn't coming. It's already here.\n\nExisting facilities hold 80%+ of AI capacity but can't run next-gen systems.\n\nSambaNova RDUs drop into the infrastructure you already have... air-cooled and ready for the datacenters that exist today.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-datacenter-power-crisis-isnt-coming-activity-7483266427148214272-gsHd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483266427148214272",
                            "attachments": [
                                {
                                    "id": "D5610AQGc3Qq0vksttA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGc3Qq0vksttA/image-shrink_480/B56Z9nnJjUKUAQ-/0/1784149744349?e=1787648400&v=beta&t=OV5tCGRlfnTHV60hZgSP5tDktWH055tDUM512Dkdw_0",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-15T21:09:08.599Z",
                            "reaction_counter": 33,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7482858454118768640",
                            "date": "1mo",
                            "text": "This is going to be a good one with Data Science Dojo! \n\nJoin our own Varun Badrinath Krishna for a hands-on live session tomorrow: Mastering the Coding Agent Harness. ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/data-science-dojo/",
                                    "start": 36,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAG_zYABrkAbZrTAlmiDpFTB14ZiQrk-BDk",
                                    "start": 70,
                                    "length": 23
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7482875323488038912",
                            "share_url": "https://www.linkedin.com/posts/sambanova_mastering-the-coding-agent-harness-activity-7482875323488038912-KwT6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7482858454118768640",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7482555277519720448",
                                "date": "1mo",
                                "text": "Ever wondered why every coding agent — no matter the vendor — seems to follow the same playbook? It's the planning-execution architecture: a frontier model reasons and plans, while a fast execution model does the heavy lifting.\n\nJoin Varun Krishna, Principal Solutions Engineer at SambaNova, for a hands-on live session where we break down:\n✅ How the planning/execution split works across today's leading coding agents\n✅ Why offloading execution to a fast inference platform can cut costs and time\n✅ The real handoff mechanics — what data moves between planning and execution (and what doesn't)\n✅ How to point your own coding agent at a fast inference platform in minutes\n\n📅 July 15, 2026 | 🕐 1:00 PM PT\n\nPlan with frontier models. Execute in 90% less time. ⚡\n\nRegister now → https://hubs.la/Q04pnyP10\n\n#AI #CodingAgents #LLM #MachineLearning #SambaNova #Webinar #AIEngineering",
                                "author": {
                                    "id": null,
                                    "name": "Data Science Dojo",
                                    "is_company": true,
                                    "public_identifier": "data-science-dojo"
                                },
                                "parsed_datetime": "2026-07-13T22:03:17.315Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-14T18:08:00.249Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-14T19:15:02.220Z"
                        },
                        {
                            "id": "7482829573785563136",
                            "date": "1mo",
                            "text": "\"[SambaNova] hopes to demonstrate how customers can breathe new life into their aging GPU fleets by using its systems as decode accelerators. And because its systems are air-cooled, they can be deployed in existing datacenters.\" — Tobias Mann, The Register\n\nThis is exactly what we're aiming for: helping customers get more life out of their existing GPU fleets. Deploying our systems as decode accelerators gives customers a way to boost inference performance without ripping out infrastructure they've already paid for. And because our systems run air-cooled, they slot into standard datacenter environments rather than requiring the liquid-cooling overhauls that come with next-gen GPU deployments. \n\nhttps://bit.ly/4yjLW8L",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABkD7ngBb6trTDpiIie8zscG77fYfNbAphY",
                                    "start": 231,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/the-register/",
                                    "start": 244,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-hopes-to-demonstrate-how-customers-activity-7482829573785563136-TLQc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7482829573785563136",
                            "attachments": [
                                {
                                    "id": "D5610AQFLBpGvUFCJpQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFLBpGvUFCJpQ/image-shrink_480/B56Z9hZ05qGoAQ-/0/1784045588395?e=1787648400&v=beta&t=lN-_kA2HitDYaqqygYtU3u7kmTqdIZwW9oL1h1bEqF4",
                                    "size": {
                                        "width": 480,
                                        "height": 273
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-14T16:13:14.641Z",
                            "reaction_counter": 47,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7482572960013234176",
                            "date": "1mo",
                            "text": "Our team's had quite the week in Paris and we're still not done 😎\n\nAt RAISE Summit 2026, we demonstrated the fastest MiniMax M2.7 inference in the world, as benchmarked by Artificial Analysis. \n\nThe demo paired NVIDIA H200 GPUs for prefill with SambaRack SN50 RDUs for decode, showcasing how disaggregated inference delivers the speed, efficiency, and scalability required for modern AI agents.\n\nThe results:\n⚡ Up to 850 tokens/second on short-context workloads\n⚡ 450+ tokens/second on long-context workloads\n\nFor inference providers, it means existing GPU infrastructure can continue handling compute-intensive prefill while SN50 adds purpose-built decode capacity—unlocking a premium inference experience without replacing the entire stack.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 70,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 117,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 172,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-teams-had-quite-the-week-in-paris-and-activity-7482572960013234176-mwYp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7482572960013234176",
                            "attachments": [
                                {
                                    "id": "D5610AQGbtCCanRdFzw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGbtCCanRdFzw/image-shrink_480/B56Z9dwdgwIgAQ-/0/1783984413038?e=1787648400&v=beta&t=YXQTwRZyrN-eJxHf1xLLdkbuzsgKUzxrCd0-04S7IoI",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-13T23:13:33.150Z",
                            "reaction_counter": 41,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7481605646220566528",
                            "date": "1mo",
                            "text": "What a week at RAISE Summit! Paris was buzzing with conversations about what's next for AI and we were stoked to be part of it! 🇫🇷\n\nRodrigo Liang sat down with Gemma Allen from theCUBE + NYSE Wired to talk about one of the biggest shifts happening in the industry: the move from training to inference.\n\nTheir chat covered everything from disaggregated inference and sovereign AI to the economics of running AI at scale and why enterprises are rethinking the infrastructure behind production AI.\n\nWatch the full interview below ⬇️\nhttps://lnkd.in/g7Jhhx2j",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 15,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 132,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAgkOVYBamP4vyo6_thv2iALeZ_1wYADS9A",
                                    "start": 160,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/nyse/",
                                    "start": 187,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_what-a-week-at-raise-summit-paris-was-buzzing-activity-7481605646220566528-YSc-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481605644521758720",
                            "attachments": [
                                {
                                    "id": "D5610AQFIxPFNXEnj_w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFIxPFNXEnj_w/mp4-720p-30fp-crf28/B56Z9QAexlKEBk-/0/1783753767445?e=1787648400&v=beta&t=1Ayv6af8oiLEtUz3HkZokbdkKvAAJlGnN7XKAMxEidk",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-11T07:09:47.570Z",
                            "reaction_counter": 113,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7481425655243395072",
                            "date": "1mo",
                            "text": "Sally Ward-Foxton with the in-depth coverage 🦾\n\nWe appreciate the conversation, as always. And thank you for showcasing our new customer, JPMorganChase 🙌",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACxaasB-qk21-y99WIBKZe6rW8AZLg1lG8",
                                    "start": 0,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 138,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7481425655243395072",
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-raises-1b-signs-jpmorganchase-activity-7481425655243395072-llzf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7481425655243395072",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7481037441206792193",
                                "date": "1mo",
                                "text": "SambaNova has raised $1B and signed up JPMorganChase as a customer for its racks of RDUs. I spoke to SambaNova CEO Rodrigo Liang who told me the company is also leaning in hard to disaggregated inference architectures:\n\nhttps://lnkd.in/eCvykyMQ",
                                "author": {
                                    "id": "ACoAAACxaasB-qk21-y99WIBKZe6rW8AZLg1lG8",
                                    "name": "Sally Ward-Foxton",
                                    "is_company": false,
                                    "public_identifier": "sally-ward-foxton-663a883"
                                },
                                "parsed_datetime": "2026-07-09T17:31:56.938Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-10T19:14:34.377Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-10T19:14:34.377Z"
                        },
                        {
                            "id": "7481100631521288192",
                            "date": "1mo",
                            "text": "Loved hanging out with our friends over at Intel at RAISE Summit this week! 🇫🇷",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 43,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 52,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7481100632154599424",
                            "share_url": "https://www.linkedin.com/posts/sambanova_at-raise-summit-2026-in-partnership-with-activity-7481100632154599424-dry5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481100631521288192",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7481058112079167488",
                                "date": "1mo",
                                "text": "At RAISE Summit 2026, in partnership with SambaNova, we’re connecting with customers, partners, and industry leaders shaping the future of AI. \n\nHere's to great conversations on what's next for enterprise AI and the infrastructure powering it.",
                                "author": {
                                    "id": null,
                                    "name": "Intel",
                                    "is_company": true,
                                    "public_identifier": "intel-corporation"
                                },
                                "parsed_datetime": "2026-07-09T18:54:05.258Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-09T21:43:02.683Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-09T21:43:02.834Z"
                        },
                        {
                            "id": "7481071054317060096",
                            "date": "1mo",
                            "text": "Thank you TBPN for having Rodrigo Liang yesterday and for hitting the gong to celebrate our milestone with us 🥁\n\nGreat conversation covering SambaNova's completion of the first close of $1B financing at an $11B valuation, and where we go from here.\n\nWatch the full interview below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/tbpn/",
                                    "start": 10,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 26,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_thank-you-tbpn-for-having-rodrigo-liang-yesterday-activity-7481071054317060096-VAtF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481070755028316160",
                            "attachments": [
                                {
                                    "id": "D5605AQFu_svLbhEAYA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFu_svLbhEAYA/mp4-720p-30fp-crf28/B56Z9IaQ5XGcB8-/0/1783626324931?e=1787648400&v=beta&t=CgLwQWNxuK4ZZNJ6Vw__ykdmSO94M0wmwSSbu6p7rnI",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-09T19:45:30.928Z",
                            "reaction_counter": 57,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480682665872994305",
                            "date": "1mo",
                            "text": "LIVE from Paris 📍 SambaNova has completed our first close of $1B Series F financing round, valuing the company at $11B 🎉 \n\nRodrigo Liang chatted with CNBC Squawk Box to share more about our financing news and what this means for us in the future. Watch below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 123,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 150,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_live-from-paris-sambanova-has-completed-activity-7480682665872994305-4a6D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480682665017253890",
                            "attachments": [
                                {
                                    "id": "D5610AQG2K0WeGCKJaQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQG2K0WeGCKJaQ/mp4-720p-30fp-crf28/B56Z9C5CQwHYBk-/0/1783533701145?e=1787648400&v=beta&t=Lh7rps10zU7h4BCSvRwbOgnZ-mn4zYcgcxcMAiKNBLU",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-08T18:02:11.907Z",
                            "reaction_counter": 111,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480673993537126401",
                            "date": "1mo",
                            "text": "RAISE Summit in Paris feels like the perfect place to celebrate this milestone. 🇫🇷 \n\nEarlier today, we announced the first close of our $1B Series F financing at an $11B valuation.\n\nSo proud of our team and grateful to everyone who has been part of this journey. Here's to the next chapter. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 0,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7480673994128412672",
                            "share_url": "https://www.linkedin.com/posts/sambanova_raise2026-ai-sambanova-activity-7480673994128412672-fu42?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480673993537126401",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7480662511164325889",
                                "date": "1mo",
                                "text": "Announced live from RAISE: SambaNova has raised $1 billion at an $11 billion valuation.\n\nCEO and co-founder Rodrigo Liang broke the news on stage. The Series F, a first close led by General Atlantic with Intel Capital, BlackRock and the Qatar Investment Authority joining, roughly quintuples the company's valuation in a matter of months, a bet on SambaNova as a serious challenger to NVIDIA in AI inference.\n\nAnd it lands with a marquee proof point: JPMorganChase Chase has selected SambaNova as its inference-infrastructure partner, powering secure, on-premises AI inside the bank.\n\nLiang's read on the moment: inference has broken everything open, and a standalone company can now move fast enough to seize it.\n\nBig news, live from the RAISE stage. Day 1, Paris.\n\n#RAISE2026 #AI #SambaNova #Paris",
                                "author": {
                                    "id": null,
                                    "name": "RAISE Summit",
                                    "is_company": true,
                                    "public_identifier": "raise-summit"
                                },
                                "parsed_datetime": "2026-07-08T16:42:06.650Z"
                            },
                            "repost_counter": 8,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-08T17:27:44.261Z",
                            "reaction_counter": 69,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-08T17:27:44.402Z"
                        },
                        {
                            "id": "7480665760420253696",
                            "date": "1mo",
                            "text": "Incredibly excited to have General Atlantic lead our Series F financing round. \n\nSo proud of our team and everyone who helped us reach this milestone 🎉\n\nAs AI moves from training to inference, we're excited to keep building the infrastructure that will power the next generation of enterprise AI.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 27,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7480665761032691712",
                            "share_url": "https://www.linkedin.com/posts/sambanova_general-atlantic-is-proud-to-lead-sambanovas-activity-7480665761032691712-GYz1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480665760420253696",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7480618439795990528",
                                "date": "1mo",
                                "text": "General Atlantic is proud to lead SambaNova's $1 billion Series F financing round. \n \nAs AI moves from training models to deploying them at scale, inference is becoming a critical layer of enterprise AI infrastructure. SambaNova is built for this shift, with a full-stack platform of chips, systems, software, and cloud services designed to power efficient and adaptable AI inference for enterprises, neoclouds, and sovereign AI initiatives.\n \nWe are excited to partner with Rodrigo Liang and the SambaNova team as they build on their strong momentum, scale the business, and support the next phase of enterprise AI adoption.\n\nhttps://lnkd.in/g7i7hDEY",
                                "author": {
                                    "id": null,
                                    "name": "General Atlantic",
                                    "is_company": true,
                                    "public_identifier": "general-atlantic"
                                },
                                "parsed_datetime": "2026-07-08T13:46:59.217Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-08T16:55:01.333Z",
                            "reaction_counter": 27,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-08T16:55:01.479Z"
                        },
                        {
                            "id": "7480591628471259136",
                            "date": "1mo",
                            "text": "$1B. $11B valuation. Today we completed the first close of $1 billion as part of our Series F financing, at an $11 billion valuation, led by General Atlantic, with new and existing investors joining in.\n\nWe are proud of our entire team and everyone who helped get us here.\n\nAnd it's not just capital. JPMorganChase is putting our RDUs to work, deploying both SN40 and SN50 systems for secure, on-prem AI inference. As enterprises move from experimenting with AI to actually running it in production, they need infrastructure that can keep up: fast, secure, and built for the real world. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 141,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 301,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_1b-11b-valuation-today-we-completed-the-activity-7480591628471259136-U_mh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480591627346960384",
                            "attachments": [
                                {
                                    "id": "D5610AQE0fLp_0JUA8w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE0fLp_0JUA8w/mp4-720p-30fp-crf28/B56Z9Bmbk2GoBk-/0/1783512023366?e=1787648400&v=beta&t=cU0w4Q9A_qLlClpS8GucQKKdImyS9pmLAn_HdVjVTfw",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 44,
                            "comment_counter": 13,
                            "parsed_datetime": "2026-07-08T12:00:26.899Z",
                            "reaction_counter": 416,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480568912477192192",
                            "date": "1mo",
                            "text": "“Having JPMorganChase decide they’re going to use SambaNova for their inference solution is a big deal. It sends a message to the banking industry that it’s time not to completely depend on cloud services. These banks want heterogeneous [infrastructure].” — Rodrigo Liang \n\n$11B valuation! 🎉\n\nThanks to Kate Park & TechCrunch for highlighting our latest milestone and the growing demand for secure, on-prem AI inference.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 258,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/techcrunch/",
                                    "start": 315,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_having-jpmorganchase-decide-theyre-going-activity-7480568912477192192-eYvr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480568912477192192",
                            "attachments": [
                                {
                                    "id": "D5610AQEQ7bxIRatgmw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEQ7bxIRatgmw/image-shrink_480/B56Z9BRyldJoAQ-/0/1783506610814?e=1787648400&v=beta&t=HucZmqu-_VLtDTUYjYEreqEox5DJqkVF8W1-NRAgEhA",
                                    "size": {
                                        "width": 480,
                                        "height": 402
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-08T10:30:10.984Z",
                            "reaction_counter": 81,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480546233543966720",
                            "date": "1mo",
                            "text": "“People still want to buy the same number of tokens — you’re just processing them fast on the same hardware versus standing up 10 times the number of racks to actually keep everybody moving.” — Rodrigo Liang\n\nGrateful to Ryan Gould at Bloomberg for covering our latest milestone: an $11B valuation. 🎉\n\nThe goal isn't to make customers buy more infrastructure — it's to help them process the same volume of tokens faster, on the hardware they already have, instead of scaling up racks 10x just to keep pace.\n\nGeneral Atlantic\nSeligman\nVirginia Jamieson\n\n🔗 Read the full story here: https://lnkd.in/gjUg9su5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 194,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABfnAzEB1LA4REfamedZBkvJr_Ly9-U1SLA",
                                    "start": 221,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/company/bloomberg/",
                                    "start": 235,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 508,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/seligman-ventures/",
                                    "start": 525,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAIk48B2z2wYtXgW9a6GxLDFdEq18ZSArg",
                                    "start": 534,
                                    "length": 17
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_people-still-want-to-buy-the-same-number-activity-7480546233543966720-IKJC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480546233543966720",
                            "attachments": [
                                {
                                    "id": "D5622AQEafKuXDanhIg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEafKuXDanhIg/feedshare-shrink_800/B56Z9A6HeyHcAc-/0/1783500404961?e=1788393600&v=beta&t=4ZEHbhpDlcpQyIxIRVAcVquvtpzs4CvvtWRsYbQv2UM",
                                    "size": {
                                        "width": 800,
                                        "height": 533
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-08T09:00:03.905Z",
                            "reaction_counter": 49,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480529868993101824",
                            "date": "1mo",
                            "text": "“This $11 billion valuation underscores how important inference has become in the enterprise AI stack.” Rodrigo Liang\n\nToday marks an exciting milestone for SambaNova. We're announcing that we completed the first close of a $1 billion in financing at an $11 billion valuation, led by General Atlantic, with significant investment from Seligman Ventures and T. Rowe Price Associates, Inc.\n\nWe're also proud to share that JPMorganChase has selected our RDUs to power secure, on-prem AI inference with deployments of both SN40 and SN50 systems. As AI moves into production, enterprises need infrastructure that's fast, secure, and built to meet the demands of real-world deployment. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 104,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 284,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/seligman-ventures/",
                                    "start": 335,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/t--rowe-price/",
                                    "start": 357,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 420,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_this-11-billion-valuation-underscores-how-activity-7480529868993101824-Dor8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480529868993101824",
                            "attachments": [
                                {
                                    "id": "D5610AQHkiVEpV6Vh9w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkiVEpV6Vh9w/image_350_624/B56Z9x7R_.HYAc-/0/1784322793661?e=1787648400&v=beta&t=KGBCZTNd1GnzbB6-BXa0fw8tEU9O8MAiQwK_WbUV_AU",
                                    "size": {
                                        "width": 624,
                                        "height": 350
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 80,
                            "comment_counter": 30,
                            "parsed_datetime": "2026-07-08T07:55:02.292Z",
                            "reaction_counter": 542,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480291069616824320",
                            "date": "1mo",
                            "text": "As models grow larger and agentic workloads become more complex, no single processor is optimal for every stage of inference. Different workloads demand different strengths.\n\nThat's why heterogeneous AI infrastructure is becoming the new standard.\n\nBy combining GPUs with purpose-built AI accelerators, organizations can improve latency, increase throughput, and reduce the cost of serving AI at scale.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_as-models-grow-larger-and-agentic-workloads-activity-7480291069616824320-P6vA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480291069616824320",
                            "attachments": [
                                {
                                    "id": "D5610AQFRVsngJH6A3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFRVsngJH6A3A/image-shrink_480/B56Z89VGBQIMAQ-/0/1783440367960?e=1787648400&v=beta&t=wDHgCdk8rfSRCwyFJcu4_15bO_Yy3SEOZPDnrlEzxDQ",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-07T16:06:08.084Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480154921791537154",
                            "date": "1mo",
                            "text": "Bonjour, Paris 🇫🇷\n\nGet ready for the onslaught of RAISE Summit content this week. \n\nSorry, not sorry.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 50,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-at-raise-summit-2026-activity-7480154921791537154-w3Om?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480154921023979521",
                            "attachments": [
                                {
                                    "id": "D5610AQFG7bzdLEPB-w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFG7bzdLEPB-w/mp4-720p-30fp-crf28/B56Z87ZP5SGUBk-/0/1783407903801?e=1787648400&v=beta&t=1PQts79cZpjwgqUiuOjq1crE3TViOUKwxL-13yXeds0",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-07T07:05:07.913Z",
                            "reaction_counter": 35,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7479992440754700288",
                            "date": "1mo",
                            "text": "The AI industry has been treating inference like it's one workload. It's not.\n\nPrefill is compute-bound — GPUs excel here.\nDecode is memory-bound — that's where our RDUs shine.\n\nDisaggregated inference means running these phases on separate, purpose-built hardware instead of forcing one chip to do both.\n\nThe result is higher utilization, lower latency, and more workloads served from the same infrastructure footprint.\n\nGet a deep dive into disaggregated inference in our blog ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-ai-industry-has-been-treating-inference-activity-7479992440754700288-UqJw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7479992440754700288",
                            "attachments": [
                                {
                                    "id": "D5610AQGS02HcmLp2xw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGS02HcmLp2xw/image-shrink_480/B56Z85FeD0JoAU-/0/1783369163310?e=1787648400&v=beta&t=yi7ABb36EwefyKTpY-mVts935nu0rHb7bmm-2tAVnvs",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-07-06T20:19:29.415Z",
                            "reaction_counter": 34,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478911749304385536",
                            "date": "1mo",
                            "text": "Scientific discovery is entering a new AI era and we're proud to help make it possible. \n\nSambaNova is honored to be part of U.S. Department of Energy (DOE)'s Genesis Mission Consortium.\n\nWe're excited to be part of what's next. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 125,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-is-proud-to-be-part-of-the-genesis-activity-7478911749304385536-Y6qx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478911748402532354",
                            "attachments": [
                                {
                                    "id": "D5610AQH_1TKK-aINhQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQH_1TKK-aINhQ/mp4-720p-30fp-crf28/B56Z8pulwXGsBk-/0/1783111508197?e=1787648400&v=beta&t=vvxQNPNrqPPIH_UAf2WkdTyYXMrM7bYlnU1hFZH6_M4",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-03T20:45:12.495Z",
                            "reaction_counter": 46,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478514387838869504",
                            "date": "1mo",
                            "text": "\"As the cost of tokens continue to rise because the infrastructure is so expensive, people are looking for alternatives. So at SambaNova, we come in with a much lower-cost infrastructure, much higher performance. We drive it at 10 kilowatts, an order of magnitude lower power than the traditional GPUs.\" — Rodrigo Liang\n\nDuring his chat with Matthew Miller on Bloomberg Television, Rodrigo explained how we're able to make AI more affordable: disaggregated inference. \n\nInstead of relying on a single architecture, it combines GPUs for prefill, RDUs for high-speed decode, and CPUs for orchestration, allowing each processor to do what it does best.\n\nThe result is faster inference, lower latency, and significantly lower-cost tokens for enterprises and service providers deploying AI at scale.\n\nThis architecture powers the world's first commercially available disaggregated inference cloud, including VC2, helping organizations bring AI into production with better performance and better economics.\n\nWatch their conversation below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 306,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADCXPQBV4-dwxYf-N10E0HFwkxWGgOLRBg",
                                    "start": 342,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/bloombergtelevision/",
                                    "start": 360,
                                    "length": 20
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_making-ai-more-affordable-with-disaggregated-activity-7478514387838869504-D9H_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478514385741717504",
                            "attachments": [
                                {
                                    "id": "D5610AQGN-tKqZUEVKA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGN-tKqZUEVKA/mp4-720p-30fp-crf28/B56Z8kE_zqGcBk-/0/1783016756370?e=1787648400&v=beta&t=oaIyo4g4AdOQTHR7EJ6_QDC13wEHLBiov64JOkPW0Eg",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-02T18:26:14.139Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478207144148873217",
                            "date": "1mo",
                            "text": "\"Where dataflow comes in is... you can actually just flush these things like a river flushes through their own environment with a very fast pace.\" - Rodrigo Liang \n\nOne of the biggest challenges in AI today isn't the model, it's getting data to the right place at the right time.\n\nThat's where dataflow architecture comes in, helping eliminate memory bottlenecks and unlock faster, more efficient inference at scale. 🦾 \n\n🎥: Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 149,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 424,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-dataflow-architecture-that-could-dethrone-activity-7478207144148873217-T1r5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478207142835998720",
                            "attachments": [
                                {
                                    "id": "D5610AQEexi1jC25Quw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEexi1jC25Quw/mp4-720p-30fp-crf28/B56Z8fttzEHcBk-/0/1782943511022?e=1787648400&v=beta&t=bE_pbhz6sRluEUrOlDZ-nHq3GFAgO5gztH4q9Nfsq5A",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-01T22:05:21.535Z",
                            "reaction_counter": 67,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478163551086551040",
                            "date": "1mo",
                            "text": "Your Claude Code just got even faster thanks to SambaCloud's latest update. ⚡️\n\nDevelopers get instant access to our high-performance inference via the Anthropic SDK—no code changes required.\n\nRead more in our blog ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/claude/",
                                    "start": 5,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_your-claude-code-just-got-even-faster-thanks-activity-7478163551086551040-4mBt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7478163551086551040",
                            "attachments": [
                                {
                                    "id": "D5610AQEcWozzaLK0pg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEcWozzaLK0pg/image-shrink_480/B56Z8fGGxEJoAU-/0/1782933122387?e=1787648400&v=beta&t=OOV6yrh0s-DDuL0OkjSRloBi5v46hJU1dxPnR8A8dBU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-01T19:12:08.139Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7477788323340558336",
                            "date": "1mo",
                            "text": "Say bonjour to our team at RAISE Summit 🇫🇷\n\nWe'll be talking about why one chip isn't enough anymore, and why the future of AI inference is all about using the right chip for the right workload.\n\nAI agents are changing what's required from infrastructure. Long contexts, multi-step reasoning, and continuous tool use demand a different approach to inference than traditional GPU-only architectures.\n\nThat's why we're building premium inference with disaggregated infrastructure:\n• GPUs for prefill\n• RDUs for high-speed decode\n• CPUs to orchestrate the agent loop\n\nFaster inference, higher throughput, and better economics.\n\nSee you in Paris: https://lnkd.in/gv7b3jrq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 27,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-at-raise-summit-2026-activity-7477788323340558336-XSyw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7477788289928822784",
                            "attachments": [
                                {
                                    "id": "D5605AQF7yVO6LOebGw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF7yVO6LOebGw/mp4-720p-30fp-crf28/B56Z8Zw1VQGUCA-/0/1782843661149?e=1787648400&v=beta&t=DGHINeXMt3e6kvw4COAOCQVdtvVu8BgcmKV-ke_YDxQ",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-30T18:21:06.873Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7477472871444054016",
                            "date": "1mo",
                            "text": "Open-weight models keep getting better and Gemma 4 31B is a great example.\n\nIt combines frontier-class reasoning with production-ready coding performance and native agentic capabilities, making it a strong choice for everything from coding assistants to multi-agent applications.\n\nSome highlights:\n • 89.2% on AIME 2026 (no tools)\n • 80.0% on LiveCodeBench v6\n • Native function calling, structured JSON output, and system prompt support for AI agents\n\nWhen paired with SambaCloud, developers also get the lowest latency available, helping agents respond faster and making interactive AI experiences feel more natural.\n\nWe break down what makes Gemma 4 31B stand out—and why speed matters just as much as model quality.\n\nRead the blog: https://lnkd.in/e-QMY8K5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_gemma-4-31b-running-fastest-on-sambacloud-activity-7477472871444054016-c0hN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7477472833829371904",
                            "attachments": [
                                {
                                    "id": "D5605AQGVP0bRv724iA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGVP0bRv724iA/mp4-720p-30fp-crf28/B56Z8VR7XHG8CA-/0/1782768451311?e=1787648400&v=beta&t=G1va9DTmsqc_XnZjTiRaYULoy_3UPAHEDT_TjGnwALI",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-29T21:27:37.280Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7476275352038821888",
                            "date": "1mo",
                            "text": "Inference is now the defining workload in AI, and that changes the economics of the whole stack. \n\nAt Deep Tech Week SF, SambaNova Chief Product and Strategy Officer Abhi I. put it plainly: Inference is the defining workload for AI now and for the future. \n\nHe further emphasized that training is a cost center; inference is where you make money. As such, hardware has to be purpose built for the task at hand. It’s not a one-size-fits-all story anymore. \n\nHeterogeneity is the order of the day: a combination of chips and networking that produces the best results. And, a combination of models—frontier and open source, large and small—that are fit to the task.\n\nDisaggregated inferencing is the right architecture for the Agentic Era. GPUs handle the prefill stage, SambaNova's RDUs handle decode, and CPUs orchestrate and run the tools. That is what lets you serve premium tokens, run the largest models running fast, with the power efficiency communities demand, at a TCO that works for the enterprise. \n\nAs Abhi says, “More intelligence per joule — that’s the strategy.” It’s about achieving the lowest possible power consumption and deploying into existing data centers (air cooled). \n\nAbhi was joined by Rajiv K. of Velaura AI on the power layer and Barun Kar of Upscale AI on the networking layer, in a conversation moderated by Sriram Viswanathan of Celesta Capital. \n\nThree companies, three layers of the stack, one shared view: the GPU-centric, vertically integrated stack is the bottleneck, and purpose-built, heterogeneous infrastructure is the answer for the defining workload in AI - inferencing.\n\nThank you to Celesta Capital for hosting.\n\nLip-Bu Tan's Fireside Chat with Michael E Marks was a conversation between two silicon valley veterans full of wise advice to startup founders, such as “Stay flexible and adjust your trajectory if customers and markets change.”  We at SambaNova appreciate the call out for the success we are having from both of them and take their advice to heart.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/deep-tech-weeks/",
                                    "start": 102,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 166,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABLn0BbUB6-WUkr6gRjFJ8iZxgXVI_p1E",
                                    "start": 1211,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/velaura-ai-inc/",
                                    "start": 1223,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABPcawBGhfstGcDfzQdbIrMSGkLoLXsbF4",
                                    "start": 1257,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/upscale-ai-inc/",
                                    "start": 1270,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAQCV0ByC9Coi5GCb3rfXMZig-ZjvfU4Ug",
                                    "start": 1337,
                                    "length": 18
                                },
                                {
                                    "url": "https://www.linkedin.com/company/celestacapital/",
                                    "start": 1359,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 1656,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAH4luwBwRadBOfgI2_nyHsySN9jOhxbF68",
                                    "start": 1688,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-is-now-the-defining-workload-in-activity-7476275352038821888-tmHr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7476275350767960065",
                            "attachments": [
                                {
                                    "id": "D5622AQEnWV3l5YR92w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEnWV3l5YR92w/feedshare-shrink_480/B56Z8EQz9HGgAg-/0/1782482944028?e=1788393600&v=beta&t=WtfvXTip9XaDp45cdW1K9lJuYdn3DGTwPRXM9_K9X2Y",
                                    "size": {
                                        "width": 480,
                                        "height": 342
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQG4kh42i50uVQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4kh42i50uVQ/feedshare-shrink_800/B56Z8EQ0ASLAAc-/0/1782482944803?e=1788393600&v=beta&t=hNtrVy6SF2kvcrEfK0VM6DRlLTo4krYVmPcQ-eYwgi8",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGP3Lx8Gu4OTw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGP3Lx8Gu4OTw/feedshare-shrink_800/B56Z8EQ0BXG0Ac-/0/1782482944890?e=1788393600&v=beta&t=f6wwg8O1l0LQMhUnVDgNVTcA8zPXMhfgGpYX8wVIgVk",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-06-26T14:09:06.405Z",
                            "reaction_counter": 68,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7476025118805098496",
                            "date": "1mo",
                            "text": "\"You need premium because your models are bigger, your models are lower latency, your models are much higher throughput.\" — Rodrigo Liang\n\nThe bigger opportunity is better inference. Faster tokens. Better efficiency. Lower cost. That's what makes AI agents practical at scale.\n\nThanks Akash Pasricha The Information TITV for the great conversation on where AI infrastructure is headed. 🦾 \n\nVista Equity Partners",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 124,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAxbjWYBnLfpAW8BkbmudVjYPIzKV4BV1Ig",
                                    "start": 285,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/theinformation/",
                                    "start": 300,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 390,
                                    "length": 21
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_you-need-premium-because-your-models-are-activity-7476025118805098496-aey9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7476025025683271681",
                            "attachments": [
                                {
                                    "id": "D5605AQH9nMXyL4OuUQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQH9nMXyL4OuUQ/mp4-720p-30fp-crf28/B56Z8AtLXAIUB8-/0/1782423279823?e=1787648400&v=beta&t=Q0U1iQL_eNeK1ueHg1kDk-zyjxrXVtIfOzGvk7j4c54",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-25T21:34:46.153Z",
                            "reaction_counter": 46,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475978091325050880",
                            "date": "1mo",
                            "text": "June was all about faster agents, premium inference, and the next gen of AI infrastructure ⚡️\n\nTL;DR:\n- The first disaggregated inference demo for AI agents is live\n- Gemma 4 31B is running fastest on SambaCloud\n- Customers are scaling AI faster with SambaNova\n- Meet us in Paris in July\n\n🔗 https://lnkd.in/ebtBBCSD",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7475974544864858112",
                                "url": "https://www.linkedin.com/pulse/sambanova-lightning-digest-june-2026-sambanova-e7ytc?trackingId=Hj31ctS7pXJIB6ZWLiUEOg%3D%3D",
                                "title": "SambaNova Lightning Digest | June 2026",
                                "author": "SambaNova",
                                "excerpt": "Agentic AI lives or dies on inference speed, and this month we are pushing it forward. We have made Gemma 4 31B run fast on SambaCloud, giving you a t...",
                                "published_at": "2026-06-25T18:13:48.386Z"
                            },
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_june-was-all-about-faster-agents-premium-activity-7475978091325050880-VlPP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475978090800893955",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-25T18:27:53.928Z",
                            "reaction_counter": 27,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475634647079526402",
                            "date": "1mo",
                            "text": "Our CEO Rodrigo Liang and Vista Equity Partners' Monti Saroya joined The Information TITV today to discuss Vista and Cambium Capital Management's cloud initiative & why inference is becoming the next battleground in AI. \n\nThe future isn't one chip doing everything...it's disaggregated inference, where GPUs, RDUs, and CPUs work together to deliver premium inference at scale. 🦾\n\nWatch their segment below ⬇️ \nhttps://lnkd.in/ghEcapkE",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 26,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/theinformation/",
                                    "start": 69,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 117,
                                    "length": 26
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7475634647973167104",
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-information-titv-june-24-2026-activity-7475634647973167104-Cs7R?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475634647079526402",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7475590994151915520",
                                "date": "1mo",
                                "text": "The Information  |  TITV  |  June 24, 2026\n\nThe Information’s TITV is first in tech news and analysis from the people that break and shape the story. The rest is just commentary. \n\nWatch every weekday at 10 am PT/ 1 ET on The Information.com, App, YouTube, X—and on demand wherever you get your podcasts.",
                                "author": {
                                    "id": null,
                                    "name": "The Information",
                                    "is_company": true,
                                    "public_identifier": "theinformation"
                                },
                                "parsed_datetime": "2026-06-24T16:49:42.770Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-24T19:43:10.439Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-24T19:43:10.652Z"
                        },
                        {
                            "id": "7475227864615911424",
                            "date": "1mo",
                            "text": "Paris views. AI inference conversations. 🇫🇷\n\nSambaNova and MiniMax are bringing together founders, builders, and innovators for an exclusive rooftop reception overlooking the Pantheon.\n\nRSVP below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 59,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_paris-views-ai-inference-conversations-activity-7475227864615911424-krFA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475227864020398080",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-23T16:46:45.942Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7474939695018237954",
                            "date": "1mo",
                            "text": "Our work with Argonne National Laboratory continues to grow 🦾\n\nThe Argonne Leadership Computing Facility’s new Inference Service helps close the gap between building AI models & putting them to work for science, giving researchers shared, large-scale inference without having to manage their own infrastructure.\n\nAlready supporting teams working on the U.S. Department of Energy (DOE)'s Genesis Mission, this latest deployment builds on a long-standing partnership with Argonne and brings even more infrastructure online for accelerated discovery.\n\nProud to keep pushing the frontier together 🚀\n\n📸 Photo courtesy of Argonne National Laboratory",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/argonne-national-laboratory/",
                                    "start": 14,
                                    "length": 27
                                },
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 353,
                                    "length": 31
                                },
                                {
                                    "url": "https://www.linkedin.com/company/argonne-national-laboratory/",
                                    "start": 616,
                                    "length": 27
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-work-with-argonne-national-laboratory-activity-7474939695018237954-Jouz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7474939695018237954",
                            "attachments": [
                                {
                                    "id": "D5622AQEW0ep3Epfpgg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEW0ep3Epfpgg/feedshare-shrink_800/B56Z7xSCtsIMAc-/0/1782164499726?e=1788393600&v=beta&t=ul00jr2yALxVVWCH7q30D6o1q1b8eC10ne254e4pz4U",
                                    "size": {
                                        "width": 800,
                                        "height": 653
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-22T21:41:40.956Z",
                            "reaction_counter": 80,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473792984124157952",
                            "date": "1mo",
                            "text": "Our very own Anton McGonnell took the stage at  COMPUTEX 2026 to explain why agentic AI needs more than one kind of chip. \n\nInference may look like one job. For agentic AI, it's actually three, and today most setups cram all three onto a single type of chip.\n\nDisaggregated inference breaks the three jobs apart and runs each on the chip built for it. \n\nHere's what that looks like: \n\n1️⃣ Prefill reads and understands the input: the prompt, the codebase, the files. It's compute-heavy and parallel, and GPUs handle it well. \n\n2️⃣ Decode generates the answer one token at a time, which is a memory-bound problem with a completely different profile. The handoff from prefill to decode is one clean exchange, the KV cache.\n\n3️⃣ For agents there's a third job, orchestration and tool calling, which runs on the CPU. \n\nPrefill on the GPU, decode on the SambaNova RDU, orchestration on the CPU. \n\nForce one chip to do all three and you compromise on each. \n\nIf you don’t have the right chip for the right job, you can’t do agentic AI well or cost effectively. \n\nWatch the clip 👇",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 13,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/computextaipei/",
                                    "start": 48,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-very-own-anton-mcgonnell-took-the-stage-activity-7473792984124157952-lcs_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7473510127711436800",
                            "attachments": [
                                {
                                    "id": "D5605AQF5r2D5wj6E5Q",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF5r2D5wj6E5Q/mp4-720p-30fp-crf28/B56Z7c98bQHcB8-/0/1781823705479?e=1787648400&v=beta&t=TyYV3t9bI8Z-46xctaSxON8RYyDvLTzutMh2IAsEeTc",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-19T17:45:03.774Z",
                            "reaction_counter": 40,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473437522669445120",
                            "date": "1mo",
                            "text": "One chip to rule them all? No thanks.\n\nAI inference isn't one workload, it's a series of very different jobs. That's why companies are pairing GPUs, RDUs, and CPUs together, letting each do what it does best.\n\nThe next generation of inference is about matching the right chip to the right task, because no single architecture wins every leg of the race. 🦾\n\nLet's chat about it in Paris at RAISE Summit 2026: https://lnkd.in/gv7b3jrq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 389,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_one-chip-to-rule-them-all-no-thanks-ai-activity-7473437522669445120-D5nu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7473437522669445120",
                            "attachments": [
                                {
                                    "id": "D5622AQG4AhWM7xWnDg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4AhWM7xWnDg/feedshare-shrink_800/B56Z7b7p0dIoAg-/0/1781806354100?e=1788393600&v=beta&t=x9OVCtfVyuNi8gpyHYZRRAP2Wm7uhy1oUzWeaMwa3-s",
                                    "size": {
                                        "width": 800,
                                        "height": 800
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-18T18:12:35.159Z",
                            "reaction_counter": 51,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472774294125694976",
                            "date": "2mo",
                            "text": "An evening above Paris. ✨\n\nJoin SambaNova and MiniMax for an exclusive rooftop reception featuring incredible views, great conversations, and the opportunity to connect with fellow AI builders, founders, and innovators.\n\nRSVP: https://lnkd.in/gTWtze_m",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8136203128470111684",
                                "url": "https://luma.com/jacuxzd6?tk=vl1kFT",
                                "title": "Inference Above Paris · Luma",
                                "author": "luma.com",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQHbnjSMG73GSA/articleshare-shrink_480/B56Z7SgmYoIoAc-/0/1781648222013?e=1787648400&v=beta&t=HhchQ5c1xpQ8d3FAUj5HNj9w_wPUjXJI2RxffZiwFxw",
                                "published_at": "2031-06-21T15:26:29.171Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 46,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-above-paris-luma-activity-7472774294125694976-12Zv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7472774294125694976",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-06-16T22:17:09.152Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472720361340465152",
                            "date": "2mo",
                            "text": "Raise your hand if you're ready for #RAISE2026 🙌 \n\nThe next era of AI isn't just bigger models. It's smarter infrastructure.\n\nInference 2.0 uses disaggregated inference to route each phase of AI processing to the hardware that does it best, unlocking faster, more efficient AI agents.\n\nLet's talk about it in Paris.\n\nhttps://lnkd.in/ejGEgazZ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-20-activity-7472720361340465152-lRbN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7472720324002762752",
                            "attachments": [
                                {
                                    "id": "D5605AQHK4BQyIdzzoA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHK4BQyIdzzoA/mp4-720p-30fp-crf28/B56Z7RvizRIoB8-/0/1781635364310?e=1787648400&v=beta&t=IMv5eJ2dfc1g2aYy5IRsS66VzxCb4ROI8iyHzyoHKtQ",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-16T18:42:50.574Z",
                            "reaction_counter": 42,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472407087843561472",
                            "date": "2mo",
                            "text": "What is disaggregated inference for AI agents?\n\nAI inference has two distinct phases:\n\n• Prefill: processing the prompt, context, files, and inputs\n• Decode: generating tokens one at a time\n\nTraditionally, both run on the same hardware. Disaggregated inference takes a different approach, routing each phase to the chip best suited for the job.\n\n⚡ GPUs handle prefill\n🔥 SambaNova RDUs handle decode\n\nBy matching the workload to the right architecture, AI agents can run faster and more efficiently at scale. 🦾 \n\nhttps://lnkd.in/eF8k3T6T",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_disaggregated-inference-activity-7472407087843561472-39_E?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7472407046747746304",
                            "attachments": [
                                {
                                    "id": "D5605AQFbe0dJu3l4BA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFbe0dJu3l4BA/mp4-720p-30fp-crf28/B56Z7NSoFSJACA-/0/1781560676005?e=1787648400&v=beta&t=1e2WgT9nrxlftenKwqcRhhEuY08JGRb-y3w7Qut9yGo",
                                    "size": {
                                        "width": 720,
                                        "height": 746
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-15T21:58:00.352Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7471305347547283457",
                            "date": "2mo",
                            "text": "Hot take 2: the software stack is where AI infrastructure is actually won or lost.\n\nToday we're thrilled to welcome Rich Heaton as SambaNova's new EVP of Software. 🙌\n\nRich has spent his career doing one thing exceptionally well: building world-class software organizations that ship at scale, under pressure, against the best competition in the industry. That's exactly the assignment at SambaNova.\n\nOur inference platform is powering some of the most demanding AI deployments in the world — and customer demand is only accelerating. Rich's job is to make sure our software scales with every bit of that ambition.\n\nRich, SambaNova is lucky to have you. Let's get to work. 🔥\nhttps://lnkd.in/gv2w3pjF",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABrSe8Bnbw7nqkNw8RzJrm-6-FIlscnGAw",
                                    "start": 116,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-2-the-software-stack-is-where-ai-activity-7471305347547283457-ehhc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7471305347547283457",
                            "attachments": [
                                {
                                    "id": "D5622AQGez8YeNJHA3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGez8YeNJHA3A/feedshare-shrink_800/B56Z69KH1dHUAc-/0/1781290008169?e=1788393600&v=beta&t=FmYHXeSElw3-ruUqVPiK0fv0zCGMSLjEokqoVxyg0ME",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 37,
                            "parsed_datetime": "2026-06-12T21:00:04.996Z",
                            "reaction_counter": 248,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7471215799098085376",
                            "date": "2mo",
                            "text": "Hot take: great companies are built and scaled by great finance leaders!\n\nToday we're thrilled to welcome Matt Padfield as SambaNova's new Chief Financial Officer. 🙌\n\nMatt has spent his career turning high-growth technology companies' finances into a genuine competitive advantage — at Synaptics, Lumentum, Coherent, and beyond. He knows how to build the operational backbone a fast-moving company needs, and that's exactly what we're asking him to do.\n\nCustomer demand for our inference platform is accelerating. The market opportunity is real. And now we have exactly the right person to help us scale intelligently and ambitiously.\n\nMatt, SambaNova is lucky to have you. Let's get to work. 🔥\n\nhttps://lnkd.in/gv2w3pjF",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAYnL2IBTk7rpg5G_LZBG8Wzs_q_hxqpa8E",
                                    "start": 106,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-great-companies-are-built-and-scaled-activity-7471215799098085376-bomF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7471215799098085376",
                            "attachments": [
                                {
                                    "id": "D5622AQG18UuOk2waPw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG18UuOk2waPw/feedshare-shrink_800/B56Z68XLd2IoAc-/0/1781276653690?e=1788393600&v=beta&t=zwh0TMfE5ojMy_9XuPT6HQwZ7Pz2QppsIPfwew2uCWI",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 54,
                            "parsed_datetime": "2026-06-12T15:04:14.982Z",
                            "reaction_counter": 257,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470898832520830976",
                            "date": "2mo",
                            "text": "Gemma 4 31B is now running on SambaCloud, and according to Artificial Analysis, it's the fastest place to run it.\n\nWhy does that matter?\n\nBecause Gemma 4 31B is one of the most capable open models available today. It combines frontier-level reasoning, strong coding performance, multimodal capabilities, and native support for agentic workflows in a single open-weight model.\n\nOn SambaCloud, developers can take advantage of:\n\n⚡ The fastest Gemma 4 31B inference speeds available\n🧠 Advanced reasoning with configurable thinking mode\n🤖 Native function calling, structured JSON output, and agent-ready workflows\n👁️ Multimodal support for text and image understanding\n\nWhether you're building AI agents, code assistants, document intelligence systems, or production applications, latency matters. Faster models create better user experiences and unlock entirely new classes of applications.\n\nWe break down the benchmarks, capabilities, and why speed is becoming one of the most important differentiators in AI infrastructure.\n\nRead the full blog below 👇\nhttps://lnkd.in/gyE5iW98",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "6930037481944098972",
                                "url": "https://sambanova.ai/blog/gemma-4-31b-running-fastest-on-sambacloud?utm_source=linkedin&utm_medium=organic&utm_content=blog-announcement",
                                "title": "Gemma 4 31B Runs Fastest on SambaCloud",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQEE5jmDQUYh4A/articleshare-shrink_800/B4DZ8WUQlmK8A0-/0/1782785838268?e=1787648400&v=beta&t=2SZE9ZNv2FRqo8llO9w_1_qgVFHy8YAi0q5zwjvpxE8",
                                "published_at": "2022-05-11T06:14:49.565Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 59,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_gemma-4-31b-runs-fastest-on-sambacloud-activity-7470898832520830976-hN8I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470898832520830976",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-11T18:04:44.261Z",
                            "reaction_counter": 41,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470898035917598720",
                            "date": "2mo",
                            "text": "Appreciate the brilliant perspective from Dharmesh Thakker General Partner at Battery Ventures.\n\nAs AI adoption accelerates, we're focused enabling customers to run the largest models efficiently while maximizing performance and token output.\n\nGrateful to have partners who share our vision for the future of AI computing.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 42,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/battery-ventures/",
                                    "start": 78,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7470898036601364480",
                            "share_url": "https://www.linkedin.com/posts/sambanova_excited-to-share-perspectives-on-the-future-activity-7470898036601364480-nvRx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470898035917598720",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7470870724161843200",
                                "date": "2mo",
                                "text": "Excited to share perspectives on the future of AI computing with Forbes alongside Rodrigo Liang, CEO of SambaNova, a Battery Ventures portfolio company building at the forefront of the AI inference wave! \n \nThe move from training to inference is already mainstream. We’re now in the midst of an unprecedented imbalance with $3T capex committed towards 100GW of new datacenter capacity by 2030, but limited by power constraints and NIMBY opposition slowing down buildouts. Frontier models and open source models are now routinely running into 5-10T parameters, while the industry’s memory shortage makes it difficult to fit large models into existing silicon solutions.\n\nExcited to be part of SambaNova’s journey where our memory-optimized inference solutions enable massive models to generate premium tokens in a power-constrained environment! Existing urban cloud datacenters with standard air-cooling can be retrofitted with SambaNova's chips unlocking new token supply the market desperately needs. \n\nGreat to see the partnerships with Intel, Vista Equity Partners, and Cambium Capital Management to enable this new generation of memory and power-optimized inference silicon. Look fwd to the growth journey ahead with the SambaNova team!",
                                "author": {
                                    "id": "ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "name": "Dharmesh Thakker",
                                    "is_company": false,
                                    "public_identifier": "dthakker"
                                },
                                "parsed_datetime": "2026-06-11T16:13:02.706Z"
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-11T18:01:34.336Z",
                            "reaction_counter": 38,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-11T18:01:34.499Z"
                        },
                        {
                            "id": "7470611500789821441",
                            "date": "2mo",
                            "text": "When the team from Forbes came to our San Jose headquarters, the conversation quickly became about more than just chips.\n\nIt became a discussion about the future of AI and what it actually takes to run it at scale.\n\nAs AI adoption accelerates, the challenge is no longer training models, it’s inference: running models efficiently, reliably, and fast enough to power the next generation of agentic applications.\n\nAs our CEO and Founder Rodrigo Liang put it:\n “It's much lower power, much smaller footprint, and it's faster than anybody else. What's not to like?”\n\nAnd as Dharmesh Thakker General Partner of Battery Ventures explained:\n\"The technology that SambaNova has is very complimentary to what Intel has because most AI data centers need a combination of CPUs and GPUs.\"\n\nA big thank you to Anton McGonnell and Vasanth Mohan for helping bring this story to life and for the thoughtful conversations throughout the day.\n\nWe’re excited about what this shift means in practice, from premium inference and agentic AI to more efficient, sustainable data center infrastructure that lets enterprises deploy AI at scale, not just experiment with it.\n\nAnd thank you to Kirsten Taggart and the team at Forbes for spending the time with us and taking a deeper look at what we’re building.\n\n🎥  Watch the full feature below.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 19,
                                    "length": 6
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 436,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 571,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/battery-ventures/",
                                    "start": 607,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 700,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 797,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACDok4EBPpH_NMs5r78lIsI0cMY4Ij09-qA",
                                    "start": 817,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAOczs8B8HR6XeT9RzAoJ2FDPdUyjkp_vLM",
                                    "start": 1166,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 1198,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-future-of-ai-isnt-training-its-inference-activity-7470611500789821441-c9ns?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470611236733231105",
                            "attachments": [
                                {
                                    "id": "D5605AQHUlYUsKeMqsg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHUlYUsKeMqsg/mp4-720p-30fp-crf28/B56Z6zxX2dHUB8-/0/1781132572819?e=1787648400&v=beta&t=mykiCJAoKqc9SAAPFBLmRYy133wYD4PFNfj5_-DCudw",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 13,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-10T23:02:59.038Z",
                            "reaction_counter": 136,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470592620172431360",
                            "date": "2mo",
                            "text": "Great conversations, great people, and plenty of big ideas about what's next for AI at Fortune Brainstorm Tech.\n\nWe especially loved seeing Robert F. Smith and Rodrigo Liang showing off our chip 😎🔥",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 87,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 140,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 160,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_great-conversations-great-people-and-plenty-activity-7470592620172431360-lkBe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470592619203432448",
                            "attachments": [
                                {
                                    "id": "D5622AQEzeXgmJRMISA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEzeXgmJRMISA/feedshare-shrink_800/B56Z6zgZHSGcAg-/0/1781128075829?e=1788393600&v=beta&t=BEV7cx9HZeY4vCNy68AoNW_nPCNbTjhl4ecc2it2kmU",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQHwKSwdxIijXQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHwKSwdxIijXQ/feedshare-shrink_800/B56Z6zgZLfIUAc-/0/1781128075651?e=1788393600&v=beta&t=F5SXTtJHZWDOe172psUNsCtHfXD22sYkqwRCnz-oI5o",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGdomUuBF0P8A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGdomUuBF0P8A/feedshare-shrink_800/B56Z6zgZHkGoAc-/0/1781128075232?e=1788393600&v=beta&t=pEfZOyjTkEe5xIyZ7NFkKyWYjnsy4ob4F7zYhZGm-mQ",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-10T21:47:57.548Z",
                            "reaction_counter": 39,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470507030538108928",
                            "date": "2mo",
                            "text": "\"We’re getting two to 3x better than the [Nvidia] Blackwells [GPUs] on the exact same models, and so we think that at scale that’s the way to at least bring the cost down.\" - Rodrigo Liang\n\nOne of the most interesting parts of Rodrigo Liang's conversation with Sara Hooker and Jeremy Kahn at Fortune Brainstorm Tech was the mix of perspectives on stage. Jeremy's questions cut through the hype and got right to the bigger shifts happening across AI, while Sara shared an important perspective on why the future of AI can’t just be about building bigger models, but also about efficiency, adaptability, and systems that can continuously evolve.\n\nTogether with Rodrigo Liang, the conversation explored a question the industry is starting to wrestle with more seriously: how do we build AI systems that deliver more intelligence with dramatically better efficiency at scale?\n\nA few themes stood out:\n• AI is moving from a training-first mindset into an inference-first reality\n• Efficiency is quickly becoming one of the biggest competitive advantages in AI\n• The future stack won’t be one-size-fits-all, it will be purpose-built for different workloads\n\nRead this great recap of their discussion from Sharon Goldman: https://lnkd.in/e-AEVz32",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 175,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 227,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAQGenIBEWqX0P76BgWCv2fCpClH6SyfYMY",
                                    "start": 261,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAA0ruw0BbuW0X2plb8fqaPFfU52oUkTA7Xo",
                                    "start": 277,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 292,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 659,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAA7ZrMB5heap3Zo84th9xa0rP-7ZgtiwKI",
                                    "start": 1199,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_were-getting-two-to-3x-better-than-the-activity-7470507030538108928-MDAb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470507030538108928",
                            "attachments": [
                                {
                                    "id": "D5622AQFhQBeC53Vz9Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFhQBeC53Vz9Q/feedshare-shrink_800/B56Z6ySjn6JoAc-/0/1781107669764?e=1788393600&v=beta&t=qTdJKpqKVJJ-AO3L8GbllH3Cit0S5xozcMpYq8gu27M",
                                    "size": {
                                        "width": 800,
                                        "height": 533
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-10T16:07:51.389Z",
                            "reaction_counter": 77,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470243433035657216",
                            "date": "2mo",
                            "text": "What actually happens during AI inference?\n\nThis video breaks down how RDUs, memory architecture, and multi-level parallelism work together to generate thousands of tokens in parallel across racks.\n\nBuilt for scalable, real-world AI inference 🦾\n\nLearn more: https://lnkd.in/evC2StBQ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_rdu-reconfigurable-dataflow-unit-activity-7470243433035657216-wLFw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470243356757938176",
                            "attachments": [
                                {
                                    "id": "D5605AQHtX-AF0MB8qw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHtX-AF0MB8qw/mp4-720p-30fp-crf28/B56Z6uixRXIoB8-/0/1781044818140?e=1787648400&v=beta&t=-VxF24LsI0tMwQ8KlOWt9pDIWTXAeEManUK-RjDHCO4",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-09T22:40:24.847Z",
                            "reaction_counter": 52,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470174437754142722",
                            "date": "2mo",
                            "text": "What happens when you match the right chip to the right stage of inference?\n\nAt #Computex, we demonstrated premium inference for AI agents running live inside the new VC2 data center.\n\nUsing NVIDIA B200 GPUs for prefill, SambaNova RDUs for decode, and CPUs for orchestration, the system delivered up to 2X the inference speed of B200-only configurations.\n\nThe demo highlights where AI infrastructure is heading next: heterogeneous systems optimized for real-world agentic workloads 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_same-prompt-same-model-two-stacks-activity-7470174437754142722-CVdS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470174383928528897",
                            "attachments": [
                                {
                                    "id": "D5605AQEk1fnU2Uwx8w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQEk1fnU2Uwx8w/mp4-720p-30fp-crf28/B56Z6tkCABJMCA-/0/1781028368743?e=1787648400&v=beta&t=gBRzkShaPxuPs5pNVZ1T5TEzuKqY9IBSw-Vpc6YN5S0",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-09T18:06:15.090Z",
                            "reaction_counter": 30,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7469833131483635712",
                            "date": "2mo",
                            "text": "\"VC2 is the largest commercial deployment of SambaNova technology in our history, and we're proud to partner with the industry's strongest leaders.\" - Lip-Bu Tan\n\nAgentic AI is changing infrastructure requirements and the industry is moving beyond one-size-fits-all compute.\n\nExcited to see the launch of Vector Core Compute (VC2), the world’s first commercially available disaggregated inference cloud combining CPUs, GPUs, and our RDUs in production.\n\nRead more: https://lnkd.in/g9byhHvq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8862463306152232245",
                                "url": "https://itbrief.co.uk/story/vista-launches-vector-core-compute-for-ai-inference",
                                "title": "Vista launches Vector Core Compute for AI inference",
                                "author": "itbrief.co.uk",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQGkt5Y2hO2H-w/articleshare-shrink_800/B56Z6oSq7DKQAc-/0/1780939928689?e=1787648400&v=beta&t=g5rPD3iRZdHWHPuVddXLd-6laVTiIc-vfDY_EuH4IkM",
                                "published_at": "2036-12-15T17:45:08.792Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 151,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_vista-launches-vector-core-compute-for-ai-activity-7469833131483635712-XPAn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7469833131483635712",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-08T19:30:01.334Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7469746320929603585",
                            "date": "2mo",
                            "text": "Premium inference, but make it comics 🦾\n\nWe had a great time at the Avnet SKO with our CRO Harry Ault talking about the future of AI infrastructure and agentic workloads, plus a few SambaNova superheroes making an appearance. \n\nAlways a fun time partnering with Avnet!\n\nNicole Siegal Fuselier Michael Kearney",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAf9ZkBKVHsilpUk0Mp5DDq82zXy9ANQSg",
                                    "start": 91,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 270,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAeKakBlHAobBzukr_ci3b5umHuht5z2cE",
                                    "start": 293,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_premium-inference-but-make-it-comics-activity-7469746320929603585-QPIw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7469742032446668800",
                            "attachments": [
                                {
                                    "id": "D5622AQH9OGpsEh5MEg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQH9OGpsEh5MEg/feedshare-shrink_480/B56Z6nay5MKAAg-/0/1780925280732?e=1788393600&v=beta&t=lb6yohlmAipUDGo9hOYfk6iRC4g-2q9kWdqPjU4ITWc",
                                    "size": {
                                        "width": 480,
                                        "height": 788
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQFIrRBCkyjC3Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFIrRBCkyjC3Q/feedshare-shrink_800/B56Z6naypiKAAg-/0/1780925279284?e=1788393600&v=beta&t=K31uwqU1DiTS90YumZCVEFapVJPi1JrzOqLrykofzVc",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQEreEEOC5Q8JQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEreEEOC5Q8JQ/feedshare-shrink_800/B56Z6nayq4JoAg-/0/1780925279686?e=1788393600&v=beta&t=ckQjUzZNlE33UBsFMqMbg-_LL6KlBIHNhfOjcJcqES0",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQHYxBs9tnbSJw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHYxBs9tnbSJw/feedshare-shrink_800/B56Z6naysVIQAc-/0/1780925279722?e=1788393600&v=beta&t=TZ7LZ2frA_Y2sm7sVvBlQ_ZbPCLb52gfXz6Sll5v40c",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-08T13:45:04.085Z",
                            "reaction_counter": 74,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468787703854174208",
                            "date": "2mo",
                            "text": "Our CEO Rodrigo Liang joined CNBC Squawk Box Asia to talk about where AI infrastructure is headed next.\n\n• Why heterogeneous AI systems are becoming increasingly important\n• How token speed impacts agentic AI performance\n• The role energy efficiency plays in scaling modern AI workloads\n• And why the next 12 months will be an exciting period for both AI infrastructure and the broader market \n\nhttps://lnkd.in/eXJ4Vmts",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 29,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-ceo-rodrigo-liang-joined-cnbc-squawk-activity-7468787703854174208-JxTQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468787703854174208",
                            "attachments": [
                                {
                                    "id": "D4E22AQGSx7OgiHli3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E22AQGSx7OgiHli3A/feedshare-shrink_480/B4EZ6Z211CLAAg-/0/1780697751172?e=1788393600&v=beta&t=qgubl7trY-igN0JUWvDn5LXX4nb_7eToGXJ9NbixP1c",
                                    "size": {
                                        "width": 480,
                                        "height": 270
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T22:15:51.964Z",
                            "reaction_counter": 73,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468703087155728384",
                            "date": "2mo",
                            "text": "AI is moving fast, and the conversation is changing with it.\n\nAt Fortune Brainstorm Tech, our CEO Rodrigo Liang will join a discussion on what the next generation of AI infrastructure should actually look like, from energy efficiency to smarter systems built for real-world AI 🦾\n\n📍 “From the AI We Have to the AI We Need”\n🕥 10:20 –10:40 AM\n\nhttps://lnkd.in/gWuANCRC",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 65,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 98,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-is-moving-fast-and-the-conversation-is-activity-7468703087155728384-EnJ1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468703087155728384",
                            "attachments": [
                                {
                                    "id": "D5622AQEq3A2dsXXc2g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEq3A2dsXXc2g/feedshare-shrink_800/B56Z6Yp4iaJwAc-/0/1780677577062?e=1788393600&v=beta&t=TOxCCsksHSBm34ZHSByh2VxA0tYaCWcY4bAo5DqN2d4",
                                    "size": {
                                        "width": 800,
                                        "height": 418
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T16:39:37.771Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468670469534027776",
                            "date": "2mo",
                            "text": "Multi-agent systems are changing how AI work gets done 🦾\n\nJoin our own Kwasi Ankomah for a deep dive into orchestration patterns, parallel execution, recursive workflows, and live demos of production-ready AI agents.\n\nDon’t miss it 👇",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAMLrB4BX-kBxxAOmJ3xDKxQgWhqZ-mkJJk",
                                    "start": 71,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7468670469534027776",
                            "share_url": "https://www.linkedin.com/posts/sambanova_single-ai-agents-work-until-the-workflows-activity-7468670469534027776-BkZP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468670469534027776",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7466247018647318528",
                                "date": "2mo",
                                "text": "Single AI agents work… until the workflows get complex.\n\nModern AI systems are shifting toward multi-agent architectures that can reason, coordinate, and scale more effectively in production environments.\n\nJoin Kwasi Ankomah, Lead AI Architect at SambaNova Systems, as we dive into:\n• Why solo agents fail at scale\n• Multi-agent orchestration patterns\n• Supervisor-worker & writer-critic systems\n• Parallel execution and recursive workflows\n• Live demos of production-ready AI agents\n\n📅10th June 2026 | ⏰ 11 AM Pacific\n\nIf you’re building LLM applications, autonomous agents, or scalable AI workflows, this session is for you.\n\n👉 Register now: https://hubs.la/Q04jqw810",
                                "author": {
                                    "id": null,
                                    "name": "Data Science Dojo",
                                    "is_company": true,
                                    "public_identifier": "data-science-dojo"
                                },
                                "parsed_datetime": "2026-05-29T22:00:05.407Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T14:30:01.124Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-05T14:30:01.124Z"
                        },
                        {
                            "id": "7468483056241319936",
                            "date": "2mo",
                            "text": "As AI agents move from experimentation to production, inference becomes the defining challenge.\n\nThat’s why we're proud to be part of Vector Core Compute (VC2), the world’s first enterprise inference cloud built on a disaggregated architecture that combines CPUs, GPUs, and RDUs to deliver premium inference at scale.\n\nAs Robert F. Smith explains, the future of enterprise software is agentic, and making AI economically sustainable requires a new approach to inference. At SambaNova, we're helping accelerate the most demanding part of the inference stack, enabling higher performance, better efficiency, and lower costs for enterprise AI workloads.\n\nWatch Robert's conversation with CNBC to learn more about the vision behind VC2 and the future of AI infrastructure.\n\nVista Equity Partners Cambium Capital Management Together AI",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 322,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 685,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 770,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 792,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 819,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7468483057105162240",
                            "share_url": "https://www.linkedin.com/posts/sambanova_just-back-from-taiwan-i-sat-down-with-david-activity-7468483057105162240-bZ_w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7468483056241319936",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7468365568887291905",
                                "date": "2mo",
                                "text": "Just back from Taiwan, I sat down with David Faber on CNBC's Squawk on the Street to talk about why we built Vector Core Compute (VC2).\n\nAs enterprise software becomes agentic, the agents you deploy run continuously, and inference (the cost to actually run AI) climbs with them. VC2 aims to deliver low-cost access to inference, so our software companies can build agents that do the work profitably and have a sustainable future in an agentic world.\n\nWatch here: https://bit.ly/3RJEiUF",
                                "author": {
                                    "id": "ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "name": "Robert F. Smith",
                                    "is_company": false,
                                    "public_identifier": "robertfredericksmith"
                                },
                                "parsed_datetime": "2026-06-04T18:18:27.145Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T02:05:18.313Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-05T02:05:18.519Z"
                        },
                        {
                            "id": "7468398678882291712",
                            "date": "2mo",
                            "text": "General Compute is building the world’s fastest inference cloud for AI agents, and they chose SambaNova to power it.\n\nTheir platform is designed for demanding AI workloads like coding agents and voice agents, where latency and responsiveness directly impact the user experience.\n\nBy deploying SambaNova’s purpose-built AI infrastructure, General Compute is able to deliver:\n• 5X faster response times\n• Higher throughput for latency-sensitive workloads\n• OpenAI-compatible APIs for seamless adoption\n• Air-cooled deployments in existing data centers\n\nAs AI agents become more interactive and real-time, infrastructure purpose-built for inference is becoming increasingly important 🦾\n\nRead the case study: https://lnkd.in/gDjkHYs5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7033512164286146778",
                                "url": "https://sambanova.ai/general-compute-builds-fastest-inference-cloud-with-sambanova?utm_source=linkedin&utm_medium=organic&utm_content=customer-partner",
                                "title": "General Compute builds the world’s fastest inference cloud with SambaNova",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQH3o0VwU_d5XA/articleshare-shrink_800/B4DZ6Zqd2pIsAQ-/0/1780694507763?e=1787648400&v=beta&t=TZ3AkN-goBX_SZgwjdwGfkm97K-aH8uewMOiEFB4isg",
                                "published_at": "2023-02-20T19:06:16.302Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 0,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_general-compute-builds-the-worlds-fastest-activity-7468398678882291712-KOf-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468398678882291712",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-04T20:30:01.183Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468350969920249856",
                            "date": "2mo",
                            "text": "The AI frontier is moving fast, and inference is the new battleground.\n\nAt COMPUTEX, we demonstrated the first live disaggregated inference system for AI agents, combining GPUs and RDUs to deliver premium inference at scale in the newly announced VC2 data center.\n\nAlso, check out the SN50 RDU, our fifth-generation AI chip purpose-built for agentic inference, delivering the speed, throughput, and efficiency required for the next generation of AI workloads.\n\nSee how we're redefining inference for the era of AI agents: https://sambanova.ai/",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-ai-frontier-is-moving-fast-and-inference-activity-7468350969920249856-xqGB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468350969920249856",
                            "attachments": [
                                {
                                    "id": "D5622AQE_uOQGhJlkfw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQE_uOQGhJlkfw/feedshare-shrink_800/B56Z6Tpoe1H0Ag-/0/1780593625236?e=1788393600&v=beta&t=Yz_abHsgL59ztPISGpSOsFZaNXU9fVbwCgXF-5e07N4",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-04T17:20:26.480Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468340562857803776",
                            "date": "2mo",
                            "text": "What a week at #Computex2026. From unveiling the world's first commercially available disaggregated inference cloud with Vista Equity Partners, Cambium Capital Management, Intel, and Together AI to demonstrating how heterogeneous infrastructure can deliver premium inference for AI agents, this year's event marked an important milestone for the future of AI.\n\nA huge thank you to everyone who joined our sessions throughout the week, including the standing-room-only deep dive from our very own Anton McGonnell and Kwasi Ankomah on how disaggregated inference is reshaping AI infrastructure.\n\nThe momentum around disaggregated inference is real. As AI agents become more sophisticated, the industry needs a new approach, one that matches the right processor to the right workload to deliver higher performance, greater efficiency, and lower cost.\n\nThank you, Taipei, for the incredible energy, conversations, and hospitality. We're excited for what's next. 💜",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 121,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 144,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 172,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 183,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 496,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAMLrB4BX-kBxxAOmJ3xDKxQgWhqZ-mkJJk",
                                    "start": 516,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7468340562857803776-LCSX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468340562857803776",
                            "attachments": [
                                {
                                    "id": "D5622AQGfeTRvThdrTg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGfeTRvThdrTg/feedshare-shrink_800/B56Z6TgK2sHUAc-/0/1780591144612?e=1788393600&v=beta&t=Ci7yNOUAYg3Mywk5FClYIn0yQxOd9QUNLQQ36--tcO8",
                                    "size": {
                                        "width": 800,
                                        "height": 450
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 11,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-04T16:39:05.243Z",
                            "reaction_counter": 144,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467970741473406978",
                            "date": "2mo",
                            "text": "Agentic AI needs more than accelerators, it needs the right infrastructure.\nAt #COMPUTEX2026, Intel unveiled new rack-scale reference architectures designed to power AI agents at unprecedented scale. The story also highlights how Intel and SambaNova's disaggregated inference blueprint has landed its first commercial deployment through Vector Core Compute (VC2), with Together AI as its first customer.\n\nBy matching the right chip to the right workload, GPUs for prefill, RDUs for decode, and CPUs for agent orchestration; we're helping define what premium inference looks like for the agentic era.\n\nThanks to The Register and Tobias Mann for covering the announcement.\nhttps://lnkd.in/g_68UjjR",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 94,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/the-register/",
                                    "start": 611,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABkD7ngBb6trTDpiIie8zscG77fYfNbAphY",
                                    "start": 628,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7467970741473406978-AXTa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467970741473406978",
                            "attachments": [
                                {
                                    "id": "D5622AQG8AT4Cln604g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG8AT4Cln604g/feedshare-shrink_800/B56Z6OP0ZVKwAc-/0/1780502972235?e=1788393600&v=beta&t=gM0qOYB4Nmb95-SUWKRE3XlHwnZ5CIZUZC1L9weKjJ4",
                                    "size": {
                                        "width": 800,
                                        "height": 455
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-03T16:09:32.954Z",
                            "reaction_counter": 102,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467921526911062017",
                            "date": "2mo",
                            "text": "AI agents are changing the economics of inference.\n\nAs coding agents evolve from simple assistants to systems that can plan, edit, test, repair, and run for hours, infrastructure providers face a new challenge: delivering premium inference performance without premium cost pressure.\n\nAt COMPUTEX TAIPEI 2026, SambaNova demonstrated the industry's first live disaggregated inference deployment for AI agents running in VC2.\n\nUsing NVIDIA B200 GPUs for prefill and SambaNova RDUs for decode, the system delivered 2x faster inference than B200-only configurations while showcasing a new blueprint for scaling agent workloads.\n\nThe key idea is simple: use the right chip for the right workload.\n\n➡️ GPUs for prefill\n➡️ RDUs for decode\n➡️ CPUs for orchestration\n\nThis architecture is already live in VC2, with Together.ai set to be the first commercial customer leveraging these capabilities.\n\nThe future of AI infrastructure isn't about adding more of the same hardware. It's about optimizing every stage of the inference pipeline.\n\nRead the full blog: https://lnkd.in/gQtaBWmQ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7082179349112251126",
                                "url": "https://sambanova.ai/blog/first-disaggregated-inference-demo-for-ai-agents-live?utm_source=linkedin&utm_medium=organic",
                                "title": "The First Disaggregated Inference Demo for AI Agents Is Live",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQHNe-nM8QKR7w/articleshare-shrink_800/B4EZ_8WlJYHkA4-/0/1786645207079?e=1787648400&v=beta&t=Ykiy-xndbykKF7AgsEEXp0RyAWx3Q6uJHG007_KCDUs",
                                "published_at": "2023-07-05T02:12:17.357Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/computex-taipei/",
                                    "start": 287,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-first-disaggregated-inference-demo-for-activity-7467921526911062017-HfHc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467921526911062017",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-03T12:53:59.288Z",
                            "reaction_counter": 51,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467910229662547969",
                            "date": "2mo",
                            "text": "The world's first heterogenous disaggregated inference cloud was just shown running live at ComputeX.\n\nVC2 — backed by a $3.5B compute commitment to SambaNova from Vista Equity Partners and Cambium Capital Management — brings three chips together in production for the first time:\n⚡ NVIDIA B200 GPUs — prefill\n🔥 SambaNova RDUs — decode, running MiniMax over 400 t/s\n⚙️ Intel® Xeon® 6 CPUs — orchestration\n\nAir cooled. Order of magnitude lower power. Deployed in existing brownfield data centers in Los Angeles.\n\nRobert F. Smith Landon Downs Lip-Bu Tan Vipul Ved Prakash Vista Equity Partners Cambium Capital Management Intel Together AI",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/sambanova/",
                                    "start": 149,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 164,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 190,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 369,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 512,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACiRP0BMLEp3FgjuLGZOeZgg8cBNrECVMg",
                                    "start": 528,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 541,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAAYScBznNfbAVksI7V7CkgpODd4m2tBkw",
                                    "start": 552,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 570,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 592,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 619,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 625,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-worlds-first-heterogenous-disaggregated-activity-7467910229662547969-pByd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467910229662547969",
                            "attachments": [
                                {
                                    "id": "D5622AQFidyAKpPIuuQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFidyAKpPIuuQ/feedshare-shrink_800/B56Z6NYyKjKMAc-/0/1780488545144?e=1788393600&v=beta&t=ZI5gNcZ6DCdb-340pXs4BtgpHBtxrZTHREP9QJXIAOE",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 35,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-06-03T12:09:05.814Z",
                            "reaction_counter": 179,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467651263699197952",
                            "date": "2mo",
                            "text": "The market is sending a clear signal: fast inference matters. Going from 108M tokens on day one to 3B tokens per day in just a matter of weeks is a remarkable milestone and a reflection of the growing demand for AI infrastructure built for production workloads.\n\nCongratulations to the General Compute team. The era of premium inference is just getting started. ⚡",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 286,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-market-is-sending-a-clear-signal-fast-activity-7467651263699197952-Qb--?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467651263699197952",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-02T19:00:03.517Z",
                            "reaction_counter": 33,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467621022742073344",
                            "date": "2mo",
                            "text": "Congratulations to the General Compute team on this milestone. The next era of AI won't be built by simply adding more GPUs. It will be powered by purpose-built infrastructure that delivers the speed, efficiency, and economics required for production-scale inference.\n\nWe're excited to support General Compute as they build AI infrastructure designed from the ground up for the agentic era—bringing faster inference, lower power consumption, and greater accessibility to enterprises and developers alike.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 23,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_congratulations-to-the-general-compute-team-activity-7467621022742073344-DlZ5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467621022742073344",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-02T16:59:53.511Z",
                            "reaction_counter": 31,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467620673545293824",
                            "date": "2mo",
                            "text": "For years, the industry focused on training. Today, inference is where AI delivers value. As organizations move AI into production, they need infrastructure that can run the largest models faster, more efficiently, and with the sovereignty and security their businesses demand.\n\nGreat discussion from Rodrigo Liang on CNBC about where the market is headed and why premium inference is becoming the next major battleground in AI infrastructure.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 301,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 318,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_for-years-the-industry-focused-on-training-activity-7467620673545293824-Zryx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467620673545293824",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-02T16:58:30.256Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467616065188048897",
                            "date": "2mo",
                            "text": "At Lip-Bu Tan's #COMPUTEX2026 keynote today, Rodrigo Liang stepped onstage with Robert F. Smith to power up the world's first disaggregated inference cloud, VectorCore Compute (VC2), launched by Vista Equity Partners and Cambium Capital Management.\n\nThree chips ran disaggregated inference, live from the VC2 datacenter in LA:\n➡️ NVIDIA B200 GPUs — prefill, high-compute burst\n➡️ SambaNova RDUs — decode, high-throughput, low-latency token generation at scale\n➡️ Intel® Xeon® 6 CPUs — tool execution, end-to-end orchestration\n\n“GPUs are powerful. RDUs are fast. CPUs orchestrate. But disaggregate all three — and you get speed, performance, and economics no single chip can touch. That's the unlock.” – Rodrigo Liang",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 3,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 45,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 80,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 195,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 221,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 703,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7467616065188048897-v-gM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467616065188048897",
                            "attachments": [
                                {
                                    "id": "D5622AQGp25ZgnRghQg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGp25ZgnRghQg/feedshare-shrink_480/B56Z6JNPP1IcAg-/0/1780418410123?e=1788393600&v=beta&t=rc_XAX_XKx1F8OMQtiSgzAyvXR1oZoaTthLs7tfY-J8",
                                    "size": {
                                        "width": 480,
                                        "height": 734
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 38,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-02T16:40:11.538Z",
                            "reaction_counter": 222,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467261942693392385",
                            "date": "2mo",
                            "text": "As enterprises move from AI experimentation to production, inference speed becomes a business metric.\n\nRicoh, one of Japan's leading technology and digital services companies, is building specialized AI models and agentic applications tailored for Japanese businesses. But scaling those solutions required infrastructure capable of delivering both performance and cost efficiency.\n\nWith SambaCloud, Ricoh achieved:\n• Up to 10× faster inference performance\n• 700+ tokens per second on 70B-class models\n• Reliable support for complex agentic workflows\n• Seamless deployment of custom open-weight models optimized for Japanese business use cases\n\nThe impact goes beyond benchmarks. As Gakushi Miyara of Ricoh explains:\n\"With SambaNova running 5 to 10 times faster, even complex agentic workflows that would otherwise take a minute finish in 10 seconds.\"\n\nThis is what happens when AI infrastructure is purpose-built for inference at scale.\n\nProud to support Ricoh as they bring faster, more capable AI experiences to businesses across Japan.\n\nhttps://lnkd.in/gJ5zTy32",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7152402776462425945",
                                "url": "https://sambanova.ai/ricoh-runs-japanese-custom-ai-models-10-faster-on-sambacloud?utm_source=linkedin&utm_medium=organic",
                                "title": "Ricoh runs Japanese custom AI models 10× faster on SambaCloud",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQFQHu6Z4CfS6Q/articleshare-shrink_800/B4DZ6ZxloTGUAU-/0/1780696375139?e=1787648400&v=beta&t=MnqHhEJBTFWgxkqzZ_HFoXqogTbM5rMMdPSYhsO7wJE",
                                "published_at": "2024-01-14T20:55:07.126Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/strategic-storefront-marketing/",
                                    "start": 103,
                                    "length": 5
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ricoh-runs-japanese-custom-ai-models-10-activity-7467261942693392385-X8os?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467261942693392385",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 9,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-01T17:13:02.156Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7465787151582953472",
                            "date": "2mo",
                            "text": "📣 Tim Fernholz at TechCrunch breaks down how General Compute is building its inference cloud with SambaNova, and why faster, more efficient inference infrastructure is becoming critical for the next wave of AI.\n\nFeaturing insights from General Compute CEO Finn P. and CTO Jason Goodison.\n\nRead more:\nhttps://lnkd.in/eu_fiSkV",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAn3SPMBaK5Rvrze6D3yAKhpNUDqlGTe-LU",
                                    "start": 2,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/techcrunch/",
                                    "start": 18,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 45,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAvSbKwBLYsLjXxyPIpwRsJLe8gaz8GxVTI",
                                    "start": 256,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3KUPkBbnn8PgWKQN52XMLIG9gYymdsIWw",
                                    "start": 272,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_tim-fernholz-at-techcrunch-breaks-down-activity-7465787151582953472-hDEY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7465787151582953472",
                            "attachments": [
                                {
                                    "id": "D5622AQHNt5zTUg08aA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHNt5zTUg08aA/feedshare-shrink_480/B56Z5vN2nyIsAg-/0/1779982363347?e=1788393600&v=beta&t=d8hGFDCBuqfT9tMmi_1pZ0XRxARDnC0MMsTWYfZ87H4",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 7,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-05-28T15:32:44.555Z",
                            "reaction_counter": 74,
                            "impressions_counter": 0
                        }
                    ],
                    "stats": [
                        {
                            "d": "LinkedIn followers on the company page",
                            "h": "Followers",
                            "v": 98127
                        },
                        {
                            "d": "Recent organic company-page posts provided",
                            "h": "Posts analyzed",
                            "v": 100
                        },
                        {
                            "d": "Most posts center on faster, more efficient AI inference and agentic workloads",
                            "h": "Core content angle",
                            "v": "Inference / premium inference"
                        },
                        {
                            "d": "Claims are reinforced with external validation, customer logos, and event coverage",
                            "h": "Proof-point style",
                            "v": "Benchmarks + partners + media"
                        }
                    ],
                    "company": {
                        "url": "https://www.linkedin.com/company/sambanova/",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                        "name": "SambaNova",
                        "posts": 100,
                        "period": "2026-05-28 to 2026-08-17",
                        "industry": "Computer Hardware Manufacturing",
                        "followers": 98127
                    },
                    "profile": {
                        "id": "18464083",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                        "name": "SambaNova",
                        "object": "CompanyProfile",
                        "claimed": true,
                        "tagline": "Transforming AI with efficiency, security, and sovereignty - driven by our relentless pursuit of intelligence.",
                        "website": "http://www.sambanova.ai",
                        "hashtags": [
                            {
                                "title": "#artificialintelligence"
                            },
                            {
                                "title": "#machinelearning"
                            },
                            {
                                "title": "#computing"
                            }
                        ],
                        "industry": [
                            "Computer Hardware Manufacturing"
                        ],
                        "locations": [
                            {
                                "area": "California",
                                "city": "San Jose",
                                "street": [
                                    "2460 N First Street",
                                    "100"
                                ],
                                "country": "US",
                                "postalCode": "95131",
                                "is_headquarter": true
                            }
                        ],
                        "messaging": {
                            "id": "2704957",
                            "entity_urn": "urn:li:fsd_pageMailbox:2704957",
                            "is_enabled": true
                        },
                        "activities": [
                            "High Performance Computing",
                            "Artificial Intelligence",
                            "Machine Learning",
                            "GPT3",
                            "Foundation Models",
                            "Deep Learning",
                            "Computer Vision",
                            "True Resolution",
                            "3D Image Analysis",
                            "Recommendation",
                            "AI Platform",
                            "Large Language Models",
                            "AI for Science",
                            "Generative AI",
                            "AI Inference",
                            "Premium Inference"
                        ],
                        "entity_urn": "urn:li:fsd_company:18464083",
                        "logo_large": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_100_100/B56ZyMpSXcHQAQ-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=gAqYUdjVIBj0B7BEJn7k9ZfIDphUNVMl7ordRY6TJ8Y",
                        "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                        "is_employee": false,
                        "profile_url": "https://www.linkedin.com/company/sambanova/",
                        "is_following": false,
                        "employee_count": 400,
                        "followers_count": 98127,
                        "foundation_date": "01/01/2017",
                        "organization_type": null,
                        "public_identifier": "sambanova",
                        "viewer_permissions": {
                            "canPinShare": false,
                            "canEditEvents": false,
                            "canReadEvents": false,
                            "canDeleteShare": false,
                            "canExportLeads": false,
                            "canSeeProducts": false,
                            "canEditCurators": false,
                            "canEditProducts": false,
                            "canReadMessages": false,
                            "canSendMessages": false,
                            "canSponsorShare": false,
                            "canCreateComment": false,
                            "canEditDarkShare": false,
                            "canCreateReaction": false,
                            "canCreateShowcase": false,
                            "canCreateBroadcast": false,
                            "canCreateDarkShare": false,
                            "canDeleteDarkShare": false,
                            "canNotifyEmployees": false,
                            "canAssociateHashtag": false,
                            "canCreateJobPosting": false,
                            "canUntagFromMention": false,
                            "canManageCareerPages": false,
                            "canCreateOrganicShare": false,
                            "canEditAdministrators": false,
                            "canManageServicesPage": false,
                            "canReadAdminDashboard": false,
                            "canReadAdministrators": false,
                            "canRequestAdminAccess": true,
                            "canEnableCommentsShare": false,
                            "canDisableCommentsShare": false,
                            "canInviteMemberToFollow": false,
                            "canManageMessagingAccess": false,
                            "canMembersInviteToFollow": false,
                            "canDeactivateOrganization": false,
                            "canNotifyEmployeesOfShare": false,
                            "canReadBroadcastAnalytics": false,
                            "canReadContentSuggestions": false,
                            "canReadTermsAndAgreements": false,
                            "canEmployeesInviteToFollow": false,
                            "canReadOrganizationActivity": false,
                            "canEditPendingAdministrators": false,
                            "canReadPendingAdministrators": false,
                            "canUpdateOrganizationProfile": false,
                            "canManageVerifiedEmailDomains": false,
                            "canReadAdminFeedFollowingPill": false,
                            "canEditPipelineBuilderAdminPage": false,
                            "canReadPipelineBuilderAdminPage": false,
                            "canManageOrganizationCompetitors": false,
                            "canSeeEmployeeExperienceAsMember": false,
                            "canEditLeadGenerationFormManagers": false,
                            "canManageOrganizationalPageFollow": false,
                            "canReadLeadGenerationFormManagers": false,
                            "canReadOrganizationLeadsAnalytics": false,
                            "canReadOrganizationUpdateAnalytics": false,
                            "canManageEmployeeExperienceSettings": false,
                            "canReadOrganizationVisitorAnalytics": false,
                            "canEditDirectSponsoredContentPosters": false,
                            "canEditPipelineBuilderAdministrators": false,
                            "canReadDirectSponsoredContentPosters": false,
                            "canReadOrganizationFollowerAnalytics": false,
                            "canReadPipelineBuilderAdministrators": false,
                            "canSeeOrganizationAdministrativePage": false,
                            "canCreateLinkedInPagesProductFeedBack": false,
                            "canReadOrganizationNewsletterAnalytics": false,
                            "canReadOrganizationTalentBrandAnalytics": false,
                            "canEditPendingDirectSponsoredContentPosters": false,
                            "canReadOrganizationPipelineBuilderAnalytics": false,
                            "canReadPendingDirectSponsoredContentPosters": false
                        },
                        "employee_count_range": {
                            "to": 500,
                            "from": 201
                        }
                    },
                    "summary": {
                        "text": "SambaNova’s organic LinkedIn strategy is highly focused and category-led: it uses the company page to define and own “premium inference,” disaggregated inference, and heterogeneous AI infrastructure. The feed mixes product/benchmark proof points, executive thought leadership, customer wins, partner amplifications, and event-driven coverage to reinforce a consistent narrative around speed, efficiency, sovereignty, and production readiness. Engagement appears strongest when posts combine major milestones, credible third-party validation, or recognizable enterprise logos and media outlets.",
                        "moves": [
                            "Repeatedly frames the market around inference, not training, positioning SambaNova as an infrastructure company for the agentic era.",
                            "Uses benchmark claims and third-party validation (e.g., analyst coverage, live demos, media interviews) to make performance messaging more credible.",
                            "Leans heavily on partner/customer storytelling (JPMorganChase, General Compute, Ricoh, Argonne, Intel, Vista, etc.) to signal enterprise traction and ecosystem breadth.",
                            "Builds authority through event marketing and executive visibility at RAISE, COMPUTEX, Forbes, CNBC, and similar venues.",
                            "Balances technical depth with milestone and hiring content, but the core narrative remains the same: faster tokens, lower power, and deployable in existing data centers."
                        ]
                    },
                    "website": "http://www.sambanova.ai",
                    "creative": {},
                    "launches": [
                        {
                            "date": "2026-06-02",
                            "type": "feature_release",
                            "title": "Disaggregated inference deployment and VC2-related launch content"
                        },
                        {
                            "date": "2026-06-08",
                            "type": "partnership",
                            "title": "Vector Core Compute (VC2) launch with Vista Equity Partners, Cambium Capital Management, Intel, and Together AI"
                        },
                        {
                            "date": "2026-06-11",
                            "type": "feature_release",
                            "title": "Gemma 4 31B running fastest on SambaCloud"
                        },
                        {
                            "date": "2026-07-08",
                            "type": "partnership",
                            "title": "First close of $1B Series F financing and JPMorganChase customer announcement"
                        },
                        {
                            "date": "2026-07-21",
                            "type": "feature_release",
                            "title": "Prompt caching launched on SambaCloud for MiniMax M2.7"
                        },
                        {
                            "date": "2026-08-13",
                            "type": "event",
                            "title": "Hot Chips Symposium 2026 presentation on SN50 RDU"
                        },
                        {
                            "date": "2026-08-17",
                            "type": "feature_release",
                            "title": "Premium inference explainer content and category education"
                        }
                    ],
                    "personas": [
                        {
                            "persona": "VP Infrastructure / AI Platform Leader",
                            "industry": "Enterprise Software / AI Infrastructure",
                            "rationale": "Inferred from repeated messaging about enterprise production inference, architecture, and deployment decisions. This is an estimate based on content themes, not real follower data.",
                            "seniority": "VP",
                            "confidence": 93
                        },
                        {
                            "persona": "Head of AI Engineering / ML Platform",
                            "industry": "Software / Technology",
                            "rationale": "The posts consistently speak to builders, APIs, coding agents, prompt caching, and inference optimization. This persona is inferred from content focus, not LinkedIn follower demographics.",
                            "seniority": "Director/VP",
                            "confidence": 89
                        },
                        {
                            "persona": "Data Center / Cloud Operations Executive",
                            "industry": "Data Centers / Cloud Services",
                            "rationale": "Air cooling, power consumption, existing datacenters, and deployment footprint are recurring angles suggesting operations-focused decision makers. This is an inferred targeting estimate.",
                            "seniority": "VP/CXO",
                            "confidence": 85
                        },
                        {
                            "persona": "CIO / CTO at Large Enterprise",
                            "industry": "Financial Services / Enterprise / Government",
                            "rationale": "Security, sovereignty, on-prem AI, and enterprise-scale infrastructure align with senior technology buyers in regulated orgs. This is inferred from post content and engagement patterns.",
                            "seniority": "C-level",
                            "confidence": 81
                        },
                        {
                            "persona": "AI Investor / Industry Analyst",
                            "industry": "Venture Capital / Research",
                            "rationale": "Frequent validation via benchmarks, funding milestones, valuation posts, and media coverage indicates strong appeal to analysts and investors. This is an inference from content resonance, not follower data.",
                            "seniority": "Partner / Analyst",
                            "confidence": 74
                        }
                    ],
                    "strategy": {
                        "ctas": [
                            {
                                "l": "Watch the full interview below ⬇️",
                                "v": "Used multiple times for CNBC/Forbes/Fortt Knox-style media clips."
                            },
                            {
                                "l": "Read the full blog below 👇",
                                "v": "Used for product and benchmark explainer posts."
                            },
                            {
                                "l": "See the numbers for yourself ⬇️",
                                "v": "Used when citing benchmark/validation posts."
                            },
                            {
                                "l": "Check out their conversation. ⬇️",
                                "v": "Used for third-party interview reposts."
                            },
                            {
                                "l": "Read more:",
                                "v": "Used to link to external coverage or blog posts."
                            },
                            {
                                "l": "Open positions in the link below ⬇️",
                                "v": "Used in recruiting post after the Series F milestone."
                            },
                            {
                                "l": "If you're attending, stop by and say hello!",
                                "v": "Used for event/booth attendance posts."
                            },
                            {
                                "l": "RSVP below ⬇️",
                                "v": "Used for event invitation posts."
                            }
                        ],
                        "hooks": [
                            {
                                "l": "Performance-first framing",
                                "v": "Repeatedly positions the company around faster inference, lower latency, throughput, and premium tokens rather than generic AI capability."
                            },
                            {
                                "l": "Architectural contrarianism",
                                "v": "Uses bold “not one chip / not one workload / not one-size-fits-all” angles to argue for heterogeneous, disaggregated inference."
                            },
                            {
                                "l": "Inference as the main battleground",
                                "v": "Shifts the AI conversation from training to inference, making inference the defining workload and economic center."
                            },
                            {
                                "l": "Sovereignty/security angle",
                                "v": "Connects performance with on-prem, sovereign, private, secure, and data-stays-local messaging."
                            },
                            {
                                "l": "Efficiency economics",
                                "v": "Frames efficiency as cost reduction, power reduction, and better infrastructure utilization for production workloads."
                            },
                            {
                                "l": "Proof by validation",
                                "v": "Leans on independent benchmarks, media coverage, and customer deployments to substantiate claims."
                            }
                        ],
                        "trust": [
                            {
                                "l": "Independent benchmarks",
                                "v": "SemiAnalysis and Artificial Analysis are repeatedly cited to validate performance claims."
                            },
                            {
                                "l": "Customer proof",
                                "v": "JPMorganChase, Ricoh, Argonne, TACC, General Compute, and SCX ai are used as proof points."
                            },
                            {
                                "l": "Media validation",
                                "v": "Forbes, CNBC, Bloomberg, TechCrunch, The Register, Fierce Network, and The Information appear frequently."
                            },
                            {
                                "l": "Public partnerships",
                                "v": "Visible collaborations with Intel, Vista Equity Partners, Cambium Capital, Together AI, Broadcom, BlackRock, and others."
                            },
                            {
                                "l": "Exec authority",
                                "v": "CEO Rodrigo Liang and senior leaders are positioned as the main voices explaining strategy and technical direction."
                            },
                            {
                                "l": "Live demos",
                                "v": "Posts emphasize live demonstrations at COMPUTEX, RAISE Summit, Hot Chips, and other events."
                            }
                        ],
                        "hookEx": [
                            "Training gets the headlines, but inference is where AI comes to life.",
                            "The datacenter power crisis isn't coming. It's already here.",
                            "One chip to rule them all? No thanks.",
                            "\"We talk a lot about premium inference. And we get asked about it a lot, too.\""
                        ],
                        "audience": [
                            {
                                "l": "Enterprise AI infrastructure buyers",
                                "v": "Security, on-prem, sovereignty, and production-readiness are recurring themes."
                            },
                            {
                                "l": "AI platform and ML engineering teams",
                                "v": "Posts explain APIs, prompt caching, coding agents, and integration details for builders."
                            },
                            {
                                "l": "Data center / cloud operators",
                                "v": "Messaging around power, cooling, deployment footprint, and infrastructure fit targets this group."
                            },
                            {
                                "l": "Partners and ecosystem operators",
                                "v": "Frequent partner/customer shoutouts indicate an audience of integrators, cloud providers, and strategic partners."
                            },
                            {
                                "l": "Technical investors and industry analysts",
                                "v": "Benchmarks, valuation/news coverage, and architecture arguments suggest strong investor/analyst orientation."
                            }
                        ],
                        "features": [
                            {
                                "l": "Disaggregated inference",
                                "v": "Core product message: split prefill, decode, and orchestration across different chips."
                            },
                            {
                                "l": "Premium inference",
                                "v": "A named category for fast, latency-sensitive serving for agents and large models."
                            },
                            {
                                "l": "SambaCloud",
                                "v": "Cloud offering with OpenAI-compatible APIs, prompt caching, and fast inference for open-weight models."
                            },
                            {
                                "l": "SambaStack",
                                "v": "On-prem offering combining system, platform, and foundation models for private deployments."
                            },
                            {
                                "l": "SambaManaged",
                                "v": "Modular AI cloud for data centers and cloud service providers."
                            },
                            {
                                "l": "SN50 RDU",
                                "v": "New-generation inference chip positioned for decode, interactivity, and agentic workloads."
                            },
                            {
                                "l": "SN40L RDU",
                                "v": "Earlier generation RDU highlighted as part of the platform lineage."
                            },
                            {
                                "l": "Air-cooled deployment",
                                "v": "Repeatedly emphasized as fitting existing datacenters without liquid-cooling overhauls."
                            }
                        ],
                        "toneDist": [
                            {
                                "l": "Technical and explanatory",
                                "v": 32
                            },
                            {
                                "l": "Confident and contrarian",
                                "v": 22
                            },
                            {
                                "l": "Proof-driven and benchmark-heavy",
                                "v": 18
                            },
                            {
                                "l": "Celebratory / milestone-oriented",
                                "v": 15
                            },
                            {
                                "l": "Partnership- and community-oriented",
                                "v": 13
                            }
                        ]
                    },
                    "campaigns": [
                        {
                            "cta": "Read the blog, watch the interview, or learn more about premium inference",
                            "name": "Premium Inference / Agentic AI category building",
                            "posts": 18,
                            "durationDays": 45
                        },
                        {
                            "cta": "See the demo, read the deep dive, or watch the clip",
                            "name": "Disaggregated inference / heterogeneous infrastructure",
                            "posts": 14,
                            "durationDays": 45
                        },
                        {
                            "cta": "Read the press coverage, watch the interviews, or celebrate the milestone",
                            "name": "Series F / customer proof / market validation",
                            "posts": 8,
                            "durationDays": 7
                        },
                        {
                            "cta": "Meet us there, watch the session, or RSVP",
                            "name": "Events: RAISE Summit / COMPUTEX / Hot Chips / AI4",
                            "posts": 10,
                            "durationDays": 40
                        }
                    ],
                    "messaging": {
                        "pains": [
                            "Inference is becoming the bottleneck as models and agentic workflows grow",
                            "GPU-only stacks are inefficient for mixed AI workloads",
                            "Power and cooling constraints limit deployment",
                            "Token costs rise as usage scales",
                            "Enterprises need privacy, sovereignty, and reliability",
                            "Customers need faster responses for coding and agentic applications"
                        ],
                        "value": [
                            "Fast inference at scale",
                            "Production-ready AI infrastructure",
                            "Lower power consumption",
                            "Lower cost per token",
                            "Higher throughput and latency performance",
                            "Deployable in existing data centers",
                            "Enterprise-grade security and sovereignty",
                            "OpenAI-compatible / easy developer adoption"
                        ],
                        "themes": [
                            {
                                "l": "Premium inference",
                                "v": 24
                            },
                            {
                                "l": "Disaggregated inference / heterogeneous infrastructure",
                                "v": 22
                            },
                            {
                                "l": "Agentic AI workloads",
                                "v": 17
                            },
                            {
                                "l": "Efficiency / lower power / lower TCO",
                                "v": 15
                            },
                            {
                                "l": "Sovereign / secure / on-prem AI",
                                "v": 12
                            },
                            {
                                "l": "Customer and partner proof points",
                                "v": 10
                            }
                        ],
                        "benefits": [
                            "Faster time-to-first-token and higher tokens per second",
                            "Improved economics for production AI",
                            "Better interactivity for agents and coding tools",
                            "Lower infrastructure burden versus traditional GPU-only approaches",
                            "Can reuse existing datacenter footprints",
                            "Supports secure, on-prem deployments and sovereign AI use cases"
                        ],
                        "keywords": [
                            [
                                "inference",
                                24
                            ],
                            [
                                "premium inference",
                                15
                            ],
                            [
                                "disaggregated inference",
                                14
                            ],
                            [
                                "agentic AI",
                                13
                            ],
                            [
                                "RDUs",
                                12
                            ],
                            [
                                "GPUs",
                                11
                            ],
                            [
                                "data movement",
                                9
                            ],
                            [
                                "sovereign AI",
                                8
                            ],
                            [
                                "latency",
                                8
                            ],
                            [
                                "tokens",
                                8
                            ],
                            [
                                "air cooled",
                                7
                            ],
                            [
                                "on-prem",
                                7
                            ]
                        ]
                    },
                    "scorecard": [
                        {
                            "score": 10,
                            "metric": "Posting Consistency"
                        },
                        {
                            "score": 7,
                            "metric": "Content Diversity"
                        },
                        {
                            "score": 8,
                            "metric": "Engagement Quality"
                        },
                        {
                            "score": 9,
                            "metric": "Thought Leadership"
                        },
                        {
                            "score": 10,
                            "metric": "Product Marketing"
                        },
                        {
                            "score": 7,
                            "metric": "Employer Branding"
                        },
                        {
                            "score": 6,
                            "metric": "CTA Effectiveness"
                        }
                    ],
                    "textStyle": null,
                    "ctaLibrary": [
                        "Watch the full interview below ⬇️",
                        "Read the full blog below 👇",
                        "See the numbers for yourself ⬇️",
                        "Check out their conversation. ⬇️",
                        "Read more:",
                        "Open positions in the link below ⬇️",
                        "If you're attending, stop by and say hello!",
                        "RSVP below ⬇️",
                        "Link to the full article in the comments ⬇️",
                        "Learn more: https://lnkd.in/evC2StBQ"
                    ],
                    "engagement": {
                        "best": [],
                        "stats": [],
                        "worst": [],
                        "topics": [
                            {
                                "l": "Premium inference / latency / token speed",
                                "v": 28
                            },
                            {
                                "l": "Disaggregated inference / heterogeneous infrastructure",
                                "v": 24
                            },
                            {
                                "l": "Customer proof / benchmarks / performance validation",
                                "v": 16
                            },
                            {
                                "l": "Events / conferences / on-stage demos",
                                "v": 12
                            },
                            {
                                "l": "Sovereign AI / on-prem / security / privacy",
                                "v": 10
                            },
                            {
                                "l": "Hiring / leadership announcements",
                                "v": 5
                            },
                            {
                                "l": "Partnerships / ecosystem / media coverage",
                                "v": 5
                            }
                        ],
                        "activity": []
                    },
                    "competitive": {
                        "recs": [
                            "Track their messaging around 'premium inference' because it is the clearest wedge and appears to be their current category-creation play.",
                            "Study how they use benchmark validation and partner/customer proof to reduce perceived hardware risk.",
                            "Note their sovereign/on-prem angle; this is likely strongest in regulated and regional markets where data residency matters.",
                            "Observe how they turn event coverage and executive interviews into repeatable thought-leadership assets.",
                            "Their strongest differentiation is architectural simplicity in message, so competitors should counter with concrete workload outcomes and integration simplicity."
                        ],
                        "text": "SambaNova positions itself as an AI infrastructure company built for the inference era, not broad AI model training. Its organic LinkedIn narrative centers on premium inference, disaggregated/heterogeneous infrastructure, sovereign AI, and deployment into existing air-cooled datacenters. The company consistently frames RDUs as purpose-built for decode, with GPUs handling prefill and CPUs orchestration, and uses benchmarks, customer wins, and media appearances to validate performance claims.",
                        "usps": [
                            "Premium inference focus for agentic and latency-sensitive workloads",
                            "Disaggregated architecture: GPUs for prefill, RDUs for decode, CPUs for orchestration",
                            "Air-cooled, lower-power deployment that fits existing datacenters",
                            "Sovereign/on-prem and enterprise security/privacy positioning",
                            "Strong benchmark-driven proof points and third-party validation",
                            "Open-model compatibility and OpenAI-compatible APIs for easier adoption"
                        ],
                        "rivals": [
                            "NVIDIA",
                            "Groq",
                            "Cerebras",
                            "General Compute",
                            "Intel (as ecosystem/partner competitor in infrastructure narratives)"
                        ]
                    },
                    "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                    "hookLibrary": [
                        {
                            "type": "Question",
                            "example": "What is it?"
                        },
                        {
                            "type": "Question",
                            "example": "Why does agentic AI need it?"
                        },
                        {
                            "type": "Question",
                            "example": "What makes it hard?"
                        },
                        {
                            "type": "Bold Statement",
                            "example": "Training gets the headlines, but inference is where AI comes to life."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "The datacenter power crisis isn't coming. It's already here."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "One chip to rule them all? No thanks."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "Inference is now the defining workload in AI, and that changes the economics of the whole stack."
                        },
                        {
                            "type": "Problem",
                            "example": "The AI industry has been treating inference like it's one workload. It's not."
                        },
                        {
                            "type": "Story",
                            "example": "Our team's had quite the week in Paris and we're still not done 😎"
                        },
                        {
                            "type": "News",
                            "example": "LIVE from Paris 📍 SambaNova has completed our first close of $1B Series F financing round, valuing the company at $11B 🎉"
                        }
                    ],
                    "profile_url": "https://www.linkedin.com/company/sambanova/",
                    "imageryTypes": null,
                    "observations": null,
                    "topicClusters": [
                        {
                            "theme": "Premium inference and token-speed economics",
                            "postCount": 28
                        },
                        {
                            "theme": "Disaggregated inference architecture",
                            "postCount": 24
                        },
                        {
                            "theme": "Benchmarking and third-party validation",
                            "postCount": 14
                        },
                        {
                            "theme": "Customer stories and deployment proof",
                            "postCount": 12
                        },
                        {
                            "theme": "Events, talks, and conference activations",
                            "postCount": 10
                        },
                        {
                            "theme": "Sovereign AI, on-prem, and security",
                            "postCount": 7
                        },
                        {
                            "theme": "Hiring, leadership, and company milestones",
                            "postCount": 5
                        }
                    ],
                    "audienceDetail": {
                        "note": "Inferred from content & engagement, not LinkedIn follower demographics",
                        "seniority": [
                            {
                                "l": "C-level",
                                "v": 20
                            },
                            {
                                "l": "VP",
                                "v": 30
                            },
                            {
                                "l": "Director",
                                "v": 20
                            },
                            {
                                "l": "Manager/Lead",
                                "v": 15
                            },
                            {
                                "l": "Analyst/IC",
                                "v": 15
                            }
                        ],
                        "experience": [
                            {
                                "l": "10+ years",
                                "v": 45
                            },
                            {
                                "l": "6-10 years",
                                "v": 30
                            },
                            {
                                "l": "3-5 years",
                                "v": 15
                            },
                            {
                                "l": "0-2 years",
                                "v": 10
                            }
                        ],
                        "industries": [
                            {
                                "l": "Enterprise Software / IT",
                                "v": 28
                            },
                            {
                                "l": "AI Infrastructure / Semiconductors",
                                "v": 24
                            },
                            {
                                "l": "Cloud / Data Centers",
                                "v": 16
                            },
                            {
                                "l": "Financial Services / Regulated Enterprise",
                                "v": 12
                            },
                            {
                                "l": "Government / Research / Academia",
                                "v": 10
                            },
                            {
                                "l": "Venture Capital / Media / Analysts",
                                "v": 10
                            }
                        ]
                    },
                    "employee_count": 400,
                    "followers_count": 98127,
                    "recommendations": [
                        {
                            "observation": "The page repeatedly emphasizes premium inference and disaggregated architecture, but often in similar language.",
                            "recommendation": "Create sharper sub-themes by audience segment: developers, enterprise IT, sovereign/public sector, and neocloud operators, each with different proof points and CTAs."
                        },
                        {
                            "observation": "Most high-performing posts lean on third-party validation, customer logos, and event presence.",
                            "recommendation": "Continue using external validation, but pair it with more concrete customer implementation stories and operational metrics to deepen credibility."
                        },
                        {
                            "observation": "The content is strong on technical differentiation, but many posts end with soft or no conversion asks.",
                            "recommendation": "Add clearer next-step CTAs tied to each funnel stage, such as demo requests, technical briefs, benchmark downloads, or event registration."
                        },
                        {
                            "observation": "Employer branding is present through hiring and leadership announcements, but it is secondary to product marketing.",
                            "recommendation": "Show more of the engineering team, build culture content around shipping complex systems, and spotlight internal expertise beyond executive hires."
                        },
                        {
                            "observation": "The feed is highly event- and media-driven, which helps awareness but can make the brand feel campaign-heavy.",
                            "recommendation": "Balance launches and press with repeatable educational series, product tutorials, and customer workflow examples to sustain attention between big moments."
                        },
                        {
                            "observation": "The company’s strongest story is not generic AI acceleration; it is workload-specific optimization for inference.",
                            "recommendation": "Lead every major content pillar with the workload problem first, then map SambaNova’s architecture to that pain point to keep the message differentiated from GPU-centric competitors."
                        }
                    ],
                    "scorecardOverall": 8.1,
                    "public_identifier": "sambanova",
                    "messagingEvolution": [
                        {
                            "theme": "Inference-first infrastructure and disaggregated compute as the new AI architecture",
                            "period": "June 2026"
                        },
                        {
                            "theme": "Premium inference category creation, agentic AI, and GPU/RDU/CPU workload specialization",
                            "period": "Late June 2026"
                        },
                        {
                            "theme": "Market validation through financing, customer proof, and enterprise readiness",
                            "period": "Early July 2026"
                        },
                        {
                            "theme": "Sovereign AI, datacenter fit, benchmark validation, and educational explainers around premium inference",
                            "period": "Mid-July to August 2026"
                        }
                    ]
                },
                "created_at": "2026-08-18T08:49:37.529Z",
                "type": "OWN_BRANDING",
                "competitor_input": {
                    "companyId": "18464083",
                    "companyName": "Sambanova"
                },
                "competitor_output": {
                    "id": "18464083",
                    "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                    "name": "SambaNova",
                    "items": [
                        {
                            "id": "7495155059354181633",
                            "date": "16h",
                            "text": "We talk a lot about premium inference. And we get asked about it a lot, too.\n\n1. What is it?\nFast, responsive serving for large, intelligent models, a distinct tier for workloads where speed really matters.\n\n2. Why does agentic AI need it?\nA chatbot answers once. An agent plans, calls tools, reads results, and keeps going. When every step generates more tokens, slow inference slows down the entire workflow.\n\n3. What makes it hard?\nSpeed, throughput, reliability, and cost all have to work together. Bigger models bring more memory movement and serving complexity, while higher concurrency can improve overall throughput but hurt the experience for individual users.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_premium-inference-explained-activity-7495155059354181633-i5jR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495155058511110144",
                            "attachments": [
                                {
                                    "id": "D5610AQHSCAtFDrfRoA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHSCAtFDrfRoA/mp4-720p-30fp-crf28/B56aAQjyyTH4Bk-/0/1786984217783?e=1787648400&v=beta&t=0ZG11bY7eF_35vjZQW_fU2I7nxE4EmH1_ZJDo0Fhfew",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-17T16:30:19.397Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493782883715768320",
                            "date": "4d",
                            "text": "We're going to be at Hot Chips Symposium 2026 🔥\n\nRaghu Prabhakar will be presenting \"Dataflow at Scale: the SN50 RDU\" in the AI 2 session, a look at how dataflow architecture holds up when you push it to production inference scale.\n\nIf you're going to be at Stanford University next week, come find us.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/hotchips/",
                                    "start": 21,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAJnrIABgWqNu--cIIicrkWcIHVHYd8bIRU",
                                    "start": 49,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/stanford-university/",
                                    "start": 258,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_were-going-to-be-at-hot-chips-symposium-activity-7493782883715768320-F2Y-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493782882788790273",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-13T21:37:47.231Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493443489666408448",
                            "date": "5d",
                            "text": "What happens when bigger, smarter models also get faster? 🤔\n\nYou get a new category of AI experience: premium inference. \n\nAs models scale, speed becomes just as important as intelligence. For agents and other latency-sensitive workloads, every token matters.\n\nThe next step isn't just serving more tokens. It's serving better tokens, faster.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-premium-inference-moment-is-here-activity-7493443489666408448-fjR8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493443488844369920",
                            "attachments": [
                                {
                                    "id": "D4E10AQGgZ3vh7K1DHA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGgZ3vh7K1DHA/mp4-720p-30fp-crf28/B4EZ_4PIaNJQBk-/0/1786576147840?e=1787648400&v=beta&t=YxTKiPG_pq5epzn9CoQaHIi9J4U5cy3RknUJw8nfLWs",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-12T23:09:09.384Z",
                            "reaction_counter": 37,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493376720620736512",
                            "date": "5d",
                            "text": "Congratulations to our friends at INFERCOM on winning Gold in the International Business Awards for AI-Driven Startup of the Year! \n\nTheir vision for sovereign AI is one we’re proud to support: delivering fast, production-ready inference while keeping data and models securely in Europe.\n\nWell deserved 👏",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/infercomai/",
                                    "start": 34,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7493376720620736512",
                            "share_url": "https://www.linkedin.com/posts/sambanova_infercom-has-won-a-gold-stevie-for-ai-driven-activity-7493376720620736512-0nxK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7493376720620736512",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7493240856661962753",
                                "date": "5d",
                                "text": "Infercom has won a Gold Stevie for AI-Driven Startup of the Year in the 23rd International Business Awards.\n\nThe entry was titled \"European Sovereign Ultra Speed Inference Service\". That is a long name for two things the market keeps telling European companies they cannot have at the same time: keep your data in Europe, and run fast.\n\nThat combination is our commitment. Your AI runs with us without your data leaving Europe. We serve open-weight models only, so no model can be retired out from under you. We keep nothing: nothing stored, nothing trained on. Our API is OpenAI-compatible, so leaving us costs you a base URL and an API key.\n\nThen the speed, which is the part nobody expects from a sovereign provider. Time to first token of a few hundred ms, then 400 to 750 tokens per second depending on the model. That is not a brochure number. Try it yourself.\n\nThank you to the customers and partners who put production traffic on our platform and gave us their valuable feedback what we can improve further. They earned this one.",
                                "author": {
                                    "id": null,
                                    "name": "INFERCOM",
                                    "is_company": true,
                                    "public_identifier": "infercomai"
                                },
                                "parsed_datetime": "2026-08-12T09:43:57.911Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-12T18:43:50.403Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-12T18:43:50.403Z"
                        },
                        {
                            "id": "7493068208728403968",
                            "date": "6d",
                            "text": "Really enjoyed SemiAnalysis's deep dive on TileRT and ultra-high interactivity inference. Great explainer of why speed in AI responses comes down to how fast you can move data in and out of memory, not just how much compute you have, and how much work it takes to make a GPU act more like purpose-built dataflow hardware.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 15,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7493078823815553024",
                            "share_url": "https://www.linkedin.com/posts/sambanova_alert-tilert-from-tilertai-to-boost-activity-7493078823815553024-ahIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7493068208728403968",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7493005299784794112",
                                "date": "6d",
                                "text": "ALERT🚨: TILERT from TileRT_AI  TO BOOST DECODE INTERACTIVITY BY 1.9X AT THE SAME PER-TOKEN COST ON THE SAME NVIDIA BLACKWELL GPUs. What does this mean for Groq/Cerebras/SambaNova? 👇️ \n\nAn 8-GPU HGX B200 server provides a theoretical HBM memory bandwidth of 64 TB/s. At batch size 1, GLM-5 at NVFP4 requires only ~21 GB of active parameters per generated token. The B200 bandwidth roofline would therefore suggest up to 3,047 tokens/s/user without speculative decoding. In practice, GPUs come nowhere close to this limit.\n\nThe gap comes from latency rather than bandwidth. The traditional GPU programming model launches and synchronizes many individual kernels, whose setup and teardown overhead becomes significant at ultra-high levels of interactivity. While these latency costs are less visible at conventional serving speeds, even with CUDA graphs, they dominate as token latency approaches the sub-millisecond Time Per Output Token (TPOT) range. Furthermore, although GPU memory bandwidth increases by roughly 2–3× each generation, memory latency has not improved at all.\n\nThis is where TileRT comes in. Instead of continuously launching kernels or replaying a DAG of kernels, TileRT has the GPU continuously execute a persistent pipeline, statically compiling the entire model ahead of time into a persistent Engine Kernel: the host launches once, execution stays resident on the GPU for the entire decode lifecycle, and most runtime orchestration moves into compile time.\n\nFor full explainer, check out our article:\nhttps://lnkd.in/ewQZq3sn",
                                "author": {
                                    "id": null,
                                    "name": "SemiAnalysis",
                                    "is_company": true,
                                    "public_identifier": "semianalysis"
                                },
                                "parsed_datetime": "2026-08-11T18:07:56.775Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-08-11T22:17:55.436Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-11T23:00:06.270Z"
                        },
                        {
                            "id": "7493055041961066496",
                            "date": "6d",
                            "text": "For years, the conversation around AI infrastructure was largely about how cheaply you could run a model.\n\nAgentic AI is changing that.\n\nWhen an agent plans, calls tools, reads context, and generates thousands—or even millions—of tokens across a workflow, latency compounds. Fast inference isn't just a better experience. It can determine whether the product works the way users expect.\n\nThat's creating a new category: premium inference.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_for-years-the-conversation-around-ai-infrastructure-activity-7493055041961066496-kxEF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7493055041961066496",
                            "attachments": [
                                {
                                    "id": "D5610AQHkVIiHvQG74w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkVIiHvQG74w/image-shrink_480/B56Z_yt1hmG4AQ-/0/1786483530282?e=1787648400&v=beta&t=kdD-MjyooGOxakRSNCcbUMuS4Pqo713vasrF_-G1MNU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-08-11T21:25:36.234Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7492994571178504194",
                            "date": "6d",
                            "text": "Training gets the headlines, but inference is where AI comes to life. Every token, every query, every agent interaction.\n\nWe're focused on making that inference faster and more efficient by tackling one of the biggest challenges at scale: data movement. ⚡",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_training-inference-activity-7492994571178504194-XVSA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7492994570448883713",
                            "attachments": [
                                {
                                    "id": "D5610AQHnbyZRMDPN3g",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHnbyZRMDPN3g/mp4-720p-30fp-crf28/B56Z_x2zWxHUBk-/0/1786469108530?e=1787648400&v=beta&t=BeQpId65lrCTgckM0jmHJbcVf_Oh60ertmx0DFDJjZI",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-11T17:25:18.876Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7492630435458351104",
                            "date": "1w",
                            "text": "Great to spend some time with our friends at NYSE today!  Thank you for the hospitality, Brian J. Baumann!",
                            "author": {
                                "id": "ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                "name": "Rodrigo Liang",
                                "headline": "Co-Founder & CEO at SambaNova Systems",
                                "is_company": false,
                                "public_identifier": "rodrigo-liang"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/nyse/",
                                    "start": 45,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACDH74Bz1V8FX9vdpWgMkBN0ZcDOr54uOw",
                                    "start": 89,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7492679116274642946",
                            "share_url": "https://www.linkedin.com/posts/rodrigo-liang_great-to-spend-some-time-with-our-friends-ugcPost-7492630435458351104-l8qr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7492630435458351104",
                            "attachments": [
                                {
                                    "id": "D5622AQFGSDe3Ag6gpg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFGSDe3Ag6gpg/feedshare-shrink_800/B56Z_sroKKKMAc-/0/1786382291948?e=1788393600&v=beta&t=1GMUdNHphojpkWv5MqoPjntwZNl7OCJjQfqBQ3ZBPuI",
                                    "size": {
                                        "width": 800,
                                        "height": 1037
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGu6e4-7mrvOQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGu6e4-7mrvOQ/feedshare-shrink_480/B56Z_sroSIKAAg-/0/1786382300797?e=1788393600&v=beta&t=Eu8hIYnajw-eM6grJX17mx96WGc8sbmohACP5frZPa4",
                                    "size": {
                                        "width": 480,
                                        "height": 716
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "reposted_by": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova"
                            },
                            "repost_counter": 6,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-08-10T17:18:22.155Z",
                            "reaction_counter": 183,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-10T20:31:48.566Z"
                        },
                        {
                            "id": "7491569873391792128",
                            "date": "1w",
                            "text": "Ai4 - Artificial Intelligence Conferences, you were a blast. 🦾 Thanks to everyone who stopped by our booth, shared ideas, and talked inference with us. We loved the conversations and can't wait to do it again.\n\nOn to the next! 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/ai4/",
                                    "start": 0,
                                    "length": 41
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai4-artificial-intelligence-conferences-activity-7491569873391792128-4MMN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7491569872578064384",
                            "attachments": [
                                {
                                    "id": "D4E10AQHh3CssXN79cA",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHh3CssXN79cA/image-shrink_480/B4EZ_dnGYcIsAQ-/0/1786129442685?e=1787648400&v=beta&t=zWrmjiK6Ewp6bADxXiBLDXtl03sOZ9JKUs7lI8IvV2I",
                                    "size": {
                                        "width": 480,
                                        "height": 320
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D4E10AQHeVL15OT_CZw",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHeVL15OT_CZw/image-shrink_480/B4EZ_dnGiyIgAU-/0/1786129444051?e=1787648400&v=beta&t=TAq-eqeFHN5TaVhtWkTjAZBI7jQzQfd2CRbdh9-gba8",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D4E10AQEBM2VvusHXVw",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQEBM2VvusHXVw/image-shrink_480/B4EZ_dnGyjJYAQ-/0/1786129445289?e=1787648400&v=beta&t=zdtJAzm8_Sz5JNX5k3n8WwxHOJSqf_CMlhy5VgWNHhU",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-07T19:04:04.454Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7491233687796232192",
                            "date": "1w",
                            "text": "Thank you to Washington Post Live for hosting our CEO, Rodrigo Liang, to discuss the growing demand for AI, the importance of inference, and what it will take to power the next generation of enterprise AI.\n\nCheck out their conversation. ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/washington-post-live/",
                                    "start": 13,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 55,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7491233688639328256",
                            "share_url": "https://www.linkedin.com/posts/sambanova_buildingamerica-activity-7491233688639328256-1oF5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7491233687796232192",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7486475558462152704",
                                "date": "3w",
                                "text": "Can AI infrastructure keep up with the demand from users? \n\n\"The capabilities of this technology far outpace what we even thought. The amount of infrastructure support to actually meet the needs of that demand is still catching up to it,\" AI chip startup SambaNova CEO told Adam O’Neal in a conversation for the #BuildingAmerica vodcast. \n\nThe series explores how America builds, innovates and manufactures heading into the future. \n\nThe first three episodes of the Building America vodcast are presented by Micron Technology.",
                                "author": {
                                    "id": null,
                                    "name": "Washington Post Live",
                                    "is_company": true,
                                    "public_identifier": "washington-post-live"
                                },
                                "parsed_datetime": "2026-07-24T17:41:05.127Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-06T20:48:11.562Z",
                            "reaction_counter": 37,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-06T20:48:11.763Z"
                        },
                        {
                            "id": "7490907525257580544",
                            "date": "1w",
                            "text": "Backed by not one, but TWO independent benchmarks. 😏\n\nSemiAnalysis recently benchmarked MiniMax M2.7 running on SN50 using vLLM, measuring ~800 tokens/second at the fastest interactivity.\n\nWhat's even more exciting? The results align with what we demonstrated live at the RAISE Summit, where Artificial Analysis measured 800+ tokens/second on SN50.\n\nTwo independent validations. One consistent result. See for yourself! ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 54,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 88,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 272,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 292,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_how-fast-is-minimax-m27-on-sn50-activity-7490907525257580544-8_CU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490907524355985409",
                            "attachments": [
                                {
                                    "id": "D5610AQEm2hdV3SUwvA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEm2hdV3SUwvA/mp4-720p-30fp-crf28/B56Z_UMr0CK8Bk-/0/1785971525242?e=1787648400&v=beta&t=wgMc-FX6xCkVgY9ymUVNEVtKpV6IA1us5-oTLqiqjOs",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-05T23:12:08.353Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490794117401284608",
                            "date": "1w",
                            "text": "NYSE Wired shoutouts always hit different 😎",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/thecube-wired/",
                                    "start": 0,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7490794117975781377",
                            "share_url": "https://www.linkedin.com/posts/sambanova_nysewired-thecube-sambanova-activity-7490794117975781377-ezrS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490794117401284608",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7490792973744529409",
                                "date": "1w",
                                "text": "Congratulations to Mohsen Moazami on his appointment as vice chair of global strategy and partnerships at SambaNova.\n\nWishing you every success as you begin this exciting new chapter. 🚀 \n\nJohn Furrier | Gemma Allen | Brian J. Baumann \n \n#NYSEWired #theCUBE #SambaNova",
                                "author": {
                                    "id": null,
                                    "name": "NYSE Wired",
                                    "is_company": true,
                                    "public_identifier": "thecube-wired"
                                },
                                "parsed_datetime": "2026-08-05T15:36:57.144Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-05T15:41:29.813Z",
                            "reaction_counter": 31,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-05T15:41:29.950Z"
                        },
                        {
                            "id": "7490439916649115648",
                            "date": "1w",
                            "text": "Mohsen Moazami is truly a force in the industry and this interview just highlights it even more. \n\nWe're incredibly honored to have him on the SambaNova team! Welcome aboard, Mohsen 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "start": 0,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7490439917425065984",
                            "share_url": "https://www.linkedin.com/posts/sambanova_mohsen-moazami-from-tehran-to-the-centre-activity-7490439917425065984-fFGK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490439916649115648",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7490018000138579969",
                                "date": "2w",
                                "text": "Thank you Sam Wellalage BSC MA for this opportunity to talk about life, AI and tech in general. DDN",
                                "author": {
                                    "id": "ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "name": "Mohsen Moazami",
                                    "is_company": false,
                                    "public_identifier": "mohsenmoazami"
                                },
                                "parsed_datetime": "2026-08-03T12:17:29.038Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-04T16:14:01.773Z",
                            "reaction_counter": 7,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-04T16:14:01.958Z"
                        },
                        {
                            "id": "7490380623509991424",
                            "date": "1w",
                            "text": "Our squad just keeps getting stronger. 🦾  Mohsen Moazami is joining SambaNova as Vice Chair of Global Strategy & Partnerships, reporting to Rodrigo Liang. \n\nMohsen has supported some of the world's hottest technology companies, enabling global expansion, forging strategic relationships, and navigating major industry shifts.\n\nAs demand for premium inference continues to grow, he’s the ideal person to help lead our next chapter.\n\nWelcome to SambaNova, Mohsen!",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAPCgMB__4exEdcwUUaHAfP0bWYGxVFM0o",
                                    "start": 42,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 140,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-squad-just-keeps-getting-stronger-activity-7490380623509991424-TBwA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490380622402822144",
                            "attachments": [
                                {
                                    "id": "D5610AQFttX39grkzSw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFttX39grkzSw/mp4-720p-30fp-crf28/B56Z_MteCDHUBk-/0/1785845902152?e=1787648400&v=beta&t=Jf6R3OsCg5Mh5OaRcs2jv6Geyyy2598tJuvStQgcLhg",
                                    "size": {
                                        "width": 1200,
                                        "height": 626
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 9,
                            "comment_counter": 14,
                            "parsed_datetime": "2026-08-04T12:18:25.187Z",
                            "reaction_counter": 149,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490108309706911744",
                            "date": "2w",
                            "text": "Companies are vying to harness AI's full potential, but with big funding comes big questions about value. With billions being raised, we'll see who rises to the top. \n\n\"We'll see some superb winners — and a lot of losers.\" — Dharmesh Thakker. \n\n🎥 Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 225,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 247,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-startups-will-have-superb-winners-and-activity-7490108309706911744-EpUq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490108308620529665",
                            "attachments": [
                                {
                                    "id": "D5610AQFUYvRf6NJ7WA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFUYvRf6NJ7WA/mp4-720p-30fp-crf28/B56Z_I1wx2G0Bo-/0/1785780970458?e=1787648400&v=beta&t=gaHvmE3wI5_kikunBoeaFN-c359RR65YyK0FsPFcpz4",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-08-03T18:16:20.517Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7489037475500367872",
                            "date": "2w",
                            "text": "Being verified by SemiAnalysis is such an important milestone for us. Not only is it our first demonstration of SN50 RDU system performance, but also a real working demonstration of heterogeneous inference with GPUs. \n\nSee how the SN50 compares to SN40 ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 18,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sn40-vs-sn50-activity-7489037475500367872-OquF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7489037474741014528",
                            "attachments": [
                                {
                                    "id": "D5610AQEQE5FMsJo_nw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEQE5FMsJo_nw/mp4-720p-30fp-crf28/B56Z.5n4lwGUBk-/0/1785525672363?e=1787648400&v=beta&t=gu-FI1qzZO3yjP_5SQi7PEytcvGkGZmnoNeKMIqM-e0",
                                    "size": {
                                        "width": 1266,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 11,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-31T19:21:13.747Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488705517587034112",
                            "date": "2w",
                            "text": "The best performance claims are the ones validated by someone else. ⚡️\n\nDylan Patel and the SemiAnalysis team just benchmarked the SN50 RDU running MiniMax M2.7, independently validating the decode performance we've been demonstrating.\n\nThe results speak for themselves. SN50 is over 3x faster than GPUs.\n\nFor developers building coding assistants and agentic applications, faster decode means faster responses, better interactivity, and a noticeably better user experience. We’ve got the first and fastest premium inference chip.\n\nAs inference becomes the defining AI workload, independent benchmarks matter. See the numbers for yourself ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB8d8VsBwtg6yQBH5VUPQlfMARk9Z8ca3s0",
                                    "start": 72,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/semianalysis/",
                                    "start": 92,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 148,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-best-performance-claims-are-the-ones-activity-7488705517587034112-uPPQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7488705517587034112",
                            "attachments": [
                                {
                                    "id": "D5610AQGERz0SiIF_ew",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGERz0SiIF_ew/image-shrink_480/B56Z.0591RKEAQ-/0/1785446522796?e=1787648400&v=beta&t=90TMFWpH3bqGzlfh76wxATI7z20j9aqm4BLJ0LSqILc",
                                    "size": {
                                        "width": 480,
                                        "height": 293
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 29,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-07-30T21:22:08.813Z",
                            "reaction_counter": 157,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488635355429183488",
                            "date": "2w",
                            "text": "July was an absolute ride, from the RAISE Summit in Paris to joining The U.S. Department of Energy (DOE)'s Genesis Mission Consortium. \n\nSwipe through to catch up with our month— and where you can find us next 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 36,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 73,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_july-2026-sambanova-lightning-digest-activity-7488635355429183488-UMao?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7488635354439319552",
                            "attachments": [
                                {
                                    "id": "D561FAQGk-PZ36GQqUw",
                                    "url": "https://media.licdn.com/dms/document/media/v2/D561FAQGk-PZ36GQqUw/feedshare-document-sanitized-pdf/B56Z.z5JEPJoA8-/0/1785429530337?e=1787648400&v=beta&t=oEcbCWXuHHIoV22hP1KqeQCAwvTMgsM16_RYC0rg1uY",
                                    "type": "file",
                                    "mimetype": "application/pdf",
                                    "file_name": "July 2026 SambaNova Lightning Digest",
                                    "file_size": 0,
                                    "unavailable": false,
                                    "url_expires_at": 1787648400000
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-30T16:43:20.851Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488354847314890752",
                            "date": "2w",
                            "text": "SambaNova wouldn't exist without open source.\n\nOpen models have helped create an entire ecosystem of builders—from model developers to AI infrastructure companies like us.\n\nAs inference becomes the next frontier, we'll need innovation everywhere: models, silicon, systems, and software.\n\nIt's not open OR closed. It's open AND closed. Both push the industry forward.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7488354847314890752",
                            "share_url": "https://www.linkedin.com/posts/sambanova_industry-leaders-unite-in-open-secure-ai-activity-7488354847314890752-9Vip?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7488354847314890752",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7488037067751612416",
                                "date": "2w",
                                "text": "This letter is important, and SambaNova has signed it. \n\nSambaNova would not exist without open source models. In fact, every company building an AI chip today exists because of open weights.\n\nA chip is a multi-year bet on what will run on it. If the best models were locked inside a few frontier labs, chip startups would be designing blind - generic hardware, generic compiler, hand it over and hope. Nobody funds that company. The incumbent's software moat just gets deeper.\n\nOpen models flipped it. We can see exactly what the best models look like - architectures, weights, everything - and tune our systems down to the silicon before a customer runs a single token. That's the only reason a startup can take on the hardest problem in computing and win on real workloads.\n\nThis matters far beyond chip companies. Compute is the constraint on AI right now - especially inference, where the next decade of spend is going. No one company can supply it all. No one architecture solves everything. You break a constraint like that with more builders attacking it from more angles. Open source is what lets those builders exist.\n\nHere's the irony, and I mean it warmly: the openness Jensen is defending is the same openness that paved the way for companies like SambaNova. It takes confidence to argue for the conditions that expand the ecosystem - but he's right to. Nothing this important should depend on one company, one chip, or one model. And no, this isn't a knock on closed models. We work with frontier labs too. Both should win.\n\nSo: fierce agreement with the letter. Open models are why there's a race and everyone runs faster for it.",
                                "author": {
                                    "id": "ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "name": "Rodrigo Liang",
                                    "is_company": false,
                                    "public_identifier": "rodrigo-liang"
                                },
                                "parsed_datetime": "2026-07-29T01:05:57.953Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-29T22:08:42.505Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-29T22:08:42.505Z"
                        },
                        {
                            "id": "7488311674584715264",
                            "date": "2w",
                            "text": "Incredible conversation between Noah Bovenizer & Abhi I.! \n\nA few standout takeaways:\n\n- Shipping one AI chip is hard. Shipping five in seven years is what builds trust.\n- We don't try to solve every AI workload. We focus on what we do best: running large models fast.\n- Premium inference is where performance and efficiency matter most.\n- The best infrastructure is the one that helps customers succeed—whether that's all SambaNova or a heterogeneous, disaggregated stack.\n\nWorth a watch ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAC5EaCkB3TnonEQz6wAdlHZEOJwP13aY0dg",
                                    "start": 32,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 49,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7488311675440242688",
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-chips-startups-activity-7488311675440242688-V0jh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7488311674584715264",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7488228342349934592",
                                "date": "2w",
                                "text": "\"We are very confident about the niche that we occupy. That area of premium inferencing is growing, and we think there's going to be a place for all of these chips to be able to work together,\" says SambaNova CPSO Abhi I. about the startup's place in the booming chip industry.\n\nThe company has certainly staked its claim among #AI chip makers, achieving an $11bn valuation with its Series F earlier this month after finding success with selling #chips based on its RDU architecture for inference.\n\nIngle spoke to The Stack about this technology, why \"premium inferencing\" is the company's focus, and working with existing infrastructure.\n\n\nRead the full interview 👉 https://lnkd.in/eYNNa9Mb\n\n#Startups #AIChips #SambaNova",
                                "author": {
                                    "id": null,
                                    "name": "The Stack",
                                    "is_company": true,
                                    "public_identifier": "stackpublishing"
                                },
                                "parsed_datetime": "2026-07-29T13:46:01.371Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-29T19:17:09.324Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-29T19:17:09.528Z"
                        },
                        {
                            "id": "7487991830337220608",
                            "date": "2w",
                            "text": "🔥 Hot take: An AI data center isn't defined by how many GPUs it has.\n\nIt's defined by how efficiently it runs AI.\n\nHere's what makes an AI data center different—and why inference is changing the architecture.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-an-ai-data-center-isnt-defined-activity-7487991830337220608-vqWb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487991830337220608",
                            "attachments": [
                                {
                                    "id": "D5610AQFCAZNvuyFGnA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFCAZNvuyFGnA/image-shrink_480/B56Z.qw249KAAU-/0/1785276363208?e=1787648400&v=beta&t=rASlgcH3eaeCH_aO-yBUAutTGVlJZWIoWZtamwQzs1o",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-28T22:06:12.513Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7487922936289398785",
                            "date": "2w",
                            "text": "One of the standout conversations from RAISE Summit 🦾 \n\nRodrigo Liang, Monti Saroya, and Dylan Patel dug into one of the biggest shifts happening in AI today: the move from training to inference.\n\nAs models become more capable and agentic workloads become the norm, the conversation is no longer just about building bigger models, but about delivering them efficiently, economically, and at scale.\n\nDefinitely worth a watch ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 39,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 56,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAGrqoQcBbeEESWwkeMHkjzyiHGP0LZXCwSc",
                                    "start": 71,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB8d8VsBwtg6yQBH5VUPQlfMARk9Z8ca3s0",
                                    "start": 89,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7487922936289398785",
                            "share_url": "https://www.linkedin.com/posts/sambanova_earlier-this-month-monti-saroya-joined-rodrigo-activity-7487922936289398785-dtn0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487922936289398785",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7487891736472776704",
                                "date": "2w",
                                "text": "Earlier this month, Monti Saroya joined Rodrigo Liang, Co-Founder and CEO of SambaNova Systems, and Dylan Patel, Founder and CEO of SemiAnalysis, on stage at RAISE Summit in Paris. The conversation centered on the overwhelming demand for inference compute, \"tokenomics,\" and the increasingly important interplay between the hardware and software layers powering agentic solutions — themes that echoed across the summit. \n\nWatch the full session here: https://bit.ly/4fvSlFz",
                                "author": {
                                    "id": null,
                                    "name": "Vista Equity Partners",
                                    "is_company": true,
                                    "public_identifier": "vista-equity-partners"
                                },
                                "parsed_datetime": "2026-07-28T15:28:28.276Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-28T17:32:26.892Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-28T17:32:26.892Z"
                        },
                        {
                            "id": "7487900035112894465",
                            "date": "2w",
                            "text": "We tend to Linkup with the best partners. 😏\n\nFast inference is only part of the equation. Enterprise AI also needs trustworthy, up-to-date information.\n\nThat's why we're excited to partner with Linkup to help devs build AI applications that combine high-performance inference with fresh, verifiable web retrieval.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/linkup-platform/",
                                    "start": 194,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7487900035112894465",
                            "share_url": "https://www.linkedin.com/posts/sambanova_high-reliability-inference-needs-high-performance-activity-7487900035112894465-a0xJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7487900035112894465",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7487810173240086529",
                                "date": "2w",
                                "text": "High-reliability inference needs high-performance retrieval.\n\nSambaNova is building one of the leading inference platforms for enterprises, helping organizations deploy frontier open models with the performance, security, and operational reliability required for production AI.\n\nWe’re excited to make Linkup seamlessly available on the SambaNova platform, enabling developers to enrich those models with fresh, verifiable information from the web.\n\nBeyond the technical integration, we share the same commitment to enterprise-grade AI: security, privacy, reliability, and production-ready deployments. \n\nRead more about the integration in comments.",
                                "author": {
                                    "id": null,
                                    "name": "Linkup",
                                    "is_company": true,
                                    "public_identifier": "linkup-platform"
                                },
                                "parsed_datetime": "2026-07-28T10:04:22.086Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-28T16:01:26.826Z",
                            "reaction_counter": 32,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-28T16:01:26.826Z"
                        },
                        {
                            "id": "7487636202876186624",
                            "date": "3w",
                            "text": "This is exactly the kind of news we love to celebrate! 🎉 \n\nCongrats to our customer, Texas Advanced Computing Center (TACC), on being awarded a $5M grant from the U.S. National Science Foundation (NSF) to implement the Sagebrush system.\n\nInvestments like these help equip researchers with the infrastructure they need to tackle some of the world's biggest scientific challenges—and that's something worth celebrating.\n\nWe also want to recognize the incredible work the NSF continues to do to advance research, scientific discovery, and AI innovation. From supporting groundbreaking projects like this to helping shape the future through initiatives like NAIRR, NSF plays a vital role in strengthening the U.S. research ecosystem.\n\nWell done to everyone involved. We're looking forward to seeing the impact of this work. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/texas-advanced-computing-center-tacc/",
                                    "start": 85,
                                    "length": 38
                                },
                                {
                                    "url": "https://www.linkedin.com/company/national-science-foundation/",
                                    "start": 168,
                                    "length": 33
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_tacc-awarded-5m-grant-from-the-us-national-activity-7487636202876186624-3U7f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7487636164951244800",
                            "attachments": [
                                {
                                    "id": "D5605AQGTddOEG4rdFQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGTddOEG4rdFQ/mp4-720p-30fp-crf28/B56Z.ltbVrGcB8-/0/1785191579781?e=1787648400&v=beta&t=WZTeUsOTeDMgn_DQnYljZn6gQEKhQo9lH3FMkSmdH5s",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-27T22:33:04.319Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7486495969073856512",
                            "date": "3w",
                            "text": "When you get a haute couture shoutout at RAISE Summit 🤩 \n\nHuge thanks to Charlie Kawwas & Tony Kim for highlighting the amazing collaboration between our teams across generations of AI infrastructure. So inspiring to watch heterogeneous AI infrastructure lead the way as we move into an exciting new chapter for enterprise AI! 🦾\n\nRodrigo Liang \nHenri Delahaye\nBroadcom \nBlackRock",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 41,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAZFOIB6SiC2BV-cC0NnGKD20UeDHPvZEE",
                                    "start": 73,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACI04EBiIxsG_dvs_rVmdbwWphK_xsTjTg",
                                    "start": 90,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 330,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABqQs3UBXr7x1dOKtZABSXGefMT1uFzDZ6M",
                                    "start": 345,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/broadcom/",
                                    "start": 360,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/blackrock/",
                                    "start": 370,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_broadcoms-charlie-kawwas-blackrocks-tony-activity-7486495969073856512-89-S?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7486495967958142976",
                            "attachments": [
                                {
                                    "id": "D5610AQE5CULZ2NepCA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE5CULZ2NepCA/mp4-720p-30fp-crf28/B56Z.VgW9dIMBo-/0/1784919726218?e=1787648400&v=beta&t=R2Y2O_Ke6bn7IJcXz78b2ENYT3wzcHEpqEfEiMNF3OM",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-24T19:02:11.396Z",
                            "reaction_counter": 81,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7486166787735302145",
                            "date": "3w",
                            "text": "“How do we solve the scaling problems as AI becomes a global problem?” — Rodrigo Liang\n\nThank you to Jon Fortt for having our CEO on CNBC Fortt Knox to discuss why enterprises are bringing AI on-prem and why we're the only proven premium AI chip inference.\n\nWe appreciate the chance to share our mission! 🚀",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 73,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAEcZkBIFPkmuI7RX3WBl_0W17G98fbtyY",
                                    "start": 101,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 133,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7486166787735302145",
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liang-sambanovas-co-founder-and-activity-7486166787735302145-8fw_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7486166787735302145",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7486095673625300992",
                                "date": "3w",
                                "text": "Rodrigo Liang, SambaNova's co-founder and CEO, argues in a Fortt Knox 1:1 that efficient general-purpose inference chips win as enterprises \"wake up\" and repatriate AI on-prem for privacy and cost. He touts a $1B raise at $11B and a multiyear Intel pact tied to chairman Lip-Bu Tan. Born in Taipei, raised from age one in Sao Paulo by a doctor father and schooled in rigorous German classes, he did Texas high school before Stanford, where pre-med gave way to engineering. Full Fortt Knox conversation linked in the comments:",
                                "author": {
                                    "id": "ACoAAAAEcZkBIFPkmuI7RX3WBl_0W17G98fbtyY",
                                    "name": "Jon Fortt",
                                    "is_company": false,
                                    "public_identifier": "jonfortt"
                                },
                                "parsed_datetime": "2026-07-23T16:31:33.524Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-23T21:14:08.449Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-23T21:14:08.449Z"
                        },
                        {
                            "id": "7486104896451031040",
                            "date": "3w",
                            "text": "Not going to lie, this one feels pretty special for us. 😎🦾\n\nSambaNova has joined the Genesis Mission Consortium, a public-private partnership led by the U.S. Department of Energy (DOE) that's bringing together leaders across industry, academia, and the National Laboratories to tackle some of the country's biggest scientific, energy, and national security challenges.\n\nWe're excited to contribute our AI inference platform and help power the next generation of scientific discovery.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 153,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_not-going-to-lie-this-one-feels-pretty-special-activity-7486104896451031040-GWOu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7486104896451031040",
                            "attachments": [
                                {
                                    "id": "D5610AQEkg2lp55M5aA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEkg2lp55M5aA/image-shrink_480/B56Z.P8txCIQAQ-/0/1784826486149?e=1787648400&v=beta&t=Ugb_J_J1BcXnwVufOLlcjcIVuNU_3Kt6B_2luLnsm3Y",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-23T17:08:12.417Z",
                            "reaction_counter": 45,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485810344511074304",
                            "date": "3w",
                            "text": "One of the most exciting parts of growth is welcoming new people to the team.\n\nFollowing our recent announcement that SambaNova completed the first close of a $1B Series F financing at an $11B valuation, we're growing and looking for builders, innovators, and problem-solvers who want to help shape the future of AI infrastructure.\n\nThere's never been a more exciting time to join us. If you've been thinking about what's next in your career, we'd love to meet you.\n\nOpen positions in the link below ⬇️\nhttps://bit.ly/3RtfwYT",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_one-of-the-most-exciting-parts-of-growth-activity-7485810344511074304-33vT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485810344511074304",
                            "attachments": [
                                {
                                    "id": "D5622AQHPfWWmpH5ViA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHPfWWmpH5ViA/feedshare-shrink_480/B56Z.LwxtzKEAg-/0/1784756264748?e=1788393600&v=beta&t=hbkpjI-WkkWr5NjzIF0kXoY9DBny0dfYsLzOrJbI3vA",
                                    "size": {
                                        "width": 480,
                                        "height": 480
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 10,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-22T21:37:45.762Z",
                            "reaction_counter": 54,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485765117150863360",
                            "date": "3w",
                            "text": "Round of applause for our fearless leader! 👏\n\nWe're so proud to share that our CEO Rodrigo Liang has been appointed to SEMAFOR's Silicon Valley & the World Advisory Board! His leadership and expertise in AI, technology, and innovation will make a powerful impact alongside such accomplished global leaders. \n\nAs AI scales across enterprises, Rodrigo is ready to shape pivotal conversations about inference, infrastructure, and sovereign AI.\n\nCongratulations on this appointment, Rodrigo! 🦾 \n\nhttps://bit.ly/3TNEOSi",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 83,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/semaformedia/",
                                    "start": 119,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_round-of-applause-for-our-fearless-leader-activity-7485765117150863360-ojHP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485765117150863360",
                            "attachments": [
                                {
                                    "id": "D5610AQFK1UcwR0bNZQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFK1UcwR0bNZQ/image-shrink_480/B56Z.LHtS6KcAQ-/0/1784745481660?e=1787648400&v=beta&t=q_quTmmVWzwTQbas1z1gtb-eQ5pYmGvsv4c749msjfU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-22T18:38:02.719Z",
                            "reaction_counter": 58,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485736717287600128",
                            "date": "3w",
                            "text": "“We are solving a different problem, which is how do you minimize data movement when you’re actually flowing the graph over the chip to get the answers that you want.\" — Abhi I. \n\nAI training made GPUs the standard. AI inference is changing the equation. As Abhi shared with Fierce Network, minimizing data movement is the key to faster, more efficient inference—and SambaNova RDUs are purpose-built to deliver enterprise AI without requiring entirely new data centers.\n\nThanks to Diana Goovaerts and the Fierce Network team! \n\nLink to the full article in the comments ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 170,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAATj4lMBESQfwvvNIfR7y15s_6RXelgwiA8",
                                    "start": 481,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/fierce-network/",
                                    "start": 505,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_we-are-solving-a-different-problem-which-activity-7485736717287600128-i0Wv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485736717287600128",
                            "attachments": [
                                {
                                    "id": "D5610AQHgbReKZJhRog",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHgbReKZJhRog/image-shrink_480/B56Z.Kt29KIUAQ-/0/1784738706716?e=1787648400&v=beta&t=fJ7qPZ57mIFxT7yZ8cHB-uDKoXqWAcEoPDOH8kHRUv8",
                                    "size": {
                                        "width": 480,
                                        "height": 269
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-22T16:45:11.664Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485400766518800384",
                            "date": "3w",
                            "text": "Prompt caching is now live on SambaCloud, starting with MiniMax M2.7.\n\nIf your app keeps sending the same long system prompt, reference doc, or set of examples on every call, this is for you. Those repeated tokens now get pulled from cache instead of reprocessed from scratch, automatically, with nothing to change on your end.\n\nWhat that actually gets you:\n\nCached tokens cost 90% less: $0.06 per million instead of $0.60 for MiniMax M2.7.\n\nTime-to-first-token barely moves as context grows. Up to 91% faster at longer lengths, dropping from 40.6 seconds to 3.7 at 192k tokens.\n\nYou can also see it working. Every response now shows exactly how many tokens hit the cache.\n\nSame workload, same code, just faster and cheaper. https://bit.ly/4b3KvBw",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 56,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_prompt-caching-is-now-live-on-sambacloud-activity-7485400766518800384-Y6xA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485400766518800384",
                            "attachments": [
                                {
                                    "id": "D5610AQG2gSZd0kd6vg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG2gSZd0kd6vg/image-shrink_480/B56Z.F8UAQIMAY-/0/1784658608658?e=1787648400&v=beta&t=3GsQgyUvK-DR5ZuQbS7sudky8ZCteHkUxe0pPApJyOU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-21T18:30:14.759Z",
                            "reaction_counter": 26,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485370350344544256",
                            "date": "3w",
                            "text": "Great news from down under 🇦🇺 \n\nMassive congratulations to our friends at SCX ai on announcing their IPO on the ASX to raise $40M.\n\nWe're proud to partner with SCX to bring the world's first RDU-powered sovereign AI cloud to Australia, giving enterprises and government agencies access to high-performance AI infrastructure while keeping data secure and sovereign.\n\nLet's go, SCX team! We're excited to see what's next 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 74,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7485370350877421568",
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-australia-ipo-activity-7485370350877421568-2KUF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7485370350344544256",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7485172998929281024",
                                "date": "4w",
                                "text": "SCX.ai is embarking on a significant journey, announcing its IPO on the ASX to raise $40 million.\n\nThis capital infusion is earmarked for developing Australia's sovereign AI infrastructure, positioning the company and its investors at the forefront of the nation's technological advancement. It's an invitation to shape the future of AI within Australia.\n\nThis strategic move underscores the growing importance of domestic AI capabilities and the opportunities for investment in this critical sector.\n#AI #Australia #IPO #Technology #Investment #SovereignAI",
                                "author": {
                                    "id": "ACoAAAGiJ1UBKoAgJfbvav4Or7Ts2widVGzfhjE",
                                    "name": "David Keane",
                                    "is_company": false,
                                    "public_identifier": "dakeane"
                                },
                                "parsed_datetime": "2026-07-21T03:25:10.734Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-21T16:29:22.978Z",
                            "reaction_counter": 26,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-21T16:29:23.105Z"
                        },
                        {
                            "id": "7485061366060552192",
                            "date": "4w",
                            "text": "T-2 days before the Genesis Mission Summit in Washington, D.C 🚀 \n\nOur team will be there discussing the future of AI infrastructure, scientific discovery, and high-performance inference.\n\nIf you're attending, stop by and say hello!",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_t-2-days-before-the-genesis-mission-summit-activity-7485061366060552192-UySz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485061366060552192",
                            "attachments": [
                                {
                                    "id": "D5610AQFTgJxTSzz6zg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFTgJxTSzz6zg/image-shrink_480/B56Z.BHoS6KEAQ-/0/1784577689271?e=1787648400&v=beta&t=g_7uDrTrW3MtlVp4qqTPV8mUNGeTEhFOdX7xDc-Qf2s",
                                    "size": {
                                        "width": 480,
                                        "height": 480
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-20T20:01:35.384Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483989163575259136",
                            "date": "1mo",
                            "text": "Congratulations to the General Compute team on securing a $400M loan from Upper90 🎉 \n\nGeneral Compute's inference neocloud runs on SambaNova's SN50 chips — power-efficient, no expensive water-cooling required, and deployable across a far wider range of data centers than traditional GPU clouds.\n\nCapital markets are catching up to what we've believed all along: not every workload needs a supercomputer, but every company needs fast, cost-efficient inference. As open-source models close the gap with frontier labs, infrastructure outside the Nvidia ecosystem is becoming a real competitive edge.\n\nProud to power General Compute's vision of the world's fastest inference cloud for AI agents. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 23,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_congratulations-to-the-general-compute-team-activity-7483989163575259136-vmu_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483989163575259136",
                            "attachments": [
                                {
                                    "id": "D5610AQHr7zsZRuf1wA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHr7zsZRuf1wA/image-shrink_480/B56Z9x4fa0GUAQ-/0/1784322062243?e=1787648400&v=beta&t=so-76T2a4vfka9vVCUUmjEyWE1gOwYnkMIX5qShqXfk",
                                    "size": {
                                        "width": 480,
                                        "height": 320
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 9,
                            "parsed_datetime": "2026-07-17T21:01:02.391Z",
                            "reaction_counter": 124,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483966573242896384",
                            "date": "1mo",
                            "text": "What makes AI agents more capable isn't always a bigger model, it's often better context.\n\nIn this conversation with our friends over at SCX ai, our own Shubhangi Upasani joins Qizheng Zhang from Stanford University to discuss Agentic Context Engineering (ACE) and how inference-time optimization can improve the way AI agents reason, adapt, and solve complex tasks.\n\nACE is a great example of how innovation is happening beyond the model itself. Pairing these techniques with fast, efficient inference unlocks more capable agentic AI without simply throwing more compute at the problem.\n\nThanks to the SCX ai team for the conversation. We're excited to see more devs explore what's possible with ACE.\n\nVideo link in the comments ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 137,
                                    "length": 6
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACsh3tcB6FDz8mWDt7T1UYYTw60mWYJga60",
                                    "start": 153,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACoyThcBUZtKBs48a2pfNq9zO-YWev6bUnI",
                                    "start": 177,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/stanford-university/",
                                    "start": 196,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/company/southerncrossai/",
                                    "start": 603,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_what-makes-ai-agents-more-capable-isnt-always-activity-7483966573242896384-zf8G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483966573242896384",
                            "attachments": [
                                {
                                    "id": "D5610AQEqQK0FkAw5MA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEqQK0FkAw5MA/image_225_300/B56Z9x7Ta3G4AE-/0/1784322799463?e=1787648400&v=beta&t=CatN8ctEPoktN633Rrq7FqdnUHKUGvKaSsTTUFLk6W4",
                                    "size": {
                                        "width": 300,
                                        "height": 225
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-07-17T19:31:16.436Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483941627506348033",
                            "date": "1mo",
                            "text": "It's here 😎 \n\nA massive thank you to Molly O'Shea for this wonderful Sourcery chat in one of the most beautiful cities in the world. Inference has cracked the market wide open and it's exciting to shine a light on how businesses can scale cost-effectively by pairing our technology with GPU racks, unlocking market differentiation through premium inference. 🔥\n\n🎥 Watch the full episode: https://lnkd.in/giKUwhBs",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 37,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sourcerydeals/",
                                    "start": 69,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7483941627506348033",
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liang-is-the-ceo-and-co-founder-of-activity-7483941627506348033-VPMB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483941627506348033",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7483868181116256256",
                                "date": "1mo",
                                "text": "Rodrigo Liang is the CEO and Co-Founder of SambaNova. The company just announced a first close on a $1B round at an $11B valuation, led by General Atlantic with T. Rowe Price and Capital Group participating.\n\nRodrigo has spent 32 years building chips. We covered the 101 of semiconductors and data centers: what inference is, why it is a different problem than training, and why inference will require orders of magnitude more chips than training.\n\nHe walks through SambaNova's chip lineup from SN10 to the new SN50, why a 10 kilowatt air-cooled rack changes where AI can be deployed, and why running a trillion parameter model in a single rack matters for agents, latency, and edge.\n\nWe also covered the era of premium inference, how providers measure revenue per rack, coopetition and traffic routing across Nvidia and AMD, sovereign models, the move back to on-prem, and why tokenmaxxing is the wrong goal.\n\nSpecial thank you to Brex, MongoDB, & AssemblyAI for helping make this RAISE AI Summit mini-series in Paris, France happen.\n\nSourcery covers the people building the future across AI, hardware, and the private and public markets, subscribe for more.",
                                "author": {
                                    "id": "ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "name": "Molly O'Shea",
                                    "is_company": false,
                                    "public_identifier": "mollysoshea"
                                },
                                "parsed_datetime": "2026-07-17T13:00:17.925Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-17T17:52:08.909Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-17T17:52:08.909Z"
                        },
                        {
                            "id": "7483632674159374336",
                            "date": "1mo",
                            "text": "Rodrigo Liang's Sourcery conversation with Molly O'Shea on premium inference (with Paris as a backdrop, NBD 😎) coming VERY soon. And the topics they covered were hotter than Paris was last week at RAISE Summit. 🔥\n\nWatch this space 👀\n\n📸: Molly O'Shea",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 0,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sourcerydeals/",
                                    "start": 16,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 43,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 197,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABcPpUEBceZBDzjNd0y-ZnUDopdrMCR5jv0",
                                    "start": 237,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_rodrigo-liangs-sourcery-conversation-with-activity-7483632674159374336-637D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483632674159374336",
                            "attachments": [
                                {
                                    "id": "D5622AQG2RCeqyCcfGg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG2RCeqyCcfGg/feedshare-shrink_800/B56Z9s0QxgGcAc-/0/1784237067607?e=1788393600&v=beta&t=WPGRP3jo5L_r9YKFGYHh4AiFUPgcEEtu68Y0deXHV3s",
                                    "size": {
                                        "width": 800,
                                        "height": 452
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-16T21:24:28.691Z",
                            "reaction_counter": 43,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483597153521528832",
                            "date": "1mo",
                            "text": "\"The benefit of SambaNova, uniquely, which is a result of our architecture, is our systems are fully air cooled. They're 30 kilowatts and they can go into most datacenters in the world today.\" — Anton McGonnell \n\nMany AI racks need 600 kW of power. No datacenter in the world can handle that today. \n\nSambaNova runs on 30kW and fits in existing infrastructure. 🦾 \n\n🎥: Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 195,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 368,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-power-crisis-no-one-is-talking-about-activity-7483597153521528832-fBFu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7483597152598900736",
                            "attachments": [
                                {
                                    "id": "D5610AQEiLaoYHWICvg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEiLaoYHWICvg/mp4-720p-30fp-crf28/B56Z9sT5pzGgBk-/0/1784228592092?e=1787648400&v=beta&t=krXEMNyhIlKNjatnQ219hdedctl7CZmdXn6MsxHA6tg",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-16T19:03:19.911Z",
                            "reaction_counter": 47,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483266427148214272",
                            "date": "1mo",
                            "text": "The datacenter power crisis isn't coming. It's already here.\n\nExisting facilities hold 80%+ of AI capacity but can't run next-gen systems.\n\nSambaNova RDUs drop into the infrastructure you already have... air-cooled and ready for the datacenters that exist today.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-datacenter-power-crisis-isnt-coming-activity-7483266427148214272-gsHd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7483266427148214272",
                            "attachments": [
                                {
                                    "id": "D5610AQGc3Qq0vksttA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGc3Qq0vksttA/image-shrink_480/B56Z9nnJjUKUAQ-/0/1784149744349?e=1787648400&v=beta&t=OV5tCGRlfnTHV60hZgSP5tDktWH055tDUM512Dkdw_0",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-15T21:09:08.599Z",
                            "reaction_counter": 33,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7482858454118768640",
                            "date": "1mo",
                            "text": "This is going to be a good one with Data Science Dojo! \n\nJoin our own Varun Badrinath Krishna for a hands-on live session tomorrow: Mastering the Coding Agent Harness. ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/data-science-dojo/",
                                    "start": 36,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAG_zYABrkAbZrTAlmiDpFTB14ZiQrk-BDk",
                                    "start": 70,
                                    "length": 23
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7482875323488038912",
                            "share_url": "https://www.linkedin.com/posts/sambanova_mastering-the-coding-agent-harness-activity-7482875323488038912-KwT6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7482858454118768640",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7482555277519720448",
                                "date": "1mo",
                                "text": "Ever wondered why every coding agent — no matter the vendor — seems to follow the same playbook? It's the planning-execution architecture: a frontier model reasons and plans, while a fast execution model does the heavy lifting.\n\nJoin Varun Krishna, Principal Solutions Engineer at SambaNova, for a hands-on live session where we break down:\n✅ How the planning/execution split works across today's leading coding agents\n✅ Why offloading execution to a fast inference platform can cut costs and time\n✅ The real handoff mechanics — what data moves between planning and execution (and what doesn't)\n✅ How to point your own coding agent at a fast inference platform in minutes\n\n📅 July 15, 2026 | 🕐 1:00 PM PT\n\nPlan with frontier models. Execute in 90% less time. ⚡\n\nRegister now → https://hubs.la/Q04pnyP10\n\n#AI #CodingAgents #LLM #MachineLearning #SambaNova #Webinar #AIEngineering",
                                "author": {
                                    "id": null,
                                    "name": "Data Science Dojo",
                                    "is_company": true,
                                    "public_identifier": "data-science-dojo"
                                },
                                "parsed_datetime": "2026-07-13T22:03:17.315Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-14T18:08:00.249Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-14T19:15:02.220Z"
                        },
                        {
                            "id": "7482829573785563136",
                            "date": "1mo",
                            "text": "\"[SambaNova] hopes to demonstrate how customers can breathe new life into their aging GPU fleets by using its systems as decode accelerators. And because its systems are air-cooled, they can be deployed in existing datacenters.\" — Tobias Mann, The Register\n\nThis is exactly what we're aiming for: helping customers get more life out of their existing GPU fleets. Deploying our systems as decode accelerators gives customers a way to boost inference performance without ripping out infrastructure they've already paid for. And because our systems run air-cooled, they slot into standard datacenter environments rather than requiring the liquid-cooling overhauls that come with next-gen GPU deployments. \n\nhttps://bit.ly/4yjLW8L",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABkD7ngBb6trTDpiIie8zscG77fYfNbAphY",
                                    "start": 231,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/the-register/",
                                    "start": 244,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-hopes-to-demonstrate-how-customers-activity-7482829573785563136-TLQc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7482829573785563136",
                            "attachments": [
                                {
                                    "id": "D5610AQFLBpGvUFCJpQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFLBpGvUFCJpQ/image-shrink_480/B56Z9hZ05qGoAQ-/0/1784045588395?e=1787648400&v=beta&t=lN-_kA2HitDYaqqygYtU3u7kmTqdIZwW9oL1h1bEqF4",
                                    "size": {
                                        "width": 480,
                                        "height": 273
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-14T16:13:14.641Z",
                            "reaction_counter": 47,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7482572960013234176",
                            "date": "1mo",
                            "text": "Our team's had quite the week in Paris and we're still not done 😎\n\nAt RAISE Summit 2026, we demonstrated the fastest MiniMax M2.7 inference in the world, as benchmarked by Artificial Analysis. \n\nThe demo paired NVIDIA H200 GPUs for prefill with SambaRack SN50 RDUs for decode, showcasing how disaggregated inference delivers the speed, efficiency, and scalability required for modern AI agents.\n\nThe results:\n⚡ Up to 850 tokens/second on short-context workloads\n⚡ 450+ tokens/second on long-context workloads\n\nFor inference providers, it means existing GPU infrastructure can continue handling compute-intensive prefill while SN50 adds purpose-built decode capacity—unlocking a premium inference experience without replacing the entire stack.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 70,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 117,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 172,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-teams-had-quite-the-week-in-paris-and-activity-7482572960013234176-mwYp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7482572960013234176",
                            "attachments": [
                                {
                                    "id": "D5610AQGbtCCanRdFzw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGbtCCanRdFzw/image-shrink_480/B56Z9dwdgwIgAQ-/0/1783984413038?e=1787648400&v=beta&t=YXQTwRZyrN-eJxHf1xLLdkbuzsgKUzxrCd0-04S7IoI",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-13T23:13:33.150Z",
                            "reaction_counter": 41,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7481605646220566528",
                            "date": "1mo",
                            "text": "What a week at RAISE Summit! Paris was buzzing with conversations about what's next for AI and we were stoked to be part of it! 🇫🇷\n\nRodrigo Liang sat down with Gemma Allen from theCUBE + NYSE Wired to talk about one of the biggest shifts happening in the industry: the move from training to inference.\n\nTheir chat covered everything from disaggregated inference and sovereign AI to the economics of running AI at scale and why enterprises are rethinking the infrastructure behind production AI.\n\nWatch the full interview below ⬇️\nhttps://lnkd.in/g7Jhhx2j",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 15,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 132,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAgkOVYBamP4vyo6_thv2iALeZ_1wYADS9A",
                                    "start": 160,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/nyse/",
                                    "start": 187,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_what-a-week-at-raise-summit-paris-was-buzzing-activity-7481605646220566528-YSc-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481605644521758720",
                            "attachments": [
                                {
                                    "id": "D5610AQFIxPFNXEnj_w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFIxPFNXEnj_w/mp4-720p-30fp-crf28/B56Z9QAexlKEBk-/0/1783753767445?e=1787648400&v=beta&t=1Ayv6af8oiLEtUz3HkZokbdkKvAAJlGnN7XKAMxEidk",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-07-11T07:09:47.570Z",
                            "reaction_counter": 113,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7481425655243395072",
                            "date": "1mo",
                            "text": "Sally Ward-Foxton with the in-depth coverage 🦾\n\nWe appreciate the conversation, as always. And thank you for showcasing our new customer, JPMorganChase 🙌",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACxaasB-qk21-y99WIBKZe6rW8AZLg1lG8",
                                    "start": 0,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 138,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7481425655243395072",
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-raises-1b-signs-jpmorganchase-activity-7481425655243395072-llzf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7481425655243395072",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7481037441206792193",
                                "date": "1mo",
                                "text": "SambaNova has raised $1B and signed up JPMorganChase as a customer for its racks of RDUs. I spoke to SambaNova CEO Rodrigo Liang who told me the company is also leaning in hard to disaggregated inference architectures:\n\nhttps://lnkd.in/eCvykyMQ",
                                "author": {
                                    "id": "ACoAAACxaasB-qk21-y99WIBKZe6rW8AZLg1lG8",
                                    "name": "Sally Ward-Foxton",
                                    "is_company": false,
                                    "public_identifier": "sally-ward-foxton-663a883"
                                },
                                "parsed_datetime": "2026-07-09T17:31:56.938Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-10T19:14:34.377Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-10T19:14:34.377Z"
                        },
                        {
                            "id": "7481100631521288192",
                            "date": "1mo",
                            "text": "Loved hanging out with our friends over at Intel at RAISE Summit this week! 🇫🇷",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 43,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 52,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7481100632154599424",
                            "share_url": "https://www.linkedin.com/posts/sambanova_at-raise-summit-2026-in-partnership-with-activity-7481100632154599424-dry5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481100631521288192",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7481058112079167488",
                                "date": "1mo",
                                "text": "At RAISE Summit 2026, in partnership with SambaNova, we’re connecting with customers, partners, and industry leaders shaping the future of AI. \n\nHere's to great conversations on what's next for enterprise AI and the infrastructure powering it.",
                                "author": {
                                    "id": null,
                                    "name": "Intel",
                                    "is_company": true,
                                    "public_identifier": "intel-corporation"
                                },
                                "parsed_datetime": "2026-07-09T18:54:05.258Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-09T21:43:02.683Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-09T21:43:02.834Z"
                        },
                        {
                            "id": "7481071054317060096",
                            "date": "1mo",
                            "text": "Thank you TBPN for having Rodrigo Liang yesterday and for hitting the gong to celebrate our milestone with us 🥁\n\nGreat conversation covering SambaNova's completion of the first close of $1B financing at an $11B valuation, and where we go from here.\n\nWatch the full interview below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/tbpn/",
                                    "start": 10,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 26,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_thank-you-tbpn-for-having-rodrigo-liang-yesterday-activity-7481071054317060096-VAtF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7481070755028316160",
                            "attachments": [
                                {
                                    "id": "D5605AQFu_svLbhEAYA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFu_svLbhEAYA/mp4-720p-30fp-crf28/B56Z9IaQ5XGcB8-/0/1783626324931?e=1787648400&v=beta&t=CgLwQWNxuK4ZZNJ6Vw__ykdmSO94M0wmwSSbu6p7rnI",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-09T19:45:30.928Z",
                            "reaction_counter": 57,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480682665872994305",
                            "date": "1mo",
                            "text": "LIVE from Paris 📍 SambaNova has completed our first close of $1B Series F financing round, valuing the company at $11B 🎉 \n\nRodrigo Liang chatted with CNBC Squawk Box to share more about our financing news and what this means for us in the future. Watch below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 123,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 150,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_live-from-paris-sambanova-has-completed-activity-7480682665872994305-4a6D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480682665017253890",
                            "attachments": [
                                {
                                    "id": "D5610AQG2K0WeGCKJaQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQG2K0WeGCKJaQ/mp4-720p-30fp-crf28/B56Z9C5CQwHYBk-/0/1783533701145?e=1787648400&v=beta&t=Lh7rps10zU7h4BCSvRwbOgnZ-mn4zYcgcxcMAiKNBLU",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-08T18:02:11.907Z",
                            "reaction_counter": 111,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480673993537126401",
                            "date": "1mo",
                            "text": "RAISE Summit in Paris feels like the perfect place to celebrate this milestone. 🇫🇷 \n\nEarlier today, we announced the first close of our $1B Series F financing at an $11B valuation.\n\nSo proud of our team and grateful to everyone who has been part of this journey. Here's to the next chapter. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 0,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7480673994128412672",
                            "share_url": "https://www.linkedin.com/posts/sambanova_raise2026-ai-sambanova-activity-7480673994128412672-fu42?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480673993537126401",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7480662511164325889",
                                "date": "1mo",
                                "text": "Announced live from RAISE: SambaNova has raised $1 billion at an $11 billion valuation.\n\nCEO and co-founder Rodrigo Liang broke the news on stage. The Series F, a first close led by General Atlantic with Intel Capital, BlackRock and the Qatar Investment Authority joining, roughly quintuples the company's valuation in a matter of months, a bet on SambaNova as a serious challenger to NVIDIA in AI inference.\n\nAnd it lands with a marquee proof point: JPMorganChase Chase has selected SambaNova as its inference-infrastructure partner, powering secure, on-premises AI inside the bank.\n\nLiang's read on the moment: inference has broken everything open, and a standalone company can now move fast enough to seize it.\n\nBig news, live from the RAISE stage. Day 1, Paris.\n\n#RAISE2026 #AI #SambaNova #Paris",
                                "author": {
                                    "id": null,
                                    "name": "RAISE Summit",
                                    "is_company": true,
                                    "public_identifier": "raise-summit"
                                },
                                "parsed_datetime": "2026-07-08T16:42:06.650Z"
                            },
                            "repost_counter": 8,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-08T17:27:44.261Z",
                            "reaction_counter": 69,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-08T17:27:44.402Z"
                        },
                        {
                            "id": "7480665760420253696",
                            "date": "1mo",
                            "text": "Incredibly excited to have General Atlantic lead our Series F financing round. \n\nSo proud of our team and everyone who helped us reach this milestone 🎉\n\nAs AI moves from training to inference, we're excited to keep building the infrastructure that will power the next generation of enterprise AI.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 27,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7480665761032691712",
                            "share_url": "https://www.linkedin.com/posts/sambanova_general-atlantic-is-proud-to-lead-sambanovas-activity-7480665761032691712-GYz1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480665760420253696",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7480618439795990528",
                                "date": "1mo",
                                "text": "General Atlantic is proud to lead SambaNova's $1 billion Series F financing round. \n \nAs AI moves from training models to deploying them at scale, inference is becoming a critical layer of enterprise AI infrastructure. SambaNova is built for this shift, with a full-stack platform of chips, systems, software, and cloud services designed to power efficient and adaptable AI inference for enterprises, neoclouds, and sovereign AI initiatives.\n \nWe are excited to partner with Rodrigo Liang and the SambaNova team as they build on their strong momentum, scale the business, and support the next phase of enterprise AI adoption.\n\nhttps://lnkd.in/g7i7hDEY",
                                "author": {
                                    "id": null,
                                    "name": "General Atlantic",
                                    "is_company": true,
                                    "public_identifier": "general-atlantic"
                                },
                                "parsed_datetime": "2026-07-08T13:46:59.217Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-08T16:55:01.333Z",
                            "reaction_counter": 27,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-08T16:55:01.479Z"
                        },
                        {
                            "id": "7480591628471259136",
                            "date": "1mo",
                            "text": "$1B. $11B valuation. Today we completed the first close of $1 billion as part of our Series F financing, at an $11 billion valuation, led by General Atlantic, with new and existing investors joining in.\n\nWe are proud of our entire team and everyone who helped get us here.\n\nAnd it's not just capital. JPMorganChase is putting our RDUs to work, deploying both SN40 and SN50 systems for secure, on-prem AI inference. As enterprises move from experimenting with AI to actually running it in production, they need infrastructure that can keep up: fast, secure, and built for the real world. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 141,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 301,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_1b-11b-valuation-today-we-completed-the-activity-7480591628471259136-U_mh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480591627346960384",
                            "attachments": [
                                {
                                    "id": "D5610AQE0fLp_0JUA8w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE0fLp_0JUA8w/mp4-720p-30fp-crf28/B56Z9Bmbk2GoBk-/0/1783512023366?e=1787648400&v=beta&t=cU0w4Q9A_qLlClpS8GucQKKdImyS9pmLAn_HdVjVTfw",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 44,
                            "comment_counter": 13,
                            "parsed_datetime": "2026-07-08T12:00:26.899Z",
                            "reaction_counter": 416,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480568912477192192",
                            "date": "1mo",
                            "text": "“Having JPMorganChase decide they’re going to use SambaNova for their inference solution is a big deal. It sends a message to the banking industry that it’s time not to completely depend on cloud services. These banks want heterogeneous [infrastructure].” — Rodrigo Liang \n\n$11B valuation! 🎉\n\nThanks to Kate Park & TechCrunch for highlighting our latest milestone and the growing demand for secure, on-prem AI inference.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 258,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/techcrunch/",
                                    "start": 315,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_having-jpmorganchase-decide-theyre-going-activity-7480568912477192192-eYvr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480568912477192192",
                            "attachments": [
                                {
                                    "id": "D5610AQEQ7bxIRatgmw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEQ7bxIRatgmw/image-shrink_480/B56Z9BRyldJoAQ-/0/1783506610814?e=1787648400&v=beta&t=HucZmqu-_VLtDTUYjYEreqEox5DJqkVF8W1-NRAgEhA",
                                    "size": {
                                        "width": 480,
                                        "height": 402
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-08T10:30:10.984Z",
                            "reaction_counter": 81,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480546233543966720",
                            "date": "1mo",
                            "text": "“People still want to buy the same number of tokens — you’re just processing them fast on the same hardware versus standing up 10 times the number of racks to actually keep everybody moving.” — Rodrigo Liang\n\nGrateful to Ryan Gould at Bloomberg for covering our latest milestone: an $11B valuation. 🎉\n\nThe goal isn't to make customers buy more infrastructure — it's to help them process the same volume of tokens faster, on the hardware they already have, instead of scaling up racks 10x just to keep pace.\n\nGeneral Atlantic\nSeligman\nVirginia Jamieson\n\n🔗 Read the full story here: https://lnkd.in/gjUg9su5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 194,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABfnAzEB1LA4REfamedZBkvJr_Ly9-U1SLA",
                                    "start": 221,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/company/bloomberg/",
                                    "start": 235,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 508,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/seligman-ventures/",
                                    "start": 525,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAIk48B2z2wYtXgW9a6GxLDFdEq18ZSArg",
                                    "start": 534,
                                    "length": 17
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_people-still-want-to-buy-the-same-number-activity-7480546233543966720-IKJC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480546233543966720",
                            "attachments": [
                                {
                                    "id": "D5622AQEafKuXDanhIg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEafKuXDanhIg/feedshare-shrink_800/B56Z9A6HeyHcAc-/0/1783500404961?e=1788393600&v=beta&t=4ZEHbhpDlcpQyIxIRVAcVquvtpzs4CvvtWRsYbQv2UM",
                                    "size": {
                                        "width": 800,
                                        "height": 533
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-08T09:00:03.905Z",
                            "reaction_counter": 49,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480529868993101824",
                            "date": "1mo",
                            "text": "“This $11 billion valuation underscores how important inference has become in the enterprise AI stack.” Rodrigo Liang\n\nToday marks an exciting milestone for SambaNova. We're announcing that we completed the first close of a $1 billion in financing at an $11 billion valuation, led by General Atlantic, with significant investment from Seligman Ventures and T. Rowe Price Associates, Inc.\n\nWe're also proud to share that JPMorganChase has selected our RDUs to power secure, on-prem AI inference with deployments of both SN40 and SN50 systems. As AI moves into production, enterprises need infrastructure that's fast, secure, and built to meet the demands of real-world deployment. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 104,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-atlantic/",
                                    "start": 284,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/seligman-ventures/",
                                    "start": 335,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/t--rowe-price/",
                                    "start": 357,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/jpmorganchase/",
                                    "start": 420,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_this-11-billion-valuation-underscores-how-activity-7480529868993101824-Dor8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480529868993101824",
                            "attachments": [
                                {
                                    "id": "D5610AQHkiVEpV6Vh9w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkiVEpV6Vh9w/image_350_624/B56Z9x7R_.HYAc-/0/1784322793661?e=1787648400&v=beta&t=KGBCZTNd1GnzbB6-BXa0fw8tEU9O8MAiQwK_WbUV_AU",
                                    "size": {
                                        "width": 624,
                                        "height": 350
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 80,
                            "comment_counter": 30,
                            "parsed_datetime": "2026-07-08T07:55:02.292Z",
                            "reaction_counter": 542,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480291069616824320",
                            "date": "1mo",
                            "text": "As models grow larger and agentic workloads become more complex, no single processor is optimal for every stage of inference. Different workloads demand different strengths.\n\nThat's why heterogeneous AI infrastructure is becoming the new standard.\n\nBy combining GPUs with purpose-built AI accelerators, organizations can improve latency, increase throughput, and reduce the cost of serving AI at scale.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_as-models-grow-larger-and-agentic-workloads-activity-7480291069616824320-P6vA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480291069616824320",
                            "attachments": [
                                {
                                    "id": "D5610AQFRVsngJH6A3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFRVsngJH6A3A/image-shrink_480/B56Z89VGBQIMAQ-/0/1783440367960?e=1787648400&v=beta&t=wDHgCdk8rfSRCwyFJcu4_15bO_Yy3SEOZPDnrlEzxDQ",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-07T16:06:08.084Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480154921791537154",
                            "date": "1mo",
                            "text": "Bonjour, Paris 🇫🇷\n\nGet ready for the onslaught of RAISE Summit content this week. \n\nSorry, not sorry.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 50,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-at-raise-summit-2026-activity-7480154921791537154-w3Om?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480154921023979521",
                            "attachments": [
                                {
                                    "id": "D5610AQFG7bzdLEPB-w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFG7bzdLEPB-w/mp4-720p-30fp-crf28/B56Z87ZP5SGUBk-/0/1783407903801?e=1787648400&v=beta&t=1PQts79cZpjwgqUiuOjq1crE3TViOUKwxL-13yXeds0",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-07T07:05:07.913Z",
                            "reaction_counter": 35,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7479992440754700288",
                            "date": "1mo",
                            "text": "The AI industry has been treating inference like it's one workload. It's not.\n\nPrefill is compute-bound — GPUs excel here.\nDecode is memory-bound — that's where our RDUs shine.\n\nDisaggregated inference means running these phases on separate, purpose-built hardware instead of forcing one chip to do both.\n\nThe result is higher utilization, lower latency, and more workloads served from the same infrastructure footprint.\n\nGet a deep dive into disaggregated inference in our blog ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-ai-industry-has-been-treating-inference-activity-7479992440754700288-UqJw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7479992440754700288",
                            "attachments": [
                                {
                                    "id": "D5610AQGS02HcmLp2xw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGS02HcmLp2xw/image-shrink_480/B56Z85FeD0JoAU-/0/1783369163310?e=1787648400&v=beta&t=yi7ABb36EwefyKTpY-mVts935nu0rHb7bmm-2tAVnvs",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 6,
                            "parsed_datetime": "2026-07-06T20:19:29.415Z",
                            "reaction_counter": 34,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478911749304385536",
                            "date": "1mo",
                            "text": "Scientific discovery is entering a new AI era and we're proud to help make it possible. \n\nSambaNova is honored to be part of U.S. Department of Energy (DOE)'s Genesis Mission Consortium.\n\nWe're excited to be part of what's next. 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 125,
                                    "length": 31
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-is-proud-to-be-part-of-the-genesis-activity-7478911749304385536-Y6qx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478911748402532354",
                            "attachments": [
                                {
                                    "id": "D5610AQH_1TKK-aINhQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQH_1TKK-aINhQ/mp4-720p-30fp-crf28/B56Z8pulwXGsBk-/0/1783111508197?e=1787648400&v=beta&t=vvxQNPNrqPPIH_UAf2WkdTyYXMrM7bYlnU1hFZH6_M4",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-03T20:45:12.495Z",
                            "reaction_counter": 46,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478514387838869504",
                            "date": "1mo",
                            "text": "\"As the cost of tokens continue to rise because the infrastructure is so expensive, people are looking for alternatives. So at SambaNova, we come in with a much lower-cost infrastructure, much higher performance. We drive it at 10 kilowatts, an order of magnitude lower power than the traditional GPUs.\" — Rodrigo Liang\n\nDuring his chat with Matthew Miller on Bloomberg Television, Rodrigo explained how we're able to make AI more affordable: disaggregated inference. \n\nInstead of relying on a single architecture, it combines GPUs for prefill, RDUs for high-speed decode, and CPUs for orchestration, allowing each processor to do what it does best.\n\nThe result is faster inference, lower latency, and significantly lower-cost tokens for enterprises and service providers deploying AI at scale.\n\nThis architecture powers the world's first commercially available disaggregated inference cloud, including VC2, helping organizations bring AI into production with better performance and better economics.\n\nWatch their conversation below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 306,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADCXPQBV4-dwxYf-N10E0HFwkxWGgOLRBg",
                                    "start": 342,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/bloombergtelevision/",
                                    "start": 360,
                                    "length": 20
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_making-ai-more-affordable-with-disaggregated-activity-7478514387838869504-D9H_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478514385741717504",
                            "attachments": [
                                {
                                    "id": "D5610AQGN-tKqZUEVKA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGN-tKqZUEVKA/mp4-720p-30fp-crf28/B56Z8kE_zqGcBk-/0/1783016756370?e=1787648400&v=beta&t=oaIyo4g4AdOQTHR7EJ6_QDC13wEHLBiov64JOkPW0Eg",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-02T18:26:14.139Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478207144148873217",
                            "date": "1mo",
                            "text": "\"Where dataflow comes in is... you can actually just flush these things like a river flushes through their own environment with a very fast pace.\" - Rodrigo Liang \n\nOne of the biggest challenges in AI today isn't the model, it's getting data to the right place at the right time.\n\nThat's where dataflow architecture comes in, helping eliminate memory bottlenecks and unlock faster, more efficient inference at scale. 🦾 \n\n🎥: Forbes",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 149,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 424,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-dataflow-architecture-that-could-dethrone-activity-7478207144148873217-T1r5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7478207142835998720",
                            "attachments": [
                                {
                                    "id": "D5610AQEexi1jC25Quw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEexi1jC25Quw/mp4-720p-30fp-crf28/B56Z8fttzEHcBk-/0/1782943511022?e=1787648400&v=beta&t=bE_pbhz6sRluEUrOlDZ-nHq3GFAgO5gztH4q9Nfsq5A",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-01T22:05:21.535Z",
                            "reaction_counter": 67,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478163551086551040",
                            "date": "1mo",
                            "text": "Your Claude Code just got even faster thanks to SambaCloud's latest update. ⚡️\n\nDevelopers get instant access to our high-performance inference via the Anthropic SDK—no code changes required.\n\nRead more in our blog ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/claude/",
                                    "start": 5,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_your-claude-code-just-got-even-faster-thanks-activity-7478163551086551040-4mBt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7478163551086551040",
                            "attachments": [
                                {
                                    "id": "D5610AQEcWozzaLK0pg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEcWozzaLK0pg/image-shrink_480/B56Z8fGGxEJoAU-/0/1782933122387?e=1787648400&v=beta&t=OOV6yrh0s-DDuL0OkjSRloBi5v46hJU1dxPnR8A8dBU",
                                    "size": {
                                        "width": 480,
                                        "height": 252
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-01T19:12:08.139Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7477788323340558336",
                            "date": "1mo",
                            "text": "Say bonjour to our team at RAISE Summit 🇫🇷\n\nWe'll be talking about why one chip isn't enough anymore, and why the future of AI inference is all about using the right chip for the right workload.\n\nAI agents are changing what's required from infrastructure. Long contexts, multi-step reasoning, and continuous tool use demand a different approach to inference than traditional GPU-only architectures.\n\nThat's why we're building premium inference with disaggregated infrastructure:\n• GPUs for prefill\n• RDUs for high-speed decode\n• CPUs to orchestrate the agent loop\n\nFaster inference, higher throughput, and better economics.\n\nSee you in Paris: https://lnkd.in/gv7b3jrq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 27,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_sambanova-at-raise-summit-2026-activity-7477788323340558336-XSyw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7477788289928822784",
                            "attachments": [
                                {
                                    "id": "D5605AQF7yVO6LOebGw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF7yVO6LOebGw/mp4-720p-30fp-crf28/B56Z8Zw1VQGUCA-/0/1782843661149?e=1787648400&v=beta&t=DGHINeXMt3e6kvw4COAOCQVdtvVu8BgcmKV-ke_YDxQ",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-30T18:21:06.873Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7477472871444054016",
                            "date": "1mo",
                            "text": "Open-weight models keep getting better and Gemma 4 31B is a great example.\n\nIt combines frontier-class reasoning with production-ready coding performance and native agentic capabilities, making it a strong choice for everything from coding assistants to multi-agent applications.\n\nSome highlights:\n • 89.2% on AIME 2026 (no tools)\n • 80.0% on LiveCodeBench v6\n • Native function calling, structured JSON output, and system prompt support for AI agents\n\nWhen paired with SambaCloud, developers also get the lowest latency available, helping agents respond faster and making interactive AI experiences feel more natural.\n\nWe break down what makes Gemma 4 31B stand out—and why speed matters just as much as model quality.\n\nRead the blog: https://lnkd.in/e-QMY8K5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_gemma-4-31b-running-fastest-on-sambacloud-activity-7477472871444054016-c0hN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7477472833829371904",
                            "attachments": [
                                {
                                    "id": "D5605AQGVP0bRv724iA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGVP0bRv724iA/mp4-720p-30fp-crf28/B56Z8VR7XHG8CA-/0/1782768451311?e=1787648400&v=beta&t=G1va9DTmsqc_XnZjTiRaYULoy_3UPAHEDT_TjGnwALI",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-29T21:27:37.280Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7476275352038821888",
                            "date": "1mo",
                            "text": "Inference is now the defining workload in AI, and that changes the economics of the whole stack. \n\nAt Deep Tech Week SF, SambaNova Chief Product and Strategy Officer Abhi I. put it plainly: Inference is the defining workload for AI now and for the future. \n\nHe further emphasized that training is a cost center; inference is where you make money. As such, hardware has to be purpose built for the task at hand. It’s not a one-size-fits-all story anymore. \n\nHeterogeneity is the order of the day: a combination of chips and networking that produces the best results. And, a combination of models—frontier and open source, large and small—that are fit to the task.\n\nDisaggregated inferencing is the right architecture for the Agentic Era. GPUs handle the prefill stage, SambaNova's RDUs handle decode, and CPUs orchestrate and run the tools. That is what lets you serve premium tokens, run the largest models running fast, with the power efficiency communities demand, at a TCO that works for the enterprise. \n\nAs Abhi says, “More intelligence per joule — that’s the strategy.” It’s about achieving the lowest possible power consumption and deploying into existing data centers (air cooled). \n\nAbhi was joined by Rajiv K. of Velaura AI on the power layer and Barun Kar of Upscale AI on the networking layer, in a conversation moderated by Sriram Viswanathan of Celesta Capital. \n\nThree companies, three layers of the stack, one shared view: the GPU-centric, vertically integrated stack is the bottleneck, and purpose-built, heterogeneous infrastructure is the answer for the defining workload in AI - inferencing.\n\nThank you to Celesta Capital for hosting.\n\nLip-Bu Tan's Fireside Chat with Michael E Marks was a conversation between two silicon valley veterans full of wise advice to startup founders, such as “Stay flexible and adjust your trajectory if customers and markets change.”  We at SambaNova appreciate the call out for the success we are having from both of them and take their advice to heart.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/deep-tech-weeks/",
                                    "start": 102,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAUqWcBk5WNMPdf1327zuAarRDPnDokPag",
                                    "start": 166,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABLn0BbUB6-WUkr6gRjFJ8iZxgXVI_p1E",
                                    "start": 1211,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/velaura-ai-inc/",
                                    "start": 1223,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABPcawBGhfstGcDfzQdbIrMSGkLoLXsbF4",
                                    "start": 1257,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/upscale-ai-inc/",
                                    "start": 1270,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAQCV0ByC9Coi5GCb3rfXMZig-ZjvfU4Ug",
                                    "start": 1337,
                                    "length": 18
                                },
                                {
                                    "url": "https://www.linkedin.com/company/celestacapital/",
                                    "start": 1359,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 1656,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAH4luwBwRadBOfgI2_nyHsySN9jOhxbF68",
                                    "start": 1688,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-is-now-the-defining-workload-in-activity-7476275352038821888-tmHr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7476275350767960065",
                            "attachments": [
                                {
                                    "id": "D5622AQEnWV3l5YR92w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEnWV3l5YR92w/feedshare-shrink_480/B56Z8EQz9HGgAg-/0/1782482944028?e=1788393600&v=beta&t=WtfvXTip9XaDp45cdW1K9lJuYdn3DGTwPRXM9_K9X2Y",
                                    "size": {
                                        "width": 480,
                                        "height": 342
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQG4kh42i50uVQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4kh42i50uVQ/feedshare-shrink_800/B56Z8EQ0ASLAAc-/0/1782482944803?e=1788393600&v=beta&t=hNtrVy6SF2kvcrEfK0VM6DRlLTo4krYVmPcQ-eYwgi8",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGP3Lx8Gu4OTw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGP3Lx8Gu4OTw/feedshare-shrink_800/B56Z8EQ0BXG0Ac-/0/1782482944890?e=1788393600&v=beta&t=f6wwg8O1l0LQMhUnVDgNVTcA8zPXMhfgGpYX8wVIgVk",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-06-26T14:09:06.405Z",
                            "reaction_counter": 68,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7476025118805098496",
                            "date": "1mo",
                            "text": "\"You need premium because your models are bigger, your models are lower latency, your models are much higher throughput.\" — Rodrigo Liang\n\nThe bigger opportunity is better inference. Faster tokens. Better efficiency. Lower cost. That's what makes AI agents practical at scale.\n\nThanks Akash Pasricha The Information TITV for the great conversation on where AI infrastructure is headed. 🦾 \n\nVista Equity Partners",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 124,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAxbjWYBnLfpAW8BkbmudVjYPIzKV4BV1Ig",
                                    "start": 285,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/theinformation/",
                                    "start": 300,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 390,
                                    "length": 21
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_you-need-premium-because-your-models-are-activity-7476025118805098496-aey9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7476025025683271681",
                            "attachments": [
                                {
                                    "id": "D5605AQH9nMXyL4OuUQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQH9nMXyL4OuUQ/mp4-720p-30fp-crf28/B56Z8AtLXAIUB8-/0/1782423279823?e=1787648400&v=beta&t=Q0U1iQL_eNeK1ueHg1kDk-zyjxrXVtIfOzGvk7j4c54",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-25T21:34:46.153Z",
                            "reaction_counter": 46,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475978091325050880",
                            "date": "1mo",
                            "text": "June was all about faster agents, premium inference, and the next gen of AI infrastructure ⚡️\n\nTL;DR:\n- The first disaggregated inference demo for AI agents is live\n- Gemma 4 31B is running fastest on SambaCloud\n- Customers are scaling AI faster with SambaNova\n- Meet us in Paris in July\n\n🔗 https://lnkd.in/ebtBBCSD",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7475974544864858112",
                                "url": "https://www.linkedin.com/pulse/sambanova-lightning-digest-june-2026-sambanova-e7ytc?trackingId=0m%2BycC2O1Kc%2ByNyl8Bw37A%3D%3D",
                                "title": "SambaNova Lightning Digest | June 2026",
                                "author": "SambaNova",
                                "excerpt": "Agentic AI lives or dies on inference speed, and this month we are pushing it forward. We have made Gemma 4 31B run fast on SambaCloud, giving you a t...",
                                "published_at": "2026-06-25T18:13:48.386Z"
                            },
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_june-was-all-about-faster-agents-premium-activity-7475978091325050880-VlPP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475978090800893955",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-25T18:27:53.928Z",
                            "reaction_counter": 27,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475634647079526402",
                            "date": "1mo",
                            "text": "Our CEO Rodrigo Liang and Vista Equity Partners' Monti Saroya joined The Information TITV today to discuss Vista and Cambium Capital Management's cloud initiative & why inference is becoming the next battleground in AI. \n\nThe future isn't one chip doing everything...it's disaggregated inference, where GPUs, RDUs, and CPUs work together to deliver premium inference at scale. 🦾\n\nWatch their segment below ⬇️ \nhttps://lnkd.in/ghEcapkE",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 26,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/theinformation/",
                                    "start": 69,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 117,
                                    "length": 26
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7475634647973167104",
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-information-titv-june-24-2026-activity-7475634647973167104-Cs7R?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475634647079526402",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7475590994151915520",
                                "date": "1mo",
                                "text": "The Information  |  TITV  |  June 24, 2026\n\nThe Information’s TITV is first in tech news and analysis from the people that break and shape the story. The rest is just commentary. \n\nWatch every weekday at 10 am PT/ 1 ET on The Information.com, App, YouTube, X—and on demand wherever you get your podcasts.",
                                "author": {
                                    "id": null,
                                    "name": "The Information",
                                    "is_company": true,
                                    "public_identifier": "theinformation"
                                },
                                "parsed_datetime": "2026-06-24T16:49:42.770Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-24T19:43:10.439Z",
                            "reaction_counter": 23,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-24T19:43:10.652Z"
                        },
                        {
                            "id": "7475227864615911424",
                            "date": "1mo",
                            "text": "Paris views. AI inference conversations. 🇫🇷\n\nSambaNova and MiniMax are bringing together founders, builders, and innovators for an exclusive rooftop reception overlooking the Pantheon.\n\nRSVP below ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 59,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_paris-views-ai-inference-conversations-activity-7475227864615911424-krFA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475227864020398080",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-23T16:46:45.942Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7474939695018237954",
                            "date": "1mo",
                            "text": "Our work with Argonne National Laboratory continues to grow 🦾\n\nThe Argonne Leadership Computing Facility’s new Inference Service helps close the gap between building AI models & putting them to work for science, giving researchers shared, large-scale inference without having to manage their own infrastructure.\n\nAlready supporting teams working on the U.S. Department of Energy (DOE)'s Genesis Mission, this latest deployment builds on a long-standing partnership with Argonne and brings even more infrastructure online for accelerated discovery.\n\nProud to keep pushing the frontier together 🚀\n\n📸 Photo courtesy of Argonne National Laboratory",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/argonne-national-laboratory/",
                                    "start": 14,
                                    "length": 27
                                },
                                {
                                    "url": "https://www.linkedin.com/company/energy/",
                                    "start": 353,
                                    "length": 31
                                },
                                {
                                    "url": "https://www.linkedin.com/company/argonne-national-laboratory/",
                                    "start": 616,
                                    "length": 27
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-work-with-argonne-national-laboratory-activity-7474939695018237954-Jouz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7474939695018237954",
                            "attachments": [
                                {
                                    "id": "D5622AQEW0ep3Epfpgg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEW0ep3Epfpgg/feedshare-shrink_800/B56Z7xSCtsIMAc-/0/1782164499726?e=1788393600&v=beta&t=ul00jr2yALxVVWCH7q30D6o1q1b8eC10ne254e4pz4U",
                                    "size": {
                                        "width": 800,
                                        "height": 653
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-22T21:41:40.956Z",
                            "reaction_counter": 80,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473792984124157952",
                            "date": "1mo",
                            "text": "Our very own Anton McGonnell took the stage at  COMPUTEX 2026 to explain why agentic AI needs more than one kind of chip. \n\nInference may look like one job. For agentic AI, it's actually three, and today most setups cram all three onto a single type of chip.\n\nDisaggregated inference breaks the three jobs apart and runs each on the chip built for it. \n\nHere's what that looks like: \n\n1️⃣ Prefill reads and understands the input: the prompt, the codebase, the files. It's compute-heavy and parallel, and GPUs handle it well. \n\n2️⃣ Decode generates the answer one token at a time, which is a memory-bound problem with a completely different profile. The handoff from prefill to decode is one clean exchange, the KV cache.\n\n3️⃣ For agents there's a third job, orchestration and tool calling, which runs on the CPU. \n\nPrefill on the GPU, decode on the SambaNova RDU, orchestration on the CPU. \n\nForce one chip to do all three and you compromise on each. \n\nIf you don’t have the right chip for the right job, you can’t do agentic AI well or cost effectively. \n\nWatch the clip 👇",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 13,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/computextaipei/",
                                    "start": 48,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-very-own-anton-mcgonnell-took-the-stage-activity-7473792984124157952-lcs_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7473510127711436800",
                            "attachments": [
                                {
                                    "id": "D5605AQF5r2D5wj6E5Q",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF5r2D5wj6E5Q/mp4-720p-30fp-crf28/B56Z7c98bQHcB8-/0/1781823705479?e=1787648400&v=beta&t=TyYV3t9bI8Z-46xctaSxON8RYyDvLTzutMh2IAsEeTc",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-19T17:45:03.774Z",
                            "reaction_counter": 40,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473437522669445120",
                            "date": "1mo",
                            "text": "One chip to rule them all? No thanks.\n\nAI inference isn't one workload, it's a series of very different jobs. That's why companies are pairing GPUs, RDUs, and CPUs together, letting each do what it does best.\n\nThe next generation of inference is about matching the right chip to the right task, because no single architecture wins every leg of the race. 🦾\n\nLet's chat about it in Paris at RAISE Summit 2026: https://lnkd.in/gv7b3jrq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 389,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_one-chip-to-rule-them-all-no-thanks-ai-activity-7473437522669445120-D5nu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7473437522669445120",
                            "attachments": [
                                {
                                    "id": "D5622AQG4AhWM7xWnDg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4AhWM7xWnDg/feedshare-shrink_800/B56Z7b7p0dIoAg-/0/1781806354100?e=1788393600&v=beta&t=x9OVCtfVyuNi8gpyHYZRRAP2Wm7uhy1oUzWeaMwa3-s",
                                    "size": {
                                        "width": 800,
                                        "height": 800
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 8,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-18T18:12:35.159Z",
                            "reaction_counter": 51,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472774294125694976",
                            "date": "2mo",
                            "text": "An evening above Paris. ✨\n\nJoin SambaNova and MiniMax for an exclusive rooftop reception featuring incredible views, great conversations, and the opportunity to connect with fellow AI builders, founders, and innovators.\n\nRSVP: https://lnkd.in/gTWtze_m",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8136203128470111684",
                                "url": "https://luma.com/jacuxzd6?tk=vl1kFT",
                                "title": "Inference Above Paris · Luma",
                                "author": "luma.com",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQHbnjSMG73GSA/articleshare-shrink_480/B56Z7SgmYoIoAc-/0/1781648222013?e=1787648400&v=beta&t=HhchQ5c1xpQ8d3FAUj5HNj9w_wPUjXJI2RxffZiwFxw",
                                "published_at": "2031-06-21T15:26:29.171Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/minimax-ai/",
                                    "start": 46,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-above-paris-luma-activity-7472774294125694976-12Zv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7472774294125694976",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 5,
                            "parsed_datetime": "2026-06-16T22:17:09.152Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472720361340465152",
                            "date": "2mo",
                            "text": "Raise your hand if you're ready for #RAISE2026 🙌 \n\nThe next era of AI isn't just bigger models. It's smarter infrastructure.\n\nInference 2.0 uses disaggregated inference to route each phase of AI processing to the hardware that does it best, unlocking faster, more efficient AI agents.\n\nLet's talk about it in Paris.\n\nhttps://lnkd.in/ejGEgazZ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_inference-20-activity-7472720361340465152-lRbN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7472720324002762752",
                            "attachments": [
                                {
                                    "id": "D5605AQHK4BQyIdzzoA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHK4BQyIdzzoA/mp4-720p-30fp-crf28/B56Z7RvizRIoB8-/0/1781635364310?e=1787648400&v=beta&t=IMv5eJ2dfc1g2aYy5IRsS66VzxCb4ROI8iyHzyoHKtQ",
                                    "size": {
                                        "width": 720,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-16T18:42:50.574Z",
                            "reaction_counter": 42,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7472407087843561472",
                            "date": "2mo",
                            "text": "What is disaggregated inference for AI agents?\n\nAI inference has two distinct phases:\n\n• Prefill: processing the prompt, context, files, and inputs\n• Decode: generating tokens one at a time\n\nTraditionally, both run on the same hardware. Disaggregated inference takes a different approach, routing each phase to the chip best suited for the job.\n\n⚡ GPUs handle prefill\n🔥 SambaNova RDUs handle decode\n\nBy matching the workload to the right architecture, AI agents can run faster and more efficiently at scale. 🦾 \n\nhttps://lnkd.in/eF8k3T6T",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_disaggregated-inference-activity-7472407087843561472-39_E?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7472407046747746304",
                            "attachments": [
                                {
                                    "id": "D5605AQFbe0dJu3l4BA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFbe0dJu3l4BA/mp4-720p-30fp-crf28/B56Z7NSoFSJACA-/0/1781560676005?e=1787648400&v=beta&t=1e2WgT9nrxlftenKwqcRhhEuY08JGRb-y3w7Qut9yGo",
                                    "size": {
                                        "width": 720,
                                        "height": 746
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-15T21:58:00.352Z",
                            "reaction_counter": 48,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7471305347547283457",
                            "date": "2mo",
                            "text": "Hot take 2: the software stack is where AI infrastructure is actually won or lost.\n\nToday we're thrilled to welcome Rich Heaton as SambaNova's new EVP of Software. 🙌\n\nRich has spent his career doing one thing exceptionally well: building world-class software organizations that ship at scale, under pressure, against the best competition in the industry. That's exactly the assignment at SambaNova.\n\nOur inference platform is powering some of the most demanding AI deployments in the world — and customer demand is only accelerating. Rich's job is to make sure our software scales with every bit of that ambition.\n\nRich, SambaNova is lucky to have you. Let's get to work. 🔥\nhttps://lnkd.in/gv2w3pjF",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABrSe8Bnbw7nqkNw8RzJrm-6-FIlscnGAw",
                                    "start": 116,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-2-the-software-stack-is-where-ai-activity-7471305347547283457-ehhc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7471305347547283457",
                            "attachments": [
                                {
                                    "id": "D5622AQGez8YeNJHA3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGez8YeNJHA3A/feedshare-shrink_800/B56Z69KH1dHUAc-/0/1781290008169?e=1788393600&v=beta&t=FmYHXeSElw3-ruUqVPiK0fv0zCGMSLjEokqoVxyg0ME",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 37,
                            "parsed_datetime": "2026-06-12T21:00:04.996Z",
                            "reaction_counter": 248,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7471215799098085376",
                            "date": "2mo",
                            "text": "Hot take: great companies are built and scaled by great finance leaders!\n\nToday we're thrilled to welcome Matt Padfield as SambaNova's new Chief Financial Officer. 🙌\n\nMatt has spent his career turning high-growth technology companies' finances into a genuine competitive advantage — at Synaptics, Lumentum, Coherent, and beyond. He knows how to build the operational backbone a fast-moving company needs, and that's exactly what we're asking him to do.\n\nCustomer demand for our inference platform is accelerating. The market opportunity is real. And now we have exactly the right person to help us scale intelligently and ambitiously.\n\nMatt, SambaNova is lucky to have you. Let's get to work. 🔥\n\nhttps://lnkd.in/gv2w3pjF",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAYnL2IBTk7rpg5G_LZBG8Wzs_q_hxqpa8E",
                                    "start": 106,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_hot-take-great-companies-are-built-and-scaled-activity-7471215799098085376-bomF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7471215799098085376",
                            "attachments": [
                                {
                                    "id": "D5622AQG18UuOk2waPw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG18UuOk2waPw/feedshare-shrink_800/B56Z68XLd2IoAc-/0/1781276653690?e=1788393600&v=beta&t=zwh0TMfE5ojMy_9XuPT6HQwZ7Pz2QppsIPfwew2uCWI",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 54,
                            "parsed_datetime": "2026-06-12T15:04:14.982Z",
                            "reaction_counter": 257,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470898832520830976",
                            "date": "2mo",
                            "text": "Gemma 4 31B is now running on SambaCloud, and according to Artificial Analysis, it's the fastest place to run it.\n\nWhy does that matter?\n\nBecause Gemma 4 31B is one of the most capable open models available today. It combines frontier-level reasoning, strong coding performance, multimodal capabilities, and native support for agentic workflows in a single open-weight model.\n\nOn SambaCloud, developers can take advantage of:\n\n⚡ The fastest Gemma 4 31B inference speeds available\n🧠 Advanced reasoning with configurable thinking mode\n🤖 Native function calling, structured JSON output, and agent-ready workflows\n👁️ Multimodal support for text and image understanding\n\nWhether you're building AI agents, code assistants, document intelligence systems, or production applications, latency matters. Faster models create better user experiences and unlock entirely new classes of applications.\n\nWe break down the benchmarks, capabilities, and why speed is becoming one of the most important differentiators in AI infrastructure.\n\nRead the full blog below 👇\nhttps://lnkd.in/gyE5iW98",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "6930037481944098972",
                                "url": "https://sambanova.ai/blog/gemma-4-31b-running-fastest-on-sambacloud?utm_source=linkedin&utm_medium=organic&utm_content=blog-announcement",
                                "title": "Gemma 4 31B Runs Fastest on SambaCloud",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQEE5jmDQUYh4A/articleshare-shrink_800/B4DZ8WUQlmK8A0-/0/1782785838268?e=1787648400&v=beta&t=2SZE9ZNv2FRqo8llO9w_1_qgVFHy8YAi0q5zwjvpxE8",
                                "published_at": "2022-05-11T06:14:49.565Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/artificial-analysis/",
                                    "start": 59,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_gemma-4-31b-runs-fastest-on-sambacloud-activity-7470898832520830976-hN8I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470898832520830976",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 2,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-11T18:04:44.261Z",
                            "reaction_counter": 41,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470898035917598720",
                            "date": "2mo",
                            "text": "Appreciate the brilliant perspective from Dharmesh Thakker General Partner at Battery Ventures.\n\nAs AI adoption accelerates, we're focused enabling customers to run the largest models efficiently while maximizing performance and token output.\n\nGrateful to have partners who share our vision for the future of AI computing.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 42,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/battery-ventures/",
                                    "start": 78,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7470898036601364480",
                            "share_url": "https://www.linkedin.com/posts/sambanova_excited-to-share-perspectives-on-the-future-activity-7470898036601364480-nvRx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470898035917598720",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7470870724161843200",
                                "date": "2mo",
                                "text": "Excited to share perspectives on the future of AI computing with Forbes alongside Rodrigo Liang, CEO of SambaNova, a Battery Ventures portfolio company building at the forefront of the AI inference wave! \n \nThe move from training to inference is already mainstream. We’re now in the midst of an unprecedented imbalance with $3T capex committed towards 100GW of new datacenter capacity by 2030, but limited by power constraints and NIMBY opposition slowing down buildouts. Frontier models and open source models are now routinely running into 5-10T parameters, while the industry’s memory shortage makes it difficult to fit large models into existing silicon solutions.\n\nExcited to be part of SambaNova’s journey where our memory-optimized inference solutions enable massive models to generate premium tokens in a power-constrained environment! Existing urban cloud datacenters with standard air-cooling can be retrofitted with SambaNova's chips unlocking new token supply the market desperately needs. \n\nGreat to see the partnerships with Intel, Vista Equity Partners, and Cambium Capital Management to enable this new generation of memory and power-optimized inference silicon. Look fwd to the growth journey ahead with the SambaNova team!",
                                "author": {
                                    "id": "ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "name": "Dharmesh Thakker",
                                    "is_company": false,
                                    "public_identifier": "dthakker"
                                },
                                "parsed_datetime": "2026-06-11T16:13:02.706Z"
                            },
                            "repost_counter": 2,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-11T18:01:34.336Z",
                            "reaction_counter": 38,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-11T18:01:34.499Z"
                        },
                        {
                            "id": "7470611500789821441",
                            "date": "2mo",
                            "text": "When the team from Forbes came to our San Jose headquarters, the conversation quickly became about more than just chips.\n\nIt became a discussion about the future of AI and what it actually takes to run it at scale.\n\nAs AI adoption accelerates, the challenge is no longer training models, it’s inference: running models efficiently, reliably, and fast enough to power the next generation of agentic applications.\n\nAs our CEO and Founder Rodrigo Liang put it:\n “It's much lower power, much smaller footprint, and it's faster than anybody else. What's not to like?”\n\nAnd as Dharmesh Thakker General Partner of Battery Ventures explained:\n\"The technology that SambaNova has is very complimentary to what Intel has because most AI data centers need a combination of CPUs and GPUs.\"\n\nA big thank you to Anton McGonnell and Vasanth Mohan for helping bring this story to life and for the thoughtful conversations throughout the day.\n\nWe’re excited about what this shift means in practice, from premium inference and agentic AI to more efficient, sustainable data center infrastructure that lets enterprises deploy AI at scale, not just experiment with it.\n\nAnd thank you to Kirsten Taggart and the team at Forbes for spending the time with us and taking a deeper look at what we’re building.\n\n🎥  Watch the full feature below.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 19,
                                    "length": 6
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 436,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWo-cBBwrYoKxyC04rfmFNbWki2hgp9Ro",
                                    "start": 571,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/battery-ventures/",
                                    "start": 607,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 700,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 797,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAACDok4EBPpH_NMs5r78lIsI0cMY4Ij09-qA",
                                    "start": 817,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAOczs8B8HR6XeT9RzAoJ2FDPdUyjkp_vLM",
                                    "start": 1166,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/forbes-magazine/",
                                    "start": 1198,
                                    "length": 6
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-future-of-ai-isnt-training-its-inference-activity-7470611500789821441-c9ns?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470611236733231105",
                            "attachments": [
                                {
                                    "id": "D5605AQHUlYUsKeMqsg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHUlYUsKeMqsg/mp4-720p-30fp-crf28/B56Z6zxX2dHUB8-/0/1781132572819?e=1787648400&v=beta&t=mykiCJAoKqc9SAAPFBLmRYy133wYD4PFNfj5_-DCudw",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 13,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-10T23:02:59.038Z",
                            "reaction_counter": 136,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470592620172431360",
                            "date": "2mo",
                            "text": "Great conversations, great people, and plenty of big ideas about what's next for AI at Fortune Brainstorm Tech.\n\nWe especially loved seeing Robert F. Smith and Rodrigo Liang showing off our chip 😎🔥",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 87,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 140,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 160,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_great-conversations-great-people-and-plenty-activity-7470592620172431360-lkBe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470592619203432448",
                            "attachments": [
                                {
                                    "id": "D5622AQEzeXgmJRMISA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEzeXgmJRMISA/feedshare-shrink_800/B56Z6zgZHSGcAg-/0/1781128075829?e=1788393600&v=beta&t=BEV7cx9HZeY4vCNy68AoNW_nPCNbTjhl4ecc2it2kmU",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQHwKSwdxIijXQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHwKSwdxIijXQ/feedshare-shrink_800/B56Z6zgZLfIUAc-/0/1781128075651?e=1788393600&v=beta&t=F5SXTtJHZWDOe172psUNsCtHfXD22sYkqwRCnz-oI5o",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQGdomUuBF0P8A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGdomUuBF0P8A/feedshare-shrink_800/B56Z6zgZHkGoAc-/0/1781128075232?e=1788393600&v=beta&t=pEfZOyjTkEe5xIyZ7NFkKyWYjnsy4ob4F7zYhZGm-mQ",
                                    "size": {
                                        "width": 800,
                                        "height": 1067
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-10T21:47:57.548Z",
                            "reaction_counter": 39,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470507030538108928",
                            "date": "2mo",
                            "text": "\"We’re getting two to 3x better than the [Nvidia] Blackwells [GPUs] on the exact same models, and so we think that at scale that’s the way to at least bring the cost down.\" - Rodrigo Liang\n\nOne of the most interesting parts of Rodrigo Liang's conversation with Sara Hooker and Jeremy Kahn at Fortune Brainstorm Tech was the mix of perspectives on stage. Jeremy's questions cut through the hype and got right to the bigger shifts happening across AI, while Sara shared an important perspective on why the future of AI can’t just be about building bigger models, but also about efficiency, adaptability, and systems that can continuously evolve.\n\nTogether with Rodrigo Liang, the conversation explored a question the industry is starting to wrestle with more seriously: how do we build AI systems that deliver more intelligence with dramatically better efficiency at scale?\n\nA few themes stood out:\n• AI is moving from a training-first mindset into an inference-first reality\n• Efficiency is quickly becoming one of the biggest competitive advantages in AI\n• The future stack won’t be one-size-fits-all, it will be purpose-built for different workloads\n\nRead this great recap of their discussion from Sharon Goldman: https://lnkd.in/e-AEVz32",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 175,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 227,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAQGenIBEWqX0P76BgWCv2fCpClH6SyfYMY",
                                    "start": 261,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAA0ruw0BbuW0X2plb8fqaPFfU52oUkTA7Xo",
                                    "start": 277,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 292,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 659,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAA7ZrMB5heap3Zo84th9xa0rP-7ZgtiwKI",
                                    "start": 1199,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_were-getting-two-to-3x-better-than-the-activity-7470507030538108928-MDAb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470507030538108928",
                            "attachments": [
                                {
                                    "id": "D5622AQFhQBeC53Vz9Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFhQBeC53Vz9Q/feedshare-shrink_800/B56Z6ySjn6JoAc-/0/1781107669764?e=1788393600&v=beta&t=qTdJKpqKVJJ-AO3L8GbllH3Cit0S5xozcMpYq8gu27M",
                                    "size": {
                                        "width": 800,
                                        "height": 533
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-10T16:07:51.389Z",
                            "reaction_counter": 77,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470243433035657216",
                            "date": "2mo",
                            "text": "What actually happens during AI inference?\n\nThis video breaks down how RDUs, memory architecture, and multi-level parallelism work together to generate thousands of tokens in parallel across racks.\n\nBuilt for scalable, real-world AI inference 🦾\n\nLearn more: https://lnkd.in/evC2StBQ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_rdu-reconfigurable-dataflow-unit-activity-7470243433035657216-wLFw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470243356757938176",
                            "attachments": [
                                {
                                    "id": "D5605AQHtX-AF0MB8qw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHtX-AF0MB8qw/mp4-720p-30fp-crf28/B56Z6uixRXIoB8-/0/1781044818140?e=1787648400&v=beta&t=-VxF24LsI0tMwQ8KlOWt9pDIWTXAeEManUK-RjDHCO4",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 6,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-09T22:40:24.847Z",
                            "reaction_counter": 52,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470174437754142722",
                            "date": "2mo",
                            "text": "What happens when you match the right chip to the right stage of inference?\n\nAt #Computex, we demonstrated premium inference for AI agents running live inside the new VC2 data center.\n\nUsing NVIDIA B200 GPUs for prefill, SambaNova RDUs for decode, and CPUs for orchestration, the system delivered up to 2X the inference speed of B200-only configurations.\n\nThe demo highlights where AI infrastructure is heading next: heterogeneous systems optimized for real-world agentic workloads 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_same-prompt-same-model-two-stacks-activity-7470174437754142722-CVdS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7470174383928528897",
                            "attachments": [
                                {
                                    "id": "D5605AQEk1fnU2Uwx8w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQEk1fnU2Uwx8w/mp4-720p-30fp-crf28/B56Z6tkCABJMCA-/0/1781028368743?e=1787648400&v=beta&t=gBRzkShaPxuPs5pNVZ1T5TEzuKqY9IBSw-Vpc6YN5S0",
                                    "size": {
                                        "width": 1280,
                                        "height": 720
                                    },
                                    "type": "video",
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 3,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-09T18:06:15.090Z",
                            "reaction_counter": 30,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7469833131483635712",
                            "date": "2mo",
                            "text": "\"VC2 is the largest commercial deployment of SambaNova technology in our history, and we're proud to partner with the industry's strongest leaders.\" - Lip-Bu Tan\n\nAgentic AI is changing infrastructure requirements and the industry is moving beyond one-size-fits-all compute.\n\nExcited to see the launch of Vector Core Compute (VC2), the world’s first commercially available disaggregated inference cloud combining CPUs, GPUs, and our RDUs in production.\n\nRead more: https://lnkd.in/g9byhHvq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8862463306152232245",
                                "url": "https://itbrief.co.uk/story/vista-launches-vector-core-compute-for-ai-inference",
                                "title": "Vista launches Vector Core Compute for AI inference",
                                "author": "itbrief.co.uk",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQGkt5Y2hO2H-w/articleshare-shrink_800/B56Z6oSq7DKQAc-/0/1780939928689?e=1787648400&v=beta&t=g5rPD3iRZdHWHPuVddXLd-6laVTiIc-vfDY_EuH4IkM",
                                "published_at": "2036-12-15T17:45:08.792Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 151,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_vista-launches-vector-core-compute-for-ai-activity-7469833131483635712-XPAn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7469833131483635712",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-08T19:30:01.334Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7469746320929603585",
                            "date": "2mo",
                            "text": "Premium inference, but make it comics 🦾\n\nWe had a great time at the Avnet SKO with our CRO Harry Ault talking about the future of AI infrastructure and agentic workloads, plus a few SambaNova superheroes making an appearance. \n\nAlways a fun time partnering with Avnet!\n\nNicole Siegal Fuselier Michael Kearney",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAf9ZkBKVHsilpUk0Mp5DDq82zXy9ANQSg",
                                    "start": 91,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 270,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAeKakBlHAobBzukr_ci3b5umHuht5z2cE",
                                    "start": 293,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_premium-inference-but-make-it-comics-activity-7469746320929603585-QPIw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7469742032446668800",
                            "attachments": [
                                {
                                    "id": "D5622AQH9OGpsEh5MEg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQH9OGpsEh5MEg/feedshare-shrink_480/B56Z6nay5MKAAg-/0/1780925280732?e=1788393600&v=beta&t=lb6yohlmAipUDGo9hOYfk6iRC4g-2q9kWdqPjU4ITWc",
                                    "size": {
                                        "width": 480,
                                        "height": 788
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQFIrRBCkyjC3Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFIrRBCkyjC3Q/feedshare-shrink_800/B56Z6naypiKAAg-/0/1780925279284?e=1788393600&v=beta&t=K31uwqU1DiTS90YumZCVEFapVJPi1JrzOqLrykofzVc",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQEreEEOC5Q8JQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEreEEOC5Q8JQ/feedshare-shrink_800/B56Z6nayq4JoAg-/0/1780925279686?e=1788393600&v=beta&t=ckQjUzZNlE33UBsFMqMbg-_LL6KlBIHNhfOjcJcqES0",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5622AQHYxBs9tnbSJw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHYxBs9tnbSJw/feedshare-shrink_800/B56Z6naysVIQAc-/0/1780925279722?e=1788393600&v=beta&t=TZ7LZ2frA_Y2sm7sVvBlQ_ZbPCLb52gfXz6Sll5v40c",
                                    "size": {
                                        "width": 800,
                                        "height": 1066
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-08T13:45:04.085Z",
                            "reaction_counter": 74,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468787703854174208",
                            "date": "2mo",
                            "text": "Our CEO Rodrigo Liang joined CNBC Squawk Box Asia to talk about where AI infrastructure is headed next.\n\n• Why heterogeneous AI systems are becoming increasingly important\n• How token speed impacts agentic AI performance\n• The role energy efficiency plays in scaling modern AI workloads\n• And why the next 12 months will be an exciting period for both AI infrastructure and the broader market \n\nhttps://lnkd.in/eXJ4Vmts",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 8,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 29,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_our-ceo-rodrigo-liang-joined-cnbc-squawk-activity-7468787703854174208-JxTQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468787703854174208",
                            "attachments": [
                                {
                                    "id": "D4E22AQGSx7OgiHli3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E22AQGSx7OgiHli3A/feedshare-shrink_480/B4EZ6Z211CLAAg-/0/1780697751172?e=1788393600&v=beta&t=qgubl7trY-igN0JUWvDn5LXX4nb_7eToGXJ9NbixP1c",
                                    "size": {
                                        "width": 480,
                                        "height": 270
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T22:15:51.964Z",
                            "reaction_counter": 73,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468703087155728384",
                            "date": "2mo",
                            "text": "AI is moving fast, and the conversation is changing with it.\n\nAt Fortune Brainstorm Tech, our CEO Rodrigo Liang will join a discussion on what the next generation of AI infrastructure should actually look like, from energy efficiency to smarter systems built for real-world AI 🦾\n\n📍 “From the AI We Have to the AI We Need”\n🕥 10:20 –10:40 AM\n\nhttps://lnkd.in/gWuANCRC",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/fortune/",
                                    "start": 65,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 98,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ai-is-moving-fast-and-the-conversation-is-activity-7468703087155728384-EnJ1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468703087155728384",
                            "attachments": [
                                {
                                    "id": "D5622AQEq3A2dsXXc2g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEq3A2dsXXc2g/feedshare-shrink_800/B56Z6Yp4iaJwAc-/0/1780677577062?e=1788393600&v=beta&t=TOxCCsksHSBm34ZHSByh2VxA0tYaCWcY4bAo5DqN2d4",
                                    "size": {
                                        "width": 800,
                                        "height": 418
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T16:39:37.771Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468670469534027776",
                            "date": "2mo",
                            "text": "Multi-agent systems are changing how AI work gets done 🦾\n\nJoin our own Kwasi Ankomah for a deep dive into orchestration patterns, parallel execution, recursive workflows, and live demos of production-ready AI agents.\n\nDon’t miss it 👇",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAMLrB4BX-kBxxAOmJ3xDKxQgWhqZ-mkJJk",
                                    "start": 71,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7468670469534027776",
                            "share_url": "https://www.linkedin.com/posts/sambanova_single-ai-agents-work-until-the-workflows-activity-7468670469534027776-BkZP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468670469534027776",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7466247018647318528",
                                "date": "2mo",
                                "text": "Single AI agents work… until the workflows get complex.\n\nModern AI systems are shifting toward multi-agent architectures that can reason, coordinate, and scale more effectively in production environments.\n\nJoin Kwasi Ankomah, Lead AI Architect at SambaNova Systems, as we dive into:\n• Why solo agents fail at scale\n• Multi-agent orchestration patterns\n• Supervisor-worker & writer-critic systems\n• Parallel execution and recursive workflows\n• Live demos of production-ready AI agents\n\n📅10th June 2026 | ⏰ 11 AM Pacific\n\nIf you’re building LLM applications, autonomous agents, or scalable AI workflows, this session is for you.\n\n👉 Register now: https://hubs.la/Q04jqw810",
                                "author": {
                                    "id": null,
                                    "name": "Data Science Dojo",
                                    "is_company": true,
                                    "public_identifier": "data-science-dojo"
                                },
                                "parsed_datetime": "2026-05-29T22:00:05.407Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T14:30:01.124Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-05T14:30:01.124Z"
                        },
                        {
                            "id": "7468483056241319936",
                            "date": "2mo",
                            "text": "As AI agents move from experimentation to production, inference becomes the defining challenge.\n\nThat’s why we're proud to be part of Vector Core Compute (VC2), the world’s first enterprise inference cloud built on a disaggregated architecture that combines CPUs, GPUs, and RDUs to deliver premium inference at scale.\n\nAs Robert F. Smith explains, the future of enterprise software is agentic, and making AI economically sustainable requires a new approach to inference. At SambaNova, we're helping accelerate the most demanding part of the inference stack, enabling higher performance, better efficiency, and lower costs for enterprise AI workloads.\n\nWatch Robert's conversation with CNBC to learn more about the vision behind VC2 and the future of AI infrastructure.\n\nVista Equity Partners Cambium Capital Management Together AI",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 322,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 685,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 770,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 792,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 819,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7468483057105162240",
                            "share_url": "https://www.linkedin.com/posts/sambanova_just-back-from-taiwan-i-sat-down-with-david-activity-7468483057105162240-bZ_w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7468483056241319936",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7468365568887291905",
                                "date": "2mo",
                                "text": "Just back from Taiwan, I sat down with David Faber on CNBC's Squawk on the Street to talk about why we built Vector Core Compute (VC2).\n\nAs enterprise software becomes agentic, the agents you deploy run continuously, and inference (the cost to actually run AI) climbs with them. VC2 aims to deliver low-cost access to inference, so our software companies can build agents that do the work profitably and have a sustainable future in an agentic world.\n\nWatch here: https://bit.ly/3RJEiUF",
                                "author": {
                                    "id": "ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "name": "Robert F. Smith",
                                    "is_company": false,
                                    "public_identifier": "robertfredericksmith"
                                },
                                "parsed_datetime": "2026-06-04T18:18:27.145Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-05T02:05:18.313Z",
                            "reaction_counter": 28,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-05T02:05:18.519Z"
                        },
                        {
                            "id": "7468398678882291712",
                            "date": "2mo",
                            "text": "General Compute is building the world’s fastest inference cloud for AI agents, and they chose SambaNova to power it.\n\nTheir platform is designed for demanding AI workloads like coding agents and voice agents, where latency and responsiveness directly impact the user experience.\n\nBy deploying SambaNova’s purpose-built AI infrastructure, General Compute is able to deliver:\n• 5X faster response times\n• Higher throughput for latency-sensitive workloads\n• OpenAI-compatible APIs for seamless adoption\n• Air-cooled deployments in existing data centers\n\nAs AI agents become more interactive and real-time, infrastructure purpose-built for inference is becoming increasingly important 🦾\n\nRead the case study: https://lnkd.in/gDjkHYs5",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7033512164286146778",
                                "url": "https://sambanova.ai/general-compute-builds-fastest-inference-cloud-with-sambanova?utm_source=linkedin&utm_medium=organic&utm_content=customer-partner",
                                "title": "General Compute builds the world’s fastest inference cloud with SambaNova",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQH3o0VwU_d5XA/articleshare-shrink_800/B4DZ6Zqd2pIsAQ-/0/1780694507763?e=1787648400&v=beta&t=TZ3AkN-goBX_SZgwjdwGfkm97K-aH8uewMOiEFB4isg",
                                "published_at": "2023-02-20T19:06:16.302Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 0,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_general-compute-builds-the-worlds-fastest-activity-7468398678882291712-KOf-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468398678882291712",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-04T20:30:01.183Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468350969920249856",
                            "date": "2mo",
                            "text": "The AI frontier is moving fast, and inference is the new battleground.\n\nAt COMPUTEX, we demonstrated the first live disaggregated inference system for AI agents, combining GPUs and RDUs to deliver premium inference at scale in the newly announced VC2 data center.\n\nAlso, check out the SN50 RDU, our fifth-generation AI chip purpose-built for agentic inference, delivering the speed, throughput, and efficiency required for the next generation of AI workloads.\n\nSee how we're redefining inference for the era of AI agents: https://sambanova.ai/",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-ai-frontier-is-moving-fast-and-inference-activity-7468350969920249856-xqGB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468350969920249856",
                            "attachments": [
                                {
                                    "id": "D5622AQE_uOQGhJlkfw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQE_uOQGhJlkfw/feedshare-shrink_800/B56Z6Tpoe1H0Ag-/0/1780593625236?e=1788393600&v=beta&t=Yz_abHsgL59ztPISGpSOsFZaNXU9fVbwCgXF-5e07N4",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-04T17:20:26.480Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468340562857803776",
                            "date": "2mo",
                            "text": "What a week at #Computex2026. From unveiling the world's first commercially available disaggregated inference cloud with Vista Equity Partners, Cambium Capital Management, Intel, and Together AI to demonstrating how heterogeneous infrastructure can deliver premium inference for AI agents, this year's event marked an important milestone for the future of AI.\n\nA huge thank you to everyone who joined our sessions throughout the week, including the standing-room-only deep dive from our very own Anton McGonnell and Kwasi Ankomah on how disaggregated inference is reshaping AI infrastructure.\n\nThe momentum around disaggregated inference is real. As AI agents become more sophisticated, the industry needs a new approach, one that matches the right processor to the right workload to deliver higher performance, greater efficiency, and lower cost.\n\nThank you, Taipei, for the incredible energy, conversations, and hospitality. We're excited for what's next. 💜",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 121,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 144,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 172,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 183,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAcRiTwBi7wojEUw8imGxfGJvqiOJLKDXu8",
                                    "start": 496,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAMLrB4BX-kBxxAOmJ3xDKxQgWhqZ-mkJJk",
                                    "start": 516,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7468340562857803776-LCSX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7468340562857803776",
                            "attachments": [
                                {
                                    "id": "D5622AQGfeTRvThdrTg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGfeTRvThdrTg/feedshare-shrink_800/B56Z6TgK2sHUAc-/0/1780591144612?e=1788393600&v=beta&t=Ci7yNOUAYg3Mywk5FClYIn0yQxOd9QUNLQQ36--tcO8",
                                    "size": {
                                        "width": 800,
                                        "height": 450
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 11,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-06-04T16:39:05.243Z",
                            "reaction_counter": 144,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467970741473406978",
                            "date": "2mo",
                            "text": "Agentic AI needs more than accelerators, it needs the right infrastructure.\nAt #COMPUTEX2026, Intel unveiled new rack-scale reference architectures designed to power AI agents at unprecedented scale. The story also highlights how Intel and SambaNova's disaggregated inference blueprint has landed its first commercial deployment through Vector Core Compute (VC2), with Together AI as its first customer.\n\nBy matching the right chip to the right workload, GPUs for prefill, RDUs for decode, and CPUs for agent orchestration; we're helping define what premium inference looks like for the agentic era.\n\nThanks to The Register and Tobias Mann for covering the announcement.\nhttps://lnkd.in/g_68UjjR",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 94,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/the-register/",
                                    "start": 611,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAABkD7ngBb6trTDpiIie8zscG77fYfNbAphY",
                                    "start": 628,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7467970741473406978-AXTa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467970741473406978",
                            "attachments": [
                                {
                                    "id": "D5622AQG8AT4Cln604g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG8AT4Cln604g/feedshare-shrink_800/B56Z6OP0ZVKwAc-/0/1780502972235?e=1788393600&v=beta&t=gM0qOYB4Nmb95-SUWKRE3XlHwnZ5CIZUZC1L9weKjJ4",
                                    "size": {
                                        "width": 800,
                                        "height": 455
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 5,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-03T16:09:32.954Z",
                            "reaction_counter": 102,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467921526911062017",
                            "date": "2mo",
                            "text": "AI agents are changing the economics of inference.\n\nAs coding agents evolve from simple assistants to systems that can plan, edit, test, repair, and run for hours, infrastructure providers face a new challenge: delivering premium inference performance without premium cost pressure.\n\nAt COMPUTEX TAIPEI 2026, SambaNova demonstrated the industry's first live disaggregated inference deployment for AI agents running in VC2.\n\nUsing NVIDIA B200 GPUs for prefill and SambaNova RDUs for decode, the system delivered 2x faster inference than B200-only configurations while showcasing a new blueprint for scaling agent workloads.\n\nThe key idea is simple: use the right chip for the right workload.\n\n➡️ GPUs for prefill\n➡️ RDUs for decode\n➡️ CPUs for orchestration\n\nThis architecture is already live in VC2, with Together.ai set to be the first commercial customer leveraging these capabilities.\n\nThe future of AI infrastructure isn't about adding more of the same hardware. It's about optimizing every stage of the inference pipeline.\n\nRead the full blog: https://lnkd.in/gQtaBWmQ",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7082179349112251126",
                                "url": "https://sambanova.ai/blog/first-disaggregated-inference-demo-for-ai-agents-live?utm_source=linkedin&utm_medium=organic",
                                "title": "The First Disaggregated Inference Demo for AI Agents Is Live",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQHNe-nM8QKR7w/articleshare-shrink_800/B4EZ_8WlJYHkA4-/0/1786645207079?e=1787648400&v=beta&t=Ykiy-xndbykKF7AgsEEXp0RyAWx3Q6uJHG007_KCDUs",
                                "published_at": "2023-07-05T02:12:17.357Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/computex-taipei/",
                                    "start": 287,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-first-disaggregated-inference-demo-for-activity-7467921526911062017-HfHc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467921526911062017",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 4,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-03T12:53:59.288Z",
                            "reaction_counter": 51,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467910229662547969",
                            "date": "2mo",
                            "text": "The world's first heterogenous disaggregated inference cloud was just shown running live at ComputeX.\n\nVC2 — backed by a $3.5B compute commitment to SambaNova from Vista Equity Partners and Cambium Capital Management — brings three chips together in production for the first time:\n⚡ NVIDIA B200 GPUs — prefill\n🔥 SambaNova RDUs — decode, running MiniMax over 400 t/s\n⚙️ Intel® Xeon® 6 CPUs — orchestration\n\nAir cooled. Order of magnitude lower power. Deployed in existing brownfield data centers in Los Angeles.\n\nRobert F. Smith Landon Downs Lip-Bu Tan Vipul Ved Prakash Vista Equity Partners Cambium Capital Management Intel Together AI",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/sambanova/",
                                    "start": 149,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 164,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 190,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 369,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 512,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACiRP0BMLEp3FgjuLGZOeZgg8cBNrECVMg",
                                    "start": 528,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 541,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAAYScBznNfbAVksI7V7CkgpODd4m2tBkw",
                                    "start": 552,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 570,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 592,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/company/intel-corporation/",
                                    "start": 619,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/togethercomputer/",
                                    "start": 625,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-worlds-first-heterogenous-disaggregated-activity-7467910229662547969-pByd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467910229662547969",
                            "attachments": [
                                {
                                    "id": "D5622AQFidyAKpPIuuQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFidyAKpPIuuQ/feedshare-shrink_800/B56Z6NYyKjKMAc-/0/1780488545144?e=1788393600&v=beta&t=ZI5gNcZ6DCdb-340pXs4BtgpHBtxrZTHREP9QJXIAOE",
                                    "size": {
                                        "width": 800,
                                        "height": 420
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 35,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-06-03T12:09:05.814Z",
                            "reaction_counter": 179,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467651263699197952",
                            "date": "2mo",
                            "text": "The market is sending a clear signal: fast inference matters. Going from 108M tokens on day one to 3B tokens per day in just a matter of weeks is a remarkable milestone and a reflection of the growing demand for AI infrastructure built for production workloads.\n\nCongratulations to the General Compute team. The era of premium inference is just getting started. ⚡",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 286,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_the-market-is-sending-a-clear-signal-fast-activity-7467651263699197952-Qb--?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467651263699197952",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-02T19:00:03.517Z",
                            "reaction_counter": 33,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467621022742073344",
                            "date": "2mo",
                            "text": "Congratulations to the General Compute team on this milestone. The next era of AI won't be built by simply adding more GPUs. It will be powered by purpose-built infrastructure that delivers the speed, efficiency, and economics required for production-scale inference.\n\nWe're excited to support General Compute as they build AI infrastructure designed from the ground up for the agentic era—bringing faster inference, lower power consumption, and greater accessibility to enterprises and developers alike.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 23,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_congratulations-to-the-general-compute-team-activity-7467621022742073344-DlZ5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467621022742073344",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-02T16:59:53.511Z",
                            "reaction_counter": 31,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467620673545293824",
                            "date": "2mo",
                            "text": "For years, the industry focused on training. Today, inference is where AI delivers value. As organizations move AI into production, they need infrastructure that can run the largest models faster, more efficiently, and with the sovereignty and security their businesses demand.\n\nGreat discussion from Rodrigo Liang on CNBC about where the market is headed and why premium inference is becoming the next major battleground in AI infrastructure.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 301,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cnbc/",
                                    "start": 318,
                                    "length": 4
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_for-years-the-industry-focused-on-training-activity-7467620673545293824-Zryx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467620673545293824",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-02T16:58:30.256Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467616065188048897",
                            "date": "2mo",
                            "text": "At Lip-Bu Tan's #COMPUTEX2026 keynote today, Rodrigo Liang stepped onstage with Robert F. Smith to power up the world's first disaggregated inference cloud, VectorCore Compute (VC2), launched by Vista Equity Partners and Cambium Capital Management.\n\nThree chips ran disaggregated inference, live from the VC2 datacenter in LA:\n➡️ NVIDIA B200 GPUs — prefill, high-compute burst\n➡️ SambaNova RDUs — decode, high-throughput, low-latency token generation at scale\n➡️ Intel® Xeon® 6 CPUs — tool execution, end-to-end orchestration\n\n“GPUs are powerful. RDUs are fast. CPUs orchestrate. But disaggregate all three — and you get speed, performance, and economics no single chip can touch. That's the unlock.” – Rodrigo Liang",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAnExoQB03bElzv9fTzdOvKyXp2G3zTbdCs",
                                    "start": 3,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 45,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3kBhwB22OcUIcZTxSrAiFupvKpR6wDBhI",
                                    "start": 80,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/vista-equity-partners/",
                                    "start": 195,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/cambium-capital-partners/",
                                    "start": 221,
                                    "length": 26
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAECHVwBOqSl2tOnDhFzn2JA21dJa2XWhbw",
                                    "start": 703,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_computex2026-activity-7467616065188048897-v-gM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467616065188048897",
                            "attachments": [
                                {
                                    "id": "D5622AQGp25ZgnRghQg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGp25ZgnRghQg/feedshare-shrink_480/B56Z6JNPP1IcAg-/0/1780418410123?e=1788393600&v=beta&t=rc_XAX_XKx1F8OMQtiSgzAyvXR1oZoaTthLs7tfY-J8",
                                    "size": {
                                        "width": 480,
                                        "height": 734
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 38,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-02T16:40:11.538Z",
                            "reaction_counter": 222,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467261942693392385",
                            "date": "2mo",
                            "text": "As enterprises move from AI experimentation to production, inference speed becomes a business metric.\n\nRicoh, one of Japan's leading technology and digital services companies, is building specialized AI models and agentic applications tailored for Japanese businesses. But scaling those solutions required infrastructure capable of delivering both performance and cost efficiency.\n\nWith SambaCloud, Ricoh achieved:\n• Up to 10× faster inference performance\n• 700+ tokens per second on 70B-class models\n• Reliable support for complex agentic workflows\n• Seamless deployment of custom open-weight models optimized for Japanese business use cases\n\nThe impact goes beyond benchmarks. As Gakushi Miyara of Ricoh explains:\n\"With SambaNova running 5 to 10 times faster, even complex agentic workflows that would otherwise take a minute finish in 10 seconds.\"\n\nThis is what happens when AI infrastructure is purpose-built for inference at scale.\n\nProud to support Ricoh as they bring faster, more capable AI experiences to businesses across Japan.\n\nhttps://lnkd.in/gJ5zTy32",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7152402776462425945",
                                "url": "https://sambanova.ai/ricoh-runs-japanese-custom-ai-models-10-faster-on-sambacloud?utm_source=linkedin&utm_medium=organic",
                                "title": "Ricoh runs Japanese custom AI models 10× faster on SambaCloud",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQFQHu6Z4CfS6Q/articleshare-shrink_800/B4DZ6ZxloTGUAU-/0/1780696375139?e=1787648400&v=beta&t=MnqHhEJBTFWgxkqzZ_HFoXqogTbM5rMMdPSYhsO7wJE",
                                "published_at": "2024-01-14T20:55:07.126Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/strategic-storefront-marketing/",
                                    "start": 103,
                                    "length": 5
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_ricoh-runs-japanese-custom-ai-models-10-activity-7467261942693392385-X8os?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467261942693392385",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 9,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-01T17:13:02.156Z",
                            "reaction_counter": 50,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7465787151582953472",
                            "date": "2mo",
                            "text": "📣 Tim Fernholz at TechCrunch breaks down how General Compute is building its inference cloud with SambaNova, and why faster, more efficient inference infrastructure is becoming critical for the next wave of AI.\n\nFeaturing insights from General Compute CEO Finn P. and CTO Jason Goodison.\n\nRead more:\nhttps://lnkd.in/eu_fiSkV",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=w3dqcXDO6Yo0uYn5SIlTovT0hzCr8bEmUfZgMJwUVss"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAn3SPMBaK5Rvrze6D3yAKhpNUDqlGTe-LU",
                                    "start": 2,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/techcrunch/",
                                    "start": 18,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/company/general-compute/",
                                    "start": 45,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAvSbKwBLYsLjXxyPIpwRsJLe8gaz8GxVTI",
                                    "start": 256,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB3KUPkBbnn8PgWKQN52XMLIG9gYymdsIWw",
                                    "start": 272,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_tim-fernholz-at-techcrunch-breaks-down-activity-7465787151582953472-hDEY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7465787151582953472",
                            "attachments": [
                                {
                                    "id": "D5622AQHNt5zTUg08aA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHNt5zTUg08aA/feedshare-shrink_480/B56Z5vN2nyIsAg-/0/1779982363347?e=1788393600&v=beta&t=d8hGFDCBuqfT9tMmi_1pZ0XRxARDnC0MMsTWYfZ87H4",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 7,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-05-28T15:32:44.555Z",
                            "reaction_counter": 74,
                            "impressions_counter": 0
                        }
                    ],
                    "stats": [
                        {
                            "d": "LinkedIn follower count from profile",
                            "h": "Followers",
                            "v": 98128
                        },
                        {
                            "d": "Recent organic company-page posts in the provided dataset",
                            "h": "Posts analyzed",
                            "v": 50
                        },
                        {
                            "d": "Highest-reaction analyzed post: $1B financing / $11B valuation announcement",
                            "h": "Top reaction post",
                            "v": "542 reactions"
                        },
                        {
                            "d": "Highest-comment analyzed post: $1B financing / $11B valuation announcement",
                            "h": "Top comment post",
                            "v": "30 comments"
                        }
                    ],
                    "company": {
                        "url": "https://www.linkedin.com/company/sambanova/",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                        "name": "SambaNova",
                        "posts": 50,
                        "period": "Recent company-page organic posts analyzed from 2026-05-28 to 2026-08-17",
                        "industry": "Computer Hardware Manufacturing",
                        "followers": 98128
                    },
                    "profile": {
                        "id": "18464083",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=y3cH4YolFQOuBXZcqsmOE93huvaSx-OkSc13vklBYg4",
                        "name": "SambaNova",
                        "object": "CompanyProfile",
                        "claimed": true,
                        "tagline": "Transforming AI with efficiency, security, and sovereignty - driven by our relentless pursuit of intelligence.",
                        "website": "http://www.sambanova.ai",
                        "hashtags": [
                            {
                                "title": "#artificialintelligence"
                            },
                            {
                                "title": "#machinelearning"
                            },
                            {
                                "title": "#computing"
                            }
                        ],
                        "industry": [
                            "Computer Hardware Manufacturing"
                        ],
                        "locations": [
                            {
                                "area": "California",
                                "city": "San Jose",
                                "street": [
                                    "2460 N First Street",
                                    "100"
                                ],
                                "country": "US",
                                "postalCode": "95131",
                                "is_headquarter": true
                            }
                        ],
                        "messaging": {
                            "id": "2704957",
                            "entity_urn": "urn:li:fsd_pageMailbox:2704957",
                            "is_enabled": true
                        },
                        "activities": [
                            "High Performance Computing",
                            "Artificial Intelligence",
                            "Machine Learning",
                            "GPT3",
                            "Foundation Models",
                            "Deep Learning",
                            "Computer Vision",
                            "True Resolution",
                            "3D Image Analysis",
                            "Recommendation",
                            "AI Platform",
                            "Large Language Models",
                            "AI for Science",
                            "Generative AI",
                            "AI Inference",
                            "Premium Inference"
                        ],
                        "entity_urn": "urn:li:fsd_company:18464083",
                        "logo_large": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_100_100/B56ZyMpSXcHQAQ-/0/1771886159588/sambanova_logo?e=1788393600&v=beta&t=gAqYUdjVIBj0B7BEJn7k9ZfIDphUNVMl7ordRY6TJ8Y",
                        "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                        "is_employee": false,
                        "profile_url": "https://www.linkedin.com/company/sambanova/",
                        "is_following": false,
                        "employee_count": 400,
                        "followers_count": 98128,
                        "foundation_date": "01/01/2017",
                        "organization_type": null,
                        "public_identifier": "sambanova",
                        "viewer_permissions": {
                            "canPinShare": false,
                            "canEditEvents": false,
                            "canReadEvents": false,
                            "canDeleteShare": false,
                            "canExportLeads": false,
                            "canSeeProducts": false,
                            "canEditCurators": false,
                            "canEditProducts": false,
                            "canReadMessages": false,
                            "canSendMessages": false,
                            "canSponsorShare": false,
                            "canCreateComment": false,
                            "canEditDarkShare": false,
                            "canCreateReaction": false,
                            "canCreateShowcase": false,
                            "canCreateBroadcast": false,
                            "canCreateDarkShare": false,
                            "canDeleteDarkShare": false,
                            "canNotifyEmployees": false,
                            "canAssociateHashtag": false,
                            "canCreateJobPosting": false,
                            "canUntagFromMention": false,
                            "canManageCareerPages": false,
                            "canCreateOrganicShare": false,
                            "canEditAdministrators": false,
                            "canManageServicesPage": false,
                            "canReadAdminDashboard": false,
                            "canReadAdministrators": false,
                            "canRequestAdminAccess": true,
                            "canEnableCommentsShare": false,
                            "canDisableCommentsShare": false,
                            "canInviteMemberToFollow": false,
                            "canManageMessagingAccess": false,
                            "canMembersInviteToFollow": false,
                            "canDeactivateOrganization": false,
                            "canNotifyEmployeesOfShare": false,
                            "canReadBroadcastAnalytics": false,
                            "canReadContentSuggestions": false,
                            "canReadTermsAndAgreements": false,
                            "canEmployeesInviteToFollow": false,
                            "canReadOrganizationActivity": false,
                            "canEditPendingAdministrators": false,
                            "canReadPendingAdministrators": false,
                            "canUpdateOrganizationProfile": false,
                            "canManageVerifiedEmailDomains": false,
                            "canReadAdminFeedFollowingPill": false,
                            "canEditPipelineBuilderAdminPage": false,
                            "canReadPipelineBuilderAdminPage": false,
                            "canManageOrganizationCompetitors": false,
                            "canSeeEmployeeExperienceAsMember": false,
                            "canEditLeadGenerationFormManagers": false,
                            "canManageOrganizationalPageFollow": false,
                            "canReadLeadGenerationFormManagers": false,
                            "canReadOrganizationLeadsAnalytics": false,
                            "canReadOrganizationUpdateAnalytics": false,
                            "canManageEmployeeExperienceSettings": false,
                            "canReadOrganizationVisitorAnalytics": false,
                            "canEditDirectSponsoredContentPosters": false,
                            "canEditPipelineBuilderAdministrators": false,
                            "canReadDirectSponsoredContentPosters": false,
                            "canReadOrganizationFollowerAnalytics": false,
                            "canReadPipelineBuilderAdministrators": false,
                            "canSeeOrganizationAdministrativePage": false,
                            "canCreateLinkedInPagesProductFeedBack": false,
                            "canReadOrganizationNewsletterAnalytics": false,
                            "canReadOrganizationTalentBrandAnalytics": false,
                            "canEditPendingDirectSponsoredContentPosters": false,
                            "canReadOrganizationPipelineBuilderAnalytics": false,
                            "canReadPendingDirectSponsoredContentPosters": false
                        },
                        "employee_count_range": {
                            "to": 500,
                            "from": 201
                        }
                    },
                    "summary": {
                        "text": "SambaNova’s organic LinkedIn strategy is highly opinionated and tightly centered on one narrative: inference is the new battleground in AI, and their differentiated answer is disaggregated, heterogeneous infrastructure. They use a mix of product education, benchmark/validation posts, event coverage, executive thought leadership, and customer/partner proof points to reinforce speed, efficiency, sovereignty, and lower power as the core value props. The feed is consistently built to turn technical architecture into business outcomes, especially for agents, enterprise deployment, and on-prem / sovereign use cases.",
                        "moves": [
                            "Makes a single dominant message repeatable across formats: premium inference, disaggregated inference, and heterogenous AI infrastructure.",
                            "Leans heavily on third-party validation and prestige moments (SemiAnalysis, Bloomberg, CNBC, Forbes, TechCrunch, RAISE, COMPUTEX) to build credibility.",
                            "Uses customer and partner wins as proof: JPMorganChase, Ricoh, General Compute, Argonne, TACC, SCX ai, Linkup, Intel, Vista, Cambium, Together AI.",
                            "Balances technical explainers with exec-led commentary, product announcements, and event recaps to educate both builders and enterprise buyers.",
                            "Consistently frames benefits in business terms: lower cost, faster tokens, better latency, higher throughput, and deployability in existing air-cooled datacenters."
                        ]
                    },
                    "website": "http://www.sambanova.ai",
                    "creative": {
                        "freq": [
                            {
                                "l": "High",
                                "v": 78
                            },
                            {
                                "l": "Medium",
                                "v": 18
                            },
                            {
                                "l": "Low",
                                "v": 4
                            }
                        ],
                        "formats": [
                            {
                                "l": "Video",
                                "v": 45
                            },
                            {
                                "l": "Single Image",
                                "v": 28
                            },
                            {
                                "l": "Text-only",
                                "v": 20
                            },
                            {
                                "l": "Document-Carousel",
                                "v": 5
                            },
                            {
                                "l": "GIF",
                                "v": 2
                            }
                        ],
                        "imagery": [
                            "Chip / rack / datacenter visuals",
                            "Exec keynote and interview clips",
                            "Conference booth and stage photography",
                            "Branded comparison graphics and benchmark callouts",
                            "Minimal text graphics with bold headlines",
                            "Event and city-context imagery (Paris, Stanford, Washington, D.C.)"
                        ],
                        "swatches": [
                            [
                                "#111827",
                                "Charcoal"
                            ],
                            [
                                "#6B21A8",
                                "Purple"
                            ],
                            [
                                "#3B82F6",
                                "Blue"
                            ],
                            [
                                "#F59E0B",
                                "Amber"
                            ],
                            [
                                "#FFFFFF",
                                "White"
                            ]
                        ]
                    },
                    "launches": [
                        {
                            "date": "2026-06-03",
                            "type": "feature_release",
                            "title": "First live disaggregated inference demo for AI agents in VC2"
                        },
                        {
                            "date": "2026-06-08",
                            "type": "partnership",
                            "title": "Launch of Vector Core Compute (VC2) with Vista Equity Partners, Cambium Capital, Intel, and Together AI"
                        },
                        {
                            "date": "2026-07-08",
                            "type": "pricing_update",
                            "title": "First close of $1B Series F financing at $11B valuation (company milestone)"
                        }
                    ],
                    "personas": [
                        {
                            "persona": "VP Infrastructure / AI Platform",
                            "industry": "Enterprise Software / Technology",
                            "rationale": "Inferred from posts about enterprise production inference, heterogeneous infrastructure, APIs, and scaling workloads; this is an estimate based on content themes, not real LinkedIn follower data.",
                            "seniority": "VP",
                            "confidence": 90
                        },
                        {
                            "persona": "Head of Data Center / Cloud Operations",
                            "industry": "Data Centers / Cloud / Infrastructure",
                            "rationale": "Inferred from repeated emphasis on power, air-cooling, existing datacenters, and deployment fit; estimate based on content and engagement, not follower demographics.",
                            "seniority": "Director/VP",
                            "confidence": 82
                        },
                        {
                            "persona": "Chief Architect / Distinguished Engineer",
                            "industry": "AI Infrastructure / Hardware",
                            "rationale": "Inferred from the technical depth around RDUs, prefill/decode, memory movement, and disaggregated inference; estimate grounded in post topics, not follower data.",
                            "seniority": "Senior IC / Director",
                            "confidence": 84
                        },
                        {
                            "persona": "CIO / CTO",
                            "industry": "Enterprise / Financial Services / Public Sector",
                            "rationale": "Inferred from sovereignty, security, on-prem, and enterprise production messaging plus named customer examples like JPMorganChase; estimate only, not actual audience demographics.",
                            "seniority": "C-level",
                            "confidence": 76
                        },
                        {
                            "persona": "ML Engineering Lead / AI Product Builder",
                            "industry": "AI / Software / Developer Tools",
                            "rationale": "Inferred from APIs, prompt caching, agentic workflows, coding agents, and hands-on webinars; estimate based on content and engagement patterns, not follower demographics.",
                            "seniority": "Manager/Director",
                            "confidence": 88
                        }
                    ],
                    "strategy": {
                        "ctas": [
                            {
                                "l": "Direct conversion CTA",
                                "v": "Read the blog"
                            },
                            {
                                "l": "Watch CTA",
                                "v": "Watch the full interview below"
                            },
                            {
                                "l": "Engagement CTA",
                                "v": "See the numbers for yourself"
                            },
                            {
                                "l": "Event CTA",
                                "v": "If you're attending, stop by and say hello!"
                            },
                            {
                                "l": "Demo CTA",
                                "v": "Try it yourself"
                            },
                            {
                                "l": "Asset CTA",
                                "v": "Swipe through to catch up with our month"
                            }
                        ],
                        "hooks": [
                            {
                                "l": "Problem-led technical framing",
                                "v": "Strongest when opening with a clear infrastructure bottleneck: inference latency, memory movement, power constraints, or one-chip limitations."
                            },
                            {
                                "l": "Contrarian category framing",
                                "v": "Performs when positioning SambaNova against generic GPU-only thinking: disaggregated inference, premium inference, heterogeneous infrastructure."
                            },
                            {
                                "l": "Proof-by-benchmark framing",
                                "v": "Validation posts using independent benchmarks, live demos, and third-party coverage are a core credibility driver."
                            },
                            {
                                "l": "Enterprise-risk framing",
                                "v": "Messages around on-prem, sovereignty, privacy, and production readiness resonate alongside performance claims."
                            },
                            {
                                "l": "Executive/news framing",
                                "v": "Milestones like funding, partnerships, leadership hires, conferences, and consortium announcements provide strong distribution and social proof."
                            }
                        ],
                        "trust": [
                            {
                                "l": "Independent validation",
                                "v": "SemiAnalysis, Artificial Analysis, The Register, Forbes, Bloomberg, CNBC, and TechCrunch are repeatedly used to substantiate claims."
                            },
                            {
                                "l": "Named enterprise proof points",
                                "v": "JPMorganChase, Ricoh, General Compute, TACC, Argonne National Laboratory, and SCX ai appear as customer/partner examples."
                            },
                            {
                                "l": "Technical specificity",
                                "v": "Posts cite SN40, SN50, RDU, prefill, decode, token throughput, power draw, air-cooled deployments, and OpenAI-compatible APIs."
                            },
                            {
                                "l": "Live demo language",
                                "v": "Frequent references to live demonstrations at COMPUTEX and RAISE Summit reinforce hands-on proof rather than abstract positioning."
                            },
                            {
                                "l": "Executive authority",
                                "v": "CEO Rodrigo Liang and senior leaders are central voices, often quoted directly in posts and interviews."
                            }
                        ],
                        "hookEx": [
                            "What happens when bigger, smarter models also get faster? 🤔",
                            "The datacenter power crisis isn't coming. It's already here.",
                            "The AI industry has been treating inference like it's one workload. It's not.",
                            "The best performance claims are the ones validated by someone else. ⚡️"
                        ],
                        "audience": [
                            {
                                "l": "Enterprise AI infrastructure buyers",
                                "v": "Primary audience; focused on production inference, cost, latency, and deployment fit."
                            },
                            {
                                "l": "CIO/CTO/data center decision-makers",
                                "v": "Likely interested in power, cooling, fit with existing infrastructure, and architecture choices."
                            },
                            {
                                "l": "AI platform and ML engineering leaders",
                                "v": "Care about APIs, agentic workflows, model serving, prompt caching, and performance tuning."
                            },
                            {
                                "l": "Government / sovereign AI stakeholders",
                                "v": "Strong fit for sovereignty, on-prem control, and national or regional data-residency needs."
                            },
                            {
                                "l": "Cloud/service-provider and neocloud operators",
                                "v": "Relevant through SambaManaged/VC2, efficiency, and scalable inference capacity."
                            }
                        ],
                        "features": [
                            {
                                "l": "Disaggregated inference",
                                "v": "Splits prefill, decode, and orchestration across GPUs, RDUs, and CPUs."
                            },
                            {
                                "l": "Premium inference",
                                "v": "A category focused on faster, lower-latency serving for agentic and latency-sensitive workloads."
                            },
                            {
                                "l": "Air-cooled deployment",
                                "v": "Positioned as fitting existing datacenters without liquid-cooling overhauls."
                            },
                            {
                                "l": "Open-model / open-weight support",
                                "v": "Frequently paired with open source models and OpenAI-compatible APIs."
                            },
                            {
                                "l": "On-prem and sovereign AI options",
                                "v": "Emphasized for data privacy, security, and keeping data/models under customer control."
                            },
                            {
                                "l": "Prompt caching",
                                "v": "Shown as reducing cost and improving time-to-first-token for repeated prompts."
                            },
                            {
                                "l": "Benchmarked performance",
                                "v": "Messaging often highlights tokens/second, faster decode, and faster response times."
                            },
                            {
                                "l": "Enterprise readiness",
                                "v": "Messaging emphasizes production deployment, reliability, and heterogeneous stacks."
                            }
                        ],
                        "toneDist": [
                            {
                                "l": "Technical and explanatory",
                                "v": "35"
                            },
                            {
                                "l": "Confident and contrarian",
                                "v": "25"
                            },
                            {
                                "l": "Proof-driven and benchmark-heavy",
                                "v": "20"
                            },
                            {
                                "l": "Executive and institutional",
                                "v": "10"
                            },
                            {
                                "l": "Celebratory and partner-oriented",
                                "v": "10"
                            }
                        ]
                    },
                    "campaigns": [
                        {
                            "cta": "Learn more, read the blog, or watch the full conversation",
                            "name": "Premium Inference / Agentic AI Narrative",
                            "posts": 12,
                            "durationDays": 46
                        },
                        {
                            "cta": "See you in Paris / RSVP / watch the full interview",
                            "name": "RAISE Summit Paris event push",
                            "posts": 9,
                            "durationDays": 34
                        },
                        {
                            "cta": "Read more, watch the demo, or see the numbers",
                            "name": "VC2 / Disaggregated Inference launch campaign",
                            "posts": 8,
                            "durationDays": 7
                        },
                        {
                            "cta": "Watch the interview / read the press coverage",
                            "name": "Series F / $1B financing and enterprise traction",
                            "posts": 7,
                            "durationDays": 15
                        },
                        {
                            "cta": "Read the case study / see the customer story",
                            "name": "Customer proof and partner spotlight series",
                            "posts": 10,
                            "durationDays": 60
                        }
                    ],
                    "messaging": {
                        "pains": [
                            "GPU-only stacks are inefficient for inference",
                            "Training-first infrastructure does not fit agentic workloads",
                            "Memory movement and latency bottlenecks slow decode",
                            "Rising token costs make AI expensive at scale",
                            "Existing datacenters cannot support power-hungry racks",
                            "Enterprises need privacy, security, and sovereignty",
                            "One-size-fits-all compute underperforms across inference stages"
                        ],
                        "value": [
                            "Faster inference at scale",
                            "Lower power consumption",
                            "Lower cost per token",
                            "Better latency and interactivity",
                            "Higher throughput for agentic workloads",
                            "Fits existing air-cooled datacenters",
                            "Enterprise-grade sovereignty and security",
                            "OpenAI-compatible and developer-friendly access"
                        ],
                        "themes": [
                            {
                                "l": "Premium inference / inference-first AI",
                                "v": 18
                            },
                            {
                                "l": "Disaggregated / heterogeneous infrastructure",
                                "v": 16
                            },
                            {
                                "l": "Speed, latency, throughput, token efficiency",
                                "v": 15
                            },
                            {
                                "l": "Power efficiency / air-cooled / existing datacenters",
                                "v": 11
                            },
                            {
                                "l": "Sovereignty, security, on-prem enterprise AI",
                                "v": 9
                            },
                            {
                                "l": "Customer and partner proof points",
                                "v": 13
                            },
                            {
                                "l": "Executive thought leadership and media validation",
                                "v": 12
                            }
                        ],
                        "benefits": [
                            "Purpose-built chips for decode",
                            "GPUs for prefill, RDUs for decode, CPUs for orchestration",
                            "More intelligence per joule",
                            "Production-ready AI without new datacenter builds",
                            "Deployable in existing infrastructure",
                            "Faster responses for coding agents and AI assistants",
                            "Supports open-weight and open-source models",
                            "Improved economics for enterprise AI deployment"
                        ],
                        "keywords": [
                            [
                                "premium inference",
                                23
                            ],
                            [
                                "disaggregated inference",
                                16
                            ],
                            [
                                "agentic AI",
                                15
                            ],
                            [
                                "inference",
                                34
                            ],
                            [
                                "RDUs",
                                24
                            ],
                            [
                                "GPUs",
                                19
                            ],
                            [
                                "latency",
                                14
                            ],
                            [
                                "heterogeneous",
                                10
                            ],
                            [
                                "sovereign AI",
                                8
                            ],
                            [
                                "air-cooled",
                                7
                            ]
                        ]
                    },
                    "scorecard": [
                        {
                            "score": 9,
                            "metric": "Posting Consistency"
                        },
                        {
                            "score": 7,
                            "metric": "Content Diversity"
                        },
                        {
                            "score": 8,
                            "metric": "Engagement Quality"
                        },
                        {
                            "score": 9,
                            "metric": "Thought Leadership"
                        },
                        {
                            "score": 10,
                            "metric": "Product Marketing"
                        },
                        {
                            "score": 7,
                            "metric": "Employer Branding"
                        },
                        {
                            "score": 6,
                            "metric": "CTA Effectiveness"
                        }
                    ],
                    "textStyle": "Technical, assertive, credibility-driven, and milestone-heavy; uses punchy hooks, benchmark language, and executive quotes to reinforce authority.",
                    "ctaLibrary": [
                        "Read the blog",
                        "Watch the full interview below",
                        "See the numbers for yourself",
                        "If you're attending, stop by and say hello!",
                        "Try it yourself",
                        "Swipe through to catch up with our month",
                        "Open positions in the link below",
                        "Read more",
                        "Check out their conversation. ⬇️",
                        "Join our own Varun Badrinath Krishna for a hands-on live session tomorrow: Mastering the Coding Agent Harness. ⬇️"
                    ],
                    "engagement": {
                        "best": [],
                        "stats": [],
                        "worst": [],
                        "topics": [
                            {
                                "l": "Premium inference / inference speed",
                                "v": 30
                            },
                            {
                                "l": "Disaggregated / heterogeneous infrastructure",
                                "v": 22
                            },
                            {
                                "l": "Agentic AI / coding agents / multi-agent workflows",
                                "v": 14
                            },
                            {
                                "l": "Customer proof / enterprise adoption",
                                "v": 13
                            },
                            {
                                "l": "Events / conferences / media appearances",
                                "v": 9
                            },
                            {
                                "l": "Sovereign AI / security / on-prem",
                                "v": 7
                            },
                            {
                                "l": "Hiring / leadership announcements",
                                "v": 5
                            }
                        ],
                        "activity": []
                    },
                    "competitive": {
                        "recs": [
                            "Study how SambaNova turns a technical architecture story into a market category ('premium inference').",
                            "Track which proof points they lean on most: independent benchmarks, customer wins, and ecosystem partnerships.",
                            "Watch how they frame total cost of ownership via power, cooling, and existing datacenter compatibility.",
                            "Compare their disaggregated inference message against GPU-only and other accelerator vendors.",
                            "Notice their frequent use of executive media and event content to build credibility with enterprise buyers."
                        ],
                        "text": "SambaNova positions itself as an AI infrastructure company focused on premium inference: fast, low-power, sovereign, enterprise-ready deployment across cloud and on-prem. The core narrative is that inference—not training—is the defining AI workload, and that disaggregated, heterogeneous infrastructure (GPUs for prefill, RDUs for decode, CPUs for orchestration) is the right architecture for agentic AI. The company repeatedly emphasizes performance, power efficiency, data sovereignty, and production readiness, supported by benchmark-style claims, customer logos, partner announcements, and executive media appearances.",
                        "usps": [
                            "Premium inference for agentic AI and latency-sensitive workloads",
                            "Disaggregated inference architecture: GPUs for prefill, RDUs for decode, CPUs for orchestration",
                            "Air-cooled, lower-power deployment that fits existing datacenters",
                            "Enterprise/security/sovereignty positioning for on-prem and sovereign AI",
                            "OpenAI-compatible APIs and open-weight model support on SambaCloud",
                            "Customer proof from high-profile enterprise, public sector, and infrastructure partners"
                        ],
                        "rivals": [
                            "NVIDIA",
                            "Cerebras",
                            "Groq",
                            "Intel",
                            "AMD",
                            "General-purpose GPU cloud providers"
                        ]
                    },
                    "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                    "hookLibrary": [
                        {
                            "type": "Question",
                            "example": "What happens when bigger, smarter models also get faster?"
                        },
                        {
                            "type": "Bold Statement",
                            "example": "The datacenter power crisis isn't coming. It's already here."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "The AI industry has been treating inference like it's one workload. It's not."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "The best performance claims are the ones validated by someone else."
                        },
                        {
                            "type": "Story",
                            "example": "We're going to be at Hot Chips Symposium 2026 🔥"
                        },
                        {
                            "type": "Problem",
                            "example": "For years, the conversation around AI infrastructure was largely about how cheaply you could run a model."
                        },
                        {
                            "type": "Statistic",
                            "example": "At RAISE Summit 2026, we demonstrated the fastest MiniMax M2.7 inference in the world, as benchmarked by Artificial Analysis."
                        },
                        {
                            "type": "Problem",
                            "example": "When an agent plans, calls tools, reads context, and generates thousands—or even millions—of tokens across a workflow, latency compounds."
                        },
                        {
                            "type": "News",
                            "example": "SambaNova has completed our first close of $1B Series F financing round, valuing the company at $11B"
                        }
                    ],
                    "profile_url": "https://www.linkedin.com/company/sambanova/",
                    "imageryTypes": [
                        {
                            "type": "video",
                            "description": "Conference-stage clips, product explainers, and executive interview footage"
                        },
                        {
                            "type": "image",
                            "description": "Benchmark cards, product architecture visuals, event photos, and announcement graphics"
                        },
                        {
                            "type": "document",
                            "description": "Monthly digest/PDF-style recap posts"
                        }
                    ],
                    "observations": [
                        "SambaNova’s organic LinkedIn is highly product-led and technically opinionated, with a consistent narrative that inference—not training—is the defining AI workload.",
                        "The content repeatedly centers on premium inference, disaggregated inference, heterogeneous infrastructure, and data movement/memory bottlenecks, positioning the company as an infrastructure architecture leader rather than a generic AI vendor.",
                        "Proof points are a major motif: third-party benchmarks, customer deployments, partner shoutouts, and media/interview coverage are used to validate claims and build credibility.",
                        "A strong event-and-ecosystem layer runs through the feed, especially around RAISE Summit, COMPUTEX, Hot Chips, and partnerships with Intel, Vista, Together AI, JPMorganChase, Ricoh, and national research institutions.",
                        "There is also a notable employer-branding/leadership thread, with posts about executive hires, board appointments, and company milestone announcements used to signal momentum and momentum quality."
                    ],
                    "topicClusters": [
                        {
                            "theme": "Inference performance and token speed",
                            "postCount": 26
                        },
                        {
                            "theme": "Disaggregated and heterogeneous AI infrastructure",
                            "postCount": 22
                        },
                        {
                            "theme": "Agentic AI and workflow orchestration",
                            "postCount": 15
                        },
                        {
                            "theme": "Customer wins and enterprise deployments",
                            "postCount": 14
                        },
                        {
                            "theme": "Events, conferences, and media coverage",
                            "postCount": 11
                        },
                        {
                            "theme": "Sovereign AI, privacy, and on-prem messaging",
                            "postCount": 7
                        },
                        {
                            "theme": "Leadership, hiring, and company growth",
                            "postCount": 5
                        }
                    ],
                    "audienceDetail": {
                        "note": "Inferred from content & engagement, not LinkedIn follower demographics",
                        "seniority": [
                            {
                                "l": "Individual contributors",
                                "v": 10
                            },
                            {
                                "l": "Manager",
                                "v": 20
                            },
                            {
                                "l": "Director",
                                "v": 28
                            },
                            {
                                "l": "VP",
                                "v": 22
                            },
                            {
                                "l": "C-level",
                                "v": 20
                            }
                        ],
                        "experience": [
                            {
                                "l": "0-5 years",
                                "v": 10
                            },
                            {
                                "l": "6-10 years",
                                "v": 25
                            },
                            {
                                "l": "11-15 years",
                                "v": 30
                            },
                            {
                                "l": "16+ years",
                                "v": 35
                            }
                        ],
                        "industries": [
                            {
                                "l": "Enterprise software / AI",
                                "v": 30
                            },
                            {
                                "l": "Hardware / semiconductor / infrastructure",
                                "v": 25
                            },
                            {
                                "l": "Cloud / data centers / neocloud",
                                "v": 18
                            },
                            {
                                "l": "Financial services / regulated enterprise",
                                "v": 12
                            },
                            {
                                "l": "Public sector / research / sovereign AI",
                                "v": 15
                            }
                        ]
                    },
                    "employee_count": 400,
                    "followers_count": 98128,
                    "recommendations": [
                        {
                            "observation": "Their strongest theme is technical category creation around premium inference, but many posts repeat the same architecture narrative.",
                            "recommendation": "Differentiate by tying the architecture story to more varied buyer outcomes such as developer velocity, operational resilience, and business KPIs."
                        },
                        {
                            "observation": "Benchmarks and external validation are central to credibility.",
                            "recommendation": "Counter with your own third-party proof points, but focus on workload-specific outcomes that are harder to mirror with raw speed claims."
                        },
                        {
                            "observation": "They rely heavily on thought leaders, media, and event moments to amplify authority.",
                            "recommendation": "Build an always-on executive and practitioner content engine so your category ownership is not confined to launch windows."
                        },
                        {
                            "observation": "Their sovereignty and on-prem message is strong for regulated industries.",
                            "recommendation": "Use more concrete implementation stories and integration details to reduce the gap between visionary messaging and day-to-day buyer needs."
                        }
                    ],
                    "scorecardOverall": 8.1,
                    "public_identifier": "sambanova",
                    "messagingEvolution": [
                        {
                            "theme": "From training to inference: inference is the new battleground, and disaggregated architecture is the answer",
                            "period": "June 2026"
                        },
                        {
                            "theme": "Product proof: premium inference, faster agents, and open-model performance on SambaCloud",
                            "period": "Late June 2026"
                        },
                        {
                            "theme": "Scale and legitimacy: VC2 launch, major partner ecosystem, and public-market style validation",
                            "period": "Early July 2026"
                        },
                        {
                            "theme": "Category leadership: premium inference, sovereign AI, power efficiency, and enterprise production deployments",
                            "period": "Late July to August 2026"
                        },
                        {
                            "theme": "Category education and simplification: explaining premium inference, agentic AI latency, and why the workload matters",
                            "period": "Mid-August 2026"
                        }
                    ]
                },
                "summary": "Here’s a clear comparison between the two SambaNova datasets.\n\n## High-level verdict\nThey are **very similar overall**, but **Company 1 is far more complete and richer**.\n\n- **Company 1** = a much deeper profile with more posts, more supporting sections, stronger strategic analysis, and broader metadata.\n- **Company 2** = a shorter, cleaner extract that captures the same core narrative, but with less depth and fewer posts.\n\n## Main similarities\nBoth versions describe SambaNova as:\n- An **AI infrastructure company**\n- Focused on **inference-first / premium inference**\n- Promoting **disaggregated inference**\n- Emphasizing **GPUs for prefill, RDUs for decode, CPUs for orchestration**\n- Strong on:\n  - **customer proof**\n  - **benchmark validation**\n  - **media validation**\n  - **enterprise / sovereign / on-prem messaging**\n  - **event-driven thought leadership**\n\nBoth also show:\n- Similar positioning around **agentic AI**\n- Repeated use of **Rodrigo Liang** and other executives\n- Heavy reliance on **benchmarks, partnerships, and customer stories**\n- Similar **scorecard overall: 8.1**\n\n## Key differences\n\n### 1) Depth and completeness\n**Company 1** includes:\n- More posts\n- More structured sections:\n  - stats\n  - summary\n  - strategy\n  - campaigns\n  - messaging\n  - scorecard\n  - competitive\n  - recommendations\n  - personas\n  - launch timeline\n  - messaging evolution\n  - topic clusters\n  - audience detail\n- A fuller company/profile description\n\n**Company 2** includes:\n- A shorter summary of the same themes\n- Fewer supporting analytics sections\n- A smaller post sample in the visible “items” list\n- Less narrative elaboration\n\n### 2) Post volume\n- **Company 1**: explicitly says **100 posts analyzed**\n- **Company 2**: says **50 posts analyzed**\n\nSo Company 1 is the more complete dataset.\n\n### 3) Strategic framing\n**Company 1** goes further in its analysis:\n- More specific about:\n  - category creation\n  - audience personas\n  - content mix\n  - CTA patterns\n  - competitive recommendations\n  - messaging evolution over time\n\n**Company 2** is more concise and operational:\n- Stronger on practical marketing takeaways\n- Less exhaustive in trend interpretation\n\n### 4) Format and structure\n**Company 1** looks like a full intelligence report.\n**Company 2** looks like a compressed version of the same report.\n\n## Which one is better?\nIf your goal is:\n- **deep analysis** → **Company 1**\n- **quick overview** → **Company 2**\n- **marketing strategy / competitive intelligence** → **Company 1**\n- **clean summary for briefing** → **Company 2**\n\n## Bottom line\n**Both tell the same story**, but **Company 1 is the more authoritative and actionable source** because it has:\n- more posts,\n- more metrics,\n- more segmentation,\n- more strategy detail,\n- and more complete competitive/contextual insight.\n\nIf you want, I can also turn this into a:\n1. **side-by-side table**, or  \n2. **short executive summary**, or  \n3. **differences-only comparison**."
            }
        ],
        "stdout": ""
    },
    "metadata": {
        "duration": 2184.767535984516,
        "startTime": "2026-08-18T09:49:48.629Z",
        "endTime": "2026-08-18T09:49:50.815Z"
    }
}

3) Once the analysis report is created
Instead of run Competitor analysis They have 2 options  1. Playbook 2. Competitor Analysis 

Once the user clicks on Competitor Analysis 
Open the pop up … need to show a text and the analysis block … 
The same API needs to be called for this .. 
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


The response is the same 

Then the user selects the company 

Then the Api call 
curl --location 'https://agent.thearena.ai/api/workflows/13e76c2b-bbdc-43c5-835e-92027a6c43e9/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'X-Sim-Stream-Protocol: agent-events-v1' \
--header 'Content-Type: application/json' \
--data-raw '{"companyName":"Position2","companyId":"60223","email":"anush.ms@position2.com","type”:”COMPETITOR”,”isCompetitor”:true,”id”:”ID” from the PREVIOUS RESPONSE,”stream":true,"selectedOutputs":["strategyagent.strategy","strategyagent.personas","strategyagent.hookLibrary","strategyagent.ctaLibrary","strategyagent.audienceDetail","contentcreativeagent.content","contentcreativeagent.creative","contentcreativeagent.engagement","contentcreativeagent.topicClusters","messagingagent.company","messagingagent.messaging","messagingagent.stats","messagingagent.summary","creativeinsightagent.imageryTypes","creativeinsightagent.recommendations","creativeinsightagent.observations","creativeinsightagent.textStyle","competitiveagent.campaigns","competitiveagent.competitive","competitiveagent.launches","competitiveagent.messagingEvolution","competitiveagent.recommendations","competitiveagent.scorecard","competitiveagent.scorecardOverall","getcompanyprofile.id","getcompanyprofile.name","getcompanyprofile.description","getcompanyprofile.public_identifier","getcompanyprofile.profile_url","getcompanyprofile.followers_count","getcompanyprofile.employee_count","getcompanyprofile.website","getcompanyprofile.logo","getcompanyprofile.profile","getcompanypost.items"],"includeThinking":false,"includeToolCalls":false}'


The response is the same 

If user selects 
Playbook
If the data is not present for Competitors then only own option should show up … 
Else own or competitor option should show up … 

This will be a radio button .. 
Button for Playbook .. 
Use the below API for the same .. 
curl --location 'https://agent.thearena.ai/api/workflows/00bfdfb5-3726-4a32-a130-1eeb51d6a238/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"email":"anush.ms@position2.com","id":"1787042977529","stream":false,"selectedOutputs":["playbookagent.content"],"includeThinking":false,"includeToolCalls":false}'

API response:

{
    "success": true,
    "executionId": "25048653-e723-4dc7-aedd-f292976caaac",
    "output": {
        "content": "{\n  \"headline\": \"Convert strong category ownership into pipeline by replacing repetitive inference messaging with audience-specific customer proof and stronger next-step CTAs.\",\n  \"quickWins\": [\n    \"Add one concrete conversion CTA to every product or benchmark post, such as request a demo, download the technical brief, run the benchmark, or start with the API; CTA Effectiveness is the lowest score at 6.\",\n    \"Turn the independently validated SN50 claim—over 3x faster than GPUs—into separate posts for developers, enterprise AI leaders, and data-center operators, each tied to a relevant business outcome.\",\n    \"Reduce same-day and same-theme clustering; publish fewer standalone recaps and consolidate launch or event coverage into proof-led carousels and short videos.\"\n  ],\n  \"recommendations\": [\n    {\n      \"area\": \"Conversion strategy\",\n      \"action\": \"Map every major content pillar to a specific next step: API start for developers, benchmark brief for technical evaluators, architecture assessment for infrastructure leaders, and demo request for CIO/CTO audiences.\",\n      \"impact\": \"Addresses the CTA Effectiveness score of 6 and turns high awareness around premium inference into measurable buyer progression.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Customer proof\",\n      \"action\": \"Publish a recurring implementation series using existing proof points such as Ricoh's up to 10x faster inference, General Compute's 5x faster response times, and JPMorganChase's secure on-prem deployment.\",\n      \"impact\": \"Customer and validation content already drives credibility; the July 8 financing and JPMorganChase announcement generated 542 reactions and 30 comments.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Audience segmentation\",\n      \"action\": \"Create distinct weekly posts for the report's priority personas: developers and AI engineering leaders, CIO/CTO buyers, data-center operators, and sovereign/public-sector stakeholders.\",\n      \"impact\": \"Reduces repetition across the dominant premium-inference and disaggregated-inference themes while making benefits more relevant to each buying group.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Creative mix\",\n      \"action\": \"Expand document carousels beyond the monthly digest with benchmark breakdowns, architecture diagrams, deployment checklists, and customer before-and-after stories.\",\n      \"impact\": \"Content Diversity scores 7, while the feed relies heavily on video and single-image assets; more saveable technical documents can deepen evaluation-stage engagement.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Thought leadership\",\n      \"action\": \"Continue contrarian hooks such as 'One chip to rule them all? No thanks,' but follow each argument with a workload example, quantified proof point, and buyer implication.\",\n      \"impact\": \"Preserves the Thought Leadership score of 9 while preventing repeated architecture messaging from becoming abstract or interchangeable.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Employee amplification\",\n      \"action\": \"Build an amplification roster across product, engineering, solutions, and customer-facing teams; give each featured expert a short personal post and comment prompt when technical or launch content goes live.\",\n      \"impact\": \"The account has approximately 400 employees, but visible authority is concentrated around Rodrigo Liang and a limited set of leaders; broader practitioner voices can extend reach and strengthen Employer Branding, currently scored 7.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Publishing cadence\",\n      \"action\": \"Move from burst-heavy publishing to a six-post weekly plan: two proof posts, two educational posts, one executive or practitioner post, and one ecosystem or employer-brand post.\",\n      \"impact\": \"Maintains strong consistency while creating more space between similar messages and improving the quality of each conversion opportunity.\",\n      \"priority\": \"High\"\n    }\n  ],\n  \"currentVsTarget\": {\n    \"currentPostsPerWeek\": 8.5,\n    \"targetPostsPerWeek\": 6,\n    \"rationale\": \"The provided report does not expose engagement.cadence.avgPerWeek, so the current rate is calculated from 100 posts across the stated May 28-August 17 period. Consistency is already excellent at 10, but repeated premium-inference language, event bursts, Content Diversity of 7, and CTA Effectiveness of 6 indicate that fewer, more differentiated posts would be more valuable than increasing volume.\"\n  },\n  \"gaps\": [\n    \"Conversion paths are weak relative to product-marketing strength: Product Marketing scores 10, but CTA Effectiveness scores 6, and many posts end with generic asks such as 'Read more' or 'Watch below.'\",\n    \"The content mix is concentrated around premium inference and disaggregated infrastructure, which account for the two largest topic clusters; similar architecture language is frequently repeated without a new persona-specific outcome.\",\n    \"Customer proof exists but is underdeveloped as an ongoing format: Ricoh, General Compute, JPMorganChase, Argonne, TACC, and SCX appear, yet much of the feed remains event, media, benchmark, or announcement-led.\",\n    \"Document content is underused compared with video and single-image posts; the monthly Lightning Digest is one of the limited visible carousel or PDF-style assets.\",\n    \"Employer branding is secondary to product marketing, reflected in a score of 7; leadership hires perform strongly, but recurring engineering culture and practitioner stories are limited.\",\n    \"Authority is concentrated around executives and external media; more solutions engineers, architects, and product leaders could translate technical differentiation into practical workflows.\",\n    \"Impression data is unavailable and the report's best and worst post arrays are empty, limiting engagement-rate and format-efficiency analysis; current optimization must rely on visible reactions, comments, and reposts.\"\n  ],\n  \"campaignIdeas\": [\n    {\n      \"name\": \"Inference in Production\",\n      \"concept\": \"A customer-proof series showing the workload, deployment constraint, architecture choice, and measured outcome. Start with Ricoh, General Compute, and JPMorganChase.\",\n      \"cadence\": \"One customer story per week for six weeks, supported by one executive or technical employee amplification post.\",\n      \"cta\": \"Download the deployment brief or request an inference architecture assessment.\"\n    },\n    {\n      \"name\": \"One Workload, Three Jobs\",\n      \"concept\": \"A visual educational series explaining prefill on GPUs, decode on RDUs, and orchestration on CPUs through coding-agent, voice-agent, and enterprise-assistant scenarios.\",\n      \"cadence\": \"One document carousel and one short video every two weeks.\",\n      \"cta\": \"See the reference architecture and compare it with your current stack.\"\n    },\n    {\n      \"name\": \"Proof, Not Promises\",\n      \"concept\": \"Package SemiAnalysis and Artificial Analysis validation into benchmark cards, methodology explainers, and workload-specific interpretations, including the reported over 3x GPU comparison and approximately 800 tokens per second results.\",\n      \"cadence\": \"Two posts around each validated benchmark: one technical breakdown and one business-outcome post.\",\n      \"cta\": \"Download the benchmark methodology or run the model through the API.\"\n    },\n    {\n      \"name\": \"Built for Existing Data Centers\",\n      \"concept\": \"Target data-center and cloud-operations leaders with content about air cooling, lower power, existing-facility deployment, and extending existing GPU infrastructure with decode acceleration.\",\n      \"cadence\": \"One technical post per week for four weeks, ending with a live expert session.\",\n      \"cta\": \"Book a data-center fit assessment.\"\n    }\n  ],\n  \"activities\": [\n    \"Create a six-post weekly editorial matrix organized by persona, funnel stage, proof type, format, and CTA.\",\n    \"Build reusable customer-story templates covering challenge, architecture, deployment, quantified result, and customer quote.\",\n    \"Repurpose each benchmark into a short video, a document carousel, an executive perspective, and a technical FAQ instead of repeating the same message in similar posts.\",\n    \"Use the July 8 financing and JPMorganChase post structure as a model for major announcements: significant news, recognizable proof, enterprise relevance, and a clear production-use narrative.\",\n    \"Create an employee advocacy kit for approximately 400 employees with suggested comments, personal-post prompts, and technical talking points for launches and customer stories.\",\n    \"Review visible reactions, comments, and reposts by topic and format every month; do not calculate engagement rates until reliable impression data is available.\",\n    \"Test direct CTAs against generic CTAs on comparable product posts, using demo requests, technical-brief downloads, API starts, and event registrations as the conversion actions.\"\n  ],\n  \"engagementPlays\": [\n    \"Prioritize milestone-plus-enterprise-proof posts: the July 8 financing and JPMorganChase announcement led the analyzed set with 542 reactions and 30 comments.\",\n    \"Use independent validation prominently in the opening lines; the SemiAnalysis SN50 benchmark post earned 157 reactions and 29 reposts, showing that third-party proof is highly shareable.\",\n    \"Feature people alongside company momentum: the Mohsen Moazami leadership announcement generated 149 reactions and 14 comments, while the CFO and EVP of Software announcements generated 257 and 248 reactions respectively.\",\n    \"Pair executive access with recognizable institutions; Rodrigo Liang's NYSE post generated 183 reactions, and the RAISE interview recap generated 113 reactions.\",\n    \"Ask technically specific discussion questions rather than ending only with a link, such as which inference stage is the current bottleneck or whether power, latency, or sovereignty is blocking production deployment.\",\n    \"Tag participating customers, analysts, partners, and featured employees, then coordinate substantive first-hour comments that add implementation details rather than simple congratulations.\",\n    \"Use underrepresented document carousels for saveable assets such as benchmark methodology, prefill-decode diagrams, prompt-caching economics, and deployment checklists.\"\n  ]\n}",
        "model": "gpt-5.6-sol",
        "tokens": {
            "input": 3,
            "output": 2564,
            "total": 151128,
            "cacheRead": 0,
            "cacheWrite": 148561
        },
        "providerTiming": {
            "startTime": "2026-08-18T09:20:39.410Z",
            "endTime": "2026-08-18T09:21:26.611Z",
            "duration": 47201,
            "modelTime": 47200,
            "toolsTime": 0,
            "firstResponseTime": 47200,
            "iterations": 1,
            "timeSegments": [
                {
                    "type": "model",
                    "name": "gpt-5.6-sol",
                    "startTime": 1787044839410,
                    "endTime": 1787044886610,
                    "duration": 47200,
                    "assistantContent": "{\n  \"headline\": \"Convert strong category ownership into pipeline by replacing repetitive inference messaging with audience-specific customer proof and stronger next-step CTAs.\",\n  \"quickWins\": [\n    \"Add one concrete conversion CTA to every product or benchmark post, such as request a demo, download the technical brief, run the benchmark, or start with the API; CTA Effectiveness is the lowest score at 6.\",\n    \"Turn the independently validated SN50 claim—over 3x faster than GPUs—into separate posts for developers, enterprise AI leaders, and data-center operators, each tied to a relevant business outcome.\",\n    \"Reduce same-day and same-theme clustering; publish fewer standalone recaps and consolidate launch or event coverage into proof-led carousels and short videos.\"\n  ],\n  \"recommendations\": [\n    {\n      \"area\": \"Conversion strategy\",\n      \"action\": \"Map every major content pillar to a specific next step: API start for developers, benchmark brief for technical evaluators, architecture assessment for infrastructure leaders, and demo request for CIO/CTO audiences.\",\n      \"impact\": \"Addresses the CTA Effectiveness score of 6 and turns high awareness around premium inference into measurable buyer progression.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Customer proof\",\n      \"action\": \"Publish a recurring implementation series using existing proof points such as Ricoh's up to 10x faster inference, General Compute's 5x faster response times, and JPMorganChase's secure on-prem deployment.\",\n      \"impact\": \"Customer and validation content already drives credibility; the July 8 financing and JPMorganChase announcement generated 542 reactions and 30 comments.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Audience segmentation\",\n      \"action\": \"Create distinct weekly posts for the report's priority personas: developers and AI engineering leaders, CIO/CTO buyers, data-center operators, and sovereign/public-sector stakeholders.\",\n      \"impact\": \"Reduces repetition across the dominant premium-inference and disaggregated-inference themes while making benefits more relevant to each buying group.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Creative mix\",\n      \"action\": \"Expand document carousels beyond the monthly digest with benchmark breakdowns, architecture diagrams, deployment checklists, and customer before-and-after stories.\",\n      \"impact\": \"Content Diversity scores 7, while the feed relies heavily on video and single-image assets; more saveable technical documents can deepen evaluation-stage engagement.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Thought leadership\",\n      \"action\": \"Continue contrarian hooks such as 'One chip to rule them all? No thanks,' but follow each argument with a workload example, quantified proof point, and buyer implication.\",\n      \"impact\": \"Preserves the Thought Leadership score of 9 while preventing repeated architecture messaging from becoming abstract or interchangeable.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Employee amplification\",\n      \"action\": \"Build an amplification roster across product, engineering, solutions, and customer-facing teams; give each featured expert a short personal post and comment prompt when technical or launch content goes live.\",\n      \"impact\": \"The account has approximately 400 employees, but visible authority is concentrated around Rodrigo Liang and a limited set of leaders; broader practitioner voices can extend reach and strengthen Employer Branding, currently scored 7.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Publishing cadence\",\n      \"action\": \"Move from burst-heavy publishing to a six-post weekly plan: two proof posts, two educational posts, one executive or practitioner post, and one ecosystem or employer-brand post.\",\n      \"impact\": \"Maintains strong consistency while creating more space between similar messages and improving the quality of each conversion opportunity.\",\n      \"priority\": \"High\"\n    }\n  ],\n  \"currentVsTarget\": {\n    \"currentPostsPerWeek\": 8.5,\n    \"targetPostsPerWeek\": 6,\n    \"rationale\": \"The provided report does not expose engagement.cadence.avgPerWeek, so the current rate is calculated from 100 posts across the stated May 28-August 17 period. Consistency is already excellent at 10, but repeated premium-inference language, event bursts, Content Diversity of 7, and CTA Effectiveness of 6 indicate that fewer, more differentiated posts would be more valuable than increasing volume.\"\n  },\n  \"gaps\": [\n    \"Conversion paths are weak relative to product-marketing strength: Product Marketing scores 10, but CTA Effectiveness scores 6, and many posts end with generic asks such as 'Read more' or 'Watch below.'\",\n    \"The content mix is concentrated around premium inference and disaggregated infrastructure, which account for the two largest topic clusters; similar architecture language is frequently repeated without a new persona-specific outcome.\",\n    \"Customer proof exists but is underdeveloped as an ongoing format: Ricoh, General Compute, JPMorganChase, Argonne, TACC, and SCX appear, yet much of the feed remains event, media, benchmark, or announcement-led.\",\n    \"Document content is underused compared with video and single-image posts; the monthly Lightning Digest is one of the limited visible carousel or PDF-style assets.\",\n    \"Employer branding is secondary to product marketing, reflected in a score of 7; leadership hires perform strongly, but recurring engineering culture and practitioner stories are limited.\",\n    \"Authority is concentrated around executives and external media; more solutions engineers, architects, and product leaders could translate technical differentiation into practical workflows.\",\n    \"Impression data is unavailable and the report's best and worst post arrays are empty, limiting engagement-rate and format-efficiency analysis; current optimization must rely on visible reactions, comments, and reposts.\"\n  ],\n  \"campaignIdeas\": [\n    {\n      \"name\": \"Inference in Production\",\n      \"concept\": \"A customer-proof series showing the workload, deployment constraint, architecture choice, and measured outcome. Start with Ricoh, General Compute, and JPMorganChase.\",\n      \"cadence\": \"One customer story per week for six weeks, supported by one executive or technical employee amplification post.\",\n      \"cta\": \"Download the deployment brief or request an inference architecture assessment.\"\n    },\n    {\n      \"name\": \"One Workload, Three Jobs\",\n      \"concept\": \"A visual educational series explaining prefill on GPUs, decode on RDUs, and orchestration on CPUs through coding-agent, voice-agent, and enterprise-assistant scenarios.\",\n      \"cadence\": \"One document carousel and one short video every two weeks.\",\n      \"cta\": \"See the reference architecture and compare it with your current stack.\"\n    },\n    {\n      \"name\": \"Proof, Not Promises\",\n      \"concept\": \"Package SemiAnalysis and Artificial Analysis validation into benchmark cards, methodology explainers, and workload-specific interpretations, including the reported over 3x GPU comparison and approximately 800 tokens per second results.\",\n      \"cadence\": \"Two posts around each validated benchmark: one technical breakdown and one business-outcome post.\",\n      \"cta\": \"Download the benchmark methodology or run the model through the API.\"\n    },\n    {\n      \"name\": \"Built for Existing Data Centers\",\n      \"concept\": \"Target data-center and cloud-operations leaders with content about air cooling, lower power, existing-facility deployment, and extending existing GPU infrastructure with decode acceleration.\",\n      \"cadence\": \"One technical post per week for four weeks, ending with a live expert session.\",\n      \"cta\": \"Book a data-center fit assessment.\"\n    }\n  ],\n  \"activities\": [\n    \"Create a six-post weekly editorial matrix organized by persona, funnel stage, proof type, format, and CTA.\",\n    \"Build reusable customer-story templates covering challenge, architecture, deployment, quantified result, and customer quote.\",\n    \"Repurpose each benchmark into a short video, a document carousel, an executive perspective, and a technical FAQ instead of repeating the same message in similar posts.\",\n    \"Use the July 8 financing and JPMorganChase post structure as a model for major announcements: significant news, recognizable proof, enterprise relevance, and a clear production-use narrative.\",\n    \"Create an employee advocacy kit for approximately 400 employees with suggested comments, personal-post prompts, and technical talking points for launches and customer stories.\",\n    \"Review visible reactions, comments, and reposts by topic and format every month; do not calculate engagement rates until reliable impression data is available.\",\n    \"Test direct CTAs against generic CTAs on comparable product posts, using demo requests, technical-brief downloads, API starts, and event registrations as the conversion actions.\"\n  ],\n  \"engagementPlays\": [\n    \"Prioritize milestone-plus-enterprise-proof posts: the July 8 financing and JPMorganChase announcement led the analyzed set with 542 reactions and 30 comments.\",\n    \"Use independent validation prominently in the opening lines; the SemiAnalysis SN50 benchmark post earned 157 reactions and 29 reposts, showing that third-party proof is highly shareable.\",\n    \"Feature people alongside company momentum: the Mohsen Moazami leadership announcement generated 149 reactions and 14 comments, while the CFO and EVP of Software announcements generated 257 and 248 reactions respectively.\",\n    \"Pair executive access with recognizable institutions; Rodrigo Liang's NYSE post generated 183 reactions, and the RAISE interview recap generated 113 reactions.\",\n    \"Ask technically specific discussion questions rather than ending only with a link, such as which inference stage is the current bottleneck or whether power, latency, or sovereignty is blocking production deployment.\",\n    \"Tag participating customers, analysts, partners, and featured employees, then coordinate substantive first-hour comments that add implementation details rather than simple congratulations.\",\n    \"Use underrepresented document carousels for saveable assets such as benchmark methodology, prefill-decode diagrams, prompt-caching economics, and deployment checklists.\"\n  ]\n}",
                    "finishReason": "stop",
                    "tokens": {
                        "input": 148564,
                        "output": 2564,
                        "total": 151128,
                        "cacheWrite": 148561,
                        "reasoning": 516
                    },
                    "cost": {
                        "input": 0.92852125,
                        "output": 0.07692,
                        "total": 1.00544125
                    },
                    "provider": "openai"
                }
            ]
        },
        "cost": {
            "input": 0.92852125,
            "output": 0.07692,
            "total": 1.00544125,
            "pricing": {
                "input": 5,
                "cachedInput": 0.5,
                "output": 30,
                "updatedAt": "2026-07-09"
            }
        }
    },
    "metadata": {
        "duration": 48369.99447798729,
        "startTime": "2026-08-18T09:20:38.242Z",
        "endTime": "2026-08-18T09:21:26.614Z"
    }
}


If the user clicks on 

### Notes on filling this in
- **Input Field(s):** list whatever the user actually types in to generate a result — could be 1 field or several.
- **Output shape:** describe it generically enough to cover what your tool actually produces (a document, an image prompt, a code snippet, a plan, etc.) — don't assume "headings + article" unless that's true.
- **Accent color / card style:** pull directly from the tool's existing CSS/Tailwind classes so the History view doesn't clash.
- If the tool has more than one "generate" action (e.g. regenerate, refine), decide whether each counts as a new history entry or overwrites the previous one, and add a line specifying that.








Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
