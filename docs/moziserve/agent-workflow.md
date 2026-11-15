# Agent Workflow and Rules

## Project ownership

Root `AGENTS.md` governs the redesign. `docs/AGENTS.md` governs these documents. Keep Moziserve implementation in its own future `moziserve/` directory. Treat `rea/` and `everything-claude-code/` as supporting tools and reference libraries. Do not alter their product code to implement the client website.

## REA application

Reference: [browser observation](../../rea/docs/guides/web/browser-observation.md).

Use `list_browser_targets` to identify an eligible page in a dedicated Chrome-family browser, `inspect_web_page` to collect structure and metadata, and `capture_web_screenshot` for viewport evidence. Use `export_evidence_bundle` to retain provenance. Keep the CDP endpoint on loopback with an explicit port. REA passive observation does not navigate pages or submit forms.

On 2026-11-15, Node `24.22.1` and npm `11.16.0` were installed in the ignored workspace `.rea/toolchain/` directory. The Node archive passed the official SHA-256 check. `npm ci` and `npm run build:cached` completed, and `node scripts/rea.mjs --version` reported `6.9.0`. REA inspected the source pages and captured the screenshots in the [evidence manifest](evidence/2026-11-15/manifest.md).

To use the installed toolchain from the workspace root, add both local binaries to `PATH` before running REA. Replace `9222` with the dedicated browser's actual debug port.

```sh
export PATH="$PWD/.rea/toolchain/npm/node_modules/.bin:$PWD/.rea/toolchain/node-v24.22.1-linux-x64/bin:$PATH"
node rea/scripts/rea.mjs list-browser-targets http://127.0.0.1:9222 --json
```

For the M1 CLI run, complete per-operation JSON was saved in the ignored raw evidence directory and reviewed PNGs were promoted with their SHA-256 digests and REA evidence IDs. Consult the linked guide and command help for inspection options after selecting a target.

## Reviewed skills and agent references

- [Frontend patterns](../../everything-claude-code/skills/frontend-patterns/SKILL.md): reuse composition, accessibility, and state principles if React is selected. Do not select React solely because examples use it.
- [Coding standards](../../everything-claude-code/skills/coding-standards/SKILL.md): use descriptive names, focused modules, and simple implementations.
- [Verification loop](../../everything-claude-code/skills/verification-loop/SKILL.md): report checks actually executed; adapt commands to the eventual implementation.
- [Documentation agent](../../everything-claude-code/agents/doc-updater.md): keep evidence, architecture, and instructions synchronized. This is a reviewed role reference, not a spawned agent.
- Sites skill: use its presentation guidance and supported implementation workflow when building the replacement website. No hosted Site has been created for this documentation stage.

## Project-specific overrides

User instructions take precedence over library examples. Do not copy emojis or em dashes from reference materials. Do not automatically enable agents, hooks, global rules, or MCP configurations. Use meaningful checks for implemented behaviour; do not claim an inherited 80 percent coverage target is configured for this unbuilt website.

Never invent facts to complete a layout. Retain a source reference for every business assertion. Keep proposed copy labelled until verified. A successful deployment does not prove source fidelity or accessibility.
