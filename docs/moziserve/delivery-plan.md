# Delivery Milestones

The target is https://moziserve.co.za. Retain its existing colours. Complete the aesthetics inspection before rebuilding components. Status records describe work actually completed.

| Milestone | Deliverable | Status | Dependency |
| --- | --- | --- | --- |
| M0: Project rules | Scope, reference workflow, writing rules, and exclusions | Complete | None |
| M1: Source capture | Page inventory, copy, assets, and viewport screenshots | Blocked on access | Reachable source or supplied export |
| M2: Aesthetics inspection | Existing palette, visual audit, and review board | Template ready; inspection pending | M1 |
| M3: Design tokens | Existing colours mapped to reusable tokens | Not started | M2 and user inspection |
| M4: Component rebuild | Responsive component library and component preview | Not started | M3 |
| M5: Page reconstruction | Verified content assembled into complete pages | Not started | M4 |
| M6: Quality review | Responsive, accessibility, content, and interaction results | Not started | M5 |
| M7: Delivery | Review deployment and migration checklist | Not started | M6 |

## M1: Capture the existing website

- Capture each reachable public route, final URL, title, navigation, and content.
- Save original logo and imagery with provenance and reuse status.
- Capture desktop and mobile screenshots at recorded viewport sizes.
- Collect source CSS and computed foreground/background colours for key components.
- Record contact destinations and existing form behaviour without sending enquiries.

Exit condition: traceable evidence sufficient to reproduce the business and inspect its appearance. Access failures do not establish public downtime.

## M2: Inspect aesthetics with the user

Use [aesthetics-review.md](aesthetics-review.md) as the review record. Present actual screenshots and colour swatches, then annotated proposals for header, hero, services, and footer. Distinguish current observations from proposed improvements.

Exit condition: the user has inspected the visual direction and any requested adjustments are recorded. Do not treat silence as approval or rebuild components before this review.

## M3: Establish design tokens

Map verified source colours to semantic CSS variables. Record exact values and source locations. Define spacing, typography, content widths, radii, and responsive behaviour. Keep the existing palette; improve contrast through pairings and placement. If compliance needs a colour change, explain the conflict and obtain direction rather than silently changing brand colours.

Exit condition: documented palette mapping and reusable tokens consistent with the inspected direction.

## M4: Rebuild components

Build in this order, retaining only components supported by the captured content:

1. Typography, container, section, button, and link primitives.
2. Header, desktop navigation, mobile menu, and footer.
3. Hero and primary contact action.
4. Services, about, and authentic proof sections.
5. Contact details and any evidenced form with a real delivery mechanism.

Provide an isolated component preview with default, hover, focus, active, disabled, loading, and error states where applicable. Implement keyboard operation, reduced motion, and narrow-screen layouts. Do not ship a fake successful enquiry state.

Exit condition: components match retained colours and reviewed direction, and meaningful interaction checks pass.

## M5: Reconstruct pages

Create the client project in `moziserve/`, separate from the reference repositories. Prefer static HTML, CSS, and minimal JavaScript unless requirements justify a framework. Assemble verified copy and assets, preserve useful routes or prepare redirects, and add titles, descriptions, and verified contact links.

Exit condition: every retained route and business claim has a source, and complete pages can be reviewed locally.

## M6: Validate the result

Check 360, 768, and 1440 CSS pixel widths, zoom, long text, navigation, forms if present, image alternatives, keyboard focus, contrast, and reduced motion. Compare colours against the source token inventory. Check content fidelity, links, image provenance, and loading behaviour. Record actual results and remaining limits. Scan authored text for emojis and em dashes.

Exit condition: material issues resolved and verification results documented, including unrun checks.

## M7: Deliver for review

Publish the replacement through the selected hosting workflow and record its URL. Prepare any route redirects and a production migration checklist. Changes to the existing domain's DNS or production host require its actual configuration and appropriate deployment authorization.

Exit condition: a reviewable replacement and clear handover. No production migration has been performed.
