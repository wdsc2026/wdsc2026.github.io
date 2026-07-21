# WDSC 2026 workshop website

A dependency-free, responsive static website for the **Workshop on Decentralized Secure Collaboration (WDSC 2026)**, an ASIACRYPT 2026 affiliated workshop.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `wdsc2026`.
2. Upload **the contents of this folder** to the repository root.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will show the public URL, usually `https://USERNAME.github.io/wdsc2026/`.
6. Send that URL to the ASIACRYPT workshop chairs.

The site uses only relative links, so it works at either a root domain or a repository subpath.

## Items to confirm before announcing widely

The website intentionally marks the following details as pending rather than inventing them:

- submission portal URL;
- exact deadline time and time zone;
- workshop registration URL, fees, and capacity;
- exact conference venue and workshop room;
- confirmed invited speakers;
- confirmed program committee;
- accepted talk titles, speakers, and abstracts.

## Where to update content

- `assets/config.js`: last-updated date and frequently changing status values.
- `cfp.html`: submission portal and any final deadline wording.
- `program.html`: invited speakers, accepted talks, and final schedule.
- `people.html`: organizer biographies and program committee.
- `attend.html`: registration, venue, room, and accessibility details.

Search the site files for **“to be announced”** to find all public placeholders.

## Included files

- Five public pages: Home, CFP, Program, People, Attend
- Responsive mobile navigation
- Print-friendly CFP
- Calendar files for deadlines and the workshop date
- Social sharing image and SVG favicon
- A custom 404 page
- `.nojekyll` for direct GitHub Pages hosting

## Public-content note

The source proposal contains tentative candidate names. This public draft does **not** present potential invited speakers or potential program committee members as confirmed. Add names only after consent and confirmation.
