# Moziserve Website Build Brief

Build a professional business-to-business engineering website in `moziserve/` using the REA captures as the source of truth. Moziserve presents itself as an engineering-led partner for delivering electrical, energy, and industrial infrastructure. The site should help a technical or procurement buyer understand the company's capabilities, assess sector fit, and request a quote in one click from any page.

The owner approved the original video-led motion study and asked for revisions only to its Our Services section. Use the motion study as the homepage reference. Apply the text-led Services treatment below. [Approved motion study](motion-study/index.html)

## Source package

- Use the five original routes `/`, `/about-us/`, `/services/`, `/faq/`, and `/contact/`. Refer to the dated screenshots, captured copy, and verified contact details when developing each page. Local raw HTML and REA JSON are under `docs/moziserve/evidence/raw/2026-11-15/` and are ignored by Git. A separate checkout may need a copy of those files. Start with the committed audit and evidence either way. [Source audit](source-audit.md) · [REA capture manifest](evidence/2026-11-15/manifest.md)
- Keep the original logo artwork. Use the source PNG to produce web-sized derivatives with the same proportions and meaningful alternative text. Retain the exact verified palette, including `#0089E4`, `#192730`, `#FFFFFF`, `#F6F6F8`, and `#1A3446`. Preserve the rest of the source register for role mapping. Measure contrast before pairing text and surfaces. Follow the approved motion study’s regular-weight Instrument Sans with a system sans-serif fallback. [Original logo](evidence/2026-11-15/header-logo-2x.png) · [Colour register](aesthetics-review.md#exact-homepage-colours)

## Homepage and route responsibilities

1. **Header.** Keep the original logo, existing navigation, and a prominent **Request a Quote** link to `/contact/#request-a-quote`. On mobile, expose the link outside the menu and keep menu focus and close behaviour predictable.
2. **Hero.** Use the proposed heading **Electrical and energy infrastructure delivery**. Add a short explanation covering procurement through commissioning. Pair **Request a Quote** with a secondary **Explore Services** link. Use one large editorial headline over a deep source-colour field, with imagery weighted to the right and the copy on the left. On mobile, keep headline and actions legible independently of the crop.
3. **Our Services.** Keep the six published capabilities in a horizontal presentation on desktop and mobile. Give each its own link to a permanent anchor on the Services page. Show an **All services** link independent of the interactive section.
4. **Sectors and delivery.** Show the published markets and explain the proposed delivery sequence from technical planning and procurement through site delivery, integration, testing, and commissioning. Keep any explanation of the process traceable to the published offer.
5. **Company and quality.** Introduce Moziserve's approach to quality and safety and link to the company and leadership content on About Us. Add approved proof as it becomes available.
6. **Contact and footer.** Repeat the quote action and make the published phone and email clickable. Display the Boksburg address in text. Keep FAQ available from navigation and use native expandable questions where appropriate. [Page content and contact evidence](source-audit.md)

## Auto-advancing Our Services

Present the six published capabilities in a single horizontal rail of rounded text-led panels with minimal visuals. Show multiple panels on desktop. On mobile, show one full panel with the next partly in view. Give each panel a full service name, a short technical description, and a deep link. Keep **View all services** fixed outside the moving area.

Advance one position approximately every five seconds while the section is visible. Provide previous and next buttons and touch scrolling. Using either arrow switches to manual navigation for the remainder of the visit. Suspend automatic movement during hover, touch, and focus within the moving rail. Keep the rail manual for reduced-motion users and move without animation in that mode. Keep focus on the user's chosen control and keep automatic updates quiet for assistive technology.

Preserve source order and use six permanent anchors on the Services page. The link list and full Services page must remain available with JavaScript disabled. Use the approved palette for the section, with rounded edges, fine borders, compact descriptions, and restrained blue accents. [Published services](https://moziserve.co.za/services/)

## Media and movement

Use a poster-first hero with one short, muted motion sequence as the proposed treatment. Open on an electrical substation, then use a close-up of switchgear or testing, with optional solar or battery storage footage where it fits. Keep the headline and quote action independent of playback. Load video after the primary content. Provide a visible pause control for any automatic loop and use the poster for reduced-motion and data-saving preferences where detectable. Keep controls usable on mobile and retain a poster if playback fails. If Moziserve supplies a narrated project film, use click-to-play with captions and a text alternative.

Use Palantir as a visual reference for a strong opening statement, selective use of large imagery, short capability descriptions, and direct links into deeper information. Adapt those cues to Moziserve’s published engineering offer using its own logo, the exact captured palette, and cleared industry media. Give the hero and Services rail separate controls. [Palantir homepage](https://www.palantir.com/new-homepage/) · [Palantir Platforms](https://www.palantir.com/platforms/)

### Industry references reviewed on 2026-11-15

| Reference | Direction for Moziserve |
| --- | --- |
| [Eskom's Hex battery storage video](https://www.linkedin.com/posts/eskom_restore-the-power-grid-africas-largest-activity-7129399445217001472-iGU0) and [Eskom BESS programme](https://www.eskom.co.za/distribution/battery-energy-storage-system/) | Use as editorial reference for South African utility-scale storage and equipment context. It depicts Eskom's project. |
| [Fluence Rangebank battery storage timelapse](https://www.linkedin.com/posts/fluenceenergy_batteries-energytransition-activity-7174156195866234881-Ldd7) | Use as a pacing reference for a future Moziserve project film when authentic, approved project footage is supplied. |
| [Pexels electrical substation aerial](https://www.pexels.com/video/aerial-view-of-large-electrical-substation-30915329/) | Candidate for illustrative hero footage. Review the [Pexels licence](https://www.pexels.com/license/) and the exact clip, including site signage, people, and visual fit, before release. |
| [Merapi substation photograph by Graeme Williams, Media Club](https://commons.wikimedia.org/wiki/File:Merapi_substation_ZA_2008_A.jpg) | Candidate for an illustrative South African electrical infrastructure photo. The file page lists CC BY-SA 2.0. Record credit and any adaptation terms if selected. |

Prioritise owner-supplied imagery showing approved, safe site work and authentic equipment. Record each selected asset's source, author, licence or permission, and intended role. Clearly identify illustrative footage where a visitor could reasonably infer it depicts Moziserve's work. Industry videos above are visual references. Permission to publish them has not been established.

## Quote journey and release inputs

On Contact, put **Request a Quote** above the form, with an explanation of what to provide. Propose name, work email, company, service of interest, and a short project description. Keep phone and project location optional unless Moziserve confirms they are required. When arriving from a specific service, preselect it and allow edits. Keep direct phone and email available alongside the form.

| Currently missing or unverified | What the site needs |
| --- | --- |
| Quote delivery | Confirm the receiving mailbox or CRM, ownership and routing, the production form endpoint, and the approved test process. The captured WordPress form shows page-level POST actions. Delivery is unverified. Until it is wired and tested, offer the published phone and email without a simulated form success. |
| Project proof and current credentials | Obtain approved project summaries with Moziserve's role, dates, outcomes, and permission to name clients. Confirm current B-BBEE documentation and permissions for partner logos and any named endorsements. |
| Brand and media rights | Obtain written clearance for the original logo and any supplied production imagery. Request usable wide and portrait crops, footage, credits, and a vector master if one exists. The REA capture contains a high-resolution logo PNG and existing site asset references. |
| Privacy, cookies, and analytics | Confirm owner-approved privacy copy, form data handling and retention, and the actual scripts or embeds intended for production. Align consent and disclosures with those choices. |
| Hosting and launch | Confirm review hosting, production access, and domain responsibilities before migration. Keep the existing routes and identify any additional legacy URLs requiring redirects. |

## Acceptance checks

- All five routes work and have useful page titles and descriptions. Services deep links, menu navigation, FAQ, and direct phone and email work on desktop and mobile.
- At 360, 768, and 1440 CSS pixels, the quote action is discoverable, the service section remains horizontal, and the page itself has no horizontal overflow. Verify automatic advance, the switch to manual navigation, previous and next, touch, offscreen suspension, focus visibility, zoom, contrast, and reduced motion.
- With media blocked or disabled, the hero copy and actions still work. Verify poster, pause, and fallback behaviour, and measure initial loading with the proposed media on a constrained mobile connection.
- When the live form is ready, test valid delivery to the approved inbox, invalid inputs, a delivery failure, and duplicate submission handling on an approved test destination. Confirm the user sees success only after the service accepts the enquiry.
- Review the final copy and media against the REA captures and approvals. Record the checks actually performed and anything awaiting access or client materials. Deliver a review preview before any production change.
