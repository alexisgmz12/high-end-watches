# Story 3.1: Implement api.fetchProducts wrapper

**Story ID:** 3.1
**Title:** Implement `api.fetchProducts` wrapper
**User Story / Description:** As a developer, I need a fetch wrapper that handles the network call, parses JSON, validates that the returned shape is an array of `Product`, and throws an error on non‑200 responses.
**Acceptance Criteria:**
- Handles fetch, parses JSON, validates array of `Product`, throws error on non‑200.
**Dependencies:** 1.1
**Technical Considerations:**
- Create `src/services/api.ts`.
- Export `fetchProducts(): Promise<Product[]>`.
- Include timeout and error handling.
- Use `strict` TS and `zod` or runtime guards if desired.
