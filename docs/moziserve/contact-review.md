# Contact page design review

Proposals prepared on 2026-11-15 following the owner's request for a dedicated query page and an A/B comparison. The owner chose the visitor's email app as the delivery method. The recipient remains enquiries@moziserve.co.za, as captured from https://moziserve.co.za/contact/ on 2026-11-15. See [source audit](source-audit.md) and [capture manifest](evidence/2026-11-15/manifest.md). Phone and address retain those source values. The captured palette and original logo remain unchanged.

## Owner selection

The owner selected B, the guided enquiry composer, as final and explicitly confirmed that enquiries must target enquiries@moziserve.co.za. The dedicated `/contact/` page now shows B; the email-first alternative and comparison controls have been removed. Historical review query strings no longer select a different layout. This was a local design comparison without traffic allocation, tracking or conversion data. The selection reflects owner approval. No source hosting or DNS changes were made.

The composer uses a fixed recipient and subject choices, percent-encodes visitor text in the body, validates required fields, preserves entries and gives an honest status message. The original project guidance remains: include project location, the work needed and the desired timeline. The page does not send messages itself or claim delivery. The visitor must send from their email app. Without JavaScript, the email link and displayed address remain available. No enquiry data is saved by the page or sent to a backend service.

## Verification

Static checks across the five routes and 22 Node controller/theme/contact tests passed on 2026-11-15. Contact tests cover the recipient, message encoding, header-injection isolation, default composer initialization, prevented native form submission, whitespace validation and draft-status wording. Git whitespace checks passed.

The browser preview tool reported that its browser access host was unavailable. Responsive geometry, light/dark appearance, keyboard interaction, actual email-app launch and inbox receipt were not verified in this follow-up. Review the approved layout at desktop and mobile widths, prepare a draft and inspect its recipient and body before sending a real query. No test email was sent.
