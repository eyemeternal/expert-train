# Moziserve website

Five static pages reconstructed from the reviewed REA captures. The homepage uses the owner-approved motion study, including the original logo, dark video hero, original copy and responsive video selection. The horizontal, text-led Our Services rail links to the six permanent service sections. The Services page and other interior pages use ordinary document flow.

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
