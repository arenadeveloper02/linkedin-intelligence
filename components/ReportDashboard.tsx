"use client"

import { useState } from 'react';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import { DataRenderer, hasContent, humanizeKey } from '@/components/DataRenderer';
import { formatCompact, formatDate, formatFollowers } from '@/lib/format';
import type { AnalysisOutput, JsonValue, SelectedCompany } from '@/lib/types';

interface ReportDashboardProps {
  company: SelectedCompany;
  output: AnalysisOutput;
  onBack?: () => void;
  onRunCompetitor?: () => void;
}

type Rec = { [key: string]: JsonValue };

function isRec(v: JsonValue | null | undefined): v is Rec {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function pick(output: AnalysisOutput, key: string): JsonValue | undefined {
  if (Object.prototype.hasOwnProperty.call(output, key)) return output[key];
  const parts = key.split('.');
  let cur: JsonValue | undefined = output;
  for (const part of parts) {
    if (isRec(cur)) cur = cur[part];
    else return undefined;
  }
  return cur;
}

function asString(v: JsonValue | null | undefined): string | null {
  return typeof v === 'string' && v.trim().length > 0 ? v : null;
}

function asNum(v: JsonValue | null | undefined): number | null {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() && Number.isFinite(Number(v))) return Number(v);
  return null;
}

function toNum(v: JsonValue | undefined): number {
  return asNum(v ?? null) ?? 0;
}

interface PostEngagement {
  reactions: number;
  comments: number;
  reposts: number;
  total: number;
}

function postEngagement(post: Rec): PostEngagement {
  const reactions = toNum(post['reaction_counter'] ?? post['reactions'] ?? post['likes']);
  const comments = toNum(post['comment_counter'] ?? post['comments']);
  const reposts = toNum(post['repost_counter'] ?? post['reposts'] ?? post['shares']);
  return { reactions, comments, reposts, total: reactions + comments + reposts };
}

function postText(post: Rec): string | null {
  return (
    asString(post['text']) ??
    asString(post['commentary']) ??
    asString(post['post_text']) ??
    asString(post['content'])
  );
}

function postUrl(post: Rec): string | null {
  return (
    asString(post['post_url']) ??
    asString(post['share_url']) ??
    asString(post['url']) ??
    asString(post['link'])
  );
}

function postDate(post: Rec): string | null {
  const parsed =
    asString(post['parsed_datetime']) ??
    asString(post['parsed_date']) ??
    asString(post['published_at']);
  if (parsed) {
    const d = new Date(parsed);
    if (!Number.isNaN(d.getTime())) return formatDate(d);
    return parsed;
  }
  return asString(post['date']) ?? asString(post['posted_at']);
}

interface ScoreRow {
  label: string;
  score: number;
}

function scoreRows(value: JsonValue | undefined): ScoreRow[] {
  const rows: ScoreRow[] = [];
  if (Array.isArray(value)) {
    for (const v of value) {
      if (!isRec(v)) continue;
      const label =
        asString(v['category']) ??
        asString(v['dimension']) ??
        asString(v['name']) ??
        asString(v['metric']) ??
        asString(v['label']);
      const score = asNum(v['score']) ?? asNum(v['value']) ?? asNum(v['rating']);
      if (label && score !== null) rows.push({ label, score });
    }
  } else if (isRec(value)) {
    for (const [k, v] of Object.entries(value)) {
      const s = asNum(v);
      if (s !== null) rows.push({ label: humanizeKey(k), score: s });
    }
  }
  return rows;
}

interface LibraryItem {
  text: string;
  meta: string | null;
}

function libraryItems(value: JsonValue | undefined): LibraryItem[] {
  if (value === undefined || value === null) return [];
  let arr: JsonValue[] = [];
  if (Array.isArray(value)) {
    arr = value;
  } else if (isRec(value)) {
    for (const v of Object.values(value)) {
      if (Array.isArray(v)) arr = arr.concat(v);
      else arr.push(v);
    }
  }
  const items: LibraryItem[] = [];
  for (const v of arr) {
    if (typeof v === 'string' && v.trim()) {
      items.push({ text: v, meta: null });
    } else if (isRec(v)) {
      const text =
        asString(v['hook']) ??
        asString(v['cta']) ??
        asString(v['text']) ??
        asString(v['title']) ??
        Object.values(v).find((x): x is string => typeof x === 'string' && x.trim().length > 0) ??
        null;
      if (!text) continue;
      const metaParts = [asString(v['category']), asString(v['purpose']), asString(v['type'])].filter(
        (m): m is string => m !== null && m !== text,
      );
      items.push({ text, meta: metaParts.length > 0 ? metaParts.join(' \u00b7 ') : null });
    }
  }
  return items;
}

function KpiTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="ds-card">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-[var(--ds-text-primary)]">{value}</p>
      {sub ? <p className="mt-1 text-xs text-[var(--ds-text-secondary)]">{sub}</p> : null}
    </div>
  );
}

function KeyBlock({ output, k, title }: { output: AnalysisOutput; k: string; title: string }) {
  const v = pick(output, k);
  if (!hasContent(v)) return null;
  return (
    <div className="ds-card mt-6">
      <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">{title}</h3>
      <DataRenderer value={v} />
    </div>
  );
}

function CopyCard({ text, meta }: { text: string; meta: string | null }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable
    }
  };
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
      <div className="min-w-0 flex-1">
        {meta ? (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--ds-text-tertiary)]">
            {meta}
          </p>
        ) : null}
        <p className="text-sm leading-6 text-[var(--ds-text-primary)]">{text}</p>
      </div>
      <button
        type="button"
        onClick={() => void copy()}
        className="shrink-0 rounded-lg border border-[var(--ds-border-default)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--ds-text-link)] hover:bg-[var(--ds-brand-surface)]"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

function LibraryBlock({ value, title }: { value: JsonValue | undefined; title: string }) {
  const items = libraryItems(value);
  if (items.length === 0) return null;
  return (
    <div className="ds-card mt-6">
      <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((it, i) => (
          <CopyCard key={`${i}-${it.text.slice(0, 12)}`} text={it.text} meta={it.meta} />
        ))}
      </div>
    </div>
  );
}

function ScoreBars({ value, title }: { value: JsonValue | undefined; title: string }) {
  const rows = scoreRows(value);
  if (rows.length === 0) return null;
  const max = Math.max(...rows.map((r) => r.score), 1);
  const scale = max <= 10 ? 10 : max <= 100 ? 100 : max;
  return (
    <div className="ds-card mt-6">
      <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">{title}</h3>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-2 text-sm">
              <span className="font-medium text-[var(--ds-text-primary)]">{r.label}</span>
              <span className="text-[var(--ds-text-secondary)]">
                {r.score}
                {scale === 10 ? '/10' : scale === 100 ? '/100' : ''}
              </span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-[var(--ds-grey-100)]">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${Math.min(100, (r.score / scale) * 100)}%`,
                  background: 'var(--ds-gradient-brand)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostCard({ post, rank }: { post: Rec; rank?: string }) {
  const text = postText(post);
  const eng = postEngagement(post);
  const date = postDate(post);
  const url = postUrl(post);
  const type =
    asString(post['post_type']) ?? asString(post['type']) ?? asString(post['content_type']);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[var(--ds-border-default)] bg-white p-4 shadow-[var(--ds-elevation-sm)]">
      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ds-text-tertiary)]">
        {rank ? <span className="ds-chip">{rank}</span> : null}
        {date ? <span>{date}</span> : null}
        {type ? <span className="pill">{type}</span> : null}
      </div>
      {text ? (
        <p className="line-clamp-4 text-sm leading-6 text-[var(--ds-text-secondary)]">{text}</p>
      ) : (
        <p className="text-sm italic text-[var(--ds-text-tertiary)]">No caption available</p>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--ds-border-subtle)] pt-3 text-xs text-[var(--ds-text-secondary)]">
        <span>
          <strong className="text-[var(--ds-text-primary)]">{eng.reactions}</strong> reactions
        </span>
        <span>
          <strong className="text-[var(--ds-text-primary)]">{eng.comments}</strong> comments
        </span>
        <span>
          <strong className="text-[var(--ds-text-primary)]">{eng.reposts}</strong> reposts
        </span>
        <span className="ds-chip">{eng.total} total</span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-medium text-[var(--ds-text-link)] hover:underline"
          >
            View on LinkedIn {'\u2197'}
          </a>
        ) : null}
      </div>
    </div>
  );
}

type SectionId =
  | 'overview'
  | 'messaging'
  | 'content'
  | 'creative'
  | 'engagement'
  | 'audience'
  | 'strategy'
  | 'competitive'
  | 'posts';

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'messaging', label: 'Messaging' },
  { id: 'content', label: 'Content' },
  { id: 'creative', label: 'Creative' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'audience', label: 'Audience' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'competitive', label: 'Competitive Intelligence' },
  { id: 'posts', label: 'Posts' },
];

