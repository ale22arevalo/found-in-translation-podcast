import React from "react"
import useRotatingWord from "../hooks/useRotatingWord"

// The blue first line of a page title, cycling through the same word in several
// languages. `words` is a list of { text, lang }. Screen readers always get the
// first word, so the heading reads as one stable title; the changing word is
// visual only, tagged with its language so the right font and glyphs are used.
const RotatingWord = ({ words }) => {
  const word = useRotatingWord(words)

  return (
    <span className="changing-word">
      <span className="visually-hidden">{words[0].text}</span>
      <span aria-hidden="true" lang={word.lang}>{word.text}</span>
    </span>
  )
}

export default RotatingWord
