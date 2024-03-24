import React, {useEffect} from 'react'
import guruillo from '../images/about/guruillo.webp'
import aleillo from '../images/about/aleillo.webp'
import Navbar from "../components/navbar"
import BackTop from "../components/backtop"
import "../styles.css"

const About = () => {
         
  useEffect(() => {
    // Get all elements with class 'section-wrapper'
    const parentDivs = document.querySelectorAll('.episode-wrapper');

    // Iterate over each 'section-wrapper' element
    parentDivs.forEach(parentDiv => {
        // Get the corresponding 'p-wrapper' element within each 'section-wrapper'
        const fadeDiv = parentDiv.querySelector('.text-wrapper');

        // Check if both elements are found in the DOM
        if (parentDiv && fadeDiv) {
            // Set up the Intersection Observer for the current 'section-wrapper'
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        fadeDiv.classList.add('fade');
                    } else {
                        fadeDiv.classList.remove('fade');
                    }
                });
            });

            // Start observing the current 'section-wrapper'
            observer.observe(parentDiv);

            // Clean up observer when component unmounts
            return () => observer.disconnect();
        }
    });
}, []);


  return (
    <main>
      <Navbar />

      <div className="main-body">
        <div id="topper" className="topper">
          <h1 className="site-hero">About</h1>
          <h2>The story behind the podcast and the team</h2>
        </div>

        <BackTop />

        {/* Episodes */}
        <div className="episode-wrapper left">
          <div className="text-wrapper">
            <h3>Origin</h3>
            <p>The journey of this podcast started out like any other idea that we would have — through rants while dining over food. This one took a bit of a different turn, obviously, as it resulted in this artistic-journalistic extravaganza.</p>
            <p>On one particular day, while having poke in Boston (Boston has nothing to do with the rest of this story), we discussed the incredible experience of assimilating into American culture, specifically as it relates to language and having to prioritize English as a primary language, but how in doing so it can also detrimentally impact your own relationship with the language native to your culture. </p>
            <p>As we kept talking about our respective experiences, and sharing anecdotes from other friends that had similar experiences, it became quickly evident that this wasn’t such an isolating experience after all. Well it can certainly feel isolating, but we realized this was a way more universal experience than we had initially thought. This, combined with the fact that we hadn’t formally collaborated on a project in about two years, galvanized us to immediately set up a plan of action to bring this podcast to life.</p>
            <p>We began in an obvious spot — asking friends to be guests and share their life stories with the world! That said, we had also wanted to be very intentional about who we asked, even within this pool. A driving force behind making the podcast itself was to highlight how this was an experience that we don’t talk about enough, but is actually more universal than we give it credit for. While we always intended for this first season to be short and akin to an experiment, we wanted to ensure we were still representing a range of languages, cultures, and people at varying levels of proficiency with their respective language.</p>
          </div>
        </div>

        <div className="episode-wrapper right">
          <div className="text-wrapper">
            <h3>Disclaimers</h3>
            <p>This is not a podcast about learning or teaching languages. We are not Duolingo. We are not declaring ourselves or our guests linguistic experts (because the last thing we want is to turn anyone into a monolith). We had always envisioned this as a sociocultural podcast and wanted everyone’s stories to stand on their own. Everyone’s journey with learning language(s) and with their culture is unique to them, and everyone moves at their own pace, which is an aspect we wanted to not just call out with this podcast, but celebrate. With that said, as we dive into the specifics of each of our guests’ stories, we hope their stories will resonate with your lived experiences as well and we hit our goal of making this a universal podcast.</p>
            <p>We know what we’re putting out in this first season is just a small sampling of the hundreds of languages and dialects that exist in the world. This is an experimental passion project we put out while balancing life, love, and professional careers. We are eager to do many more seasons of this podcast and continue to expand on the mission of this series.</p>
          </div>
        </div>

        <div className="episode-wrapper left">
          <div className="text-wrapper">
            <h3>Written in Spanglish</h3>
            <p>
              <b className="bolded">Alejandra Arevalo</b> is a multimedia storyteller who has written about everything and anything, from lifestyle trends to politics and social justice, for major American media publications including USA Today and Latina Magazine. A self-taught coder, she currently works as a developer at Hearst Newspapers where she focuses on data visualization and interactive storytelling. Previously, she worked as a podcast producer for award-nominated women in sports podcast "Sweat the Details" with iHeartMedia and Under Armour. She graduated cum laude from NYU's Arthur L. Carter Journalism Institute undergraduate program.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/alejandrareval_" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
                  License - https://fontawesome.com/license/free
                  Copyright 2024 Fonticons, Inc. */}
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="https://alejandra-arevalo.com/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com 
                  License - https://fontawesome.com/license/free 
                  Copyright 2024 Fonticons, Inc. */}
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div id="g-box" className="ai2html">
            <div
              className="g-artboard"
              style={{ maxWidth: "569px", maxHeight: "809px" }}
              data-aspect-ratio="0.754"
              data-min-width="0"
            >
              <img
                id="g-rachel-Artboard_1-img"
                className="g-rachel-Artboard_1-img g-aiImg"
                alt=""
                src={aleillo}
              />
            </div>
          </div>
        </div>

        <div className="episode-wrapper right">
        <div id="g-box" className="ai2html">
            <div
              className="g-artboard"
              style={{ maxWidth: "569px", maxHeight: "809px" }}
              data-aspect-ratio="0.754"
              data-min-width="0"
            >
              <img
                id="g-rachel-Artboard_1-img"
                className="g-rachel-Artboard_1-img g-aiImg"
                alt=""
                src={guruillo}
              />
            </div>
          </div>
          <div className="text-wrapper">
            <h3>Born in India, Raised on Cinema</h3>
            <p>
              <b className="bolded">Guru Ramanathan</b> is a versatile storyteller who has brought a creative and detail-oriented approach to crafting impactful, diverse, and thought provoking narratives across film, TV, podcast, journalism, and publicity projects. He has directed and edited a feature length documentary and several short films, and in 2020 he was accepted into the New York Stage and Film Filmmaker's Workshop for his TV pilot, "Londoni." He currently works as a Brands Publicist at ID PR and has elevated high caliber clients including Nintendo, Hasbro, Peloton, Rotten Tomatoes, Twitch, Reddit, IMAX, and more. He graduated from NYU's Tisch School of the Arts, being a University Honors Scholar and receiving the Dramatic Writing Award for Excellence in Episodic Writing by an Undergraduate.
            </p>
          </div>
        </div>

        <div className="episode-wrapper left" id='special-thanks'>
          <div className="text-wrapper">
            <h3>Special thanks</h3>
            <h4>Lux the Lightbulb</h4>
            <p>Composed the show's theme song</p>
            <h4>Romina Arevalo</h4>
            <p>Contributed to the art direction and illustrations on this website</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default About

export const Head = () => <title>About the podcast</title>
