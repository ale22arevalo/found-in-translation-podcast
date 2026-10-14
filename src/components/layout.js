import React from "react"
import Navbar from "./navbar"
import BackTop from "./backtop"
import "../styles.css"

const Layout = ({ children, className, showNavbar = true }) => (
  <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    {showNavbar && <Navbar />}
    <main id="main-content" className={className}>
      {children}
    </main>
    <BackTop />
  </>
)

export default Layout
