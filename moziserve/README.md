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
node --test --test-isolation=none moziserve/tests/home.test.cjs
```

The controller tests use simulated events and a deterministic clock. They do not replace browser review. With the server running at port 8766 and a working Python Playwright/Chromium installation, run `python3 moziserve/tests/browser_qa.py` for the responsive route and interaction checks. Screenshots are written to `/tmp/moziserve-qa/` for manual inspection. See the [pre-publish QA report](../docs/moziserve/pre-publish-qa.md) for actual results, environment limits, and owner review items. Keep changes local until the owner authorizes publishing.

The hero has no visible playback or attribution strip. Both source links, the illustrative-footage disclosure, and a background-video toggle are available under **Video credits** in the homepage footer.

## Approved company section

The owner selected **A: The statement band** as the final company section. It sits immediately below Our Services with a navy background, blue accent, prominent heading and five white logo panels. Mobile uses two columns with the last logo centred. The original remote logo references remain; company identities and image rendering still need confirmation. The A/B comparison was a local design review, with no visitor analytics or traffic experiment. Publishing remains subject to separate owner authorization.

## Approved partnership section

The owner selected **A: The editorial list** for Why Partner With Us. It sits after the company band and before Request a Quote, retaining the captured introduction and four reasons. The white layout uses a large introduction beside numbered rows and stacks on mobile. [Source and implementation review](../docs/moziserve/why-partner-review.md)
