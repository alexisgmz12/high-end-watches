# Architecture Artifact – Landing Page for Elite‑Athlete Luxury Watch Brand

## 1. High‑Level Architecture Rear‑View
```
┌───────────────────────┐          ┌───────────────────────┐
│   Browser (React)     │<───websocket──>│  API Gateway (Node) │
└───────────────────────┘          └───────────────────────┘
             ▲                                 ▲
             │                                 │
   Service‑Worker (Cache)                     │
             │                                 │
  Persistent Cache (IndexedDB)               │
```
* **React Front‑End** – Single‑Page Application (SPA) served over HTTPS.
* **API Gateway** – Exposes `/api/products` returning product catalog in JSON. Handles CORS and rate limits.
* **Service‑Worker** – Implements `Cache‑First` strategy for critical assets, supports offline mode for the hero image and static assets.
* **Persistent Cache** – Supplements Service‑Worker, keeps a local copy of `/api/products` for the next session.

The architecture is intentionally lightweight: only one backend service, minimal third‑party libraries (React, hooks, tiny‑lru‑cache, or custom caching). All state is managed on the client.

## 2. Core Domain Model (TypeScript)
```ts
export interface Product {
  /** Unique identifier received from the backend */
  id: string;
  /** Human‑readable name of the watch */
  name: string;
  /** Monetary price in USD (e.g., 1299.99) */
  price: number;
  /** Public URL to HD image (WebP preferred) */
  imageUrl: string;
}
```
*All domain objects are plain‑old data objects (no behaviour). The business logic lives in services/hook utilities.

## 3. Main Application Flow
1. **Bootstrapping** – `<App />` renders a *lazy* `Hero` component and kicks off `useProductList()` hook.
2. **Data Fetch** – `useProductList()` sends a GET to `/api/products`. While pending, UI shows a shimmer loader.
3. **State Update** – On success, the global state (`ProductContext`) receives the array. On failure, an error banner is displayed.
4. **Render** – `ProductList` consumption of the context renders a responsive grid of `ProductCard` components.
5. **Interaction** – Hovering over cards triggers CSS zoom. Clicking a card opens a non‑modal spec card that scrolls into view.
6. **Analytics** – A side‑effect sends a GA4 event whenever a product card is rendered.

## 4. Responsibilities
| Layer | Component | Primary Responsibility |
|-------|-----------|------------------------|
| Presentation | `App` | Root of the tree, routing (none), global theme. |
| Presentation | `Header` | Navigation bar, sticky on scroll. |
| Presentation | `HeroParallax` | Full‑width hero with CSS parallax. |
| Presentation | `ProductList` | Renders grid; delegates to `ProductCard`. |
| Presentation | `ProductCard` | Shows name, price, thumbnail, hover interaction, ARIA attributes. |
| Presentation | `Footer` | Static brand/footer links. |
| State | `ProductContext` | Stores product array, loading, error flags. |
| State | `useProductList()` | Custom hook that fetches and writes to context; handles caching. |
| Infrastructure | `api.ts` | Centralised fetch helper; timeout, error handling, type assertions. |
| Infrastructure | `serviceWorker.js` | Caching strategies, precache lists. |
| Infrastructure | `analytics.ts` | Thin wrapper around GA4; decouples analytics from UI.

## 5. Invariants & Business Rules
1. **Unique Product IDs** – Every `Product.id` must be non‑empty and unique across the array.
2. **Non‑negative Price** – `price >= 0`. The UI shows `$0` for free items.
3. **Valid Image URL** – Must be a fully qualified HTTPS URL. If the URL is 404, fallback placeholder is shown.
4. **Cache Consistency** – Cached JSON is validated against a hash; if hash mismatches, fetch fresh copy.
5. **Error Gracefulness** – On API failure, UI retains previous cache; if no cache, display "Products unavailable".
6. **Edge: Empty Product List** – Render a friendly message, e.g., "No products available at this time."

## 6. Testability Highlights
* `useProductList` is pure‑functional – unit‑tested with mocked `api.fetchProducts()`.
* `ProductCard` has deterministic rendering – snapshot tests.
* Edge cases (invalid price, missing image, API error) are covered with unit tests.
* Integration test using React Testing Library verifies that the loading spinner appears and the product grid renders once data is fetched.

## 7. Folder Structure (MVP)
```
src/
├── components/
│   ├── Header.tsx
│   ├── HeroParallax.tsx
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   └── Footer.tsx
├── hooks/
│   └── useProductList.ts
├── context/
│   └── ProductContext.tsx
├── services/
│   ├── api.ts
│   └── analytics.ts
├── types/
│   └── product.ts
├── App.tsx
├── index.tsx
└── serviceWorker.js
```
Everything resides under `src` to keep the repository tidy. Build tools (`tsconfig.json`, `package.json`) are already configured by the BMAD scaffold.

## 8. Next Steps for Implementation
1. Scaffold the folder structure above.
2. Define the `ProductContext` and `useProductList` with TypeScript types.
3. Implement `HeroParallax` with IntersectionObserver for parallax trigger.
4. Wire `ProductList` to render cards from context.
5. Add analytics event in `useEffect` inside `ProductCard`.
6. Add unit tests for hook and component.

This architecture provides a clear, testable path from the PRD & design specs to production code, adhering to the MVP constraints and the project’s existing BMAD scaffolding.
