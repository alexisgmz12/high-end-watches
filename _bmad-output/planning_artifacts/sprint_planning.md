# Sprint 1 Planning – HAW Landing Page (MVP)

## Sprint Goal
Deliver a fully‑functional, production‑ready landing page skeleton that satisfies the PRD’s core requirements:
* A responsive React app with a hero parallax, product list, and basic navigation that can be built, tested, and deployed.
* Code quality and architecture foundations are in place, enabling the team to iterate on features in subsequent sprints.

## Sprint Scope
* **Build & Configuration** – Webpack/Vite, TypeScript, service‑worker registration, theme tokens.
* **Core Domain Layer** – `Product` type, context, and data‑fetching hook.
* **API Service Layer** – Fetch wrapper and base‑URL config.
* **UI Foundations** – Header, HeroParallax, ProductCard, ProductList, Footer.
* **Testing & CI Foundations** – Unit tests for hook and components; Jest & React‑Testing‑Library set up.

*(Interaction & analytics, A11y, QA, deployment are deferred to Sprints 2 + 3.)*

## Selected Epics

| Epic | Reason |
|------|--------|
| **Epic 1 – Static Assets & Build Setup** | Sets up the build pipeline, essential for compiling the rest. |
| **Epic 2 – Core Domain & State Layer** | Provides the product data contract and state management needed by UI. |
| **Epic 3 – API Service Layer** | Encapsulates network logic, crucial for the hook. |
| **Epic 4 – UI Components** | Implements the visible parts; split into several small stories. |

## Selected Stories (Sprint 1 list)

| Story | Dependency | Implementation Node |
|-------|------------|---------------------|
| **1.1** Configure build pipeline | none | Vite + TypeScript |
| **1.3** Add global CSS tokens | 1.1 | tokens.scss |
| **2.1** Create `Product` type | 1.1 | src/types/product.ts |
| **2.2** Build `ProductContext` | 2.1 | context/ProductContext.tsx |
| **2.3** Implement `useProductList` hook | 2.2, 3.1 | hooks/useProductList.ts |
| **3.1** Implement `api.fetchProducts` | 1.1 | services/api.ts |
| **4.1** Build `Header` component | 2.2 | components/Header.tsx |
| **4.2** Build `HeroParallax` component | 1.3 | components/HeroParallax.tsx |
| **4.3** Build `ProductCard` component | 2.3 | components/ProductCard.tsx |
| **4.4** Build `ProductList` component | 4.3 | components/ProductList.tsx |
| **4.5** Build `Footer` component | 1.3 | components/Footer.tsx |
| **4.6** Create Storybook stories | all component stories | .storybook etc. |
| **4.7** Write unit & snapshot tests | all component stories | Jest + React‑Testing‑Library |

## Implementation Tasks (per story)

| Story | Tasks |
|-------|-------|
| 1.1 | • Add `vite.config.ts` for React & TS. • Add `tsconfig.json`. • Create `index.html`, `src/main.tsx`. |
| 1.3 | • Create `src/styles/_tokens.scss`. • Import tokens into `index.scss`. |
| 2.1 | • Define `Product` interface in `src/types/product.ts`. |
| 2.2 | • Create `src/context/ProductContext.tsx` with `createContext`, provider, and exported hook. |
| 2.3 | • Implement `useProductList` in `src/hooks/useProductList.ts`. • Add IndexedDB caching logic. |
| 3.1 | • Create `src/services/api.ts` with `fetchProducts()` that returns Promise\<`Product[]`\>. |
| 4.1 | • Implement `Header` component; export. |
| 4.2 | • Implement `HeroParallax` component; use IntersectionObserver. |
| 4.3 | • Implement `ProductCard` component; `alt` prop uses product name. |
| 4.4 | • Implement `ProductList` component; show shimmer while loading. |
| 4.5 | • Implement `Footer` component. |
| 4.6 | • Add `.storybook/main.js`, `preview.js`. • Create stories for each component. |
| 4.7 | • Write unit tests in `__tests__/` for hook and components. |

## Dependencies

| Dependency | Owner | Status |
|------------|-------|--------|
| Build configured | 1.1 | ✅ |
| TypeScript types | 2.1 | ✅ |
| API service ready | 3.1 | ✅ |
| Context provider before components | 2.2 | ✅ |
| useProductList uses fetchProducts | 2.3 ↔ 3.1 | ✅ |

## Risks & Assumptions

* **Risk:** Unknown latency of `/api/products`. *Mitigation:* Hook includes a fallback timeout.
* **Risk:** Service‑worker caching may break on hot‑reload. *Mitigation:* incremental cache strategy *Improvement.*
* **Assumption:** The API will respond with valid JSON and an array of “Product” objects.
* **Assumption:** Browser environment supports ES modules, IntersectionObserver.
* **Assumption:** Development environment has Node 20+ and Vite support.

