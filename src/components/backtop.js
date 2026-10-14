import React, { useEffect, useState } from 'react';

const BackTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const scrollListener = () => {
            setVisible(window.scrollY > 10);
        };

        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <button
            type="button"
            onClick={handleScroll}
            aria-label="Back to top"
            className={visible ? "back-to-top visible" : "back-to-top"}
        >
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                    </path>
                </defs>
                <text dy="70" textLength="1220">
                    <textPath xlinkHref="#textcircle">backtotop</textPath>
                </text>
            </svg>
        </button>
    );
};

export default BackTop;
