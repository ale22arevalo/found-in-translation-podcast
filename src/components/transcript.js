import React from "react"

// Building blocks for the interview transcript pages. Each one renders the same
// markup the pages used to spell out by hand, so styles.css and useFadeIn
// (which reveals every .p-wrapper) keep working unchanged.

// A speaker's turn: name on the left, what they said on the right.
// Pass `name` for the short label ("Guru"), or `label` + `fullName` for the
// first time a host or guest is introduced ("The Guest" / "Tim Bumatay").
export const Speaker = ({ name, label, fullName, full = false, children }) => (
  <section className="section-wrapper">
    <div className="name-wrapper">
      {fullName ? (
        <h2 className="speaker-heading">{label}<br /><span className="first-name">{fullName}</span></h2>
      ) : (
        <div className="bolded-name">{name}</div>
      )}
    </div>
    <div className={full ? "p-wrapper full" : "p-wrapper side"}>{children}</div>
  </section>
)

// A block of transcript with no speaker label. `className` sets the width
// classes next to p-wrapper ("full" by default).
export const Passage = ({ className = "full", children }) => (
  <section className="section-wrapper">
    <div className={className ? `p-wrapper ${className}` : "p-wrapper"}>{children}</div>
  </section>
)

// A highlighted line from the guest, shown full width in bold blue.
export const PullQuote = ({ children }) => (
  <Passage>
    <b className="extra-bolded">{children}</b>
  </Passage>
)

// A large quote on a yellow highlight, optionally labelled with the speaker.
export const Quote = ({ speaker, children }) => (
  <section className="section-wrapper quote">
    {speaker && <div className="bolded-name">{speaker}</div>}
    <p><span>{children}</span></p>
  </section>
)

// A captioned photo: the handwritten caption next to one or more images,
// passed as children (StaticImage needs a literal src, so it can't be a prop).
// `standalone` puts it in its own row between transcript sections.
export const Photo = ({ caption, standalone = false, style, children }) => {
  const figure = (
    <figure className="text-photo" style={style}>
      <figcaption className="text-arrow">
        <p className="handwriting">{caption}</p>
      </figcaption>
      {children}
    </figure>
  )
  return standalone ? <section className="section-wrapper">{figure}</section> : figure
}

// The episode's Spotify player, shown at the top of each transcript page.
export const SpotifyPlayer = ({ episodeId, title }) => (
  <section className="section-wrapper">
    <iframe
      title={`Spotify player: ${title}`}
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </section>
)
