# Local Pre-publish QA

Review date: 2026-11-15. Baseline: `ce5b01a`. Requested preview: http://127.0.0.1:8766/. Scope: preserve the approved homepage and interior pages; fix reproducible interaction defects. No publishing, hosting configuration, DNS changes, or external enquiry submissions were performed.

## Evidence and preservation

Reviewed the root AGENTS.md, site README, build brief, source audit, REA capture manifest, colour register, and relevant local raw content. The raw FAQ supports the existing sectors, national coverage, lifecycle support, and engineering-led procurement summaries. The captured Contact profile supports the existing leadership summary.

All five pages retain their baseline text data. Shared CSS is byte-for-byte unchanged, preserving palette and layout declarations. Logo and favicon bytes match the reviewed source files. Both Pexels video URLs, poster URLs, and credit destinations remain unchanged. The horizontal rail remains confined to the homepage Our Services section; the Services page retains normal document flow.

## Reproduced defects and fixes

A deterministic event harness executed the shipped controller. Before fixes, three of seven checks failed:

| Defect | Fix | Verification |
| --- | --- | --- |
| Data-saving preference did not prevent automatic video playback | Gate automatic loading/playback on the detectable connection preference; explicit Play remains available | Passing controller test |
| Enabling reduced motion paused the current video frame instead of restoring the poster | Hide the video and retain the selected poster as the hero background | Passing controller test |
| Video/source errors left a non-working playback control available | Restore the poster and hide the unusable control; allow recovery when changing responsive sources | Passing controller tests |

Video starts hidden with `preload="none"` and deferred source selection. Observe the hero section rather than the hidden video so intersection detection can still start normal playback. Reveal the video on `playing`; rejected playback keeps the poster and permits an explicit retry. No service-rail behaviour changes were required by the logic checks.

These are controller-level reproductions. Actual playback, network transfer, decoded image appearance, and rendered behaviour could not be verified in this session.

## Checks executed

- `node --test --test-isolation=none moziserve/tests/home.test.cjs`: 11 passing tests. Covers data saving, reduced motion, offscreen loading, responsive video selection, explicit pause, playback rejection, source errors/recovery, rail timing, arrows, wraparound, hover/touch/focus suspension, hidden documents, offscreen sections, immediate reduced-motion movement, and preservation of the focused control in the event harness.
- `python3 moziserve/tests/static_qa.py`: all five pages passed local route, fragment, asset, heading, quote target, published email/phone, no-form, six-service-link, and reviewed image-byte checks.
- Compared page text data and shared CSS with `git show ce5b01a:...`: unchanged.
- JavaScript syntax check, Python script compilation, and `git diff --check`: passed.

The harness models events and positions. It does not prove browser keyboard navigation, scrolling geometry, touch swipes, or media decoding.

## Browser matrix

| Page | Mobile: 360px | Tablet: 768px | Desktop: 1440px |
| --- | --- | --- | --- |
| Home | Blocked | Blocked | Blocked |
| About Us | Blocked | Blocked | Blocked |
| Services | Blocked | Blocked | Blocked |
| FAQ | Blocked | Blocked | Blocked |
| Contact | Blocked | Blocked | Blocked |

The preview connection was unavailable from this session. Starting the documented server failed with `PermissionError: Operation not permitted` at socket creation. Python Playwright could not start because `/usr/share/nodejs/playwright/cli.js` is missing. No connected browser document session was available. These results are local execution limitations, not defects attributed to the site. No new browser screenshots were captured. Earlier browser results recorded in the delivery plan apply to the prior build and were not rerun here.

## Complete browser verification locally

With a working Playwright/Chromium setup, start the README server at port 8766, then run:

```sh
python3 moziserve/tests/browser_qa.py
```

The script checks all 15 route/width combinations, takes screenshots under `/tmp/moziserve-qa/`, checks overflow, FAQ keyboard activation, quote navigation, all six service anchors, automatic and manual rail movement, arrow focus, desktop/mobile video decoding and pause, reduced motion, blocked-video fallback, and JavaScript-disabled links. It was attempted here but failed before browser launch; its browser assertions have not passed in this session. Successful browser automation still needs the manual inspection below.

## Owner review before publishing

- Inspect the five pages at all three widths and compare the approved hero, logo, colour treatment, copy, layout, and service-only horizontal presentation.
- Exercise real touch swipes, touch cancellation, hover, keyboard tabbing, arrow focus, offscreen suspension, and the switch to manual rail navigation. Verify zoom, a screen reader, and contrast over changing video frames.
- Verify both remote clips actually play; pause/resume and resize between sources. Check the mobile and desktop posters visually with video blocked, all media blocked, reduced motion enabled, and detectable data saving enabled. With all media blocked, confirm the dark-colour fallback keeps the headline and actions legible.
- Measure loading on a constrained mobile connection. Confirm external media availability, licence clearance, illustrative-footage disclosure, and production delivery choices.
- Confirm approved text and current business claims. Quote requests remain on `enquiries@moziserve.co.za` and `+27 81 489 3640`. No form or delivery-success simulation was added. Confirm a real delivery endpoint and approved testing process before adding a form.
- Authorize publishing explicitly after browser review. This review does not clear the site for release.

## Continuous Services follow-up

The owner requested continuous horizontal movement rather than timed card steps. The Services rail now uses frame-based movement at 28 CSS pixels per second and presentation copies to wrap without an empty end. Scroll snapping is disabled so it cannot cancel incremental movement. Copies are hidden from assistive technology and excluded from the tab order; arrows and reduced motion remove them. Hover, touch, focus, hidden-document, and offscreen pauses remain. All 14 controller tests and the five-page static checks pass. Loop continuity is verified against simulated geometry; actual browser smoothness, touch, and assistive-technology behaviour still need local inspection.

## Header and dark-mode follow-up

The owner requested a curved, more transparent homepage menu with 10 percent inner spacing and a dark-mode toggle. The header now uses rounded sides and a translucent captured-ink background. A 44-pixel theme control sits at the right of each page header; mobile places the homepage quote link on a separate row to accommodate the spacing. Dark mode is enabled by default; an explicit light/dark selection persists through local storage. The theme retains captured brand colours and original image colours.

All 18 controller/theme tests pass, including saved preference restoration, accessible toggle state, invalid stored values, and blocked storage. Static checks pass on all five pages, including a single control per route and theme initialization before the stylesheet. Actual header geometry, transparency over changing video frames, theme contrast, zoom, and responsive rendering remain pending local browser inspection.
