// The site's CSS has `scroll-behavior: smooth` for the home page's in-page
// links, which also made Gatsby's move to the top of a newly opened page
// animate all the way up from where the link was clicked. Jump straight to the
// top of new pages instead; links to a section (#...) and back/forward keep
// Gatsby's usual behavior.
exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.action === "PUSH" && !location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    return false
  }
  return true
}
