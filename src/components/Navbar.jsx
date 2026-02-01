import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight * 0.7) {
        setDark(true)
      } else {
        setDark(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Always use light navbar on dark pages
  useEffect(() => {
    const darkPages = ["/merch", "/proshows", "/competitions"]
    if (darkPages.includes(location.pathname)) {
      setDark(true)
    }
  }, [location])

  return (
    <nav className={`navbar ${dark ? "dark" : ""}`}>
      <div className="nav-inner">

        <Link to="/" className="logo">PRABUDDHA ’26</Link>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/proshows">Proshows</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>

        <div className="right">
          <a
            href="https://maps.app.goo.gl/ghWFcqbY26XS29ug9"
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
            >
            Map ↗
          </a>
          <button className="menu">☰</button>
        </div>

      </div>
    </nav>
  )
}
