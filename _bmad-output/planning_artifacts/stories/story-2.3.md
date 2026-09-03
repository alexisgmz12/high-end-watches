# Story 2.3: Implement useProductList hook

**Story ID:** 2.3
**Title:** Implement `useProductList` hook
**User Story / Description:** As a developer, I need a hook that fetches product data and updates the `ProductContext`, caches the response in IndexedDB, and retries on network failure so that the UI stays responsive.
**Acceptance Criteria:**
- `hooks/useProductList.ts` fetches `/api/products`.
- Updates context with `{products, loading, error}`.
- Caches response in IndexedDB.
- Retries on network failure.
**Dependencies:** 2.2, 3.1
**Technical Considerations:**
- Use `api.fetchProducts` for network request.
- Persist data in IndexedDB (`idb-keyval` or custom helper).
- Provide a retry mechanism (exponential back‑off).
