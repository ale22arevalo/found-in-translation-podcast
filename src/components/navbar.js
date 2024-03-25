import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

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
            </nav>
        </>
    );
};

export default Navbar;
