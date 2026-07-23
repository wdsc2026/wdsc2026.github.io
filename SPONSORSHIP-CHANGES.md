# WDSC 2026 — Original-style sponsorship revision

## Summary

This revision starts from the latest uploaded four-page website and preserves its original visual design: the dark navy header and hero areas, lime/cyan/violet accents, sans-serif display headings, rounded cards, fixed navigation, and existing responsive behavior. The later academic restyle is not included.

## Placement

The full **Call for Sponsors** is placed on the **Organizers** page immediately after the organizer contact list. This keeps sponsorship with the people responsible for handling it and away from the technical Call for Presentations and Program.

For discoverability without creating a fifth page or another primary-navigation item:

- a compact sponsorship panel appears after the Topics section on the Home page;
- the homepage quick-link row includes **Call for sponsors**;
- every page footer includes **Call for Sponsors**.

## Content added

- An invitation to academic institutions, research laboratories, foundations, and industry organizations.
- A conditional description of possible participation support, subject to ASIACRYPT 2026 policies and organizer approval.
- An academic-independence statement: sponsorship will not affect review, speakers, accepted presentations, or the technical program.
- An acknowledgement-policy statement that avoids promising sponsored talks, advertisements, banners, merchandise, logos, or other unapproved benefits.
- Contact instructions asking sponsors to contact any listed organizer with the subject line “WDSC 2026 Sponsorship”.

## Design changes

- Added sponsorship components using the existing dark panel, lime action button, circular line decoration, rounded corners, and original typography.
- Added responsive layouts at the existing 1050 px, 820 px, and 560 px breakpoints.
- Added anchor offset so the fixed header does not cover the sponsorship section when following `people.html#sponsors`.
- Corrected a pre-existing four-pixel horizontal overflow in the CFP timeline at tablet width.
- Made no global palette, typography, logo, header, navigation, or card-style changes.

## Files changed

- `index.html`
- `people.html`
- `cfp.html` — footer link only
- `program.html` — footer link only
- `404.html` — footer link only
- `assets/styles.css`
- `assets/config.js`
- `README.md`
- `PUBLICATION-CHECKLIST.md`

## Packaging changes

- Removed `.git`, `.DS_Store`, `__MACOSX`, and AppleDouble metadata from the deployable package.
- Retained exactly four substantive public pages.

## Items to confirm before publication

1. Confirm permitted sponsor acknowledgements with the ASIACRYPT 2026 organizers.
2. Decide whether sponsorship enquiries should use a shared workshop email address.
3. Add sponsor names or logos only after approval and a confirmed agreement.

## Validation completed

- Checked all internal file links and section anchors.
- Confirmed exactly four substantive public pages.
- Rendered Home, CFP, Program, and Organizers at desktop, tablet, and mobile widths.
- Confirmed zero horizontal overflow in all twelve responsive layouts.
- Tested opening and closing the mobile navigation.
- Found no browser console or JavaScript errors.
- Parsed the CSS without errors and checked JavaScript syntax.
- Verified that repository history and macOS metadata are absent from the deployable package.

