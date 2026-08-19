# Repository Summary: linkedin-intelligence

> Auto-maintained by Sim Development. Last updated: 2026-08-19T05:52:43.959Z.

## Overview

LinkedIn Intelligence (Watchtower)

**Repository:** `linkedin-intelligence`  
**File count:** 45

## Features

- Per-run Arena lookup API (/api/arena-run) using the single-run workflow instead of full history
- CompetitorModal checks for an existing saved comparison via the per-run workflow
- PlaybookModal checks for an existing saved playbook via the per-run workflow
- Responsive UI with Tailwind CSS
- Next.js App Router pages and components

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

- **Updated at:** 2026-08-19T05:52:43.959Z
- **Request:** Implement the following functionality in the codebase. Do not modify, refactor, remove, or "clean up" any other part of the code beyond what is explicitly listed below. Preserve existing formatting, naming conventions, comments, and logic in all unrelated sections.
Changes to implement:



1) in the Compare with another and Get the Playbook instead of calling the whole history call this API instead 
curl --location 'https://agent.thearena.ai/api/workflows/ef016dc1-4a08-4c1b-b5e4-69080ea7c22d/execute' \
--header 'X-API-Key: sk-sim-3-NEFuWfj8Ptg89Tlrcmlu417GuXBwwg' \
--header 'Content-Type: application/json' \
--data '{"id":"1787116888086","stream":false,"selectedOutputs":["response.result"]}'


