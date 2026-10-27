const crypto = require("crypto")
const fs = require("fs")
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

// Gatsby inlines the site's CSS into every page, but on a cached build (like
// Netlify's) it only re-renders a page when its JavaScript changes, so a
// CSS-only change would ship with the old styles. When the CSS has changed
// since the last build, remove public/: Gatsby then treats its cache as
// incomplete and rebuilds every page from scratch.
const CSS_HASH_FILE = path.join(".cache", "css-hash.txt")

const cssHash = () => {
  const hash = crypto.createHash("md5")
  const files = fs.readdirSync("src", { recursive: true }).filter(file => file.endsWith(".css")).sort()
  for (const file of files) hash.update(file).update(fs.readFileSync(path.join("src", file)))
  return hash.digest("hex")
}

exports.onPreInit = () => {
  if (process.env.gatsby_executing_command !== "build") return
  const previous = fs.existsSync(CSS_HASH_FILE) ? fs.readFileSync(CSS_HASH_FILE, "utf8") : null
  if (previous !== cssHash()) fs.rmSync("public", { recursive: true, force: true })
}

exports.onPostBuild = () => {
  fs.writeFileSync(CSS_HASH_FILE, cssHash())
}
