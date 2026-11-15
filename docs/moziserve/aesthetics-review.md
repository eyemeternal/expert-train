# Aesthetics Review

Source captured on 2026-11-15. The original screenshots, colour register, and layout proposal are ready for review. User feedback is pending. [Source capture manifest](evidence/2026-11-15/manifest.md)

## Original homepage

| Desktop · 1440 × 900 | Mobile · 390 × 844 |
| --- | --- |
| ![Original Moziserve desktop homepage with navigation, logo, hero, and cookie banner](evidence/2026-11-15/home-desktop.png) | ![Original Moziserve mobile homepage with logo, menu button, hero, and cookie banner](evidence/2026-11-15/home-mobile.png) |

Both views show the first-visit cookie banner and the initial viewport. The mobile header uses a blue menu button in place of the desktop link row. Both use the same logo, white hero heading and button, and a dark overlay over the engineering image. The mobile image is cropped more tightly and the banner occupies about the lower third of the capture.

![Header logo as served by Moziserve](evidence/2026-11-15/header-logo-91.png)

The rendered header logo has a companion [1998 × 1998 source PNG](evidence/2026-11-15/header-logo-2x.png). The site also declares a [separate icon](evidence/2026-11-15/site-icon-192.png). The image's current homepage alternative text is unrelated to the logo. The asset can remain while its text alternative is corrected during the rebuild. [Logo provenance](evidence/2026-11-15/manifest.md)

## Exact homepage colours

The table uses CSS declarations and Chromium computed styles from the original page. The hex values for computed RGB colours are exact conversions. Logo and photo pixels were excluded from the CSS register.

| Value | Observed use or declaration | Evidence |
| --- | --- | --- |
| `#0089E4` | Active navigation, header phone display, Services button and form submit background | Computed `rgb(0, 137, 228)` and Astra `--ast-global-color-0` |
| `#192730` | Body text | Computed `rgb(25, 39, 48)` and Astra `--ast-global-color-1` and `-3` |
| `#000000` | Inactive desktop navigation | Computed `rgb(0, 0, 0)` and Astra `--ast-global-color-2`, `-7`, and `-8` |
| `rgba(241, 241, 241, 0.71)` | Header background | Homepage self-hosted inline Astra CSS, `.ast-primary-header-bar` |
| `#FFFFFF` | Body background, hero heading, hero button surface, and blue button text | Computed `rgb(255, 255, 255)` and Astra `--ast-global-color-5` |
| `#F6F6F8` | Market segments surface | Computed `rgb(246, 246, 248)` on `.elementor-element-9f17186` and Astra `--ast-global-color-4` |
| `#ECEDEF` | Declared alternate background | Astra `--ast-global-color-6`; specific visible assignment unconfirmed |
| `#0A013E` at opacity `0.53` | Hero photo overlay | Elementor `.elementor-element-6721d7b::before` and `--overlay-opacity` |
| `#0C091D` | Hero button text and dark contact panel background | Computed `rgb(12, 9, 29)` on the hero button and `.elementor-element-24a0ed0` |
| `#F5F5F5` | Vision heading | Computed `rgb(245, 245, 245)` on the Vision heading |
| `#1A3446` | Footer background | Computed `rgb(26, 52, 70)` and inline Astra `.site-footer` |
| `#377A00`, `#2F6A00`, `#374151`, `#FFFFFF` | Cookie banner button, declared hover, body text, and surface respectively | Homepage `surecookie-public-inline-css` |

The Elementor kit separately declares `#6EC1E4`, `#54595F`, `#7A7A7A`, and `#61CE70` as its primary, secondary, text, and accent defaults. These were read from computed custom properties. Their roles in the sampled homepage components are unconfirmed. [Homepage](https://moziserve.co.za/) · [Elementor page CSS](https://moziserve.co.za/wp-content/uploads/elementor/css/post-1361.css?ver=1793678323) · [Elementor kit CSS](https://moziserve.co.za/wp-content/uploads/elementor/css/post-1182.css?ver=1793678323)

## Review scope

- The homepage body and hero heading compute to Montserrat with a sans-serif fallback.
- Desktop captures are also available for [About Us](evidence/2026-11-15/about-us-desktop.png), [Services](evidence/2026-11-15/services-desktop.png), [FAQ](evidence/2026-11-15/faq-desktop.png), and [Contact](evidence/2026-11-15/contact-desktop.png).
- The register covers sampled homepage components and directly related source rules. Other pages, interaction states, and contrast still need review before token mapping or implementation.

## Proposed direction for review

Position Moziserve as an engineering-led delivery partner for electrical, energy, and industrial infrastructure. Its offer spans equipment selection and procurement, site coordination, integration, testing, and commissioning. The source names mining, manufacturing, data centres, commercial facilities, and independent power producers among its markets. The proposed homepage serves technical and procurement readers who need to establish capability, fit, and how to enquire. [Services](https://moziserve.co.za/services/) · [FAQ](https://moziserve.co.za/faq/)

**Proposed hero headline**

Electrical and energy infrastructure delivery

**Proposed supporting copy**

Moziserve helps industrial and commercial teams deliver electrical infrastructure and integrated energy systems, from technical procurement and site coordination through testing and commissioning.

| Homepage section | Desktop treatment | Mobile treatment |
| --- | --- | --- |
| Header | Original logo on the left, existing route links and a visible Request a Quote action on the right. | Original logo and labelled Menu button. Keep Request a Quote available in the hero. |
| Hero | Split the headline and actions from one engineering image with confirmed usage rights. Use Request a Quote as the primary action and Explore Services as the secondary action. | Place copy and actions above the image. Keep both actions visible without relying on text over the photo crop. |
| Core services | Show the six published capabilities in a three-column grid. Each gets a short description and a link to its section on the Services page. | Use a single-column list in the same order. |
| Sectors served | Use a light surface and a compact list of the published markets. | Present the same markets as a short, wrapping list. |
| How Moziserve delivers | Use four stages drawn from the published offer. Technical planning and procurement, site delivery, systems integration, then testing and commissioning. | Stack the stages in reading order. |
| Company and quality | Add a short quality and safety statement and link to About Us, where the leadership profile can sit. Include dated credentials or named project proof once supporting material is approved. | Show the quality statement and About Us link together. |
| Contact and footer | Close with Request a Quote, then make the published email, phone, and address easy to find. Use the existing dark footer colour. | Stack contact actions and navigation with clear tap targets. |

Retain the five existing routes. Home summarises the offer. Services expands the six capabilities. About Us holds the company, leadership, and quality story. FAQ covers markets, coverage, support, and procurement. Contact holds the quote enquiry and direct contact details. The quote action can link to Contact while form delivery is verified. [Route and contact evidence](source-audit.md)

Use the original logo, white and light grey surfaces, dark body text, and the existing blue for links and emphasis. Apply the verified footer blue and preserve the existing typography direction, starting with Montserrat. Check text and button contrast using pairings from the existing palette. Confirm current B-BBEE documentation and permission to use partner logos, project imagery, or case studies before publishing those proof points. [Source colour register](#exact-homepage-colours)
