# Repository Summary: LinkedIn Intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-17T12:47:38.220Z.

## Overview

Premium LinkedIn organic intelligence SaaS: search a company, pick the right LinkedIn profile, run Own Brand or Competitor analysis, and explore a structured intelligence dashboard.

**Repository:** `linkedin-intelligence`  
**File count:** 38

## Features

- Company search via Arena workflow with server-side API key proxy
- Company selection cards with Own Brand / Competitor actions
- Streaming-style analysis progress experience
- Structured intelligence dashboard with section navigation
- Analysis history persisted per Arena email in Neon Postgres

## Tech Stack

- Next.js ^15.3.3 (App Router)
- React ^19.0.0
- Tailwind CSS v3
- TypeScript
- Prisma + PostgreSQL (Neon on Vercel)

## Infrastructure

- **Neon project ID:** `sweet-base-09444370` — managed by Sim Development; do not delete or replace
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
- `app/not-found.tsx`
- `app/page.tsx`
- `app/report/[id]/page.tsx`

### API routes

- `app/api/analyze/route.ts`
- `app/api/search/route.ts`

### Components

- `components/AnalysisProgress.tsx`
- `components/AppHeader.tsx`
- `components/CompanyLogo.tsx`
- `components/CompanyResults.tsx`
- `components/DataRenderer.tsx`
- `components/HistoryClient.tsx`
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
- `.gitignore`
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
- `.gitignore`
- `README.md`
- `REPO_SUMMARY.md`
- `app/access-denied/page.tsx`
- `app/api/analyze/route.ts`
- `app/api/search/route.ts`
- `app/arena-ds-tokens.css`
- `app/globals.css`
- `app/history/page.tsx`
- `app/layout.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `app/report/[id]/page.tsx`
- `components/AnalysisProgress.tsx`
- `components/AppHeader.tsx`
- `components/CompanyLogo.tsx`
- `components/CompanyResults.tsx`
- `components/DataRenderer.tsx`
- `components/HistoryClient.tsx`
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

- **Updated at:** 2026-08-17T12:47:38.220Z
- **Request:** Build a polished LinkedIn Intelligence / LinkedIn Organic Intelligence application matching the visual style and interaction patterns of the supplied reference screenshots.
The application should feel like a premium SaaS analytics product: minimal, clean, spacious, modern, professional, and desktop-first while remaining fully responsive.
Do not add an Own Brand / Competitor toggle on the search page.
The workflow must be:
Search company → Show matching LinkedIn companies → User chooses Own Brand Analysis or Competitor Analysis → Run selected analysis → Render intelligence dashboard from API response.

1. Search Landing Page
Recreate the first supplied screen, but remove the Own Brand / Competitor selector entirely.
The top header should contain:
	•	Product icon/logo on the left
	•	Product title: LinkedIn Intelligence
	•	Small subtitle: WATCHTOWER
	•	Search / History navigation on the right
Below the header, create a large centered search input.
Placeholder:
Company name
Place a prominent gradient Analyze button on the right side of the input.
The user should first enter only the company they are interested in.
Examples can appear below the hero:
	•	Position2
	•	Sambanova
	•	Stripe
Clicking one of these examples should populate the search field.
Hero content:
Organic LinkedIn intelligence
Heading:
Decode any company's LinkedIn playbook
Supporting text:
Type a company name. Watchtower resolves the profile, analyzes organic LinkedIn activity, and turns it into messaging, creative, engagement, audience, and strategic intelligence.
Below the hero, show three information cards:
Messaging & creative decode
Themes, hooks, CTAs, tone, formats, imagery, and caption mechanics — everything a company ships on organic LinkedIn.
Engagement forensics
Best and worst posts, cadence, posting patterns, reaction breakdowns, engagement behavior, and trend lines.
Actionable playbook
A prioritized strategic plan with quick wins, content opportunities, campaign ideas, messaging gaps, and recommendations.
Do not show Own Brand or Competitor controls on this screen.

2. Company Search API
When the user enters a company and clicks Analyze, call the company search workflow.
Endpoint:
POST https://agent.thearena.ai/api/workflows/c821b89f-5f32-44b3-9cc6-c0eea5b72b36/execute
Headers:
Content-Type: application/json
X-API-Key: <ARENA_API_KEY>
Do NOT expose the API key directly in browser/client-side code.
Store the key securely as an environment variable and invoke the Arena endpoint through a server-side API route/proxy.
Request:
{
  "companyName": "<USER_INPUT>",
  "stream": false,
  "selectedOutputs": [
    "companylistingagent.companies"
  ],
  "includeThinking": false,
  "includeToolCalls": false
}

3. Search API Response Mapping
The relevant payload is:
response.output.companies
Ignore unrelated response information such as:
	•	executionId
	•	model
	•	tokens
	•	cost
	•	providerTiming
	•	toolCalls
	•	metadata
	•	assistantContent
Only use the company array to render company choices.
Each company can contain:
{
  "description": "...",
  "followers_count": 6000,
  "id": "17963180",
  "industry": "Advertising Services",
  "linkedinUrl": null,
  "location": "Rushcutters Bay, New South Wales",
  "logo": "https://...",
  "name": "Example",
  "profile_url": "https://www.linkedin.com/company/we-are-example",
  "sources": ["linkedin"],
  "summary": "...",
  "type": "COMPANY",
  "website": null
}
Use:
	•	company.id
	•	company.name
	•	company.logo
	•	company.industry
	•	company.location
	•	company.description
	•	company.summary
	•	company.followers_count
	•	company.profile_url
The API can return multiple companies with similar names, so never automatically choose the first result.

4. Loading State During Search
Once Analyze is clicked:
Disable the search field and Analyze button.
Change the Analyze button state to something like:
Searching LinkedIn…
Show an elegant loading state.
Use:
	•	subtle animated gradient
	•	skeleton cards
	•	progress indicator
	•	short message such as: Finding matching LinkedIn companies…
Do not immediately navigate to an empty page.
When the response arrives, transition smoothly into the company-selection screen.
If the result contains no companies, show:
No matching companies found
Supporting message:
Try a different company name, LinkedIn URL, or numeric company ID.
Provide:
Back to search

5. Company Selection Screen
Follow the visual structure of the second supplied screenshot.
At the top-left:
← Back to search
Section heading:
SELECT THE RIGHT COMPANY
Render the returned companies as large cards in a responsive two-column grid.
Each company card should show:
Company identity
Logo
If logo is null, show a polished generated fallback avatar using the first letter of the company name.
Company name
Industry and location:
Advertising Services · Santa Clara, California, US
Only render values that exist.
Company description
Use:
description || summary
Limit the preview to approximately 2–3 lines.
Add ellipsis for long descriptions.
Followers
Show a subtle pill:
9K followers
Format values intelligently:
	•	600 → 600 followers
	•	6000 → 6K followers
	•	9500 → 9.5K followers
	•	125000 → 125K followers
	•	1500000 → 1.5M followers
LinkedIn link
If profile_url exists, allow the LinkedIn profile to be opened in a new tab.

6. Replace Analyze With TWO Actions
The supplied design currently shows:
Analyze →
Replace that with two clearly differentiated actions on every company card:
Primary action
Own Brand Analysis
Secondary action
Competitor Analysis
These actions should only appear after the company has been identified.
This is intentionally different from putting Own Brand / Competitor selection on the search page.
The user first identifies the company.
Then they decide what kind of analysis they want.
The card footer should conceptually look like:
6K followers              Own Brand Analysis    Competitor Analysis →
On narrower screens, stack the actions cleanly below the company information.
Use a visually stronger style for Own Brand Analysis and a secondary outlined/subtle style for Competitor Analysis.
Do not make the entire card accidentally trigger an analysis.
Only these explicit buttons should start an analysis.

7. Selected Company Data
When the user clicks either analysis option, persist at least:
{
  companyName: company.name,
  companyId: company.id,
  companyLogo: company.logo,
  industry: company.industry,
  location: company.location,
  followers: company.followers_count,
  description: company.description || company.summary,
  profileUrl: company.profile_url,
  analysisType: "own-brand" | "competitor"
}
IMPORTANT:
Use:
company.id
for companyId.
Do not substitute another identifier.

8. Own Brand Analysis API
When Own Brand Analysis is clicked, invoke:
POST https://agent.thearena.ai/api/workflows/13e76c2b-bbdc-43c5-835e-92027a6c43e9/execute
Headers:
Content-Type: application/json
X-API-Key: <ARENA_API_KEY>
Again, proxy this through the server so the API key is not exposed in the client.
Construct the payload dynamically from the selected company.
Example:
{
  "companyName": "Position2",
  "companyId": "60223",
  "stream": true,
  "selectedOutputs": [
    "strategyagent.strategy",
    "strategyagent.personas",
    "strategyagent.hookLibrary",
    "strategyagent.ctaLibrary",
    "strategyagent.audienceDetail",

    "contentcreativeagent.content",
    "contentcreativeagent.creative",
    "contentcreativeagent.engagement",
    "contentcreativeagent.topicClusters",

    "messagingagent.company",
    "messagingagent.messaging",
    "messagingagent.stats",
    "messagingagent.summary",

    "creativeinsightagent.imageryTypes",
    "creativeinsightagent.recommendations",
    "creativeinsightagent.observations",
    "creativeinsightagent.textStyle",

    "competitiveagent.campaigns",
    "competitiveagent.competitive",
    "competitiveagent.launches",
    "competitiveagent.messagingEvolution",
    "competitiveagent.recommendations",
    "competitiveagent.scorecard",
    "competitiveagent.scorecardOverall",

    "getcompanyprofile.id",
    "getcompanyprofile.name",
    "getcompanyprofile.description",
    "getcompanyprofile.public_identifier",
    "getcompanyprofile.profile_url",
    "getcompanyprofile.followers_count",
    "getcompanyprofile.employee_count",
    "getcompanyprofile.website",
    "getcompanyprofile.logo",
    "getcompanyprofile.profile",

    "getcompanypost.items"
  ],
  "includeThinking": false,
  "includeToolCalls": false
}
Replace:
Position2
with:
selectedCompany.name
and replace:
60223
with:
selectedCompany.id
Never hard-code these values.

9. Streaming Analysis Experience
Because:
"stream": true
is enabled, create a polished analysis-processing screen.
Do not leave the user staring at a generic spinner.
At the top show:
Company logo
Company name
Label:
Own Brand Intelligence
Then show:
Building LinkedIn Intelligence Report
Supporting text:
Analyzing messaging, content, creative patterns, audience signals, engagement, competitive positioning, and strategic opportunities.
Display analysis progress stages such as:
	1	Resolving company profile
	2	Collecting LinkedIn posts
	3	Analyzing messaging
	4	Evaluating content & creative
	5	Measuring engagement
	6	Mapping audience signals
	7	Detecting competitive patterns
	8	Building recommendations
	9	Creating strategic playbook
Do not fake exact percentage completion unless the API provides actual progress information.
Instead, visually mark:
	•	waiting
	•	processing
	•	completed
based on streamed workflow events where possible.
As output sections become available, progressively hydrate the report rather than waiting unnecessarily for every section.

10. Own Brand Intelligence Dashboard
Once sufficient data has arrived, render a professional intelligence report.
The report should have a sticky or clearly visible company header containing:
	•	logo
	•	company name
	•	industry
	•	location
	•	follower count
	•	employee count when available
	•	website
	•	LinkedIn profile link
	•	analysis type: Own Brand
Provide:
← Search another company
and optionally:
Run Competitor Analysis
Do not display raw JSON.
Transform the response into visual analytics.

11. Dashboard Navigation
Use a report navigation system such as:
	•	Overview
	•	Messaging
	•	Content
	•	Creative
	•	Engagement
	•	Audience
	•	Strategy
	•	Competitive Intelligence
	•	Posts
A horizontal sticky section navigation or left-side navigation is acceptable.
The interface should feel like an executive intelligence product rather than an API debugger.

12. Overview Section
Build an executive summary using:
messagingagent.summary
messagingagent.stats
strategyagent.strategy
competitiveagent.scorecardOverall
getcompanyprofile.*
Create executive cards such as:
LinkedIn Presence
Followers
Content Volume
Posts analyzed
Engagement
Relevant engagement metrics from the response
Messaging Strength
Use supplied scoring if available
Competitive Position
Use supplied competitive score if available
Do not invent metrics that the API does not return.
If a value isn't available, omit the metric rather than showing fake data.

13. Company Profile
Map:
getcompanyprofile.id
getcompanyprofile.name
getcompanyprofile.description
getcompanyprofile.public_identifier
getcompanyprofile.profile_url
getcompanyprofile.followers_count
getcompanyprofile.employee_count
getcompanyprofile.website
getcompanyprofile.logo
getcompanyprofile.profile
Present this as an attractive company intelligence header/card.

14. Messaging Intelligence
Map:
messagingagent.company
messagingagent.messaging
messagingagent.stats
messagingagent.summary
Build sections such as:
Messaging Summary
Core Messaging Themes
Brand Narrative
Tone & Voice
Key Value Propositions
Recurring Claims
Messaging Patterns
Messaging Statistics
Use cards, chips, compact charts, highlights, and structured prose depending on the actual response shape.
Do not print [object Object].
Handle nested arrays and objects gracefully.

15. Content Intelligence
Map:
contentcreativeagent.content
contentcreativeagent.topicClusters
Create:
Content Strategy
Topic Clusters
Recurring Themes
Content Formats
Content Opportunities
When topic clusters contain multiple entries, show them as visually separated cluster cards.
If percentages or counts exist, visualize them.

16. Creative Intelligence
Map:
contentcreativeagent.creative
creativeinsightagent.imageryTypes
creativeinsightagent.observations
creativeinsightagent.textStyle
creativeinsightagent.recommendations
Build sections:
Creative Direction
Imagery Types
Visual Patterns
Text Style
Creative Observations
Creative Recommendations
Use image/creative-type cards where appropriate.

17. Engagement Intelligence
Map:
contentcreativeagent.engagement
getcompanypost.items
Create useful visualizations where the data supports them:
	•	reactions
	•	comments
	•	reposts
	•	engagement totals
	•	top posts
	•	weakest posts
	•	posting cadence
	•	content performance distribution
For a post, calculate basic engagement only when needed using available fields:
engagement =
  Number(reaction_counter || 0) +
  Number(comment_counter || 0) +
  Number(repost_counter || 0);
Never invent impressions if the underlying post data does not supply usable impressions.

18. Top Performing Posts
Use:
getcompanypost.items
Display strong-performing posts as polished cards.
Each post card may show:
	•	parsed date
	•	post text preview
	•	attachment/thumbnail when available
	•	reactions
	•	comments
	•	reposts
	•	total engagement
	•	LinkedIn post link
	•	content type
	•	relevant creative pattern
Use:
parsed_datetime
for actual date calculations whenever available.
Do not parse relative strings such as "1w" as JavaScript dates when a proper parsed timestamp exists.

19. Strategy
Map:
strategyagent.strategy
Create:
Strategic Summary
Priority Opportunities
Quick Wins
Medium-Term Actions
Strategic Bets
Risks / Gaps
Prioritize recommendations visually.
Use labels such as:
	•	High Priority
	•	Medium Priority
	•	Opportunity
	•	Gap
only where they can logically be inferred from the supplied strategy output.

20. Personas & Audience
Map:
strategyagent.personas
strategyagent.audienceDetail
Create persona cards containing only information returned by the API.
Potential presentation:
	•	Persona name
	•	role / title
	•	objectives
	•	pain points
	•	motivations
	•	messaging angle
	•	content preferences
Do not invent missing persona properties.

21. Hook Library
Map:
strategyagent.hookLibrary
Create a reusable Hook Library interface.
Display hooks as small copyable cards.
Support:
	•	category
	•	hook text
	•	intended purpose
when these fields exist.
Add a copy interaction.

22. CTA Library
Map:
strategyagent.ctaLibrary
Create a CTA Library using copyable cards.
Group CTAs by category if the response contains categories.

23. Competitive Intelligence
Map:
competitiveagent.campaigns
competitiveagent.competitive
competitiveagent.launches
competitiveagent.messagingEvolution
competitiveagent.recommendations
competitiveagent.scorecard
competitiveagent.scorecardOverall
Build:
Competitive Overview
Campaign Intelligence
Launch Signals
Messaging Evolution
Scorecard
Competitive Recommendations
Visualize the scorecard using appropriate bars, gauges, comparison rows, or radar-style visualizations only when the response provides numerical data suitable for them.
Do not manufacture comparison numbers.

24. Competitor Analysis Button
When the user clicks Competitor Analysis from a company card, preserve:
company.name
company.id
analysisType = "competitor"
Create the same premium loading experience.
If a dedicated competitor-analysis workflow endpoint is not provided yet, do NOT silently use the Own Brand endpoint.
Instead, structure the application so the competitor workflow can be plugged in independently.
Represent the configuration as something conceptually similar to:
analysisWorkflows = {
  ownBrand: "...configured endpoint...",
  competitor: null
};
If the competitor workflow is currently unavailable, show a graceful product state such as:
Competitor analysis workflow is not configured yet.
Do not fake competitor results.

25. History
Keep the History tab from the reference UI.
Store successful searches/analyses so users can reopen previous reports.
Each history item should contain enough information to render:
	•	company name
	•	company logo
	•	company id
	•	analysis type
	•	date
	•	status
Do not include incomplete searches as completed analyses.

26. Error Handling
Handle all states explicitly.
Search API failure
Show:
Unable to search companies
We couldn't retrieve matching LinkedIn companies. Please try again.
Analysis API failure
Show:
Analysis could not be completed
Provide:
	•	Retry analysis
	•	Back to company selection
Missing company ID
Disable both analysis buttons and show:
Company ID unavailable
Never submit an analysis request with an empty company ID.
Broken logo
Automatically fall back to a letter avatar.
Missing description
Do not show empty whitespace.
Empty nested intelligence sections
Hide the section rather than showing:
undefined
null
[object Object]
or empty cards.

27. Data Rendering Rules
Create defensive render utilities for unknown/nested API payloads.
Support:
	•	strings
	•	numbers
	•	booleans
	•	arrays of strings
	•	arrays of objects
	•	nested objects
Never dump raw JSON as the primary user experience.
Build reusable renderers that convert nested structured outputs into:
	•	headings
	•	paragraphs
	•	cards
	•	bullet groups
	•	chips
	•	KPI tiles
	•	tables
	•	charts
depending on the structure.
Use raw JSON only as an optional developer/debug view, not as part of the customer-facing product.



30. Important Workflow Requirement
The sequence must be exactly:
User opens app
      ↓
Types company name / LinkedIn URL / ID
      ↓
Clicks Analyze
      ↓
Company Search API
      ↓
response.output.companies
      ↓
Render matching company cards
      ↓
User identifies correct company
      ↓
┌─────────────────────────┬─────────────────────────┐
│ Own Brand Analysis      │ Competitor Analysis     │
└─────────────────────────┴─────────────────────────┘
      ↓                              ↓
Own Brand workflow              Competitor workflow
      ↓
Streaming analysis
      ↓
Structured intelligence report
There must be NO Own Brand / Competitor selection before company search.
The analysis type is chosen only after the correct LinkedIn company has been selected.
