# Story 1.3: Add global CSS tokens

**Story ID:** 1.3
**Title:** Add global CSS reset and primary theme variables
**User Story / Description:** As a developer, I need global CSS tokens so that the theme is consistent across the application.
**Acceptance Criteria:**
- `src/styles/_tokens.scss` exists and is imported by `index.scss`.
**Dependencies:** 1.1
**Technical Considerations:**
- Create `src/styles/_tokens.scss` defining color, spacing, and typography variables.
- Import tokens in `src/index.scss` using `@use` to expose the variables.
- Ensure CSS is compiled by Vite’s CSS preprocessor support.
