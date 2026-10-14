import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EpisodeCard from "../components/episode-card"
import { InfoIcon } from "../components/icons"
import episodes from "../data/episodes"
import useRotatingWord from "../hooks/useRotatingWord"

const TITLE_WORDS = ["Found", "Encontrado", "পাইলাম", "찾았다", "Ri"]

// Bars for the decorative animated waveform under each guest link
const waveBars = Array.from({ length: 36 }, (_, i) => i)

const IndexPage = () => {
  const word = useRotatingWord(TITLE_WORDS)

  return (
    <Layout className="main-body" showNavbar={false}>
      <div className="home-intro" id="topper">
          <h1>
            <span className="changing-word">{word}</span>
            <span className="static-title">in Translation</span>
          </h1>
          <div className="subhead">
            <h2>A Visual Essay Podcast</h2>
            <a href="#about" aria-label="About the podcast">
              <InfoIcon />
            </a>
          </div>
          <div className="topper-links">
            {episodes.map(episode => (
                <div key={episode.anchor} className="link-wrapper" style={{backgroundColor: episode.color}}>
                  <a className="intro-link" href={`#${episode.anchor}`}>
                    {episode.name}
                    <span className="waveform" aria-hidden="true">
                      {waveBars.map(i => <span key={i} style={{animationDelay: `-${((i * 0.37) % 1.3).toFixed(2)}s`}} />)}
                    </span>
                  </a>
                </div>
              ))}
          </div>
      </div>

      <h2>Season {episodes[0].season}</h2>
      <section className="episodes">
        {/* A new season heading wherever the season changes; cards alternate sides */}
        {episodes.map((episode, index) => (
          <React.Fragment key={episode.slug}>
            {index > 0 && episode.season !== episodes[index - 1].season && <h2>Season {episode.season}</h2>}
            <EpisodeCard episode={episode} side={index % 2 === 0 ? "right" : "left"} />
          </React.Fragment>
        ))}

        <div id="about" className="episode-wrapper">
            <div className="text-wrapper">
                  <h3>About</h3>
                  <b className="bolded">“FOUND IN TRANSLATION”</b>
                  <p className="part-of-speech">noun</p>
                  <p>
                  1. A visual essay podcast co-created by Alejandra Arevalo and Guru Ramanathan where first/second generation Americans and immigrants discuss their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more. Ex: “Found in Translation is the worst podcast ever”; “My life was changed after being a guest on Found in Translation.”
                  </p>
            </div>
            <Link to="/about/" className="ep-btn">Learn more</Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo />
