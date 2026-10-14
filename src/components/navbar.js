import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import episodes from '../data/episodes';

const Navbar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setScrollPercent(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeOnEscape = (event) => {
        if (event.key === 'Escape' && menuOpen) {
            setMenuOpen(false);
            buttonRef.current.focus();
        }
    };

    // Close the menu once keyboard focus moves outside of it
    const closeOnBlur = (event) => {
        if (!menuRef.current.contains(event.relatedTarget)) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar" aria-label="Main">
            <div className="navbar-track" aria-hidden="true" />
            <div className="navbar-progress" aria-hidden="true" style={{ width: `${scrollPercent}%` }} />
            <Link to="/" className="navbar-home">Found in Translation</Link>
            {/* The button is the real control; these handlers on its wrapper add hover-to-open
                and close the menu on Escape or when focus leaves it */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className="navbar-episodes"
                ref={menuRef}
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
                onKeyDown={closeOnEscape}
                onBlur={closeOnBlur}
            >
                <button
                    type="button"
                    className="epbutton"
                    ref={buttonRef}
                    aria-expanded={menuOpen}
                    aria-controls="episode-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    Episodes
                </button>
                <ul id="episode-menu" className="dropdown" hidden={!menuOpen}>
                    {episodes.map(episode => (
                        <li key={episode.slug}>
                            <Link to={`/${episode.slug}/`}>{episode.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/about/" className="navbar-link">About</Link>
        </nav>
    );
};

export default Navbar;
