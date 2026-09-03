---
story_id: '2.3'
type: 'feature'
created: '2026-08-26'
status: 'done'
baseline_commit: 'NO_VCS'
review_loop_iteration: 1
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

Create a reusable hook `useProductList` that fetches products, updates `ProductContext`, caches in IndexedDB, and implements retry logic.

## Boundaries & Constraints

- Must use existing `ProductContext` and its state setters.
- Use `idb-keyval` package for IndexedDB caching.
- Exponential backoff for failures.

## I/O & Edge-Case Matrix

| Case | Expected |
|------|----------|
| Network success | Context updated, cache stored |
| Network failure on first try | Retry up to 3 times, then fallback to cache |

## Code Map

- `src/hooks/useProductList.ts`
- Update `ProductContext` to expose setters.
- Update `App.tsx` to use hook.

## Tasks

- Install `idb-keyval` if missing.
- Create hook.
- Update context provider.
- Add example usage in `App.tsx`.

## Acceptance Criteria

- Hook compiles, no TypeScript errors.
- Repository builds.
- No lint warnings.
- Hook sets context correctly and uses cache.

## Spec Change Log

## Design Notes

- Use 500ms base delay, double each retry.

## Verification

**Commands:**
- `npm run build`
- `npm run lint`
---