import { useEffect, useState } from "react"

// Cycles through `words` every `interval` ms, for the animated page titles.
const useRotatingWord = (words, interval = 2000) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(current => (current + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return words[index]
}

export default useRotatingWord
