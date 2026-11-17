# Moziserve website

Five static pages reconstructed from the reviewed REA captures. The homepage uses the owner-approved motion study, including the original logo, dark video hero, original copy and responsive video selection. The text-led Our Services rail glides continuously in a horizontal loop and links to the six permanent service sections. It pauses during hover, touch, or keyboard focus; arrows switch to manual navigation. Reduced-motion users get manual scrolling. The Services page and other interior pages use ordinary document flow.

## Run locally

From the workspace root:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory moziserve
```

Open [the local homepage](http://127.0.0.1:8766/) in a browser on the same machine as the server. The five routes are `/`, `/about-us/`, `/services/`, `/faq/`, and `/contact/`.

## Content and assets

- The site logo and favicon are byte-for-byte copies of the reviewed assets. The shared CSS maps the captured body, footer, accent, dark surface, white and light greys to reusable properties. [Asset manifest](../docs/moziserve/evidence/2026-11-15/manifest.md) · [Colour register](../docs/moziserve/aesthetics-review.md#exact-homepage-colours)
- The hero streams the same illustrative Pexels clips as the approved study. Desktop uses the substation and solar aerial. Mobile uses the equipment close-up. Both have still-image and background-colour fallbacks. Confirm media rights and the production delivery approach before publishing. [Desktop footage](https://www.pexels.com/video/aerial-view-of-electricity-substation-with-solar-panels-30915324/) · [Mobile footage](https://www.pexels.com/video/close-up-shot-of-insulators-in-substation-10058463/) · [Pexels licence](https://www.pexels.com/license/)
- Page copy is adapted from the captured Moziserve pages. Quote requests open the visitor's email client or dialler using the published address and number. Form delivery still needs a confirmed endpoint and an approved test destination. [Source audit](../docs/moziserve/source-audit.md)

## Local QA

Run the source and interaction checks from the workspace root:

```sh
python3 moziserve/tests/static_qa.py
node --test --test-isolation=none moziserve/tests/home.test.cjs moziserve/tests/theme.test.cjs moziserve/tests/contact.test.cjs
```

The controller tests use simulated events and a deterministic clock. They do not replace browser review. With the server running at port 8766 and a working Python Playwright/Chromium installation, run `python3 moziserve/tests/browser_qa.py` for the responsive route and interaction checks. Screenshots are written to `/tmp/moziserve-qa/` for manual inspection. See the [pre-publish QA report](../docs/moziserve/pre-publish-qa.md) for actual results, environment limits, and owner review items. Keep changes local until the owner authorizes publishing.

The hero has no visible playback or attribution strip. Both source links, the illustrative-footage disclosure, and a background-video toggle are available under **Video credits** in the homepage footer.

## Approved single-client section

The owner selected B, the client spotlight, with A's original logo treatment. A subsequent refinement aligns Our client with Why partner with us using shared columns, heading sizes, spacing and one-pixel dividers. The right column contains a compact logo and company name. It sits after Services and before Why Partner With Us and shows AFMETCO Group as the single client. The original AFMETCO logo is stored locally with [provenance](../docs/moziserve/source-audit.md#single-client-update-on-2026-11-17). The five old logo references and comparison page are removed. This was an owner design review without measured visitor results. [Review record](../docs/moziserve/single-client-review.md)

## Approved partnership section

The owner selected **A: The editorial list** for Why Partner With Us. It sits after the company band and before Request a Quote, retaining the captured introduction and four reasons. The white layout uses a large introduction beside numbered rows and stacks on mobile. [Source and implementation review](../docs/moziserve/why-partner-review.md)

## Header and theme

The homepage header uses rounded sides, 10 percent horizontal inner spacing, and a translucent background over the approved video. On narrow screens the quote action gets its own row. A sun/moon toggle sits at the right of every page header. Dark mode starts enabled and the visitor’s explicit choice is saved locally across pages. If storage is blocked, the toggle still works for the current page. JavaScript-disabled visitors retain the light theme.

## Approved contact page

The owner selected B, the guided enquiry composer, as the final [contact page](http://127.0.0.1:8766/contact/). Comparison controls and the unselected layout have been removed. The composer prepares an encoded email draft from the visitor's name, enquiry type, optional project location and message. Drafts always target enquiries@moziserve.co.za, retaining the published source address and the owner-selected visitor email app approach. The visitor must press Send in their email app. No backend delivery or inbox receipt is verified. The composer does not save entries to browser storage or submit them to a web service.

Without JavaScript, visitors can use the email link and copy the displayed address into webmail. The original project guidance is retained: include project location, the work needed and the desired timeline. This was a local design review without conversion measurements. Actual email-app launch and sending need inspection on the owner's device.
