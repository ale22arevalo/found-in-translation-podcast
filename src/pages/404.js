import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import episodes from "../data/episodes"
import useRotatingWord from "../hooks/useRotatingWord"

// "Lost" in English, Spanish, German and Tagalog
const TITLE_WORDS = ["Lost", "Perdido", "Verloren", "Nawala"]

const NotFoundPage = () => {
  const word = useRotatingWord(TITLE_WORDS)

  return (
    <Layout className="main-body">
      <section id="topper" className="topper not-found">
        <h1>
          <span className="changing-word">{word}</span>
          <span className="static-title">in Translation</span>
        </h1>
        <p>This page doesn't exist, but these stories do:</p>
        <ul className="not-found-links">
          {episodes.map(episode => (
            <li key={episode.slug} className="link-wrapper" style={{ backgroundColor: episode.color }}>
              <Link className="intro-link" to={`/${episode.slug}/`}>{episode.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="ep-btn">Back to the home page</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Page not found" />
