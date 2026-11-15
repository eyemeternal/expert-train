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
