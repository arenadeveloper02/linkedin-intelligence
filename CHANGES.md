# Changes

## Scope
Switch the "Compare with another" (CompetitorModal) and "Get the playbook" (PlaybookModal) prefetch checks from the full-history Arena workflow to the new single-run workflow `ef016dc1-4a08-4c1b-b5e4-69080ea7c22d` (payload: `{ id, stream: false, selectedOutputs: ['response.result'] }`, response: same shape with a single-element `result` array).

## Files changed

1. **lib/arena-api.ts** — ADDED one line: `export const RUN_WORKFLOW_ID = 'ef016dc1-4a08-4c1b-b5e4-69080ea7c22d';` (after `HISTORY_WORKFLOW_ID`). No other lines changed.

2. **app/api/arena-run/route.ts** — NEW file. `POST { id }` endpoint that executes `RUN_WORKFLOW_ID` with `{ id, stream: false, selectedOutputs: ['response.result'] }`, maps the single-element `output.result` array to `ArenaRunEntry[]` using the exact same mapping logic as `app/api/arena-history/route.ts` (including `namespaceHistoryOutput` for `output` and `competitor_output`), and returns `{ runs }`.

3. **components/CompetitorModal.tsx** — In the open-effect only: replaced `fetch('/api/arena-history')` (GET, whole history) with `fetch('/api/arena-run', { method: 'POST', body: JSON.stringify({ id: runId }) })`, and run lookup now falls back to `runs[0]` since the API returns a single-element array. Updated the comment accordingly. Everything else untouched.

4. **components/PlaybookModal.tsx** — Same minimal change in its open-effect: per-run POST to `/api/arena-run` instead of GET `/api/arena-history`, with `runs.find(...) ?? runs[0]`. Updated the comment accordingly. Everything else untouched.

5. **prisma/schema.prisma** — Returned unchanged (mandatory echo on every database-backed edit; no columns added, removed, or modified — `updatedAt` preserved).

## Not changed
- `app/api/arena-history/route.ts` remains as-is (still used by any other history consumers).
- `lib/actions.ts`, `lib/types.ts`, pages, and all other components are untouched.
