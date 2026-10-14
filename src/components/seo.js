import React from "react"

const SITE_TITLE = "Found in Translation"
const SITE_DESCRIPTION =
  "A visual essay podcast where first- and second-generation Americans and immigrants talk about their relationship with their cultural language."

const Seo = ({ title, description = SITE_DESCRIPTION }) => {
  const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#F9DCC4" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  )
}

export default Seo
