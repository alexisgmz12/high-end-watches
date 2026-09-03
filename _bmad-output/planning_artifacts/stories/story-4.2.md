# Story 4.2: Build HeroParallax component

**Story ID:** 4.2
**Title:** Build `HeroParallax` component
**User Story / Description:** As a developer, I need a component that provides a parallax hero section, lazy‑loads its image, applies a scrolling offset, and displays headline, sub-headline and CTA.
**Acceptance Criteria:**
- Uses IntersectionObserver to apply scrolling offset.
- Lazy‑loads hero image.
- Shows headline, sub-headline, CTA button.
**Dependencies:** 1.3
**Technical Considerations:**
- Create `src/components/HeroParallax.tsx`.
- Use `react-intersection-observer` or native API.
- Animate CSS transform based on scroll.
