# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-17T13:01:46.750Z.

## Overview

LinkedIn Intelligence (Watchtower). Edits: (1) components/SearchClient.tsx — search now triggers ONLY via the Analyze button click (button type='button' with onClick={runSearch}); the form's onSubmit and the input's Enter keydown are prevented so pressing Enter no longer starts a search. (2) lib/arena-api.ts — executeWorkflow now falls back to the provided Arena API key when the ARENA_API_KEY env var is not configured, fixing the 'Unable to search companies' 502 from /api/search. (3) prisma/schema.prisma echoed unchanged (mandatory on DB-backed edits). No other logic, naming, or structure was touched.

**Repository:** `linkedin-intelligence`  
**File count:** 37

## Features

- Company search via Arena workflow with explicit Analyze button (no Enter-key submission)
- Own Brand LinkedIn analysis with saved reports
- Analysis history per Arena email id
- Report dashboard with structured intelligence output

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

- **Updated at:** 2026-08-17T13:01:46.750Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:

1.  There should be an analyze button, not on enter, 
APi call curl --url 'https://linkedin-intelligence-delta.vercel.app/api/search' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,kn;q=0.7' \
  -H 'content-type: application/json' \
  -b 'arena_email_id=anush.ms%40position2.com' \
  -H 'origin: https://linkedin-intelligence-delta.vercel.app' \
  -H 'priority: u=1, i' \
  -H 'referer: https://linkedin-intelligence-delta.vercel.app/?emailId=anush.ms%40position2.com' \
  -H 'sec-ch-ua: "Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-storage-access: active' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36' \
  --data-raw '{"companyName":"Sambanova"}'

{"error": "Unable to search companies"}

The Internal API call :
curl --location 'https://agent.thearena.ai/api/workflows/c821b89f-5f32-44b3-9cc6-c0eea5b72b36/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
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

