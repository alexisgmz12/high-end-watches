---
story_id: '4.2'
status: 'done'
review_loop_iteration: 1
---

# HeroParallax Component

## Story Description
Build `HeroParallax` component.

## Acceptance Criteria
- Uses IntersectionObserver to apply scrolling offset.
- Lazy‑loads hero image.
- Shows headline, sub‑headline, CTA button.

## Dependencies
- Story 1.3 is complete.

## Implementation Plan
1. Create `frontend/src/components/HeroParallax.tsx`.
2. Create `frontend/src/components/HeroParallax.module.scss`.
3. Use native IntersectionObserver to track visibility.
4. Lazy‑load image with `loading="lazy"`.
5. Apply CSS transform based on scroll position.
6. Export component with appropriate props.

## Code Map
- `HeroParallax.tsx`
- `HeroParallax.module.scss`

## Verification
- `npm run build` – succeeded 2026‑08‑31 23:45
- `npm run lint` – succeeded 2026‑08‑31 23:45
- Manual visual check of parallax effect – passed
## Suggested Review Order
- `frontend/src/components/HeroParallax.tsx`
- `frontend/src/components/HeroParallax.module.scss`