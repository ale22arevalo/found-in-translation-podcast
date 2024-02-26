import React, { useEffect, useState } from 'react';

const Navbar =  () => {
        const [scrollPercent, setScrollPercent] = useState(0);

        useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const newScrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
                setScrollPercent(newScrollPercent);
            };
            window.addEventListener('scroll', handleScroll);
        } else {
            setScrollPercent(0);
        } 
        } , []);

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: '0',
                    height: '60px',
                    width: '100%',
                    backgroundColor: 'white',
                    zIndex: '1000',
                    paddingTop: '10px',
                }}
            >
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
