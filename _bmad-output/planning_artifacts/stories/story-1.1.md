# Story 1.1: Configure Webpack / Vite build pipeline with TypeScript support

**Story ID:** 1.1
**Title:** Configure Webpack / Vite build pipeline with TypeScript support
**User Story / Description:** As a developer, I need to configure the build pipeline with TypeScript support so that the project can compile successfully.
**Acceptance Criteria:**
- `tsconfig.json`, `package.json` scripts, and basic “Hello World” React app compile without errors.
**Dependencies:** None.
**Technical Considerations:**
- Create `vite.config.ts` for React and TS.
- Enable `strict` mode in `tsconfig.json` and include `src` and `types` directories.
- Add npm scripts: `dev`, `build`, `lint` in `package.json`.
- Ensure `index.tsx` uses `ReactDOM.createRoot` and renders `<App />`.