export default function ReportDashboard({
  company,
  output,
  onBack,
  onRunCompetitor,
}: ReportDashboardProps) {
  const [section, setSection] = useState<SectionId>('overview');

  const postsRaw = pick(output, 'getcompanypost.items');
  const posts: Rec[] = Array.isArray(postsRaw) ? postsRaw.filter(isRec) : [];
  const sortedPosts = [...posts].sort((a, b) => postEngagement(b).total - postEngagement(a).total);
  const totals = posts.reduce<PostEngagement>(
    (acc, p) => {
      const e = postEngagement(p);
      return {
        reactions: acc.reactions + e.reactions,
        comments: acc.comments + e.comments,
        reposts: acc.reposts + e.reposts,
        total: acc.total + e.total,
      };
    },
    { reactions: 0, comments: 0, reposts: 0, total: 0 },
  );
  const avgEngagement = posts.length > 0 ? Math.round(totals.total / posts.length) : 0;

  const profileName = asString(pick(output, 'getcompanyprofile.name')) ?? company.companyName;
  const profileLogo = asString(pick(output, 'getcompanyprofile.logo')) ?? company.companyLogo;
  const followers = asNum(pick(output, 'getcompanyprofile.followers_count')) ?? company.followers;
  const employees = asNum(pick(output, 'getcompanyprofile.employee_count'));
  const website = asString(pick(output, 'getcompanyprofile.website'));
  const profileUrl = asString(pick(output, 'getcompanyprofile.profile_url')) ?? company.profileUrl;
  const profileDescription =
    asString(pick(output, 'getcompanyprofile.description')) ?? company.description;

  const overallRaw = pick(output, 'competitiveagent.scorecardOverall');
  const overallScore =
    asNum(overallRaw) ??
    (isRec(overallRaw)
      ? asNum(overallRaw['score']) ??
        asNum(overallRaw['overall']) ??
        asNum(overallRaw['overallScore'])
      : null);

  const meta = [company.industry, company.location].filter(Boolean).join(' \u00b7 ');
  const followersLabel = formatFollowers(followers);
  const topPosts = sortedPosts.slice(0, 6);
  const weakestPosts = sortedPosts.length > 3 ? sortedPosts.slice(-3).reverse() : [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
          >
            &larr; Search another company
          </button>
        ) : (
          <Link
            href="/"
            className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
          >
            &larr; Search another company
          </Link>
        )}
        {onRunCompetitor ? (
          <button type="button" onClick={onRunCompetitor} className="btn-secondary">
            Run Competitor Analysis
          </button>
        ) : null}
      </div>

      <div className="ds-card mt-4">
        <div className="flex flex-wrap items-start gap-4">
          <CompanyLogo name={profileName} logo={profileLogo} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold text-[var(--ds-text-primary)]">{profileName}</h1>
              <span className="ds-chip">
                {company.analysisType === 'competitor' ? 'Competitor' : 'Own Brand'}
              </span>
            </div>
            {meta ? (
              <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">{meta}</p>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              {followersLabel ? <span className="pill">{followersLabel}</span> : null}
              {employees !== null ? (
                <span className="pill">{formatCompact(employees)} employees</span>
              ) : null}
              {website ? (
                <a
                  href={website.startsWith('http') ? website : `https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill hover:text-[var(--ds-brand)]"
                >
                  Website {'\u2197'}
                </a>
              ) : null}
              {profileUrl ? (
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill hover:text-[var(--ds-brand)]"
                >
                  LinkedIn {'\u2197'}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-16 z-30 -mx-2 mt-6 overflow-x-auto rounded-xl border border-[var(--ds-border-default)] bg-white/95 px-2 py-2 shadow-[var(--ds-elevation-sm)] backdrop-blur">
        <div className="flex min-w-max gap-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSection(s.id)}
              className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                section === s.id
                  ? 'bg-[var(--ds-brand-surface)] text-[var(--ds-brand)]'
                  : 'text-[var(--ds-text-secondary)] hover:bg-[var(--ds-grey-100)] hover:text-[var(--ds-text-primary)]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {section === 'overview' ? (
        <section className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {followers !== null ? (
              <KpiTile label="LinkedIn Presence" value={formatCompact(followers)} sub="Followers" />
            ) : null}
            {posts.length > 0 ? (
              <KpiTile label="Content Volume" value={String(posts.length)} sub="Posts analyzed" />
            ) : null}
            {posts.length > 0 ? (
              <KpiTile
                label="Engagement"
                value={formatCompact(avgEngagement)}
                sub="Average engagement per post"
              />
            ) : null}
            {overallScore !== null ? (
              <KpiTile
                label="Competitive Position"
                value={String(overallScore)}
                sub="Overall competitive score"
              />
            ) : null}
          </div>
          {profileDescription ? (
            <div className="ds-card mt-6">
              <h3 className="mb-3 text-base font-semibold text-[var(--ds-text-primary)]">
                About {profileName}
              </h3>
              <p className="whitespace-pre-line text-sm leading-6 text-[var(--ds-text-secondary)]">
                {profileDescription}
              </p>
            </div>
          ) : null}
          <KeyBlock output={output} k="messagingagent.summary" title="Executive Summary" />
          <KeyBlock output={output} k="messagingagent.stats" title="Messaging Statistics" />
        </section>
      ) : null}

      {section === 'messaging' ? (
        <section className="mt-6">
          <KeyBlock output={output} k="messagingagent.summary" title="Messaging Summary" />
          <KeyBlock output={output} k="messagingagent.messaging" title="Messaging Intelligence" />
          <KeyBlock output={output} k="messagingagent.company" title="Brand Narrative" />
          <KeyBlock output={output} k="messagingagent.stats" title="Messaging Statistics" />
        </section>
      ) : null}

      {section === 'content' ? (
        <section className="mt-6">
          <KeyBlock output={output} k="contentcreativeagent.content" title="Content Strategy" />
          <KeyBlock
            output={output}
            k="contentcreativeagent.topicClusters"
            title="Topic Clusters"
          />
        </section>
      ) : null}

      {section === 'creative' ? (
        <section className="mt-6">
          <KeyBlock output={output} k="contentcreativeagent.creative" title="Creative Direction" />
          <KeyBlock output={output} k="creativeinsightagent.imageryTypes" title="Imagery Types" />
          <KeyBlock output={output} k="creativeinsightagent.textStyle" title="Text Style" />
          <KeyBlock
            output={output}
            k="creativeinsightagent.observations"
            title="Creative Observations"
          />
          <KeyBlock
            output={output}
            k="creativeinsightagent.recommendations"
            title="Creative Recommendations"
          />
        </section>
      ) : null}

      {section === 'engagement' ? (
        <section className="mt-6">
          {posts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <KpiTile label="Reactions" value={formatCompact(totals.reactions)} />
              <KpiTile label="Comments" value={formatCompact(totals.comments)} />
              <KpiTile label="Reposts" value={formatCompact(totals.reposts)} />
              <KpiTile label="Total Engagement" value={formatCompact(totals.total)} />
            </div>
          ) : null}
          <KeyBlock
            output={output}
            k="contentcreativeagent.engagement"
            title="Engagement Intelligence"
          />
          {topPosts.length > 0 ? (
            <div className="ds-card mt-6">
              <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">
                Top Performing Posts
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {topPosts.map((p, i) => (
                  <PostCard key={i} post={p} rank={`#${i + 1}`} />
                ))}
              </div>
            </div>
          ) : null}
          {weakestPosts.length > 0 ? (
            <div className="ds-card mt-6">
              <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">
                Weakest Posts
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {weakestPosts.map((p, i) => (
                  <PostCard key={i} post={p} />
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {section === 'audience' ? (
        <section className="mt-6">
          <KeyBlock output={output} k="strategyagent.personas" title="Personas" />
          <KeyBlock output={output} k="strategyagent.audienceDetail" title="Audience Detail" />
        </section>
      ) : null}

      {section === 'strategy' ? (
        <section className="mt-6">
          <KeyBlock output={output} k="strategyagent.strategy" title="Strategic Playbook" />
          <LibraryBlock value={pick(output, 'strategyagent.hookLibrary')} title="Hook Library" />
          <LibraryBlock value={pick(output, 'strategyagent.ctaLibrary')} title="CTA Library" />
        </section>
      ) : null}

      {section === 'competitive' ? (
        <section className="mt-6">
          {overallScore !== null ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <KpiTile
                label="Competitive Position"
                value={String(overallScore)}
                sub="Overall scorecard"
              />
            </div>
          ) : null}
          <ScoreBars value={pick(output, 'competitiveagent.scorecard')} title="Scorecard" />
          <KeyBlock
            output={output}
            k="competitiveagent.competitive"
            title="Competitive Overview"
          />
          <KeyBlock output={output} k="competitiveagent.campaigns" title="Campaign Intelligence" />
          <KeyBlock output={output} k="competitiveagent.launches" title="Launch Signals" />
          <KeyBlock
            output={output}
            k="competitiveagent.messagingEvolution"
            title="Messaging Evolution"
          />
          <KeyBlock
            output={output}
            k="competitiveagent.recommendations"
            title="Competitive Recommendations"
          />
        </section>
      ) : null}

      {section === 'posts' ? (
        <section className="mt-6">
          {sortedPosts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {sortedPosts.map((p, i) => (
                <PostCard key={i} post={p} />
              ))}
            </div>
          ) : (
            <div className="ds-card text-center">
              <p className="text-sm text-[var(--ds-text-secondary)]">
                No posts were returned for this company.
              </p>
            </div>
          )}
        </section>
      ) : null}
    </main>
  );
}
