# Story 2.2: Build ProductContext provider

**Story ID:** 2.2
**Title:** Build `ProductContext` provider
**User Story / Description:** As a developer, I need a context that supplies product data, loading state and error handling so that UI components can consume it without prop‑drilling.
**Acceptance Criteria:**
- Supplies `{products, loading, error}` via React context.
**Dependencies:** 2.1
**Technical Considerations:**
- Create `src/context/ProductContext.tsx`.
- Define interface for context value.
- Export a `Provider` component and a custom hook `useProductContext`.
