import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SITE_TITLE = "Found in Translation"
const SITE_DESCRIPTION =
  "A visual essay podcast where first- and second-generation Americans and immigrants talk about their relationship with their cultural language."
// Shown when a page is shared, for pages without their own `image`
const SITE_IMAGE = "/social-card.png"

// `pathname` is the page's path (from the Head's `location`), used for its
// canonical link. `image` is a site-relative path to a 1200×630 preview image.
// `noindex` keeps a page (like the 404) out of search results.
const Seo = ({ title, description = SITE_DESCRIPTION, pathname, image = SITE_IMAGE, noindex = false }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const { siteUrl } = site.siteMetadata
  const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const url = pathname && `${siteUrl}${pathname}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#F9DCC4" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  )
}

export default Seo
