# Moziserve Source Capture

Captured on 2026-11-15 using REA 6.9.0 and Chromium 156.0.8078.47 in a dedicated headless profile. Chromium navigation and a read-only DOM and CSS query supplied URLs, page copy, and style readings. REA captured the viewport PNGs and inspected each loaded page through loopback CDP. All listed final page URLs returned HTTP 200.

## Viewport screenshots

| File | Final URL | CSS viewport | Capture time UTC |
| --- | --- | --- | --- |
| [home-desktop.png](home-desktop.png) | [Page](https://moziserve.co.za/) | 1440 × 900 | 20:07:30.643 |
| [home-mobile.png](home-mobile.png) | [Page](https://moziserve.co.za/) | 390 × 844 | 20:08:10.348 |
| [about-us-desktop.png](about-us-desktop.png) | [Page](https://moziserve.co.za/about-us/) | 1440 × 900 | 20:07:39.994 |
| [services-desktop.png](services-desktop.png) | [Page](https://moziserve.co.za/services/) | 1440 × 900 | 20:07:46.791 |
| [faq-desktop.png](faq-desktop.png) | [Page](https://moziserve.co.za/faq/) | 1440 × 900 | 20:07:53.591 |
| [contact-desktop.png](contact-desktop.png) | [Page](https://moziserve.co.za/contact/) | 1440 × 900 | 20:08:00.910 |

The images show the initial viewport at device scale factor 1, including the cookie banner. Mobile is Chromium emulation. The banner was left in its initial state. Raw REA inspection and screenshot JSON remain in the ignored local evidence directory under `raw/2026-11-15/`. REA inspection is attach-limited and uses its default filtering. The capture did not exercise consent, navigation controls, or enquiry submission.

## Logo files

| File | Image dimensions | SHA-256 | Source and final URL |
| --- | --- | --- | --- |
| [header-logo-91.png](header-logo-91.png) | 91 × 91 | `6c0bf5d9c42d37d783fb333ea643595a020f30326ffaddf15b902e8d5c95d9a0` | [Original PNG](https://moziserve.co.za/wp-content/uploads/2026/07/cropped-Good-day-This-service-has-now-been-stable-for-an-extended-period.-We-will-now-proceed-to-close-this-case.-We-will-open-a-new-case-should-we-pick-up-any-new-alerts-91x91.png) |
| [header-logo-2x.png](header-logo-2x.png) | 1998 × 1998 | `27599f7da66293939530432890d053aea533a93233725a90ed44149454fac0c0` | [Original PNG](https://moziserve.co.za/wp-content/uploads/2026/07/cropped-Good-day-This-service-has-now-been-stable-for-an-extended-period.-We-will-now-proceed-to-close-this-case.-We-will-open-a-new-case-should-we-pick-up-any-new-alerts.png) |
| [site-icon-192.png](site-icon-192.png) | 192 × 192 | `18c3d5047d3beff10ebc930bd994f080ece45490cefcb733ff08ec70e9d78dc9` | [Original PNG](https://moziserve.co.za/wp-content/uploads/2026/08/cropped-Official-logo-scaled-1-192x192.png) |

The 91 × 91 PNG was rendered by the homepage header at device scale factor 1. The 1998 × 1998 PNG is the high-resolution source published in that image's `srcset` with a `2x` descriptor. The site icon is published separately in `link[rel=icon]`. All files are byte-for-byte server responses. Asset ownership and permission for production reuse remain unverified.

## REA provenance

| View | Screenshot evidence ID | Inspection evidence ID | PNG SHA-256 |
| --- | --- | --- | --- |
| home-desktop | `ev_40e554885b818bcf4525eeb17688f4d26686ace2d8813e26ac7edb687d841107` | `ev_fe4e66c2c4fd11051f7fd37eba375a1684d96a036047ac8998813cd507fcb7fb` | `c41badab2bb26cd419091e463c782be96705160d0082fe37bd25f8a8422d32ef` |
| home-mobile | `ev_3542b3dd74c01bc308b2046e4628a6d6c13a45f117184a1b96fc40074013b050` | `ev_bee0371348d8d8f92ed248cbd2e0da46936c86fd70c0887d13b55217a061b48c` | `d7834d67759f94cdb0cbc79bcc2738962c5a4c1d461a347bda0cd11e414806dc` |
| about-us-desktop | `ev_5972fdd6e57d10cf87209e82fe72e3bcbcf0c6e609ac83db33e8f82ce881a753` | `ev_05c0676bfdf669f37ebeb17ce9f66f24637a48ccf05ea1201d34a771cc1a9702` | `c16cdbbe525a35eb6e9ee8040a5ec7d57686d9efd4fde0ad03688d12bdd68cea` |
| services-desktop | `ev_b761b36b7b9fb237fff8a9fa9b0e2e1bb5e27e78b5ce83153721ad93724f45ed` | `ev_a39f4f7c1de7a976aebdb463be91a9c8bb5599381ec00a5b75af9e9a344682a0` | `7640e901bdca4a8580ef31e3e414b8fa01355e9ce4ea1e6e5e5a23c7e1840045` |
| faq-desktop | `ev_15cbf46ee2833b4f38384a487d34e4cfcd004d6e74c029f0762e9350680074d4` | `ev_2b3485849cfb544d7a6491f0a3961ed05ecb1086ca6b816e61f8f38a454812e2` | `5f6dfc657519150818d21d804a9afb58144aa4de9fcae06d97d0337178733581` |
| contact-desktop | `ev_77ce357845ec55a3695b0f535fee9c6462b941c76b3ce65c6a0f3d737f0175ce` | `ev_00042c929ea2e204f4fd315f70450f60a2e1b8664b4ff5a716ce984a02033870` | `8e68440b0cc1e793805466541da938514c3b33bbd35bf7a00e0e818f4c6a5e0c` |
