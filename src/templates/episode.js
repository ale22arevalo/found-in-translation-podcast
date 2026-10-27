import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EpisodeFooter from "../components/episode-footer"
import Image, { TranscriptImages } from "../components/transcript-image"
import { Passage, Photo, PullQuote, Quote, Speaker, SpotifyPlayer } from "../components/transcript"
import { getEpisode } from "../data/episodes"
import useFadeIn from "../hooks/useFadeIn"
import RotatingWord from "../components/rotating-word"

// Everything a transcript can use without importing it
const components = {
  Speaker,
  Passage,
  PullQuote,
  Quote,
  Photo,
  Image,
  // Markdown **bold** renders as <b>, which is what styles.css styles
  strong: props => <b {...props} />,
}

const spotifyId = episode => episode.links.spotify.match(/episode\/(\w+)/)[1]

// Links that go to this episode itself (not just the show's page)
const isEpisodeLink = link => /\/episode\/|\/episodes\/|[?&]i=\d/.test(link)

// The episode, for search engines
const podcastEpisode = (episode, description) => ({ siteUrl, url, image }) => ({
  "@type": "PodcastEpisode",
  name: episode.title,
  description,
  url,
  image,
  episodeNumber: episode.number,
  partOfSeason: { "@type": "PodcastSeason", seasonNumber: episode.season },
  partOfSeries: { "@type": "PodcastSeries", name: "Found in Translation", url: `${siteUrl}/` },
  sameAs: Object.values(episode.links).filter(isEpisodeLink),
})

// The page title: two lines with the first in blue (optionally rotating through
// `title_rotate`, with each word's language in `title_rotate_lang`), or one long
// line for `title_full`. "/" may wrap on phones.
const EpisodeTitle = ({ frontmatter }) => {
  const { title_top, title_bottom, title_rotate, title_rotate_lang, title_full, title_style } = frontmatter
  const className = ["topper", title_style === "long" && "long-title", title_style === "padded" && "padded-topper"]
    .filter(Boolean)
    .join(" ")

  return (
    <section id="topper" className={className}>
      <h1>
        {title_full ? (
          <span>
            {title_full.split("/").map((part, index, parts) =>
              index < parts.length - 1 ? <React.Fragment key={part}>{`${part}/`}<wbr /></React.Fragment> : part
            )}
          </span>
        ) : (
          <>
            {title_rotate ? (
              <RotatingWord words={title_rotate.map((text, index) => ({ text, lang: title_rotate_lang?.[index] }))} />
            ) : (
              <span className="changing-word">{title_top}</span>
            )}
            <span className="static-title">{title_bottom}</span>
          </>
        )}
      </h1>
    </section>
  )
}

const EpisodePage = ({ data, children }) => {
  const { frontmatter } = data.mdx
  const episode = getEpisode(frontmatter.slug)
  useFadeIn()

  const images = {}
  for (const variant of ["vertical", "horizontal", "full"]) {
    for (const file of data[variant].nodes) {
      images[`${variant}:${file.relativePath}`] = file.childImageSharp.gatsbyImageData
    }
  }

  return (
    <Layout>
      <EpisodeTitle frontmatter={frontmatter} />
      <div className="main-body">
        <SpotifyPlayer episodeId={spotifyId(episode)} title={episode.title} />
        <TranscriptImages.Provider value={images}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </TranscriptImages.Provider>
        <EpisodeFooter slug={episode.slug} />
      </div>
    </Layout>
  )
}

export default EpisodePage

export const Head = ({ data, location }) => {
  const episode = getEpisode(data.mdx.frontmatter.slug)
  const description = `${episode.fullName}${episode.blurb[0]}`
  return (
    <Seo
      title={`${episode.fullName}: ${episode.title}`}
      description={description}
      pathname={location.pathname}
      image={data.illustration.childImageSharp.resize.src}
      schema={podcastEpisode(episode, description)}
    />
  )
}

export const query = graphql`
  query EpisodePage($id: String!, $vertical: [String], $horizontal: [String], $full: [String], $illustration: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title_top
        title_bottom
        title_rotate
        title_rotate_lang
        title_full
        title_style
      }
    }
    # The guest's illustration on the site's beige, sized for link previews
    illustration: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: $illustration }) {
      childImageSharp {
        resize(width: 1200, height: 630, fit: CONTAIN, background: "#F9DCC4", toFormat: JPG, quality: 85) {
          src
        }
      }
    }
    vertical: allFile(filter: { sourceInstanceName: { eq: "images" }, relativePath: { in: $vertical } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(height: 400)
        }
      }
    }
    horizontal: allFile(filter: { sourceInstanceName: { eq: "images" }, relativePath: { in: $horizontal } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
    full: allFile(filter: { sourceInstanceName: { eq: "images" }, relativePath: { in: $full } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
