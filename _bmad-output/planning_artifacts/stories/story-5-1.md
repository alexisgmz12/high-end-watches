# Story 5.1 – Refactor ProductContext to delegate to useProductList

**Story ID**
- 5.1

**Title**
- Refactor ProductContext to delegate data fetching to useProductList

**Description**
The current implementation of `ProductContext` performs a direct `fetch("/api/products")` to populate its state, while `useProductList` – the dedicated hook that already implements retry logic and IndexedDB caching – is not used anywhere. This results in duplicate network requests, duplicated state handling, and a single source of truth that exists in two places. The goal of this story is to eliminate the duplicate fetch by making `ProductProvider` a thin wrapper that internally calls `useProductList` for all data‑loading responsibilities.

The refactor preserves all existing public interfaces:
* The context still exposes `products: Product[]`, `loading: boolean`, `error: string | null`, and the three state setters.
* `ProductList` and other existing consumers remain unchanged.
* The retry / IndexedDB logic in `useProductList` is preserved unchanged.

**Dependencies**
- Story 4.8 – Landing‑page composition (provides the `ProductProvider`).
- Story 4.3 – ProductList component (consumes the context).

**Implementation nodes** (files that will change):
1. `src/context/ProductContext.tsx` – modify the provider implementation.

**File changes** – `src/context/ProductContext.tsx`
* Remove the `useEffect` that performs `fetch("/api/products")`.
* Inside the functional component, call `useProductList()` and destructure its return values.
* Pass those values (and the setters from the hook) into `<ProductContext.Provider>`.
* Keep the default `defaultContext` unchanged.

**Tests to update/add**
1. `src/context/__tests__/ProductContext.test.tsx` (if present) – adjust expectations to reflect that the provider now uses the hook.
2. `src/__tests__/AppRender.test.tsx` – no change required; rendering should still work.
3. Optional unit test verifying that `useProductList` is invoked within `ProductProvider`. This can be achieved with a Jest mock of the hook.

**Acceptance Criteria**
1. **No duplicate fetch** – Running a network profiler shows only one request to `/api/products` per page load.
2. **Context values** – `ProductProvider` still supplies `products`, `loading`, `error`, `setProducts`, `setLoading`, `setError`. All values come from the hook.
3. **Retry & caching** – The retry logic and IndexedDB caching in `useProductList` still function as before; no additional code path introduced.
4. **UI Consistency** – `ProductList` renders correctly (shimmer while loading, grid of cards when data is ready) with no runtime errors.
5. **Test success** – All existing unit and integration tests from stories 4.1‑4.7 continue to pass.
6. **Build** – `npm run build` succeeds.

**Out‑of‑Scope**
* Refactoring the hook itself (retry logic, IndexedDB caching).
* Changing any UI component rendering.
* Adding routing or new contexts.
* Modifying any other file outside the provider.

**Risks & Mitigations**
* **Hook misuse** – `useProductList` is a React hook; it must be called in a React component. The refactor ensures this by calling it inside the functional component of `ProductProvider`.
* **State leak** – The context still exposes the same setters, ensuring existing consumers can update state.
* **Caching collision** – Since the hook manages its own caching, the provider merely forwards values; no duplicate caching logic.

**Overall impact** – Minimal code changes confined to a single file, improved architectural correctness, and elimination of duplicated network traffic.
