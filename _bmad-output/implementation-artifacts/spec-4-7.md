story_id: '4.7'
status: 'done'
review_loop_iteration: 1
---

# Story 4.7: Write unit and snapshot tests for all components

## Story Description
Implement testing for all components and major hooks.

## Acceptance Criteria
- Jest + React Testing Library configured.
- Tests exist under `src/__tests__`.
- Snapshot tests for UI components.

## Dependencies
Story 4.5, 4.6 (components, stories).

## Implementation Plan
1. Verify existing test infrastructure.
2. Create tests for `Header`, `HeroParallax`, `ProductCard`, `ProductList`, `Footer`.
3. Create test for `useProductList` hook.
4. Run tests, lint, build, update spec.

## Verification
- `npm test` passes.
- `npm run lint` passes.
- `npm run build` passes.

## Review Results
/// Filled during final review.
