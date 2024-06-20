import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newScrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            if (isMounted) {
                setScrollPercent(newScrollPercent);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            isMounted = false;
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: '0',
                    height: '60px',
                    width: '100%',
                    backgroundColor: '#FCF5E5',
                    opacity: '1',
                    zIndex: '1000',
                    paddingTop: '10px',
                }}
            >
                <div
                    style={{
                        height: '10px',
                        width: '100%',
                        position: 'fixed',
                        top: '60px',
                        borderBottom: '3px solid black',
                    }}
                />
                <div
                    style={{
                        height: '10px',
                        width: `${scrollPercent}%`,
                        position: 'fixed',
                        top: '60px',
                        background: 'linear-gradient(to right, #f249d6, #FFC000, #4992f2)',
                    }}
                />
                <a
                    href="/#topper"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '2rem',
                        marginLeft: '20px',
                        transition: 'color 0.3s',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.color = '#3737ba';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = 'black';
                    }}
                >
                    Found in Translation
                </a>
                <div
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginLeft: '20px',
                    }}
                    onMouseEnter={handleDropdownToggle}
                    onMouseLeave={handleDropdownToggle}
                >
                    {/* <button
                        className='epbutton'
                    >
                        Episodes
                    </button> */}
                    {showDropdown && (
                        <div
                            className='dropdown'
                        >
                             <a
                                href="/rachel#topper"
                            >
                                Rachel
                            </a>
                            {/* <a
                                href="/cy"
                                style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'black',
                                    marginBottom: '5px',
                                }}
                            >
                                cy.js
                            </a>
                            <a
                                href="/fa"
                                style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'black',
                                    marginBottom: '5px',
                                }}
                            >
                                fa.js
                            </a>
                            <a
                                href="/michael"
                                style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'black',
                                    marginBottom: '5px',
                                }}
                            >
                                micheal.js
                            </a> */}
                        </div>
                    )}
                </div>
                <a
                    href="/about#topper"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '1rem',
                        marginLeft: '20px',
                        transition: 'color 0.3s',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.color = '#3737ba';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = 'black';
                    }}
                >
                    About
                </a>
            </nav>
        </>
    );
};

export default Navbar;
