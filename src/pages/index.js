import * as React from "react"
import { useState, useEffect } from "react"
import "../styles.css"
import rachelillo from "../images/rachel/rachel.webp"
import michaelillo from "../images/michael/michael.webp"
import cynthiaillo from "../images/cynthia/cynthia.webp"
import fareehaillo from "../images/fareeha/fareeha.webp"
import InfoBtn from "../components/infobtn"
import Waveform from "../components/waveform"
import { Button, Link, Heading, IconButton, Text, ButtonGroup, ChakraProvider, Stack  } from '@chakra-ui/react'

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
    <ChakraProvider>
      <main className="page-style">
        <div id="topper">
          <Heading as='h1' size='4xl'>
            <div className="changing-word">{text}</div> 
            <div className="static-title">in Translation</div>
          </Heading>

          <div className="subhead">
            <Heading as='h2' size='lg'>A Visual Podcast Experience</Heading>
            <IconButton aria-label='info' size='xs' icon={<InfoBtn />} />
          </div>

          <Stack direction='row' spacing={4}>
            {links.map(link => (
                  <Link href={link.url}>
                    <Button className="topper-link" size='lg' colorScheme="yellow" p={4} boxShadow='outline' rounded='md' bg='orange.400'>
                      {link.text}
                      <Waveform />
                    </Button>
                  </Link>
              ))}
          </Stack>

        </div>

        {/* Episodes */}
        <div id="rachel" className="episode-wrapper left">
          <div className="text-wrapper">
            <Heading as='h3' size='lg'>Korean Whispers</Heading>
            <Text>
              <b className="bolded">Rachel Lee</b> would like to thank the K-Pop group GOT7 for changing her life. The dancer-marketer-photographer-event planner extraordinaire credits them with inspiring her to learn Korean and connect more with her culture.
            </Text>
            <Text>
              She shares how she navigated her Korean identity while growing up in Dallas, Texas, how that affected her relationship with her relatives, peers, and church group, and the rise of Korean media’s global dominance.
            </Text>
          </div>

          <div id="g-box" className="ai2html">
            <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={rachelillo} />
            </div>
            <Link href='./rachel' isInternal>
              <Button className="ep-btn">Experience the podcast visually</Button>
            </Link>
          </div>
        </div>

        <div id="michael" className="episode-wrapper right">
          <div id="g-box" className="ai2html">
            <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={michaelillo} />
            </div>
            <Link href="./michael">
              <Button className="ep-btn">Coming soon</Button>
            </Link>
          </div>
          <div className="text-wrapper">  
            <Heading as='h3' size='lg'>A Comedy of Errors (and Education in Yoruba)</Heading>
            <Text>
              <b className="bolded">Michael Oluokun</b> is a comedian who takes us on a rip-roaring journey through his life, spanning stories between Little Rock, Arkansas, Washington D.C., and New York. He shares how he hilariously uncovered Nigerian customs at family parties, how learning Yoruba in college led to the realization that he had been mispronouncing his last name for almost 20 years, and how his writing and performances have been shaped by this journey.
            </Text>
          </div>
        </div>

        <div id="cynthia" className="episode-wrapper left">
          <div className="text-wrapper">
            <Heading as='h3' size='lg'>Signature Moves</Heading>
            <Text> 
              <b className="bolded">Cynthia Mojica</b> embodied the role of translator for her parents as a child. She is a hearing person while her mom is hard-of-hearing and her dad is fully deaf, so the language they predominantly use at home is American Sign Language (ASL). She talks about being a C.O.D.A (Child of Deaf Adults), the nuances and structure of ASL as a language, and the pertinence of bringing more accessible spaces into our society.
            </Text>
          </div>
          <div id="g-box" className="ai2html">
            <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0"></div>
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={cynthiaillo} />
            </div>
            <Button className="ep-btn">Coming soon</Button>
          </div>

        <div id="fareeha" className="episode-wrapper right">
          <div id="g-box" className="ai2html">
            <div id="g-rachel-Artboard_1" className="g-artboard" style={{maxWidth: "569px", maxHeight: "809px"}} data-aspect-ratio="0.754" data-min-width="0">
              <img id="g-rachel-Artboard_1-img" className="g-rachel-Artboard_1-img g-aiImg" alt="" src={fareehaillo} />
            </div>
            <Button className="ep-btn">Coming soon</Button>
          </div>
          <div className="text-wrapper">
            <Heading as='h3' size='lg'>Third Culture Living</Heading>
            <Text>
              <b className="bolded">Fareeha Mahmood</b> talks us through a globe-trotting journey beginning with her upbringing in Dhaka, Bangladesh, attending international schools in Indonesia and UAE, and finally moving to New York.
            </Text>
            <Text>
              She talks about how her experiences in these vastly different countries affected her knowledge of Bengali and proximity to Bengali culture, how the history of Bangladesh influenced her passion for the language, and the concept of language as a form of self-identification.
            </Text>
          </div>
        </div>

        {/* About */}
        <div id="about" className="episode-wrapper">
          <div className="text-wrapper">
            <Heading as='h3' size='lg' style={{ marginBottom: '2rem' }}>About</Heading>
            <Text>
              <b className="bolded">“FOUND IN TRANSLATION”</b>
            </Text>
            <Text style={{ fontStyle: 'italic' }}>noun</Text>
            <Text>
              1. A visual podcast experience co-created by Alejandra Arevalo and Guru Ramanathan where first/second generation Americans and immigrants discuss their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more. Ex: “Found in Translation is the worst podcast ever”; “My life was changed after being a guest on Found in Translation.”
            </Text>
          </div>
          <Link href="./about#topper">
            <Button className="ep-btn">Learn more</Button>
          </Link>
        </div>
        
      </main>

    </ChakraProvider>
  )
}

export default IndexPage

export const Head = () => <title>Found in Translation</title>
