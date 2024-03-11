import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/navbar';
import rachel_headshot from '../images/rachel/rachel_headshot.webp';
import parents from '../images/rachel/parents.webp';
import preschool_rachel from '../images/rachel/preschool_rachel.webp';
import dads_family from '../images/rachel/dads_family.webp';
import rachel_hanbok from '../images/rachel/rachel_hanbok.webp';
import korean_dance from '../images/rachel/korean_dance.webp';
import rachel_sarah from '../images/rachel/rachel_sarah.webp';
import "../styles.css"

const Rachel = () => {

  const pRef = useRef();

  // Changing title word
  const [text, setText] = useState("Korean");

              useEffect(() => {
                const words = ["Korean", "한국어"];
                let currentIndex = 0;

                const interval = setInterval(() => {
                  currentIndex = (currentIndex + 1) % words.length;
                  setText(words[currentIndex]);
                }, 2000);
                return () => clearInterval(interval);
              }, []);              
              
  return (
    <main className="page-style"> 
      <Navbar />
      <section id="topper" className="home-intro" style={{ position: "relative" }}>
        <h1 className="site-hero">
          <div className="changing-word">{text}</div>
          <div className="static-title">Whispers</div>
        </h1>
      </section>

      <section className="main-body">
        {/* Podcast Intro */}
            <section className="section-wrapper">
              <div className="name-wrapper">
                <h3>The Host<br/><span className="first-name">Guru Ramanathan</span></h3>
              </div>
              <div className="p-wrapper side">
                  <p ref={pRef}> Hello and welcome to <b className="bolded">Found in Translation</b>. I&#x27;m your host Guru Ramanathan.</p>
                  <p ref={pRef}>This is a podcast where first/second generation and immigrant youth come on to talk about their relationship with their cultural language and how that&#x27;s influenced their connection to their culture, family, friends, and more.</p>
                  <p> This week&#x27;s guest and our first guest ever is the lovely and endlessly talented <a href="https://www.rachelhaeunlee.com/" target='_blank' className="hoverable-link">RACHEL LEE</a>, who is one of my best friends and an incredible Korean American dancer, marketer photographer, podcast, artist, extraordinaire. I&#x27;m the head of her <b className="bolded">fan club</b>.</p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p ref={pRef} className='handwriting'>This is Rachel</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg>
                    </div>
                    <img className="vertical-photo" src={rachel_headshot} alt="" loading="lazy" />
                  </div>
                  <p ref={pRef}>Well, kidding, but she should definitely have her own fan club at this point. Rachel and I met each other at NYU and actually, some of the conversations we&#x27;ve had with each other over the years about our respective relationships to Korean and Tamil have inspired this podcast.</p>
                  <p ref={pRef}>Very grateful that she can be the inaugural episode and that we can share her story of:</p>
                  <p ref={pRef}><b className="list">A) </b>what it was like to navigate, coming around to learning Korean while growing up in Dallas‍ <br /><b className="list">B) </b>how that affected her relationship with her relatives and peers, including her grandmother, her church group‍ <br /><b className="list">C)</b> how artistic identity was influenced by the journey she was going on with the Korean language and culture. </p>
                  <p ref={pRef}>Hope you enjoy!</p>
              </div>
            </section>

          {/* Interview Begins */}
            <section className="section-wrapper">
              <div className="p-wrapper full">
                <h3 data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b8f" className="cue">~ interview begins ~</h3>
                <p data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b91">Thank you Rachel, for coming onto the podcast. We really appreciate it. </p>
                <p ref={pRef} data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b93" >I just wanna begin at the beginning of your life,</p>
                <p ref={pRef} data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b96" >your <b className="bolded">life&#x27;s journey </b>with this language. </p>
                <p ref={pRef} data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b98" >I feel like anytime we think about our connection to our <b className="bolded">language</b>,</p>
                <p ref={pRef} data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b9a" > it&#x27;s a <b className="bolded">rollercoaster</b> of a relationship when you&#x27;re in the American context. </p>
                {/* Q1 */}
                <b data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b9c" className="extra-bolded">What was your connection with Korean in your childhood?</b>
              </div>
            </section>

          {/* Rachel Q1 Answer */}
            <section className="section-wrapper">
              <div className="name-wrapper">
                <h3>The Guest<br /> <span className="first-name">Rachel Ha-Eun Lee</span></h3>
              </div>
              <div className="p-wrapper side">
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p ref={pRef} className='handwriting'>Rachel's parents when they were young</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                          <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                            <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                            <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                              <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                              </marker></defs>
                      </svg>
                    </div>
                    <img className="horizontal-photo" src={parents} alt="" loading="lazy" />
                  </div>
                  <p ref={pRef}>Both of my parents are from South Korea. My dad had moved to the States when he was 11 or 12 and my mom came by herself when she was 18 or so. My dad had gone through ESL and grew up in the American schooling system so he had a bit more of a grasp on English than my mother did. </p>
                  <p ref={pRef} className="right-in">When I was born, my parents pretty much only spoke Korean at home and to each other. That was almost my first language in a way. And then, I went to preschool and the Korean language disappeared from me.</p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p ref={pRef} className='handwriting'>Pre-school-age Rachel</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                            <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                              <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                              <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                </marker></defs>
                      </svg>
                    </div>
                    <img className="vertical-photo" src={preschool_rachel} alt="" loading="lazy" />
                  </div>
                  <p ref={pRef} className="right-in">I think my dad was very persistent because he had trouble growing up in the American schooling system with English as a second language. So, he did implement English language books a lot for me to read and get that going while all I really heard though was Korean. </p>
                  <p ref={pRef} className="right-in">A lot of my peers did attend hangul hakgyo (한글 학교), which is like Korean school. It was usually on a weekend and they learned to read and write and speak, et cetera. But, my parents never forced me to attend. I don&#x27;t even remember if it was necessarily offered to me in that way.</p>
              </div>
            </section>
 
            <section className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="869e026c-7fae-d570-381b-544bf71c2700" className="bolded">I wouldn&#x27;t have wanted to go anyway,</b>
                <p ref={pRef} data-w-id="869e026c-7fae-d570-381b-544bf71c2702">because I was so set on being as <b className="bolded">American</b> as possible</p>
                <p ref={pRef} data-w-id="869e026c-7fae-d570-381b-544bf71c2707">and <b className="bolded">no trace of Korean</b> in Rachel Lee.</p>
                <p ref={pRef} data-w-id="869e026c-7fae-d570-381b-544bf71c270c">So, yeah, I think I grew up mostly just understanding,</p>
                <p ref={pRef} data-w-id="869e026c-7fae-d570-381b-544bf71c270e">but as I got older, I could understand <b className="smaller">less and less</b>.</p>
                {/* Parents photo */}
                <div className='text-photo'>
                  <div className='text-arrow'>
                    <p ref={pRef} className='handwriting'>Rachel's family from her dad's side</p>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg>
                  </div>
                  <img className="horizontal-photo" src={dads_family} alt="" loading="lazy" />
                </div>
                <p data-w-id="6d9f42b5-881b-a786-a979-2276424e0947">It broke a lot of like possible relationships for me because I would visit my grandparents on my dad&#x27;s side and that family who were always speaking Korean and I couldn&#x27;t understand them. That really:</p>
                <p data-w-id="6d9f42b5-881b-a786-a979-2276424e0945">A) disappointed them because in their minds I was Korean and <b className="bolded">didn&#x27;t know how to speak</b><b className="bolded"> the language.</b></p>
                <p data-w-id="747f1589-4e84-684b-b3c6-cc731b826bd6">B) it had me resent them because I was <b className="bolded">not a good enough</b> <b className="bolded">Korean granddaughter.</b></p>
              </div>
            </section>

            <div className="section-wrapper">
            <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
              <div className="p-wrapper side">
                {/* Q2 */}
                <p data-w-id="16be7753-1d53-6079-1551-2086453af0b1">I&#x27;m curious, when you were beginning school, <b className="extra-bolded">what made you choose English over Korean?</b></p>
              </div>
            </div>

            {/* Rachel Q2 Answer */}
            <div className="section-wrapper">
              <div className="name-wrapper">
              <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p ref={pRef}>I feel like I really didn&#x27;t break away and decide that I wasn&#x27;t going to be Korean. In elementary school, I dealt with some bullying. In the first grade, two third graders would push me and tease me and stuff. </p>
                  <p ref={pRef}>And so I think that&#x27;s when I realized that, oh, I had something different about me. And if my appearance is one way, but everything else is not Asian, then maybe I won&#x27;t be Asian or be considered &quot;normal in their eyes&quot; and that kind of stuff will stop.</p>
                  <p ref={pRef}>My mom actually, part of the reason, I wonder if she didn&#x27;t send me to hangul hakgyo is because she told me once that she witnessed those two boys bully me.</p>
                  <p ref={pRef}>I had lived in the house right across the street from my elementary school. And I guess she was passing the playground and she saw me get pushed or something. And then like saw me cry at the park. I wonder too, if that influenced my parents&#x27; decision as well to not force me to learn the language.</p>
              </div>
            </div>

            <div className="section-wrapper">
               <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
               </div>
              <div className="p-wrapper side">
                  <p ref={pRef} className="right-in">I feel like, at least I can speak for this in my experience, when you&#x27;re around that age, I have definitely been in situations where I kind of just openly said &quot;I don&#x27;t want to be learning this&quot; or &quot;I don&#x27;t want to do that.&quot; </p>
                  <p ref={pRef} className="right-in">Given how steadfast you were early on about not wanting to venture into learning Korean or sort of embracing that side of yourself: <b className="bolded">how did that then bleed into your direct relationship with your mom and dad?</b></p>
              </div>
            </div>

            <div className="section-wrapper">
              <b className="extra-bolded" data-w-id="409b8102-87dc-d919-5734-0273f29fd9f9">Were you openly saying to them &quot;I don&#x27;t want to learn Korean&quot; or eat Korean food or anything of that nature?</b>
            </div>

            <div className="section-wrapper">
              <div className="name-wrapper">
              <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
              <p className="right-in">Korean food was the one that my parents wouldn&#x27;t budge, especially like my mom was the type of mom that woke up at 5:00 AM every day to make me some gourmet Korean meal. </p>
                  <p ref={pRef} className="right-in">And of course I&#x27;m like <b className="bolded">&quot;I don&#x27;t want this for lunch. How dare you pack this for me?&quot; </b></p>
                  <p ref={pRef} className="right-in">And she never changed. I was too young to comprehend that all the hard work that she puts in to create food for me in the morning. </p>
                  <p ref={pRef} className="right-in">Of course I understand that now, but as a kid, I was like <b className="bolded">&quot;she&#x27;s letting people get to me.&quot;</b></p>
                  <p ref={pRef} className="right-in"> But when it came to the language itself, my parents were pretty supportive. I remember distinctly one time we were visiting my grandparents in Texas who were on my dad&#x27;s side. </p>
                  <p ref={pRef} className="right-in">And I remember my grandma was yelling at me like <b className='bolded'>&quot;you&#x27;re Korean, you need to learn Korean,&quot; </b>blah, blah, blah, all that stuff.</p>
                  <p ref={pRef} className="right-in">And my mom stepped in and be like <b className='bolded'>&quot;well, how about you learn English? You&#x27;re living in America and if you wanna talk to her, that&#x27;s the way to do it.&quot; </b></p>
                  <p ref={pRef} className="right-in">I remember being like shocked  about that. In a way I feel I&#x27;ve always been supported language wise.</p>
              </div>
            </div>

  
            <div className="section-wrapper">
              <div className="p-wrapper full">
                <div data-w-id="35a57260-3313-32da-a27f-071029f4a8ce" className='bolded-name'>Guru</div>
                <p data-w-id="35a57260-3313-32da-a27f-071029f4a8d3" >I feel like what&#x27;s interesting about languages is that whenever you say to someone, &quot;I know this other language,&quot; they immediately follow up with<b className="bolded"> </b><b className="bolded"></b></p>
                <b data-w-id="efee021b-3bbb-8e3e-f562-f376dad288e4" className='bolded'>&quot;okay then, how do you say X word in that language?&quot;</b>
                <p data-w-id="5a852654-8e5f-d18e-fa4b-51e344cc358a" >They try to treat you like a dictionary, right?</p>
                <div data-w-id="139a822a-a1cc-953b-640b-ba8346535f9b" className='bolded-name'>Rachel</div>
                <p data-w-id="35a57260-3313-32da-a27f-071029f4a8d5">Yeeeesss.</p>
                <b data-w-id="3cb94a05-5cdc-0a10-7601-f09c52554c33" className='bolded-name'>Guru</b>
                <p data-w-id="35a57260-3313-32da-a27f-071029f4a8d7" >While I hate that question, the question behind the question is <b className="bolded"></b></p>
                <p data-w-id="b6636ab2-870b-1c09-a98b-f416e69bbc1e">‍<b className="bolded">&quot;Do you really have ownership over this language, this culture, as you&#x27;re implying?&quot;</b></p>
                <p data-w-id="06a76919-61b8-a39c-8048-ac2a3bbbe1e2" >And so going back to what you were saying about having that resentment with some of your relatives, was part of it also their level of ownership over the language or the culture that you weren&#x27;t necessarily able to tap into at a young age?<b className="bolded"></b></p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p className="right-in">Well, I really resonated with that dictionary thing. First of all, because for me, even though I know that if I just said random syllables, how would they know whether or not I&#x27;m right or wrong?  But I wanted to be right. Exactly what you said about that ownership. I wanted to prove that I could give them the correct answer.</p>
                  <p className="right-in">I think the ownership idea for me, when it came to my family, it was just knowing that they identified one way that I didn&#x27;t, I think it was less resentful.</p>
                  <p className="right-in"> I replayed that comment that my mom said to my grandma and attached it with like... </p>
                  <p className="right-in">The resentment came more about... <b className="bolded">don&#x27;t they love me enough to wanna learn English?</b></p>
                  <p className="right-in">I think it was more like–selfish way of thinking–but they&#x27;re not catering to me or they&#x27;re not making it accessible to me, especially because I was younger. </p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Moving beyond relatives though, did your approach to this impact any relationships with schoolmates?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
                  <div className='name-wrapper'>
                    <div className="bolded-name">Rachel</div>
                  </div>
                  <div className="p-wrapper side">
                    <p className="right-in">I feel like with school, it was really important for me to excel. I was always in the highest reading level at school.</p> 
                    <p lassName="right-in">I had to have the perfect grades when it came to English stuff.</p>
                    <p className="right-in">I remember my biggest flex was, at the start of kindergarten, I was already reading and then the people whose parents actually speak English, their child started reading either later in kindergarten or first grade.</p>
                    <p className="right-in">I feel like <b className="bolded">I had to prove that I was one of them</b>, if not better.</p>
                  </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p data-w-id="0436a4f7-f99e-b047-90f6-645879cff340">Can you explain what you mean by one of them?</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <div className='bolded-name'>Rachel</div>
                <p>I think it&#x27;s just being American. I wanted to be seen as a peer or a kid or a friend before being seen as &quot;the person who doesn&#x27;t look like me.&quot;</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div data-w-id="2272ff3e-653f-19d8-0222-0a15c7790b4e" className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p data-w-id="2272ff3e-653f-19d8-0222-0a15c7790b50">I feel like as you and I have grown older, the definition of an American has definitely gotten a lot more rich and diverse. At that point in time, <b className='extra-bolded'>were you conflating Americanness with whiteness?</b></p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in"><b className="bolded">Exactly.</b></p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Rachel and her mom</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg>
                    </div>
                    <img className="vertical-photo" src={rachel_hanbok} loading="lazy" />
                  </div>
                  <p>Especially growing up in Texas and being in a smaller town, it was like all the Koreans around the area were at church. I think it was interesting because there was like my parents&#x27; generation in this Korean church and then everyone that was my age that was also going through what I was going through. But then in school, there was nobody, you know, it was mostly white kids. </p>
                  <p className="right-in">When I got to third grade, I had moved schools and there was one other Korean girl and one Indian boy and two Korean boys. And that was the entire elementary school.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">So, when you did venture to places where you had a few more Asian friends, was that ever an open conversation between you guys or if it did come up with church friends your age?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <p data-w-id="12a24249-8ec3-d843-afe5-587807bf588d" className='bolded-name'>Rachel</p>
                <p data-w-id="a102635a-f462-99a0-26ae-9ed42bdc897f">I feel like when I was in my Korean church spaces, we were just so happy to be with each other. That was the only space <b className="bolded">I felt like myself</b>.</p>
                <p data-w-id="a102635a-f462-99a0-26ae-9ed42bdc8986">And maybe some of the other people that were there could be <b className="bolded">our fullest self</b>, like <b className="bolded">Korean and English</b> could be interchangable.</p>
                <b data-w-id="1770172c-9018-17f2-459d-89133b954438" className="extra-bolded">I think that was the time to be kids. </b>
                <p data-w-id="9270566f-b691-a261-6ba6-ab7be1435136" >That was the time to discuss sports or art or like you made a new friend at school maybe, but I don&#x27;t think, at least for me, I feel like I was pretty private of sharing being left out or feeling the way I felt.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Absolutely. It&#x27;s encouraging to also hear that the church space was not even just a place for one language to thrive, but sort of the fact that it was accessible to both languages, allowing that balance to be there for kids who were learning. I feel like even if it was an indirect intention, the fact that you all got the chance to be comfortable and not have to second-guess yourself, which is ideally what the school should have been as well. </p>
                  <p className="right-in">But moving further into middle school, high school time, you went to more of an arts high school. I&#x27;m curious, as you ventured deeper into a space where you were basically having to be fully creative and also expressing yourself on a daily basis...</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="05838c40-e779-834f-d121-d3a8474afa9c" className="extra-bolded">How did that artistic journey influence or did it influence your personal journey with your identity as well?</b>
              </div>
            </div>
            <div className="section-wrapper">
                <div className="p-wrapper">
                  <b className="bolded-name">Rachel</b>
                  <p className="right-in">Yeah. My training in dance is very Eurocentric. I did the ballet stuff and my high school was pretty much like modern dance based up until my second year in school, I had been dancing in these competition environments where like you&#x27;re taking class every day after school and then you&#x27;re like learning dances.</p>
                  <p className="right-in"> And those styles in my opinion, like jazz and tap has been codified to be Eurocentric and be influenced that way. But obviously, the influences for those styles are African. They aren&#x27;t Eurocentric. So we did other styles, but once I got to high school, it was very like modern ballet. </p>
                  <p className="right-in">I didn&#x27;t know anything about Korean traditional dance. I didn&#x27;t know anything about any dance companies in Korea or even Asian dance companies in America. I was quite oblivious to all of that and basically had my sights set on dance companies that everyone else did and wanted to create works that I thought my peers would like.</p>
                </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="b5fe2be7-aa99-20aa-5543-415641eafab9" className="bolded">There was one master class in my arts high school where they flew in a South Korean company that did South Korean traditional dance. </b>
                <p data-w-id="b5fe2be7-aa99-20aa-5543-415641eafabb">And I remember they had trouble speaking English.</p>
                <p data-w-id="b5fe2be7-aa99-20aa-5543-415641eafac0">I remember they were trying to teach the class with as little words as possible because they were struggling.</p>
              </div>
            </div>
            <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Rachel with South Korean dance company</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg>
                    </div>
                    <img className="vertical-photo" src={korean_dance} loading="lazy" />
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <p data-w-id="4da4f433-acb3-727f-0827-487f3e9d437e">I almost had this sense of frustration  for them, because I feel like it:</p>
                <p data-w-id="4da4f433-acb3-727f-0827-487f3e9d4380"><b className="bolded">A)</b> made other students sort of disrespect them more, like they weren&#x27;t as attentive or wanting to impress.</p>
                <p data-w-id="4da4f433-acb3-727f-0827-487f3e9d4386"><b className="bolded">Secondly,</b> I think I could see the frustration on the teachers who were trying to communicate and explain certain things and like couldn&#x27;t.</p>
                <p data-w-id="6b3d6bff-1242-7804-359c-ce275cdb4c20">But then I found myself understanding what they were saying, but I just stayed silent.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <p>After class, I went up to them and I introduced myself and their response was like &quot;why didn&#x27;t you help us translate?&quot; and I was like &quot;Oh, because I&#x27;m not that great.&quot;</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p className="right-in">And while this was happening, my mother was doing this thing, because her and my father text in Korean and she&#x27;d be driving me and picking me up from school and she&#x27;d be like &quot;oh, what did dad say?&quot;</p>
                  <div className="image-414 phot-fader"></div>
                  <p className="right-in">And I&#x27;m staring at the phone and being like &quot;yeah, I can&#x27;t read this. I don&#x27;t know what he&#x27;s saying.&quot;</p>
                  <p className="right-in">And at the time, there were other Asians at my arts high school, but I feel like I still didn&#x27;t want to accept myself and I still wanted to be part of this like Eurocentric vibe.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div data-w-id="62c417e0-5d5a-ae49-9a27-13ab1275436d" className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p data-w-id="62c417e0-5d5a-ae49-9a27-13ab12754371">That interaction with the company, it&#x27;s humorous.</p>
                <p data-w-id="3af93cf5-86af-6fca-5e42-9513586f2c46" className="speech-center fader heading-8">But, I think it&#x27;s also very interesting that they kind of look to you as a savior in the situation, because they saw you as the person who actually had a foot in both worlds.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <p>That interaction with the Korean company added with the recurring of like my mother wanting me to read her text messages from my dad and I couldn&#x27;t, plus my grandpa on my dad&#x27;s side had passed my freshman year of high school and I had some regrets of not being able to have a better relationship with him because of my lack of knowledge in the Korean language. So sort of these little things added up together.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper">
                  <p className="right-in">And I had this friend who was obsessed with all things K-pop at the time. And I consider her like my cousin or like my god-sister, like I spend holidays with her always and all the stuff.</p>
                  <p className="right-in">So she was going through a phase where every time I would come over, she would show me hours and hours of K-pop music videos. And I was like &quot;You&#x27;re weird, this is weird. This is not what I want. Like the boys are wearing more makeup than I am like.&quot; Ooh, gender roles. That was embedded in me as a child.</p>
                  <p className="right-in">Or like, ooh, the girls either act like they&#x27;re trying to be cute or they&#x27;re on the other, in the spectrum and trying to be overly sexy. So I was just hating on K-pop.</p>
                  <div className='text-photo'>
                  <div className='text-arrow'>
                    <p className='handwriting'>Rachel and Sarah</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                      <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                        <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                              </marker></defs>
                    </svg>
                  </div>
                  <img className="horizontal-photo" src={rachel_sarah} loading="lazy" />
              </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed80" className="bolded">And I remember she had shown me this one group called GOT7 and the music video was a little bit tamer.</b>
                <div><img src="images/got7.webp" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 767px) 43vw, (max-width: 991px) 45vw, 46vw" srcset="images/got7-p-500.webp 500w, images/got7-p-800.webp 800w, images/got7.webp 900w" alt="" className="image-416" /></div>
                <p data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed84" >It was a song called <a href="https://www.youtube.com/watch?v=vrdk3IGcau8" target="_blank">&quot;Just Right.&quot;</a></p>
                <p data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed86">And the concept is like, there&#x27;s this girl who&#x27;s sad about herself and like the way she looks.</p>
                <p data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed88">And then these little people, AKA, the members GOT7 are singing &quot;No, you&#x27;re just right.&quot;</p>
                <p data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed8a">So, it was kinda cute and they were kind of good dancers.</p>
                <p data-w-id="63435366-8ea9-cce1-ebe6-75f96f99ed8c" ><b className="bolded">On a whim, decided that I wanted to learn how to read and write.</b></p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">I wanted to bond with my other grandparents who hadn&#x27;t passed yet before it was too late. I wanted to maybe be a translator. And as someone who has a foot in both worlds, as you said, like, how can I help someone else that may be struggling because<b className="bolded"></b></p>
                  <p className="right-in quote-text"> I felt like I understood the frustration of not being understood.</p>
                  <p className="right-in">And so I had gone on Netflix and I was looking at a Korean show to watch. And as I was scrolling through, I saw on Netflix that they had a reality show called &quot;Real GOT7.&quot; I had started to watch because I was trying to have the Korean captions on. Because I could understand some things, I wanted to associate sound with what I was seeing or reading and starting to recognize words, et cetera, et cetera.</p>
                  <iframe className="embed-video" src="https://www.youtube.com/embed/RL_Dxu4Dli0?si=4_uQvYygAeOtuOjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <p className="right-in">That itself was not that successful, but it propelled me into wanting to learn how to read and write more. But what it really did was help me understand, and sort of educate myself, on my own culture, especially because K-pop stars train so much in singing and dancing and I also felt like I could relate to that as an artist and someone who was dancing 24/7.</p>
                  <p className="right-in">So, I became obsessed with them and that sort of propelled me to then become passionate and determined to learn the language more.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">That&#x27;s very interesting because I feel like when I took Spanish in middle school, high school, we started to learn the language and then, as we were getting a better understanding of certain phrases and stuff, then our teacher would be like, here, listen to this Spanish song, watch this telenovela.</p>
                  <p className="right-in">So, I think it&#x27;s interesting in this case, you kind of had to reverse engineer it. Where those cultural elements kind of came into your life, where you were watching these Korean reality shows, listening to this Korean music and then that kind of spurs you to go back into it.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Yeah, for sure, and I think exactly that. It&#x27;s not even like the songs that this group had were the best songs ever, but I just loved them as artists, seeing their journey, that I was so passionate about their music that I wanted to sing their music, for example, but couldn&#x27;t pronounce the lyrics or I wasn&#x27;t fully able to understand the song, or it was much harder for me to memorize the lyrics to the songs.</p>
                  <p className="right-in">What ended up happening is I tried to learn on my own. Like I would copy down an entire song in hangul and then I would try to translate the words on my own.</p>
                  <p className="right-in">I&#x27;d try to translate what it meant so I could understand and then I&#x27;d go back and I&#x27;d try to listen line by line and see if I can guess on how to write it. And then I&#x27;d check to see if I was right or wrong, et cetera.</p>
                  <p className="right-in">The spelling of these things, it was often wrong.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="7f285591-4fa9-a55b-58da-3a60fd13e200" className="bolded">In Korean, the consonants are sort of blended sounds.</b>
                <p data-w-id="7f285591-4fa9-a55b-58da-3a60fd13e202">So like L and R are very distinct in the English language. </p>
                <p data-w-id="7f285591-4fa9-a55b-58da-3a60fd13e204">They&#x27;re kind of blurred in the Korean language to find an in between.</p>
                <p data-w-id="1e43e778-43e0-c92e-8155-29dd10bbe374">Or like G and K. We have a very clear &quot;guh&quot; and &quot;kuh&quot; sounds, but in Korean, it&#x27;s also sort of in between.</p>
                <p data-w-id="f4cd3ffc-7db9-7ad2-46bf-10938d34dd75">So I would go to my parents for assistance on that.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">But my god-sister cousin person was also trying to learn Korean more as she was going on her own journey of diving into K-pop and being more obsessed and wanting to learn the language. </p>
                  <p className="right-in">So, we would start texting a single Korean word to each other. Like instead of love you, it would be saranghae <b>(사랑해)</b>. </p>
                  <p className="right-in">It was fun that I had someone in a similar journey with me, but I feel like she was ahead because she had discovered this earlier.</p>
                  <p className="right-in">But what ended up happening after doing that throughout high school and the first couple of years of college is that I ended up taking elementary Korean in school. And that&#x27;s when I felt like I knew the language the most, really.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Yeah. I mean, everyone has their own entry point into it, but it&#x27;s always interesting to find what that is. Actually, going back to the beginning of the episode, when you were mentioning there was that disconnect with some of your other relatives. </p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper full">
                <b data-w-id="8f12401a-0a14-21d5-2ae4-453e9fc8a750" className="extra-bolded">Did that interaction change the way you looked at your relationship with Korean or your Asian identity afterwards?</b>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Absolutely. People noticed that I spoke Korean more and it was like a shock. When did this happen? And obviously, I was angry at it. There were a lot of mess up and like giggles and things.</p>
                  <p className="right-in">But actually, my grandma who was a widow because my grandpa had passed when I was a freshman–the same grandma in which my mom was like &quot;you should learn English too,&quot; that grandma–I finally had her approval. </p>
                  <p className="right-in">At the time, she was in this shelter because she had Parkinson&#x27;s disease and there were times where I actually visited her on my own. And she was so excited that I was learning Korean and able to communicate with her and communicate with the other people that were at this shelter. And up until that point, I felt like my whole life, she had been comparing me to her friend&#x27;s granddaughters, or I just wasn&#x27;t good.</p>
                  <p className="right-in">I think my mom also started texting me in Korean as well. I still respond in English because the spelling part is hard, but now I can read pretty well.</p>
                  <p className="right-in">So I think it&#x27;s given her also more comfort as someone who struggles with English. She and I never texted because she also has trouble spelling in English. So yeah, it changed a lot my familial relationships.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className='name-wrapper'>
                <div data-w-id="542b7611-4c6b-9c66-bff4-41e5e8b10237" className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p data-w-id="542b7611-4c6b-9c66-bff4-41e5e8b10239">Diving into the college education, this elementary class, how did that work?</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">Yeah, I didn&#x27;t consider taking elementary Korean until my last year of college, which was my third year, because I had only attended school for three years. Because the first two years, I was so focused on the dancing thing and I was so focused on  just moving to New York and what is life and what am I doing.</p><img src="images/RachelAtNYUNotTisch.jpg" loading="lazy" sizes="(max-width: 479px) 89vw, 45vw" srcset="images/RachelAtNYUNotTisch-p-500.jpg 500w, images/RachelAtNYUNotTisch-p-800.jpg 800w, images/RachelAtNYUNotTisch-p-1080.jpg 1080w, images/RachelAtNYUNotTisch.jpg 1170w" alt="" className="image-414 phot-fader right-in" />
                  <p className="right-in">But I remember spending a lot of time in K-Town and there&#x27;s specifically like a little like bookstore and they have like these books that are like, talk to me in Korean or whatever. So I had like purchased them to learn.</p>
                  <p className="right-in">The third year, when my schedule allowed me to take Korean, I took Elementary 1 and 2.</p>
                  <p className="right-in">There was a course that were for advanced speakers And it was for like Korean Americans, like me, who had Korean spoken to them at home but didn&#x27;t know the reading and writing basics and it was sort of accelerated.</p>
                  <p className="right-in">I think there was at least two, if not, three other students who had parents who were born in Korea or they were second or third gen, but they were born in America. We were kind of in an equal level, but then everyone else didn&#x27;t know a single thing.</p>
                  <p className="right-in">I think there was at least two, if not, three other students who had parents who were born in Korea or they were second or third gen, but they were born in America. We were kind of in an equal level, but then everyone else didn&#x27;t know a single thing.</p>
                  <p className="right-in">Most of them were really into K-pop or anime or Korean dramas and decided that they wanted to learn Korean and low-key the classes were hard. I thought maybe I would cruise through a little bit because I knew stuff, but no, I did not get a hundred in the class, still an a right, but...</p>
                  <p className="right-in">Especially Elementary Korean 2. I was like, what is happening? I&#x27;m struggling so much. And my parents started to check my work because I was struggling. And it was funny cuz sometimes my parents would disagree if it&#x27;s like a certain adverb, for example, like which one it is. Like my mom&#x27;s like &quot;no, it&#x27;s this&quot; and my dad&#x27;s like &quot;no, it&#x27;s this.&quot; And then I&#x27;m just sitting here like &quot;okay guys, I still had to get this done and this is what I think it is, and this is what I learned.&quot; But it really did become a family thing to check my Korean homework at a college level.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">So, one thing about the K-pop K drama thing, I actually have multiple questions about this, but we can start smaller. One, I feel like K-pop and now K-dramas have really exploded in the international scene, but especially in the west.</p>
                  <div className="info-p"><img src="images/squidgame.jpg" loading="lazy" alt="" /></div>
                  <p className="right-in">In July, the Emmy&#x27;s nominations came out and <a href="https://www.nytimes.com/2022/09/12/arts/television/lee-jung-jae-squid-game-emmys.html" target="_blank">&quot;Squid Game&quot;</a> had a ton. So that&#x27;s definitely a huge cultural zeitgeist. And &quot;Parasite&quot; in 2020 won so many Oscars. It&#x27;s really cool to see this Korean content become more of the mainstream. Do you have any thoughts on how it&#x27;s being adopted, accepted, appropriated in an American context now that so much of the content from across multiple mediums is really blowing up?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <div className='bolded-name'>Rachel</div>
                <p>Yeah, the Koreans are taking over. We&#x27;re taking over.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">I think what&#x27;s interesting is it took me up until I was 16 or 17 for myself to accept K-pop. And I will admit, the reason why I feel I can be vocal about my passion for GOT7 and a couple of other groups is because it&#x27;s accepted more here in America, because people seem to have more of an awareness of different groups.</p>
                  <p className="right-in">I also feel like in general, growing up, when people asked my identity, it was often assumed that I was Chinese. And when telling them &quot;oh, I&#x27;m Korean,&quot; they had no idea what Korea was, or it was like the &quot;are you from the north or south question,&quot; right?</p>
                  <p className="right-in">But now it&#x27;s like, I bond with people of any race of any background through a mutual love for K-pop, which is something I literally wouldn&#x27;t have never imagined.</p>
                  <p className="right-in">And, like Korean movies and TV shows, it feels. Just as popular in my conversations as it would any other like American TV show or movie, which I think is interesting.</p>
                  <p className="right-in">And I hate that this is influenced by that, but because it seems like as an American society, people are more accepting and interested in Korean culture through media music, et cetera, I feel like I&#x27;m more proud to be Korean and I am excited to talk to people about my culture.</p>
                  <p className="right-in">What once used to be like &quot;oh, Rachel, you&#x27;re Korean, you&#x27;re different&quot; has now become &quot;oh, my gosh, like I&#x27;m so jealous because I love this K-pop group and I watch the reality shows and I can&#x27;t understand half of what they&#x27;re saying but you know more, would you talk about it with me?&quot; Or &quot;oh, I like this song, it has such a great melody and I understand some things based on the music video and the title but can you dive in more about the lyrics so I can really appreciate this thing?&quot;</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <p>Being that sort of role is really new to me and I think it happens more often than I ever thought it would. It&#x27;s interesting because I haven&#x27;t figured out why it&#x27;s accepted by society yet. I haven&#x27;t figured out why people are so interested.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
              <p data-w-id="47d5139f-b805-3095-84b3-c5c585f0a0f3"><b data-w-id="47d5139f-b805-3095-84b3-c5c585f0a0f1" className="extra-bolded">Part of it is just me wanting to believe great artistry deserves praise and recognition</b> and a lot of these films and these shows and the music are just great art in general.</p>
                <p data-w-id="47d5139f-b805-3095-84b3-c5c585f0a0f5">And I think it really does prove that even if someone doesn&#x27;t fully understand it, it tells stories, it touches emotions.</p>
                <p data-w-id="47d5139f-b805-3095-84b3-c5c585f0a0f7">How powerful can art be that if somebody doesn&#x27;t have ownership of the language or understand the language, they still go through this journey?</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">I agree with what you were saying about how good art can transcend those boundaries. I feel like movies, music, even food, they can be really good entry points into another culture and they&#x27;re very accessible to people. And then that spurs them to do more research. </p>
                  <p className="right-in">And so I do think art can be that tool for a lot of people to jump into all these different cultures and sort of begin that journey to immersion. Obviously that one little token can&#x27;t do all of the work.</p>
                  <p className="right-in">Also, to make a parallel from an earlier thing you were saying from early in high school, how you didn&#x27;t really involve your Asian identity into a lot of your art. Now that you&#x27;ve spent a lot more time investing in learning Korean, investing in Korean media and the other cultural components, has that changed your artistic output and vision?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">I think yes, but I think it&#x27;s been brought into to East Asian broadly as opposed to Korean specifically. I&#x27;ve yet to make a work or be involved in a work that is Korean specific or but now I have a bigger appreciation, sort of determination, to bring awareness to Asian artists and being okay with being in work that my identity is somehow vocalized within.</p>
                  <p className="right-in">I was recently in a project for a great friend of mine and it&#x27;s kind of a parody experimental dance work that talks about the East Asian women experience in America and sort of our underlying feelings of stuff. And it talks about like how we&#x27;re perceived, you know, the quiet woman or that Asian woman can often be fetishized and sort of the sexualization of them, you know?</p>
                  <p className="right-in">If I was told about this piece early high school, I would&#x27;ve never done it. I would&#x27;ve been like &quot;no, that is so separate. I&#x27;m not even Asian, what are you talking about?&quot; But I think now, I wanna be in work that is like this. I&#x27;m okay and I&#x27;m not ashamed or hiding behind who I am.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdac7" className="bolded">The reality is like when I walk outside of my apartment every day, I&#x27;m Asian. </b>
                <p data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdac9">When I&#x27;m on stage as a dancer, it&#x27;s my appearance. </p>
                <p data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacb">I can&#x27;t just like leave the Asianness at home, it follows me. </p>
                <p data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacd">And so I think whether or not it&#x27;s intentional of like, I&#x27;m pursuing it in my art, it&#x27;s just gonna be there and I&#x27;m okay with it being there. </p>
                <p data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacf">Whether it is super on the nose and the work is about that or not.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <p data-w-id="694a3682-bf1a-864a-da52-0a77da8d5529" className="bolded-name">Guru</p>
                <p data-w-id="694a3682-bf1a-864a-da52-0a77da8d552b">I know when you&#x27;re putting your name on your personal stuff or artistic projects that you&#x27;re using your full name now. Please, share with our audience what that name is, but also how that shift happened.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <div className='bolded-name'>Rachel</div>
                <p>Wow, that&#x27;s a really good question. I&#x27;m blushing. So, my full name is Rachel Ha-Eun Lee and Ha-Eun is also my Korean name.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">And I grew up never telling anyone my middle name, because it made me Korean, therefore, more Asian, therefore, more isolated, et cetera, et cetera.</p>
                  <p className="right-in">But the summer of 2020, I was in this dance business class that was our required course and we were building our websites and talking about, you know, how we need to brand ourselves and all of these things. And I always panicked when it came to my name because Rachel Lee is a very common name. </p>
                  <p className="right-in">There&#x27;s like 14 trillion of us in the world, but I never wanted to share my middle name. It was too... it was too embarrassing really to put it straight. </p>
                  <p className="right-in">So, I had played with other stage names. Like my mother wanted me to go by Rachel Evergreen, like Rachel Green from Friends. She liked the sound of Rachel Evergreen and I was like absolutely not.</p><img src="images/Jennifer_Aniston_image_2_cropped.jpeg" loading="lazy" sizes="(max-width: 479px) 89vw, 45vw" srcset="images/Jennifer_Aniston_image_2_cropped-p-500.jpeg 500w, images/Jennifer_Aniston_image_2_cropped.jpeg 750w" alt="" className="image-414 phot-fader right-in" />
                  <p className="right-in">But I did a lot of self-reflection like, am I still embarrassed of my Korean name? Do I want this publicly, like my full name? Is that dangerous? </p>
                  <p className="right-in">I wanted to not only distinguish myself as other Rachel Lees, but I think what&#x27;s important is like, it shows to me that I finally accepted the sort of Koreanness. Lee is obviously very Korean, but Rachel is not, but Ha-Eun feels like it is.</p>
                  <p className="right-in">So it really started when I tried to brand myself and make a website and things in 2020, and then it felt really important to include that in programs, include that in all of my art, with photography and illustrations and other journalism things that I sometimes do.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b data-w-id="2601019e-183d-359c-dfd4-d74fa8c80006" className="bolded">I also wanted to honor my parents with my Korean name because they actually picked it before I was named Rachel.</b>
                <p data-w-id="2601019e-183d-359c-dfd4-d74fa8c80008">In Korean, God means haneunim (하느님)</p>
                <p data-w-id="2601019e-183d-359c-dfd4-d74fa8c8000a">and grace is eunhye (은혜).</p>
                <p data-w-id="2601019e-183d-359c-dfd4-d74fa8c8000c">So they took the &quot;ha&quot; from haneunim, God, and the &quot;eun&quot; from eunhye, grace, </p>
                <p data-w-id="8ccd263a-26c2-fdc4-69da-9c8cd3815dd9">to create God&#x27;s grace, Ha-Eun.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="quote">
                <p>When I get married one day, I probably wanna change my last name, but I wanna bring with me my family ancestry and that does feel like my Korean name. So, I wanted to start making that public and including that in any artist work that I do.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p className="right-in">That is amazing. And I am continuing to fall in love with your parents. Thank you so much, Rachel, for coming onto the podcast. This has been an incredible episode and really appreciate your articulation and vulnerability guiding us through your whole journey with this.</p>
                  <p className="right-in">I have no doubt that your parents are now also getting fan clubs erected after comes out. You want to just quickly plug your socials or anything else, your website?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p className="right-in">You can find me on the interwebs at <a href="http://rachelhaeunlee.com" target="_blank">rachelhaeunlee.com</a>.</p>
                  <p> My Instagram is <a href="https://www.instagram.com/rleeforever/" target="_blank">rleeforever.</a></p>
                  <p>Thanks for having me!</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a8" className="right-in">And that&#x27;s a wrap on episode one. Thank you so so much again for listening and embarking on this journey with us. Please like, share, comment, etc and stay tuned to episode two. We greatly appreciate your support.</p>
              </div>
            </div>
      </section>
    </main>
  )
}

export default Rachel

export const Head = () => <title>Rachel</title>
