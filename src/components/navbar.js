import React, { useEffect, useState } from 'react';

const Navbar =  () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null during server-side rendering
    }

    // Code that depends on the document object
    const navbar = document.createElement('nav');
    navbar.style.position = 'fixed';
    navbar.style.top = '0'; // Position it at the top of the page
    navbar.style.height = '60px'; // Set the height to 50px
    navbar.style.width = '100%'; // Set the width to 100%
    navbar.style.backgroundColor = 'white'; // Apply a background color
    navbar.style.zIndex = '1000'; // Set the z-index to 1000
    navbar.style.paddingTop = '10px'; // Add some padding to the top of the navbar

    // Create a progress bar element
    const progressBar = document.createElement('div');
    progressBar.style.height = '10px'; // Set the height of the progress bar
    progressBar.style.width = '0'; // Set the initial width to 0
    progressBar.style.position = 'fixed'; // Position the progress bar as fixed
    progressBar.style.top = '60px'; // Position it at the top of the page
    progressBar.style.background = 'linear-gradient(to right, #f249d6, #FFC000, #4992f2)';

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Append the progress bar to the navbar
    navbar.appendChild(progressBar);

    // Create an anchor element for the homepage
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Found in Translation';
    homeLink.style.textDecoration = 'none';
    homeLink.style.color = 'black';
    homeLink.style.color = 'black';
    homeLink.style.transition = 'color 0.3s'; // Add transition effect for smooth color change

    homeLink.addEventListener('mouseover', () => {
        homeLink.style.color = '#3737ba'; // Change color on hover
    });

    homeLink.addEventListener('mouseout', () => {
        homeLink.style.color = 'black'; // Change color back to original on mouseout
    });
    homeLink.style.fontSize = '2rem';
    homeLink.style.marginLeft = '20px';


    // Append the link to the navbar
    navbar.appendChild(homeLink);

    // Append the navbar to the document body
    document.body.appendChild(navbar);
    homeLink.href = '/#topper';

    return (
        <>
            {/* Render the navbar on the client-side */}
            {navbar}
        </>
    );
};

export default Navbar;
