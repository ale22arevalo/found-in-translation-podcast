import { useEffect } from "react"

// Adds the `fade` class to every element matching `selector` while it is on
// screen, which plays the fade-in animation in styles.css. One observer is
// shared by the whole page and disconnected when the page unmounts.
const useFadeIn = (selector = ".p-wrapper") => {
  useEffect(() => {
    const targets = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("fade", entry.isIntersecting)
      })
    })
    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [selector])
}

export default useFadeIn
