import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import rachel_headshot from '../images/rachel/rachel_headshot.webp';
import parents from '../images/rachel/parents.webp';
import preschool_rachel from '../images/rachel/preschool_rachel.webp';
import dads_family from '../images/rachel/dads_family.webp';
import rachel_hanbok from '../images/rachel/rachel_hanbok.webp';
import korean_dance from '../images/rachel/korean_dance.webp';
import grandparents_momside from '../images/rachel/grandparents_momside.webp';
import texts from '../images/rachel/texts.webp';
import "../styles.css"

const Rachel = () => {

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
              
              useEffect(() => {
                // Get all elements with class 'section-wrapper'
                const parentDivs = document.querySelectorAll('.section-wrapper');
            
                const photoDivs = document.querySelectorAll('.text-photo');

                // Iterate over each 'section-wrapper' element
                parentDivs.forEach(parentDiv => {
                    // Get the corresponding 'p-wrapper' element within each 'section-wrapper'
                    const fadeDiv = parentDiv.querySelector('.p-wrapper');
            
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

                photoDivs.forEach(photoDiv => {
                  const photo = photoDiv.querySelector('.text-photo');
          
                  if (photoDiv && photo) {
                      const observer = new IntersectionObserver(entries => {
                          entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                  photo.classList.add('fade');
                              } else {
                                  photo.classList.remove('fade');
                              }
                          });
                      });
          
                      observer.observe(photoDiv);
          
                      return () => observer.disconnect();
                  }
              } )

            }, []);
  
                 
  return (
    <main> 
      <Navbar />
      <section id="topper" className="topper">
        <h1>
          <span className="changing-word">{text}</span>
          <span className="static-title">Whispers</span>
        </h1>
      </section>

      <BackTop />

      <div className="main-body">
        <section className='section-wrapper'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/episode/0zTTVVqz56JDLyBtCWxh31?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </section>
        {/* Podcast Intro */}
            <section className="section-wrapper">
              <div className='name-wrapper'>
                <div>
                  <h3>The Host<br/><span className="first-name">Guru Ramanathan</span></h3>
                </div>
              </div>
              <div className="p-wrapper side">
                  <p> Hello and welcome to <b>Found in Translation</b>. I'm your host Guru Ramanathan.</p>
                  <p> And this is a podcast where first/second generation and immigrant people come on to talk about their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more.</p>
                  <p> This week&#x27;s guest, and our first guest ever, is the lovely and endlessly talented <a href="https://www.rachelhaeunlee.com/" target='_blank' className="hoverable-link">RACHEL LEE</a>, who is one of my best friends and an incredible Korean American dancer-marketer-photographer-podcaster-artist extraordinaire. I&#x27;m the head of her <b>fan club</b>.</p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Rachel</p>
                    </div>
                    <img className="vertical-photo" src={rachel_headshot} alt="" loading="lazy" />
                  </div>
                  <p>Kidding, but she should definitely have her own fan club at this point. Rachel and I actually met each other at NYU and some of the conversations we&#x27;ve had with each other over the years about our respective relationships to Korean and Tamil have inspired this podcast.</p>
                  <p>So, we're very grateful that she can be the inaugural episode and that we can share her story of:</p>
                  <p><b className="list">A) </b>what it was like to navigate coming around to learning Korean while growing up in Dallas‍<br /><b className="list">B) </b>how that affected her relationship with her relatives, school peers, and church <br /><b className="list">C)</b> how her artistic identity was influenced by this journey she was going on. </p>
                  <p>And so much more. So, hope you enjoy!</p>
              </div>
            </section>
          
          <BackTop />

          {/* Interview Begins */}
            <section className="section-wrapper">
              <div className="p-wrapper full">
                <h3 className="cue">~ interview begins ~</h3>
                <p>Thank you, Rachel, for coming on to the podcast. We really appreciate it. What was your connection with Korean in your childhood?</p>
              </div>
            </section>

          {/* Rachel Q1 Answer */}
            <section className="section-wrapper">
              <div className="name-wrapper">
                <h3>The Guest<br /> <span className="first-name">Rachel Ha-Eun Lee</span></h3>
              </div>
              <div className="p-wrapper side">
                  <div className='text-photo' style={{flexDirection:'column'}}>
                    <div className='text-arrow'>
                      <p className='handwriting'>Rachel's parents when they were young</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                          <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                            <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                            <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                              <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                              </marker></defs>
                      </svg> */}
                    </div>
                    <img className="horizontal-photo" src={parents} alt="" loading="lazy" />
                  </div>
                  <p>Both of my parents are from South Korea. And my dad had moved to the States when he was 11 or 12, and my mom came by herself when she was 18 or so. So, my dad had gone through ESL and grew up in the American schooling system, so had a bit more of a grasp on English than my mother did. </p>
                  <p>When I was born, my parents pretty much only spoke Korean at home and to each other. That was almost my first language in a way. And then I went to preschool and the Korean language disappeared from me.</p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Pre-school-age Rachel</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                            <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                              <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                              <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                </marker></defs>
                      </svg> */}
                    </div>
                    <img className="vertical-photo" src={preschool_rachel} alt="" loading="lazy" />
                  </div>
                  <p>My grandma on my mom's side, also, was living with us in Texas in my early years and she doesn't speak any English. I think my dad was very persistent because he had trouble growing up in the American schooling system with English as a second language. So, he did implement English-language books a lot for me to read and get that going while all I really heard though was Korean. </p>
                  <p>A lot of my peers did attend hangul hakgyo (한글 학교), which is like Korean school. It was usually on a weekend and they learned to read and write and speak, etc. But, my parents never forced me to attend.</p>
              </div>
            </section>
 
            <section className="section-wrapper">
              <div className="p-wrapper">
                <p><b>I wouldn&#x27;t have wanted to go anyway </b> because I was so set on being as <b>American</b> as possible and <b>no trace of Korean</b> in Rachel Lee. And so, yeah, I think I grew up mostly just understanding, but as I got older, I could understand <b className="smaller">less and less</b>.</p>
                {/* Parents photo */}
                <div className='text-photo'>
                  <div className='text-arrow'>
                    <p className='handwriting'>Rachel's family from her dad's side</p>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg> */}
                  </div>
                  <img className="horizontal-photo" src={dads_family} alt="" loading="lazy" />
                </div>
                <p>It broke a lot of possible relationships for me because my whole dad's side was in Texas, and so I would visit my grandparents on my dad&#x27;s side and that family who were always speaking Korean, and I couldn&#x27;t understand them. That really:</p>
                <p>A) disappointed them, because in their minds I was Korean and <b>didn&#x27;t know how to speak</b><b> the language.</b></p>
                <p>B) it had me resent them because I was <b>not a good enough</b> <b>Korean granddaughter.</b></p>
              </div>
            </section>

            <div className="section-wrapper">
            <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
              <div className="p-wrapper side">
                {/* Q2 */}
                <p>When you were beginning school, <b className="extra-bolded">what made you choose English over Korean, or made that shift more aggressive?</b></p>
              </div>
            </div>

            {/* Rachel Q2 Answer */}
            <div className="section-wrapper">
              <div className="name-wrapper">
              <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p>I feel like I really didn&#x27;t break away and decide that I wasn&#x27;t going to be Korean. In elementary school, I dealt with some bullying. In the first grade, two third graders would push me and tease me. </p>
                  <p>And so I think that&#x27;s when I realized that, oh, I had something different about me. And, if my appearance is one way, but everything else is not Asian, then maybe I won&#x27;t be Asian. Or, be considered &quot;normal in their eye,s&quot; and that kind of stuff will stop.</p>
                  <p>My mom, actually, part of the reason I wonder if she didn&#x27;t send me to hangul hakgyo is because she told me once that she witnessed those two boys bully me.</p>
                  <p>I had lived in the house right across the street from my elementary school. And she saw me get pushed or something. And then like saw me cry at the park. I wonder, too, if that influenced my parents&#x27; decision as well to not force me to learn the language.</p>
              </div>
            </div>

            <div className="section-wrapper">
               <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
               </div>
              <div className="p-wrapper side">
                  <p> <b className="extra-bolded">How did that then bleed into your direct relationship with your mom and dad?</b></p>
                  <p>And were you openly saying to them, &quot;I don&#x27;t want to learn Korean or eat Korean food,&quot; or anything of that nature?</p>
              </div>
            </div>

            <div className="section-wrapper">
              <div className="name-wrapper">
              <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
              <p>I feel actually Korean food was the one that my parents wouldn&#x27;t budge, especially like my mom was the type of mom that woke up at 5:00 AM every day to make me some gourmet Korean meal. </p>
                  <p>And, of course, I&#x27;m like <b>&quot;I don&#x27;t want this for lunch. How dare you pack this for me?&quot; </b></p>
                  <p>And she never changed. I was too young to comprehend that all the hard work that she puts in to create food for me in the morning. </p>
                  <p>So, of course, I understand that now, but as a kid, I was like, <b>&quot;She&#x27;s letting people get to me.&quot;</b></p>
                  <p>But when it came to the language itself, my parents were pretty supportive. I remember, distinctly, one time we were visiting my grandparents in Texas, who were on my dad&#x27;s side. </p>
                  <p>And I remember my grandma was yelling at me like, <b className='bolded'>&quot;You&#x27;re Korean, you need to learn Korean,&quot; </b>blah, blah, blah, all that stuff.</p>
                  <p>And my mom stepped in and be like, <b className='bolded'>&quot;Well, how about you learn English? You&#x27;re living in America and if you want to talk to her, that&#x27;s the way to do it.&quot; </b></p>
                  <p>I remember being, like, shocked about that. And so, in a way, I feel like I&#x27;ve always been supported language wise, in that sense.</p>
              </div>
            </div>

  
            <div className="section-wrapper">
              <div className="p-wrapper full">
                <div className='bolded-name'>Guru</div>
                <p>What&#x27;s interesting about languages is that whenever you say to someone, &quot;I know this other language,&quot; they immediately follow up with: <b> </b><b></b></p>
                <b className='bolded'>&quot;Okay then, how do you say X word in that language?&quot;</b>
                <p>They try to treat you like a dictionary, right?</p>
                <p>While I hate that question, the question behind the question is: <b></b></p>
                <p>‍<b>&quot;Do you really have ownership over this language, this culture, as you&#x27;re implying?&quot;</b></p>
                <p>And so, going back to what you were saying about having that resentment with some of your relatives, was part of it also their level of ownership over the language or the culture that you weren&#x27;t necessarily able to tap into at a young age?<b></b></p>
              </div>
            </div>

            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p>Well, I really resonated with that dictionary thing, first of all. Because for me, even though I know that if I just said random syllables, how would they know whether or not I&#x27;m right or wrong? But I wanted to be right. Exactly what you said about that ownership. I wanted to prove that I could give them the correct answer.</p>
                  <p>I think the ownership idea for me, when it came to my family, it was just knowing that they identified one way that I didn&#x27;t. I think it was less resentful.</p>
                  <p>I replayed that comment that my mom said to my grandma and attached it with like... </p>
                  <p>The resentment came more about like...<b>Don&#x27;t they love me enough to want to learn English?</b></p>
                  <p>I think it was more of like--selfish way of thinking--but they&#x27;re not catering to me or they&#x27;re not making it accessible to me, especially because I was younger. </p>
              </div>
            </div>
            <div className='text-photo'>
                <div className='text-arrow'>
                  <p className='handwriting'>Rachel and her grandparents from her mom's side</p>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                      <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                        <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                        <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                          <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                          </marker></defs>
                  </svg> */} 
                </div>
                <img className="horizontal-photo" src={grandparents_momside} alt="" loading="lazy" />
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                  <b className='extra-bolded'>Asbolutely! But, moving beyond relatives though, did your approach to this impact any relationships with schoolmates?</b>
              </div>
            </div>
            <div className="section-wrapper">
                  <div className='name-wrapper'>
                    <div className="bolded-name">Rachel</div>
                  </div>
                  <div className="p-wrapper side">
                    <p>I feel like with school it was really important to me to excel.</p> 
                    <p>I feel like <b>I had to prove that I was one of them</b>, if not better.</p>
                  </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <b className='extra-bolded'>Can you explain what you mean by &quot;one of them&quot;?</b>
              </div>
            </div>
            <div className="section-wrapper quote">
                <div className='bolded-name'>Rachel</div>
                <p><span>Yeah, I think it&#x27;s just being American. I wanted to be seen as a peer or a kid or a friend, before being seen as &quot;the person who doesn&#x27;t look like me.&quot;</span></p>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
              <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Rachel and her mom</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg> */}
                    </div>
                    <img className="vertical-photo" src={rachel_hanbok} loading="lazy" />
                  </div>
                  <p>Especially growing up in Texas, and being in a smaller town, it was like all the Koreans around the area was at church. I think it was interesting because there was like my parents&#x27; generation in this Korean church and then everyone that was my age that was also going through what I was going through. But then in school there was nobody, you know? It was mostly white kids. </p>
                  <p>When I got to third grade, I had moved schools and there was one other Korean girl and one Indian boy and two Korean boys. And that was the entire elementary school.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>So, when you did kind of like venture to some places where you had a few more Asian friends, was that ever an open conversation between you guys?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <p className='bolded-name'>Rachel</p>
                <p>I feel like when I was in my Korean church spaces, we were just so happy to be with each other. That was the only space <b>I felt like myself</b>.</p>
                <p>And maybe some of the other people that were there could be <b>our fullest self.</b> Like <b>Korean and English</b> could be interchangable.</p>
                <p>That was the time to discuss, I don't know, sports or art or, like, you made a new friend at school maybe? But I don&#x27;t think, at least for me, I feel like I was pretty private of sharing being left out or feeling the way I feel.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>Absolutely. And I would say, it&#x27;s encouraging to also hear that the church space was, not even just a place for one language to thrive, but sort of the fact that it was accessible to both languages, allowing that balance to be there for kids who were sort of still learning. I feel like even if it was an indirect intention, the fact that you all got the chance to truly be yourselves and comfortable and not have to second guess yourself, which is ideally what the school should have been as well, right? </p>
                  <p>But, moving further into that middle school, high school time, you went to more of an arts high school.</p>
                  <b className="extra-bolded">How did that artistic journey influence your personal journey with your identity as well?</b>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
                <div className="p-wrapper">
                  <b className="bolded-name">Rachel</b>
                  <p>Yeah. My training in dance is very Eurocentric. I did the ballet stuff and my high school was pretty much like modern dance. Up until my second year in school, I had been dancing in these competition environments where you&#x27;re taking class every day after school and then you&#x27;re like learning dances.</p>
                  <p>And those styles were, in my opinion, like jazz and tap, has been codified to be Eurocentric and be influenced that way. But obviously, the influences for those styles are African. They aren&#x27;t Eurocentric. So, we did other styles, but once I got to high school, it was very like modern ballet-contemporary. </p>
                  <p>I didn&#x27;t know anything about Korean traditional dance. I didn&#x27;t know anything about any dance companies in Korea, or even Asian dance companies in America. I was quite oblivious to all of that and wanted to create works that I thought my peers would like.</p>
                </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b>There was one master class in my arts high school where they flew in a South Korean company that did South Korean traditional dance. </b>
                <p>And I remember they had trouble speaking English.</p>
                <p>I remember they were trying to teach the class with as little words as possible because they were struggling.</p>
              </div>
            </div>
            <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Rachel with South Korean dance company</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                              <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                                <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                                <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                  <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                  </marker></defs>
                        </svg> */}
                    </div>
                    <img className="vertical-photo" src={korean_dance} loading="lazy" />
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <p>I almost had this sense of frustration for them because I feel like it made other students sort of disrespect them more, like they weren&#x27;t as attentive or wanting to impress. </p>
                <p>Secondly, I think I could see the frustration on the teachers who were trying to communicate and explain certain things and couldn&#x27;t.</p>
                <p>But then I could understand them talking to each other. They were trying to negotiate with each other on certain things, and I found myself understanding what they were saying. But I just stayed silent, you know.</p>
              </div>
            </div>
            <div className="section-wrapper quote">
                <p><span>After class, I introduced myself and their response was like, &quot;Why didn&#x27;t you help us translate?&quot; And I was like, &quot;Oh, because I&#x27;m not that great.&quot; And I'm saying all this in Korean. And I was like, my pronunciation's not the best.</span></p>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper full">
                  <p>And so, that happened.</p>
                  <p>And at the same time, while this was happening, my mother was doing this thing, because her and my father text in Korean. And she&#x27;d be driving me and picking me up from school, and she&#x27;d be like, &quot;Oh, what did dad say?&quot;</p>
                  <div className="image-414 phot-fader"></div>
                  <p>And I&#x27;m staring at the phone and being like, &quot;Yeah, I can&#x27;t read this. I don&#x27;t know what he&#x27;s saying.&quot;</p>
                  <p>And at the time, there were other Asians at my arts high school, but, I feel like I still didn&#x27;t want to accept myself and I still wanted to be part of this like Eurocentric vibe.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>That interaction with the company, it&#x27;s humorous.</p>
                <p className="speech-center fader heading-8">But, I think it&#x27;s also very interesting that they kind of looked to you as a savior in the situation because they saw you as the person who actually had a foot in both worlds. And so, did that interaction change the way you looked at your relationship with Korean or your Asian identity afterwards? </p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <p>That interaction with the Korean company, added with my mother wanting me to read her text messages from my dad and I couldn&#x27;t, plus my grandpa on my dad&#x27;s side had passed my freshman year of high school. And I had some regrets of not being able to have a better relationship with him because of my lack of knowledge in the Korean language. So these little things added up.</p>
                  <p>And I had this friend who was obsessed with all things K-pop at the time. And I consider her like my cousin, or like my god-sister.</p>
                  <p>So she was going through a phase where every time I would come over, she would show me hours and hours of K-pop music videos. And I was like, &quot;You&#x27;re weird. This is weird. This is not what I want. Like, the boys are wearing more makeup than I am.&quot; Like ooh gender roles, right? That was embedded in me as a child.</p>
                  <p>Or like, ooh the girls either act like they&#x27;re trying to be cute, or they&#x27;re on the other end of the spectrum and trying to be overly sexy. So, I was just hating on K-pop.</p>
                {/* <div className='text-photo' style={{marginTop:0}}>
                  <div className='text-arrow'>
                    <p className='handwriting'>Rachel and Sarah</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                      <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                        <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                              </marker></defs>
                    </svg> 
                     <img className="horizontal-photo" src={rachel_sarah} loading="lazy" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b>And, I remember she had shown me this one group called GOT7 and the music video was a little bit tamer.</b>
                <div><img src="images/got7.webp" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 767px) 43vw, (max-width: 991px) 45vw, 46vw" srcset="images/got7-p-500.webp 500w, images/got7-p-800.webp 800w, images/got7.webp 900w" alt="" className="image-416" /></div>
                <p>It was a song called <a href="https://www.youtube.com/watch?v=vrdk3IGcau8" target="_blank">&quot;Just Right.&quot;</a></p>
                <p>And the concept is like, there&#x27;s this girl who&#x27;s sad about herself and like the way she looks.</p>
                <p>And then these little people AKA the members of GOT7 are singing: &quot;No, you&#x27;re just right!&quot; Like you're whatever.</p>
                <p>So, it was kinda cute and they were kind of good dancers.</p>
                <p><b>So I, on a whim, decided that I wanted to learn how to read and write.</b></p>
                {/* ADD KOREAN WRITING ILLUSTRATIONS */}
                <p>I wanted to bond with my other grandparents who hadn&#x27;t passed yet before it was too late. I wanted to maybe be a translator. And, as someone who has a foot in both worlds, as you said, like, how can I help someone else that may be struggling because...<b></b></p>
                <p>I felt like I understood the frustration of not being understood.</p>
                <p>And so, I had gone on Netflix and I was looking at a Korean show to watch. And as I was scrolling through, I saw on Netflix that they had a reality show called &quot;Real GOT7.&quot; I had started to watch because I was trying to have the Korean captions on. Because I could understand some things, I wanted to associate sound with what I was seeing or reading and starting to recognize words.</p>
                <iframe className="embed-video" src="https://www.youtube.com/embed/RL_Dxu4Dli0?si=4_uQvYygAeOtuOjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>That itself was not that successful. But it propelled me into wanting to learn how to read and write more. But what it really did was help me understand and sort of educate myself on my own culture, especially because K-pop stars train so much in singing and dancing, and I also felt like I could relate to that as an artist and someone who was dancing 24/7.</p>
                <p>So, I became obsessed with them and that sort of propelled me to then become passionate and determined to learn the language more.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                  <p>That&#x27;s very interesting because I feel like when I took Spanish in middle school/high school, we started to learn the language and then, as we were getting a better understanding of certain phrases and stuff, then our teacher would be like, here, listen to this Spanish song. Here, watch this telenovela.</p>
                  <p>So, I think it&#x27;s interesting in this case, you kind of had to reverse engineer it where those cultural elements came into your life where you were watching this Korean reality show, listening to this Korean music, and then that kind of spurns you to go back into it.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <p>Yeah, for sure, and I think exactly that. It&#x27;s not even like the songs that this group had are the best songs ever! But, I just loved them as artists, like seeing their journey, that I was so passionate about their music that I wanted to sing their music, for example. But, I couldn&#x27;t pronounce the lyrics or I wasn&#x27;t fully able to understand the song, or it was much harder for me to memorize the lyrics to the songs.</p>
                <p>What ended up happening is I tried to learn on my own. I would copy down an entire song in hangul and then I would try to translate the words on my own.</p>
                <p>I'd be reading it, I&#x27;d try to translate what it meant so I could understand, and then I&#x27;d go back and I&#x27;d try to listen line-by-line and see if I can guess on how to write it. And then I&#x27;d check to see if I was right or wrong, etc.</p>
                <b>In Korean, the consonants are sort of blended sounds.</b>
                <p>So like L and R are very distinct in the English language. </p>
                <p>They&#x27;re kind of blurred in the Korean language.</p>
                <p>Or like G and K. We have a very clear &quot;guh&quot; and &quot;kuh&quot; sound, but in Korean, it&#x27;s also sort of in between.</p>
                <p>So I would go to my parents for assistance on that.</p>
                {/* ADD KOREAN ILLUSTRATIONS */}
                <p>But, my god-sister-cousin-person was also trying to learn Korean as she was going on her own journey of diving into K-pop and wanting to learn the language. </p>
                <p>We would start texting a single Korean word to each other. Like instead of love you, it would be saranghae <b>(사랑해)</b>. </p>
                <p>So, it was fun that I had someone in a similar journey with me, but I feel like she was ahead because she had discovered this earlier.</p>
                <p>But, what ended up happening after doing that throughout high school, I ended up taking elementary Korean in college. And that&#x27;s when I felt like I knew the language the most, really.</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>Yeah. I mean, everyone has their own entry point into it, but it&#x27;s always interesting to find what that is. Actually, going back to the beginning of the episode, when you were mentioning there was that disconnect with some of your other relatives, <b className="extra-bolded">did your increased investment in learning Korean, did that change any of those relationships?</b></p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p>Absolutely. People noticed that I spoke Korean more and it was like a shock! When did this happen, right? And obviously, I was angry at it. There were a lot of mess ups and like giggles and things.</p>
                  <p>Which kind of pushes the timeline a little later, but my grandma who was a widow, because my grandpa had passed when I was a freshman, and the same grandma in which my mom was like, &quot;You should learn English, too!&quot; -- like THAT grandma. I finally had her approval. </p>
                  <p>At the time, she was in this shelter because she had Parkinson&#x27;s disease and there were times where I actually visited her on my own. And she was so excited that I was learning Korean and able to communicate with her, and communicate with the other people that were at this shelter. And, up until that point, I felt like my whole life she had been comparing me to her friend&#x27;s granddaughters, or I just wasn&#x27;t good enough.</p>
                  <p>I think my mom also started texting me in Korean as well. I still respond in English because the spelling part is hard, but now I can read pretty well.</p>
                  <p>So, I think it&#x27;s given her also more comfort as someone who has trouble spelling in English. So yeah, it definitely changed a lot for my familial relationships.</p>
              </div>
            </div>
            {/* <div className="section-wrapper" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <div className='text-message'>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={rachel_hanbok} alt="Young Rachel and her mother" style={{borderRadius:'50%', width:'100px', height:'100px'}} />
                  <span>엄마</span>
                </div>
                <div className='message-left'>
                  <span>
                    집에 있어? 
                  </span>
                </div>
                <div className='message-right'>
                  <span>
                  yes just took a nap
                  </span>
                </div>
                <div className='message-left'>
                  <span>
                    오늘 오디션 안 갔어?
                  </span>
                </div>
                <div className='message-right'>
                  <span>
                    yeah i decided to rest
                  </span>
                </div>
                <div className='message-left'>
                  <span>
                    ㅇㅋ 몸은 어때?
                  </span>
                </div>
                <div className='message-right'>
                  <span>
                    just a little stuffy but finally leaving the house today to get dinner with serena
                  </span>
                </div>
                <div className='message-left'>
                  <span>
                    ㅇㅋ 조심 하고 영양가 있는거 먹어 오일리 한거 먹지 말고
                  </span>
                </div>
                <div className='message-right'>
                  <span>
                    ok
                  </span>
                </div>
              </div>
            </div> */}
            <div className="section-wrapper">
              <div className='p-wrapper full'>
                <img className='text-message' src={texts} alt="Text messages"/></div>
            </div>
            <div className="section-wrapper">
              <div className='name-wrapper'>
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <b className='extra-bolded'>Nice. And then diving into the college education, this elementary class, did you become a Korean minor, or would they just kind of going through levels like one, two, three, four? Or how did that work when you're at college?</b>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>Yeah, I didn&#x27;t consider taking elementary Korean until my last year of college, which was my third year, because I had only attended school for three years. Because the first two years I was so focused on the dancing thing, and I was so focused on just moving to New York and what is life and what am I doing, all this stuff.</p><img src="images/RachelAtNYUNotTisch.jpg" loading="lazy" sizes="(max-width: 479px) 89vw, 45vw" srcset="images/RachelAtNYUNotTisch-p-500.jpg 500w, images/RachelAtNYUNotTisch-p-800.jpg 800w, images/RachelAtNYUNotTisch-p-1080.jpg 1080w, images/RachelAtNYUNotTisch.jpg 1170w" alt="" className="image-414 phot-fader right-in" />
                  <p>But I remember spending a lot of time in K-Town and there&#x27;s a little bookstore and they have like these books that are like, talk to me in Korean or whatever. So I had purchased them to learn.</p>
                  <p>I took Elementary 1 and 2.</p>
                  <p>There was a course for advanced speakers and it was for Korean Americans like me who had Korean spoken to them at home, but didn&#x27;t know the reading and writing basics, and it was sort of accelerated. And I could have taken that course, but I just wanted a fresh start from the beginning.</p>
                  <p>I think there was at least two, if not three, other students who had parents who were born in Korea, or they were second or third gen, but they were born in America. We were kind of in an equal level, but then everyone else didn&#x27;t know a single thing.</p>
                  <p>Most of them were really into K-pop or anime or Korean dramas, and decided that they wanted to learn Korean. And low-key the classes were hard. I thought maybe I would cruise through a little bit because I knew stuff, but no. I did not get a hundred in the class, still like an A, right? </p>
                  <p>And my parents started to check my homework because I was struggling. And it was funny because sometimes my parents would disagree, like if it&#x27;s like a certain adverb, for example, like which one it is. My mom&#x27;s like, &quot;No, it&#x27;s this,&quot; and my dad&#x27;s like, &quot;No, it&#x27;s this.&quot; And then I&#x27;m just sitting here like, &quot;Okay guys, I still have to get this done.&quot; But it really did become a family thing to check my Korean homework at a college level.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                  <p>So, one thing about the K-pop/K-drama thing. I actually have multiple questions about this. One, I feel like K-pop, and now K-dramas, have really exploded in the international scene, but especially in the West. Now with the advent of Netflix and Amazon Prime, I feel like are the two biggest streaming services that have a lot of international content.</p>
                  <div className="info-p"><img src="images/squidgame.jpg" loading="lazy" alt="" /></div>
                  <p><a href="https://www.nytimes.com/2022/09/12/arts/television/lee-jung-jae-squid-game-emmys.html" target="_blank">&quot;Squid Game&quot;</a>, that&#x27;s definitely a huge cultural zeitgeist. And <a href="https://time.com/5779940/parasite-best-picture-oscars/" target="_blank">&quot;Parasite&quot;</a> in 2020 won so many Oscars. It&#x27;s really cool to see this Korean content become more of the mainstream. Do you have any thoughts on how it&#x27;s being adopted, accepted, appropriated in an American context now that so much of the content from across multiple mediums is really blowing up?</p>
              </div>
            </div>
            <div className="section-wrapper quote">
                <div className='bolded-name'>Rachel</div>
                <p><span>Yeah, the Koreans are taking over. We&#x27;re taking over.</span></p>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>I think what&#x27;s interesting is it took me up until I was 16 or 17 for myself to accept K-pop. And I will admit, I feel like the reason why I feel like I can be vocal about my passion for GOT7, and a couple of other groups, is because it&#x27;s accepted more here in America. Because people seem to have more of an awareness of different groups.</p>
                  <p>I also feel like in general growing up when people asked my identity, it was often assumed that I was Chinese. And when telling them, &quot;Oh, I&#x27;m Korean,&quot; they had no idea what Korea was. Or it was the &quot;Are you from the North or South?&quot; question, right?</p>
                  <p>But now it&#x27;s like, I bond with people of any race through a mutual love for K-pop. Which is something I literally would have never imagined.</p>
                  <p>And Korean movies and TV shows, it feels just as popular in my conversations as it would of any other like American TV show or movie, which I think is interesting.</p>
                  <p>And I hate that this is influenced by that, but because it seems like as an American society, people are more accepting and interested in Korean culture through media, music, etc., I feel like I&#x27;m more proud to be Korean because of that. And I am excited to talk to people about my culture.</p>
                  <p>And like what once used to be like, &quot;Oh, Rachel, you&#x27;re Korean, you&#x27;re different,&quot; has now become &quot;Oh, my gosh, I&#x27;m so jealous because I love this K-pop group and I watch the reality shows and I can&#x27;t understand half of what they&#x27;re saying, but you know more -- will you talk about it with me?&quot; Or &quot;Oh, like this song has such a great melody and I understand some things based on the music video and the title, but can you dive in more about the lyrics, so I can really appreciate this thing?&quot;</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper quote">
                <p><span>Being that sort of role is really new to me and I think it happens more often than I ever thought it would. But yeah, I think it&#x27;s interesting because I haven&#x27;t figured out why it&#x27;s accepted by society, yet. I haven&#x27;t figured out why people are so interested.</span></p>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
              <p><b>Part of it is just me wanting to believe great artistry deserves praise and recognition,</b> and a lot of these films and these shows and the music are just great art in general.</p>
                <p>And I think it really does prove that even if someone doesn&#x27;t fully understand, what I appreciate about art as an artist is that it tells stories, it touches emotions.</p>
                <p>How powerful can art be that if somebody doesn&#x27;t have ownership of the language or understand the language, they still go through this journey?</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>I agree with what you were saying about how good art can transcend those boundaries. I feel like movies, music, even food, they can be really good entry points into another culture and they&#x27;re very accessible to people. And then that spurns them to do more research, right? </p>
                  <p>And so I do think art can be that tool for a lot of people to jump into all these different cultures and sort of begin that journey to immersion. Obviously that one little token can&#x27;t do all of the work.</p>
                  <p>Now that you&#x27;ve spent a lot more time investing in Korean media, with the other cultural components, has that changed your artistic output and vision?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>I think, yes, but I think it&#x27;s been brought into... to East Asian broadly as opposed to Korean, specifically. Now I have a bigger appreciation, determination, to bring awareness to Asian artists. And like being okay with being in work that my identity is somehow vocalized within.</p>
                  <p>I was in a project for a great friend of mine, and it&#x27;s kind of a parody, experimental dance work that talks about the East Asian women experience in America and sort of our underlying feelings of stuff. And it talks about how we&#x27;re perceived. You know, like quiet women, or Asian women can often be fetishized and sort of the sexualization of them, you know?</p>
                  <p>If I was told about this piece early high school, I would&#x27;ve never done it. I would&#x27;ve been like, &quot;No, that is so separate. I&#x27;m not even Asian, what are you talking about?&quot; But I think, now, I wanna be in work that is like this. I&#x27;m okay and I&#x27;m not like ashamed or hiding behind who I am.</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper">
                <b>The reality is like when I walk outside of my apartment every day, I&#x27;m Asian. </b>
                <p>When I&#x27;m on stage as a dancer, it&#x27;s my appearance. </p>
                <p>I can&#x27;t just leave the Asianness at home. It follows me. </p>
                <p>Whether or not it&#x27;s intentional, it&#x27;s just gonna be there and I&#x27;m okay with it being there. </p>
                <p>Whether it is super on the nose and the work is about that or not.</p>
              </div>
            </div>
            <div className="section-wrapper">
              {/* <div style={{padding:'56.25%', position:'relative'}}><iframe src="https://player.vimeo.com/video/956842730?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay" style={{position:'absolute',top:'0',left:'0', width:'100%',height:'100%'}} title="Rachel dancing"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/PQCnFBhjPGw?si=WLMtyU4OGH5H7Vj_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>That makes perfect sense. I know that you&#x27;re using your full name now, right? Please, share with our audience what that name is, but also how that shift happened, too.</p>
              </div>
            </div>
            <div className="section-wrapper quote">
                <div className='bolded-name'>Rachel</div>
                <p><span>Yeah, wow, that&#x27;s a really good question. So, my full name is Rachel Ha-Eun Lee, and Ha-Eun is also my Korean name.</span></p>
            </div>
            <div className="section-wrapper">
              <div className="p-wrapper full">
                <div>
                  <p>I grew up never telling anyone my middle name because it made me Korean, therefore more Asian, therefore more isolated, etc.</p>
                  <p>But the summer of 2020, I was in this dance business class that was a required course and we were building our websites and talking about, you know, how we need to brand ourselves and all of these things. And I always panicked when it came to my name because Rachel Lee is a very common name. </p>
                  <p>There&#x27;s like 14 trillion of us in the world. But I never wanted to share my middle name. It was too embarrassing, really. </p>
                  <p>So, I had played with other stage names. Like my mother wanted me to go by Rachel Evergreen, like Rachel Green from &quot;Friends.&quot; And I was like absolutely not.</p>
                  <p>But, finally, I did a lot of self-reflection, like, am I still embarrassed of my Korean name? Do I want this publicly? </p>
                  <p>But, I wanted to not only distinguish myself as other Rachel Lees, but I think what&#x27;s important is it shows to me that I finally accepted the sort of Koreanness. Lee is obviously very Korean, but Rachel is not, but Ha-Eun feels like it is.</p>
                <b>In Korean, God means haneunim (하느님) and grace is eunhye (은혜).</b>
                <p>So they took the &quot;ha&quot; from haneunim, God, and &quot;eun&quot; from eunhye, grace, to create God&#x27;s grace, Ha-Eun.</p>
              </div>
              </div>
            </div>
            <div className="section-wrapper quote">
                <p><span>When I get married one day, I probably wanna change my last name. But I wanna bring with me my family ancestry, like my Korean name. So, I wanted to start making that public and including that in any artist work that I do.</span></p>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className="bolded-name">Guru</div>
              </div>
              <div className="p-wrapper side">
                <div>
                  <p>That is amazing. And I am continuing to fall in love with your parents. Thank you so much, Rachel, for coming onto the podcast. This has been an incredible episode and really appreciate your articulation and vulnerability guiding us through your whole journey with this.</p>
                  <p>I have no doubt that your parents are now also getting fan clubs erected after this episode comes out. Do you want to just quickly plug your socials or anything else?</p>
                </div>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Rachel</div>
              </div>
              <div className="p-wrapper side">
                  <p>You can find me on the interwebs at <a href="http://rachelhaeunlee.com" target="_blank">rachelhaeunlee.com</a>.</p>
                  <p> My Instagram is <a href="https://www.instagram.com/rleeforever/" target="_blank">rleeforever.</a></p>
                  <p>Thanks for having me!</p>
              </div>
            </div>
            <div className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>Thank you! And that&#x27;s a wrap on episode one, so let's roll the credits! I'm your host Guru Ramanathan. This is Found in Translation. Created, executive produced, and edited by Alejandra Arevalo and myself. And music by Lux the Lightbulb. Thank you so much again for listening and embarking on this journey with us. Please like, share, comment, etc., and do all the things to help us go viral. Stay tuned to episode two and we greatly appreciate your support. </p>
              </div>
            </div>
        </div>
    </main>
  )
}

export default Rachel

export const Head = () => <title>Rachel</title>
