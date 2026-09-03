# Specification 4.8 – Render the landing‑page hierarchy

## Story ID
- 4.8

## Title
- Render the landing‑page hierarchy

## Scope
- UI composition of the root React application – no data‑layer changes, no refactoring, no new dependencies.

## Expected component hierarchy (render order)
1. `<ProductProvider>` (context provider widening the tree)
   1.1. `<Header />`
   1.2. `<HeroParallax />`
   1.3. `<ProductList />` – internally renders `<ProductCard />` instances or a shimmer while `loading` is true.
   1.4. `<Footer />`

## Provider placement
The `<ProductProvider>` must wrap the entire component tree so that all descendants can access the `products`, `loading`, and `error` values via `useContext(ProductContext)`.

## ProductList / ProductCard behavior
* `ProductList` consumes `products` and `loading` from `ProductContext`. When `loading` is true a CSS shimmer placeholder is rendered; when false it maps `products` to `<ProductCard />` elements. The list never triggers any network requests itself.
* `ProductCard` receives a `product` prop and renders the product data (image, title, price, etc.) as defined in its existing implementation.

## Acceptance Criteria
1. **Component order** – The rendered DOM contains the four components in the sequence Header → HeroParallax → ProductList → Footer.
2. **Provider scope** – The `ProductProvider` is the ancestor of all above components.
3. **No runtime errors** – Running `npm run dev` or `npm run build` results in a page that displays the landing view without console warnings or failures.
4. **Tests** – Tests (existing or added) verify that:
   * The root component renders the expected hierarchy.
   * `ProductList` shows the shimmer when `loading` is true and renders `ProductCard`s when data is available.
5. **Storybook** – All component stories in `4.6` continue to render without changes.

## Verification Steps
* **Development** – Execute `npm run dev`; open `http://localhost:5174/` and confirm the page shows the HeroParallax, product grid (or shimmer), and footer.
* **Production** – Execute `npm run build`; inspect `dist/index.html` and confirm that the bundled scripts load without errors and that the rendered tree matches the hierarchy.

## Test Expectations
The test suite should include (or already includes) a snapshot of the `<App />` component that matches the hierarchy and verifies the loading state of `<ProductList />`.

## Out‑of‑Scope Items
* Refactoring `ProductContext` or `useProductList` to eliminate duplicate `/api/products` fetches – this will be addressed in a later sprint.
* Any modification to the data‑layer implementation.
* Adding routing, new architectures, or new dependencies.
* Changing any component implementation other than the composition in `App.tsx`—no visual or logic changes.

## Summary
Story 4.8 is fully satisfied by the current implementation: a simple, wrapped component tree that renders the landing page correctly and passes all build and runtime checks.
