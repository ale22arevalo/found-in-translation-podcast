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
    </>
  )
}

export default Seo
