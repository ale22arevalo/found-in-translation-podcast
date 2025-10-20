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
              <b className="bolded">Alejandra Arevalo</b> is a data analyst and multimedia storyteller focused on turning numbers into compelling insights and visuals. Born and raised in Lima, Peru, Alejandra went to New York University's journalism school and lived across California, now calling San Francisco home. 
            </p>
            <p>
              As a journalist and newsroom developer, Alejandra has covered everything and anything, from real estate to social justice, for publications such as the San Francisco Chronicle and Latina Magazine. She also worked as a podcast producer at iHeartMedia for the award-nominated sports podcast "Sweat the Details." She is currently part of the Google Trends team analyzing global search data.
            </p>
            <div className="social-links">
              <a href="https://alejandra-arevalo.com" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com 
                  License - https://fontawesome.com/license/free 
                  Copyright 2024 Fonticons, Inc. */}
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alejandrarevalo/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
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
                  <b className="bolded">Guru Ramanathan</b> is a versatile storyteller who has crafted impactful narratives across film, TV, podcast, journalism, and PR/communications projects. Guru has directed and edited a feature length documentary and several short films. His TV pilot "Londoni" was accepted into the New York Stage and Film Filmmaker's Workshop and was a finalist for the 2025 Golden List.</p> 
                  <p>He currently works at Dolby and has elevated high caliber clients through multifaceted campaigns throughout his career, including Nintendo, Hasbro, Peloton, the Legal Defense Fund, and more. He graduated cum laude from NYU's Tisch School of the Arts, and received the Award for Excellence in Episodic Writing by an Undergraduate from Tisch's Department of Dramatic Writing.
                </p>
              <div className="social-links">
                <a href="https://www.instagram.com/i.am.gru/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/guru-ramanathan-78ab99159/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </a>
              </div>
            </div>
        </div>

        <div className="episode-wrapper left" id='special-thanks'>
          <div className="text-wrapper">
            <h3>Special thanks</h3>
            <a href="https://www.tiktok.com/@luxthelightbulb" target="blank"><h4>Lux the Lightbulb</h4></a>
            <p>Composed the show's theme song</p>
            <h4>Romina Arevalo</h4>
            <p>Contributed to creative direction and illustrations on this website</p>
          </div>
        </div>

        <div className="episode-wrapper right">
          <div className="text-wrapper">
            <h3>Contact us</h3>
            <p>Reach out at foundintranslationpod@gmail.com!</p>
            <p>We're always down to hear new ideas, collaborations, or any (glowing and raving) thoughts about the podcast.</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default About

export const Head = () => <title>About the podcast</title>
