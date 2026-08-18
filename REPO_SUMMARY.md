# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-18T10:36:29.876Z.

## Overview

LinkedIn Intelligence (Watchtower). Edit: (1) Fixed Playbook generation/rendering — app/api/playbook/route.ts now sends exactly the documented playbook API payload (email, id, stream:false, selectedOutputs:['playbookagent.content']), strips markdown code fences from the returned content, and falls back to returning the raw content as playbookText when it is not strict JSON; components/PlaybookModal.tsx now renders the structured playbook as before AND renders raw playbook content as rich text (headings, bullet lists, bold) via a new RichText renderer. (2) components/CompetitorModal.tsx now runs the competitor analysis itself (POST /api/analyze with analysisType:'competitor' and optional parentId, which the existing route forwards as type:COMPETITOR, isCompetitor:true, id:parentId) and renders the full competitor report INSIDE the popup only — it no longer calls onSelect, so competitor data never replaces the main screen; onSelect stays optional in the props interface for backward compatibility and a new optional parentId prop links the run to the previous analysis. prisma/schema.prisma is returned unchanged (no column edited, none removed, updatedAt preserved). No other files touched.

**Repository:** `linkedin-intelligence`  
**File count:** 42

## Features

- Company search via Arena workflow
- Own-brand LinkedIn intelligence analysis
- Competitor analysis rendered inside the popup only
- Strategic playbook generation with rich-text rendering
- Saved analysis history per Arena email id

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

- **Updated at:** 2026-08-18T10:36:29.876Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:

1)  Playbook Option is not rendering properly 
Here is the API 
curl --location 'https://agent.thearena.ai/api/workflows/00bfdfb5-3726-4a32-a130-1eeb51d6a238/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"email":"anush.ms@position2.com","id":"1787042977529","stream":false,"selectedOutputs":["playbookagent.content"],"includeThinking":false,"includeToolCalls":false}'

Reponse:
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
        "toolCalls": {
            "list": [],
            "count": 0
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

Show the content Make it rich text … 


2) Once the user clicks on Competitor analysis …
The data she be there in the popup only … don’t show it in in the Main screen .. 
Also in the API 

curl --location 'https://agent.thearena.ai/api/workflows/13e76c2b-bbdc-43c5-835e-92027a6c43e9/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data-raw '{"companyName":"Position2","companyId":"60223","email":"anush.ms@position2.com","type”:”COMPETITOR”,”isCompetitor”:true,”id”:”Id from the previosu run “,”stream":true,"selectedOutputs":["strategyagent.strategy","strategyagent.personas","strategyagent.hookLibrary","strategyagent.ctaLibrary","strategyagent.audienceDetail","contentcreativeagent.content","contentcreativeagent.creative","contentcreativeagent.engagement","contentcreativeagent.topicClusters","messagingagent.company","messagingagent.messaging","messagingagent.stats","messagingagent.summary","creativeinsightagent.imageryTypes","creativeinsightagent.recommendations","creativeinsightagent.observations","creativeinsightagent.textStyle","competitiveagent.campaigns","competitiveagent.competitive","competitiveagent.launches","competitiveagent.messagingEvolution","competitiveagent.recommendations","competitiveagent.scorecard","competitiveagent.scorecardOverall","getcompanyprofile.id","getcompanyprofile.name","getcompanyprofile.description","getcompanyprofile.public_identifier","getcompanyprofile.profile_url","getcompanyprofile.followers_count","getcompanyprofile.employee_count","getcompanyprofile.website","getcompanyprofile.logo","getcompanyprofile.profile","getcompanypost.items"],"includeThinking":false,"includeToolCalls":false}'









Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
