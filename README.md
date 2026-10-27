Website for the podcast "Found in Translation"

Built with [Gatsby](https://www.gatsbyjs.com/) and hosted on Netlify.

## Working on the site

```sh
npm install
npm run develop     # local site at http://localhost:8000
npm run lint        # code checks
npm run build       # production build into public/
npm run test:a11y   # accessibility check of the built site (run after build)
```

Every pull request runs lint, build and the accessibility check in GitHub Actions.
The site builds with Node 22 (see `.nvmrc`).

Dependabot opens pull requests once a month to update dependencies and the CI
actions; merge them once CI and the deploy preview look good. The `overrides`
in `package.json` force patched versions of some packages Gatsby depends on,
for security fixes Gatsby hasn't picked up yet. When a Gatsby update includes
them, the override can be removed.

Security headers, including the Content Security Policy, are in
`static/_headers`. Embedding content from a new site (a player other than
Spotify or YouTube, for example) means adding that site to `frame-src` there,
or the browser will block it.

## Adding an episode

1. **Photos**: put them in a new folder under `src/images/` (for example
   `src/images/maria/`), along with the guest's illustration.
2. **Episode details**: add an entry to `src/data/episodes.js`: name, title,
   season, release `number`, color, the short blurb shown on the home page and
   the Spotify / Apple Podcasts / Amazon Music links. This drives the home page,
   the navbar's episode list and the previous/next links.
3. **Illustration**: add one line for the guest to
   `src/components/illustrations.js`.
4. **Transcript**: create `src/episodes/<slug>.mdx`. The `slug` must match the
   one in `episodes.js`; the page will live at `/<slug>/`.

```mdx
---
slug: "maria"
title_top: "First line of the title"
title_bottom: "Second line"
---

<Speaker label="The Host" fullName="Guru Ramanathan">

Plain paragraphs are written as plain text, with a blank line between them.
**Bold** works too.

</Speaker>

<Speaker name="Maria">

What the guest said.

</Speaker>

<PullQuote>A line from the guest to highlight in big blue text.</PullQuote>

<Photo caption="Maria and her family" standalone>
  <Image src="maria/family.jpg" className="horizontal-photo" alt="Describe what the photo shows" />
</Photo>
```

The Spotify player at the top and the listen / previous / next links at the
bottom are added automatically.

Building blocks you can use in a transcript (see `src/components/transcript.js`):

| Block | What it is |
|---|---|
| `<Speaker name="Guru">` | A turn in the conversation. Use `label="The Guest" fullName="…"` the first time someone speaks. Add `full` for a full-width turn. |
| `<Passage>` | Full-width transcript text with no speaker label |
| `<PullQuote>` | A highlighted line in bold blue |
| `<Quote speaker="Maria">` | A large quote on a yellow highlight |
| `<Photo caption="…">` | A handwritten caption beside one or more `<Image>`s. Add `standalone` for its own row, `stacked` for the caption above. |
| `<Image src="folder/file.jpg" className="…" alt="…" />` | A photo from `src/images`. `className` sets the size: `vertical-photo` (400px tall), `horizontal-photo` (400px wide) or `text-message` (full width). Always write `alt` text describing the photo. |

Title options in the header: `title_rotate: ["Korean", "한국어"]` cycles the
first line through several words once, ending on the first, with
`title_rotate_lang: ["en", "ko"]` giving each word's language code;
`title_full: "…"` with `title_style: "long"` shows one long title instead of
two lines.
