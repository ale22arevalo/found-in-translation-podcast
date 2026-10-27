const path = require("path")

const TEMPLATE = path.resolve("src/templates/episode.js")

// Which size each photo class is shown at (matches the Image component)
const VARIANTS = {
  "vertical-photo": "vertical",
  "horizontal-photo": "horizontal",
  "text-message": "full",
}

/**
 * One page per transcript in src/episodes, at /<slug>/. The photos each
 * transcript uses are collected here so the page query only processes those
 * images, at the size their class needs.
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          body
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Could not load the episode transcripts", result.errors)
    return
  }

  for (const node of result.data.allMdx.nodes) {
    const images = { vertical: [], horizontal: [], full: [] }
    for (const [tag] of node.body.matchAll(/<Image\b[^>]*>/g)) {
      const src = tag.match(/src="([^"]+)"/)?.[1]
      const variant = VARIANTS[tag.match(/className="([^"]+)"/)?.[1]]
      if (!src || !variant) {
        reporter.panicOnBuild(`${node.internal.contentFilePath}: <Image> needs a src and a className of ${Object.keys(VARIANTS).join(", ")}: ${tag}`)
        return
      }
      images[variant].push(src)
    }

    actions.createPage({
      path: `/${node.frontmatter.slug}/`,
      component: `${TEMPLATE}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, ...images },
    })
  }
}