Resposne:
{
    "success": true,
    "executionId": "88f26ee9-b22c-449b-8ce5-151a1de98b20",
    "output": {
        "companies": [
            {
                "description": "An earned-led culture agency creating and amplifying the world’s most talked-about brands, destinations, and experiences. We don’t chase attention. We earn it. From designing hotels and launching restaurants to reimagining tourism and building luxury brands, we craft the places, moments and stories people talk about — and come back to. Our work spans: • Travel & Hotels – placemaking, cultural strategy, destination storytelling • Hospitality & Property – from brand identity to physical experience • Luxury & Lifestyle – campaigns, content and PR that influence culture Backed by strategy, powered by creativity, and driven by people who’ve led some of Australia’s biggest cultural moments. 500+ projects. 100+ venues. 5 countries. If it lives in culture, we make it unforgettable.",
                "followers_count": 6000,
                "id": "17963180",
                "industry": "Advertising Services",
                "linkedinUrl": null,
                "location": "Rushcutters Bay, New South Wales",
                "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQEZtxJ0mulveg/company-logo_100_100/B4DZYZMehkG8AU-/0/1744179423794/we_are_example_logo?e=1788393600&v=beta&t=NPuR71SGNmrq5m-c-iOAvxnVyYt9lx5sLJSx8kqDBwQ",
                "name": "Example",
                "profile_url": "https://www.linkedin.com/company/we-are-example",
                "sources": [
                    "linkedin"
                ],
                "summary": "An earned-led culture agency creating and amplifying the world’s most talked-about brands, destinations, and experiences. We don’t chase attention. We earn it. From designing hotels and launching restaurants to reimagining tourism and building luxury brands, we craft the places, moments and stories people talk about — and come back to. Our work spans: • Travel & Hotels – placemaking, cultural strategy, destination storytelling • Hospitality & Property – from brand identity to physical experience • Luxury & Lifestyle – campaigns, content and PR that influence culture Backed by strategy, powered by creativity, and driven by people who’ve led some of Australia’s biggest cultural moments. 500+ projects. 100+ venues. 5 countries. If it lives in culture, we make it unforgettable.",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "IES is a global corporation that provides solutions for the Supply Chain including Government Compliance, Electronic Commerce and Visibility. IES is billed as 'The Software Solution for the Future of Freight'. The company offers one complete end-to-end transportation logistics software solution scalable to any size operation. With offices throughout the United States and in Hong Kong, IES products are operated in over 70 countries with millions of daily transactions. IES’s award winning software had continued its climb in industry prominence with an ever-increasing market share. As a leading pioneer in the field of regulatory compliance, the suite of IES software solutions are proven to confirm with international trade regulations. IES was the first: - Authorized service bureau to CBP to support NVOCC Ocean AMS - Approved service bureau for filing AES directly with CBP - US Truck ACE authorized Service Bureau - To process US ISF 10+2 transactions as a service bureau The company specializes in software solutions for Freight Forwarders, Customs House Brokers, Shippers, Importers, NVOCC's and more.",
                "followers_count": 1000,
                "id": "357740",
                "industry": "Import & Export",
                "linkedinUrl": null,
                "location": "Midland Park, NJ",
                "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQGjM92mnKIO6A/company-logo_100_100/B4EZpgD2VGKcAQ-/0/1762548213371/ies_ltd_2_logo?e=1788393600&v=beta&t=bhYtFZ4DGQqFliPV0BgAV4k2VSh0FL6kYqwFtdErrwI",
                "name": "Example (Testing)",
                "profile_url": "https://www.linkedin.com/company/ies-ltd._2",
                "sources": [
                    "linkedin"
                ],
                "summary": "IES is a global corporation that provides solutions for the Supply Chain including Government Compliance, Electronic Commerce and Visibility. IES is billed as 'The Software Solution for the Future of Freight'. The company offers one complete end-to-end transportation logistics software solution scalable to any size operation. With offices throughout the United States and in Hong Kong, IES products are operated in over 70 countries with millions of daily transactions. IES’s award winning software had continued its climb in industry prominence with an ever-increasing market share. As a leading pioneer in the field of regulatory compliance, the suite of IES software solutions are proven to confirm with international trade regulations. IES was the first: - Authorized service bureau to CBP to support NVOCC Ocean AMS - Approved service bureau for filing AES directly with CBP - US Truck ACE authorized Service Bureau - To process US ISF 10+2 transactions as a service bureau The company specializes in software solutions for Freight Forwarders, Customs House Brokers, Shippers, Importers, NVOCC's and more.",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "Whether you’re new to LabVIEW or have been doing it for years and need to refresh your knowledge, LabVIEW by Example aims to help you understand the syntax...",
                "followers_count": 2000,
                "id": "28122670",
                "industry": "Software Development",
                "linkedinUrl": null,
                "location": "Dallas/Fort Worth, TX",
                "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQFtp9vCIWpEAg/company-logo_100_100/company-logo_100_100/0/1631310221528?e=1788393600&v=beta&t=24wJj_1AKOzpNFzM1Mqtw4RJUCKTSTxyOBUYjG7ISzU",
                "name": "LabVIEW by Example",
                "profile_url": "https://www.linkedin.com/company/labview-by-example",
                "sources": [
                    "linkedin"
                ],
                "summary": "Whether you’re new to LabVIEW or have been doing it for years and need to refresh your knowledge, LabVIEW by Example aims to help you understand the syntax...",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "Now Closed.",
                "followers_count": 881,
                "id": "42169874",
                "industry": "Utilities",
                "linkedinUrl": null,
                "location": "Dublin",
                "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQFqYpU1pTI-XQ/company-logo_100_100/company-logo_100_100/0/1654015673361?e=1788393600&v=beta&t=X-81273CDXBlzhvuZl8gD15sKt9KP_Gg6N3mqjswrDU",
                "name": "example",
                "profile_url": "https://www.linkedin.com/company/brightenergysupplier",
                "sources": [
                    "linkedin"
                ],
                "summary": "Now Closed.",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "Experts in services, support & supply. Leading by example .",
                "followers_count": 4000,
                "id": "2598531",
                "industry": "IT Services and IT Consulting",
                "linkedinUrl": null,
                "location": "Basingstoke, Hampshire",
                "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQFKmc4B-CK5mg/company-logo_100_100/company-logo_100_100/0/1663666411262/example_it_limited_logo?e=1788393600&v=beta&t=nHHKIx0C-_5mI4NfBKSduCJWwfzePfPdyA08a1atQSk",
                "name": "Example IT Limited",
                "profile_url": "https://www.linkedin.com/company/example-it-limited",
                "sources": [
                    "linkedin"
                ],
                "summary": "Experts in services, support & supply. Leading by example .",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": null,
                "followers_count": 187,
                "id": "142280",
                "industry": "Banking",
                "linkedinUrl": null,
                "location": null,
                "logo": null,
                "name": "Example",
                "profile_url": "https://www.linkedin.com/company/example",
                "sources": [
                    "linkedin"
                ],
                "summary": null,
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "Mission Statement: Lead By Example is a non-profit organization providing social, recreational and health promotion day programs for seniors in the Collin County Area. Our mission is to reduce social isolation, improve the health and well-being of older adults and to empower them to lead meaningful and connected lives...",
                "followers_count": 896,
                "id": "80990403",
                "industry": "Civic and Social Organizations",
                "linkedinUrl": null,
                "location": "McKinney, Texas",
                "logo": null,
                "name": "Lead By Example",
                "profile_url": "https://www.linkedin.com/company/lead-by-example20",
                "sources": [
                    "linkedin"
                ],
                "summary": "Mission Statement: Lead By Example is a non-profit organization providing social, recreational and health promotion day programs for seniors in the Collin County Area. Our mission is to reduce social isolation, improve the health and well-being of older adults and to empower them to lead meaningful and connected lives...",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": null,
                "followers_count": 6000,
                "id": "104087633",
                "industry": "Blogs",
                "linkedinUrl": null,
                "location": null,
                "logo": "https://media.licdn.com/dms/image/v2/D560BAQHla-YnU7XzKQ/company-logo_100_100/company-logo_100_100/0/1721803098763?e=1788393600&v=beta&t=i2wtoSE42o-jFmbvSgTvkR5HSs5gdfYeTuRS00EUsHs",
                "name": "Leadership By Example 💪",
                "profile_url": "https://www.linkedin.com/company/lead-by-example-2",
                "sources": [
                    "linkedin"
                ],
                "summary": null,
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "When it comes to marketing and social media, it's about standing out. That’s why we’re called ‘ Example ’. We’re here to train, and elevate businesses...",
                "followers_count": 1000,
                "id": "85838349",
                "industry": "Marketing Services",
                "linkedinUrl": null,
                "location": "Sheffield, United Kingdom",
                "logo": "https://media.licdn.com/dms/image/v2/D4E0BAQGQdyKHJE98_A/company-logo_100_100/B4EZyQ00LKH0AQ-/0/1771956290657/examplemarketing_logo?e=1788393600&v=beta&t=EIrkRKXMBX4lsHxD6DcLWvhfVA0l347ZHgs1YEWl9BQ",
                "name": "EXAMPLE MARKETING",
                "profile_url": "https://www.linkedin.com/company/examplemarketing",
                "sources": [
                    "linkedin"
                ],
                "summary": "When it comes to marketing and social media, it's about standing out. That’s why we’re called ‘ Example ’. We’re here to train, and elevate businesses...",
                "type": "COMPANY",
                "website": null
            },
            {
                "description": "Example Recruitment Group’s ethos is simple; provide a refreshingly honest, open and transparent service that is effective and efficient for our clients and give them the confidence that their recruitment campaigns are in good hands. We are committed to provide an exceptional level of service to our customers every...",
                "followers_count": 1000,
                "id": "2600381",
                "industry": "Staffing and Recruiting",
                "linkedinUrl": null,
                "location": "Leeds, England",
                "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQFjK5Aqh6waWw/company-logo_100_100/company-logo_100_100/0/1719255630950/example_recruitment_group_logo?e=1788393600&v=beta&t=uA8EbdIhbMb1xe1TOqMRl8HJ2ejkMnbR5hHTh4P47w",
                "name": "Example Recruitment Group",
                "profile_url": "https://www.linkedin.com/company/example-recruitment-group",
                "sources": [
                    "linkedin"
                ],
                "summary": "Example Recruitment Group’s ethos is simple; provide a refreshingly honest, open and transparent service that is effective and efficient for our clients and give them the confidence that their recruitment campaigns are in good hands. We are committed to provide an exceptional level of service to our customers every...",
                "type": "COMPANY",
                "website": null
            }
        ],
        "query": "example",
        "model": "gpt-5.4-mini",
        "tokens": {
            "input": 505,
            "output": 2605,
            "total": 4902,
            "cacheRead": 1792,
            "cacheWrite": 0
        },
        "toolCalls": {
            "list": [],
            "count": 0
        },
        "providerTiming": {
            "startTime": "2026-08-17T12:11:54.864Z",
            "endTime": "2026-08-17T12:12:08.079Z",
            "duration": 13215,
            "modelTime": 13214,
            "toolsTime": 0,
            "firstResponseTime": 13214,
            "iterations": 1,
            "timeSegments": [
                {
                    "type": "model",
                    "name": "gpt-5.4-mini",
                    "startTime": 1786968714864,
                    "endTime": 1786968728078,
                    "duration": 13214,
                    "assistantContent": "{\"companies\":[{\"description\":\"An earned-led culture agency creating and amplifying the world’s most talked-about brands, destinations, and experiences. We don’t chase attention. We earn it. From designing hotels and launching restaurants to reimagining tourism and building luxury brands, we craft the places, moments and stories people talk about — and come back to. Our work spans: • Travel & Hotels – placemaking, cultural strategy, destination storytelling • Hospitality & Property – from brand identity to physical experience • Luxury & Lifestyle – campaigns, content and PR that influence culture Backed by strategy, powered by creativity, and driven by people who’ve led some of Australia’s biggest cultural moments. 500+ projects. 100+ venues. 5 countries. If it lives in culture, we make it unforgettable.\",\"followers_count\":6000,\"id\":\"17963180\",\"industry\":\"Advertising Services\",\"linkedinUrl\":null,\"location\":\"Rushcutters Bay, New South Wales\",\"logo\":\"https://media.licdn.com/dms/image/v2/D4D0BAQEZtxJ0mulveg/company-logo_100_100/B4DZYZMehkG8AU-/0/1744179423794/we_are_example_logo?e=1788393600&v=beta&t=NPuR71SGNmrq5m-c-iOAvxnVyYt9lx5sLJSx8kqDBwQ\",\"name\":\"Example\",\"profile_url\":\"https://www.linkedin.com/company/we-are-example\",\"sources\":[\"linkedin\"],\"summary\":\"An earned-led culture agency creating and amplifying the world’s most talked-about brands, destinations, and experiences. We don’t chase attention. We earn it. From designing hotels and launching restaurants to reimagining tourism and building luxury brands, we craft the places, moments and stories people talk about — and come back to. Our work spans: • Travel & Hotels – placemaking, cultural strategy, destination storytelling • Hospitality & Property – from brand identity to physical experience • Luxury & Lifestyle – campaigns, content and PR that influence culture Backed by strategy, powered by creativity, and driven by people who’ve led some of Australia’s biggest cultural moments. 500+ projects. 100+ venues. 5 countries. If it lives in culture, we make it unforgettable.\",\"type\":\"COMPANY\",\"website\":null},{\"description\":\"IES is a global corporation that provides solutions for the Supply Chain including Government Compliance, Electronic Commerce and Visibility. IES is billed as 'The Software Solution for the Future of Freight'. The company offers one complete end-to-end transportation logistics software solution scalable to any size operation. With offices throughout the United States and in Hong Kong, IES products are operated in over 70 countries with millions of daily transactions. IES’s award winning software had continued its climb in industry prominence with an ever-increasing market share. As a leading pioneer in the field of regulatory compliance, the suite of IES software solutions are proven to confirm with international trade regulations. IES was the first: - Authorized service bureau to CBP to support NVOCC Ocean AMS - Approved service bureau for filing AES directly with CBP - US Truck ACE authorized Service Bureau - To process US ISF 10+2 transactions as a service bureau The company specializes in software solutions for Freight Forwarders, Customs House Brokers, Shippers, Importers, NVOCC's and more.\",\"followers_count\":1000,\"id\":\"357740\",\"industry\":\"Import & Export\",\"linkedinUrl\":null,\"location\":\"Midland Park, NJ\",\"logo\":\"https://media.licdn.com/dms/image/v2/D4E0BAQGjM92mnKIO6A/company-logo_100_100/B4EZpgD2VGKcAQ-/0/1762548213371/ies_ltd_2_logo?e=1788393600&v=beta&t=bhYtFZ4DGQqFliPV0BgAV4k2VSh0FL6kYqwFtdErrwI\",\"name\":\"Example (Testing)\",\"profile_url\":\"https://www.linkedin.com/company/ies-ltd._2\",\"sources\":[\"linkedin\"],\"summary\":\"IES is a global corporation that provides solutions for the Supply Chain including Government Compliance, Electronic Commerce and Visibility. IES is billed as 'The Software Solution for the Future of Freight'. The company offers one complete end-to-end transportation logistics software solution scalable to any size operation. With offices throughout the United States and in Hong Kong, IES products are operated in over 70 countries with millions of daily transactions. IES’s award winning software had continued its climb in industry prominence with an ever-increasing market share. As a leading pioneer in the field of regulatory compliance, the suite of IES software solutions are proven to confirm with international trade regulations. IES was the first: - Authorized service bureau to CBP to support NVOCC Ocean AMS - Approved service bureau for filing AES directly with CBP - US Truck ACE authorized Service Bureau - To process US ISF 10+2 transactions as a service bureau The company specializes in software solutions for Freight Forwarders, Customs House Brokers, Shippers, Importers, NVOCC's and more.\",\"type\":\"COMPANY\",\"website\":null},{\"description\":\"Whether you’re new to LabVIEW or have been doing it for years and need to refresh your knowledge, LabVIEW by Example aims to help you understand the syntax...\",\"followers_count\":2000,\"id\":\"28122670\",\"industry\":\"Software Development\",\"linkedinUrl\":null,\"location\":\"Dallas/Fort Worth, TX\",\"logo\":\"https://media.licdn.com/dms/image/v2/C4E0BAQFtp9vCIWpEAg/company-logo_100_100/company-logo_100_100/0/1631310221528?e=1788393600&v=beta&t=24wJj_1AKOzpNFzM1Mqtw4RJUCKTSTxyOBUYjG7ISzU\",\"name\":\"LabVIEW by Example\",\"profile_url\":\"https://www.linkedin.com/company/labview-by-example\",\"sources\":[\"linkedin\"],\"summary\":\"Whether you’re new to LabVIEW or have been doing it for years and need to refresh your knowledge, LabVIEW by Example aims to help you understand the syntax...\",\"type\":\"COMPANY\",\"website\":null},{\"description\":\"Now Closed.\",\"followers_count\":881,\"id\":\"42169874\",\"industry\":\"Utilities\",\"linkedinUrl\":null,\"location\":\"Dublin\",\"logo\":\"https://media.licdn.com/dms/image/v2/C4E0BAQFqYpU1pTI-XQ/company-logo_100_100/company-logo_100_100/0/1654015673361?e=1788393600&v=beta&t=X-81273CDXBlzhvuZl8gD15sKt9KP_Gg6N3mqjswrDU\",\"name\":\"example\",\"profile_url\":\"https://www.linkedin.com/company/brightenergysupplier\",\"sources\":[\"linkedin\"],\"summary\":\"Now Closed.\",\"type\":\"COMPANY\",\"website\":null},{\"description\":\"Experts in services, support & supply. Leading by example .\",\"followers_count\":4000,\"id\":\"2598531\",\"industry\":\"IT Services and IT Consulting\",\"linkedinUrl\":null,\"location\":\"Basingstoke, Hampshire\",\"logo\":\"https://media.licdn.com/dms/image/v2/C4E0BAQFKmc4B-CK5mg/company-logo_100_100/company-logo_100_100/0/1663666411262/example_it_limited_logo?e=1788393600&v=beta&t=nHHKIx0C-_5mI4NfBKSduCJWwfzePfPdyA08a1atQSk\",\"name\":\"Example IT Limited\",\"profile_url\":\"https://www.linkedin.com/company/example-it-limited\",\"sources\":[\"linkedin\"],\"summary\":\"Experts in services, support & supply. Leading by example .\",\"type\":\"COMPANY\",\"website\":null},{\"description\":null,\"followers_count\":187,\"id\":\"142280\",\"industry\":\"Banking\",\"linkedinUrl\":null,\"location\":null,\"logo\":null,\"name\":\"Example\",\"profile_url\":\"https://www.linkedin.com/company/example\",\"sources\":[\"linkedin\"],\"summary\":null,\"type\":\"COMPANY\",\"website\":null},{\"description\":\"Mission Statement: Lead By Example is a non-profit organization providing social, recreational and health promotion day programs for seniors in the Collin County Area. Our mission is to reduce social isolation, improve the health and well-being of older adults and to empower them to lead meaningful and connected lives...\",\"followers_count\":896,\"id\":\"80990403\",\"industry\":\"Civic and Social Organizations\",\"linkedinUrl\":null,\"location\":\"McKinney, Texas\",\"logo\":null,\"name\":\"Lead By Example\",\"profile_url\":\"https://www.linkedin.com/company/lead-by-example20\",\"sources\":[\"linkedin\"],\"summary\":\"Mission Statement: Lead By Example is a non-profit organization providing social, recreational and health promotion day programs for seniors in the Collin County Area. Our mission is to reduce social isolation, improve the health and well-being of older adults and to empower them to lead meaningful and connected lives...\",\"type\":\"COMPANY\",\"website\":null},{\"description\":null,\"followers_count\":6000,\"id\":\"104087633\",\"industry\":\"Blogs\",\"linkedinUrl\":null,\"location\":null,\"logo\":\"https://media.licdn.com/dms/image/v2/D560BAQHla-YnU7XzKQ/company-logo_100_100/company-logo_100_100/0/1721803098763?e=1788393600&v=beta&t=i2wtoSE42o-jFmbvSgTvkR5HSs5gdfYeTuRS00EUsHs\",\"name\":\"Leadership By Example 💪\",\"profile_url\":\"https://www.linkedin.com/company/lead-by-example-2\",\"sources\":[\"linkedin\"],\"summary\":null,\"type\":\"COMPANY\",\"website\":null},{\"description\":\"When it comes to marketing and social media, it's about standing out. That’s why we’re called ‘ Example ’. We’re here to train, and elevate businesses...\",\"followers_count\":1000,\"id\":\"85838349\",\"industry\":\"Marketing Services\",\"linkedinUrl\":null,\"location\":\"Sheffield, United Kingdom\",\"logo\":\"https://media.licdn.com/dms/image/v2/D4E0BAQGQdyKHJE98_A/company-logo_100_100/B4EZyQ00LKH0AQ-/0/1771956290657/examplemarketing_logo?e=1788393600&v=beta&t=EIrkRKXMBX4lsHxD6DcLWvhfVA0l347ZHgs1YEWl9BQ\",\"name\":\"EXAMPLE MARKETING\",\"profile_url\":\"https://www.linkedin.com/company/examplemarketing\",\"sources\":[\"linkedin\"],\"summary\":\"When it comes to marketing and social media, it's about standing out. That’s why we’re called ‘ Example ’. We’re here to train, and elevate businesses...\",\"type\":\"COMPANY\",\"website\":null},{\"description\":\"Example Recruitment Group’s ethos is simple; provide a refreshingly honest, open and transparent service that is effective and efficient for our clients and give them the confidence that their recruitment campaigns are in good hands. We are committed to provide an exceptional level of service to our customers every...\",\"followers_count\":1000,\"id\":\"2600381\",\"industry\":\"Staffing and Recruiting\",\"linkedinUrl\":null,\"location\":\"Leeds, England\",\"logo\":\"https://media.licdn.com/dms/image/v2/D4D0BAQFjK5Aqh6waWw/company-logo_100_100/company-logo_100_100/0/1719255630950/example_recruitment_group_logo?e=1788393600&v=beta&t=uA8EbdIhbMb1xe1TOqMRl8HJ2ejkMnbR5hHTh4P47w\",\"name\":\"Example Recruitment Group\",\"profile_url\":\"https://www.linkedin.com/company/example-recruitment-group\",\"sources\":[\"linkedin\"],\"summary\":\"Example Recruitment Group’s ethos is simple; provide a refreshingly honest, open and transparent service that is effective and efficient for our clients and give them the confidence that their recruitment campaigns are in good hands. We are committed to provide an exceptional level of service to our customers every...\",\"type\":\"COMPANY\",\"website\":null}],\"query\":\"example\"}",
                    "finishReason": "stop",
                    "tokens": {
                        "input": 2297,
                        "output": 2605,
                        "total": 4902,
                        "cacheRead": 1792
                    },
                    "cost": {
                        "input": 0.0017105,
                        "output": 0.039075,
                        "total": 0.0407855
                    },
                    "provider": "openai"
                }
            ]
        },
        "cost": {
            "input": 0.0017105,
            "output": 0.039075,
            "total": 0.0407855,
            "pricing": {
                "input": 2.5,
                "cachedInput": 0.25,
                "output": 15,
                "updatedAt": "2026-06-11"
            }
        }
    },
    "metadata": {
        "duration": 16939.71547999978,
        "startTime": "2026-08-17T12:11:51.142Z",
        "endTime": "2026-08-17T12:12:08.082Z"
    }
}



Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
