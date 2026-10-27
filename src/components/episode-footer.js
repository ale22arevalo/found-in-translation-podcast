import React from "react"
import { Link } from "gatsby"
import { PLATFORMS } from "./icons"
import { getAdjacentEpisodes, getEpisode } from "../data/episodes"

const EpisodeLink = ({ episode, direction }) => (
  <Link
    to={`/${episode.slug}/`}
    className={`episode-nav-card ${direction}`}
    style={{ backgroundColor: episode.color }}
  >
    <span className="episode-nav-label">
      {direction === "previous" ? "← Previous episode" : "Next episode →"}
    </span>
    <span className="episode-nav-name">{episode.name}</span>
    <span className="episode-nav-title">{episode.title}</span>
  </Link>
)

// Shown at the end of every interview: where to listen, then the episodes
// released just before and after this one.
const EpisodeFooter = ({ slug }) => {
  const episode = getEpisode(slug)
  const { previous, next } = getAdjacentEpisodes(slug)

  return (
    <footer className="episode-footer">
      <h2 className="episode-footer-heading">Listen to {episode.name}'s episode</h2>
      <ul className="episode-listen">
        {PLATFORMS.map(({ key, label, Icon }) => (
          <li key={key}>
            <a href={episode.links[key]} target="_blank" rel="noopener noreferrer">
              <Icon />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <nav aria-label="More episodes">
        <ul className="episode-nav">
          <li className="episode-nav-previous">{previous && <EpisodeLink episode={previous} direction="previous" />}</li>
          <li className="episode-nav-next">{next && <EpisodeLink episode={next} direction="next" />}</li>
        </ul>
        <Link to="/" className="episode-nav-all">See all episodes</Link>
      </nav>
    </footer>
  )
}

export default EpisodeFooter
