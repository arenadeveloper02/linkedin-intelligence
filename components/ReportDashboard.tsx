"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import { DataRenderer, hasContent, humanizeKey } from '@/components/DataRenderer';
import { RichText } from '@/components/PlaybookView';
import { decodeUnicodeEscapes, formatCompact, formatDate, formatFollowers } from '@/lib/format';
import type { AnalysisOutput, JsonValue, SelectedCompany } from '@/lib/types';

interface ReportDashboardProps {
  company: SelectedCompany;
  output: AnalysisOutput;
  onBack?: () => void;
  onRunCompetitor?: () => void;
  onGetPlaybook?: () => void;
  /** Arena run id for this report; required to generate the comparison report. */
  runId?: string | null;
  /** Saved comparison report text from the Arena history ('compare' key), when present. */
  savedCompare?: string | null;
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
  const display = decodeUnicodeEscapes(text);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(display);
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
            {decodeUnicodeEscapes(meta)}
          </p>
        ) : null}
        <p className="text-sm leading-6 text-[var(--ds-text-primary)]">{display}</p>
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
        <p className="line-clamp-4 text-sm leading-6 text-[var(--ds-text-secondary)]">
          {decodeUnicodeEscapes(text)}
        </p>
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
  onGetPlaybook,
  runId,
  savedCompare,
}: ReportDashboardProps) {
  const [section, setSection] = useState<SectionId>('overview');

  // Comparison report: reuse the saved 'compare' text from the Arena history
  // when present; otherwise the button calls /api/compare to generate it.
  const [compareText, setCompareText] = useState<string | null>(savedCompare ?? null);
  const [compareStatus, setCompareStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    savedCompare ? 'ready' : 'idle',
  );
  const [showCompare, setShowCompare] = useState(false);

  // Keep the compare state in sync when the report switches without a remount
  // (e.g. opening a saved comparison from the modal on the main screen).
  useEffect(() => {
    setCompareText(savedCompare ?? null);
    setCompareStatus(savedCompare ? 'ready' : 'idle');
    setShowCompare(false);
  }, [savedCompare, company.companyId, company.analysisType]);

  const runCompare = async () => {
    if (compareText) {
      setShowCompare(true);
      return;
    }
    if (!runId || compareStatus === 'loading') return;
    setCompareStatus('loading');
    try {
      const res = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: runId }),
      });
      if (!res.ok) {
        setCompareStatus('error');
        return;
      }
      const data = (await res.json()) as { compareText?: string };
      if (typeof data.compareText === 'string' && data.compareText.trim().length > 0) {
        setCompareText(data.compareText);
        setCompareStatus('ready');
        setShowCompare(true);
        return;
      }
      setCompareStatus('error');
    } catch {
      setCompareStatus('error');
    }
  };

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
  const profileUrl = asString(pick(output, 'getcompanyprofile.profile_url')) ?? company.profileUrl;
  const followersCount =
    asNum(pick(output, 'getcompanyprofile.followers_count')) ?? company.followers;
  const employeeCount = asNum(pick(output, 'getcompanyprofile.employee_count'));
  const description =
    asString(pick(output, 'getcompanyprofile.description')) ?? company.description;
  const meta = [company.industry, company.location].filter(Boolean).join(' \u00b7 ');
  const followersLabel = formatFollowers(followersCount);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
        >
          &larr; Back
        </button>
      ) : (
        <Link
          href="/history"
          className="text-sm font-medium text-[var(--ds-text-link)] hover:underline"
        >
          &larr; Back to history
        </Link>
      )}

      <div className="ds-card mt-6">
        <div className="flex flex-wrap items-start gap-4">
          <CompanyLogo name={profileName} logo={profileLogo} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold text-[var(--ds-text-primary)]">
                {profileName}
              </h1>
              <span className="ds-chip">
                {company.analysisType === 'competitor'
                  ? 'Competitor Intelligence'
                  : 'Own Brand Intelligence'}
              </span>
            </div>
            {meta ? (
              <p className="mt-1 text-sm text-[var(--ds-text-secondary)]">{meta}</p>
            ) : null}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {followersLabel ? <span className="pill">{followersLabel}</span> : null}
              {employeeCount !== null ? (
                <span className="pill">{formatCompact(employeeCount)} employees</span>
              ) : null}
              {profileUrl ? (
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[var(--ds-text-link)] hover:underline"
                >
                  View on LinkedIn {'\u2197'}
                </a>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {company.analysisType === 'competitor' && (compareText || runId) ? (
              <button
                type="button"
                onClick={() => void runCompare()}
                disabled={compareStatus === 'loading'}
                className="btn-gradient"
              >
                {compareStatus === 'loading' ? 'Generating comparison\u2026' : 'Comparison report'}
              </button>
            ) : null}
            {onGetPlaybook ? (
              <button type="button" onClick={onGetPlaybook} className="btn-gradient">
                Get the playbook
              </button>
            ) : null}
            {onRunCompetitor ? (
              <button type="button" onClick={onRunCompetitor} className="btn-secondary">
                Compare with another
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {compareStatus === 'loading' ? <div className="progress-indeterminate mt-4" /> : null}

      {compareStatus === 'error' ? (
        <p className="mt-4 text-sm font-medium text-[var(--ds-text-error)]">
          The comparison report could not be generated. Please try again.
        </p>
      ) : null}

      {showCompare && compareText ? (
        <div className="ds-card mt-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold text-[var(--ds-text-primary)]">
              Comparison report
            </h2>
            <button
              type="button"
              onClick={() => setShowCompare(false)}
              className="btn-secondary shrink-0"
            >
              Hide
            </button>
          </div>
          <div className="mt-4">
            <RichText text={compareText} />
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSection(s.id)}
            className={
              section === s.id
                ? 'rounded-full bg-[var(--ds-brand,#1A73E8)] px-4 py-1.5 text-xs font-semibold text-white'
                : 'rounded-full border border-[var(--ds-border-default)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--ds-text-secondary)] hover:bg-[var(--ds-brand-surface,#F3F8FE)]'
            }
          >
            {s.label}
          </button>
        ))}
      </div>

      {section === 'overview' ? (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {followersCount !== null ? (
              <KpiTile label="Followers" value={formatCompact(followersCount)} />
            ) : null}
            {employeeCount !== null ? (
              <KpiTile label="Employees" value={formatCompact(employeeCount)} />
            ) : null}
            <KpiTile label="Posts analyzed" value={String(posts.length)} />
            <KpiTile
              label="Avg engagement"
              value={formatCompact(avgEngagement)}
              sub={`${formatCompact(totals.total)} total interactions`}
            />
          </div>
          {description ? (
            <div className="ds-card mt-6">
              <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">About</h3>
              <p className="whitespace-pre-line text-sm leading-6 text-[var(--ds-text-secondary)]">
                {decodeUnicodeEscapes(description)}
              </p>
            </div>
          ) : null}
          <KeyBlock output={output} k="messagingagent.summary" title="Executive summary" />
          <KeyBlock output={output} k="messagingagent.company" title="Company snapshot" />
          <KeyBlock output={output} k="messagingagent.stats" title="Key stats" />
        </>
      ) : null}

      {section === 'messaging' ? (
        <>
          <KeyBlock output={output} k="messagingagent.messaging" title="Messaging analysis" />
          <LibraryBlock value={pick(output, 'strategyagent.hookLibrary')} title="Hook library" />
          <LibraryBlock value={pick(output, 'strategyagent.ctaLibrary')} title="CTA library" />
        </>
      ) : null}

      {section === 'content' ? (
        <>
          <KeyBlock output={output} k="contentcreativeagent.content" title="Content analysis" />
          <KeyBlock output={output} k="contentcreativeagent.topicClusters" title="Topic clusters" />
        </>
      ) : null}

      {section === 'creative' ? (
        <>
          <KeyBlock output={output} k="contentcreativeagent.creative" title="Creative analysis" />
          <KeyBlock output={output} k="creativeinsightagent.imageryTypes" title="Imagery types" />
          <KeyBlock output={output} k="creativeinsightagent.textStyle" title="Text style" />
          <KeyBlock output={output} k="creativeinsightagent.observations" title="Observations" />
          <KeyBlock
            output={output}
            k="creativeinsightagent.recommendations"
            title="Creative recommendations"
          />
        </>
      ) : null}

      {section === 'engagement' ? (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiTile label="Total reactions" value={formatCompact(totals.reactions)} />
            <KpiTile label="Total comments" value={formatCompact(totals.comments)} />
            <KpiTile label="Total reposts" value={formatCompact(totals.reposts)} />
            <KpiTile label="Avg per post" value={formatCompact(avgEngagement)} />
          </div>
          <KeyBlock output={output} k="contentcreativeagent.engagement" title="Engagement analysis" />
          {sortedPosts.length > 0 ? (
            <div className="ds-card mt-6">
              <h3 className="mb-4 text-base font-semibold text-[var(--ds-text-primary)]">
                Top performing posts
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {sortedPosts.slice(0, 4).map((p, i) => (
                  <PostCard key={`top-${i}`} post={p} rank={`Top #${i + 1}`} />
                ))}
              </div>
            </div>
          ) : null}
        </>
      ) : null}

      {section === 'audience' ? (
        <>
          <KeyBlock output={output} k="strategyagent.personas" title="Personas" />
          <KeyBlock output={output} k="strategyagent.audienceDetail" title="Audience detail" />
        </>
      ) : null}

      {section === 'strategy' ? (
        <KeyBlock output={output} k="strategyagent.strategy" title="Strategy" />
      ) : null}

      {section === 'competitive' ? (
        <>
          <ScoreBars value={pick(output, 'competitiveagent.scorecard')} title="Scorecard" />
          <KeyBlock output={output} k="competitiveagent.scorecardOverall" title="Overall score" />
          <KeyBlock output={output} k="competitiveagent.competitive" title="Competitive analysis" />
          <KeyBlock output={output} k="competitiveagent.campaigns" title="Campaigns" />
          <KeyBlock output={output} k="competitiveagent.launches" title="Launches" />
          <KeyBlock
            output={output}
            k="competitiveagent.messagingEvolution"
            title="Messaging evolution"
          />
          <KeyBlock output={output} k="competitiveagent.recommendations" title="Recommendations" />
        </>
      ) : null}

      {section === 'posts' ? (
        sortedPosts.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sortedPosts.map((p, i) => (
              <PostCard key={`post-${i}`} post={p} rank={`#${i + 1}`} />
            ))}
          </div>
        ) : (
          <div className="ds-card mt-6">
            <p className="text-sm text-[var(--ds-text-secondary)]">
              No posts available for this analysis.
            </p>
          </div>
        )
      ) : null}
    </main>
  );
}
