import React from "react"
import { Link } from "gatsby"
import illustrations from "./illustrations"
import { PLATFORMS } from "./icons"

const EpisodeCard = ({ episode, side }) => {
  const Illustration = illustrations[episode.slug]
  const [firstParagraph, ...otherParagraphs] = episode.blurb

  const art = (
    <div className="ai2html g-box">
      <div className="g-artboard" style={{ maxWidth: "569px", maxHeight: "809px" }}>
        <Illustration />
      </div>
      <Link to={`/${episode.slug}/`} className="ep-btn">Experience the podcast visually</Link>
    </div>
  )

  const text = (
    <div className="text-wrapper">
      <h3>{episode.title}</h3>
      <p><b className="bolded">{episode.fullName}</b>{firstParagraph}</p>
      {otherParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="social-links">
        {PLATFORMS.map(({ key, label, Icon }) => (
          <a
            key={key}
            href={episode.links[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${episode.name}'s episode on ${label}`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <div id={episode.anchor} className={`episode-wrapper ${side}`}>
      {side === "right" ? <>{art}{text}</> : <>{text}{art}</>}
    </div>
  )
}

export default EpisodeCard
