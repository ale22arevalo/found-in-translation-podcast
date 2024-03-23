import * as React from "react"
import { useState, useEffect } from "react"
import "../styles.css"
import soundwave4 from "../images/soundwave4.gif"
import rachelillo from "../images/rachel/rachel.webp"
import michaelillo from "../images/michael/michael.webp"
import cynthiaillo from "../images/cynthia/cynthia.webp"
import fareehaillo from "../images/fareeha/fareeha.webp"

const links = [
  {
    text: "Rachel",
    url: "#rachel",
  },
  {
    text: "Michael",
    url: "#michael",
  },
  {
    text: "Cynthia",
    url: "#cynthia",
  },
  {
    text: "Fareeha",
    url: "#fareeha",
  },
]

const IndexPage = () => {

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrolled = () => {
    const backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 10) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  const [text, setText] = useState("Found");

              useEffect(() => {
                const words = ["Found", "Encontrado", "পাইলাম", "찾았다", "Ri"];
                let currentIndex = 0;

                const interval = setInterval(() => {
                  currentIndex = (currentIndex + 1) % words.length;
                  setText(words[currentIndex]);
                }, 2000);
                return () => clearInterval(interval);
              }, []);

  return (
    <main className="page-style">
      <div id="topper">
          <h1 className="site-hero">
            <div className="changing-word">{text}</div> 
            <div className="static-title">in Translation</div>
          </h1>
          <div className="subhead">
            <h2>A Visual Podcast Experience</h2>
            <a href="#about">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </a>
          </div>
            <div className="topper-links">
              {links.map(link => (
                  <div key={link.url} className="link-wrapper">
                    <a className="links" href={link.url}>
                      {link.text}
                      <img className="waveform" src={soundwave4} alt="waveform" />
                    </a>
                  </div>
                ))}
            </div>
      </div>

    {/* Back to top
     {scrolled && <svg onClick={handleScroll} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" className="back-to-top">
        <title>Back to top button</title>
        <defs>
          <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
          </path>
        </defs>
        <text dy="70" textLength="1220">
          <textPath xlinkHref="#textcircle">backtotop</textPath>
        </text>
      </svg>} */}

      {/* Episodes */}
      <div id="rachel" className="episode-wrapper left">
        <div className="text-wrapper">
          <h3>Korean Whispers</h3>
          <p>
            <b className="bolded">Rachel Lee</b> would like to thank the K-Pop group GOT7 for changing her life. The dancer-marketer-photographer-event planner extraordinaire credits them with inspiring her to learn Korean and connect more with her culture.</p> 
          <p>She shares how she navigated her Korean identity while growing up in Dallas, Texas, how that affected her relationship with her relatives, peers, and church group, and the rise of Korean media’s global dominance.</p>
        </div>
        <div id="g-box" className="ai2html">
          <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={rachelillo}/>
          </div>
          <a href="./rachel#topper">
            <button className="ep-btn">Experience the podcast visually</button>
          </a>
        </div>
      </div>

      <div id="michael" className="episode-wrapper right">
      <div id="g-box" className="ai2html">
          <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={michaelillo}/>
          </div>
          <a href="./michael">
            <button className="ep-btn">Coming soon</button>
          </a>
        </div>
        <div className="text-wrapper">  
          <h3>A Comedy of Errors (and Education in Yoruba)</h3>
          <p>
            <b className="bolded">Michael Oluokun</b> is a comedian who takes us on a rip-roaring journey through his life, spanning stories between Little Rock, Arkansas, Washington D.C., and New York. He shares how he hilariously uncovered Nigerian customs at family parties, how learning Yoruba in college led to the realization that he had been mispronouncing his last name for almost 20 years, and how his writing and performances have been shaped by this journey.
          </p>
        </div>
      </div>

      <div id="cynthia" className="episode-wrapper left">
        <div className="text-wrapper">
          <h3>Signature Moves</h3>
          <p> 
            <b className="bolded">Cynthia Mojica</b> embodied the role of translator for her parents as a child. She is a hearing person while her mom is hard-of-hearing and her dad is fully deaf, so the language they predominantly use at home is American Sign Language (ASL). She talks about being a C.O.D.A (Child of Deaf Adults), the nuances and structure of ASL as a language, and the pertinence of bringing more accessible spaces into our society.
          </p>
        </div>
        <div id="g-box" className="ai2html">
          <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={cynthiaillo}/>
          </div>
          {/* <a href="./cynthia"> */}
            <button className="ep-btn">Coming soon</button>
          {/* </a> */}
        </div>
      </div>

      <div id="fareeha" className="episode-wrapper right">
      <div id="g-box" className="ai2html">
          <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={fareehaillo}/>
          </div>
          {/* <a href="./fareeha"> */}
            <button className="ep-btn">Coming soon</button>
          {/* </a> */}
        </div>
        <div className="text-wrapper">
          <h3>Third Culture Living</h3>
          <p> <b className="bolded">Fareeha Mahmood</b> talks us through a globe-trotting journey beginning with her upbringing in Dhaka, Bangladesh, attending international schools in Indonesia and UAE, and finally moving to New York.
          </p>
          <p>
          She talks about how her experiences in these vastly different countries affected her knowledge of Bengali and proximity to Bengali culture, how the history of Bangladesh influenced her passion for the language, and the concept of language as a form of self-identification.
          </p>
        </div>
      </div>
      {/* About */}
      <div id="about" className="episode-wrapper">
          <div className="text-wrapper">
                <h3 style={{marginBottom:'2rem'}}>About</h3>
                <b className="bolded">“FOUND IN TRANSLATION”</b>
                <p style={{fontStyle:'italic'}}>noun</p>
                <p>
                1. A visual podcast experience co-created by Alejandra Arevalo and Guru Ramanathan where first/second generation Americans and immigrants discuss their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more. Ex: “Found in Translation is the worst podcast ever”; “My life was changed after being a guest on Found in Translation.”
                </p>
          </div>
          <a href="./about#topper">
            <button className="ep-btn">Learn more</button>
          </a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Found in Translation</title>
