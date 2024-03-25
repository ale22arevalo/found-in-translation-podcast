import React, { useEffect } from 'react';

const BackTop = () => {
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        let isMounted = true;

        const scrollListener = () => {
            if (isMounted && typeof window !== 'undefined') {
                const backToTop = document.querySelector(".back-to-top");
                if (window.scrollY > 10 && window.innerWidth > 1080) {
                    backToTop.classList.add("visible");
                } else {
                    backToTop.classList.remove("visible");
                }
            }
        };

        const backToTop = document.querySelector(".back-to-top");
        if (typeof window !== 'undefined' && backToTop) {
            window.addEventListener('scroll', scrollListener);
        }

        return () => {
            isMounted = false;
            if (typeof window !== 'undefined' && backToTop) {
                window.removeEventListener('scroll', scrollListener);
            }
        };
    }, []);

    return (
        <svg onClick={handleScroll} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" className="back-to-top">
            <title>Back to top button</title>
            <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                </path>
            </defs>
            <text dy="70" textLength="1220">
                <textPath xlinkHref="#textcircle">backtotop</textPath>
            </text>
        </svg>
    );
};

export default BackTop;
