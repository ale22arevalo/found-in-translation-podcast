const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  // Mark that JavaScript runs before first paint, so styles.css only hides
  // fade-in content when the script that reveals it can run.
  setHeadComponents([
    <script
      key="js-class"
      dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
    />,
  ])
}
