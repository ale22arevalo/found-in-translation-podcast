import React, { createContext, useContext } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

// Image data for the current transcript, keyed "<variant>:<path>"; provided by
// the episode template from its page query.
export const TranscriptImages = createContext({})

const VARIANTS = {
  "vertical-photo": "vertical",
  "horizontal-photo": "horizontal",
  "text-message": "full",
}

// A photo in a transcript. `src` is relative to src/images; `className` picks
// the size (vertical-photo: 400px tall, horizontal-photo: 400px wide,
// text-message: full width).
const Image = ({ src, className, alt }) => {
  const images = useContext(TranscriptImages)
  const image = images[`${VARIANTS[className]}:${src}`]
  if (!image) {
    throw new Error(`Transcript image not found: ${src} (${className})`)
  }
  return <GatsbyImage image={image} alt={alt} className={className} />
}

export default Image
