# Story 4.4: Build ProductList component

**Story ID:** 4.4
**Title:** Build `ProductList` component
**User Story / Description:** As a developer, I need a component that consumes `ProductContext` and renders a grid of `ProductCard`s while the data is loading it shows a shimmer loader.
**Acceptance Criteria:**
- Consumes `ProductContext`.
- Renders grid of product cards.
- Shows shimmer loader while `loading` is true.
**Dependencies:** 4.3
**Technical Considerations:**
- Create `src/components/ProductList.tsx`.
- Map over context products; use key.
- Add shimmer placeholder component.
- Make the grid responsive.
