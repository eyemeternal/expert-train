# Repository Guidelines

## Project Structure & Module Organization

The root repository holds the Moziserve redesign. The workspace also contains two independent reference projects.

- `rea/`: reverse-engineering CLI and MCP server. TypeScript lives in `src/`, including `domain/`, `application/`, provider integrations, and CLI/server adapters. Tests are colocated as `*.test.ts` and grouped under `tests/`. Native integrations live in `bridge/` and `native/`; documentation and assets live in `docs/` and `assets/`.
- `everything-claude-code/`: reusable agent configurations in `agents/`, `skills/`, `rules/`, and `commands/`; executable hooks and utilities in `hooks/` and `scripts/`; JavaScript tests in `tests/`.

Read `rea/AGENTS.md` before changing REA and `rea/website/AGENTS.md` before website work. Consult `rea/CONTRIBUTING.md` for contribution scope and review requirements.

## Build, Test, and Development Commands

Run commands from the relevant project directory; there is no root build command.

From `rea/`:

- `npm ci`: install locked dependencies using the toolchain pinned in `.nvmrc` and `package.json`.
- `npm run build:cached`: build the runtime and packaged skill.
- `npm start`: launch the MCP server.
- `npm run check:fast`: run typechecking, linting, and architecture guards.
- `npm run test:local -- PATH...`: run selected source tests.
- `npm run test:focused -- PATH...`: run exact tests with required artifacts.
- `npm run format`: apply oxfmt formatting.

From `everything-claude-code/`, run `node tests/run-all.js` for the hook and utility suites.

## Coding Style & Naming Conventions

Match surrounding code: REA TypeScript uses two-space indentation and camelCase identifiers; its formatter uses an 80-column print width. Use oxfmt and oxlint for REA. Preserve the existing CommonJS conventions in Everything Claude Code scripts. Name skill instructions `SKILL.md` and configuration documents with descriptive kebab-case filenames.

## Testing Guidelines

REA uses Vitest and Python bridge tests (`npm run test:python`). Name regression tests `*.test.ts`; retain configured coverage thresholds in `vitest.config.ts`. Add focused coverage for changed behavior and run checks appropriate to the affected integration. Report actual results and any unavailable provider verification.

## Commit & Pull Request Guidelines

Use Conventional Commits, such as `fix: ...`, `docs: ...`, and `refactor(catalog): ...`. Keep changes focused. Explain the problem, resulting behavior, validation, and relevant issues in each PR. Include screenshots for visible changes. REA requires a responsible human owner and its applicable author-readiness declaration.

## Moziserve Redesign Rules

The current project is the modern reconstruction of `https://moziserve.co.za`. Read [docs/README.md](docs/README.md) and [the agent workflow](docs/moziserve/agent-workflow.md) before redesign work. Use REA for evidence-based website observation and Everything Claude Code as a selective implementation reference. Keep client implementation separate from REA's own website.

Write all new and edited text without emojis or em dashes, including website copy, documentation, agent output, examples, and commit messages. User instructions override reference-library examples. Preserve raw source evidence unchanged and normalize authored copy separately.

Preserve verified business facts and asset provenance. Record source URLs and capture dates. Label design proposals and unknowns explicitly; never invent services, contact details, testimonials, credentials, or audit findings. When source access fails, document the failure without claiming public downtime.

Build responsive, accessible layouts with semantic HTML, clear navigation, visible keyboard focus, and reduced-motion support. Choose tools for demonstrated needs. Test actual user journeys and report only checks performed. Do not enable library hooks, install global agent rules, or change the source site's hosting as a side effect of research.

Keep the independent local reference clones `rea/` and `everything-claude-code/` out of the root Git index. Commit project docs and implementation; keep credentials, browser profiles, generated output, and unreviewed raw captures ignored. Reviewed evidence and its manifest remain eligible for version control.

Retain the existing Moziserve website colours and logo. Extract exact palette values from source or computed styles and record provenance before creating tokens. Present the aesthetics review for user inspection before rebuilding components. Do not replace the palette with invented neutrals or accents; record unknown values as unknown. Follow milestones M0 through M7 in `docs/moziserve/delivery-plan.md`.
