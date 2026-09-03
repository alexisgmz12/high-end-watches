# Story 4.8 – Render the landing‑page hierarchy

**ID**
- 4.8

**Title**
- Render the landing‑page hierarchy

**Phase**
- 4 (UI Components)

## Description
The landing page must assemble the core UI components into a single, cohesive view.  The work required here is minimal: add a thin wrapper that renders the components in the order required by the PRD and places the `ProductProvider` above the component tree so that `ProductList` can consume the `products` and `loading` values from context.

* `ProductContext` continues to perform its own `fetch("/api/products")`; no changes to `useProductList.ts` or the context implementation are required for this story.
* The only source file that will be updated during implementation is `src/App.tsx` – the temporary “Hello World” placeholder will be removed.

For the purposes of this artifact we assume a future developer will make the corresponding change in `App.tsx`.

## Acceptance Criteria
1. **Component order** – When the app is served at `/` the following elements are rendered **in this sequence**:
   1. `<Header />`
   2. `<HeroParallax />`
   3. `<ProductList />` (which internally renders `<ProductCard />` items or a loading shimmer via the `ProductContext` values)
   4. `<Footer />`

2. **Provider placement** – The `<ProductProvider>` (the component created in `context/ProductContext.tsx`) is rendered **above** the component tree so that any descendant can consume the context.

3. **No runtime errors** – The dev server (`npm run dev`) and production build (`npm run build`) must complete successfully and the page should load without console warnings or errors.

4. **Tests** – Existing unit or snapshot tests in the `4.7` stories (or an additional test file) validate that the root component renders the hierarchy described in point 1 and that `ProductList` displays either a loading state or product cards when the context is populated.

5. **Storybook** – The component stories created in `4.6` continue to render unchanged and pass.

## Dependencies
None beyond the existing `4.1`‑`4.5` and `4.6` stories.

## Notes
* The data‑layer inconsistency (duplicate fetches in `ProductContext` and `useProductList`) is intentionally untouched; it will be addressed in a later sprint.
* This story’s artifact is purely a specification; it does not perform any code changes.
