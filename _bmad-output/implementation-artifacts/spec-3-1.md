---
story_id: '3.1'
type: 'feature'
created: '2026-08-28'
status: 'done'
baseline_commit: 'NO_VCS'
review_loop_iteration: 1
---

## Intent
Implement an `api.fetchProducts` wrapper that handles network calls, parses JSON, validates the returned shape is an array of `Product`, and throws an error on non‑200 responses.

## Boundaries & Constraints
- Must use the existing TypeScript frontend setup.
- Should not alter existing state management. The API wrapper will be consumed by hooks or context.
- No external promises or additional runtime dependencies beyond `fetch` unless required.
- The returned type must be `Promise<Product[]>` and conform to the `Product` interface in `src/types/product.ts`.

## I/O & Edge‑Case Matrix
| Call | Expected Result | Error Conditions |
|------|-----------------|------------------|
| Successful 200 OK JSON array | `Promise<Product[]>` resolved with parsed array | None |
| Non‑200 response | `Promise` rejected with `Error` containing HTTP status | ±network failure |
| Fetch failure | `Promise` rejected with `Error` describing fetch error |

## Code Map
- New file: `src/services/api.ts`.
- Export function `fetchProducts(): Promise<Product[]>`.
- Optional timeout and error handling.

## Tasks
- Create `api.ts` under `src/services`.
- Implement `fetchProducts`.
- Export type `Product` from `../types/product`.
- Ensure proper type annotations.
- Add any required dependency (none for basic fetch).

## Acceptance Criteria
- TypeScript compiles without errors.
- The function performs a fetch to `/api/products`.
- On 200, returns parsed array of `Product`.
- On non‑200 or network failure, throws an `Error`.
- Build and lint pass.
- No side effects on existing code.

## Verification
Commands:
- `npm run build`
- `npm run lint`

## Review Notes
* Built and linted project from `frontend/` successfully; no TypeScript errors.
* Created `api.ts` with proper type signatures and error handling.
* Function throws `Error` for non‑200 responses or fetch failures, returns array of `Product` on success.
* No unintended side effects observed.

## Spec Change Log
- Created on 2026-08-28.