## Technical Prerequisites

| Item | Requirement |
|------|-------------|
| Node.js | ≥20 |
| npm | 9+ |
| Vite | project scaffold |
| TypeScript | 5+ |
| Service‑Worker lib (optional) | Workbox or custom service‑worker |

## Definition of Done

* All selected stories committed and fully tested (unit + snapshot).
* Build runs without warnings.
* `npm run dev` starts the dev server; page loads at `/` with hero and product list (or shimmer).
* All components render correctly in all breakpoints.
* Storybook loads and shows all component stories.
* CI pipeline passes (`npm test`).
* No critical build or runtime errors.

## Deferred Stories

* 5.x Interaction & Analytics
* 6.x Accessibility & Performance
* 7.x QA & Deployment

These will be tackled in Sprint 2 + 3 after the core foundation is deployed.
# Sprint 1 Planning – HAW Landing Page (MVP)

## Sprint Goal
Deliver a fully‑functional, production‑ready landing page skeleton that satisfies the PRD’s core requirements:
* A responsive React app with a hero parallax, product list, and basic navigation that can be built, tested, and deployed.
* Code quality and architecture foundations are in place, enabling the team to iterate on features in subsequent sprints.

## Sprint Scope
* **Build & Configuration** – Webpack/Vite, TypeScript, service‑worker registration, theme tokens.
* **Core Domain Layer** – `Product` type, context, and data‑fetching hook.
* **API Service Layer** – Fetch wrapper and base‑URL config.
* **UI Foundations** – Header, HeroParallax, ProductCard, ProductList, Footer.
* **Testing & CI Foundations** – Unit tests for hook and components; Jest & React‑Testing‑Library set up.

*(Interaction & analytics, A11y, QA, deployment are deferred to Sprints 2 + 3.)*

## Selected Epics

| Epic | Reason |
|------|--------|
| **Epic 1 – Static Assets & Build Setup** | Sets up the build pipeline, essential for compiling the rest. |
| **Epic 2 – Core Domain & State Layer** | Provides the product data contract and state management needed by UI. |
| **Epic 3 – API Service Layer** | Encapsulates network logic, crucial for the hook. |
| **Epic 4 – UI Components** | Implements the visible parts; split into several small stories. |

## Selected Stories (Sprint 1 list)

| Story | Dependency | Implementation Node |
|-------|------------|---------------------|
| **1.1** Configure build pipeline | none | Vite + TypeScript |
| **1.3** Add global CSS tokens | 1.1 | tokens.scss |
| **2.1** Create `Product` type | 1.1 | src/types/product.ts |
| **2.2** Build `ProductContext` | 2.1 | context/ProductContext.tsx |
| **2.3** Implement `useProductList` hook | 2.2, 3.1 | hooks/useProductList.ts |
| **3.1** Implement `api.fetchProducts` | 1.1 | services/api.ts |
| **4.1** Build `Header` component | 2.2 | components/Header.tsx |
| **4.2** Build `HeroParallax` component | 1.3 | components/HeroParallax.tsx |
| **4.3** Build `ProductCard` component | 2.3 | components/ProductCard.tsx |
| **4.4** Build `ProductList` component | 4.3 | components/ProductList.tsx |
| **4.5** Build `Footer` component | 1.3 | components/Footer.tsx |
| **4.6** Create Storybook stories | all component stories | .storybook etc. |
| **4.7** Write unit & snapshot tests | all component stories | Jest + React‑Testing‑Library |

## Implementation Tasks (per story)

| Story | Tasks |
|-------|-------|
| 1.1 | • Add `vite.config.ts` for React & TS. • Add `tsconfig.json`. • Create `index.html`, `src/main.tsx`. |
| 1.3 | • Create `src/styles/_tokens.scss`. • Import tokens into `index.scss`. |
| 2.1 | • Define `Product` interface in `src/types/product.ts`. |
| 2.2 | • Create `src/context/ProductContext.tsx` with `createContext`, provider, and exported hook. |
| 2.3 | • Implement `useProductList` in `src/hooks/useProductList.ts`. • Add IndexedDB caching logic. |
| 3.1 | • Create `src/services/api.ts` with `fetchProducts()` that returns Promise\<`Product[]`\>. |
| 4.1 | • Implement `Header` component; export. |
| 4.2 | • Implement `HeroParallax` component; use IntersectionObserver. |
| 4.3 | • Implement `ProductCard` component; `alt` prop uses product name. |
| 4.4 | • Implement `ProductList` component; show shimmer while loading. |
| 4.5 | • Implement `Footer` component. |
| 4.6 | • Add `.storybook/main.js`, `preview.js`. • Create stories for each component. |
| 4.7 | • Write unit tests in `__tests__/` for hook and components. |
