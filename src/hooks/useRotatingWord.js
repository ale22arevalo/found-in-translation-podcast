import { useEffect, useState } from "react"

// Cycles through `words` every `interval` ms for the animated page titles: once
// through the list, ending back on the first word, so the title doesn't keep
// moving. With reduced motion turned on in the system settings it stays on the
// first word.
const useRotatingWord = (words, interval = 2000) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let step = 0
    const timer = setInterval(() => {
      step += 1
      setIndex(step % words.length)
      if (step === words.length) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return words[index]
}

export default useRotatingWord
