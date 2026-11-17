# Source Audit

## Successful capture

On 2026-11-15, a network-enabled HTTPS request to [moziserve.co.za](https://moziserve.co.za/) returned HTTP 200. The HTTPS www hostname returned 301 to the apex, which returned 200. Chromium subsequently loaded all five linked pages. The [evidence manifest](evidence/2026-11-15/manifest.md) lists the final URLs, PNGs, logo files, and REA evidence IDs. Raw HTML for each page, computed style readings, selected CSS responses, and REA JSON are held locally under the ignored `evidence/raw/2026-11-15/` directory.

## Observed navigation and content

| Source | Visible content captured |
| --- | --- |
| [Home](https://moziserve.co.za/) | Engineering positioning, vision and mission, market segments, six service headings, and contact information |
| [About Us](https://moziserve.co.za/about-us/) | Company profile, quality and safety, and a section headed Companies We Work With |
| [Services](https://moziserve.co.za/services/) | Project delivery approach, core services, and quote call to action |
| [FAQ](https://moziserve.co.za/faq/) | Frequently asked questions, including the sectors served |
| [Contact](https://moziserve.co.za/contact/) | Contact details, founder profile, and quote enquiry form |

The browser title identifies the business as MOZISERVE (PTY) LTD. Home lists Electrical Infrastructure, Integrated Energy Solutions, Industrial Project Delivery, Systems Integration, Testing & Commissioning, and Engineering-Led Procurement. Home and Contact display 2 Sydney Road, Boksburg, 1459 and enquiries@moziserve.co.za. The header displays +27 814893640 and the homepage contact section displays +27 81 489 3640. These are source statements and display values. Service claims, profile credentials, and depicted company relationships have not been independently substantiated. [Home](https://moziserve.co.za/) · [Contact](https://moziserve.co.za/contact/) · [About Us](https://moziserve.co.za/about-us/)

The homepage and contact page include WPForms with a POST action pointing to the respective page URL. No visible telephone or email anchor using a `tel:` or `mailto:` destination was found in their retrieved HTML. Delivery, validation under submission, opening hours, and routes outside the observed navigation remain unverified. [Home](https://moziserve.co.za/) · [Contact](https://moziserve.co.za/contact/)

## Asset provenance

- The header displays the WordPress `img.custom-logo` image. The downloaded 91 × 91 and high-resolution 1998 × 1998 variants and the separate site icon retain their original bytes. [Logo manifest](evidence/2026-11-15/manifest.md)
- The homepage hero CSS refers to `ser.png`. The homepage also includes an image named `prasad-bhalerao-0UWV0DyFHos-unsplash-scaled.jpg`. Both responses are preserved locally as raw evidence. The filename is a provenance clue. It does not establish ownership or permission for production reuse. [Hero image](https://moziserve.co.za/wp-content/uploads/2026/08/ser.png) · [Homepage photo](https://moziserve.co.za/wp-content/uploads/2026/07/prasad-bhalerao-0UWV0DyFHos-unsplash-scaled.jpg)
- The exact source colours, their observed roles, and the scope of the inspection are recorded in the [aesthetics review](aesthetics-review.md).

## Earlier access attempts

The initial sandboxed requests and web retrieval returned access failures before the successful retry on the same date.

| Attempt | Observed result | Limit |
| --- | --- | --- |
| Web open: HTTPS apex | Tool reported inaccessible URL | No HTML or screenshot retrieved |
| Web open: HTTPS www | Tool reported inaccessible URL | No alternate host verified |
| Web open: HTTP apex | Tool reported inaccessible URL | No working redirect verified |
| Search: domain and brand | No results returned | Does not prove the business has no indexed pages |
| Local curl: HTTPS apex | Exit 6, could not resolve host | Environment has restricted network access |

These failures do not establish public downtime. These initial attempts yielded no source evidence.


On 2026-11-15, after the user confirmed the target is trusted, another web retrieval still returned an inaccessible-URL result. A local headless Chromium attempt exited with code 133 because its crash reporting process encountered a prohibited socket operation. It did not retrieve or render the page. These are execution limits, not evidence about the company or public website availability.

The plugin-management skill was used to discover an alternative retrieval capability. Firecrawl was found and suggested, but is not installed or connected in this session. Its cloud retrieval has not been attempted. The user rejected the similarly named Mizoserve company; exclude that company and its domain from Moziserve research.

## About Us company logos restored

The owner requested restoring the source company section with the heading **Trusted by**. The local HTML captured on 2026-11-15 from https://moziserve.co.za/about-us/ contains five images under **Companies We Work With**, in this order:

1. [Original logo 1](https://moziserve.co.za/wp-content/uploads/2021/03/icon-1.jpg)
2. [Original logo 2](https://moziserve.co.za/wp-content/uploads/2021/03/icon-2.jpg)
3. [Original logo 3](https://moziserve.co.za/wp-content/uploads/2021/03/icon-3-1.jpg)
4. [Original logo 4](https://moziserve.co.za/wp-content/uploads/2021/03/icon-4-1.jpg)
5. [Original logo 5](https://moziserve.co.za/wp-content/uploads/2021/03/icon-5-1.jpg)

The source uses generic alt text, `icon 1` through `icon 5`, with no accompanying company names or destinations. The capture package does not contain these five image bytes, and new network requests failed. About Us now references the exact original image URLs in a static responsive grid. The heading change is owner-requested. Company identities, current relationships, logo rendering, meaningful named alternatives, and local asset copies remain for owner review. No company names or endorsements beyond the requested section heading were invented.

The owner subsequently approved moving this section from About Us to a compact, static homepage strip immediately after Our Services and before Request a Quote, headed **Companies we work with**. The five original image references are retained. Desktop uses one row; mobile uses two columns with the last logo centred. The logo identities and remote image rendering remain unverified in this session.

After reviewing two HTML alternatives, the owner approved **A: The statement band** as final. The homepage company section now uses the captured navy and blue with five larger white logo panels, immediately after Our Services. The unselected comparison page was removed after integration. All five original image URLs are unchanged; identities and remote rendering remain pending confirmation. This approval covers the design and local commit, not publishing.

## Single client update on 2026-11-17

The owner confirmed AFMETCO as the one client to display and authorized its public listing. This supersedes the previous five unidentified source logo references in the homepage client section. AFMETCO's official homepage, https://afmetco.co.za/, identifies the business as African Metals Corporation and describes its group structure. The owner approved the display name AFMETCO Group. The exact contracting entity and project scope remain unspecified; no project description, testimonial or subsidiary logos were added.

The initial web retrieval timed out and sandboxed curl could not resolve the host. An authorized network retry successfully retrieved the official homepage and the original logo from https://afmetco.co.za/wp-content/uploads/2023/08/afmetco-logo.png on 2026-11-17. The unchanged PNG is stored at `moziserve/assets/afmetco-logo.png`, dimensions 2633 by 538, SHA-256 `81b7eea8674941df046fecba41f25032e48c9b4ba47b4c310c02090687bbc141`. The logo was visually inspected. This records source provenance and owner authorization to list the client; it does not independently establish brand licensing terms.

The owner selected the B client spotlight with A’s compact logo panel aligned vertically with the company wording. Both options used the same original logo asset. The comparison page and old logo references were removed after integration. See [single-client review](single-client-review.md). No publishing or source-hosting changes were made.
