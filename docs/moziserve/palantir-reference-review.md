# Palantir Homepage Reference Review

On 2026-11-15, REA 6.9.0 inspected the live Palantir homepage over loopback CDP in Chromium 156. The final URL returned HTTP 200 on desktop at 1440 × 900 and mobile emulation at 390 × 844. Chromium DOM and media properties supplemented REA inspection and viewport captures. [Palantir homepage](https://www.palantir.com/)

## Aesthetics and interaction observed

| Element | What the browser showed |
| --- | --- |
| Header | The desktop header floats over the dark opening and becomes light over the white software section. A prominent Get Started button sits beside compact search and menu controls. |
| Hero media | The page selects distinct desktop and mobile MP4 files and supplies a still poster. The video element reported muted looping playback on both viewports. The viewport PNGs remained dark even after seeking. Playback state and source URLs were observed, while the film frames were not verified visually. |
| Feature stories | The desktop capture shows one wide story at a time, a slim index above it, and arrows over the media. On mobile, one large image and a sliver of the next appear above a separate caption and See All link. Automatic rotation was not verified. |
| Software section | A white, vertically stacked product index uses oversized names, descriptions on one or two lines, fine dividers, and small index markers. |
| Typography | The browser reported Alliance No.1 for body and sampled display text, and Alliance No.2 for some small navigation labels. Body text computed to 18px at weight 400. The first product name computed to 80px with minus 4px tracking on desktop and 72px with minus 3px tracking on mobile, at weight 400 on both. |
| Product motion | The DOM exposes five additional muted loop videos associated with the software entries. Their initial state was unloaded or paused. |

The first-pass PNGs and REA records are in the ignored local folder `evidence/raw/2026-11-15-palantir/`. Desktop inspection evidence is `ev_9f4f133737a9117b164393c144531423cad26eaee49fc48c4a61cfede806e033`. Mobile inspection evidence is `ev_489abbd278a2a8225c50e7eb956a76910c68e765b2bcdc19aaef89ed935711be`.

The second-pass desktop and mobile featured-story captures are in `evidence/raw/2026-11-15-palantir/second-pass/`. Their REA evidence IDs are `ev_7b8b7c099c075550ac2bca8a9e55d865a6c1e17e87c7d74e92fc68557111de47` and `ev_0069739593d36209172fe500ebc44f092fbe4b0231f7e198c6ae7ed89998dd6c` respectively.

## Moziserve direction for owner inspection

Use a nearly full-width opening film with a still poster, a compact floating header, and a fixed, easy-to-find Request a Quote action. In the following white section, use regular-weight display type, generous spacing, and thin dividers. The previous Geist treatment has no approval. Test typography at the observed weight and scale with Moziserve's long service names before selecting a font. Use the exact captured Moziserve palette and original logo.

Base the **Our Services** movement on the featured-story format. Give one service the main frame, show the next frame at the edge, and keep the description and service link readable for the full dwell time. The owner requires horizontal auto-advance. Keep previous, next, and persistent pause controls visible. Pause during interaction and default to manual navigation under reduced motion. Keep the static View all services link visible. Inspect the [desktop and mobile motion study](motion-study/index.html) before building components. It proposes regular-weight Instrument Sans and streams the listed Pexels illustrations directly. The desktop plays the aerial shot. Mobile uses the closer equipment composition. The footage and repeated service stills are for design review, with final media selection and approval open.

## Video references checked on 2026-11-15

| Candidate | Proposed use |
| --- | --- |
| [Palantir desktop reel](https://www.palantir.com/assets/xrfr7uokpv1b/01seEIx1DjspOdLUkT3yF3/4109e5d0f243aebba826eabca0861587/PAL_HEADER_LOOP_Desktop_V2.2.mp4) and [Palantir mobile reel](https://www.palantir.com/assets/xrfr7uokpv1b/2cJJzYBUBhBUB4vMs0QKxB/f20dbdd79d3ea0f40a6fe2fe51b04f21/PAL_HEADER_LOOP_Mobile_V2.2.mp4) | Design references for separate responsive edits and the opening media treatment. |
| [Aerial substation with solar](https://www.pexels.com/video/aerial-view-of-electricity-substation-with-solar-panels-30915324/) | Opening wide shot that connects grid infrastructure with integrated energy. |
| [Substation insulator close-up](https://www.pexels.com/video/close-up-shot-of-insulators-in-substation-10058463/) | Equipment detail to cut against the wide shot. |
| [Eskom Hex storage video](https://www.linkedin.com/posts/eskom_restore-the-power-grid-africas-largest-activity-7129399445217001472-iGU0) | Editorial reference for a South African utility-scale battery project. |
| [Palantir AIPCon](https://www.palantir.com/aipcon) | Reference for placing longer, click-to-play films below a homepage's primary story. |

The Pexels clip listings and licensing page were checked. Confirm suitability and rights for the final edit and identify stock footage as illustrative. Palantir and Eskom media are references with publication rights unverified. For the strongest sequence, request approved Moziserve footage of equipment, site coordination, and commissioning to supplement or replace illustrative shots. [Pexels licence](https://www.pexels.com/license/)
