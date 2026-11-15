# Source Audit

## Evidence status

Target explicitly confirmed by the user: https://moziserve.co.za

Research date: 2026-11-15. The domain is confirmed only as the requested target, not as a successfully retrieved business website.

| Attempt | Observed result | Limit |
| --- | --- | --- |
| Web open: HTTPS apex | Tool reported inaccessible URL | No HTML or screenshot retrieved |
| Web open: HTTPS www | Tool reported inaccessible URL | No alternate host verified |
| Web open: HTTP apex | Tool reported inaccessible URL | No working redirect verified |
| Search: domain and brand | No results returned | Does not prove the business has no indexed pages |
| Local curl: HTTPS apex | Exit 6, could not resolve host | Environment has restricted network access |

These failures do not establish public downtime. No page content or visual observations are available. Screenshots, technology fingerprints, service descriptions, and contact details remain unknown.

## Content inventory to capture

| Content | Status | Required evidence |
| --- | --- | --- |
| Business name and positioning | Unverified | Visible page text and source URL |
| Logo, colours, typography | Unverified | Original assets and desktop/mobile screenshots |
| Services and service areas | Unverified | Exact headings, descriptions, and relevant URLs |
| About and credentials | Unverified | Source text and supporting links |
| Contact details and opening hours | Unverified | Visible contact content and link targets |
| Navigation and page routes | Unverified | Linked URLs and observed redirects |
| Enquiry workflow | Unverified | Fields, validation, destination, and consent text |
| SEO metadata and social links | Unverified | Titles, descriptions, canonical URLs, and links |
| Image ownership and reuse rights | Unverified | Asset provenance and rights confirmation |

## Capture procedure

When access is restored, inspect public pages and retain their exact URLs. Store reviewed evidence under `docs/moziserve/evidence/` with dated filenames and a manifest containing capture time, method, final URL, and limitations. Keep unreviewed HTML, HAR files, and other raw captures in the ignored `docs/moziserve/evidence/raw/` directory; review them for credentials and personal data before promoting selected evidence into version control. Preserve raw content separately from rewritten copy. Do not submit live enquiry forms during research.

Use REA passive page inspection for structure and metadata, then screenshots at recorded viewport sizes. Inventory every observed route before proposing redirects. A static route candidate is not proof of a reachable page. Preserve missing information as unknown.

## Additional retrieval attempts

On 2026-11-15, after the user confirmed the target is trusted, another web retrieval still returned an inaccessible-URL result. A local headless Chromium attempt exited with code 133 because its crash reporting process encountered a prohibited socket operation. It did not retrieve or render the page. These are execution limits, not evidence about the company or public website availability.

The plugin-management skill was used to discover an alternative retrieval capability. Firecrawl was found and suggested, but is not installed or connected in this session. Its cloud retrieval has not been attempted. The user rejected the similarly named Mizoserve company; exclude that company and its domain from Moziserve research.
