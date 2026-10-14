const React = require("react")

const PRELOAD_FONTS = [
  `/fonts/noto-sans-latin-400-normal.woff2`,
  `/fonts/noto-sans-latin-900-normal.woff2`,
]

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    // The two fonts every page shows first (body text and the title), so the
    // browser fetches them in parallel with the page instead of after the CSS
    ...PRELOAD_FONTS.map(href => (
      <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />
    )),
    // Mark that JavaScript runs before first paint, so styles.css only hides
    // fade-in content when the script that reveals it can run.
    <script
      key="js-class"
      dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
    />,
  ])
}