RESPONSE will be the same with single Array value 
{
    "success": true,
    "executionId": "afbed974-ce24-426b-9652-f4ccec65b1ec",
    "output": {
        "result": [
            {
                "id": "1787116888086",
                "user_email": "anush.ms@position2.com",
                "input": {
                    "companyId": "60223",
                    "companyName": "Position²"
                },
                "output": {
                    "id": "60223",
                    "logo": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc",
                    "name": "Position²",
                    "items": [
                        {
                            "id": "7495576333461254144",
                            "date": "8h",
                            "text": "Product launches move fast. Visual production should too. Position² is introducing the latest version of StudioX, our self-service 3D rendering platform built to give product marketing teams greater speed and control over the visuals behind launches, sales, and channel enablement.\n\nWith StudioX, marketers can create custom product angles, zoom into design details, generate exploded views, and place products in virtually any background or scenario, directly in the browser, with no 3D expertise required. Work that once required weeks of back-and-forth can now happen in a day.\n\nFor product brands, that means fewer creative bottlenecks and more freedom to build the right visual for the moment, whether it’s a global launch, a sales conversation, or content for partners around the world.\n\nStudioX reflects the same principle behind our AI-Native Growth System: combine deep expert knowledge with technology that helps marketing teams move faster without sacrificing quality.\n\nExplore StudioX: https://bit.ly/4hHw1eK\n\nFor more details, read the full announcement: https://prn.to/45AZAHC\n\n#Position2 #StudioX #3DRendering #ProductMarketing #3DMarketing #AINative",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_position2-studiox-3drendering-activity-7495576333461254144-5SLS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7495576333461254144",
                            "attachments": [
                                {
                                    "id": "D5610AQFHyJG34GT68A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFHyJG34GT68A/image-shrink_480/B56aAWi8KXK8AQ-/0/1787084653434?e=1787724000&v=beta&t=6d0On8M3khejhNUj0yGfk34TUghZlzGNNlmnWkmUX0Y",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-08-18T20:24:18.971Z",
                            "reaction_counter": 10,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7495513603874217984",
                            "date": "13h",
                            "text": "Latest article dropped from the Spark Of Ages podcast\n\nWe spoke to Boardy founder and \"mad scientist\", Andrew D'Souza - here's what you should take away from the episode... 👇\n\nhttps://lnkd.in/g9BYBxDz",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7493026334634344448",
                                "url": "https://www.linkedin.com/pulse/rethinking-ai-why-future-software-isnt-saas-its-nabvc?trackingId=9wRabg3VpzKzO785bHJv%2Bw%3D%3D",
                                "title": "Rethinking AI: Why the future of software isn't SaaS, it's a business partner",
                                "author": "Spark Of Ages podcast",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5612AQFQIYrF4XbrnQ/article-cover_image-shrink_423_752/B56Z_yTv5MGsAY-/0/1786476691288?e=1788998400&v=beta&t=1WiJ__vlQJLZnwv81xzgEEf7JNiMdEqnJb-2LisMd40",
                                "published_at": "2026-08-11T19:31:31.874Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 32,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/company/boardy/",
                                    "start": 67,
                                    "length": 6
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABz9VsBJkItmOxAMhC2XNd2pf25rqx_eWM",
                                    "start": 103,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_latest-article-dropped-from-the-spark-of-activity-7495513603874217984-5JxN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495188907748233216",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-08-18T16:15:03.072Z",
                            "reaction_counter": 2,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7495181607398461441",
                            "date": "1d",
                            "text": "In the AI-native era, you're only limited by your imagination.\n\nHow does Andrew D'Souza tackle hiring and building teams in this new landscape? He focuses on finding high-agency, divergent thinkers who get energized by the sheer scope of ambiguous problems.\n\nGreat talent doesn't just solve the problem in front of them—they push boundaries and constantly ask, \"Wouldn't it be cool if...?\" \n\nEven if an idea seems too difficult or impossible today, the rapid pace of technology means it could easily become a reality just a few months from now.\nLook for the people who spend their weekends obsessing over the \"what ifs\". Imagination and adaptability are the ultimate competitive advantages.\n\nListen to the full episode: https://lnkd.in/gxM3Bu7m\n\n#AI #Innovation #Hiring #FutureOfWork #TechLeadership",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABz9VsBJkItmOxAMhC2XNd2pf25rqx_eWM",
                                    "start": 73,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_ai-innovation-hiring-activity-7495181607398461441-cYgO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495181356713320448",
                            "attachments": [
                                {
                                    "id": "D5605AQGuBh0GYxiWPA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGuBh0GYxiWPA/mp4-720p-30fp-crf28/B56aAQ74ohHICQ-/0/1786990540536?e=1787724000&v=beta&t=UKa81aKFU6lBV2xX_Likh2QrZ5LMil6EqvBI-h8_IgM",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-17T18:15:48.944Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7491222958514851840",
                            "date": "1w",
                            "text": "Position² joined global AI leaders at RAISE Summit 2026 in Paris, represented by our Founder & CEO, Rajiv Parikh, and VP of Marketing, Sanjeev Dhanaraj.\n\nOne question from the summit stood out: As AI agents accumulate knowledge and learning, who owns that intelligence?\n\nDuring the AI & Enterprise Transformation panel, Arvind Jain, Founder and CEO of Glean, described “memory infrastructure” and “context graphs” as potential sources of future competitive advantage.\n\nThis marks a critical turning point. Organizations may have access to many of the same AI models, but they don’t share the same brand knowledge, market context, workflows, or accumulated judgment. That intelligence is the standing asset, the part competitors can’t easily copy.\n\nPosition² is the AI-Native Growth System. Our intelligence layer connects each client’s brand knowledge with two decades of full-funnel growth expertise, senior human judgment, and AI agents. Experts set the direction and own the outcome, AI agents execute across the funnel, and what the system learns in one place becomes available everywhere. Every campaign makes the next one stronger. That’s how an AI-native system compounds rather than starting over, and how organizational intelligence translates into measurable growth. \n\n#RAISESummit2026 #AgenticAI #AINative #EnterpriseAI #GrowthMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 0,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 38,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 100,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACqTAoBbH0SnDVhf-uu72DFBiqNev0VK9k",
                                    "start": 135,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABBCL8BuUSd4tEVz-yk4VZtaOwex5pp1DE",
                                    "start": 320,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/gleanwork/",
                                    "start": 352,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 748,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_raisesummit2026-agenticai-ainative-activity-7491222958514851840-M3Ff?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7491222955360882688",
                            "attachments": [
                                {
                                    "id": "D5610AQGi6eiUkhv9Kg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGi6eiUkhv9Kg/image-shrink_480/B56Z_YrjwWHIAQ-/0/1786046726159?e=1787724000&v=beta&t=JD2yzJdeNyKrxMtj3WfozxCAAH04nc5kUcyJE8ghInw",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQEPcFO9fp6ZVQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEPcFO9fp6ZVQ/image-shrink_480/B56Z_Yrj4_HUAU-/0/1786046726072?e=1787724000&v=beta&t=ScULFmvQajWv78EIVk6VGlHJTHdaTQSp_rTmrckyTXE",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQHssAX4gikx_w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHssAX4gikx_w/image-shrink_480/B56Z_YrkErHcAQ-/0/1786046726888?e=1787724000&v=beta&t=d2cuSgJn2ioDb0PIp9sUA9Uua3fPcBms7ReVcXs9J7E",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFyF_kTy1KKeA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFyF_kTy1KKeA/image-shrink_480/B56Z_YrkTDG4AQ-/0/1786046728003?e=1787724000&v=beta&t=zXQGPJiJ8dHyepOV7UERCxD3-9Z_J7nOUPbXJQuFG0k",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQHdF3SP2WjQpg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHdF3SP2WjQpg/image-shrink_480/B56Z_Yrkl_JcAQ-/0/1786046729185?e=1787724000&v=beta&t=NhYYR6XnUcfjP7fVag14IOyHbiwGr_vQoh0eyQQsR6w",
                                    "size": {
                                        "width": 480,
                                        "height": 360
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQHExArDNl7pAw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHExArDNl7pAw/image-shrink_480/B56Z_YrkuvKEAQ-/0/1786046729716?e=1787724000&v=beta&t=k3jbKCmYVkm-7KRWU41xxrkKxLsxqjjzeIjNFRQX3eg",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQHG0oxB4JDmnQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHG0oxB4JDmnQ/image-shrink_480/B56Z_Yrk85HYAQ-/0/1786046730980?e=1787724000&v=beta&t=rR4bHAGRnZ6Jdq5maEMIrMTCHsRLNKx9C_zo43nj_fQ",
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
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-06T20:05:33.502Z",
                            "reaction_counter": 69,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7491161392662827008",
                            "date": "1w",
                            "text": "Three years ago, the Department of the Air Force Stanford AI Studio started as a side hustle between two officers with zero dollars and a shared table at a coffee stand. Today, it's a line-item program of record that drives DARPA programs and scales academic breakthroughs into operational capabilities.\n\nSpark of Ages Host Rajiv Parikh sat down with co-founders Jason Hansberger and Dr. John Alora to discuss what it takes to lead innovation from within.\n\nCore leadership takeaways from their journey:\n\n▪️Embrace Collaborative Leadership: A leader doesn't need to know everything. Great leadership is acknowledging what you don't know, finding domain experts, and empowering them completely.\n\n▪️The Power of Naivete: Complex bureaucratic systems can paralyze you if you overthink them. A little bit of early naivete keeps you pushing forward when traditional wisdom says it's impossible.\n\n▪️Network over Process: When formal procurement pipelines are slow, building a tight-knit ecosystem between academics, military operators, and entrepreneurs is the fastest way to solve real-world problems.\n\nReal leadership isn't about directing from the top down—it's about removing friction for the people building the future.\n\nWatch the full episode: https://bit.ly/4fDFRgh\n\n#Leadership #Culture #Intrapreneurship #Innovation #MilitaryLeadership",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_leadership-culture-intrapreneurship-activity-7491161392662827008-SKUl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7491161392662827008",
                            "attachments": [
                                {
                                    "id": "D5610AQHmsEQ1hBsx_g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHmsEQ1hBsx_g/image-shrink_480/B56Z_XzkyPG0AQ-/0/1786032049739?e=1787724000&v=beta&t=oX_CG7w5CfbapM0R39_YEmatDriJL1bdgrcRoCSXmwA",
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
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-08-06T16:00:55.059Z",
                            "reaction_counter": 10,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490802560686223361",
                            "date": "1w",
                            "text": "New article drop for the latest Spark Of Ages podcast episode featuring Jason Hansberger and Dr. John Alora of the DAF-Stanford AI Studio.\n\nRead it here: https://lnkd.in/gKtwAQFb",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7488321001814966273",
                                "url": "https://www.linkedin.com/pulse/why-500-drones-breaking-100-million-defense-strategies-mnxgf?trackingId=h7cPVlufoG8nBXiypi9kFA%3D%3D",
                                "title": "Why $500 Drones Are Breaking $100 Million Defense Strategies",
                                "author": "Spark Of Ages podcast",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D4D12AQES2jlCzpq9yA/article-cover_image-shrink_423_752/B4DZ.vcRW4HEAY-/0/1785354852184?e=1788998400&v=beta&t=e1SADpYK9TkUCTAvws1xbO6EI0SRa4K9F0ZIkKQrhzo",
                                "published_at": "2026-07-29T19:54:13.109Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 32,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAA-u-4cBmewR_QOFkTI4Qa68IVVu1z-WRu4",
                                    "start": 72,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/company/daf-stanford-ai-studio/",
                                    "start": 115,
                                    "length": 22
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_new-article-drop-for-the-latest-spark-of-activity-7490802560686223361-8rdf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7490485299341533184",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-05T16:15:02.849Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490481867310133248",
                            "date": "2w",
                            "text": "When connectivity is a luxury and GPS signals are actively jammed, traditional AI models fall short. On the Spark of Ages podcast, Dr. John Alora (Air Force pilot, robotics expert, and PhD) broke down why the future of tactical autonomy relies on compute at the edge.\n\nWhile commercial AI capital concentrates on massive, energy-hungry cloud data centers, defense applications demand strict Size, Weight, and Power (SWaP) constraints.\n\nHow does autonomy function in a severely constrained edge environment?\n\n▪️Visual-Based Navigation (VBN): Using low-cost cameras to map terrain features against reference datasets (like Google Maps) to correct cheap IMUs when GPS is jammed.\n\n▪️Bounded operational domains: Modern combat autonomy isn't sci-fi swarms solving global logic. It's narrow, deterministic execution—like running computer vision models locally to verify a target within a strict geographic box when the signal is lost.\n\n▪️Decade-old algorithms, scaled: Most tactical autonomy stacks aren't using cutting-edge frontier models—they're leveraging proven 10-year-old planning algorithms deployed with new edge-compute reliability.\n\nTo build meaningful defense tech, top engineering talent doesn't just need capital—they need access to test ranges, real-world data, and physical hardware to de-risk theory into reality.\n\nWatch the full episode: https://bit.ly/4pXgSrT\n\n#ArtificialIntelligence #EdgeComputing #Robotics #ComputerVision #Autonomy #Engineering",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_artificialintelligence-edgecomputing-robotics-activity-7490481867310133248-rpJm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7490481867310133248",
                            "attachments": [
                                {
                                    "id": "D5610AQE8nGOcwKmVWg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE8nGOcwKmVWg/image-shrink_480/B56Z_OJjLTHUAQ-/0/1785870038364?e=1787724000&v=beta&t=nqsJJwu3nw22Ev7A81rZvwCZllJ8ZDjz-KxleK2u0mA",
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
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-04T19:00:43.590Z",
                            "reaction_counter": 13,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7490108547393810432",
                            "date": "2w",
                            "text": "Position² is heading to Ai4 - Artificial Intelligence Conferences. Our VP of Global Operations & Strategy, Sajjan Kanukolanu, PhD, will be joining enterprise leaders to discuss how organizations can build AI-Native Growth Systems that compound intelligence, accelerate execution, and deliver measurable business outcomes.\n\nAs AI reshapes how organizations grow, the advantage won't come from adopting more tools; it will come from building a system where expert judgment, AI, and institutional intelligence work together to drive better decisions and stronger outcomes.\n\nIf you'll be attending Ai4 - Artificial Intelligence Conferences in Las Vegas this week, let's connect.\n\n#AINative #BusinessTransformation #Ai4 #EnterpriseAI #AgenticAI #GrowthMarketing #B2B #MarketingStrategy #GTM #AIMarketing #Marketing #DigitalMarketing #LasVegas #AI4",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 0,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/ai4/",
                                    "start": 24,
                                    "length": 41
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 107,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/ai4/",
                                    "start": 594,
                                    "length": 41
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_ainative-businesstransformation-ai4-activity-7490108547393810432--1j8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7490108547393810432",
                            "attachments": [
                                {
                                    "id": "D5610AQGIIj0xDQXtAA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGIIj0xDQXtAA/image-shrink_480/B56Z_I2BDmLAAQ-/0/1785781031389?e=1787724000&v=beta&t=9lm5nh3VNReDacIYggKRYj8rd9fbM04GhCr-k_6YJr0",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-08-03T18:17:17.186Z",
                            "reaction_counter": 26,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488707461839859713",
                            "date": "2w",
                            "text": "Your buyers aren't searching the way they used to, they're asking AI.\n\nEvery AI interaction is shaping which brands get discovered, trusted, and ultimately chosen. Winning in this new landscape takes more than creating content. It requires an AI-native growth system that connects strategy, data, content, campaigns, and execution to influence the entire buying journey.\n\nAt Position², we combine expert strategy with AI-native execution to help brands increase visibility, accelerate growth, and deliver measurable business outcomes.\nIs your growth system built for how buyers buy today?\n\n#AIMarketing #B2BMarketing #GrowthMarketing #AgenticAI #MarketingStrategy #GenerativeAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_aimarketing-b2bmarketing-growthmarketing-activity-7488707461839859713-CbRV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7488707461839859713",
                            "attachments": [
                                {
                                    "id": "D5610AQEajrUKm9Mdpg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEajrUKm9Mdpg/image-shrink_480/B56Z.07wW7GQAQ-/0/1785446991738?e=1787724000&v=beta&t=HiPpOd1bavG5kt-mDhUw-N6ofiQOL1GCQ84w9OZmdG4",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-07-30T21:29:52.359Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7488005340920213504",
                            "date": "3w",
                            "poll": {
                                "id": "7488005339292905472",
                                "is_open": false,
                                "options": [
                                    {
                                        "id": "7488005339481522176",
                                        "win": true,
                                        "text": "Strategic judgment",
                                        "votes_count": 2
                                    },
                                    {
                                        "id": "7488005339456372737",
                                        "win": false,
                                        "text": "Brand & market context",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7488005339456385024",
                                        "win": false,
                                        "text": "Cross-functional execution",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7488005339460694016",
                                        "win": false,
                                        "text": "Measuring business impact",
                                        "votes_count": 1
                                    }
                                ],
                                "question": "What's the biggest barrier to turning AI into measurable business outcomes?",
                                "total_votes_count": 5
                            },
                            "text": "Everyone has AI; few have an AI-Native Growth System. That's why Position² combines expert judgment, an intelligence layer, and AI-native execution into one system built for measurable growth.",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_everyone-has-ai-few-have-an-ai-native-growth-activity-7488005340920213504-4b_C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7488005340198776833",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-28T22:59:53.687Z",
                            "reaction_counter": 2,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485725518621798401",
                            "date": "3w",
                            "text": "Talk about a prime recipe for imposter syndrome.\n\nBut on the Spark Of Ages podcast, Geoff shared how his Australian roots actually protected him from feeling out of place. Growing up in a deeply egalitarian culture meant he didn't view Silicon Valley through a lens of rigid social or academic hierarchies. He just saw another human being across the table.\n\nWhen people at tech events couldn't qualify him by which Ivy League school he attended, they had to talk about the actual tech. And Geoff realized something vital: He could keep up.\n\nHis first startup didn't make it (they essentially built Dropbox before Dropbox, but missed the timing window), but he left the Valley with the ultimate founder superpower: The realization that he belonged in the game.\n\nWhether you are launching your first company from an apartment or pitching top-tier VCs, remember that universal intelligence and open networks have leveled the playing field. The global tech ecosystem belongs to anyone with the curiosity and tenacity to build.\n\nListen to the full episode for more incredible stories from Geoff's 20+ year journey. https://lnkd.in/d5xhr9eY\n\nGeoff McQueen\n\n#FounderJourney #SiliconValley #Entrepreneurship #ImposterSyndrome #Inspiration",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 61,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABVZTYBbJEHHSIpvMA6NYKrcu8_2JFfufk",
                                    "start": 1136,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_founderjourney-siliconvalley-entrepreneurship-activity-7485725518621798401-Hs3I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485725518621798401",
                            "attachments": [
                                {
                                    "id": "D5610AQEnqO2Bc6QOEA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEnqO2Bc6QOEA/image-shrink_480/B56Z.KjrQgHYAQ-/0/1784736036208?e=1787724000&v=beta&t=vseKG1RmiaHkT0PLA9kCKMDU1Z0MLa1X6oTbvsB5inE",
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-22T16:00:41.694Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485363051324428288",
                            "date": "4w",
                            "text": "The danger of vibe coding...\n\nCheck out our new article for the Spark Of Ages podcast.\n\nThis week, we're featuring our latest guest, Geoff McQueen. Geoff's a four-time founder and tech investor, and he's dropping more than a few spicy takes in this episode.\n\nhttps://lnkd.in/gUj-rJUv",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7483223829511553024",
                                "url": "https://www.linkedin.com/pulse/danger-vibe-coding-spark-of-ages-podcast-mkkxc?trackingId=ZWH5MP37oLT6nYP2XLVr1A%3D%3D",
                                "title": "The danger of 'vibe coding'...",
                                "author": "Spark Of Ages podcast",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5612AQHavZFoDh8j1A/article-cover_image-shrink_423_752/B56Z9nAbELHUAc-/0/1784139592364?e=1788998400&v=beta&t=iN3XQa_mDyZqoeqWJ6JHCDVwO4mtpZeq6KIJU4YLPWI",
                                "published_at": "2026-07-15T18:19:52.531Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 64,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABVZTYBbJEHHSIpvMA6NYKrcu8_2JFfufk",
                                    "start": 133,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_the-danger-of-vibe-coding-check-out-our-activity-7485363051324428288-Sepw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7485002890437332992",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-21T16:00:22.756Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7485023404958457856",
                            "date": "4w",
                            "text": "Our latest guest on the Spark Of Ages podcast, Geoff McQueen, dropped a masterclass on a crucial entrepreneurial concept: Stated Preference vs. Revealed Preference.\n\nWhile building his previous iteration, Team Score, leaders consistently told him, \"Yes, I want better dashboards to monitor my remote and hybrid teams.\"\n\nBut when it came down to actual user behavior, they ignored the feature. Their revealed preference showed they didn't actually care enough to change their habits.\n\nWhat they actually wanted wasn't another dashboard (the \"analytics trap\"). They wanted the qualitative context of their business without spending 5 hours a day reading Slack threads and looking at box scores.\n\nThat single realization sparked his pivot into Worksites AI.\n\nThe Lesson: Stop looking at trailing indicators and polished survey answers. Watch where your users actually spend their time, focus on the qualitative friction they are desperate to solve, and build for their actions—not their words.\n\nListen to the full episode here: https://lnkd.in/d5xhr9eY\n\n#ProductMarketFit #StartupLessons #Entrepreneurs #DataAnalytics",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 24,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABVZTYBbJEHHSIpvMA6NYKrcu8_2JFfufk",
                                    "start": 47,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_productmarketfit-startuplessons-entrepreneurs-activity-7485023404958457856-ELo5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7485023404958457856",
                            "attachments": [
                                {
                                    "id": "D5610AQGpcX8YNmLzlw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGpcX8YNmLzlw/image-shrink_480/B56Z.AlGyVIgAU-/0/1784568638919?e=1787724000&v=beta&t=Uebw284XJffKFybVmBAIPgGCHFaW_I6qAc2kapdH3gk",
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
                            "repost_counter": 0,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-07-20T17:30:44.752Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7483972747690258433",
                            "date": "1mo",
                            "text": "What if every employee had a digital coworker powered by an \"AI factory\" of specialized agents? That's the vision Commercial AI Advisor Amit Pande shared at GMS 2026, not AI that simply responds to prompts, but AI coworkers that work alongside an organization's best people.\n\nPosition²'s VP of Global Operations & Strategy, Sajjan Kanukolanu, PhD, then showed what that looks like in practice. He shared an AI coworker that scans his emails, surfaces the most relevant AI news, ranks it based on his priorities, and continuously adapts as the market evolves.\n\nThe conversation highlighted a different model for AI: one where specialized AI coworkers help monitor information, are proactive—not waiting for the human to prompt —and support people, while humans continue to provide the expertise, context, and judgment that drive better decisions.\n\n▶️ Watch the full session here: https://bit.ly/44EHR1x \n\n#AgenticAI #AINative #ArtificialIntelligence #FutureOfWork #EnterpriseAI #MarketingInnovation #GrowthMarketing #GMS2026 #GrowthMarketingSummit2026",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 136,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 276,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 324,
                                    "length": 22
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_agenticai-ainative-artificialintelligence-activity-7483972747690258433-bZtR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7483972746792685568",
                            "attachments": [
                                {
                                    "id": "D5610AQGiUznoSgThnQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGiUznoSgThnQ/mp4-720p-30fp-crf28/B56Z9xpGhZIoBk-/0/1784318036824?e=1787724000&v=beta&t=CNbShTcXMdsqhhvFxFKiRSwxNQHebYuALLe440Fheys",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "comment_counter": 8,
                            "parsed_datetime": "2026-07-17T19:55:48.539Z",
                            "reaction_counter": 35,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480652135152496640",
                            "date": "1mo",
                            "text": "\"I'll handle it.\" \"If I don't carry the weight of this company, who will?\"\n\nIf you are a founder or CEO, you've likely said these words. You might even wear your toxic stress like a badge of honor.\n\nOn the Spark of Ages podcast, Christophe Morin shared a deeply vulnerable look into his own journey as a high-stakes executive. For years, he battled a \"savior complex\"—an addiction to anxiety and the constant need to troubleshoot everyone else's problems.\n\nThe breakthrough? Realizing that this behavior wasn't a leadership asset. It was a coping mechanism causing internal dysfunction.\n\nWhy Conscious Leadership Changes the Bottom Line:\n\n▪️Stress is Contagious: Nervous, reactive leaders create nervous, reactive cultures. Your personal energy (your qi or prana) dictates the room.\n\n▪️The Power of Hypofrontality (Flow State): Overactive frontal lobes burn too much oxygen and glucose, leading to over-analysis and burnout. High-performance leaders like Steph Curry or Tim Cook operate in a state of flow—relying on trust and execution rather than over-thinking.\n\n▪️Rewiring through Neuroplasticity: Your belief systems aren't fixed. You can use rituals (mindfulness, nature, deep reflection) to radically shift decades-old coping mechanisms.\n\n\"When your pain becomes intolerable, it's the ultimate motivator.\" — Dr. Christophe Morin.\n\nTrue leadership isn't about carrying the heaviest load until you break. It's about building personal awareness to lead from a place of calm, clear presence.\n\nWatch the full episode: https://bit.ly/3T02TVF\n\n#ExecutiveLeadership #MentalHealth #FlowState #Mindfulness #CEOInsights",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7439062042202277218",
                                "url": "https://bit.ly/3T02TVF",
                                "title": "- YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQE5FWC8ybpSCg/image-shrink_480/B56Z9CdezpGoAQ-/0/1783526452793?e=1787724000&v=beta&t=C0xa8iVeovAmvLBbWsoUYJCXi1ccX4NeLJUfZ5gUDLc",
                                "published_at": "2026-03-15T21:36:41.950Z"
                            },
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_youtube-activity-7480652135152496640-GXaw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7480652135152496640",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-07-08T16:00:52.816Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480406572880375808",
                            "date": "1mo",
                            "text": "One great swing can change a round. One great conversation can change your business! Last week’s Position² and CallRail Topgolf GTM Mixer brought together healthcare, med-tech, and private equity leaders for an evening of meaningful connections, insightful conversations, and fresh ideas. Even in a world shaped by AI, relationships and collaboration remain central to how businesses grow.\n\nThank you to everyone who joined us and to CallRail for partnering with us on a great evening.\n\n#Networking #Leadership #Healthcare #MedTech #PrivateEquity #Innovation #AI #GrowthMarketing #HealthcareInnovation #Position2 #CallRail",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 97,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/callrail/",
                                    "start": 111,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/callrail/",
                                    "start": 434,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_networking-leadership-healthcare-activity-7480406572880375808-wGOs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480406571529949184",
                            "attachments": [
                                {
                                    "id": "D5610AQEw08oUb0CZdQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEw08oUb0CZdQ/image-shrink_480/B56Z8..IFKH4AQ-/0/1783467901802?e=1787724000&v=beta&t=6BoG2NXV-LSJUw_V_CIsH9CzTuqMpGhnUQPqNQ6s3Y4",
                                    "size": {
                                        "width": 480,
                                        "height": 581
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQEzHPX44P_Wgw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEzHPX44P_Wgw/image-shrink_480/B56Z8..IXMH4AQ-/0/1783467903027?e=1787724000&v=beta&t=9P8i5x9w-JnTaQGwPxwp5l4bcumCzKLq0Hw8sP95Oqg",
                                    "size": {
                                        "width": 480,
                                        "height": 367
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQE1A_9BGdn8nw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE1A_9BGdn8nw/image-shrink_480/B56Z8..IkFGcAU-/0/1783467903659?e=1787724000&v=beta&t=pbW_ux4cyBSWIytBuxtXl4kkZLuIgJ8liXgk4-kgvLU",
                                    "size": {
                                        "width": 480,
                                        "height": 646
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQG-IRNAkGJevQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG-IRNAkGJevQ/image-shrink_480/B56Z8..Io1IoAQ-/0/1783467903905?e=1787724000&v=beta&t=LHM5rCZW4lAc4Mz1xAdQxPXrA84kmcTo31hacYEOFyA",
                                    "size": {
                                        "width": 480,
                                        "height": 629
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQE0k-JjapXi3w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE0k-JjapXi3w/image-shrink_480/B56Z8..I_hKUAQ-/0/1783467905362?e=1787724000&v=beta&t=exS5Ao5oQPYPlMI7pg6Dm_xtca5iMAT-kBOlAbDEqmA",
                                    "size": {
                                        "width": 480,
                                        "height": 656
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
                            "parsed_datetime": "2026-07-07T23:45:06.208Z",
                            "reaction_counter": 65,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7480300689278021632",
                            "date": "1mo",
                            "text": "New article drop - - - \n\nIt's a quick read out of the latest Spark of Ages episode featuring Christophe Morin, Ph.D., on AI and neuromarketing.\n\nListen to the latest episode here: https://lnkd.in/g48V4puw",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAA6FIBy7Tcd-mlhKPgPG-WXtWafUfemOA",
                                    "start": 93,
                                    "length": 23
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7480300690154639361",
                            "share_url": "https://www.linkedin.com/posts/position2_article-drop-read-about-our-latest-episode-activity-7480300690154639361-WMrY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7480300689278021632",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7478189104065826816",
                                "date": "1mo",
                                "text": "Article drop!\n\nRead about our latest episode of the podcast, with our guest, Christophe Morin, Ph.D., Co-founder and CEO of SalesBrain",
                                "author": {
                                    "id": null,
                                    "name": "Spark Of Ages podcast",
                                    "is_company": true,
                                    "public_identifier": "spark-of-ages-podcast"
                                },
                                "parsed_datetime": "2026-07-01T20:53:40.444Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-07T16:44:21.590Z",
                            "reaction_counter": 6,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-07-07T16:44:21.799Z"
                        },
                        {
                            "id": "7479942504755367937",
                            "date": "1mo",
                            "text": "If an AI agent doesn't have a primal brain, a gut, or real emotions... can you actually emotionally persuade it?\n\nThis is the multi-million dollar question facing modern marketers. On the Spark of Ages podcast, neuromarketing pioneer Christophe Morin weighed in on a fascinating debate. While some argue AI is purely rational math, Christophe sees a different layer emerging: Synthetic Consciousness.\n\nAn AI doesn't have a sensory, biological appreciation of emotion. But it's a superhuman machine at detecting emotional patterns.\n\nHow this shifts the marketing playbook:\n\n▪️Pattern Recognition > Raw Logic: AI models are trained on human data. Because human decision-making is driven by the primal brain (survival, fear, attention shortcuts), the AI learns to prioritize those same triggers.\n\n▪️The \"Double Process\" Still Applies: Just as humans crave short-form content (which is why TikTok and YouTube Shorts are thriving), AI models are optimized for hyper-efficient patterns in high-impact data.\n\n▪️Predictive Attention Models: We can now use AI to test landing pages and creative assets to predict human visual attention before deployment—because attention rules are hardcoded into our primal biology.\n\nYou aren't changing the machine's \"feelings.\" You're optimizing for the complex human emotional algorithms the machine has mapped.\n\nListen to the full episode: https://bit.ly/4vd8y8o\n\n#Neuromarketing #MarketingStrategy #ArtificialIntelligence #B2BMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_neuromarketing-marketingstrategy-artificialintelligence-activity-7479942504755367937-6QOy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7479942504755367937",
                            "attachments": [
                                {
                                    "id": "D5610AQH7tYEcnwvxpg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQH7tYEcnwvxpg/image-shrink_480/B56Z84YDlZG0AQ-/0/1783357258376?e=1787724000&v=beta&t=61I94t7laTUKLOJKfarWes_YRL7ivnELaGN4i1io6-I",
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-07-06T17:01:03.745Z",
                            "reaction_counter": 13,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7479172189741543424",
                            "date": "1mo",
                            "text": "Happy Fourth of July! Today, we celebrate the people whose ideas, ambition, and determination continue to shape what's possible. 🇺🇸 \n\nAt Position², we believe the future of growth isn't built by AI alone. It's built when human judgment leads, and AI executes at scale. We're wishing our clients, partners, and community a safe and memorable Independence Day from Team Position². \n\n#Happy4thOfJuly #HumanDirected #AIAgents #AINative #GrowthMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_happy4thofjuly-humandirected-aiagents-activity-7479172189741543424-bcpY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7479172189741543424",
                            "attachments": [
                                {
                                    "id": "D5610AQFONd4MHH7Kzw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFONd4MHH7Kzw/image-shrink_480/B56Z8tbdQ4G0AQ-/0/1783173600662?e=1787724000&v=beta&t=aTcHu5ZRrDe1xCdSTHbhxoqO033D7iQzjLClQKLVqdA",
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-07-04T14:00:06.334Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7478557540344037376",
                            "date": "1mo",
                            "text": "The conversations at AI Engineer World’s Fair 2026 this past week have been shaping what’s next for AI, and one of the biggest questions facing GTM teams is how to build AI systems that truly know the buyer signals combined with your 1st party industry, persona, and business intelligence.\n\nWe're proud to see Position² VP of Global Operations & Strategy, Sajjan Kanukolanu, PhD, featured in the AI Engineer World’s Fair 2026 online track with his session, Build the AI GTM Agent That Knows the Buyer Before the First Message.\n\nIn the session, Sajjan Kanukolanu, PhD explores how organizations can move beyond generic AI by combining buyer intelligence, context, and human judgment to create AI-native GTM systems that deliver more relevant, personalized engagement at scale. It's an approach that reflects Position² AI-native, human-directed operating model. If you’re at the AI Engineer World’s Fair this week, be sure to reach out to Sajjan Kanukolanu, PhD and check out his online session. \n\n#AIEngineer #AIEngineerWorldsFair #AgenticAI #GoToMarket #GTM #MarketingAI #EnterpriseAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/aidotengineer/",
                                    "start": 21,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 310,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 356,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/aidotengineer/",
                                    "start": 396,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 544,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 807,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/aidotengineer/",
                                    "start": 877,
                                    "length": 11
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 937,
                                    "length": 22
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_aiengineer-aiengineerworldsfair-agenticai-activity-7478557540344037376-DP8v?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7478557540344037376",
                            "attachments": [
                                {
                                    "id": "D5610AQGUW97iVuBSPg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGUW97iVuBSPg/image-shrink_480/B56Z8ksb6yGcAU-/0/1783027056615?e=1787724000&v=beta&t=xhT-6ePQ3I9wgsX9B1loYt21zqSfgpFT3kBKgg3ePFQ",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-07-02T21:17:42.498Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7477839527164968960",
                            "date": "1mo",
                            "text": "Our Founder & CEO, Rajiv Parikh, will be in Paris from July 7–9 to connect with leaders building AI-native organizations and redefining how businesses grow in the age of AI.\n\nThe conversation around AI is entering a new phase. The question is no longer whether organizations should adopt AI; it's how they turn AI into measurable business outcomes. That's why Position² is excited to be at RAISE Summit 2026, where thousands of enterprise leaders, founders, investors, and AI innovators will come together to shape what's next.\n\nIf you're attending RAISE Summit, let's connect. https://bit.ly/4eCBvWh \n\n#RAISESummit #AI #EnterpriseAI #AgenticAI #GrowthMarketing #Leadership #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 19,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 360,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 390,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/raise-summit/",
                                    "start": 549,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_raisesummit-ai-enterpriseai-activity-7477839527164968960-Bt21?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7477839527164968960",
                            "attachments": [
                                {
                                    "id": "D5610AQHQghpZhA68CQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHQghpZhA68CQ/image-shrink_480/B56Z8afaJHKUAc-/0/1782855869323?e=1787724000&v=beta&t=mkDmSni18hmuLphgsLNPLZx9BiXalK775ejk5fwVBBc",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-30T21:44:34.816Z",
                            "reaction_counter": 40,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475627769473900545",
                            "date": "1mo",
                            "text": "It wasn't the price. It wasn't features. The problem was: “Will it fit my space?” For flexera customers, that uncertainty slowed decisions and sometimes led to returns.\n\nflexera partnered with Position² to implement StudioX and created a highly accurate 3D model of the Pilates Reformer. We then used it to embed an AR experience directly into their Shopify store. Now customers can place the product in their own space at true scale, see if it fits, and then buy. No guesswork. No measuring.\n\nThe result? Faster purchase decisions. Fewer returns. Confident buyers. See how we brought flexera to life with StudioX: https://bit.ly/4veN8I9\n\nExplore the next evolution of 3D modeling on StudioX: https://bit.ly/4ajiWnq\n\n#Flexera #StudioX #Pilates #PilatesReformer #Position2 #CustomerTestimonial",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/joinflexera/",
                                    "start": 86,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/joinflexera/",
                                    "start": 170,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 193,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/joinflexera/",
                                    "start": 585,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_flexera-studiox-pilates-activity-7475627769473900545-HiDu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7475627768383184897",
                            "attachments": [
                                {
                                    "id": "D5610AQFClyasbkXUcA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFClyasbkXUcA/mp4-720p-30fp-crf28/B56Z77DY1cG8Bk-/0/1782328438006?e=1787724000&v=beta&t=uJvgXLIKMkLURxLjddDq4RP2wIc4EXtfnkgZMu91fUk",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-24T19:15:50.690Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7475295771765014528",
                            "date": "1mo",
                            "text": "Too many tools, no real context, messaging that doesn't convert, strategy that can't adapt. These aren't separate problems. They're symptoms of the same issue: a disconnected marketing system.\n\nAt Position², we don't add more complexity. We help organizations build human-directed, AI-enabled marketing systems that learn, adapt, and improve over time. \n\nLearn more: https://lnkd.in/gGvuNV9m\n\n#GrowthMarketing #DemandGen #B2BMarketing #MarketingStrategy #AIMarketing #AgenticAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 197,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-demandgen-b2bmarketing-activity-7475295771765014528-1QM-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7475295771765014528",
                            "attachments": [
                                {
                                    "id": "D5610AQHvvdG0oPgliA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHvvdG0oPgliA/image-shrink_480/B56Z72V4IuKgAQ-/0/1782249390906?e=1787724000&v=beta&t=JlA3MGK60vJiDOv3S-8GKKRIkHqw8A2EyFCnc-PVANE",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-06-23T21:16:36.268Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473819357584900096",
                            "date": "1mo",
                            "text": "The conversations at Position²’s 4th Annual Growth Marketing Summit made one thing clear: Marketing is entering a new era. From AI-native execution and changing buyer behavior to measurement, content, and growth strategy, this year's discussions focused on how organizations can adapt and stay ahead in a rapidly evolving landscape.\n\nA heartfelt thank you to our incredible speakers, partners, and attendees for making GMS 2026 such a success. The insights shared, connections made, and conversations started will continue to shape the future of growth marketing long after the event.\n\nA heartfelt thank you to our incredible speakers, partners, and attendees for making GMS 2026 such a success. The insights shared, connections made, and conversations started will continue to shape the future of growth marketing long after the event.\n\nSpecial thanks to our speakers Anjai \"AJ\" Gandhi, Jon Miller, Amit Pande, Sajjan Kanukolanu, PhD, Rajiv Parikh, Vamshi Sriperumbudur, Randi Barshack, Alex Gammelgard, Eric Nalbone, Nicole Siegal Fuselier, Rajesh Muthyalu, Sanjiv Parikh, Tina Stewart, Udi Ledergor, and Kanishka!\n\nWe're already looking ahead to what's next. Sign up to receive updates and be the first to hear about the 5th Annual Growth Marketing Summit, returning February 3–6, 2027! 🔗 https://bit.ly/3QUPCwW\n\n#GrowthMarketing #ArtificialIntelligence #B2BMarketing #MarketingLeadership #GMS2026",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 21,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAADFkBKQ3STctM5UjT1nx2sGteP5I13hc",
                                    "start": 869,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDmQBnZJCpDRvg1Z6rwkxxngNbm6WrIU",
                                    "start": 888,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 900,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 912,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 936,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAOHpcBMAFqBKv1j6eYKHCcm6xl_f5Rwdw",
                                    "start": 950,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAoPuUBwH1gldUJEh8oDO2aS6HT6XJUiLk",
                                    "start": 972,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADbgH0BrtkDo1si2gXF1zYOsmsmqKmlce4",
                                    "start": 988,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAP387QBEhSLcoQoza2qsTJwlqmZ7Q9tAIE",
                                    "start": 1005,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 1019,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADW1VwB5r4s70LtLHnsY32j0gMXl3eFM3A",
                                    "start": 1043,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAFGzpoB_C7tein-5HqANyqrU-KZj5VIMMY",
                                    "start": 1060,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAACVvMBb71RAUqniiUcbq0OkujXIMpt9Jo",
                                    "start": 1075,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWhFsBmKKb6ClLc7Hx_n0K7CE-ABfGDsg",
                                    "start": 1089,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAV0-zkB4iO4y2fkmmm6wZbG_tOXkRqBU-w",
                                    "start": 1107,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-artificialintelligence-b2bmarketing-activity-7473819357584900096-NICc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7473819356699779072",
                            "attachments": [
                                {
                                    "id": "D5610AQGmvpuiHKJpTw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGmvpuiHKJpTw/mp4-720p-30fp-crf28/B56Z7hWpYdG0Bk-/0/1781897284303?e=1787724000&v=beta&t=tlbKYiTyCLlXWPClHDeuju8-k6MM56S6QKPRr162CtY",
                                    "size": {
                                        "width": 720,
                                        "height": 900
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-19T19:29:51.697Z",
                            "reaction_counter": 42,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7473091327560441856",
                            "date": "2mo",
                            "text": "A year ago, \"intelligence layer\" was a phrase we used in meetings. Now it's how Position² actually runs.\n\nToday, the team operates inside it: 151 AI workflows, 26 shared knowledge bases, and 19 data tables, wired together so work moves without anyone babysitting it. 150+ people across the US and Asia work this way every day.\nThree things a year taught us:\n\n• The advantage compounds. Our company-research workflow has run 280+ times. Our ad-ops URL checker has run 1230+ times — and we've rebuilt it three times to make it sharper. Every run feeds the next, in quality, not just speed. Our Org Bot answers people and policy questions across a 150-person directory instantly, so nobody waits for an email.\n\n• Human judgment gets more valuable, not less. AI executes. People decide what matters, what to change, and what to scale. One example: \"track board-slide submissions\" became a deployed assistant, a tracking table, and a nightly job that checks status and posts a Slack summary on its own — I built in a conversation, then let it run until the meeting ended.\n\n• What we build for ourselves, we ship to clients. The same platform now runs AI products on live landing pages — qualifying prospects, handling objections from competitive-takeout campaigns, and booking meetings with the right rep. One operating system, internal and client-facing.\n\nThe takeaway: treat AI as an operating layer, not a feature. Build systems that run on their own, and keep people in on the decisions that count.\n\n#AI #GrowthMarketing #AgenticWorkflows #MarketingOps #B2BMarketing #AIautomation #GTM",
                            "author": {
                                "id": "ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                "name": "Rajiv Parikh",
                                "headline": "Growth Marketing CEO | GTM Community Builder",
                                "is_company": false,
                                "public_identifier": "rajivparikh",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C4E03AQEHxuL8aH7UiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516165049773?e=1788998400&v=beta&t=SSmiUb1XtZBx5dqifP3C6eLGJNAn6X11JR8ms8S9KE0"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7473464410154639360",
                            "share_url": "https://www.linkedin.com/posts/rajivparikh_growthmarketing-aimarketing-artificialintelligence-activity-7473091327560441856-8ZXD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7473091327560441856",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "reposted_by": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2"
                            },
                            "repost_content": {
                                "id": "7473046864276148224",
                                "date": "2mo",
                                "text": "Everyone has access to AI. Very few have built the intelligence layer that makes it a competitive advantage. Technology alone doesn't create differentiation; the advantage comes from connecting data, context, and human judgment into a marketing system that learns and improves over time.\n\nThat's the difference between generating more outputs and generating better business outcomes. At Position², we help organizations build human-directed, AI-enabled marketing systems that turn intelligence into measurable growth.\n\n#GrowthMarketing #AIMarketing #ArtificialIntelligence #B2BMarketing #Position2",
                                "author": {
                                    "id": null,
                                    "name": "Position²",
                                    "is_company": true,
                                    "public_identifier": "position2"
                                },
                                "parsed_datetime": "2026-06-17T16:20:14.940Z"
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-17T19:16:55.813Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-18T19:59:25.635Z"
                        },
                        {
                            "id": "7473100249729925120",
                            "date": "2mo",
                            "text": "After four years of hosting the Growth Marketing Summit, one thing is clear: the future arrives faster than most organizations expect.\n\nWhat stood out at GMS 2026 wasn't the volume of AI talk — everyone's talking about AI now. It was how the sharpest leaders are approaching it: not just adopting tools, but building the systems that connect data, context, and human judgment so AI gets better over time.\n\nA few moments that stuck with me:\n\n• Anjai \"AJ\" Gandhi (Marlin Equity) opened with the state of GTM — the operating model itself is being rebuilt, not just the tooling.\n\n• Jon Miller made the case that GTM transformation is structural: the old MQL-to-pipeline machine doesn't survive contact with AI-native buyers.\n\n• Amit Pande (C3 AI) and our own Sajjan Kanukolanu, PhD pushed the hard question — moving AI from \"copilot\" to \"co-worker,\" where it owns real work, not just suggestions.\n\n• Vamshi Sriperumbudur (Palo Alto Networks), Randi Barshack (Dusty Robotics), and Alex Gammelgard (Wowza) showed what hyper-detailed ICP and tailored ABM look like when the targeting is this precise.\n\n• Eric Nalbone and Nicole Siegal Fuselier (SambaNova) mapped how AEO and GEO are reshaping discovery as buyers shift from search boxes to answer engines.\n\n• Sajjan and Rajesh Muthyalu landed the line I keep coming back to: knowledge is the moat. The advantage isn't the model — it's turning what your team knows into what AI can do.\n\n• Udi Ledergor (Gong) on using AI to drive real GTM alignment, and Kanishka Roy (Plum Acquisition Corp. IV) on building a personal brand that compounds.\n\nThat's the shift we're making at Position² — and why so many of this year's conversations centered on AI-native execution, changing buyer behavior, and how marketing teams need to evolve.\n\nIf you missed this year's sessions, we'll be back for the 5th Annual Growth Marketing Summit, February 3–6, 2027. Sign up for updates — we'd love to have you join the conversation.\n\nhttps://lnkd.in/g-AypiTJ\n\n#GrowthMarketing #AInative #GTM #ABM #AEO #B2BMarketing #MarketingLeadership",
                            "author": {
                                "id": "ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                "name": "Rajiv Parikh",
                                "headline": "Growth Marketing CEO | GTM Community Builder",
                                "is_company": false,
                                "public_identifier": "rajivparikh",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C4E03AQEHxuL8aH7UiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516165049773?e=1788998400&v=beta&t=SSmiUb1XtZBx5dqifP3C6eLGJNAn6X11JR8ms8S9KE0"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAADFkBKQ3STctM5UjT1nx2sGteP5I13hc",
                                    "start": 443,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDmQBnZJCpDRvg1Z6rwkxxngNbm6WrIU",
                                    "start": 578,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 724,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 755,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAOHpcBMAFqBKv1j6eYKHCcm6xl_f5Rwdw",
                                    "start": 896,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAoPuUBwH1gldUJEh8oDO2aS6HT6XJUiLk",
                                    "start": 939,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/dusty-robotics/",
                                    "start": 955,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADbgH0BrtkDo1si2gXF1zYOsmsmqKmlce4",
                                    "start": 976,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/wowza-media-systems/",
                                    "start": 993,
                                    "length": 5
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAP387QBEhSLcoQoza2qsTJwlqmZ7Q9tAIE",
                                    "start": 1097,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 1114,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sambanova/",
                                    "start": 1138,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADW1VwB5r4s70LtLHnsY32j0gMXl3eFM3A",
                                    "start": 1263,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWhFsBmKKb6ClLc7Hx_n0K7CE-ABfGDsg",
                                    "start": 1431,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/gong-io/",
                                    "start": 1445,
                                    "length": 4
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAV0-zkB4iO4y2fkmmm6wZbG_tOXkRqBU-w",
                                    "start": 1496,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/plum-acquisition-corp-iv/",
                                    "start": 1510,
                                    "length": 25
                                },
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 1616,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7473463711794348032",
                            "share_url": "https://www.linkedin.com/posts/rajivparikh_at-position%C2%B2s-4th-annual-growth-marketing-ugcPost-7473100249729925120-hWBu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7473100249729925120",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "reposted_by": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2"
                            },
                            "repost_content": {
                                "id": "7471299878535446528",
                                "date": "2mo",
                                "text": "At Position²’s 4th Annual Growth Marketing Summit earlier this year, our CEO, Rajiv Parikh, explained why marketing remains a high-judgment discipline and why the companies getting the most value from AI aren't replacing people; they're enabling their teams to make better decisions while AI accelerates execution.\n\nAI can generate content, analyze data, and automate workflows. But it still can't answer the most important question: What should we do next? As AI speeds up execution, judgment becomes more valuable, not less.\n\nExplore the full keynote and 2026 Growth Marketing Session session library here: https://bit.ly/4eBmlAt",
                                "author": {
                                    "id": null,
                                    "name": "Position²",
                                    "is_company": true,
                                    "public_identifier": "position2"
                                },
                                "parsed_datetime": "2026-06-12T20:38:21.082Z"
                            },
                            "repost_counter": 2,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-17T19:52:23.024Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-06-18T19:56:39.133Z"
                        },
                        {
                            "id": "7473046864276148224",
                            "date": "2mo",
                            "text": "Everyone has access to AI. Very few have built the intelligence layer that makes it a competitive advantage. Technology alone doesn't create differentiation; the advantage comes from connecting data, context, and human judgment into a marketing system that learns and improves over time.\n\nThat's the difference between generating more outputs and generating better business outcomes. At Position², we help organizations build human-directed, AI-enabled marketing systems that turn intelligence into measurable growth.\n\n#GrowthMarketing #AIMarketing #ArtificialIntelligence #B2BMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 387,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-aimarketing-artificialintelligence-activity-7473046864276148224-RP2G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7473046864276148224",
                            "attachments": [
                                {
                                    "id": "D5610AQFWj7TAU1Sq3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFWj7TAU1Sq3A/image-shrink_480/B56Z7WYgbsGsAU-/0/1781713209551?e=1787724000&v=beta&t=YrC2kEQvmsmdXlH2UmuajZn9Ui9OZGj7uF2usm02kos",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-17T16:20:14.940Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7471299878535446528",
                            "date": "2mo",
                            "text": "At Position²’s 4th Annual Growth Marketing Summit earlier this year, our CEO, Rajiv Parikh, explained why marketing remains a high-judgment discipline and why the companies getting the most value from AI aren't replacing people; they're enabling their teams to make better decisions while AI accelerates execution.\n\nAI can generate content, analyze data, and automate workflows. But it still can't answer the most important question: What should we do next? As AI speeds up execution, judgment becomes more valuable, not less.\n\nExplore the full keynote and 2026 Growth Marketing Session session library here: https://bit.ly/4eBmlAt",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 3,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 78,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_at-position%C2%B2s-4th-annual-growth-marketing-activity-7471299878535446528-0NJt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7471299877654654977",
                            "attachments": [
                                {
                                    "id": "D5610AQH0TCqzehpLpQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQH0TCqzehpLpQ/mp4-720p-30fp-crf28/B56Z69jMgYG4Bk-/0/1781296586660?e=1787724000&v=beta&t=MQYYI3bHOcda_ctH_y3OdEt2AwYujRGxd2Mi8OhS7wE",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-06-12T20:38:21.082Z",
                            "reaction_counter": 34,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470505266430521344",
                            "date": "2mo",
                            "text": "Dinosaurs, Cockroaches, and Cheetahs. Which one is your company in the age of AI? 🦖🪳🐆\n\nOn the latest episode of the Spark Of Ages podcast, Bridget Winston, CRO of PatientNow, shares a fascinating framework for how the B2B SaaS landscape is shifting:\n\n▪️ Dinosaurs: The legacy companies and industries that fail to adapt and will be completely wiped away by AI.\n▪️ Cockroaches: The ultra-slow verticals that, no matter what happens, will likely never evolve (or will move at a snail's pace).\n▪️ Cheetahs: The hyper-agile, AI-native companies where artificial intelligence is completely revolutionizing pricing, metrics, and workflows.\n\nBut Bridget notes that many of these \"Cheetahs\" are currently operating on what she calls ERR—Experimental Revenue/ARR. They are growing at breakneck speeds by giving away mind-blowing functionality, but the permanence of that revenue is still the ultimate question.\n\nThe baseline? Whether you're priced by user seat or by business location, the traditional \"Good, Better, Best\" pricing models were built for human psychology. As digital agents begin making software purchasing decisions, the playbook is being rewritten in real-time.\n\nWatch the full episode: https://bit.ly/4ecvDSf\n\nAre we looking at a permanent SaaSpocalypse, or is the panic overblown? Drop your thoughts in the comments.\n\n#AI #SaaS #BusinessStrategy #FutureOfWork #Innovation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7078900045593955074",
                                "url": "https://bit.ly/4ecvDSf",
                                "title": "The Real Reason Your Revenue Team Is Failing - Metrics, Cheetahs, B2B+B2C ~ Spark of Ages Ep 65 - YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQGoGNqydtsgxw/image-shrink_480/B56Z6yQ9VQJ4AQ-/0/1781107250796?e=1787724000&v=beta&t=lhtQEBMYfQWkNPsZF8MR7N87xxMpQ4atJcv2t3EAH3U",
                                "published_at": "2023-06-26T01:01:30.472Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 116,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABsV6ABAIrL4A_pn7WK9shM2nqU8wGXdYI",
                                    "start": 139,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/patientnow/",
                                    "start": 163,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_the-real-reason-your-revenue-team-is-failing-activity-7470505266430521344-Yd93?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470505266430521344",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-06-10T16:00:50.793Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7470210191213367296",
                            "date": "2mo",
                            "text": "Most teams try to fix marketing by adding more: more tools, more people, more campaigns. At Position², we step back and fix the system itself so it can actually scale.\n\nCurious what that looks like in practice? Let’s connect.\n\n#MarketingStrategy #AIMarketing #B2BMarketing #GrowthMarketing #AgenticAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_marketingstrategy-aimarketing-b2bmarketing-activity-7470210191213367296-0veb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7470210191213367296",
                            "attachments": [
                                {
                                    "id": "D5610AQH--O4QLfQHzw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQH--O4QLfQHzw/image-shrink_480/B56Z6uEkW0JoAQ-/0/1781036894235?e=1787724000&v=beta&t=kuAINsOCNh6OmdXIUp_mRR5VuwGyFleaT6Ap1LE2kEw",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-06-09T20:28:19.379Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7469810711259500544",
                            "date": "2mo",
                            "text": "Is your Chief Revenue Officer actually just a glorified VP of Sales?\n\nAccording to Bridget Winston, 3-time CRO and current Chief Revenue Officer at PatientNow, too many companies confuse a bookings target with a full revenue target.\n\nIf you want to know what kind of CRO you truly have (or are hiring for), look at their organizational remit.\n\n▪️The Bookings-Only CRO: Typically, they have the net-new sales team reporting to them. They focus entirely on the top of the funnel.\n\n▪️The Full-Stack CRO: Owns the entire revenue system. This means sales, marketing, customer success, onboarding, implementation, and support all tie back to them.\n\nWhy does this matter? Because true growth isn't just about efficiently acquiring a customer—it's about whether they stay, expand, and find product-market fit.\n\nIf you are only measuring your revenue leader on bookings, you're missing out on tracking Gross Retention Rate (GRR), Net Retention Rate (NRR), and lifetime value (LTV).\n\n🎧 Tune into the latest episode of the Spark of Ages podcast to hear Bridget break down the shift from owning sales to owning the entire revenue engine.\n\nWatch the full episode: https://bit.ly/43iNSjR\n\n#SaaS #Leadership #RevenueOperations #CRO #B2BGrowth #SparkOfAges",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7078900045593955074",
                                "url": "https://bit.ly/43iNSjR",
                                "title": "The Real Reason Your Revenue Team Is Failing - Metrics, Cheetahs, B2B+B2C ~ Spark of Ages Ep 65 - YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQGU36ZMWv_wxw/image-shrink_480/B56Z6oZQ03GgAQ-/0/1780941655752?e=1787724000&v=beta&t=LvQv1G2laFEqd5tfweC5rqLmi7U2D0xdZGVfUENtTBU",
                                "published_at": "2023-06-26T01:01:30.472Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABsV6ABAIrL4A_pn7WK9shM2nqU8wGXdYI",
                                    "start": 83,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/patientnow/",
                                    "start": 148,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_the-real-reason-your-revenue-team-is-failing-activity-7469810711259500544-dmhK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7469810711259500544",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-06-08T18:00:55.936Z",
                            "reaction_counter": 13,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7468013421842595840",
                            "date": "2mo",
                            "poll": {
                                "id": "7468013420861308928",
                                "is_open": false,
                                "options": [
                                    {
                                        "id": "7468013421029085185",
                                        "win": false,
                                        "text": "Too many tools, no clarity",
                                        "votes_count": 3
                                    },
                                    {
                                        "id": "7468013421029048320",
                                        "win": false,
                                        "text": "AI without real context",
                                        "votes_count": 3
                                    },
                                    {
                                        "id": "7468013421028929536",
                                        "win": false,
                                        "text": "Messaging doesn’t convert",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7468013421028950016",
                                        "win": false,
                                        "text": "Strategy too slow",
                                        "votes_count": 1
                                    }
                                ],
                                "question": "What’s the biggest reason your marketing isn’t scaling right now?",
                                "total_votes_count": 8
                            },
                            "text": "Most teams aren’t lacking effort or tools; they’re lacking context. AI can generate, but without real intelligence behind it, it doesn’t improve outcomes. We’re curious where this breaks down most for teams right now.",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_most-teams-arent-lacking-effort-or-tools-activity-7468013421842595840-uvDf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7468013421167493120",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-06-03T18:59:08.747Z",
                            "reaction_counter": 3,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7467651461653569537",
                            "date": "2mo",
                            "text": "Five months ago, we sat down with Rustam Esanov of Reprogram Biosciences and Manan M. of Unshackled Ventures on the Spark Of Ages podcast. \n\nCongrats to Rustam, his co-founder Eziz Kuliyev, and the team at Reprogram on closing their seed round with $6MM.\n\nCheck out their episode of the Spark of Ages: https://bit.ly/4dZHMd1\n\nHere's a link to the Substack announcement: https://bit.ly/4dU1G9b",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB2MX4oBXd0KW0XQJe6YR-SMpi94B2JLwQI",
                                    "start": 34,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/company/reprogram-biosciences/",
                                    "start": 51,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAD9ktoBGg_1-nRDT3pZv2B9SrgM3-E5xqU",
                                    "start": 77,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/company/unshackled/",
                                    "start": 89,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/company/spark-of-ages-podcast/",
                                    "start": 116,
                                    "length": 21
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAsen9wBl2mZ_l4Xn8zVMyfkEblzTT5dQCs",
                                    "start": 176,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_five-months-ago-we-sat-down-with-rustam-activity-7467651461653569537-lEiJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7467651461653569537",
                            "attachments": [
                                {
                                    "id": "D5610AQFk-aGIq_p8ig",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFk-aGIq_p8ig/image-shrink_480/B56Z6JtapeGoAY-/0/1780426845380?e=1787724000&v=beta&t=Yj-DoT8L8-3n0XzeSGe5tHxYyuF4IH5fn0mEy_HQNDM",
                                    "size": {
                                        "width": 480,
                                        "height": 479
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
                            "parsed_datetime": "2026-06-02T19:00:50.713Z",
                            "reaction_counter": 15,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7466186624410849280",
                            "date": "2mo",
                            "text": "Every agency has an AI slide in their deck now. We have an AI operating model running our client work.\n\nThe difference?\n🔹 Your agency bolts AI onto old processes. \n🔹 We architected ours around it, strategy to execution.\n\nHuman direction. AI Agent execution. Real results.\n\nThe question isn't \"Does your agency use AI?\" It's \"Is your agency organized around it?\" We are. \n\n#Position2 #AgenticAI #GrowthMarketing #AIAgents #MarketingTransformation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_position2-agenticai-growthmarketing-activity-7466186624410849280-Dl2b?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7466186624410849280",
                            "attachments": [
                                {
                                    "id": "D5610AQFz6NBcB0O0eg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFz6NBcB0O0eg/image-shrink_480/B56Z505J9jIsAQ-/0/1780077600867?e=1787724000&v=beta&t=gaWUgCWyKQ8TECFzTeW615h_tRpkkuGcH0MtBYL4IjE",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-05-29T18:00:06.299Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7465439314349363200",
                            "date": "2mo",
                            "text": "In the latest episode of the Spark of Ages podcast, Eric Ries (author of The Lean Startup and the recent book, Incorruptible) dropped a chilling warning about the latest tech trend: Vibe Coding.\n\nWith advanced LLMs, anyone can prompt their way into complex software. But there is a massive catch. Eric argues that we are now creating software that no single human can fully understand or evaluate.\n\nThe danger?\n\n▪️The Dunning-Kruger Effect on Steroids: Preliminary data shows vibe coding makes teams less capable but vastly more overconfident.\n\n▪️The Training Distribution Trap: LLMs only know what they've been trained on. Disasters are black swan events—completely outside the training distribution.\n\n▪️The Looming Crisis: It is only a matter of time before an unchecked, vibe-coded bug hits a mission-critical application.\n\nThe Fix? Stop asking AI to make the artifact. Start asking AI to teach you how to make it. We must use AI to augment human wetware and learning loops, not outsource our capacity to understand.\n\nWant to hear Eric's full, contrarian take on the future of AI and governance? Listen to the full episode here: https://lnkd.in/gjv7Fitb\n\n#VibeCoding #GenerativeAI #LeanStartup #TechGovernance #SoftwareEngineering",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAg6_IBg1U6JFyF-a5pajsACu9FQhnuvmU",
                                    "start": 52,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_vibecoding-generativeai-leanstartup-activity-7465439314349363200-iCXT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7465439314349363200",
                            "attachments": [
                                {
                                    "id": "D5610AQE38cDzeKuwXw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE38cDzeKuwXw/image-shrink_480/B56Z5qRen0HwAQ-/0/1779899427778?e=1787724000&v=beta&t=zJcRYDhpCM8j3oz2Nx1CfsPSleS-ctaiIW9OjzeUvVI",
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
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-05-27T16:30:33.696Z",
                            "reaction_counter": 17,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7465107201704046592",
                            "date": "2mo",
                            "text": "Most corporate executives roll their eyes when you mention \"empathy\" or \"love\" as an operating framework. They write it off as soft, unmeasurable corporate buzzword bingo.\n\nThey're dead wrong.\n\nIn his upcoming book Incorruptible, Eric Ries highlights Devoted Health, one of the fastest-growing private health insurance companies in America. Their secret? Radical empathy is built into the structural ethos.\n\nThey instruct employees to literally visualize their own parents when serving members. Their customers don't call them service agents; they call them \"guardian angels.\"\n\nHere is the hard-nosed math behind why this works:\n\n▪️When customers view your team as guardian angels, churn drops to zero.\n\n▪️When you build absolute trust, you literally shrink your competitors' total available market by.\n\n▪️A predatory competitor or a private equity firm can try to undercut prices, but customers refuse to leave a company that genuinely protects them.\n\nEmpathy isn't a soft value to be discarded as you grow. It is a protective fortress against market disruption.\n\nCheck out the latest Spark of Ages episode to hear how founders can hardwire radical empathy into their organizational structure from day one. Listen to the episode here: https://lnkd.in/gYv3WiCb\n\n#CompanyCulture #CustomerSuccess #EmpathyInBusiness #StartupGrowth #Leadership",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAg6_IBg1U6JFyF-a5pajsACu9FQhnuvmU",
                                    "start": 230,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/company/devoted-health/",
                                    "start": 251,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_companyculture-customersuccess-empathyinbusiness-activity-7465107201704046592-PcvZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7465107201704046592",
                            "attachments": [
                                {
                                    "id": "D5610AQE0XcERYIZd2Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE0XcERYIZd2Q/image-shrink_480/B56Z5ljbR8GsAU-/0/1779820246355?e=1787724000&v=beta&t=1fvncIpo2-FXJDK7WzytsSQp2xM0SUxcop6YCk_DvXM",
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
                            "repost_counter": 0,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-05-26T18:30:51.871Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7463258105062080512",
                            "date": "2mo",
                            "text": "Is the \"SaaS-pocalypse\" actually happening, or are we just entering the industrial revolution of our time?\n\nIn this episode, we dive into how AI is revolutionizing vertical software and why enterprise buyers aren't slowing down.\n\n▪️No SaaS Downturn: Despite concerns, $2.5 billion in spend is currently on the table, and buyers are looking for ways to mechanize that spend rather than build their own products.\n\n▪️Legacy Challenges: Many industries still operate on products 30 to 40 years old, creating a massive opportunity for modernization.\n\n▪️AI as the Foundation: The next 2 to 3 years will focus on redefining data lanes, with AI serving as the foundation for this transformation.\n\nWe aren't seeing a retreat from software; we're seeing the beginning of a revolution.\n\nAnkur Srivastava Priya Ramachandran Flywl\n\nWatch the full episode: https://lnkd.in/gxwgRtMD\n\n#AI #SaaS #EnterpriseSoftware #Innovation #DigitalTransformation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAuvAsB77F9gtSYKdgVOSpCGXPmCXjUMwE",
                                    "start": 776,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABMPlcBVCnA2uLlU9lGL5ih5_YNJ9AJF-Q",
                                    "start": 793,
                                    "length": 18
                                },
                                {
                                    "url": "https://www.linkedin.com/company/flywl/",
                                    "start": 812,
                                    "length": 5
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_ai-saas-enterprisesoftware-activity-7463258105062080512-l837?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7463258104097431552",
                            "attachments": [
                                {
                                    "id": "D5610AQHeaahTt17iPA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHeaahTt17iPA/mp4-720p-30fp-crf28/B56Z5LRPjqIsBg-/0/1779379279132?e=1787724000&v=beta&t=Nf-NpjAEk2pJXsylpRuY2cQv6BALiFqLWSHMwwWJ4DQ",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-05-21T16:03:12.877Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7462611357994233856",
                            "date": "2mo",
                            "text": "One of the major themes discussed at the 2026 Growth Marketing Summit was the shift from AI supporting individual tasks to AI-native systems designed to manage execution across entire workflows.\n\nThe opportunity ahead is bigger than automation alone. It’s about building systems that coordinate context, execution, and continuous optimization at scale. Great perspective from Amit Pande on this evolution! \n\n#AgenticAI #AINative #ArtificialIntelligence #AITransformation #EnterpriseAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 376,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7462611358648274944",
                            "share_url": "https://www.linkedin.com/posts/position2_a-task-completed-is-not-the-same-as-the-workflow-activity-7462611358648274944-JpLx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7462611357994233856",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7462487314183671809",
                                "date": "2mo",
                                "text": "A task completed is not the same as the workflow completed\n\nWe discussed this at Position²'s Growth Marketing Summit. Its a HUGE mental model shift. The early \"AI copilot\" era anchored us to celebrate tasks: draft this, summarize that, clean this. Useful but bounded. Just like a dream of \"voice assistants\" Siri teased us with in 2011. Time to move beyond tired metaphors! \n\nThe Coworker era is different. It owns the workflow. It's the shift from \"can the AI do a short-term thing?\" to \"can a long-horizon workflow finish without me?\"\n\nShort clip 👇. I've also written about the shift from copilots to coworkers here:   https://lnkd.in/gStEaEty",
                                "author": {
                                    "id": "ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "name": "Amit Pande",
                                    "is_company": false,
                                    "public_identifier": "amitpande"
                                },
                                "parsed_datetime": "2026-05-19T13:00:22.011Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-05-19T21:13:16.360Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-05-19T21:13:16.516Z"
                        },
                        {
                            "id": "7462608097396568064",
                            "date": "2mo",
                            "text": "We're excited to see our VP of Global Operations & Strategy,  Sajjan Kanukolanu, PhD, featured as a speaker at AI Next Conference 2026.\n\nAs organizations move beyond AI experimentation, the focus is shifting toward building AI-native systems that can drive smarter operations, scalable execution, and measurable business impact. We're looking forward to Sajjan sharing perspectives on Agentic AI, operational transformation, and the future of intelligent business systems.\n\n#AINextConference #AgenticAI #ArtificialIntelligence #AITransformation #EnterpriseAI #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 62,
                                    "length": 22
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7462608097396568064",
                            "share_url": "https://www.linkedin.com/posts/position2_ainextconference-lasvegas2026-artificialintelligence-activity-7462608097396568064-0FCA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7462608097396568064",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7459865554405842956",
                                "date": "3mo",
                                "text": "Transforming Operations with AI-Native Innovation | Sajjan Kanukolanu, PhD at AINext Awards & Conference 2026\n\nThe future of business transformation is AI-native — and Dr. Sajjan Kanukolanu is helping lead the way. \nWe are excited to welcome Dr. Sajjan Kanukolanu, Vice President of Global Operations & Strategy at Position², as a featured speaker at AI Next Conference 2026 in Las Vegas.\n\nWith over 20 years of experience across product, technology, and services, Dr. Sajjan has been at the forefront of building intelligent operational ecosystems that combine strategy, automation, and AI-driven execution. At Position², he has successfully led the transformation of the company from a traditional services organization into an AI-native digital growth firm powered by advanced knowledge architecture, LLM orchestration, and production-grade AI agent systems.\n\nHis work is redefining how modern organizations scale operations, optimize delivery, improve client outcomes, and unlock new growth opportunities through agentic AI automation.\n\nAt AI Next Conference 2026, Dr. Sajjan will share valuable insights into:\n AI-native operational transformation\n Building scalable AI-powered systems\n LLM orchestration & enterprise AI adoption\n The future of intelligent business operations\n Driving ROI with automation and AI strategy\n\nPosition² continues to empower B2B, B2C, and B2SMB brands with innovative digital growth solutions, helping businesses maximize efficiency and accelerate growth in the AI era.\n\nAI Next Conference 2026 — Las Vegas, USA\n 21 May 2026\n\nJoin global innovators, technology leaders, and AI pioneers as we explore the next generation of artificial intelligence and enterprise transformation.\n\n#AINextConference #LasVegas2026 #ArtificialIntelligence #AIInnovation #AgenticAI #DigitalTransformation #Leadership #TechInnovation #LLM #EnterpriseAI #Automation #BusinessGrowth #Position2 #AIConference #FutureOfAI",
                                "author": {
                                    "id": null,
                                    "name": "AINext Awards & Conference",
                                    "is_company": true,
                                    "public_identifier": "ainext-conference"
                                },
                                "parsed_datetime": "2026-05-12T07:22:25.770Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-05-19T21:00:18.973Z",
                            "reaction_counter": 15,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-05-19T21:00:18.973Z"
                        },
                        {
                            "id": "7462607033863667712",
                            "date": "2mo",
                            "text": "Position² is excited to share that our VP of Global Operations & Strategy, Sajjan Kanukolanu, PhD, will be speaking at the AINext Awards & Conference on May 21 in Las Vegas.\n\nAs AI reshapes how companies operate and grow, the conversation is shifting from simply using AI tools to building AI-native systems that can scale execution, accelerate decision-making, and continuously improve outcomes.\n\nAt Position², Sajjan has helped lead that transformation by combining human expertise, AI Agents, orchestration systems, and proprietary marketing intelligence to reimagine how modern marketing organizations operate. AI-native transformation is no longer theoretical, it’s already reshaping how modern businesses operate.\n\nhttps://lnkd.in/gVhHc6DA \n\n#AINextConference #AgenticAI #ArtificialIntelligence #AITransformation #GrowthMarketing #AIMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 75,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/ainext-conference/",
                                    "start": 123,
                                    "length": 26
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_ainextconference-agenticai-artificialintelligence-activity-7462607033863667712-A1xN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7462607033863667712",
                            "attachments": [
                                {
                                    "id": "D5610AQG3c1UsuUSCKA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG3c1UsuUSCKA/image-shrink_480/B56Z5CBiTHHwAQ-/0/1779224159656?e=1787724000&v=beta&t=uuXlgEKzH9WMkXJfpgEiFXXtKq7JcjWIM-8-WjfrWS0",
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
                            "repost_counter": 4,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-05-19T20:56:05.407Z",
                            "reaction_counter": 49,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7462555791527690240",
                            "date": "2mo",
                            "text": "In our recent discussion, we dived into why the fundamental value of traditional software is being questioned and how the landscape is shifting. \n\nHere are the key takeaways:\n\n▪️It's Not Annihilation, It's Right-Sizing: This isn't the end of software; it's a correction of \"bad deals\" that have historically favored sellers over buyers.\n\n▪️The Empowered Buyer: Buyers are now armed with usage data and benchmarking tools. They are identifying price discrepancies and demanding adjustments to match true market value.\n\n▪️The Human Element in High-Stakes Renewals: While AI agents are increasingly becoming the \"buyers\" of the future, complex $10 million renewals still require human oversight to navigate intricate terms and conditions.\n\n▪️Marketplace Evolution: As enterprises transform how they purchase cloud software, meta-marketplaces must adapt to an environment where the \"user\" might soon be an autonomous AI agent.\n\nThe buyers deserve a fair shake, and the \"SaaS-Pocolypse\" is simply the market's way of ensuring they get one.\n\nAnkur Srivastava Priya Ramachandran Flywl\n\nWatch the full episode: https://lnkd.in/g4tthr-3\n\n#SaaS #CloudSoftware #MarketCorrection #AI",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAuvAsB77F9gtSYKdgVOSpCGXPmCXjUMwE",
                                    "start": 1036,
                                    "length": 16
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABMPlcBVCnA2uLlU9lGL5ih5_YNJ9AJF-Q",
                                    "start": 1053,
                                    "length": 18
                                },
                                {
                                    "url": "https://www.linkedin.com/company/flywl/",
                                    "start": 1072,
                                    "length": 5
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_saas-cloudsoftware-marketcorrection-activity-7462555791527690240-hy_k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7462555790449643522",
                            "attachments": [
                                {
                                    "id": "D5610AQGLW6QCUFXE-A",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGLW6QCUFXE-A/mp4-720p-30fp-crf28/B56Z5BSfkSIEBg-/0/1779211837315?e=1787724000&v=beta&t=D4JYqZevpQ6ctmFjztrTJ7IMuZF9XP-83iozG6FejNk",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "comment_counter": 3,
                            "parsed_datetime": "2026-05-19T17:32:28.282Z",
                            "reaction_counter": 16,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7460728146670309377",
                            "date": "3mo",
                            "text": "From \"Integration Tax\" to \"AI Tax.\"\n\nThe era of the 2-year, $2M implementation project is dying. Michael Ni shared a staggering example:\n\n* The Old Way: A $2M bid, 160 people, 2-year timeline.\n* The AI-Native Way: 1/10th the cost, 10 people, delivered in 3 months.\n\nThe result? A solution that continues to learn instead of a static piece of software that starts decaying the day it's finished.\n\nThe big shift for Service Providers: We are moving from \"Spec-Build-Implement\" to \"Initial Spec-Tune-Hone.\" Your value isn't in the labor hours; it's in building the learning loops that make the client's system smarter every day.\n\nIs your service model built for the \"SaaSpocalypse\" or the AI rebirth?\n\nWatch the full episode: https://bit.ly/4njX4gO\n\n#SaaS #Consulting #DigitalTransformation #Innovation #SparkOfAges",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8624252009498358151",
                                "url": "https://bit.ly/4njX4gO",
                                "title": "How AI is Actually Melting the Org Chart - Burnout, Context, Outcomes~ Spark of Ages Ep 63 - YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQF64YOjITteVQ/image-shrink_480/B56Z4nUuDEJ4AU-/0/1778776203752?e=1787724000&v=beta&t=HGkHSJtXNTceGCQN0mL2pqKICmnXGOoBWhKiKTThwGU",
                                "published_at": "2035-02-27T09:38:29.918Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABYVEBjuqG1HJw0dTExmPlU0USlRFh2zg",
                                    "start": 97,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_how-ai-is-actually-melting-the-org-chart-activity-7460728146670309377-Db0g?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7460728146670309377",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-05-14T16:30:03.792Z",
                            "reaction_counter": 10,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7460064716409950209",
                            "date": "3mo",
                            "text": "We’re excited to welcome Ashish A. to the Position² Advisory Board!\n\nAshish is a General Partner at Chamaeleon with 22+ years of experience as an operator, founder, and investor, and has been investing in AI/ML since 2017, long before it became mainstream.\n\nAs a Kauffman Fellow with deep connections across global venture ecosystems, Ashish brings a valuable perspective on AI, innovation, and what it takes to build enduring companies in rapidly evolving markets.\n\nAs Position² continues evolving, his insight and experience will help shape what’s next. Welcome, Ashish! 🙌\n\nhttps://bit.ly/4dDUW0a",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAEtMDEBZC7WipVR9F-J8vBahjjSLoHUAok",
                                    "start": 25,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_were-excited-to-welcome-ashish-a-to-the-activity-7460064716409950209-vz4f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7460064716409950209",
                            "attachments": [
                                {
                                    "id": "D5610AQHlPRn-V7N7JA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHlPRn-V7N7JA/image-shrink_480/B56Z4d5T2TJ0AQ-/0/1778618024131?e=1787724000&v=beta&t=XRglcLx6zJmIO15qT_u5BBozk0iv2EnBc1JKEko8LhE",
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
                            "comment_counter": 10,
                            "parsed_datetime": "2026-05-12T20:33:49.692Z",
                            "reaction_counter": 93,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7459988507667750913",
                            "date": "3mo",
                            "text": "LLMs have commoditized expertise. Now, experience is your only moat.\n\nMichael Ni shared a perspective that every executive needs to hear: \"The old playbooks are dead.\" In a world where an LLM can spit out a marketing plan or a Python script in seconds, \"knowing how to do the thing\" isn't the value-add anymore.\n\nThe shift:\n\n▪️From... Expertise: Following the playbook, pulling the data, writing the code.\n\n▪️To... Experience: Connecting the dots, asking the right questions, and knowing which outcome actually matters.\n\nAs Mike puts it: \"It's the experience that lets you connect the dots, which becomes valuable.\"\n\nIf your value is based on what you know, you're at risk. If your value is based on how you apply what you know to complex human and business contexts, you're indispensable.\n\nListen to the full episode: https://bit.ly/4tp1Hrl\n\n#CareerAdvice #AI #GenerativeAI #GTM #ProfessionalDevelopment",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7818693247372786706",
                                "url": "https://bit.ly/4tp1Hrl",
                                "title": "Episode 63 | Position²",
                                "author": "position2.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQEbS7nk9EUf9A/image-shrink_480/B56Z4c0BY0KoAQ-/0/1778599860220?e=1787724000&v=beta&t=zCAyhi2VZSnpvrwA62fgCpqqu86wWBFtp9Pdp9WSxiY",
                                "published_at": "2029-01-26T11:35:34.469Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABYVEBjuqG1HJw0dTExmPlU0USlRFh2zg",
                                    "start": 70,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_episode-63-position%C2%B2-activity-7459988507667750913-6i5j?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7459988507667750913",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-05-12T15:31:00.112Z",
                            "reaction_counter": 10,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7458206588051574784",
                            "date": "3mo",
                            "text": "Is \"Empathy\" a red herring in the AI era?\n\nWe're told that as AI takes over technical tasks, humans need to lean into \"soft skills.\" But Neil Shepherd argues that leaning solely on empathy is a trap. In 2026, AI agents are already proving to be better at unbiased performance feedback and conflict resolution than many human managers.\n\nSo, what is actually left for the leader?\nAmit Malhotra suggests a shift in mindset:\n\n- Treat agents like interns: Be a \"dictator\" to your AI agents—give clear, concise, and lawful orders focused on intent.\n\n- Be a \"human\" to your team: Use reclaimed time not for more \"decks,\" but for high-stakes psychological mediation and solving \"unsolvable\" human problems.\n\nLeadership in the age of AI isn't about being \"nice\"—it's about applying judgment with tacit information that a model simply doesn't have.\n\nCheck out the episode: https://bit.ly/4cQ7zVH\n\n#Management #SoftSkills #AIRevolution #LeadershipDevelopment",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7032028121929805786",
                                "url": "https://bit.ly/4cQ7zVH",
                                "title": "Episode 62 | Position²",
                                "author": "position2.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQFiskklTaYvhA/image-shrink_480/B56Z4DfYAvJ0AQ-/0/1778175017417?e=1787724000&v=beta&t=s4ESwYsIFNvGE2XmoJu2wkQVabDOnF5NiMWnVA2QpYU",
                                "published_at": "2023-02-16T16:49:13.032Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAM3QgB6AQaSfT5turGIisO7iFy7TX9Jy8",
                                    "start": 137,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_episode-62-position%C2%B2-activity-7458206588051574784-kUrU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7458206588051574784",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-05-07T17:30:17.369Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7457459111480283136",
                            "date": "3mo",
                            "text": "The \"Unlock of the Curious\": Why the tinkerers are winning the AI race. \n\nIn the latest #SparkOfAges episode, Amit M. and Neil Shepherd discuss a strange phenomenon: People who are sophisticated AI users in their personal lives (planning vacations) often have a \"mental block\" against using it at work.\n\nThe winners of the next five years aren't necessarily the ones with the most technical degrees—they're the 'tinkerers.'\n\nWhy does tinkering matter now?\n\n▪️The \"Individual Contributor++\": You aren't a \"doer\" anymore; you're an orchestrator of agents.\n\n▪️Reclaiming the 20%: AI takes care of the \"build systems\" and \"make-files,\" allowing experts to go back to what they love—solving the actual problem.\n\nAs Neil puts it, \"Don't chase what peer pressure brings you to, chase what's true to you.\"\n\nFull episode here: https://bit.ly/4tQLFb3\n\n#Innovation #Tinkerers #MarketingAutomation #GenerativeAI",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7032028121929805786",
                                "url": "https://bit.ly/4tQLFb3",
                                "title": "Episode 62 | Position²",
                                "author": "position2.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQHbNgn_5KhqNA/image-shrink_480/B56Z343jJpH4AU-/0/1777996805095?e=1787724000&v=beta&t=-HAb0EY_cwMfcVZFTPC3Flu9gVOcEWPWnIiQhEloFTc",
                                "published_at": "2023-02-16T16:49:13.032Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABQP8BAamWs55iaonTEHeo1foheZ9Fb3k",
                                    "start": 110,
                                    "length": 7
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAM3QgB6AQaSfT5turGIisO7iFy7TX9Jy8",
                                    "start": 122,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_episode-62-position%C2%B2-activity-7457459111480283136-E2Ow?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7457459111480283136",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-05-05T16:00:05.067Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7455662433169424384",
                            "date": "3mo",
                            "text": "Will AI agents replace the CMO by 2026?\n\nThe latest Spark of Ages podcast featured a \"hot take\" session with Nicole Siegal Fuselier and Randi Barshack, and their perspective on autonomous marketing was a much-needed reality check.\n\nThe prediction: AI will research, create, and deploy campaigns without humans.\nThe verdict: A hard \"No.\"\n\nWhy?\n\n▪️The \"Vanilla\" Trap: Randi warns that without human intervention, AI outputs tend to fall toward the middle. Great marketing requires taking risks and going to \"the edge\"—something AI isn't yet programmed to do.\n\n▪️The Fact-Check Gap: Nicole emphasizes that while AI removes the \"simple tasks,\" humans are still required for strategic sourcing and factual accuracy.\n\n▪️The \"Cute Robot\" Factor: In physical AI (like Dusty Robotics), storytelling is about humanity—packaging technology so it isn't threatening. You can't prompt \"human empathy\" into a vacuum.\n\nAI is the engine, but the \"spark\" still belongs to us.\n\nListen to the episode here: https://lnkd.in/gRFqGJ_T\n\n#GenerativeAI #FutureOfWork #MarketingAutomation #AIStrategy",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "9085680573213688047",
                                "url": "https://na2.hubs.ly/H0594CX0",
                                "title": "Episode 61 | Position²",
                                "author": "position2.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQGFh7hfn1C0-g/image-shrink_480/B56Z3fVeskKkAQ-/0/1777568443454?e=1787724000&v=beta&t=7jQeJc4Tu4ei8-HqU5ZOU1hDLR66pZwhi52xf4ec_Ks",
                                "published_at": "2038-08-23T16:50:52.436Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 109,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAoPuUBwH1gldUJEh8oDO2aS6HT6XJUiLk",
                                    "start": 136,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/dusty-robotics/",
                                    "start": 760,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_episode-61-position%C2%B2-activity-7455662433169424384-jqVc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7455662433169424384",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-04-30T17:00:43.577Z",
                            "reaction_counter": 10,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7455012645843161088",
                            "date": "3mo",
                            "text": "Let's kill this myth: AI agents don't replace great marketers, they elevate them. At Position², our AI Agents handle execution, reporting, monitoring, and campaign builds around the clock. That frees our team to do what they were meant to do: think, strategize, create, and lead.\n\nOne thing never changes: a human is always in the loop. Our team sets the strategy. They train agents on brand voice and client context. They review every output before it goes live. And when an agent falls short, they build a better one.\n\nAI handles what's repeatable. Our team owns what's irreplaceable. The question isn't whether AI agents are coming to marketing. They're already here. The question is whether your agency has them working together with your team.\n\n#AIEnabled #AIMarketing #AgenticAI #MarketingStrategy #AIAgents #FutureOfMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_if-ai-agents-do-the-work-what-does-our-activity-7455012645843161088-zvQG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7455012644991787008",
                            "attachments": [
                                {
                                    "id": "D5610AQHpVvwZJWcbOw",
                                    "url": "https://media.licdn.com/dms/document/media/v2/D5610AQHpVvwZJWcbOw/ads-document-pdf-analyzed/B56Z3WGeHoJ8AU-/0/1777413517199?e=1787724000&v=beta&t=bL6sxMvOyzoYGxpvQyocXQmfpfWmIZwWJRtEx5-LieA",
                                    "type": "file",
                                    "mimetype": "application/pdf",
                                    "file_name": "If AI Agents  do the work,  what does our team actually do",
                                    "file_size": 0,
                                    "unavailable": false,
                                    "url_expires_at": 1787724000000
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-04-28T21:58:42.206Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7454960373859811328",
                            "date": "3mo",
                            "text": "Great marketing is a Rube Goldberg machine.\n\nWe hosted an incredible roundtable on the Spark of Ages podcast with Nicole Siegal Fuselier (SambaNova) and Randi Barshack (Dusty Robotics). They hit on a tension every marketer feels: the struggle between \"the magic\" and \"the metrics.\"\n\nRandi put it perfectly: Great marketing in 2026 isn't about new attributes—it's about the efficiency of the \"What if?\"\n\nWe often try to pigeonhole marketers into \"Brand\" or \"Demand,\" but the truth is:\n\n- Creativity gains attention.\n- Process provides the rigor.\n- Efficiency (powered by AI) accelerates the experiment.\n\nIf you're waiting for a \"new\" set of rules, you're missing the point. The core remains storytelling; the superpower is how fast you can iterate on that story.\n\nThe takeaway? Don't be a vitamin. Be a painkiller. 💊\n\nWatch the full episode: https://lnkd.in/gwT7xrtU\n\n#MarketingStrategy #Branding #Storytelling #SparkOfAges #B2BMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7221263599899999782",
                                "url": "https://na2.hubs.ly/H0593Bf0",
                                "title": "- YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQH-VCY8o50qRg/image-shrink_480/B56Z3VW9fsIkAQ-/0/1777401059799?e=1787724000&v=beta&t=zoSLs7MM6Yr5eH07o5mTH21puLIFtcXJ0xEvH1KesfE",
                                "published_at": "2024-07-22T21:23:26.805Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 114,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sambanova/",
                                    "start": 138,
                                    "length": 9
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAoPuUBwH1gldUJEh8oDO2aS6HT6XJUiLk",
                                    "start": 153,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/company/dusty-robotics/",
                                    "start": 169,
                                    "length": 14
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_youtube-activity-7454960373859811328-vxS9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7454960373859811328",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-04-28T18:30:59.594Z",
                            "reaction_counter": 7,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7452748672959791106",
                            "date": "3mo",
                            "text": "Stop trying to manage AI governance, piece by piece.\n\nOren Michels of Barndoor AI\n\nThe current approach to AI security is broken because companies are forced to manage visibility and governance separately for every individual tool they implement.\n\nCurrent vendors push users into rigid, closed application structures, creating a management burden that most teams simply don't want to deal with. With the rapid launch of new AI models and applications, no business can afford to lock itself into a single ecosystem.\n\nThe future of AI governance is about centralized control that allows you to:\n\n- Pick the right tool for the job.\n- Implement granular permissions.\n- Manage everything in one place.\n\nStop letting your AI stack become a governance nightmare. It's time to enable innovation through trusted, centralized control.\n\nWatch the full episode: https://lnkd.in/gep4v8CD\n\n#AIGovernance #SparkOfAges #Leadership #Security #Innovation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAAEY4Bhb1CxQPl-LB2kNflB01FzZL5Se4",
                                    "start": 54,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/barndoor-ai/",
                                    "start": 70,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_aigovernance-sparkofages-leadership-activity-7452748672959791106-Gr4y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7452748671219105792",
                            "attachments": [
                                {
                                    "id": "D5610AQFO6PI-nQmSZA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFO6PI-nQmSZA/mp4-720p-30fp-crf28/B56Z216.JtHkBg-/0/1776873642989?e=1787724000&v=beta&t=K93j3oOYlAIWnYfExk1VIENOPiFLPSow9TZ4V3CSP0Y",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-04-22T16:02:29.008Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7452031593222668289",
                            "date": "3mo",
                            "text": "Why is Enterprise AI ROI lagging?\n\nThe conversation around AI often focuses on the \"chat\" experience, but for many businesses, the results haven't quite lived up to the hype.\n\nThe problem? \n\nMost AI products were designed as if we spent our entire day chatting with PhDs. That's not how the rest of us do our jobs. To truly see AI succeed in the enterprise, there are two missing pieces that must be addressed:\n\n- Connectivity: Early AI lacked the ability to integrate seamlessly into existing workflows.\n\n- Trust: Without a foundation of trust, enterprise adoption remains a significant challenge.\n\nThis gap is similar to the early days of API management, where technology was \"stuck in the data center\" and inaccessible to the people actually running the business.\n\nOren Michels of Barndoor AI\n\nWatch the full episode: https://bit.ly/4cGa6Az\n\n#AI #EnterpriseAI #Innovation #Connectivity #DigitalTrust #SparkOfAges",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAAEY4Bhb1CxQPl-LB2kNflB01FzZL5Se4",
                                    "start": 768,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/barndoor-ai/",
                                    "start": 784,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_ai-enterpriseai-innovation-activity-7452031593222668289-QUHu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7452031592342134784",
                            "attachments": [
                                {
                                    "id": "D5610AQENtHAqZBmsng",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQENtHAqZBmsng/mp4-720p-30fp-crf28/B56Z2ruyrzH4CA-/0/1776702679630?e=1787724000&v=beta&t=6y_bgnBueNvuc-2OULbchLaqFPtLz16TfRazlTIrvM8",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-04-20T16:33:03.876Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7450967061218111489",
                            "date": "4mo",
                            "poll": {
                                "id": "7450967060123398144",
                                "is_open": false,
                                "options": [
                                    {
                                        "id": "7450967060299317249",
                                        "win": false,
                                        "text": "AI Agents",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7450967060299296768",
                                        "win": true,
                                        "text": "Smaller teams + AI tools",
                                        "votes_count": 2
                                    },
                                    {
                                        "id": "7450967060299403264",
                                        "win": false,
                                        "text": "AI-driven personalization",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7450967060295139328",
                                        "win": false,
                                        "text": "Brand new GTM models",
                                        "votes_count": 1
                                    }
                                ],
                                "question": "What will redefine marketing teams in the next 3 years?\n",
                                "total_votes_count": 5
                            },
                            "text": "Marketing teams are being redesigned in real time.\nAI isn’t just another tool in the stack anymore. It’s changing how marketing teams are structured, how work gets executed, and what skills matter most.\n\nSome organizations are experimenting. Others are already rebuilding their operating model around it. The question isn’t whether marketing will change; it’s what will redefine it first. We're curious to hear where the community stands. \n\n#AIinMarketing #MarketingLeadership #CMO #GrowthMarketing #FutureOfMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_aiinmarketing-marketingleadership-cmo-activity-7450967061218111489-Coln?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7450967060450369536",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-04-17T18:02:59.668Z",
                            "reaction_counter": 2,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7450588989880786944",
                            "date": "4mo",
                            "text": "2026: The Year of the AI Ultimatum.\n\nOren Michels issued a bold prediction on the Spark of Ages podcast: Every C-Suite will soon face a binary choice:\n\nKeep AI read-only - miss out on massive ROI versus giving AI write access and face unprecedented risk.\n\nThe Solution? Purpose-built workflows with \"Human in the Loop\" (HITL) checkpoints.\n\nA personal use case from Oren: Use an agent to summarize 100+ customer follow-ups, check Salesforce opportunities, and draft emails—all in 90 minutes.\n\nThat's not just automation; it's scalability. \n\nHow is your organization giving agents the \"keys\" to the database? Please feel free to drop a comment below.\n\nhttps://apple.co/4tQYTnO\n\n#FutureOfWork #AIStrategy #BusinessGrowth #BarndoorAI #SparkOfAges",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "6961774418651955695",
                                "url": "https://apple.co/4tQYTnO",
                                "title": "From API Economy to Agent Economy/Oren Michaels - Barndoor AI, OpenClaw, Agentic Governance ~ Spark of Ages Ep 60",
                                "author": "podcasts.apple.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQH_ygmRUUCG0Q/image-shrink_480/B56Z2XPNdDHkAQ-/0/1776358840551?e=1787724000&v=beta&t=JA3Slz_em39AbuTlRpuqJbV0MQB_4LYoXj3f000wPDw",
                                "published_at": "2022-08-06T20:06:04.920Z"
                            },
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_from-api-economy-to-agent-economyoren-michaels-activity-7450588989880786944-utgH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7450588989880786944",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-04-16T17:00:40.437Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7450307051681128448",
                            "date": "4mo",
                            "text": "We spent 3 days in Park City with 30 Marketing Leaders.\n\nNo fluff. No surface-level trends. Just honest conversations about what’s actually changing.\n\nThe takeaway: the companies pulling ahead aren’t doing more, they’re pairing AI with human expertise and moving beyond the old model.\n\nSwipe to see what we learned. → \n#GrowthMarketingSummit2026 #GTM  #RevOps  #AIinMarketing #B2BMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_whats-changing-in-growth-marketing-in-2026-activity-7450307051681128448-DGn7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7450307049097428992",
                            "attachments": [
                                {
                                    "id": "D5610AQFatDWFejAMHg",
                                    "url": "https://media.licdn.com/dms/document/media/v2/D5610AQFatDWFejAMHg/ads-document-pdf-analyzed/B56Z2TOwYOIYAQ-/0/1776291615678?e=1787724000&v=beta&t=nGx80gfBKrdda5cwF1aGjeoI0KzHrb9E7h2QFOvuIQ4",
                                    "type": "file",
                                    "mimetype": "application/pdf",
                                    "file_name": "What’s changing in Growth Marketing  in 2026",
                                    "file_size": 0,
                                    "unavailable": false,
                                    "url_expires_at": 1787724000000
                                }
                            ],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-04-15T22:20:21.132Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7449894468868280320",
                            "date": "4mo",
                            "text": "Why Enterprise AI ROI is failing (and how to fix it).\n\nAccording to Oren Michels, founder of Barndoor AI, most enterprises are stuck in \"Glorified Enterprise Search\" mode.\n\nThe problem? The Trust Gap. When companies don't trust their security controls, they water down AI use cases until they are \"safe\"—meaning they stay in read-only mode.\n\nThe Insight: \"If they're not allowed to write anything, they can't do anything terribly useful.\"\n\nTo unlock true ROI, we have to move from:\n1. Who are you? (Identity-based access)\n2. What are you trying to do? (Context & intent-based governance)\n\nThe future of the enterprise isn't just chatting with a PDF; it's giving agents \"write access\" to move needles, manage workflows, and execute tasks—all within a programmatic control plane.\n\nWatch the full episode: https://bit.ly/4sSJaUp\n\n#EnterpriseAI #GenerativeAI #ROI #TechLeadership #SparkOfAges",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7084613023481597927",
                                "url": "https://bit.ly/4sSJaUp",
                                "title": "From API Economy to Agent Economy - Barndoor AI, OpenClaw, Agentic Governance ~ Spark of Ages Ep 60 - YouTube",
                                "author": "youtube.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQGbsuzcnbNWyA/image-shrink_480/B56Z2NXjCzKQAQ-/0/1776193253800?e=1787724000&v=beta&t=227fAIferQm-L2n-EpLtvWo4E1UoFKKb5UZWJGwRGI8",
                                "published_at": "2023-07-11T19:22:50.542Z"
                            },
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAAEY4Bhb1CxQPl-LB2kNflB01FzZL5Se4",
                                    "start": 68,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/company/barndoor-ai/",
                                    "start": 93,
                                    "length": 11
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_from-api-economy-to-agent-economy-barndoor-activity-7449894468868280320-49-y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7449894468868280320",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-04-14T19:00:53.724Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7448044654299754497",
                            "date": "4mo",
                            "text": "Is it an apocalypse, or just a long-overdue right-sizing? \n\nWe just wrapped an incredible roundtable on the Spark of Ages podcast with Ankur Srivastava of Flywheel and Priya Ramachandran of Foster Ventures, and one word kept coming up: #SaaSpocalypse.\n\nBut here's the twist—it's not about software dying. It's about the \"wild west\" of AI costs finally meeting a savvier, more empathetic procurement process.\n\nKey takeaways from the session:\n\n▪️The FinOps Paradox: Traditional practices are failing because AI \"inference costs\" are volatile. We're moving from static licensing to a world of \"token-metered economics.\"\n▪️The FUID Solution: Ankur shared how Flywheel is cleaning up \"F-dubbed\" data (yes, he said it!) with their Universal ID to make cloud buying actually transactable.\n▪️The Human Element: Despite the rise of \"agentic buying,\" Priya reminded us that brand affinity and empathy can't be automated. People still buy from people.\n\nThe industrial revolution of our time is here, and it's being built on better data and better relationships.\n\nCatch the full episode to hear Ankur and Priya battle it out over Indian food history in our \"Spice Protocol\" game! 🌶️🌶️🌶️(Link in comments)\n\n#SaaS #CloudMarketplace #AI #VentureCapital #FinOps",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_saaspocalypse-saas-cloudmarketplace-activity-7448044654299754497-74oI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7448044654299754497",
                            "attachments": [
                                {
                                    "id": "D5610AQE9Nn4J8oYT0A",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE9Nn4J8oYT0A/image-shrink_480/B56Z1zFITFIUAQ-/0/1775752218097?e=1787724000&v=beta&t=6mI7ZjHyhGEsgM3W0pEn5f44RDRYaEMa9G3B_98Qp5k",
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-04-09T16:30:23.563Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7447689855029051392",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit #SparkOfAges\n\nJust over two weeks ago, the Spark of Ages podcast was at Position²'s Growth Marketing Summit in Park City, UT.\n\nWe've got three great episodes coming up in the next few weeks. Subscribe to our mailing list so you don't miss an episode drop: https://bit.ly/48kxCBC\n\n#B2B #Marketing #Podcast",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 95,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-sparkofages-b2b-activity-7447689855029051392-d8q5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7447689855029051392",
                            "attachments": [
                                {
                                    "id": "D5610AQFAguaVHqn2Dw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFAguaVHqn2Dw/image-shrink_480/B56Z1uCcV1JgAQ-/0/1775667628129?e=1787724000&v=beta&t=SLR22D8PrbUfOm8arRHn46ZV4_2ZIu7wp4wZ6BiXSos",
                                    "size": {
                                        "width": 480,
                                        "height": 478
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
                            "comment_counter": 3,
                            "parsed_datetime": "2026-04-08T17:00:32.825Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7446989462989025280",
                            "date": "4mo",
                            "text": "Saju was truly a special part of Position², not only an incredible creative talent, but also a dear friend to so many of us. Over his many years with us, he made a lasting impact not only through his work but through the energy, humor, and kindness he brought into every interaction. He had a unique ability to inspire those around him while always remaining humble and eager to learn. He will be deeply missed by all of us. Our thoughts are with his family, and we will continue to stand by them in every way we can.",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7446989463618035713",
                            "share_url": "https://www.linkedin.com/posts/position2_it-is-with-a-heavy-heart-to-inform-you-that-activity-7446989463618035713-89hS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7446989462989025280",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7446934140366512128",
                                "date": "4mo",
                                "text": "It is with a heavy heart to inform you that Saju, our beloved Art Director & VFX Lead, passed away Sunday night due to cardiac arrest at the young age of 45.\n\nThe news was shocking and completely unexpected. At the same time, it was heartwarming to see so many current and former colleagues rush to the hospital to pay their respects and see his body. Saju was always a playful and positive presence. Everyone loved him. He always made me laugh, especially when we were playing his version of volleyball or joking around about whether his wife was still with him.\n\nI enjoyed working with him on so many creative projects over his 18 years at Position². He was an artist & always had unique ways of showcasing our clients. saju was always on top of the latest technologies and visual trends while remaining humble and eager to learn.\n\nSaju leaves behind Pravina, his loving wife of 14 years, Rishabh (son - 12 years), and Ninav (son - 8 months). We will support them in every possible way.\n\nSaju was returning from Kerala after spending time with his family. He with friends the entire time. They tried to save him and did as much as possible to get him to the hospital. He passed away as he got to the elevator.\n\nWe will have a remembrance event at the office Tuesday (tomorrow) at 4:30 pm in the auditorium. If you are in the Bangalore area and would like to attend, please DM Seetha, Mohan, or me.",
                                "author": {
                                    "id": "ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "name": "Rajiv Parikh",
                                    "is_company": false,
                                    "public_identifier": "rajivparikh"
                                },
                                "parsed_datetime": "2026-04-06T14:57:36.409Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-04-06T18:37:26.350Z",
                            "reaction_counter": 40,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-04-06T18:37:26.500Z"
                        },
                        {
                            "id": "7445895143460843521",
                            "date": "4mo",
                            "poll": {
                                "id": "7445895141942517760",
                                "is_open": false,
                                "options": [
                                    {
                                        "id": "7445895142097694721",
                                        "win": false,
                                        "text": "Disconnected teams",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7445895142097641473",
                                        "win": true,
                                        "text": "Poor data visibility",
                                        "votes_count": 2
                                    },
                                    {
                                        "id": "7445895142118469632",
                                        "win": false,
                                        "text": "Low-quality pipeline",
                                        "votes_count": 0
                                    },
                                    {
                                        "id": "7445895142097551361",
                                        "win": false,
                                        "text": "Too many tools",
                                        "votes_count": 0
                                    }
                                ],
                                "question": "What’s the biggest blocker to scaling your GTM right now?\n",
                                "total_votes_count": 3
                            },
                            "text": "Most B2B teams aren’t struggling because of effort. They’re struggling because their GTM engine is wired wrong.\n\nMarketing, Sales, and Client Management are still operating in silos, and that’s where revenue gets lost. In Brijesh Nambiar's latest breakdown, we unpack how AI-driven RevOps is helping teams move from disconnected functions to a single, compounding revenue system. \n\nhttps://bit.ly/47oUwrk",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABijIQBh8l6QXDsZDD6iZiC6lE0H5CCAJM",
                                    "start": 222,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_most-b2b-teams-arent-struggling-because-activity-7445895143460843521-ymkk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7445895142261092352",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-04-03T18:09:00.243Z",
                            "reaction_counter": 4,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7445169390896988160",
                            "date": "4mo",
                            "text": "Most B2B revenue teams aren’t underperforming because of effort. They’re underperforming because their GTM engine is wired wrong.\n\nMarketing, Sales, and Client Management operate in silos. Handoffs break. Context gets lost. Revenue leaks. AI-driven RevOps changes that. It connects teams, unifies data, and turns every improvement into a compounding advantage across the entire funnel.\n\n→ Read our team member, Brijesh Nambiar's take on how to rewire your GTM engine for predictable growth: https://bit.ly/4rXvhni \n\n#RevOps #B2BMarketing #AIinMarketing #GTMStrategy #RevenueGrowth #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABijIQBh8l6QXDsZDD6iZiC6lE0H5CCAJM",
                                    "start": 411,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_revops-b2bmarketing-aiinmarketing-activity-7445169390896988160-_IAr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7445169390896988160",
                            "attachments": [
                                {
                                    "id": "D5610AQEPcu4QX8V3PA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEPcu4QX8V3PA/image-shrink_480/B56Z1KOF_KKQAQ-/0/1775066702195?e=1787724000&v=beta&t=rrz7xbA9zuGYtinLDdd5gKaF_5FTcExSh9YmTdjNEe0",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-04-01T18:05:07.348Z",
                            "reaction_counter": 21,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7444821853841539072",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nHere's another behind-the-scenes video of Chef Fernando and his team on Day 1 of our summit.\n\nWant to learn more about the summit? Here's the link: https://lnkd.in/gspnCqVc",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-activity-7444821853841539072-Vkji?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7444821852960518145",
                            "attachments": [
                                {
                                    "id": "D5610AQHV7ICSY8J-9g",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHV7ICSY8J-9g/mp4-720p-30fp-crf28/B56Z1FRknZKQCE-/0/1774983763668?e=1787724000&v=beta&t=gE-dvqkPEwYgcG06AeVoOUd3ZKuXxustY42DzJkrLKA",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-03-31T19:04:08.057Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7444799273613033472",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nWe just wrapped up our 2026 Growth Marketing Summit.\n\nOur team wanted to share a behind-the-scenes video of our first Chef's dinner with Chef Fernando and his team. Chef Fernando kicked us off on Wednesday, the 25th.\n\nWant to learn more about the summit? Here's the link: https://bit.ly/48mg3RF",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-activity-7444799273613033472-o2jS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7444799272602218496",
                            "attachments": [
                                {
                                    "id": "D5610AQELdL0urN19Aw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQELdL0urN19Aw/mp4-720p-30fp-crf28/B56Z1E9CQsJsCE-/0/1774978389403?e=1787724000&v=beta&t=eFcMTOWzAdPaPBEKznahYDlyaHaHRu9r4OVgi9gc3A4",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "comment_counter": 3,
                            "parsed_datetime": "2026-03-31T17:34:24.511Z",
                            "reaction_counter": 22,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7444417298787905536",
                            "date": "4mo",
                            "text": "We couldn’t have had our Growth Marketing Summit without the help of you all!",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7444417298787905536",
                            "share_url": "https://www.linkedin.com/posts/position2_eventmarketing-activity-7444417298787905536-vAHG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7444417298787905536",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7443400214155284481",
                                "date": "4mo",
                                "text": "In case y'all didn't know, Riya Talati Bhuta  and I are hosting Position²'s Growth Marketing Summit this week.\n\nI can't be prouder to work beside her. I admire her commitment, energy and dedication to do whatever it takes to center the attendees in this event ... AND doing it with a smile. Love ya girl 💜!\n\n#EventMarketing",
                                "author": {
                                    "id": "ACoAADCQUE8BgwoB5Wn9bn5UnEnms_grFtpd4z0",
                                    "name": "Taryn Talley",
                                    "is_company": false,
                                    "public_identifier": "taryn-talley1"
                                },
                                "parsed_datetime": "2026-03-27T20:55:02.743Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-30T16:16:34.616Z",
                            "reaction_counter": 5,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-03-30T16:16:34.616Z"
                        },
                        {
                            "id": "7444416726676705280",
                            "date": "4mo",
                            "text": "Thank you for joining us, Michael Ni!",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABYVEBjuqG1HJw0dTExmPlU0USlRFh2zg",
                                    "start": 26,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7444416727486226433",
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-courageousmarketing-activity-7444416727486226433-Exdt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7444416726676705280",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7444117701398097920",
                                "date": "4mo",
                                "text": "Huge thanks to Rajiv Parikh and the Position² team for hosting a tremendous group of GTM leaders at the #GrowthMarketingSummit\n\nOne of the best parts of events like this: \nThe conversations, ideas, and debates you don’t get anywhere else\n\nAtop the panels and presentations, a few highlights:\n• Talking with Udi Ledergor about his book #CourageousMarketing, and how Gong is driving the GTM game by turning conversational trace data into core GTM insight and an AI driver \n• Sitting down with Jon Miller to catch up on his \"gumball machine\" analogy of GTM structural randomness. Let's stop optimizing inputs (campaigns) and start optimizing journey decision paths (buyer + seller interactions).\n• Touching on what are the defendable vendor moats with David Yakobovitch discussing how winners build around proprietary data + usage loops. Learning is continuous and cumulative... a point not missed by boards #LearningCurve\n• Connecting on personal branding with Kanishka Roy and Amit Pande, reminding us all about deliberate authenticity and connection.\n• Many more conversations with operators across marketing, RevOps, and data that seemed to center (maybe it's a me thing) on the same question: how do we turn all this data into better GTM and engagement decisions?\n\n... and had a great time unpacking some of the above ideas with Rajiv Parikh as we recorded his latest #SparkOfAges podcast touching on, of course, topics like the shift from campaigns → connected data of your customer, content and enterprise → GTM optimization, and the rise of AI-native service providers to support that shift.\n\nGrateful for the time, the ideas, and the network.\n(And yes ... sharing a few pics and moments from the event below 👇)\n\nThank you Position² and assembled GTM leaders\nRajiv Parikh Sanjiv Parikh Riya Talati Bhuta Taryn T. Anjai \"AJ\" Gandhi Neil Shepherd Sumeet Jain Eric Nalbone Nancy Aviña Sanjeev Dhanaraj Vamshi Sriperumbudur Sajjan Kanukolanu, PhD",
                                "author": {
                                    "id": "ACoAAAABYVEBjuqG1HJw0dTExmPlU0USlRFh2zg",
                                    "name": "Michael Ni",
                                    "is_company": false,
                                    "public_identifier": "michaelni"
                                },
                                "parsed_datetime": "2026-03-29T20:26:05.032Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-30T16:14:18.214Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-03-30T16:14:18.407Z"
                        },
                        {
                            "id": "7444416252518948864",
                            "date": "4mo",
                            "text": "We enjoyed having you, Udi Ledergor. Thank you for joining us and for your insightful session!",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWhFsBmKKb6ClLc7Hx_n0K7CE-ABfGDsg",
                                    "start": 23,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": true,
                            "repost_id": "7444416253286404096",
                            "share_url": "https://www.linkedin.com/posts/position2_p2growthmarketingsummit2026-activity-7444416253286404096-avQu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7444416252518948864",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_content": {
                                "id": "7444382949019652096",
                                "date": "4mo",
                                "text": "What an inspiring weekend at Position²'s #P2GrowthMarketingSummit2026!\n\nMade lots of new friends and caught up with old ones.\n\nWe discussed how everyone is figuring out how to deal with AI to drive growth and the increased importance of GTM Alignment and how AI can help, which I led a session on.\n\nThank you, Rajiv Parikh, for getting us all together.",
                                "author": {
                                    "id": "ACoAAAAWhFsBmKKb6ClLc7Hx_n0K7CE-ABfGDsg",
                                    "name": "Udi Ledergor",
                                    "is_company": false,
                                    "public_identifier": "udiledergor"
                                },
                                "parsed_datetime": "2026-03-30T14:00:04.993Z"
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-30T16:12:25.166Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-03-30T16:12:25.349Z"
                        },
                        {
                            "id": "7444399317559291904",
                            "date": "4mo",
                            "text": "What happens when you get 30 marketing leaders together, fully candid? That’s where the real insights come out.\n\nThis is what the Growth Marketing Summit is all about. We’re grateful for every conversation, perspective, and challenge to the status quo. \n\n#P2GrowthMarketingSummit2026 #GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_p2growthmarketingsummit2026-growthmarketing-activity-7444399317559291904-nmnV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7444399316808474624",
                            "attachments": [
                                {
                                    "id": "D5610AQGz4dJ-Jqnn8Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGz4dJ-Jqnn8Q/image-shrink_480/B56Z0_Rtf7H8AQ-/0/1774883101446?e=1787724000&v=beta&t=cyH0uU6eTKhzYlwIViBySTEVs3m-dcowMovmehm7Srw",
                                    "size": {
                                        "width": 480,
                                        "height": 251
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFUpGqikp1xkw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFUpGqikp1xkw/image-shrink_480/B56Z0_Rty4K0AQ-/0/1774883103041?e=1787724000&v=beta&t=FkoIvUlI6vrFA2amb4vLaZ-OFph547O3p888fz3J_YI",
                                    "size": {
                                        "width": 480,
                                        "height": 251
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
                            "comment_counter": 6,
                            "parsed_datetime": "2026-03-30T15:05:07.557Z",
                            "reaction_counter": 56,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7443669626665803776",
                            "date": "4mo",
                            "text": "Our final day at our Growth Marketing Summit is wrapped! We closed out a packed day of conversations with 30 marketing leaders, starting with Sumeet Jain’s perspective on the 2026 macroeconomic outlook and what it means for growth.\n\nWe then heard from a panel featuring Tina Stewart, Sanjiv Parikh, and Vamshi Sriperumbudur, who shared what the marketing team of the future really looks like and how roles are evolving alongside AI.\n\nTo close, Kanishka Roy spoke about cultivating a personal brand that not only stands out, but actually drives real impact.\n\nWe’re grateful for the conversations and the ideas that will continue to shape what we build next in the future of marketing.\n\n#P2GrowthMarketingSummit2026 #GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAACVvMBb71RAUqniiUcbq0OkujXIMpt9Jo",
                                    "start": 270,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAFGzpoB_C7tein-5HqANyqrU-KZj5VIMMY",
                                    "start": 284,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAOHpcBMAFqBKv1j6eYKHCcm6xl_f5Rwdw",
                                    "start": 303,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAV0-zkB4iO4y2fkmmm6wZbG_tOXkRqBU-w",
                                    "start": 444,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_p2growthmarketingsummit2026-growthmarketing-activity-7443669626665803776-RHds?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7443669625793511424",
                            "attachments": [
                                {
                                    "id": "D5610AQGJPnMXrJZXGw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGJPnMXrJZXGw/image-shrink_480/B56Z006DR6G8AQ-/0/1774709127090?e=1787724000&v=beta&t=OOoudd6uw3pQWsfD6-7gk-FBZ5G9oG0U5a2Kkl2Viao",
                                    "size": {
                                        "width": 480,
                                        "height": 353
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQG6FV2MVdMm-w",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG6FV2MVdMm-w/image-shrink_480/B56Z006DjGJkAQ-/0/1774709128229?e=1787724000&v=beta&t=k9tsUHLKO5vXHGSpsHtBkt6TWzOX3PvQqE4rSDJwi7Y",
                                    "size": {
                                        "width": 480,
                                        "height": 602
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFSUbqPQ6gECA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFSUbqPQ6gECA/image-shrink_480/B56Z006D0fH8AQ-/0/1774709129294?e=1787724000&v=beta&t=Vo6c1N4W82u0Wmxip5wAM63NHfkTrvH8TnwKDXgPgB4",
                                    "size": {
                                        "width": 480,
                                        "height": 650
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQE7SdsbsEbzoQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE7SdsbsEbzoQ/image-shrink_480/B56Z006EGrH8AQ-/0/1774709130353?e=1787724000&v=beta&t=yOONH34qDZRckcPIKOHXNIL_yDoxQhJcH1zf076NLwU",
                                    "size": {
                                        "width": 480,
                                        "height": 641
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
                            "comment_counter": 4,
                            "parsed_datetime": "2026-03-28T14:45:35.691Z",
                            "reaction_counter": 34,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7443339841762648065",
                            "date": "4mo",
                            "text": "Day 2 centered around one question: how do we make the human world machine-readable?\n\nVamshi Sriperumbudur, Randi Barshack, and Alex Gammelgard showed that this starts with moving beyond ICPs toward micro-segmentation and ideal partner profiles, where ABM isn’t something you buy but something you do by creating relevance that shows up in real behavior.\n\nEric Nalbone and Nicole Siegal Fuselier made it clear that authority still matters but is being redefined; where SEO isn’t dead but evolving into a model where AEO and SEO work together and visibility comes from understanding intent and becoming the source that gets cited.\n\nSajjan Kanukolanu, PhD and Rajesh Muthyalu closed by bringing it back to the moat, showing that when everyone has access to the same tools, the advantage isn’t execution but knowledge structured into systems that learn, reason, and improve over time.\n\nThe companies that win won’t just market better, they’ll build systems that understand their buyers before the buyer even starts searching.\n\nStay tuned as we dive into our final day. 👇\n\n#P2GrowthMarketingSummit2026 #GrowthMarketing #DigitalTransformation #GrowthMarketing #AgenticAI #AIMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAOHpcBMAFqBKv1j6eYKHCcm6xl_f5Rwdw",
                                    "start": 86,
                                    "length": 20
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAoPuUBwH1gldUJEh8oDO2aS6HT6XJUiLk",
                                    "start": 108,
                                    "length": 14
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADbgH0BrtkDo1si2gXF1zYOsmsmqKmlce4",
                                    "start": 128,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAP387QBEhSLcoQoza2qsTJwlqmZ7Q9tAIE",
                                    "start": 356,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 373,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 631,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADW1VwB5r4s70LtLHnsY32j0gMXl3eFM3A",
                                    "start": 658,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_p2growthmarketingsummit2026-growthmarketing-activity-7443339841762648065-2hX_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7443339840760311808",
                            "attachments": [
                                {
                                    "id": "D5610AQFb-IRR2-JIKQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFb-IRR2-JIKQ/image-shrink_480/B56Z0wOHW9IMAQ-/0/1774630500346?e=1787724000&v=beta&t=kop3DZeHraOQOyK2AY0McX2SBEGvSRKai0-SwHZANVA",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQGP8UTGJemCCA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGP8UTGJemCCA/image-shrink_480/B56Z0wOHnFKIAQ-/0/1774630501433?e=1787724000&v=beta&t=8vTRP06R5gN3fEQ_o-rMlVivWqqqnDvqh0MhXt5YSLg",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQGhgt90U7qTcg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGhgt90U7qTcg/image-shrink_480/B56Z0wOH2bKwAQ-/0/1774630502893?e=1787724000&v=beta&t=kuOeP_pXxqfY84ggPB_CGtGCMiXaLt5fS-Mo4o8elRI",
                                    "size": {
                                        "width": 480,
                                        "height": 640
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQEDXd9YBsPQLg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEDXd9YBsPQLg/image-shrink_480/B56Z0wOIDkHkAU-/0/1774630503267?e=1787724000&v=beta&t=MKD0h5x_yFrxNs5MEj_mEf0wpZ9VlkHKoRZL_YSAsFw",
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
                            "repost_counter": 1,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-27T16:55:08.843Z",
                            "reaction_counter": 27,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7443326053013491712",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nWe've added a new closing session for Day 3 of our Summit. Kanishka Roy will lead our attendees in building their personal brand. Kanishka is a prominent figure in the tech-finance world who has successfully built his own personal brand and will be sharing his approach.\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#PersonalBrand #BuildYourBrand",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAV0-zkB4iO4y2fkmmm6wZbG_tOXkRqBU-w",
                                    "start": 83,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-personalbrand-buildyourbrand-activity-7443326053013491712-iRTW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7443326053013491712",
                            "attachments": [
                                {
                                    "id": "D5610AQHzvW0wTtaNig",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHzvW0wTtaNig/image-shrink_480/B56Z0wBlnLHwAQ-/0/1774627216095?e=1787724000&v=beta&t=sJ-VTr2fi77ds7bSL44fakK1Lc6ZCMbXEu9XwpNmGLs",
                                    "size": {
                                        "width": 480,
                                        "height": 477
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
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-27T16:00:21.349Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7443079289517879296",
                            "date": "4mo",
                            "text": "Our CEO, Rajiv Parikh, opened Day 2 of the Growth Marketing Summit with an idea worth sitting with: the funnel didn't break, it became an inference loop.\n\nMarketing has reinvented itself three times. The broadcast era rewarded creative craft, the digital stack era rewarded whoever could connect the data, but the AI-native era rewards something different entirely: context and inference. Most companies aren't ready for that shift.\n\nJensen Huang didn't tell companies to buy AI software. He told them to restructure their operating model around AI. The same restructuring is now hitting marketing, whether you design it or not.\n\nThat means rethinking everything. When revenue is tied to headcount, it doesn’t scale in an AI-native world. If your best people are stuck executing, their knowledge doesn’t scale, and neither does your organization. Execution-first structures don't compound.\n\nThe advantage now belongs to companies that build a context layer, systems that remember, reason, and improve with every interaction. Not autonomous AI that drifts without guidance, but expert-guided intelligence that encodes what your team knows and compounds it over time.\n\nThe companies that win in 2028 won't have better campaigns. They'll be positioned as the answer before the buyer even starts searching. That's the shift from marketing to growth intelligence.\n\nMore from the Summit soon!",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 9,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_our-ceo-rajiv-parikh-opened-day-2-of-the-activity-7443079289517879296-Z8cP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7443079289517879296",
                            "attachments": [
                                {
                                    "id": "D4E10AQH2EC0O9HlD3A",
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQH2EC0O9HlD3A/image-shrink_480/B4EZ0shKD7HYAQ-/0/1774568383393?e=1787724000&v=beta&t=iXwzlNCA6p5ncidh1JgcyKoVZYy76P0HDMyArAtDPqg",
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
                            "repost_counter": 1,
                            "comment_counter": 4,
                            "parsed_datetime": "2026-03-26T23:39:48.347Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7443016837061259264",
                            "date": "4mo",
                            "text": "Day 1 at the Position²'s 4th Annual Marketing Summit made one thing clear: what worked in GTM before won’t be enough for what comes next.\n\nA few key takeaways from today’s sessions:\n→ From Anjai \"AJ\" Gandhi - State of GTM: A deep dive into where GTM systems are underperforming today, across seller productivity, inefficient coverage, and misalignment with modern buying behavior.\n→ From Jon Miller - GTM Transformation: The MQL model is breaking. B2B buying is non-linear, group-driven, and mostly anonymous, shifting the focus toward buying group engagement, brand, and pipeline impact.\n→ From Sajjan Kanukolanu, PhD & Amit Pande - Agentic AI - From Copilot to Co-worker: AI is shifting from “copilot” to “co-worker”, moving from answering questions to owning workflows and being measured against real business outcomes.\n\nWe wrapped the day with great conversations over dinner; we're looking forward to Day 2!\n\n#P2GrowthMarketingSummit2026 #GTM #AIMarketing #GrowthMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAADFkBKQ3STctM5UjT1nx2sGteP5I13hc",
                                    "start": 189,
                                    "length": 17
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDmQBnZJCpDRvg1Z6rwkxxngNbm6WrIU",
                                    "start": 388,
                                    "length": 10
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 596,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 621,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_p2growthmarketingsummit2026-gtm-aimarketing-activity-7443016837061259264-WXMu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7443016834049720320",
                            "attachments": [
                                {
                                    "id": "D5610AQG3eXVNrHuLNg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG3eXVNrHuLNg/image-shrink_480/B56Z0roUyIK4AQ-/0/1774553485079?e=1787724000&v=beta&t=u80Au3XT51d3Z5iHJs8PDk6gXE2lP5A2NO5JC5Jn7v0",
                                    "size": {
                                        "width": 480,
                                        "height": 646
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQGKLtAudGrECQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGKLtAudGrECQ/image-shrink_480/B56Z0roU.wK0AQ-/0/1774553486014?e=1787724000&v=beta&t=ndBEMp2Mudg_VvlfBjUXm6G07b6THYsy9LPbv-KrxLA",
                                    "size": {
                                        "width": 480,
                                        "height": 354
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQF5jgjXzMEeGQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQF5jgjXzMEeGQ/image-shrink_480/B56Z0roVQAKEAQ-/0/1774553487273?e=1787724000&v=beta&t=89OdDxOOkHOSkG3uu2WUt1CDzDsvCtNbVEWMICtDzt0",
                                    "size": {
                                        "width": 480,
                                        "height": 595
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFe5IQT_rsyBA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFe5IQT_rsyBA/image-shrink_480/B56Z0roVrFGsAQ-/0/1774553488793?e=1787724000&v=beta&t=FmL1TpCU2gqR3Oe3M7GH5Gyr_1oSZ2kAlVBlR_ULr_U",
                                    "size": {
                                        "width": 480,
                                        "height": 521
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFJzZaJsvPDVA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFJzZaJsvPDVA/image-shrink_480/B56Z0roV4iHwAQ-/0/1774553489934?e=1787724000&v=beta&t=tTjFnV6Grcw3r2TsvQIsqwLCjpsDjtPY6-b3oHFu538",
                                    "size": {
                                        "width": 480,
                                        "height": 761
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQGm4C8NSmanvw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGm4C8NSmanvw/image-shrink_480/B56Z0roWN6K4AQ-/0/1774553491284?e=1787724000&v=beta&t=JSXX8r74SLkFfEjpJWnayxg-z8EnRqxvx1HClgk-a1Q",
                                    "size": {
                                        "width": 480,
                                        "height": 647
                                    },
                                    "type": "img",
                                    "sticker": false,
                                    "unavailable": false
                                },
                                {
                                    "id": "D5610AQFy_xb1u3L-hA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFy_xb1u3L-hA/image-shrink_480/B56Z0roWdwKEAU-/0/1774553492144?e=1787724000&v=beta&t=bxo43bEB3k-7iNYvJXjNWFmHu-V6_dIDh1r1BAVHQew",
                                    "size": {
                                        "width": 480,
                                        "height": 602
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
                            "comment_counter": 6,
                            "parsed_datetime": "2026-03-26T19:31:38.521Z",
                            "reaction_counter": 73,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7442623910807945216",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit \n\nOur closing session on Friday is none other than Udi Ledergor. Udi is currently the Chief Evangelist at Gong and the author of #CourageousMarketing - a must-read book for any Marketer. His session is \"Driving better GTM alignment with AI.\"\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#GTMalignment #FutureOfMarketing #AI",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAWhFsBmKKb6ClLc7Hx_n0K7CE-ABfGDsg",
                                    "start": 74,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-courageousmarketing-activity-7442623910807945216-5wS7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7442623910807945216",
                            "attachments": [
                                {
                                    "id": "D5610AQHzE7EM6z6ETA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHzE7EM6z6ETA/image-shrink_480/B56Z0mC_dzJYAQ-/0/1774459812037?e=1787724000&v=beta&t=4hpBCZPhkqNe6aBMwjF99ju4vXe37mhCDejb-6m3L30",
                                    "size": {
                                        "width": 480,
                                        "height": 477
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
                            "parsed_datetime": "2026-03-25T17:30:17.602Z",
                            "reaction_counter": 24,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7442578732050964480",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nOur summit features three days of in-depth sessions that Marketing leaders need to hear. This Friday, we've got a great line-up of sessions - including \"The Marketing team of the future\" featuring Sanjiv Parikh, Tina Stewart, and Vamshi Sriperumbudur. \n\nWant to learn more about the summit? Drop a comment below.👇\n\n#MarketingLeaders #FutureOfMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAFGzpoB_C7tein-5HqANyqrU-KZj5VIMMY",
                                    "start": 221,
                                    "length": 13
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAACVvMBb71RAUqniiUcbq0OkujXIMpt9Jo",
                                    "start": 236,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAAOHpcBMAFqBKv1j6eYKHCcm6xl_f5Rwdw",
                                    "start": 254,
                                    "length": 20
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-marketingleaders-futureofmarketing-activity-7442578732050964480-iH7z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7442578732050964480",
                            "attachments": [
                                {
                                    "id": "D5610AQH4kakdoNvqkw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQH4kakdoNvqkw/image-shrink_480/B56Z0lZ5w5H8AU-/0/1774449043869?e=1787724000&v=beta&t=BHL_9BErlORDbe4XrTgRe-i-AEnTcbX0fjMM3Xbn8zI",
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
                            "repost_counter": 1,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-03-25T14:30:46.147Z",
                            "reaction_counter": 25,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7442254137964113921",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nWe'll close out Day 2 of our Growth Marketing Summit with an incredibly relevant topic, \"Knowledge is the Moat: Turning what we know into what AI can do\", presented by two Senior Creative Leaders with decades of experience between them... Sajjan Kanukolanu, PhD, and Rajesh Muthyalu.\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#MarketingLeaders #AgenticAI #Collaboration",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 263,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAADW1VwB5r4s70LtLHnsY32j0gMXl3eFM3A",
                                    "start": 291,
                                    "length": 15
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-marketingleaders-agenticai-activity-7442254137964113921-Ijfq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7442254137964113921",
                            "attachments": [
                                {
                                    "id": "D5610AQFhCuuH4LDd2g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFhCuuH4LDd2g/image-shrink_480/B56Z0gyrq6G8AQ-/0/1774371650643?e=1787724000&v=beta&t=2XxI1uT-0CreJIh6Mpfixqo8ktimkFbz9AjyB7r9ki0",
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
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-24T17:00:56.886Z",
                            "reaction_counter": 44,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7442208651253198849",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nOn Thursday, March 26th, CEO Rajiv Parikh will deliver the Keynote address at our 2026 Growth Marketing Summit. No spoilers, but it will be a future-forward vision of Growth Marketing. Rajiv has over two decades of leadership in Growth Marketing in the San Francisco Bay Area - this talk is rated \"can't miss\".\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#FutureOfMarketing #GrowthMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABKNYBxZG7PxFfQSqPTi4giJewoLKH6y0",
                                    "start": 53,
                                    "length": 12
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-futureofmarketing-growthmarketing-activity-7442208651253198849-U4Kd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7442208651253198849",
                            "attachments": [
                                {
                                    "id": "D5610AQEASrxGLLtyCQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEASrxGLLtyCQ/image-shrink_480/B56Z0gJUOYJ8BY-/0/1774360806724?e=1787724000&v=beta&t=AT2msxolByzKbZ_eIRKTa18N_1YAhNhSS3RolSjecy4",
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
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-03-24T14:00:12.009Z",
                            "reaction_counter": 53,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7441967332698251264",
                            "date": "4mo",
                            "text": "The best marketing conversations rarely happen on a stage.\n\nThey happen in rooms where leaders challenge assumptions, share real experiences, and rethink how growth actually works. That’s exactly why we host the Growth Marketing Summit.\n\nEach year, a small group of CMOs and growth leaders come together for a private, invite-only gathering to discuss what’s actually changing in marketing — from AI-driven execution to the future of GTM teams.\n\nThree days of strategy, perspective, and conversations that shape what comes next.\n\n#GrowthMarketing #B2BMarketing #MarketingLeadership #CMO #MarketingStrategy #ExecutiveLeadership #FutureOfMarketing",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-b2bmarketing-marketingleadership-activity-7441967332698251264-AjqA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7441967332698251264",
                            "attachments": [
                                {
                                    "id": "D5610AQH8VeMgYpoYsg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQH8VeMgYpoYsg/image-shrink_480/B56Z0ct1nAKMAQ-/0/1774303271799?e=1787724000&v=beta&t=W544mfKPuw_zX1tAgqeOTU4V_h6Y4j_N4P2aX9U0Es0",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-03-23T22:01:17.182Z",
                            "reaction_counter": 13,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7441876507028783104",
                            "date": "4mo",
                            "text": "#GrowthMarketingSummit\n\nToday, we're highlighting one of our Day 1 speakers, Sajjan Kanukolanu, PhD, and Amit Pande. Sajjan and Amit are both senior Marketing and Operations Leaders with long track records of success in their industries.\n\nThey'll give a fireside chat on Agentic AI: From \"Co-pilot\" to \"Co-worker\".\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#MarketingLeaders #AgenticAI #Collaboration",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABSXRUBui2mUhelZkvKy89dOc5aaHKPD8I",
                                    "start": 77,
                                    "length": 22
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDy4Bu4ykDl2kESNAUkpjnMBB1eawTqY",
                                    "start": 105,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-marketingleaders-agenticai-activity-7441876507028783104-Go_a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7441876507028783104",
                            "attachments": [
                                {
                                    "id": "D5610AQGbME6C73lI9Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGbME6C73lI9Q/image-shrink_480/B56Z0bbO59KsAQ-/0/1774281617348?e=1787724000&v=beta&t=AtZKOdJ2Jgm-pBTz2Y_EHYjwfr1nhEx74u6-F7JwU_0",
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
                            "comment_counter": 3,
                            "parsed_datetime": "2026-03-23T16:00:22.655Z",
                            "reaction_counter": 39,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7440477783816056832",
                            "date": "4mo",
                            "text": "AI Agents aren’t here to replace marketers. They’re here to replace the work that slows growth.\n\nAt Position², humans direct strategy while AI Agents handle execution, built on proprietary Knowledge Bases and built with guardrails.\n\nExecution scales, strategy stays with humans, and marketing drives growth. \n\n\n#GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing #Position2 #ServicesAsASoftware",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-digitaltransformation-agenticai-activity-7440477783816056832-95cp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7440477783816056832",
                            "attachments": [
                                {
                                    "id": "D5610AQErmzMsQCn0qg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQErmzMsQCn0qg/image-shrink_480/B56Z0HjGfVJkAU-/0/1773948135680?e=1787724000&v=beta&t=FgDLCSL5LRZtrkhmATh8vfWT9s8I0m7o0X0loMLhsPQ",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-19T19:22:21.054Z",
                            "reaction_counter": 13,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7440087385180340226",
                            "date": "5mo",
                            "text": "#GrowthMarketingSummit\n\nToday, we're highlighting one of our Day 2 speakers, Eric Nalbone and Nicole Siegal Fuselier. Eric and Nicole are both senior Marketing leaders with long track records of success in their industries.\n\nThey'll give a fireside chat on GEO & AEO vs. traditional search.\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#MarketingLeaders #GEO #AEO #SEO",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAP387QBEhSLcoQoza2qsTJwlqmZ7Q9tAIE",
                                    "start": 77,
                                    "length": 12
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAABLVzcBJgSljUJTVheHlzDOHAS71LYj-Ro",
                                    "start": 94,
                                    "length": 22
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-marketingleaders-geo-activity-7440087385180340226-MiY2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7440087385180340226",
                            "attachments": [
                                {
                                    "id": "D5610AQHvv9qrXugtOA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHvv9qrXugtOA/image-shrink_480/B56Z0CACTrIMAQ-/0/1773855057515?e=1787724000&v=beta&t=1ulqRSfxBs5EFQK-heSprx0frxhPcnzzroklVqHBCvc",
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
                            "repost_counter": 3,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-18T17:31:02.766Z",
                            "reaction_counter": 29,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7439458761288695808",
                            "date": "5mo",
                            "text": "We’re excited to host our 4th Annual Growth Marketing Summit in Park City, Utah (March 25–28, 2026).\n\nThis isn’t a public conference. It’s our premier executive retreat, designed for a small, curated group of senior leaders tackling the same systemic challenges shaping modern marketing.\n\nMost industry events stay at the surface. This summit goes deeper. \n\nOver three days, attendees participate in confidential strategy discussions, peer exchange with fellow C-suite leaders, and curated networking experiences designed to spark meaningful ideas and lasting relationships.\n\n#GrowthMarketing #CMOLeadership #MarketingInnovation #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-cmoleadership-marketinginnovation-activity-7439458761288695808-R3Us?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7439458761288695808",
                            "attachments": [
                                {
                                    "id": "D5610AQF12AX1AbkMHA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQF12AX1AbkMHA/image-shrink_480/B56Zz5EThiH8AQ-/0/1773705181717?e=1787724000&v=beta&t=ewwXg5NDdpenMIr-O0BhYAEsbC8cuZXtk8KkaOYYqfo",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-16T23:53:07.151Z",
                            "reaction_counter": 15,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7439392665433128961",
                            "date": "5mo",
                            "text": "#GrowthMarketingSummit\n\nToday, we're highlighting one of our Day 1 speakers, Jon Miller. If you don't know Jon, you should. Jon is a serial entrepreneur, founder, and thought leader. He co-founded Marketo and founded Engagio, influencing how B2B marketing gets done for the last several years. \n\nJon will be speaking on GTM transformation in 2026.\n\nWant to learn more about the summit? Drop a comment below.👇\n\n#MarketingLeaders #GTMtransformation #GTM #AgenticAI",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAABDmQBnZJCpDRvg1Z6rwkxxngNbm6WrIU",
                                    "start": 77,
                                    "length": 10
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-marketingleaders-gtmtransformation-activity-7439392665433128961-9xxB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7439392665433128961",
                            "attachments": [
                                {
                                    "id": "D5610AQEVCj5FXHQQoQ",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEVCj5FXHQQoQ/image-shrink_480/B56Zz4IMU.GgAQ-/0/1773689423391?e=1787724000&v=beta&t=LU3UbdxQU7pWuriCYxNbtqWgqveGm5FTx25s8INH1E4",
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
                            "repost_counter": 1,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-03-16T19:30:28.671Z",
                            "reaction_counter": 32,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7439385183264567296",
                            "date": "5mo",
                            "text": "#GrowthMarketingSummit\n\nNext week, we're hosting our 4th Growth Marketing Summit in Park City, Utah.\n\nThis isn't a broad-market conference with generic keynotes and tons of slide decks. We have three days of closed-door, high-density conversations on what Senior leaders and CMOs are focused on over the next 12+ months. \n\nWe're discussing topics like GTM transformation in 2026 and the shift from Agentic co-pilot to Agentic co-worker.\n\nWant more information on joining the summit? Drop a comment \"tell me more\" below. 👇\n\n#AgenticAI #Marketing #GTM",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketingsummit-agenticai-marketing-activity-7439385183264567296-0fEi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7439385183264567296",
                            "attachments": [
                                {
                                    "id": "D5610AQGDtZEVXev_Tg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGDtZEVXev_Tg/image-shrink_480/B56Zz4BYukJIAQ-/0/1773687639194?e=1787724000&v=beta&t=1Nk1uJF5jP09S4dpBpU077CT62MsUeGb4ZL2cIraU1Q",
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
                            "repost_counter": 1,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-03-16T19:00:44.783Z",
                            "reaction_counter": 20,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7437905815669362688",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nWhat's a recent rabbit hole David Yakobovitch has gone down? \n\n#Moltbook\n\nMoltbook is essentially a Reddit-style platform where AI agents talk to other AI agents. It went viral in early 2026, and it's been incredible to watch how these conversations unfold.\n\nWhy is it so interesting?\n\n▪️Agent-to-Agent Interaction: a space where AI agents communicate directly with one another.\n▪️Pure Data: While these agents don't possess \"humanism\" or god-complex egos, seeing how text naturally responds to text in this environment is surprisingly engaging.\n\nListen to the full episode: https://lnkd.in/g5ww7P6b\n\nIt's easy to spend hours exploring these threads and seeing where the AI takes the conversation. What's the most interesting AI \"rabbit hole\" you've discovered lately? Drop it in the comments.👇\n\n#AI #OpenClaude #GenerativeAI #TechTrends #AIAgents",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAKb4d4BV-EhU_RrrokZg6bJsnupJSIbZww",
                                    "start": 42,
                                    "length": 17
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-moltbook-ai-activity-7437905815669362688-3aYm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7437905812561428480",
                            "attachments": [
                                {
                                    "id": "D5610AQHi3mmL5twq4Q",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHi3mmL5twq4Q/mp4-720p-30fp-crf28/B56Zzi_eDFJYCA-/0/1773334824132?e=1787724000&v=beta&t=2HVOP039LV8On2NxPbNpMTSMumbMehG2_UhNZxL1clc",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-12T17:02:16.063Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7437536064845627392",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nIs the traditional Product Manager-to-Engineer ratio becoming obsolete?\n\nDavid Yakobovitch discusses the impact of vibe coding on product development, driving a radical shift in how teams are structured:\n\n▪️Accelerated Production: AI-driven \"vibe coding\" and agent-based development are increasing production speeds by anywhere from 2x to 100x.\n\n▪️A New Ratio: While the standard used to be one PM for every four to ten engineers, the speed of AI might soon require one product lead for every single engineer.\n\nProduct is becoming the \"great equalizer,\" as the ability to go to production has never been quicker.\n\nListen to the full episode: https://bit.ly/4rZ2Y8N\n\n#ProductManagement #AI #SoftwareEngineering #TechTrends #VibeCoding",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAKb4d4BV-EhU_RrrokZg6bJsnupJSIbZww",
                                    "start": 87,
                                    "length": 17
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-productmanagement-ai-activity-7437536064845627392-SZRg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7437536063910404096",
                            "attachments": [
                                {
                                    "id": "D5610AQFSpkB-jkatIA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFSpkB-jkatIA/mp4-720p-30fp-crf28/B56ZzdvLzjHICA-/0/1773246668798?e=1787724000&v=beta&t=ncc8Oi-n8G_X2eAiLSpSCsB_JbA2gI8wUkutKfDgctU",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-11T16:33:00.597Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7437290891972608000",
                            "date": "5mo",
                            "text": "As autonomous AI agents multiply across teams, the real risk isn’t innovation; it’s lack of visibility, accountability, and control. This piece outlines how enterprises can put the right governance frameworks in place to scale agentic AI securely, compliantly, and with trust.\n\nOur team member, Taryn T., breaks down a critical enterprise challenge in her latest blog: Taming Agentic AI Sprawl With Governance Frameworks for Enterprise.\n\nAs autonomous AI agents multiply across teams, the real risk isn’t innovation; it’s lack of visibility, accountability, and control. This piece outlines how enterprises can put the right governance frameworks in place to scale agentic AI securely, compliantly, and with trust.\n\nIf you're deploying (or planning to deploy) AI agents at scale, this is a MUST-read!👇\n 🔗 https://bit.ly/3P3qK4X",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAADCQUE8BgwoB5Wn9bn5UnEnms_grFtpd4z0",
                                    "start": 295,
                                    "length": 8
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_as-autonomous-ai-agents-multiply-across-teams-activity-7437290891972608000-DEbl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7437290891972608000",
                            "attachments": [
                                {
                                    "id": "D5610AQGm1iwi9pTVjg",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGm1iwi9pTVjg/image-shrink_480/B56ZzaQo93HIAU-/0/1773188321476?e=1787724000&v=beta&t=nnbU3tn_MkRF4Dvw3-nVtP4xc-fjyC0YMvKm0IKqm-M",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-03-11T00:18:46.829Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7437211301275381760",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nIs Claude winning the AI race?\n\nDavid Yakobovitch weighs in on the shifting landscape of artificial intelligence. \n\nHere are the key takeaways:\n\n▪️Market Momentum: Claude is currently seen as leading the market, with OpenAI working to catch up.\n\n▪️Revenue Growth: Anthropic is experiencing rapid growth, and reports suggest it could potentially surpass OpenAI in revenue by late 2026.\n\nThe competition between these AI powerhouses is heating up. Who do you think will come out on top by 2026? Drop it in the comments.\n\nListen to the full episode: https://bit.ly/4rqvYVV\n\n#AI #Claude #OpenAI #Anthropic #TechTrends #ArtificialIntelligence #FutureOfTech",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAKb4d4BV-EhU_RrrokZg6bJsnupJSIbZww",
                                    "start": 46,
                                    "length": 17
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-ai-claude-activity-7437211301275381760-_yM-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7437211300340006912",
                            "attachments": [
                                {
                                    "id": "D5610AQGKtFJ8MtV6dQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGKtFJ8MtV6dQ/mp4-720p-30fp-crf28/B56ZzZH0E1KcCA-/0/1773169239107?e=1787724000&v=beta&t=A5Ak7CQ23XX7Ti-f0GS83G1t3wjBGC_OEXh3poaoRA8",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-03-10T19:02:30.928Z",
                            "reaction_counter": 6,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7434960924131749888",
                            "date": "5mo",
                            "text": "​​We asked about AI usage in a survey conducted recently. You answered. And honestly? We're not surprised. 71% are daily AI users, and 14% are selective users, as well as still experimenting. \n\nIf you're using AI daily but still manually QA-ing campaigns, firefighting performance issues, and rebuilding the same reports every month, you're working harder, not smarter. The shift isn't AI adoption. It's AI orchestration.\n\nPosition² doesn't just use AI tools. We build AI Agents that execute campaigns, monitor performance, and alert us before issues impact results.\n\nThe question isn't \"are you using AI?\" It's \"is your AI working FOR you or are you working for it?\"\n\n#GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing \n#Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-digitaltransformation-agenticai-activity-7434960924131749888-KP7Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7434960924131749888",
                            "attachments": [
                                {
                                    "id": "D5610AQE1JvI9QatU3Q",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQE1JvI9QatU3Q/image-shrink_480/B56Zy5JjBDHUAQ-/0/1772632813900?e=1787724000&v=beta&t=z-lUdFPrTg3rYL64hugvDLxQPhyzYGBadPQzOzIRtHQ",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-03-04T14:00:19.207Z",
                            "reaction_counter": 11,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7433156488912609280",
                            "date": "5mo",
                            "text": "The future of marketing isn't coming, it's here. Part 3 of our blog series explores implementation strategies that separate successful AI agent deployments from failed experiments. From data governance to team transformation, we break down what it takes to build true human + agent collaboration.\n\nPosition² is proving that when you combine expert marketers with intelligently designed agents, you don't just improve efficiency—you transform what's possible.\n\nRead the final installment on implementing human + agent collaboration here: https://lnkd.in/g6HzJeWQ \n\n\n#GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing #AgenticMarketing #MarketingAI #AIAgents #B2BMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-digitaltransformation-agenticai-activity-7433156488912609280-xNSP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7433156488912609280",
                            "attachments": [
                                {
                                    "id": "D5610AQHccN1QhtrzlA",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHccN1QhtrzlA/image-shrink_480/B56ZyfgbDYIYAQ-/0/1772202603090?e=1787724000&v=beta&t=ZtByyI9iuxy4Z8tCYqv4nqzi_9rrPpNn3R34g8IQEaw",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-02-27T14:30:08.326Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7432872260836868096",
                            "date": "5mo",
                            "text": "In a traditional agency model, teams spend weeks writing briefs, aligning stakeholders, and moving work from hand to hand before anything ever launches.\n\nWhile others are still drafting the brief, at Position², our AI Agents have ingested client context, analyzed positioning, generated messaging and KPIs, and are ready to execute. Our strategists step in where real human judgment matters most.\n\nAgentic AI at Position² is about removing execution drag so our teams can focus on sharper thinking, better decisions, and more predictable outcomes.\n\n#GrowthMarketing #DigitalTransformation #AgenticAI #AIMarketing #Position2",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_growthmarketing-digitaltransformation-agenticai-activity-7432872260836868096-7KjO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7432872260836868096",
                            "attachments": [
                                {
                                    "id": "D5610AQHUnwIKNTHL2g",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHUnwIKNTHL2g/image-shrink_480/B56Zybd6ydKUAc-/0/1772134837873?e=1787724000&v=beta&t=GY6Dxv-qA9wZwJCQrV6VnmvSimUcgneb-CIuOVPEXEs",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "comment_counter": 0,
                            "parsed_datetime": "2026-02-26T19:40:43.072Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7432847664892825600",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nWhy You Should Create Friction at the Start of a Sale\n\nIn sales, we often think that making everything as easy as possible for the customer is the ultimate goal. However, there is a powerful psychological reason to introduce friction early in the process.\n\nIf the process is too easy, like buying socks online, there is no excitement or deep emotional connection to the result. Friction should be at the beginning—never at the end.\n\nHow do you incorporate \"friction\" or pain-point diagnosis into your sales discovery? Share it in the comments!\n\nPatrick Renvoise\n\nListen to the full episode: https://lnkd.in/gG9AA2xH\n\n#SalesStrategy #CustomerExperience #PsychologyOfSales #SalesTips #ValueProposition",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACR880BMkGLhTr31qBIWMVrmcaq4NxE1as",
                                    "start": 559,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-salesstrategy-customerexperience-activity-7432847664892825600--mh7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7432847663978692608",
                            "attachments": [
                                {
                                    "id": "D5610AQHVNdApkdYWNQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHVNdApkdYWNQ/mp4-720p-30fp-crf28/B56ZybHHDiHQCA-/0/1772128866425?e=1787724000&v=beta&t=uFL6QfTJDpb_kJP0Uwm_uzanaTGppxVxDTlYu2xceMA",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-02-26T18:02:58.942Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7432470271439060993",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nWhy do your customers really buy?\n\nIt isn't just about logic. According to Patrick Renvoise, the ultimate decision-maker is the emotional, or primal, brain.\n\nKey insights: \n▪️The Emotional Brain Wins: Decisions are made quickly when the rational and primal brains agree. If they clash, the primal brain typically wins.\n▪️The \"Positive Emotional Uplift\": This is the true driver of a purchase. It's the delta between a customer's current pain and the relief your solution provides.\n▪️The Value Proposition: To sell effectively, you must take a customer from a state of anxiety or discomfort and bring them to a \"higher plane\" through your solution.\n\nTo succeed, you need to find the mechanism that helps your audience experience that positive emotion.\n\nListen to the full episode: https://lnkd.in/gb2aaWNV\n\n#Neuromarketing #SalesStrategy #ConsumerBehavior #EmotionalIntelligence #MarketingTips #StateOfAnalytics",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACR880BMkGLhTr31qBIWMVrmcaq4NxE1as",
                                    "start": 89,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-neuromarketing-salesstrategy-activity-7432470271439060993-kim3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7432470270352744450",
                            "attachments": [
                                {
                                    "id": "D5610AQG3pPgfcHMwvg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQG3pPgfcHMwvg/mp4-720p-30fp-crf28/B56ZyVv32THYCA-/0/1772038891817?e=1787724000&v=beta&t=wRIUnZifS4xLldCRXSTCskkr6iDpt5M0ZOGHXykCR6c",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-02-25T17:03:21.331Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7432230144561360898",
                            "date": "5mo",
                            "poll": {
                                "id": "7432230143340765184",
                                "is_open": false,
                                "options": [
                                    {
                                        "id": "7432230143496060929",
                                        "win": true,
                                        "text": "🎯 Outputs need heavy editing",
                                        "votes_count": 1
                                    },
                                    {
                                        "id": "7432230143495987202",
                                        "win": false,
                                        "text": "🔄 Automating wrong things",
                                        "votes_count": 0
                                    },
                                    {
                                        "id": "7432230143496171520",
                                        "win": false,
                                        "text": "🧠 Don't know what to automate",
                                        "votes_count": 0
                                    },
                                    {
                                        "id": "7432230143495987201",
                                        "win": false,
                                        "text": "✅ We've cracked it",
                                        "votes_count": 0
                                    }
                                ],
                                "question": "What's actually holding your team back from AI impact?",
                                "total_votes_count": 1
                            },
                            "text": "Everyone's \"using AI.\" Few are using it well. The dirty secret? Most teams are just producing bad content faster. Writing that still needs complete rewrites. Campaigns that still miss the mark. Reports that still require manual cleanup.\nSpeed without quality is just expensive noise.\n\nThe real question isn't \"are you using AI?\" It's \"is your AI making you better or just busier?\"\n\nAt Position², we don't help clients use AI tools. We build agents that execute, monitor, and optimize autonomously, so teams focus on strategy, not cleanup.",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_everyones-using-ai-few-are-using-it-well-activity-7432230144561360898-nal-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7432230143651250176",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 0,
                            "comment_counter": 0,
                            "parsed_datetime": "2026-02-25T01:09:10.622Z",
                            "reaction_counter": 3,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7432122843158626304",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nAre you still trying to sell to your customer's logic? It might be time to rethink your strategy.\n\nIn the latest episode of \"State of Analytics,\" Patrick Renvoise dives into the fascinating world of neuromarketing. The reality is that human beings make decisions based on emotions and primal instincts—often without even realizing why.\n\nCheck out the full episode to learn how to unlock the \"buy button\" in the brain!\nhttps://lnkd.in/gbHXMJ-R\n\n#NeuroMarketing #SalesStrategy #MarketingTips #StateOfAnalytics #PrimalBrain",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACR880BMkGLhTr31qBIWMVrmcaq4NxE1as",
                                    "start": 160,
                                    "length": 16
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-neuromarketing-salesstrategy-activity-7432122843158626304-BLEW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7432122842105683968",
                            "attachments": [
                                {
                                    "id": "D5610AQEXFPssxlpvyw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEXFPssxlpvyw/mp4-720p-30fp-crf28/B56ZyQz44zHYCA-/0/1771956057485?e=1787724000&v=beta&t=u7VtZiL1ncS44R9zynRxuuUOCpT4MNCFNuFYOosNj0s",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 2,
                            "parsed_datetime": "2026-02-24T18:02:47.974Z",
                            "reaction_counter": 14,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7431729633169059840",
                            "date": "5mo",
                            "text": "Is your organization prepared for \"Agentic Sprawl\"? 🤖📉\n\nBy 2030, the Agentic AI market is projected to hit over $50 billion. But with rapid adoption comes a massive new risk: unmanaged autonomous agents operating in silos.\n\nIn our latest article, we dive into why \"Agentic AI Sprawl\" is the new SaaS sprawl—and why we can't wait until it's out of control to fix it. We need to treat AI agents not just as software, but as digital colleagues with real-world impacts.\n\nKey takeaways from the framework:\n✅ The Agent Registry: Why visibility is your first line of defense.\n✅ Algorithmic Accountability: Ensuring every decision is traceable.\n✅ Human-in-the-Loop: Moving from \"approval\" to \"strategic oversight.\"\n\nIf you're scaling AI, governance isn't a bottleneck—it's the fuel that builds trust with customers and regulators.\n\nRead the full breakdown here: https://lnkd.in/gvD2EZKY\n\n#GenerativeAI #AIGovernance #EnterpriseAI #AgenticAI #DigitalTransformation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8990172027944059185",
                                "url": "https://na2.hubs.ly/H03Sdp20",
                                "title": "Taming Agentic AI Sprawl With Governance Frameworks for Enterprise | Position² Governance Frameworks for Deploying AI Agents in Enterprises​ | Position²",
                                "author": "position2.com",
                                "picture_url": "https://media.licdn.com/dms/image/v2/D5610AQFRUg39Y64Odw/image-shrink_160/B56ZyLOuSmKgAY-/0/1771862418921?e=1787724000&v=beta&t=EKNnxAe71A-zdu4_IJXC4YM2Vh2hUJ78or_CYKhxti0",
                                "published_at": "2037-12-03T03:34:00.781Z"
                            },
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_taming-agentic-ai-sprawl-with-governance-activity-7431729633169059840-yej8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7431729633169059840",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 1,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-02-23T16:00:19.407Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7430303501253111808",
                            "date": "5mo",
                            "text": "#SparkOfAges\n\nWhat truly convinces a venture capitalist to back a high-risk, high-reward idea? It often comes down to the \"why\" behind the founder's mission and their unwavering commitment to their life's work.\n\nIn this episode, Manan M. and Rustam Esanov discuss the journey of backing a potentially pattern-breaking idea in oncology: turning cancer cells into immune allies.\n\nKey takeaways for entrepreneurs and investors:\n\n▪️The \"Why\" Matters Most: Beyond technical results, investors look for the deep-seated motivation that drives a founder to dedicate the next decade to a problem.\n\n▪️Founder Conviction: Rustam Esanov demonstrated his belief by quitting his job and funding early experiments out of pocket to pressure-test his scientific insight.\n\n▪️Breaking Pattern Biases: Success in venture capital often comes from backing unique perspectives that challenge established therapeutic paradigms.\n\n▪️Attributes of Great Entrepreneurs: The most consistent traits are a sense of purpose and a profound curiosity that allows them to push past the limits of their own expertise.\n\nVenture capital is about more than just clinical outcomes; it's about finding the people who won't waste their time on something that can't be done.\n\nListen to the full episode: https://lnkd.in/gSUqQkpk\n\n#VentureCapital #Entrepreneurship #Oncology #Innovation #Startups #Biotech",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAD9ktoBGg_1-nRDT3pZv2B9SrgM3-E5xqU",
                                    "start": 229,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB2MX4oBXd0KW0XQJe6YR-SMpi94B2JLwQI",
                                    "start": 242,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-venturecapital-entrepreneurship-activity-7430303501253111808-Xt0i?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7430303498254299136",
                            "attachments": [
                                {
                                    "id": "D5610AQFKOhXPaxKYfQ",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFKOhXPaxKYfQ/mp4-720p-30fp-crf28/B56Zx29NIxIQCE-/0/1771522294292?e=1787724000&v=beta&t=v-69FxC51Ze2RG0qzohNHSg7tM4X42aF_PC5awTXIBk",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-02-19T17:33:23.062Z",
                            "reaction_counter": 15,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7429948687696445440",
                            "date": "6mo",
                            "text": "#SparkOfAges\n\nWhat makes an immigrant founder uniquely positioned to disrupt an entire system?\n\nIt often comes down to a specific \"alien perspective\" that allows them to see mispriced opportunities that others miss entirely. Based on eleven years of experience, two specific founder archetypes have emerged as the primary drivers of this disruption:\n\n▪️Technical Visionaries: These founders are characterized by a high IQ (Intelligence Quotient) and AQ (Adversity Quotient). Their specialized skills are often built through university systems and advanced PhD programs.\n\n▪️System Disruptors: These founders rely on a high EQ (Emotional Quotient) and SQ (Social Quotient). They excel at building networks and galvanizing supporters around a vision. This archetype often develops after spending significant time in an industry, dissecting it through first principles to understand it in a way no one else can.\n\nWhile technical visionaries may be more immediately obvious due to their academic credentials, the ultimate goal for many is to evolve into a system disruptor, creating fundamental, large-scale change.\n\nInvest in the belief of those who see the world differently.\n\nManan M. and Rustam Esanov\n\nListen to the full episode: https://lnkd.in/gxrNWdWb\n\n#VentureCapital #ImmigrantFounders #Entrepreneurship #Innovation #BelieveInAliens",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAD9ktoBGg_1-nRDT3pZv2B9SrgM3-E5xqU",
                                    "start": 1174,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB2MX4oBXd0KW0XQJe6YR-SMpi94B2JLwQI",
                                    "start": 1187,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-venturecapital-immigrantfounders-activity-7429948687696445440-tyBK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7429948686433959937",
                            "attachments": [
                                {
                                    "id": "D5610AQHYqyweo_rG0w",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHYqyweo_rG0w/mp4-720p-30fp-crf28/B56Zxx6gXkJACE-/0/1771437702110?e=1787724000&v=beta&t=1qk9wSjxWE7dHC5cqX3VMd1Nh0D8ShFFyKNZHF7mnFE",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-02-18T18:03:28.918Z",
                            "reaction_counter": 12,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7429902543519961088",
                            "date": "6mo",
                            "text": "At Position², our AI Agents don't just assist, they execute. \n\nOur AI Agents are:\n✓ Trained on proven frameworks and client-specific Knowledge Base\n✓ Integrated with live systems (Slack, analytics, CMS, CRM,  you name it!)\n✓ Directed by experienced marketers who focus on strategy, while agents handle execution\n\nThis is Agentic AI, marketing delivery that works at speed and scale, not like a traditional agency.",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_at-position%C2%B2-our-ai-agents-dont-just-assist-activity-7429902543519961088-zDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7429902543519961088",
                            "attachments": [
                                {
                                    "id": "D5610AQF4vsVpeyBDzw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQF4vsVpeyBDzw/image-shrink_480/B56ZxxQ.hyHsAY-/0/1771426802340?e=1787724000&v=beta&t=B6PWeg2f_9dbPdRkv3h8RGI3UOWfwKt3k0gona6CRJ0",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-02-18T15:00:07.289Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7429616323464433664",
                            "date": "6mo",
                            "text": "#SparkOfAges \n\nIs venture capital losing its way by prioritizing concentrated power over risk-taking?\n\nThe industry was originally built to promote risk-taking and seek asymmetric outcomes. However, as the sector has matured over the last 40 years, it has shifted toward concentrated abundance, moving away from its roots.\n\nTo capture better economics and return to the heritage of Silicon Valley, the focus must shift back to \"distributed abundance\" and \"day zero\" investing:\n\n▪️Invest at Day Zero: Anchor investment models at the earliest possible stage, often when there is no product, no revenue, and no customers.\n\n▪️Bet on Belief: Success comes from capturing and investing in pure entrepreneurial belief at the ground floor.\n\n▪️Seek Asymmetry: Leave annuity-style returns to the public markets; venture capital is meant for transformative, asymmetric outcomes.\n\n▪️Support Visionaries: Many of the massive networks we use today, such as Nvidia and DoorDash, were built by immigrant founders with a vision.\n\nManan M. and Rustam Esanov\n\nListen to the full episode: https://bit.ly/4qGcwUy\n\n#VentureCapital #Startups #SiliconValley #Entrepreneurship #Innovation",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAAD9ktoBGg_1-nRDT3pZv2B9SrgM3-E5xqU",
                                    "start": 1013,
                                    "length": 8
                                },
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAB2MX4oBXd0KW0XQJe6YR-SMpi94B2JLwQI",
                                    "start": 1026,
                                    "length": 13
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-venturecapital-startups-activity-7429616323464433664-_U9M?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7429616322625581057",
                            "attachments": [
                                {
                                    "id": "D5610AQEdD6A7goXusA",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEdD6A7goXusA/mp4-720p-30fp-crf28/B56ZxtMORBKACA-/0/1771358455046?e=1787724000&v=beta&t=_f_6B8S_udkGxzAcLOaQr4cxryHCfl4QCdPpEZQIKdM",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-02-17T20:02:47.110Z",
                            "reaction_counter": 18,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7429177762625531904",
                            "date": "6mo",
                            "text": "Speed vs. Quality. The old agency trade-off doesn't apply anymore.\n\nThe old model forced you to choose: \n⚡ Fast execution → Inconsistent quality \n🎯 High quality → Slow turnaround\n 📈 Scale → Hire more people\n\nThe agentic approach eliminates the trade-off: \n✓ Campaign strategies in hours, not weeks \n✓ Content that maintains brand standards at scale \n✓ Real-time monitoring that catches issues before they break \n✓ Consistent quality across every project, every client, every time\n\nThis is what Position² delivers: speed with quality, not speed with slop.\n\nHow? AI agents trained on proven frameworks, industry-specific custom Knowledge Base, and directed by experienced strategists, monitored in real-time.\n\n#AgenticMarketing #MarketingAI #AIAgents #B2BMarketing #AI",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/position2/",
                                    "start": 494,
                                    "length": 9
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_agenticmarketing-marketingai-aiagents-activity-7429177762625531904-uxRH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:activity:7429177762625531904",
                            "attachments": [
                                {
                                    "id": "D5610AQFnoKzr8UWIaw",
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFnoKzr8UWIaw/image-shrink_480/B56Zxm9yuwJsAQ-/0/1771254000797?e=1787724000&v=beta&t=DIBXG8tJW1GMMfcYep-IS26XsraLdPD-W8CrVKCJl_Y",
                                    "size": {
                                        "width": 480,
                                        "height": 600
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
                            "parsed_datetime": "2026-02-16T15:00:06.058Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7427759156910104576",
                            "date": "6mo",
                            "text": "#SparkOfAges\n\nThe role of the marketer is undergoing a fundamental shift as technical sophistication becomes a core requirement for modern Go-To-Market (GTM) strategies.\n\nThe need for technical vs. creative talent depends on customer maturity. While GTM engineering teams can handle programmatic orchestration at scale, ABM and field teams are still vital for executing creative, one-off campaigns.\n\nThe most tech-savvy companies are already leveraging these APIs to build more sophisticated, integrated systems.\n\nKris Rudeegraap of Sendoso\n\nListen to the full episode: https://bit.ly/4rIeiFH\n\n#GTM #MarketingTechnology #AI #Automation #GTMengineering #FutureOfWork",
                            "author": {
                                "id": "60223",
                                "name": "Position²",
                                "is_company": true,
                                "public_identifier": "position2",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/in/ACoAAACdykgBdCs11hVi78EjsyKF6LNf6fdsato",
                                    "start": 514,
                                    "length": 15
                                },
                                {
                                    "url": "https://www.linkedin.com/company/sendoso/",
                                    "start": 533,
                                    "length": 7
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/position2_sparkofages-gtm-marketingtechnology-activity-7427759156910104576-eXqo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7427759156121542656",
                            "attachments": [
                                {
                                    "id": "D5610AQGneeS3tB3EZg",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGneeS3tB3EZg/mp4-720p-30fp-crf28/B56ZxSzI5ZKcCA-/0/1770915676820?e=1787724000&v=beta&t=CXS32fAqZE6nTov3tQ5XFkxJaITSUiDGDumJz9WH8a8",
                                    "size": {
                                        "width": 720,
                                        "height": 1280
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
                            "parsed_datetime": "2026-02-12T17:03:04.099Z",
                            "reaction_counter": 8,
                            "impressions_counter": 0
                        }
                    ],
                    "stats": [
                        {
                            "d": "company-page followers from profile",
                            "h": "Followers",
                            "v": 8954
                        },
                        {
                            "d": "recent organic company-page posts analyzed",
                            "h": "Posts analyzed",
                            "v": 50
                        },
                        {
                            "d": "Ashish A. advisory board announcement received the most reactions in the analyzed set",
                            "h": "Top reaction post",
                            "v": 93
                        },
                        {
                            "d": "Growth Marketing Summit Day 1 recap was one of the highest-reacting posts",
                            "h": "Strong event post",
                            "v": 73
                        }
                    ],
                    "company": {
                        "url": "https://www.linkedin.com/company/position2/",
                        "logo": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc",
                        "name": "Position²",
                        "posts": 50,
                        "period": "2026-02-12 to 2026-08-18",
                        "industry": "Advertising Services",
                        "followers": 8954
                    },
                    "profile": {
                        "id": "60223",
                        "logo": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_200_200/company-logo_200_200/0/1631304841133?e=1788998400&v=beta&t=Ah8NUB5wXOWj61eC4_Y1hV8wU7vrH1SGckfIKpgz-zc",
                        "name": "Position²",
                        "object": "CompanyProfile",
                        "claimed": true,
                        "tagline": "Growth for Super Ambitious Brands.",
                        "website": "http://www.position2.com",
                        "hashtags": [
                            {
                                "title": "#digitaladvertising"
                            },
                            {
                                "title": "#digitalagency"
                            },
                            {
                                "title": "#position2"
                            }
                        ],
                        "industry": [
                            "Advertising Services"
                        ],
                        "locations": [
                            {
                                "area": "California",
                                "city": "Santa Clara",
                                "street": [
                                    "2880 Lakeside Dr"
                                ],
                                "country": "US",
                                "postalCode": "95054",
                                "description": "Corporate & US Client Management",
                                "is_headquarter": true
                            },
                            {
                                "area": "Karnataka",
                                "city": "Bangalore",
                                "street": [
                                    "No. 1 BSB Business Centre",
                                    "K.R. Colony, Domlur,"
                                ],
                                "country": "IN",
                                "postalCode": "560071",
                                "description": "Global Delivery Centre",
                                "is_headquarter": false
                            }
                        ],
                        "messaging": {
                            "id": "512393",
                            "entity_urn": "urn:li:fsd_pageMailbox:512393",
                            "is_enabled": true
                        },
                        "activities": [
                            "Enterprise Visibility Accelerator",
                            "Search Engine Optimization",
                            "Social Media Marketing",
                            "Creative Services",
                            "Web Analytics",
                            "Performance Leads",
                            "Digital Marketing Services",
                            "Pay Per Click",
                            "Marketing Automation",
                            "Website and Applications Services"
                        ],
                        "entity_urn": "urn:li:fsd_company:60223",
                        "logo_large": "https://media.licdn.com/dms/image/v2/C510BAQE1F03u8QHJXw/company-logo_400_400/company-logo_400_400/0/1631304841133?e=1788998400&v=beta&t=yQXIlF2wmj5tF37__GD8LW6ailySa5Hw0nKW_cgzHHI",
                        "description": "Position² is a fast-growing Demand Generation company, venture backed by Accel Partners. We are dedicated to super-ambitious global startups and enterprise brands that have the goal to exponentially scale and grow their business. Position² offers a cohesive line of Demand Generation products which includes Marketing Automation, Content Marketing and Paid Acquisition and we are a proud Google and Marketo agency partner.",
                        "is_employee": false,
                        "profile_url": "https://www.linkedin.com/company/position2/",
                        "is_following": true,
                        "employee_count": 227,
                        "followers_count": 8954,
                        "foundation_date": "01/01/2005",
                        "organization_type": null,
                        "public_identifier": "position2",
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
                            "to": 200,
                            "from": 51
                        }
                    },
                    "summary": {
                        "text": "Position²’s organic LinkedIn strategy is heavily centered on a clear point of view: AI should not be a tool layer, but an operating system for growth. Their content blends thought leadership, event promotion, podcast/article distribution, and occasional product storytelling to reinforce the same narrative around AI-native, human-directed marketing. The page also uses founder/executive credibility and in-person summit/social proof to make the message feel both strategic and real.\n\nThe feed is consistent and opinionated, with repeated themes around agentic AI, governance, GTM transformation, knowledge as a moat, and the shift from copilot to co-worker. Engagement appears strongest on marquee moments like advisory board announcements and summit recaps, while the recurring educational/opinion posts keep the brand anchored as a category thinker.",
                        "moves": [
                            "Repeated a tightly controlled AI-native narrative across most posts instead of broad agency marketing content.",
                            "Uses the Growth Marketing Summit and Spark of Ages podcast as recurring content engines for authority and distribution.",
                            "Leans on executive voice and speaker highlights to lend credibility to the brand thesis.",
                            "Mixes product proof, event proof, and editorial content to show both capability and category leadership.",
                            "Frequently frames customer pain as systemic disconnect: siloed teams, low context, and weak governance."
                        ]
                    },
                    "website": "http://www.position2.com",
                    "creative": {
                        "freq": [
                            {
                                "l": "Posting cadence is high and consistent, with near-daily bursts during major campaigns/events",
                                "v": 62
                            },
                            {
                                "l": "Heaviest concentration appears around summit promotion/recaps and Spark of Ages clips/articles",
                                "v": 28
                            },
                            {
                                "l": "Lower-frequency standalone product launches and customer proof posts punctuate the feed",
                                "v": 10
                            }
                        ],
                        "formats": [
                            {
                                "l": "Single Image",
                                "v": 39
                            },
                            {
                                "l": "Video",
                                "v": 26
                            },
                            {
                                "l": "Document-Carousel",
                                "v": 6
                            },
                            {
                                "l": "Text-only",
                                "v": 22
                            },
                            {
                                "l": "GIF",
                                "v": 7
                            }
                        ],
                        "imagery": [
                            "Speaker-and-panel event photography",
                            "Branded summit graphics with dense text overlays",
                            "Product/feature announcement visuals for StudioX",
                            "Founder/executive headshots and quoted clips",
                            "Simple branded quote cards for AI/strategy claims"
                        ],
                        "swatches": [
                            [
                                "#0B1F3A",
                                "Deep Navy"
                            ],
                            [
                                "#1E5AA8",
                                "Blue"
                            ],
                            [
                                "#27B4C7",
                                "Teal"
                            ],
                            [
                                "#F5A623",
                                "Amber"
                            ],
                            [
                                "#F3F6FA",
                                "Off White"
                            ],
                            [
                                "#111827",
                                "Charcoal"
                            ]
                        ]
                    },
                    "launches": [
                        {
                            "date": "2026-06-24",
                            "type": "feature_release",
                            "title": "StudioX 3D rendering platform partnership/use-case announcement with flexera"
                        },
                        {
                            "date": "2026-08-18",
                            "type": "feature_release",
                            "title": "Latest version of StudioX self-service 3D rendering platform"
                        }
                    ],
                    "personas": [
                        {
                            "persona": "Chief Marketing Officer (CMO)",
                            "industry": "B2B SaaS / Enterprise Technology",
                            "rationale": "Inferred from repeated summit programming, GTM transformation, AI-native marketing, and executive retreat language. This is an estimate based on content themes and engagement, not real follower data.",
                            "seniority": "C-suite",
                            "confidence": 95
                        },
                        {
                            "persona": "VP Marketing / VP Demand Generation",
                            "industry": "Advertising Services / B2B SaaS",
                            "rationale": "Posts repeatedly address growth systems, campaign execution, measurement, and marketing team redesign, which strongly suggests VP-level demand gen and marketing leaders. Inferred from content and engagement only.",
                            "seniority": "VP",
                            "confidence": 91
                        },
                        {
                            "persona": "RevOps / Marketing Operations Director",
                            "industry": "Software / SaaS",
                            "rationale": "Mentions of workflows, orchestration, CRM/CMS integrations, and compounding systems point to ops leaders responsible for execution and tooling. This is inferred from the posts, not follower demographics.",
                            "seniority": "Director",
                            "confidence": 88
                        },
                        {
                            "persona": "Founder / CEO",
                            "industry": "Startups / Venture-backed tech",
                            "rationale": "Company profile explicitly targets super-ambitious startups, and posts emphasize founder journeys, investor perspectives, and measurable growth. Inference based on content themes and positioning.",
                            "seniority": "C-suite",
                            "confidence": 84
                        },
                        {
                            "persona": "Enterprise AI / Transformation Leader",
                            "industry": "Enterprise Technology / AI",
                            "rationale": "AI governance, agentic sprawl, enterprise AI ROI, and agentic workflow posts suggest a technical transformation audience. This is inferred from the content mix, not real audience data.",
                            "seniority": "Director",
                            "confidence": 77
                        }
                    ],
                    "strategy": {
                        "ctas": [
                            {
                                "l": "Drop a comment below",
                                "v": "Used across summit and speaker posts to drive engagement."
                            },
                            {
                                "l": "Let's connect",
                                "v": "Used around event attendance and conference networking."
                            },
                            {
                                "l": "Learn more",
                                "v": "Used in product and system posts."
                            },
                            {
                                "l": "Read the full announcement",
                                "v": "Used for StudioX launch and other long-form updates."
                            },
                            {
                                "l": "Watch the full episode",
                                "v": "Used in podcast-led content."
                            },
                            {
                                "l": "Listen to the full episode",
                                "v": "Used in podcast-led content."
                            },
                            {
                                "l": "Read the full breakdown here",
                                "v": "Used in governance/framework posts."
                            },
                            {
                                "l": "Explore StudioX",
                                "v": "Used in product launch and product demo posts."
                            },
                            {
                                "l": "Sign up to receive updates",
                                "v": "Used for summit/event registration."
                            },
                            {
                                "l": "Subscribe to our mailing list",
                                "v": "Used to nurture podcast/newsletter audience."
                            }
                        ],
                        "hooks": [
                            {
                                "l": "Contrarian AI framing",
                                "v": "Frequently uses challenge-the-status-quo opens: everyone has AI, but few have AI that works, and AI is not a replacement for human judgment."
                            },
                            {
                                "l": "Problem-first framing",
                                "v": "Starts with execution pain, context loss, disconnected teams, bad content faster, or workflow drag before introducing Position²."
                            },
                            {
                                "l": "Future-of-work / future-of-GTM tension",
                                "v": "Uses shifts like copilot to co-worker, campaign to workflow, search to answer engines, and human-directed to AI-enabled."
                            },
                            {
                                "l": "Leadership and credibility-led openings",
                                "v": "Opens with summit takeaways, CEO/VP insights, external expert quotes, and event presence to signal authority."
                            },
                            {
                                "l": "Customer outcome hooks",
                                "v": "Angles around measurable business outcomes such as faster launches, fewer returns, better GTM alignment, and compounding learning."
                            },
                            {
                                "l": "Narrative / story hooks",
                                "v": "Occasionally uses founder journeys, operator stories, or event stories to humanize technical themes."
                            }
                        ],
                        "trust": [
                            {
                                "l": "Two-decade expertise claim",
                                "v": "Company description says the firm combines two decades of full-funnel growth expertise."
                            },
                            {
                                "l": "Partner positioning",
                                "v": "Google and Marketo agency partner is stated in the company profile."
                            },
                            {
                                "l": "Real client use cases",
                                "v": "flexera and StudioX AR example, plus live campaign execution and summit learnings, provide concrete proof."
                            },
                            {
                                "l": "Executive visibility",
                                "v": "Founder and VP are consistently front and center in posts and event sessions."
                            },
                            {
                                "l": "Community and event proof",
                                "v": "Private invite-only summit and multiple external speaker mentions show peer-network credibility."
                            }
                        ],
                        "hookEx": [
                            "Product launches move fast. Visual production should too.",
                            "Your buyers aren't searching the way they used to, they're asking AI.",
                            "Most teams aren’t lacking effort or tools; they’re lacking context.",
                            "Three years ago, the Department of the Air Force Stanford AI Studio started as a side hustle between two officers with zero dollars and a shared table at a coffee stand."
                        ],
                        "audience": [
                            {
                                "l": "CMOs and VP Marketing at B2B companies",
                                "v": "Most frequent summit, GTM, and strategic transformation messaging is tailored to them."
                            },
                            {
                                "l": "RevOps / Marketing Ops / Demand Gen leaders",
                                "v": "Frequent references to workflows, data, orchestration, and measurement suggest this segment."
                            },
                            {
                                "l": "Founders / CEOs of growth-stage startups",
                                "v": "Company description explicitly says super-ambitious global startups; founder-led thought leadership is prominent."
                            },
                            {
                                "l": "Enterprise marketing and transformation leaders",
                                "v": "Enterprise AI, governance, and measurable outcomes are recurring themes."
                            },
                            {
                                "l": "Specialized vertical buyers",
                                "v": "Healthcare, med-tech, private equity, defense, and SaaS appear as named event/content communities."
                            }
                        ],
                        "features": [
                            {
                                "l": "AI-native growth system",
                                "v": "The central productized narrative tying all services together."
                            },
                            {
                                "l": "StudioX 3D rendering platform",
                                "v": "A named product with browser-based 3D rendering and AR use cases."
                            },
                            {
                                "l": "Human-directed AI agents",
                                "v": "Agents execute while strategists direct and review."
                            },
                            {
                                "l": "Knowledge bases and intelligence layer",
                                "v": "Client and company knowledge encoded into systems."
                            },
                            {
                                "l": "Governance / HITL controls",
                                "v": "Centralized control, accountability, permissions, and oversight for AI agents."
                            },
                            {
                                "l": "Demand gen services",
                                "v": "Marketing automation, content marketing, paid acquisition, SEO, web analytics, creative services, performance leads."
                            }
                        ],
                        "toneDist": [
                            {
                                "l": "Strategic / executive",
                                "v": "30"
                            },
                            {
                                "l": "Analytical / insight-led",
                                "v": "27"
                            },
                            {
                                "l": "Contrarian / provocative",
                                "v": "18"
                            },
                            {
                                "l": "Educational / framework-based",
                                "v": "14"
                            },
                            {
                                "l": "Community / event-driven",
                                "v": "7"
                            },
                            {
                                "l": "Promotional",
                                "v": "4"
                            }
                        ]
                    },
                    "campaigns": [
                        {
                            "cta": "Drop a comment below / learn more about the summit / sign up for updates",
                            "name": "Growth Marketing Summit 2026",
                            "posts": [
                                {
                                    "id": "7439458761288695808",
                                    "date": "2026-03-16T23:53:07.151Z"
                                },
                                {
                                    "id": "7441967332698251264",
                                    "date": "2026-03-23T22:01:17.182Z"
                                },
                                {
                                    "id": "7443079289517879296",
                                    "date": "2026-03-26T23:39:48.347Z"
                                },
                                {
                                    "id": "7444821853841539072",
                                    "date": "2026-03-31T19:04:08.057Z"
                                }
                            ],
                            "durationDays": 15
                        },
                        {
                            "cta": "Listen to the full episode / watch the full episode / drop it in the comments",
                            "name": "Spark Of Ages podcast",
                            "posts": [
                                {
                                    "id": "7429948687696445440",
                                    "date": "2026-02-18T18:03:28.918Z"
                                },
                                {
                                    "id": "7432122843158626304",
                                    "date": "2026-02-24T18:02:47.974Z"
                                },
                                {
                                    "id": "7437211301275381760",
                                    "date": "2026-03-10T19:02:30.928Z"
                                },
                                {
                                    "id": "7449894468868280320",
                                    "date": "2026-04-14T19:00:53.724Z"
                                }
                            ],
                            "durationDays": 55
                        },
                        {
                            "cta": "Learn more / explore / let’s connect / if you’re attending, let’s connect",
                            "name": "AI-native agency positioning",
                            "posts": [
                                {
                                    "id": "7429177762625531904",
                                    "date": "2026-02-16T15:00:06.058Z"
                                },
                                {
                                    "id": "7429902543519961088",
                                    "date": "2026-02-18T15:00:07.289Z"
                                },
                                {
                                    "id": "7432230144561360898",
                                    "date": "2026-02-25T01:09:10.622Z"
                                },
                                {
                                    "id": "7434960924131749888",
                                    "date": "2026-03-04T14:00:19.207Z"
                                },
                                {
                                    "id": "7475295771765014528",
                                    "date": "2026-06-23T21:16:36.268Z"
                                },
                                {
                                    "id": "7477839527164968960",
                                    "date": "2026-06-30T21:44:34.816Z"
                                },
                                {
                                    "id": "7488707461839859713",
                                    "date": "2026-07-30T21:29:52.359Z"
                                },
                                {
                                    "id": "7490108547393810432",
                                    "date": "2026-08-03T18:17:17.186Z"
                                },
                                {
                                    "id": "7495576333461254144",
                                    "date": "2026-08-18T20:24:18.971Z"
                                }
                            ],
                            "durationDays": 183
                        },
                        {
                            "cta": "Explore StudioX / read the full announcement / see how we brought it to life",
                            "name": "StudioX product storytelling",
                            "posts": [
                                {
                                    "id": "7475627769473900545",
                                    "date": "2026-06-24T19:15:50.690Z"
                                },
                                {
                                    "id": "7495576333461254144",
                                    "date": "2026-08-18T20:24:18.971Z"
                                }
                            ],
                            "durationDays": 55
                        }
                    ],
                    "messaging": {
                        "pains": [
                            "Disconnected marketing, sales, and client management teams",
                            "Too many tools with too little context",
                            "AI outputs that need heavy editing or manual cleanup",
                            "Slow, handoff-heavy agency workflows",
                            "Lack of visibility, accountability, and governance in agentic AI"
                        ],
                        "value": [
                            "Compounding growth from an AI-native operating model",
                            "Faster execution without sacrificing quality",
                            "Better decisions through context-rich systems",
                            "Turning expertise into scalable workflows",
                            "More predictable GTM outcomes across the funnel"
                        ],
                        "themes": [
                            {
                                "l": "AI-native growth system",
                                "v": 18
                            },
                            {
                                "l": "Human-directed / human-in-the-loop execution",
                                "v": 15
                            },
                            {
                                "l": "GTM and marketing transformation",
                                "v": 13
                            },
                            {
                                "l": "Knowledge, context, and judgment as moat",
                                "v": 11
                            },
                            {
                                "l": "Governance, trust, and control for AI agents",
                                "v": 8
                            },
                            {
                                "l": "Summit/podcast-led thought leadership",
                                "v": 14
                            }
                        ],
                        "benefits": [
                            "Execute campaigns faster",
                            "Scale quality content and operations",
                            "Improve decision-making with human judgment plus AI",
                            "Reduce execution drag and bottlenecks",
                            "Make every workflow smarter over time"
                        ],
                        "keywords": [
                            [
                                "AI-native",
                                19
                            ],
                            [
                                "agentic AI",
                                17
                            ],
                            [
                                "Growth Marketing Summit",
                                16
                            ],
                            [
                                "human-directed",
                                14
                            ],
                            [
                                "GTM",
                                13
                            ],
                            [
                                "knowledge base",
                                10
                            ],
                            [
                                "governance",
                                9
                            ],
                            [
                                "context",
                                9
                            ],
                            [
                                "human judgment",
                                9
                            ],
                            [
                                "AI agents",
                                9
                            ]
                        ]
                    },
                    "scorecard": [
                        {
                            "score": 8,
                            "metric": "Posting Consistency"
                        },
                        {
                            "score": 7,
                            "metric": "Content Diversity"
                        },
                        {
                            "score": 7,
                            "metric": "Engagement Quality"
                        },
                        {
                            "score": 9,
                            "metric": "Thought Leadership"
                        },
                        {
                            "score": 8,
                            "metric": "Product Marketing"
                        },
                        {
                            "score": 6,
                            "metric": "Employer Branding"
                        },
                        {
                            "score": 7,
                            "metric": "CTA Effectiveness"
                        }
                    ],
                    "textStyle": null,
                    "ctaLibrary": [
                        "Drop a comment below",
                        "Drop it in the comments",
                        "Let's connect",
                        "Explore StudioX",
                        "Read the full announcement",
                        "Watch the full episode",
                        "Listen to the full episode",
                        "Read the full keynote and 2026 Growth Marketing Session session library here",
                        "Sign up to receive updates",
                        "Subscribe to our mailing list",
                        "Learn more",
                        "Read our team member, Brijesh Nambiar's take",
                        "Read the full breakdown here"
                    ],
                    "engagement": {
                        "best": [],
                        "stats": [],
                        "worst": [],
                        "topics": [
                            {
                                "l": "AI-native growth systems / agentic AI",
                                "v": 31
                            },
                            {
                                "l": "Growth marketing summit / events",
                                "v": 22
                            },
                            {
                                "l": "GTM transformation / revenue ops",
                                "v": 14
                            },
                            {
                                "l": "Podcast insights / Spark of Ages",
                                "v": 13
                            },
                            {
                                "l": "Governance / trust / control",
                                "v": 10
                            },
                            {
                                "l": "Leadership / culture / hiring",
                                "v": 5
                            },
                            {
                                "l": "Product launch / StudioX / 3D rendering",
                                "v": 5
                            }
                        ],
                        "activity": []
                    },
                    "competitive": {
                        "recs": [
                            "Study Position² as a category-creation example: it is not selling 'AI tools' but an AI-native service model with a clear operating philosophy.",
                            "Track how they use founder-led and executive-led content to anchor credibility; their leadership voice is central to their brand.",
                            "Watch their event strategy closely; the Growth Marketing Summit functions as both demand capture and authority-building content engine.",
                            "Notice their emphasis on knowledge bases, governance, and workflow ownership rather than generic automation—this is their likely differentiation line.",
                            "Benchmark your own agency or consultancy against their 'human judgment + AI execution' narrative because they are reframing agency value around operating model change."
                        ],
                        "text": "Position² positions itself as an AI-native demand generation and growth marketing partner that combines human judgment, proprietary knowledge bases, and AI agents to execute marketing work at speed and scale. The profile and posts emphasize a shift from traditional agency services to an operating system model where strategy stays human-led while AI handles execution, monitoring, and optimization. It also leans heavily into executive education and community-building through its Growth Marketing Summit and Spark of Ages podcast, using those platforms to reinforce thought leadership around GTM transformation, agentic AI, governance, and the future of marketing. A notable part of the messaging is that buyers are changing, marketing systems must change, and organizations need an intelligence layer rather than just tools.",
                        "usps": [
                            "AI agents trained on client-specific knowledge bases and connected to live systems",
                            "Human-directed, AI-enabled operating model for strategy plus execution",
                            "Strong thought leadership through proprietary events and podcast content",
                            "Growth marketing expertise spanning GTM, RevOps, ABM, and AI transformation",
                            "Positioning around measurable growth rather than AI experimentation",
                            "Premium executive retreat / summit format for senior marketing leaders"
                        ],
                        "rivals": [
                            "Workato",
                            "Zapier",
                            "Clay",
                            "Demandbase",
                            "6sense",
                            "Sprinklr"
                        ]
                    },
                    "description": "Position² is a fast-growing Demand Generation company, venture backed by Accel Partners. We are dedicated to super-ambitious global startups and enterprise brands that have the goal to exponentially scale and grow their business. Position² offers a cohesive line of Demand Generation products which includes Marketing Automation, Content Marketing and Paid Acquisition and we are a proud Google and Marketo agency partner.",
                    "hookLibrary": [
                        {
                            "type": "Bold Statement",
                            "example": "Product launches move fast. Visual production should too."
                        },
                        {
                            "type": "Question",
                            "example": "Is your growth system built for how buyers buy today?"
                        },
                        {
                            "type": "Bold Statement",
                            "example": "Everyone has AI; few have an AI-Native Growth System."
                        },
                        {
                            "type": "Problem",
                            "example": "Too many tools, no real context, messaging that doesn't convert, strategy that can't adapt."
                        },
                        {
                            "type": "Story",
                            "example": "Three years ago, the Department of the Air Force Stanford AI Studio started as a side hustle between two officers with zero dollars and a shared table at a coffee stand."
                        },
                        {
                            "type": "Question",
                            "example": "Why Enterprise AI ROI is failing (and how to fix it)."
                        },
                        {
                            "type": "Question",
                            "example": "What if every employee had a digital coworker powered by an \"AI factory\" of specialized agents?"
                        },
                        {
                            "type": "Bold Statement",
                            "example": "AI Agents aren’t here to replace marketers. They’re here to replace the work that slows growth."
                        },
                        {
                            "type": "Problem",
                            "example": "Most teams aren’t lacking effort or tools; they’re lacking context."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "The funnel didn't break, it became an inference loop."
                        }
                    ],
                    "profile_url": "https://www.linkedin.com/company/position2/",
                    "imageryTypes": null,
                    "observations": null,
                    "topicClusters": [
                        {
                            "theme": "AI-native marketing systems and agentic execution",
                            "postCount": 24
                        },
                        {
                            "theme": "Growth Marketing Summit event promotion and recaps",
                            "postCount": 18
                        },
                        {
                            "theme": "Podcast clips and article shares from Spark of Ages",
                            "postCount": 20
                        },
                        {
                            "theme": "GTM transformation, RevOps, and buyer behavior",
                            "postCount": 12
                        },
                        {
                            "theme": "AI governance, trust, and centralized control",
                            "postCount": 10
                        },
                        {
                            "theme": "Leadership, hiring, and culture themes",
                            "postCount": 7
                        },
                        {
                            "theme": "StudioX product launch and customer use cases",
                            "postCount": 6
                        },
                        {
                            "theme": "Miscellaneous polls, social posts, and external amplification",
                            "postCount": 3
                        }
                    ],
                    "audienceDetail": {
                        "note": "Inferred from content & engagement, not LinkedIn follower demographics",
                        "seniority": [
                            {
                                "l": "Manager",
                                "v": 18
                            },
                            {
                                "l": "Director",
                                "v": 24
                            },
                            {
                                "l": "VP",
                                "v": 22
                            },
                            {
                                "l": "C-suite",
                                "v": 26
                            },
                            {
                                "l": "Individual contributor",
                                "v": 10
                            }
                        ],
                        "experience": [
                            {
                                "l": "10+ years",
                                "v": 48
                            },
                            {
                                "l": "5-10 years",
                                "v": 34
                            },
                            {
                                "l": "0-5 years",
                                "v": 18
                            }
                        ],
                        "industries": [
                            {
                                "l": "Advertising Services / Marketing Services",
                                "v": 28
                            },
                            {
                                "l": "Software / SaaS",
                                "v": 22
                            },
                            {
                                "l": "Enterprise Technology / AI",
                                "v": 16
                            },
                            {
                                "l": "Healthcare / MedTech",
                                "v": 10
                            },
                            {
                                "l": "Financial Services / Venture / Private Equity",
                                "v": 8
                            },
                            {
                                "l": "Government / Defense / Public Sector",
                                "v": 8
                            },
                            {
                                "l": "Other B2B industries",
                                "v": 8
                            }
                        ]
                    },
                    "employee_count": 227,
                    "followers_count": 8954,
                    "recommendations": [
                        {
                            "observation": "The account relies heavily on recurring narrative pillars: AI-native systems, human judgment, and executive-level transformation.",
                            "recommendation": "Differentiate by owning a narrower wedge, such as a specific industry, channel, or measurable outcome, so the brand is not only seen as another broad AI-native agency narrative."
                        },
                        {
                            "observation": "Summit and podcast content dominate the feed and create strong authority but can overshadow direct proof of service value.",
                            "recommendation": "Pair more of the thought leadership with concrete before/after outcomes, customer stories, and implementation evidence to make the category story more tangible."
                        },
                        {
                            "observation": "Position² frames itself as both service provider and product innovator through StudioX.",
                            "recommendation": "If you compete here, clarify whether you are a pure services brand, productized service, or software-led offer so prospects understand your model faster."
                        },
                        {
                            "observation": "The brand frequently comments on governance, trust, and operating models, which gives it a more strategic voice than typical agencies.",
                            "recommendation": "Build content that addresses operational risk, adoption friction, and implementation realities to compete on maturity rather than novelty."
                        },
                        {
                            "observation": "Engagement is strongest on executive, event, and founder-led posts, suggesting audiences respond to credibility and access.",
                            "recommendation": "Use senior leaders as visible content creators and include more first-person insights, not just company announcements, to match the trust dynamic they have built."
                        }
                    ],
                    "scorecardOverall": 7.7,
                    "public_identifier": "position2",
                    "messagingEvolution": [
                        {
                            "theme": "AI agents as execution layer; speed, quality, and agentic marketing delivery for agency work",
                            "period": "Feb 2026 - early Mar 2026"
                        },
                        {
                            "theme": "Growth Marketing Summit narrative; GTM transformation, agentic AI, knowledge moat, and executive thought leadership",
                            "period": "Mar 2026 - late Mar 2026"
                        },
                        {
                            "theme": "AI governance, enterprise trust, SaaS correction, and AI-native operating models with human judgment",
                            "period": "Apr 2026 - Jun 2026"
                        },
                        {
                            "theme": "AI-native growth systems, buyer intelligence, contextual discovery, and executive/event-led credibility; stronger emphasis on future of marketing and AI-native business outcomes",
                            "period": "Jul 2026 - Aug 2026"
                        },
                        {
                            "theme": "Product marketing expansion with StudioX, framing visual production and 3D rendering as part of the AI-native growth system",
                            "period": "Aug 2026"
                        }
                    ]
                },
                "created_at": "2026-08-19T05:21:28.086Z",
                "type": "COMPETITOR",
                "competitor_input": {
                    "companyId": "18464083",
                    "companyName": "SambaNova"
                },
                "competitor_output": {
                    "id": "18464083",
                    "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=h_Lw8QMoDlCjnyAMvcoSe8AWLMq9Qdncea5-sjKqJOo",
                    "name": "SambaNova",
                    "items": [
                        {
                            "id": "7495601205235314688",
                            "date": "7h",
                            "text": "In an AI agent workflow, different stages have different bottlenecks.\n\nPrefill is compute-heavy, making GPUs a strong fit. Decode is latency-sensitive and happens one token at a time, making it critical to optimize for memory movement and per-token speed.\n\nThat's where disaggregated inference comes in ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "mentions": [],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_in-an-ai-agent-workflow-different-stages-activity-7495601205235314688-M3bj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495601204211707904",
                            "attachments": [
                                {
                                    "id": "D5610AQGPX3Z49aguqw",
                                    "gif": false,
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGPX3Z49aguqw/mp4-720p-30fp-crf28/B56aAW5j8sK8Bk-/0/1787090587103?e=1787724000&v=beta&t=9RfX8_3Aosp9LZQp1AgD8XRO8Roz3mEqsZRJnGFVCio",
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
                            "repost_counter": 0,
                            "comment_counter": 1,
                            "parsed_datetime": "2026-08-18T22:03:08.864Z",
                            "reaction_counter": 9,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7495513010405339136",
                            "date": "13h",
                            "text": "Come meet the team building what’s next in agentic AI! \n\nGrab a drink, enjoy some food, meet the people behind the technology, and learn more about opportunities to join us.\n\nPlus, there may be some exclusive SambaNova swag involved. 👀\n\n📍 The Patio @ Rudy’s, Palo Alto\n😎 Hot Chips attendance not required\n🚐 Complimentary shuttle available from Hot Chips Symposium Stanford University. \n\n🎟️ Register here: https://luma.com/i6no3a2v",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "mentions": [
                                {
                                    "url": "https://www.linkedin.com/company/hotchips/",
                                    "start": 344,
                                    "length": 19
                                },
                                {
                                    "url": "https://www.linkedin.com/company/stanford-university/",
                                    "start": 364,
                                    "length": 19
                                }
                            ],
                            "provider": "LINKEDIN",
                            "is_repost": false,
                            "share_url": "https://www.linkedin.com/posts/sambanova_come-meet-the-team-building-whats-next-in-activity-7495513010405339136-8Skl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGsjpGEB0cq4PO5FU6_kA-jsDgXAZuHYGyo",
                            "social_id": "urn:li:ugcPost:7495513009654509569",
                            "attachments": [],
                            "permissions": {
                                "can_react": true,
                                "can_share": true,
                                "can_post_comments": true
                            },
                            "repost_counter": 7,
                            "comment_counter": 3,
                            "parsed_datetime": "2026-08-18T16:12:41.578Z",
                            "reaction_counter": 24,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7495155059354181633",
                            "date": "1d",
                            "text": "We talk a lot about premium inference. And we get asked about it a lot, too.\n\n1. What is it?\nFast, responsive serving for large, intelligent models, a distinct tier for workloads where speed really matters.\n\n2. Why does agentic AI need it?\nA chatbot answers once. An agent plans, calls tools, reads results, and keeps going. When every step generates more tokens, slow inference slows down the entire workflow.\n\n3. What makes it hard?\nSpeed, throughput, reliability, and cost all have to work together. Bigger models bring more memory movement and serving complexity, while higher concurrency can improve overall throughput but hurt the experience for individual users.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHSCAtFDrfRoA/mp4-720p-30fp-crf28/B56aAQjyyTH4Bk-/0/1786984217783?e=1787724000&v=beta&t=sxRD9hLx_lwp_a35WfDdbyULsDb4pnl1mmQi3nOybig",
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
                            "comment_counter": 4,
                            "parsed_datetime": "2026-08-17T16:30:19.397Z",
                            "reaction_counter": 19,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493782883715768320",
                            "date": "5d",
                            "text": "We're going to be at Hot Chips Symposium 2026 🔥\n\nRaghu Prabhakar will be presenting \"Dataflow at Scale: the SN50 RDU\" in the AI 2 session, a look at how dataflow architecture holds up when you push it to production inference scale.\n\nIf you're going to be at Stanford University next week, come find us.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                            "reaction_counter": 55,
                            "impressions_counter": 0
                        },
                        {
                            "id": "7493443489666408448",
                            "date": "6d",
                            "text": "What happens when bigger, smarter models also get faster? 🤔\n\nYou get a new category of AI experience: premium inference. \n\nAs models scale, speed becomes just as important as intelligence. For agents and other latency-sensitive workloads, every token matters.\n\nThe next step isn't just serving more tokens. It's serving better tokens, faster.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGgZ3vh7K1DHA/mp4-720p-30fp-crf28/B4EZ_4PIaNJQBk-/0/1786576147840?e=1787724000&v=beta&t=SDwl23Tr49MCHRfzXP6edjsbsbWaefER82fTr8rYXIM",
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
                            "date": "6d",
                            "text": "Congratulations to our friends at INFERCOM on winning Gold in the International Business Awards for AI-Driven Startup of the Year! \n\nTheir vision for sovereign AI is one we’re proud to support: delivering fast, production-ready inference while keeping data and models securely in Europe.\n\nWell deserved 👏",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "date": "6d",
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
                            "date": "1w",
                            "text": "Really enjoyed SemiAnalysis's deep dive on TileRT and ultra-high interactivity inference. Great explainer of why speed in AI responses comes down to how fast you can move data in and out of memory, not just how much compute you have, and how much work it takes to make a GPU act more like purpose-built dataflow hardware.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "date": "1w",
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
                            "reaction_counter": 18,
                            "impressions_counter": 0,
                            "repost_parsed_datetime": "2026-08-11T23:00:06.270Z"
                        },
                        {
                            "id": "7493055041961066496",
                            "date": "1w",
                            "text": "For years, the conversation around AI infrastructure was largely about how cheaply you could run a model.\n\nAgentic AI is changing that.\n\nWhen an agent plans, calls tools, reads context, and generates thousands—or even millions—of tokens across a workflow, latency compounds. Fast inference isn't just a better experience. It can determine whether the product works the way users expect.\n\nThat's creating a new category: premium inference.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkVIiHvQG74w/image-shrink_480/B56Z_yt1hmG4AQ-/0/1786483530282?e=1787724000&v=beta&t=5aLSkXgPsGxLZy1RBthp8WD2VAbD9G2CVXFl3zymK4U",
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
                            "date": "1w",
                            "text": "Training gets the headlines, but inference is where AI comes to life. Every token, every query, every agent interaction.\n\nWe're focused on making that inference faster and more efficient by tackling one of the biggest challenges at scale: data movement. ⚡",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHnbyZRMDPN3g/mp4-720p-30fp-crf28/B56Z_x2zWxHUBk-/0/1786469108530?e=1787724000&v=beta&t=AonVmKyUP--27lg1iGhAwd1H3wuCmaaNgYkDZtvY1Rk",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFGSDe3Ag6gpg/feedshare-shrink_800/B56Z_sroKKKMAc-/0/1786382291948?e=1788998400&v=beta&t=NevxfiPG14UVUmp87Tq8xRONIEbikS80_NjYH-wXivM",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGu6e4-7mrvOQ/feedshare-shrink_480/B56Z_sroSIKAAg-/0/1786382300797?e=1788998400&v=beta&t=KVbI74Gs8Wuu6c6UjbE3RYwQFITtv-4nsGdeoMU-Zm8",
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
                            "reaction_counter": 186,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHh3CssXN79cA/image-shrink_480/B4EZ_dnGYcIsAQ-/0/1786129442685?e=1787724000&v=beta&t=1zVzxttcOTklYqRXRTg6QoFPy0nBPuWj6aPK7UaxcuY",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQHeVL15OT_CZw/image-shrink_480/B4EZ_dnGiyIgAU-/0/1786129444051?e=1787724000&v=beta&t=yto9N7-Nf88P-WCzqMhTqOUnFuHIs0dsM9DaRLNBM1U",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D4E10AQEBM2VvusHXVw/image-shrink_480/B4EZ_dnGyjJYAQ-/0/1786129445289?e=1787724000&v=beta&t=-FOUPomCOo2k4sexPh96dNYjUQO18-ZNJyfiJIy8hW0",
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
                            "reaction_counter": 49,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEm2hdV3SUwvA/mp4-720p-30fp-crf28/B56Z_UMr0CK8Bk-/0/1785971525242?e=1787724000&v=beta&t=i08yjmUJT1-QZfqXy67mHfXYBH_sXhxZe2Wue2LC3bM",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                            "date": "2w",
                            "text": "Mohsen Moazami is truly a force in the industry and this interview just highlights it even more. \n\nWe're incredibly honored to have him on the SambaNova team! Welcome aboard, Mohsen 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                            "date": "2w",
                            "text": "Our squad just keeps getting stronger. 🦾  Mohsen Moazami is joining SambaNova as Vice Chair of Global Strategy & Partnerships, reporting to Rodrigo Liang. \n\nMohsen has supported some of the world's hottest technology companies, enabling global expansion, forging strategic relationships, and navigating major industry shifts.\n\nAs demand for premium inference continues to grow, he’s the ideal person to help lead our next chapter.\n\nWelcome to SambaNova, Mohsen!",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFttX39grkzSw/mp4-720p-30fp-crf28/B56Z_MteCDHUBk-/0/1785845902152?e=1787724000&v=beta&t=m1dM37DD2YxziLw8i_F6mMV5PsHNLBaRM9OPT-w9T64",
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
                            "reaction_counter": 150,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFUYvRf6NJ7WA/mp4-720p-30fp-crf28/B56Z_I1wx2G0Bo-/0/1785780970458?e=1787724000&v=beta&t=6bkBnx51FWTqxf_Hja5OWhojw6WBysp616BYmf0lnjc",
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
                            "reaction_counter": 54,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEQE5FMsJo_nw/mp4-720p-30fp-crf28/B56Z.5n4lwGUBk-/0/1785525672363?e=1787724000&v=beta&t=lEoX0tYFq_WInGFL5zvQc1d03XQvzISTcOqtkUuFsIo",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGERz0SiIF_ew/image-shrink_480/B56Z.0591RKEAQ-/0/1785446522796?e=1787724000&v=beta&t=RtYBSyZqHTyvBXTnqHWnpUNNNZx078J2u6PY68m1PIY",
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
                            "reaction_counter": 158,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/document/media/v2/D561FAQGk-PZ36GQqUw/feedshare-document-sanitized-pdf/B56Z.z5JEPJoA8-/0/1785429530337?e=1787724000&v=beta&t=YSUeMcXsu9KvmZ7l-wM70X0Nybn9YxSk3jM-uR3xKIM",
                                    "type": "file",
                                    "mimetype": "application/pdf",
                                    "file_name": "July 2026 SambaNova Lightning Digest",
                                    "file_size": 0,
                                    "unavailable": false,
                                    "url_expires_at": 1787724000000
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "date": "3w",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                            "date": "3w",
                            "text": "🔥 Hot take: An AI data center isn't defined by how many GPUs it has.\n\nIt's defined by how efficiently it runs AI.\n\nHere's what makes an AI data center different—and why inference is changing the architecture.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFCAZNvuyFGnA/image-shrink_480/B56Z.qw249KAAU-/0/1785276363208?e=1787724000&v=beta&t=GNmhLNdZJ1SIAhIue53JnvSc5lqtP5Xw3QAH3wtZcoM",
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
                            "date": "3w",
                            "text": "One of the standout conversations from RAISE Summit 🦾 \n\nRodrigo Liang, Monti Saroya, and Dylan Patel dug into one of the biggest shifts happening in AI today: the move from training to inference.\n\nAs models become more capable and agentic workloads become the norm, the conversation is no longer just about building bigger models, but about delivering them efficiently, economically, and at scale.\n\nDefinitely worth a watch ⬇️",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "date": "3w",
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
                            "date": "3w",
                            "text": "We tend to Linkup with the best partners. 😏\n\nFast inference is only part of the equation. Enterprise AI also needs trustworthy, up-to-date information.\n\nThat's why we're excited to partner with Linkup to help devs build AI applications that combine high-performance inference with fresh, verifiable web retrieval.",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "date": "3w",
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
                            "reaction_counter": 33,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGTddOEG4rdFQ/mp4-720p-30fp-crf28/B56Z.ltbVrGcB8-/0/1785191579781?e=1787724000&v=beta&t=bc63MQMaGAqO2nLRN9eFn1Qq_DgnzevCdaPGv_cxv4E",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE5CULZ2NepCA/mp4-720p-30fp-crf28/B56Z.VgW9dIMBo-/0/1784919726218?e=1787724000&v=beta&t=G_eejG_LCA_6mADoCKGDj-l5W48kctOETgvdwJNFxVU",
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
                            "reaction_counter": 82,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEkg2lp55M5aA/image-shrink_480/B56Z.P8txCIQAQ-/0/1784826486149?e=1787724000&v=beta&t=uqMwssmLt-igx6UGyfSB7U42JtD6jCTKvMozGDxd9Dc",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHPfWWmpH5ViA/feedshare-shrink_480/B56Z.LwxtzKEAg-/0/1784756264748?e=1788998400&v=beta&t=GTXp1LvXQYNc34CSmUfkgqpEX4MvhjJ4r8c1k1w-Df4",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFK1UcwR0bNZQ/image-shrink_480/B56Z.LHtS6KcAQ-/0/1784745481660?e=1787724000&v=beta&t=mPJ8qq2qAov_zAqUVaBccyC9zkpjzwVU8jhB0SDSYkA",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHgbReKZJhRog/image-shrink_480/B56Z.Kt29KIUAQ-/0/1784738706716?e=1787724000&v=beta&t=2NubQ4kBQGuJ2p3APvFnszl6C2UgFTd5HcmC-blnaV0",
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
                            "date": "4w",
                            "text": "Prompt caching is now live on SambaCloud, starting with MiniMax M2.7.\n\nIf your app keeps sending the same long system prompt, reference doc, or set of examples on every call, this is for you. Those repeated tokens now get pulled from cache instead of reprocessed from scratch, automatically, with nothing to change on your end.\n\nWhat that actually gets you:\n\nCached tokens cost 90% less: $0.06 per million instead of $0.60 for MiniMax M2.7.\n\nTime-to-first-token barely moves as context grows. Up to 91% faster at longer lengths, dropping from 40.6 seconds to 3.7 at 192k tokens.\n\nYou can also see it working. Every response now shows exactly how many tokens hit the cache.\n\nSame workload, same code, just faster and cheaper. https://bit.ly/4b3KvBw",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQG2gSZd0kd6vg/image-shrink_480/B56Z.F8UAQIMAY-/0/1784658608658?e=1787724000&v=beta&t=XEZ1BCsAQS6BHB7wNGSu-dGCv6SLqEE3NEFwJ0O5ItI",
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
                            "date": "4w",
                            "text": "Great news from down under 🇦🇺 \n\nMassive congratulations to our friends at SCX ai on announcing their IPO on the ASX to raise $40M.\n\nWe're proud to partner with SCX to bring the world's first RDU-powered sovereign AI cloud to Australia, giving enterprises and government agencies access to high-performance AI infrastructure while keeping data secure and sovereign.\n\nLet's go, SCX team! We're excited to see what's next 🦾",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFTgJxTSzz6zg/image-shrink_480/B56Z.BHoS6KEAQ-/0/1784577689271?e=1787724000&v=beta&t=Y06Qin5TqgGgcUibrpNt9hkmUQsjyf2bMb7Vp3aUyV0",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHr7zsZRuf1wA/image-shrink_480/B56Z9x4fa0GUAQ-/0/1784322062243?e=1787724000&v=beta&t=Xy7ecmNoSpyOxLALSv2deJnbnN5txzA49D98JlexdoI",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEqQK0FkAw5MA/image_225_300/B56Z9x7Ta3G4AE-/0/1784322799463?e=1787724000&v=beta&t=GR7lmJyIT0MA3ENIS-eP7fSdFB2wrWw0SI0gAqGGzaE",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG2RCeqyCcfGg/feedshare-shrink_800/B56Z9s0QxgGcAc-/0/1784237067607?e=1788998400&v=beta&t=JMED6EE5JYC2UUBenxKb60THeIDkwDX0yc2ESftRo5U",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEiLaoYHWICvg/mp4-720p-30fp-crf28/B56Z9sT5pzGgBk-/0/1784228592092?e=1787724000&v=beta&t=3TkcDB-jiJeJaS58CzTNe5MHNgXitJAA3al5pp8Ll0o",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGc3Qq0vksttA/image-shrink_480/B56Z9nnJjUKUAQ-/0/1784149744349?e=1787724000&v=beta&t=Y-hKsAcSS2Mow-RAHcE0Uvb9_oTObgov08HQ0_yX0YM",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFLBpGvUFCJpQ/image-shrink_480/B56Z9hZ05qGoAQ-/0/1784045588395?e=1787724000&v=beta&t=TIPkZ-XxPOQaSZjopMSTOmVq5d1qo6TW0fOB_8pUNI0",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGbtCCanRdFzw/image-shrink_480/B56Z9dwdgwIgAQ-/0/1783984413038?e=1787724000&v=beta&t=yYLSsFpQJqdRK32BjYzlMnwwrB4LCACbOBva62aG5d0",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFIxPFNXEnj_w/mp4-720p-30fp-crf28/B56Z9QAexlKEBk-/0/1783753767445?e=1787724000&v=beta&t=ch9oRBfeLwPjYiiOpw8MkWNU4_og1rRGM1ay_PLRDvw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFu_svLbhEAYA/mp4-720p-30fp-crf28/B56Z9IaQ5XGcB8-/0/1783626324931?e=1787724000&v=beta&t=1_0MonaQ-9rTM_IiM0jgv5-r0I4JSZHrdgC82F13Ffw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQG2K0WeGCKJaQ/mp4-720p-30fp-crf28/B56Z9C5CQwHYBk-/0/1783533701145?e=1787724000&v=beta&t=5qPY3EiON0hmulOLzMXf8_OnjpHHQSX2nhQ5KseW1oQ",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQE0fLp_0JUA8w/mp4-720p-30fp-crf28/B56Z9Bmbk2GoBk-/0/1783512023366?e=1787724000&v=beta&t=Q04xew0OEtFjIz2Sy42ys1THpTTI8LgRI2QtsDc8oEk",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEQ7bxIRatgmw/image-shrink_480/B56Z9BRyldJoAQ-/0/1783506610814?e=1787724000&v=beta&t=EfFc1ZuvAc-t3FNug3mCO4o782cFIf1h5ZskLComBHw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEafKuXDanhIg/feedshare-shrink_800/B56Z9A6HeyHcAc-/0/1783500404961?e=1788998400&v=beta&t=Lv_R7-JW4Qkyh182fsSYG0WRoDgyHjfnQKCmfOvhivs",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQHkiVEpV6Vh9w/image_350_624/B56Z9x7R_.HYAc-/0/1784322793661?e=1787724000&v=beta&t=zzVSLMlzbsNiBIW_iq9_OUS3IkpiT5MO4lvlhy9XjvI",
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
                            "reaction_counter": 543,
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQFRVsngJH6A3A/image-shrink_480/B56Z89VGBQIMAQ-/0/1783440367960?e=1787724000&v=beta&t=oD7mU_xCwIOnAQ40BuSZ9-AdUdJBd3DUyy0JFZJnwV8",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFG7bzdLEPB-w/mp4-720p-30fp-crf28/B56Z87ZP5SGUBk-/0/1783407903801?e=1787724000&v=beta&t=klrSiXrcJBK2T8g2svKWggaab4J5taLjAx5vrutHU_w",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQGS02HcmLp2xw/image-shrink_480/B56Z85FeD0JoAU-/0/1783369163310?e=1787724000&v=beta&t=SrIzYEgjU5LsTNuK-3kxSzv5dSvG79bCebutClR0uYw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQH_1TKK-aINhQ/mp4-720p-30fp-crf28/B56Z8pulwXGsBk-/0/1783111508197?e=1787724000&v=beta&t=KAifXBfTTeF3GdcjJYC17Z3f7zUkabtXLtelgRQiOiU",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGN-tKqZUEVKA/mp4-720p-30fp-crf28/B56Z8kE_zqGcBk-/0/1783016756370?e=1787724000&v=beta&t=uEcrOordL52nK1I4WO8J3xn0CMdQ_vj8rP9lCYggCc4",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEexi1jC25Quw/mp4-720p-30fp-crf28/B56Z8fttzEHcBk-/0/1782943511022?e=1787724000&v=beta&t=srZ6c1W2qiXwAaiAHfvo9KxT9wPLwzuCy7kJ5kAlNAQ",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5610AQEcWozzaLK0pg/image-shrink_480/B56Z8fGGxEJoAU-/0/1782933122387?e=1787724000&v=beta&t=2o8KVI8v29Bs_csbxqGEm3PEqr6IxsooomcfpKHvvCc",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF7yVO6LOebGw/mp4-720p-30fp-crf28/B56Z8Zw1VQGUCA-/0/1782843661149?e=1787724000&v=beta&t=CRQYSOhfZzBRxhofxaURQ8qGU-Dz_lcDzktcwSjze8g",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQGVP0bRv724iA/mp4-720p-30fp-crf28/B56Z8VR7XHG8CA-/0/1782768451311?e=1787724000&v=beta&t=kEbQyQLkeuAB4amQpZECwNFg_1absGL7JMz6_ZgTnLk",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEnWV3l5YR92w/feedshare-shrink_480/B56Z8EQz9HGgAg-/0/1782482944028?e=1788998400&v=beta&t=VIvUfNWXeR4rqSet-y_LHPvbe_7PoHnqTSLbtTzjHOc",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4kh42i50uVQ/feedshare-shrink_800/B56Z8EQ0ASLAAc-/0/1782482944803?e=1788998400&v=beta&t=Blbaw5FPe42NzGJUARmitfqXUJWbQVMzqLV3W5K-IQ0",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGP3Lx8Gu4OTw/feedshare-shrink_800/B56Z8EQ0BXG0Ac-/0/1782482944890?e=1788998400&v=beta&t=WvVYG5KZjMibs3aYZMPnb4WwhogrUmbyTIFn7m6xRr4",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQH9nMXyL4OuUQ/mp4-720p-30fp-crf28/B56Z8AtLXAIUB8-/0/1782423279823?e=1787724000&v=beta&t=7W8AHM-AT3Lyc17EoRZA-tIfXEggCicSpwDcRXU0fVw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7475974544864858112",
                                "url": "https://www.linkedin.com/pulse/sambanova-lightning-digest-june-2026-sambanova-e7ytc?trackingId=1zd2bpnfLTY85MDJ7F%2BsaQ%3D%3D",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEW0ep3Epfpgg/feedshare-shrink_800/B56Z7xSCtsIMAc-/0/1782164499726?e=1788998400&v=beta&t=EzfebHLgbNkkAO3Pm3eDs8qOyCHv3RQLJVgBCpXAAPE",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF5r2D5wj6E5Q/mp4-720p-30fp-crf28/B56Z7c98bQHcB8-/0/1781823705479?e=1787724000&v=beta&t=QOxkat43Bx5ExrXZx2fQranBRqM1pdGwa6GyEs1jDlc",
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
                            "date": "2mo",
                            "text": "One chip to rule them all? No thanks.\n\nAI inference isn't one workload, it's a series of very different jobs. That's why companies are pairing GPUs, RDUs, and CPUs together, letting each do what it does best.\n\nThe next generation of inference is about matching the right chip to the right task, because no single architecture wins every leg of the race. 🦾\n\nLet's chat about it in Paris at RAISE Summit 2026: https://lnkd.in/gv7b3jrq",
                            "author": {
                                "id": "18464083",
                                "name": "SambaNova",
                                "is_company": true,
                                "public_identifier": "sambanova",
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG4AhWM7xWnDg/feedshare-shrink_800/B56Z7b7p0dIoAg-/0/1781806354100?e=1788998400&v=beta&t=IOmRcRF7SZniwHB1gO05H6FZok6gEm3GkUUQLykrZVE",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8136203128470111684",
                                "url": "https://luma.com/jacuxzd6?tk=vl1kFT",
                                "title": "Inference Above Paris · Luma",
                                "author": "luma.com",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQHbnjSMG73GSA/articleshare-shrink_480/B56Z7SgmYoIoAc-/0/1781648222013?e=1787724000&v=beta&t=KDxSx2nr6upajFrM17rihF9KywPuDdiz3QeM6c2VUY0",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHK4BQyIdzzoA/mp4-720p-30fp-crf28/B56Z7RvizRIoB8-/0/1781635364310?e=1787724000&v=beta&t=GjZzlhYnTnnBLd58wDefTrAZkIyneVt2HDY5mYjKdQw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQFbe0dJu3l4BA/mp4-720p-30fp-crf28/B56Z7NSoFSJACA-/0/1781560676005?e=1787724000&v=beta&t=x7xilrR5Tzfd9UGN41jtJZgP3ItBRyLByihOPcGVTxs",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGez8YeNJHA3A/feedshare-shrink_800/B56Z69KH1dHUAc-/0/1781290008169?e=1788998400&v=beta&t=f7LTtSAOEU1UhdzwXcCpnNN0U2C23UN317LTjbwR-cQ",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG18UuOk2waPw/feedshare-shrink_800/B56Z68XLd2IoAc-/0/1781276653690?e=1788998400&v=beta&t=gVnknb-a3bglkZe04kIooiNVOjF_Up3wCOSBM_2xPN0",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "6930037481944098972",
                                "url": "https://sambanova.ai/blog/gemma-4-31b-running-fastest-on-sambacloud?utm_source=linkedin&utm_medium=organic&utm_content=blog-announcement",
                                "title": "Gemma 4 31B Runs Fastest on SambaCloud",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQEE5jmDQUYh4A/articleshare-shrink_800/B4DZ8WUQlmK8A0-/0/1782785838268?e=1787724000&v=beta&t=VlmYXN5SXFrctp19pD1mRCot08m2LlMkgKqa6WKn99Y",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHUlYUsKeMqsg/mp4-720p-30fp-crf28/B56Z6zxX2dHUB8-/0/1781132572819?e=1787724000&v=beta&t=qjSt5Y2QNcmcryikOx3sk_juzaK9EKSqbRlRURsNNW8",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEzeXgmJRMISA/feedshare-shrink_800/B56Z6zgZHSGcAg-/0/1781128075829?e=1788998400&v=beta&t=LBdGHAgPWRTEJgVIF0doqEROXqVwfW1HCxLo0Anviqs",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHwKSwdxIijXQ/feedshare-shrink_800/B56Z6zgZLfIUAc-/0/1781128075651?e=1788998400&v=beta&t=lk3kDasEUiZ-ki3AH9GRcB335c3ES2XaXoUZGsLtEnc",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGdomUuBF0P8A/feedshare-shrink_800/B56Z6zgZHkGoAc-/0/1781128075232?e=1788998400&v=beta&t=8DATlyBpwG268z0f6Qz-YqV4TUWhkp1qTNe4wMmw9n4",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFhQBeC53Vz9Q/feedshare-shrink_800/B56Z6ySjn6JoAc-/0/1781107669764?e=1788998400&v=beta&t=KlRGbJkH1T2q8Oo-te6m--6D3JOp0bqm8-73INbv6ok",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQHtX-AF0MB8qw/mp4-720p-30fp-crf28/B56Z6uixRXIoB8-/0/1781044818140?e=1787724000&v=beta&t=TBpfmlUuEK35XjWz-VUb0ufW1waoeHSyAEC6Zgk9y-Q",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://dms.licdn.com/playlist/vid/v2/D5605AQEk1fnU2Uwx8w/mp4-720p-30fp-crf28/B56Z6tkCABJMCA-/0/1781028368743?e=1787724000&v=beta&t=bBO18gKCOeP1nOEUP44bIJYywUI_VNg7xKnQGnqQ7sw",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "8862463306152232245",
                                "url": "https://itbrief.co.uk/story/vista-launches-vector-core-compute-for-ai-inference",
                                "title": "Vista launches Vector Core Compute for AI inference",
                                "author": "itbrief.co.uk",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D5627AQGkt5Y2hO2H-w/articleshare-shrink_800/B56Z6oSq7DKQAc-/0/1780939928689?e=1787724000&v=beta&t=UssLVr9JWwPbHLI7gFUaooKT0ktPrRIhsqDGd5vLrYo",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQH9OGpsEh5MEg/feedshare-shrink_480/B56Z6nay5MKAAg-/0/1780925280732?e=1788998400&v=beta&t=VwFRz4wo9t1cVQD_5mMzpAcoGqReSavfpbs3q9tK4DY",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFIrRBCkyjC3Q/feedshare-shrink_800/B56Z6naypiKAAg-/0/1780925279284?e=1788998400&v=beta&t=V2YDT80XsRhqZthlC3xgAoAxyCLsid7Ljkmdw8RRj54",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEreEEOC5Q8JQ/feedshare-shrink_800/B56Z6nayq4JoAg-/0/1780925279686?e=1788998400&v=beta&t=IDsqFGkvTNSJLlCMZgFnvtdF7bZ5y55fsNERBy4JtCs",
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQHYxBs9tnbSJw/feedshare-shrink_800/B56Z6naysVIQAc-/0/1780925279722?e=1788998400&v=beta&t=27VycmTtGy3LFnZLegWmKBmbpfnW4QiR0Ahac0s_Uy4",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D4E22AQGSx7OgiHli3A/feedshare-shrink_480/B4EZ6Z211CLAAg-/0/1780697751172?e=1788998400&v=beta&t=5UXPOtS-k059y4O12dZBojpR69m2ecw-m7NOByvEKrM",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQEq3A2dsXXc2g/feedshare-shrink_800/B56Z6Yp4iaJwAc-/0/1780677577062?e=1788998400&v=beta&t=IQK4l2r7w9MBkItZkN8RS872MOnYc1v-6wralQMhiII",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7033512164286146778",
                                "url": "https://sambanova.ai/general-compute-builds-fastest-inference-cloud-with-sambanova?utm_source=linkedin&utm_medium=organic&utm_content=customer-partner",
                                "title": "General Compute builds the world’s fastest inference cloud with SambaNova",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQH3o0VwU_d5XA/articleshare-shrink_800/B4DZ6Zqd2pIsAQ-/0/1780694507763?e=1787724000&v=beta&t=DAdnNe7vM4fv_vRfTlZOmKSqMY8CJXBry3LC646Ka1I",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQE_uOQGhJlkfw/feedshare-shrink_800/B56Z6Tpoe1H0Ag-/0/1780593625236?e=1788998400&v=beta&t=9mPUa7g8nCzbvOmkPAyJ9zeD5kXLWHLj3YByBzDoXjk",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGfeTRvThdrTg/feedshare-shrink_800/B56Z6TgK2sHUAc-/0/1780591144612?e=1788998400&v=beta&t=DR-AtDh83LkkMo9i5snaYMXpL7OFR8h7hirJN_GNrkI",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQG8AT4Cln604g/feedshare-shrink_800/B56Z6OP0ZVKwAc-/0/1780502972235?e=1788998400&v=beta&t=aR6A-W0t2ERG8xsJwEV5hzUHoX15iSr8zz6GXRIQH1c",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
                            },
                            "object": "Post",
                            "article": {
                                "id": "7082179349112251126",
                                "url": "https://sambanova.ai/blog/first-disaggregated-inference-demo-for-ai-agents-live?utm_source=linkedin&utm_medium=organic",
                                "title": "The First Disaggregated Inference Demo for AI Agents Is Live",
                                "author": "sambanova.ai",
                                "picture_url": "https://media.licdn.com/dms/image/sync/v2/D4D27AQHNe-nM8QKR7w/articleshare-shrink_800/B4EZ_8WlJYHkA4-/0/1786645207079?e=1787724000&v=beta&t=zug_D5FOoga6yNWQc5KDIs3jEhXY_wYz1SYte4f7mrk",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQFidyAKpPIuuQ/feedshare-shrink_800/B56Z6NYyKjKMAc-/0/1780488545144?e=1788998400&v=beta&t=eKedC_xHQ7hnfbf1A7R1H5E0fZnogZB5Xiw1M6WmpGk",
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                "profile_picture_url": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_200_200/B56ZyMpSXcHQAI-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=OXWy6SBx8jK-j7JNQY1Rf744N_FU3DrSfvVrr8b2hks"
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
                                    "url": "https://media.licdn.com/dms/image/v2/D5622AQGp25ZgnRghQg/feedshare-shrink_480/B56Z6JNPP1IcAg-/0/1780418410123?e=1788998400&v=beta&t=ACBnv91c_e7wr0I5X-aaBe8nKrD-mokpSfAzrvIDhcM",
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
                        }
                    ],
                    "stats": [
                        {
                            "h": "Followers",
                            "v": "98,183"
                        },
                        {
                            "h": "Posts analyzed",
                            "v": "100"
                        },
                        {
                            "h": "Core narrative",
                            "v": "Inference / premium inference / disaggregated inference"
                        },
                        {
                            "h": "Proof signals",
                            "v": "Benchmarks, customer wins, media, events, and partnerships"
                        }
                    ],
                    "company": {
                        "url": "https://www.linkedin.com/company/sambanova/",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=h_Lw8QMoDlCjnyAMvcoSe8AWLMq9Qdncea5-sjKqJOo",
                        "name": "SambaNova",
                        "posts": 100,
                        "period": "recent organic company-page posts analyzed from 2026-06-02 to 2026-08-18",
                        "industry": "Computer Hardware Manufacturing",
                        "followers": 98183
                    },
                    "profile": {
                        "id": "18464083",
                        "logo": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_400_400/B56ZyMpSXcHQAY-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=h_Lw8QMoDlCjnyAMvcoSe8AWLMq9Qdncea5-sjKqJOo",
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
                        "logo_large": "https://media.licdn.com/dms/image/v2/D560BAQFuibOs573xGQ/company-logo_100_100/B56ZyMpSXcHQAQ-/0/1771886159588/sambanova_logo?e=1788998400&v=beta&t=SG0s3WbjcWTsIRMoKPz6GooL5uVq05I3z5t52FXf_ng",
                        "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                        "is_employee": false,
                        "profile_url": "https://www.linkedin.com/company/sambanova/",
                        "is_following": false,
                        "employee_count": 400,
                        "followers_count": 98183,
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
                        "text": "SambaNova’s organic LinkedIn strategy is highly consistent and product-led: it repeatedly frames the market around inference, especially premium inference, disaggregated inference, and agentic AI. The content mixes technical explainers, benchmark claims, event coverage, customer wins, and executive/media appearances to reinforce credibility while pushing a clear architecture narrative. It also uses partnerships and enterprise proof points to position the company as a real-world infrastructure layer for production AI, not just a chip vendor.",
                        "moves": [
                            "Repeated the same core narrative across many posts: training is less important than inference, and inference should be split across GPUs, RDUs, and CPUs.",
                            "Leans heavily on third-party validation and benchmarks (e.g., SemiAnalysis, Artificial Analysis, media interviews) to strengthen performance claims.",
                            "Uses events like RAISE Summit, COMPUTEX, Hot Chips, and Forbes/CNBC appearances to create recurring visibility and thought leadership.",
                            "Balances technical education with commercial proof: customer logos, deployments, financing milestones, and partner announcements.",
                            "Frequently highlights sovereignty, security, air-cooled deployment, and existing datacenter compatibility as differentiators."
                        ]
                    },
                    "website": "http://www.sambanova.ai",
                    "creative": {
                        "freq": [
                            {
                                "l": "Weekly+",
                                "v": 78
                            },
                            {
                                "l": "Multiple times per week",
                                "v": 22
                            }
                        ],
                        "formats": [
                            {
                                "l": "Video",
                                "v": 35
                            },
                            {
                                "l": "Single Image",
                                "v": 28
                            },
                            {
                                "l": "Text-only",
                                "v": 22
                            },
                            {
                                "l": "Document-Carousel",
                                "v": 10
                            },
                            {
                                "l": "GIF",
                                "v": 5
                            }
                        ],
                        "imagery": [
                            "Chip and rack infrastructure visuals",
                            "Executive interview stills and keynote/event photos",
                            "Product architecture diagrams and benchmark graphics",
                            "Conference booth / stage / networking imagery",
                            "Celebratory milestone creative tied to funding and partnerships"
                        ],
                        "swatches": [
                            [
                                "#0F172A",
                                "Midnight Navy"
                            ],
                            [
                                "#1D4ED8",
                                "Electric Blue"
                            ],
                            [
                                "#00B8D9",
                                "Cyan"
                            ],
                            [
                                "#7C3AED",
                                "Violet"
                            ],
                            [
                                "#F97316",
                                "Orange"
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
                            "type": "event",
                            "title": "First live disaggregated inference demo for AI agents at COMPUTEX / VC2"
                        },
                        {
                            "date": "2026-06-08",
                            "type": "event",
                            "title": "Vector Core Compute (VC2) publicly highlighted as a disaggregated inference cloud"
                        },
                        {
                            "date": "2026-06-11",
                            "type": "feature_release",
                            "title": "Gemma 4 31B running fastest on SambaCloud"
                        },
                        {
                            "date": "2026-07-08",
                            "type": "funding",
                            "title": "First close of $1B Series F at $11B valuation"
                        },
                        {
                            "date": "2026-07-08",
                            "type": "partnership",
                            "title": "JPMorganChase selected SambaNova RDUs for secure on-prem AI inference"
                        },
                        {
                            "date": "2026-07-21",
                            "type": "feature_release",
                            "title": "Prompt caching launched on SambaCloud"
                        },
                        {
                            "date": "2026-07-29",
                            "type": "hiring",
                            "title": "Rich Heaton joined as EVP of Software"
                        },
                        {
                            "date": "2026-07-29",
                            "type": "hiring",
                            "title": "Matt Padfield joined as Chief Financial Officer"
                        },
                        {
                            "date": "2026-08-04",
                            "type": "hiring",
                            "title": "Mohsen Moazami joined as Vice Chair of Global Strategy & Partnerships"
                        }
                    ],
                    "personas": [
                        {
                            "persona": "VP/Director of AI Infrastructure",
                            "industry": "Enterprise Technology / AI Infrastructure",
                            "rationale": "Inferred from repeated messaging about production inference, heterogeneous stacks, and enterprise deployment. This is not based on follower data; it is inferred from the content themes and the kinds of buyers the posts are written for.",
                            "seniority": "VP/Director",
                            "confidence": 92
                        },
                        {
                            "persona": "Head of Platform Engineering / ML Engineering Manager",
                            "industry": "Software / AI Platform",
                            "rationale": "The posts repeatedly speak to developers, coding agents, APIs, prompt caching, and deployment details, suggesting an audience responsible for implementation and platform decisions. This is an inference from content, not real audience analytics.",
                            "seniority": "Manager/Director",
                            "confidence": 85
                        },
                        {
                            "persona": "Data Center / Cloud Infrastructure Leader",
                            "industry": "Data Centers / Cloud Services",
                            "rationale": "Messaging about air-cooled systems, power constraints, existing datacenters, and neocloud partners indicates a segment focused on operational infrastructure and facility constraints. Inferred from the content, not follower demographics.",
                            "seniority": "Director/VP",
                            "confidence": 79
                        },
                        {
                            "persona": "CIO / CTO in regulated enterprise",
                            "industry": "Financial Services / Healthcare / Public Sector",
                            "rationale": "Security, sovereignty, on-prem AI, and JPMorganChase-style proof points imply appeal to leaders in regulated environments. This is inferred from the company’s organic posts and positioning.",
                            "seniority": "C-level",
                            "confidence": 76
                        },
                        {
                            "persona": "AI Investor / Analyst / Strategic Partner",
                            "industry": "Venture Capital / Private Equity / Research",
                            "rationale": "Frequent validation through financing news, benchmark citations, and partner shoutouts indicates the content is also designed to influence investors, analysts, and ecosystem partners. This is an inference from the posts, not real LinkedIn follower data.",
                            "seniority": "Senior IC / Partner",
                            "confidence": 74
                        }
                    ],
                    "strategy": {
                        "ctas": [
                            {
                                "l": "Read the full article in the comments",
                                "v": "Used to drive engagement and send readers to supporting long-form content."
                            },
                            {
                                "l": "Watch the full interview below",
                                "v": "Common CTA for CNBC, Forbes, and other media appearances."
                            },
                            {
                                "l": "See the numbers for yourself ⬇️",
                                "v": "Used when citing benchmark claims and validation."
                            },
                            {
                                "l": "Learn more:",
                                "v": "Used on explainer-style posts and product education content."
                            },
                            {
                                "l": "Join us in Paris",
                                "v": "Used for event promotion around RAISE Summit."
                            },
                            {
                                "l": "RSVP below ⬇️",
                                "v": "Used for event and reception invites."
                            },
                            {
                                "l": "Open positions in the link below ⬇️",
                                "v": "Used for hiring and employer-brand content."
                            },
                            {
                                "l": "Come find us",
                                "v": "Used in conference/event posts to encourage in-person booth visits."
                            }
                        ],
                        "hooks": [
                            {
                                "l": "Inference-first positioning",
                                "v": "The feed repeatedly reframes AI infrastructure around inference, not training, making efficiency, latency, and token economics the core narrative."
                            },
                            {
                                "l": "Disaggregated architecture",
                                "v": "Posts consistently explain why prefill, decode, and orchestration should run on different hardware, especially GPUs, RDUs, and CPUs."
                            },
                            {
                                "l": "Sovereignty and security",
                                "v": "The company ties performance to data sovereignty, on-prem deployment, and secure production AI, especially for enterprises and governments."
                            },
                            {
                                "l": "Proof via benchmarks",
                                "v": "A major credibility pattern is external validation: SemiAnalysis, Artificial Analysis, Forbes, CNBC, Bloomberg, and customer deployments."
                            },
                            {
                                "l": "Production-ready economics",
                                "v": "Messaging emphasizes lower cost, lower power, existing datacenters, and real-world deployment rather than lab demos."
                            }
                        ],
                        "trust": [
                            {
                                "l": "Independent benchmark validation",
                                "v": "SemiAnalysis and Artificial Analysis are repeatedly cited to validate performance claims."
                            },
                            {
                                "l": "Customer proof points",
                                "v": "JPMorganChase, General Compute, TACC, Argonne, SCX ai, and Linkup are used as evidence of adoption."
                            },
                            {
                                "l": "Executive media presence",
                                "v": "Rodrigo Liang appears in CNBC, Bloomberg, Forbes, TechCrunch, Washington Post Live, and other outlets."
                            },
                            {
                                "l": "Partner credibility",
                                "v": "Frequent mentions of Intel, Vista Equity Partners, Cambium Capital Management, General Atlantic, and others reinforce ecosystem legitimacy."
                            },
                            {
                                "l": "Technical specificity",
                                "v": "Posts explain prefill/decode/orchestration, memory movement, air cooling, token throughput, and architecture choices."
                            }
                        ],
                        "hookEx": [
                            "The AI industry has been treating inference like it's one workload. It's not.",
                            "The datacenter power crisis isn't coming. It's already here.",
                            "What happens when bigger, smarter models also get faster? 🤔",
                            "What is disaggregated inference for AI agents?"
                        ],
                        "audience": [
                            {
                                "l": "Enterprise AI infrastructure buyers",
                                "v": "High"
                            },
                            {
                                "l": "AI/ML engineers and platform developers",
                                "v": "High"
                            },
                            {
                                "l": "Data center and cloud service provider operators",
                                "v": "Medium"
                            },
                            {
                                "l": "Government, sovereignty, and research-compute stakeholders",
                                "v": "Medium"
                            },
                            {
                                "l": "Investors, analysts, and strategic partners",
                                "v": "Medium"
                            }
                        ],
                        "features": [
                            {
                                "l": "Disaggregated inference",
                                "v": "A core feature repeatedly described as splitting prefill, decode, and orchestration across the best-suited hardware."
                            },
                            {
                                "l": "SambaCloud",
                                "v": "Cloud offering highlighted for fast inference, OpenAI-compatible access, and developer-friendly APIs."
                            },
                            {
                                "l": "SambaStack",
                                "v": "On-prem stack positioned for privacy, sovereignty, and enterprise deployments."
                            },
                            {
                                "l": "SambaManaged",
                                "v": "A modular AI cloud for data centers and cloud service providers with rapid deployment positioning."
                            },
                            {
                                "l": "RDU chips",
                                "v": "Purpose-built chips presented as the decode accelerator and architectural heart of the platform."
                            },
                            {
                                "l": "Air-cooled deployment",
                                "v": "Repeatedly emphasized as fitting existing datacenters without major cooling overhauls."
                            },
                            {
                                "l": "Open-model support",
                                "v": "Open-weight/open-source models are central to the positioning and partner motion."
                            },
                            {
                                "l": "Prompt caching",
                                "v": "A SambaCloud capability highlighted as lowering cost and improving time-to-first-token for repeated prompts."
                            }
                        ],
                        "toneDist": [
                            {
                                "l": "Technical and explanatory",
                                "v": "35"
                            },
                            {
                                "l": "Confident and provocative",
                                "v": "20"
                            },
                            {
                                "l": "Proof-driven and benchmark-heavy",
                                "v": "20"
                            },
                            {
                                "l": "Event/partnership celebratory",
                                "v": "15"
                            },
                            {
                                "l": "Playful and conversational",
                                "v": "10"
                            }
                        ]
                    },
                    "campaigns": [
                        {
                            "cta": "See for yourself / watch the demo / read the blog",
                            "name": "Premium Inference / Agentic AI Education",
                            "posts": [
                                {
                                    "id": "7495155059354181633",
                                    "date": "2026-08-17"
                                },
                                {
                                    "id": "7493443489666408448",
                                    "date": "2026-08-12"
                                },
                                {
                                    "id": "7493055041961066496",
                                    "date": "2026-08-11"
                                },
                                {
                                    "id": "7487991830337220608",
                                    "date": "2026-07-28"
                                },
                                {
                                    "id": "7476275352038821888",
                                    "date": "2026-06-26"
                                }
                            ],
                            "durationDays": 53
                        },
                        {
                            "cta": "Read the full blog / learn more / see the numbers",
                            "name": "Disaggregated Inference / Heterogeneous Infrastructure",
                            "posts": [
                                {
                                    "id": "7479992440754700288",
                                    "date": "2026-07-06"
                                },
                                {
                                    "id": "7472407087843561472",
                                    "date": "2026-06-15"
                                },
                                {
                                    "id": "7467921526911062017",
                                    "date": "2026-06-03"
                                },
                                {
                                    "id": "7467616065188048897",
                                    "date": "2026-06-02"
                                }
                            ],
                            "durationDays": 34
                        },
                        {
                            "cta": "See the numbers for yourself / independently validated",
                            "name": "Benchmark Validation and Performance Proof",
                            "posts": [
                                {
                                    "id": "7489037475500367872",
                                    "date": "2026-07-31"
                                },
                                {
                                    "id": "7488705517587034112",
                                    "date": "2026-07-30"
                                },
                                {
                                    "id": "7490907525257580544",
                                    "date": "2026-08-05"
                                },
                                {
                                    "id": "7468350969920249856",
                                    "date": "2026-06-04"
                                }
                            ],
                            "durationDays": 62
                        },
                        {
                            "cta": "Come find us / RSVP / watch the full interview",
                            "name": "Events and Industry Visibility",
                            "posts": [
                                {
                                    "id": "7480154921791537154",
                                    "date": "2026-07-07"
                                },
                                {
                                    "id": "7481605646220566528",
                                    "date": "2026-07-11"
                                },
                                {
                                    "id": "7493782883715768320",
                                    "date": "2026-08-13"
                                },
                                {
                                    "id": "7468340562857803776",
                                    "date": "2026-06-04"
                                }
                            ],
                            "durationDays": 70
                        }
                    ],
                    "messaging": {
                        "pains": [
                            "Inference latency",
                            "Memory movement bottlenecks",
                            "High infrastructure cost",
                            "Power and cooling constraints",
                            "Scaling agentic workloads",
                            "One-size-fits-all GPU limitations",
                            "Need for production reliability",
                            "Data sovereignty requirements"
                        ],
                        "value": [
                            "Faster AI inference",
                            "Lower power consumption",
                            "Higher throughput",
                            "Lower-cost tokens",
                            "Better user experience for agents",
                            "Secure and sovereign deployment",
                            "Fits existing datacenter infrastructure",
                            "Production-ready enterprise AI"
                        ],
                        "themes": [
                            {
                                "l": "Inference-first infrastructure",
                                "v": "The company positions inference as the defining AI workload and the main battleground for enterprise AI."
                            },
                            {
                                "l": "Disaggregated architecture",
                                "v": "Repeated emphasis on using GPUs for prefill, RDUs for decode, and CPUs for orchestration."
                            },
                            {
                                "l": "Premium performance and efficiency",
                                "v": "Messaging centers on faster tokens, lower latency, better throughput, and lower power consumption."
                            },
                            {
                                "l": "Enterprise sovereignty and security",
                                "v": "Prominent framing around on-prem, sovereign AI, privacy, and keeping data secure."
                            },
                            {
                                "l": "Ecosystem validation",
                                "v": "Heavy use of partners, customers, analysts, and media to validate the platform and its claims."
                            },
                            {
                                "l": "Developer access and ease of adoption",
                                "v": "Posts highlight OpenAI-compatible APIs, no-code-change updates, and quick developer onboarding."
                            }
                        ],
                        "benefits": [
                            "More intelligence per joule",
                            "Faster responses for agents and coding assistants",
                            "Higher utilization of existing infrastructure",
                            "Deployable in air-cooled datacenters",
                            "Improved economics for enterprise AI",
                            "Secure on-prem deployment",
                            "Seamless developer adoption",
                            "Ability to run large models efficiently"
                        ],
                        "keywords": [
                            [
                                "inference",
                                38
                            ],
                            [
                                "premium inference",
                                19
                            ],
                            [
                                "disaggregated inference",
                                18
                            ],
                            [
                                "agentic AI",
                                16
                            ],
                            [
                                "RDUs",
                                15
                            ],
                            [
                                "GPUs",
                                14
                            ],
                            [
                                "CPUs",
                                12
                            ],
                            [
                                "sovereign AI",
                                10
                            ],
                            [
                                "tokens",
                                10
                            ],
                            [
                                "latency",
                                9
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
                            "score": 9,
                            "metric": "Product Marketing"
                        },
                        {
                            "score": 6,
                            "metric": "Employer Branding"
                        },
                        {
                            "score": 7,
                            "metric": "CTA Effectiveness"
                        }
                    ],
                    "textStyle": null,
                    "ctaLibrary": [
                        "Read the full article in the comments",
                        "Watch the full interview below",
                        "See the numbers for yourself ⬇️",
                        "Learn more:",
                        "Join us in Paris",
                        "RSVP below ⬇️",
                        "Open positions in the link below ⬇️",
                        "Come find us",
                        "Read the blog",
                        "Watch the clip 👇"
                    ],
                    "engagement": {
                        "best": [],
                        "stats": [],
                        "worst": [],
                        "topics": [
                            {
                                "l": "Disaggregated inference / prefill-decode split",
                                "v": 24
                            },
                            {
                                "l": "Premium inference and agentic AI",
                                "v": 20
                            },
                            {
                                "l": "Benchmarks, speed, and performance claims",
                                "v": 16
                            },
                            {
                                "l": "Sovereign / on-prem / secure AI infrastructure",
                                "v": 13
                            },
                            {
                                "l": "Events and conference presence",
                                "v": 11
                            },
                            {
                                "l": "Funding, growth, and company milestones",
                                "v": 10
                            },
                            {
                                "l": "Customer and partner validation",
                                "v": 6
                            }
                        ],
                        "activity": []
                    },
                    "competitive": {
                        "recs": [
                            "Track how SambaNova turns technical architecture into a category narrative; this is not just product marketing, it is market education around inference-first computing.",
                            "Note their repeated use of third-party validators like SemiAnalysis, Artificial Analysis, Forbes, CNBC, and The Register to de-risk claims.",
                            "Observe the strong emphasis on heterogeneous stacks and partnerships; they frame collaboration with incumbents as proof that their approach is complementary, not purely adversarial.",
                            "Their messaging is strongest when tied to concrete demos, benchmarks, and customer deployments; abstract thought leadership is less frequent than proof-based content.",
                            "Watch how they use events and media appearances to amplify a single thesis across multiple formats and audiences, especially around RAISE Summit and COMPUTEX."
                        ],
                        "text": "SambaNova positions itself as an AI infrastructure company built for inference-first, agentic AI workloads. Its core narrative is that AI has moved from training to inference, and that inference is not one workload but a set of different phases that require heterogeneous, purpose-built infrastructure. The company consistently emphasizes speed, lower latency, lower power consumption, air-cooled deployment, sovereign/on-prem control, and ‘premium inference’ as a distinct category. It also leans heavily on third-party validation, live demos, and customer/partner proof points to make the case that its RDUs and disaggregated inference stack outperform GPU-only approaches for decode and agentic workloads.",
                        "usps": [
                            "Inference-first positioning centered on agentic AI",
                            "Disaggregated inference architecture: GPUs for prefill, RDUs for decode, CPUs for orchestration",
                            "Air-cooled, lower-power deployment that fits existing datacenters",
                            "Sovereign / on-prem AI infrastructure for regulated and enterprise buyers",
                            "OpenAI-compatible APIs and developer-friendly cloud entry point",
                            "External validation through benchmarks, live demos, and media coverage"
                        ],
                        "rivals": [
                            "NVIDIA",
                            "Groq",
                            "Cerebras",
                            "Intel",
                            "AMD",
                            "Together AI",
                            "General Compute",
                            "SCX ai",
                            "Linkup"
                        ]
                    },
                    "description": "Welcome to SambaNova: Revolutionizing AI Capacity\n\nAt SambaNova, we're empowering developers, enterprises, governments, and data centers to unlock their full AI potential. Our full-stack infrastructure, from chips to models, enables lightning-fast performance, low power consumption, and high-efficiency computing.\n\nOur Mission\n\nTo give every developer, enterprise, government and data center absolute sovereignty over their own data, models and AI infrastructure – to future-proof the AI workloads that will power and scale tomorrow.\n\nOur Technology\n\nWe give our customers the optionality to experience SambaNova through the cloud or on-premise.\n\nSamba Cloud delivers the fastest inferences on the largest open source models like Llama 4 and DeepSeek. Developers can get started building in minutes with our OpenAI compatible APIs. All customers start on the developer tier and when they need more capacity can scale into our enterprise tier.\n\nSambaStack is our on-premise offering which includes the system, the platform, and foundation models. These components combine into a powerful technology stack that delivers unparalleled performance, ease of use, accuracy, data privacy, and the ability to power every use case across the world's largest organizations.\n\nSambaManaged is a modular and ready-to-deploy AI cloud designed to deliver unmatched efficiency for data centers and cloud service providers. This solution allows organizations to quickly deploy advanced AI inference services—without the need for costly infrastructure upgrades or specialized expertise—in as little as 90 days.\n\nAt the heart of SambaNova innovation is the Reconfigurable Dataflow Unit (RDU). Purpose built for AI workloads, the RDU takes advantage of a dataflow architecture and a three-tiered memory design. The three tiers of memory enable the platform to run hundreds of models on a single node and to switch between them in microseconds. In 2023, SambaNova released its 4th generation RDU chip, the SN40L.",
                    "hookLibrary": [
                        {
                            "type": "Problem",
                            "example": "The AI industry has been treating inference like it's one workload. It's not."
                        },
                        {
                            "type": "Problem",
                            "example": "The datacenter power crisis isn't coming. It's already here."
                        },
                        {
                            "type": "Question",
                            "example": "What happens when bigger, smarter models also get faster? 🤔"
                        },
                        {
                            "type": "Question",
                            "example": "What is disaggregated inference for AI agents?"
                        },
                        {
                            "type": "Bold Statement",
                            "example": "Inference is now the defining workload in AI, and that changes the economics of the whole stack."
                        },
                        {
                            "type": "Bold Statement",
                            "example": "One chip to rule them all? No thanks."
                        },
                        {
                            "type": "Story",
                            "example": "Our team's had quite the week in Paris and we're still not done 😎"
                        },
                        {
                            "type": "Statistic",
                            "example": "The results speak for themselves. SN50 is over 3x faster than GPUs."
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
                            "theme": "Disaggregated inference architecture",
                            "postCount": 26
                        },
                        {
                            "theme": "Premium inference and agentic AI",
                            "postCount": 21
                        },
                        {
                            "theme": "Benchmarks, speed, and token throughput",
                            "postCount": 16
                        },
                        {
                            "theme": "Sovereign, on-prem, and secure deployment",
                            "postCount": 12
                        },
                        {
                            "theme": "Events, conferences, and media appearances",
                            "postCount": 11
                        },
                        {
                            "theme": "Funding, valuation, and growth milestones",
                            "postCount": 8
                        },
                        {
                            "theme": "Customers, partners, and ecosystem validation",
                            "postCount": 6
                        },
                        {
                            "theme": "Hiring, leadership, and culture",
                            "postCount": 4
                        }
                    ],
                    "audienceDetail": {
                        "note": "Inferred from content & engagement, not LinkedIn follower demographics",
                        "seniority": [
                            {
                                "l": "C-suite",
                                "v": 20
                            },
                            {
                                "l": "VP/Head/Director",
                                "v": 45
                            },
                            {
                                "l": "Manager/Lead",
                                "v": 20
                            },
                            {
                                "l": "Senior IC / Staff",
                                "v": 15
                            }
                        ],
                        "experience": [
                            {
                                "l": "Architecture / systems / platform depth",
                                "v": 40
                            },
                            {
                                "l": "AI engineering / ML ops / deployment",
                                "v": 35
                            },
                            {
                                "l": "Infrastructure operations / datacenter",
                                "v": 15
                            },
                            {
                                "l": "Business / strategy / partnerships",
                                "v": 10
                            }
                        ],
                        "industries": [
                            {
                                "l": "Enterprise software / AI infrastructure",
                                "v": 35
                            },
                            {
                                "l": "Semiconductors / hardware",
                                "v": 20
                            },
                            {
                                "l": "Data centers / cloud services",
                                "v": 15
                            },
                            {
                                "l": "Financial services / regulated enterprise",
                                "v": 15
                            },
                            {
                                "l": "Public sector / research / government",
                                "v": 10
                            },
                            {
                                "l": "Media / analyst / investor ecosystem",
                                "v": 5
                            }
                        ]
                    },
                    "employee_count": 400,
                    "followers_count": 98183,
                    "recommendations": [
                        {
                            "observation": "The company’s strongest narrative asset is its clear, repeatable thesis: inference-first, heterogeneous infrastructure.",
                            "recommendation": "Double down on category creation content that explains why inference is structurally different from training, using simple visuals and repeatable language across all channels."
                        },
                        {
                            "observation": "Proof points and third-party validation consistently outperform generic brand messaging in engagement.",
                            "recommendation": "Package every major claim with a benchmark, customer story, or independent analyst validation to sustain credibility and drive shares."
                        },
                        {
                            "observation": "Events like COMPUTEX and RAISE Summit are used as megaphones for the same core story.",
                            "recommendation": "Build event-specific content ladders: teaser, live demo, recap, customer quote, benchmark recap, and executive POV to maximize reach from each event."
                        },
                        {
                            "observation": "Employer branding is present but secondary to product and category messaging.",
                            "recommendation": "Create more founder-and-engineer content that ties hiring to the mission of building the inference stack, not just generic recruiting posts."
                        },
                        {
                            "observation": "CTA language is functional but often soft, with many posts ending in ‘watch,’ ‘read,’ or ‘see the numbers.’",
                            "recommendation": "Test stronger conversion CTAs for technical audiences, such as interactive demos, benchmark comparisons, and developer trial prompts."
                        },
                        {
                            "observation": "The feed leans heavily toward the same few themes, which strengthens recall but risks repetition.",
                            "recommendation": "Introduce adjacent narratives like developer workflows, customer implementation journeys, and operational ROI to broaden appeal without diluting the core thesis."
                        }
                    ],
                    "scorecardOverall": 8,
                    "public_identifier": "sambanova",
                    "messagingEvolution": [
                        {
                            "theme": "Introduced inference-first, disaggregated architecture and agentic AI positioning; emphasized GPUs for prefill, RDUs for decode, and CPUs for orchestration.",
                            "period": "Late June 2026"
                        },
                        {
                            "theme": "Shifted from architecture explanation to market proof, using VC2 launches, customer logos, and live demos to show the model in production.",
                            "period": "Early July 2026"
                        },
                        {
                            "theme": "Expanded into sovereign AI, air-cooled deployment, and data center power constraints as differentiators versus GPU-only infrastructure.",
                            "period": "Mid July 2026"
                        },
                        {
                            "theme": "Moved toward premium inference as a named category, reinforced by benchmarks, external validation, media coverage, funding momentum, partnerships, and executive hiring.",
                            "period": "Late July to August 2026"
                        }
                    ]
                },
                "summary": "{\n  \"headline\": \"Borrow SambaNova’s category-building formula: repeat one clear thesis, then validate it with independent benchmarks, customer proof, executives, and event-driven content.\",\n  \"quickWins\": [\n    \"Create a repeatable category narrative for our brand using SambaNova’s inference-first model as the template: one market shift, one differentiated approach, and one measurable business outcome.\",\n    \"Attach third-party or customer evidence to our strongest claims; SambaNova’s independently validated SN50 post generated 158 reactions and 29 reposts.\",\n    \"Build a leadership-amplification workflow around major announcements; SambaNova’s executive and hiring posts generated 150–257 reactions, while the CEO-led NYSE post generated 186 reactions.\"\n  ],\n  \"recommendations\": [\n    {\n      \"area\": \"Category narrative\",\n      \"action\": \"Define one narrow market thesis for our brand and repeat it across explainers, product posts, executive commentary, customer stories, and events. Follow SambaNova’s progression from inference-first infrastructure to disaggregated inference and then the named category of premium inference.\",\n      \"impact\": \"Consistent repetition can improve category recall and thought-leadership authority; SambaNova scored 9 for thought leadership and 9 for product marketing.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Proof-led product marketing\",\n      \"action\": \"Pair each major product claim with an independent benchmark, customer deployment, partner validation, or quantified result. Build posts around a claim-proof-benefit structure rather than unsupported positioning.\",\n      \"impact\": \"SambaNova’s strongest product proof included SN50 being over 3x faster than GPUs, approximately 800 tokens per second in independent tests, and a General Compute case study citing 5x faster response times.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Executive amplification\",\n      \"action\": \"Prepare first-person executive posts for every major company announcement, then have the company page amplify the strongest executive perspective with added context rather than a generic repost.\",\n      \"impact\": \"Leadership content is a visible engagement driver: the CEO’s NYSE post received 186 reactions, while CFO and EVP of Software announcements received 257 and 248 reactions.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Event content system\",\n      \"action\": \"For each major event, publish a six-part sequence: pre-event thesis, speaker preview, live observation, demonstration or proof point, executive recap, and post-event customer or media validation.\",\n      \"impact\": \"SambaNova repeatedly extended COMPUTEX and RAISE Summit into multi-post campaigns; its RAISE interview recap generated 113 reactions and its COMPUTEX recap generated 144.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Creative formats\",\n      \"action\": \"Increase square technical videos, benchmark graphics, and concise architecture diagrams while retaining selective single-image and text posts. Use document carousels for monthly proof digests and implementation guides.\",\n      \"impact\": \"SambaNova’s mix is led by video at 35%, followed by single images at 28%, text-only at 22%, document carousels at 10%, and GIFs at 5%, supporting both technical education and campaign repetition.\",\n      \"priority\": \"Medium\"\n    },\n    {\n      \"area\": \"Conversion CTAs\",\n      \"action\": \"Move beyond soft CTAs such as 'watch' and 'read' by offering benchmark comparisons, implementation checklists, assessments, demos, or consultations tied directly to the post’s technical or business problem.\",\n      \"impact\": \"SambaNova’s CTA effectiveness scored 7, leaving room for our brand to convert educational attention more directly into qualified demand.\",\n      \"priority\": \"High\"\n    },\n    {\n      \"area\": \"Employer and expert branding\",\n      \"action\": \"Feature practitioners explaining how they solve real implementation problems, and connect recruiting content to the company mission and technical work rather than relying mainly on leadership appointments.\",\n      \"impact\": \"SambaNova’s employer-branding score is 6 despite strong engagement on senior hires, creating an opening for our brand to demonstrate broader team expertise and culture.\",\n      \"priority\": \"Medium\"\n    }\n  ],\n  \"currentVsTarget\": {\n    \"currentPostsPerWeek\": null,\n    \"targetPostsPerWeek\": 5,\n    \"rationale\": \"The report does not provide report.engagement.cadence.avgPerWeek, so the exact competitor benchmark cannot be populated without inventing a metric. Available cadence signals show a high-frequency account: 78% is classified as weekly-plus and 22% as multiple times per week, with 100 posts analyzed from June 2 to August 18. Our brand should adopt a sustainable five-post weekly cadence rather than copying event-driven posting bursts.\"\n  },\n  \"gaps\": [\n    \"SambaNova’s feed is concentrated around disaggregated inference, premium inference, benchmarks, and infrastructure; customer implementation journeys represent only 6 posts in the topic clusters, leaving room for our brand to own detailed adoption and change-management stories.\",\n    \"Employer branding scores only 6, and much of the visible people content centers on senior appointments. We can differentiate with practitioner-led content from strategists, engineers, operators, and client-facing teams.\",\n    \"CTA effectiveness scores 7, with frequent endings such as 'watch,' 'read,' 'learn more,' and 'see the numbers.' We can create stronger conversion paths through assessments, demos, templates, and consultation offers.\",\n    \"The repeated inference thesis creates strong recall but risks repetition. We can broaden the conversation into operational ROI, implementation readiness, governance, team workflows, and buyer outcomes while maintaining a focused core narrative.\",\n    \"The content is heavily infrastructure- and product-led. We can own a more accessible business translation for CMOs, RevOps leaders, and enterprise transformation buyers who need implications and action plans rather than architecture alone.\",\n    \"Document carousels account for only 10% of SambaNova’s format mix. We can use more saveable frameworks, benchmark summaries, checklists, and executive decision guides.\"\n  ],\n  \"campaignIdeas\": [\n    {\n      \"name\": \"One Thesis, Four Proofs\",\n      \"concept\": \"Choose one differentiated claim for our brand and validate it through four consecutive lenses: customer result, third-party evidence, practitioner explanation, and executive point of view.\",\n      \"cadence\": \"One post per week for four weeks, supported by one short video recap at the end of the month.\",\n      \"cta\": \"Download the proof brief or request a tailored assessment.\"\n    },\n    {\n      \"name\": \"From AI Claim to Business Outcome\",\n      \"concept\": \"Translate technical AI concepts into implications for CMO, RevOps, demand generation, and enterprise transformation personas, using problem-solution-outcome carousels.\",\n      \"cadence\": \"Two posts per week for six weeks: one document carousel and one short expert video.\",\n      \"cta\": \"Use the readiness checklist or book a working session.\"\n    },\n    {\n      \"name\": \"Validated in the Real World\",\n      \"concept\": \"Package customer stories and external validation around measurable deployment outcomes, following SambaNova’s benchmark-and-customer proof pattern without making unsupported claims.\",\n      \"cadence\": \"One customer or partner proof post every week, plus one monthly proof digest.\",\n      \"cta\": \"View the full case study or request a benchmark against your current approach.\"\n    },\n    {\n      \"name\": \"Event-to-Evergreen Content Ladder\",\n      \"concept\": \"Turn each webinar, conference, executive interview, or owned event into previews, live insights, clips, frameworks, and implementation follow-ups.\",\n      \"cadence\": \"Six posts around each event: two before, two during, and two after.\",\n      \"cta\": \"Register, watch the session, then download the implementation guide.\"\n    }\n  ],\n  \"activities\": [\n    \"Run a messaging workshop to define one category thesis, three supporting pillars, and five approved proof points for repeated use.\",\n    \"Create a proof inventory covering customer outcomes, partner endorsements, analyst mentions, product demonstrations, and approved quantified results.\",\n    \"Build a monthly executive content calendar around market shifts, customer lessons, event observations, and contrarian points of view.\",\n    \"Establish an employee-amplification kit containing suggested commentary, visuals, posting windows, and role-specific angles for major announcements.\",\n    \"Produce one technical or strategic explainer video each week using the concise, square-video style prominent in SambaNova’s feed.\",\n    \"Convert each event into a documented content ladder with assigned owners, deadlines, executive quotes, and follow-up assets.\",\n    \"Track performance by topic, format, proof type, CTA, reactions, comments, and reposts so future campaigns emphasize validated patterns.\"\n  ],\n  \"engagementPlays\": [\n    \"Prioritize milestone posts that combine significant news with customer proof; SambaNova’s $1B financing and JPMorganChase deployment post generated 543 reactions, 80 reposts, and 30 comments.\",\n    \"Use independent validation prominently in the opening lines and creative. The SN50 benchmark post citing over 3x faster performance generated 158 reactions and 29 reposts.\",\n    \"Activate executives and employees within the first engagement window, especially for hiring, partnerships, customer wins, and events; leadership announcements generated up to 257 reactions.\",\n    \"Turn technical education into short, visual sequences rather than isolated long posts. SambaNova’s content mix uses video most heavily at 35%, and repeated explainers reinforce the same architecture narrative.\",\n    \"Use event access and recognizable partners to add social proof, then follow with substantive insights or results. RAISE Summit, COMPUTEX, CNBC, Forbes, SemiAnalysis, and Artificial Analysis repeatedly strengthened SambaNova’s narrative.\",\n    \"Replace generic 'read more' endings with a specific question or diagnostic CTA tied to the post, such as asking which implementation bottleneck, workflow gap, or business outcome the audience is prioritizing.\",\n    \"Use document carousels for saveable decision frameworks and monthly proof digests, exploiting a format that represents only 10% of SambaNova’s current mix.\"\n  ]\n}"
            }
        ],
        "stdout": ""
    },
    "metadata": {
        "duration": 1883.0486490130424,
        "startTime": "2026-08-19T05:43:32.999Z",
        "endTime": "2026-08-19T05:43:34.883Z"
    }
}


Constraints:

* Only touch the files/functions directly related to the points above.
* Do not change variable names, code style, or structure outside the scope of these changes.
* Do not add extra features, optimizations, or refactors that weren't requested.
* If a change requires touching a shared/common file, make the minimal edit needed and leave everything else untouched.
* After implementing, list exactly which files and lines were changed, and why.
