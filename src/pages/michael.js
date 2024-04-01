import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/navbar';
import "../styles.css"
import BackTop from '../components/backtop';
import michael_headshot from '../images/michael/michael_headshot.webp';
import michael_family from '../images/michael/michael_family.webp';
import michael_birthday from '../images/michael/michael_birthday.webp';

const Michael = () => {
  
  useEffect(() => {
    // Get all elements with class 'section-wrapper'
    const parentDivs = document.querySelectorAll('.section-wrapper');

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
}, []);

    return (
      <main className="page-style">  
        <Navbar />
        <section className="home-intro">
            <h1 className="site-hero" id="topper"> 
              A Comedy of errors (and education in Yoruba)
            </h1>
          </section>
        
        <BackTop />

        <section className="main-body">
            <section className="section-wrapper">
              <div className="name-wrapper">
                <h3>The Host<br /> <span className="first-name">Guru Ramanathan</span></h3>
              </div>
                <div className="p-wrapper side">
                    <p>Hello and welcome to <b className="bolded">Found in Translation</b>. <br />I&#x27;m your host Guru Ramanathan. <br /></p>
                    <p>And this is a podcast where first/second generation and immigrants come on to talk about their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more.<br /></p>
                    <p>
                      <a href="https://www.Michaelhaeunlee.com/" target="_blank" className="hoverable-link">‍</a>This week&#x27;s guest is Michael Oluokun, a close friend and one of the funniest writers and comedians that I know. Michael and I were in the same program at NYU and even co-hosted a podcast for a few years with some other friends of ours.<br />
                    </p>
                    <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Michael</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg>
                    </div>
                    <img className="vertical-photo" src={michael_headshot} alt="" loading="lazy" />
                  </div>
                    <p> And now, he&#x27;s on the other side of the mic, and here to talk about <br /></p>
                    <p><b>A)</b> navigating his Nigerian identity<br />‍<b>B)</b> hilariously uncovering Nigerian customs at family parties<br /><b>C)</b> learning the language Yoruba in college<br /><b>D)</b> and how his writing and performances have been shaped by this journey<br/></p>
                    <p>So, hope you enjoy!<br /></p>
                </div>
            </section>
              <div className="section-wrapper">
                <div className="p-wrapper full center">
                  <h3 className="cue">~ interview begins ~</h3>
                  <b className='bolded'>How does it feel to be a guest and not to be one of the hosts?</b>
                </div>
              </div>
              
              <section className="section-wrapper">
                <div className="name-wrapper">
                  <h3>The Guest<br /> <span className="first-name">Michael Oluokon</span></h3>
                </div>
                  <div className="p-wrapper side">
                    <div>
                      <p>
                        <a href="https://www.Michaelhaeunlee.com/" target="_blank" className="hoverable-link">‍</a>It's pretty chill. 'Cause now I don&#x27;t have to think about, oh no, am I asking enough questions? Am I giving the guest enough space to talk? I can talk for as long as I want.<br />
                      </p>
                    </div>
                  </div>
              </section>

              <div className="section-wrapper">
               <div className='name-wrapper'>
                <div className='bolded-name'>Guru</div>
               </div>
                <div className="p-wrapper side">
                    <p>It&#x27;s your time to shine. We&#x27;re also gonna start this one at the very beginning. It&#x27;s interesting to think about what your connection to your language was right when you were pretty young and kind of see how that&#x27;s evolved over time.<br /></p>
                    <p>I&#x27;m so curious to hear, from your perspective, being the youngest of four siblings, and I know your mom also came from Nigeria, but just to begin, <b className="bolded">what was your connection with Yoruba in your childhood and how did it kind of play out when you were growing up?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Yeah, when I was younger it was the language that my mom and my Nigerian relatives would speak, but that we just would never really be in on.<br /></p>
                    <p>Because my mom kind of very deliberately decided not to teach me or any of my siblings Yoruba, which was an interesting choice. But, you know I respect it, but you know, sometimes I kind of wish I would&#x27;ve been taught it. <br /></p>
                    <p>There were different points where my grandma lived with us when I was younger, so they would speak it to each other, but none of my siblings were ever taught it.<br /></p>
                    <p>I got familiar with the sounds of it, but I never really learned the vocab or diction or grammar of it. I even learned my name wasn&#x27;t pronounced the way I think it was pronounced. But then that was also an intentional thing on my mom&#x27;s part.</p>
                </div>
              </div>

              <div className="section-wrapper">
                <div className="p-wrapper full">
                  <b data-w-id="869e026c-7fae-d570-381b-544bf71c2700" className="bolded">So it's interesting that my mom almost chose not to teach it to us</b>
                  <p data-w-id="869e026c-7fae-d570-381b-544bf71c2702">so that we would... for lack of a better term, <b className="bolded">assimilate better, you know</b>.</p>
                  <p data-w-id="869e026c-7fae-d570-381b-544bf71c2707">She wanted us to be <b className="bolded">fully American</b>.</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                  <b data-w-id="16be7753-1d53-6079-1551-2086453af0b1" className="bolded">To begin with your relatives, did you ever talk with them growing up a lot?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>We had a lot of relatives who were in the States, so a lot of them kind of congregated in the D.C. area. There&#x27;s a pretty big Nigerian community in the Maryland-D.C. area, and so, I had a lot of aunts and uncles who lived there. <br /></p>
                    <p>We would go to Maryland for a week for holiday. It would always be some kind of occasion. And then, there would be a big party where there&#x27;s a bunch of Nigerians invited. <br /></p>
                    <p>And you know, there's two levels of the party, where the adults who are, you know, usually from Nigeria and then their children. Some might have been born in Nigeria and then moved to the States at a young age. And then some were born in the States, but then, you know, they might have had some level of fluency in Yoruba. So it&#x27;s interesting, each person&#x27;s experience was a little different.<br /></p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Michael's Family</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg>
                    </div>
                    <img className="horizontal-photo" src={michael_family} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="5b60de1a-8120-6443-1b42-9b299f9be6dd" className="bolded-name">Guru</div>
                  <b data-w-id="5b60de1a-8120-6443-1b42-9b299f9be6df" className="bolded">And what was the culture around English versus Yoruba in those circles?</b>
                  <p >Because I&#x27;ve definitely had some of those family friends', whatever, parties come around. But then there&#x27;s a bit of a hierarchy as to who can communicate in the multiple languages. Or the parents always talk about, oh, your kid does so well here, but I wish mine could, too. Was there that sort of internal prejudice around those who were better at Yoruba than others?</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>To an extent. I wouldn&#x27;t say it was ever super, super bad, but it would always kind of come out in...<br /></p>
                    <p>&quot;Oh, you don&#x27;t know you were supposed to do this?&quot;<br /></p>
                    <p>or, &quot;oh, you said that so American.&quot; They're like &quot;wow, you really aren&#x27;t Nigerian.&quot;<br /></p>
                    <p>It was almost kinda club-type exclusionary. At my grandma's 80th birthday celebration and we had this big, huge event in D.C.-Maryland. We had a hole bunch of relatives and family members, and there was this big party and, you know, all of her children spoke. And then they were like &quot;we gotta have all the grandchildren speak, too.&quot; And so it was basically American children in front of this panel of judgmental Nigerians. <br /></p>
                    <p>And you know we&#x27;re going up and we&#x27;re like, yeah happy birthday, grandma like we're saying our last name wrong. And then cousins come up and they&#x27;re saying their names perfectly pronounced.<br /></p>
                    <p>We got set up here! But it was always that kind of the experience of you&#x27;re walking into a situation where you&#x27;re like &quot;oh, this is gonna be fine&quot; and then something happens and you&#x27;re like, &quot;oh, it&#x27;s not fine, I&#x27;m confused.&quot; You&#x27;re looking to your parent like, &#x27;why didn&#x27;t you tell...&quot; There&#x27;s obviously something not being communicated.<br /></p>
                    <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Michael and his family at his grandma's 80th birthday party</p>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg>
                    </div>
                    <img className="horizontal-photo" src={michael_birthday} alt="" loading="lazy" />
                  </div>
                    <p>I remember one time we went to an aunt&#x27;s house and like, there&#x27;s a custom with like certain Nigerians where you&#x27;re supposed to bow upon entry. That&#x27;s a custom in a lot of different cultures.<br /></p>
                    <p>And we had one aunt in particular who was really stringent about that. But you know, all of us as children didn&#x27;t know that. And the phrase for you to bow is called &quot;dobale.&quot; And it's like, you know, we, we show up to the house and we&#x27;re just like,<br /></p>
                    <p>&quot;Oh, hey what&#x27;s up Auntie?&quot;<br /></p>
                    <p>Her name is Joké, and we were like &quot;hey what's up Auntie Joké?&quot; and she&#x27;s just like,<br /></p>
                    <p>&quot;dobale&quot; <br /></p>
                    <p>And we&#x27;re like,<br /></p>
                    <p>&quot;huh???&quot;<br /></p>
                    <p>She&#x27;s like,<br /></p>
                    <p>&quot;dobale!&quot; <br /></p>
                    <p>And we're like &quot;Ahhhh&quot; and then my mom&#x27;s like,<br /></p>
                    <p>&quot;oh, you&#x27;re supposed to bow.&quot;<br /></p>
                    <p>I&#x27;m just like, <br /></p>
                    <p>&quot;Bow? Like what?&quot;<br /></p>
                    <p>And she's like &quot;Get on your knees!&quot;<br /></p>
                    <p>I'm like &quot;ok...&quot;<br /></p>
                    <p>But it was like...I know you can kind of react to it in two different ways. You can kind of look at it this like, oh like that was kind of crazy in the moment, but isn&#x27;t that a funny story? But I feel like sometimes people can kind of get a chip on their shoulder because of that. It&#x27;s funny, my mom herself, who grew up in Nigeria, she&#x27;s always like, &quot;These Nigerians!&quot; She always phrases it like that.<br /></p>
                  </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="35a57260-3313-32da-a27f-071029f4a8ce" className="bolded-name">Guru</div>
                  <p data-w-id="35a57260-3313-32da-a27f-071029f4a8d3">It&#x27;s interesting because I&#x27;ve heard my parents talk in that third person perspective of all Indians are like this, all Desis are like this. And then growing up I didn&#x27;t really understand, but like you&#x27;re also that, so you&#x27;re hating yourself.<b className="bolded"><br /></b></p>
                  <div data-w-id="139a822a-a1cc-953b-640b-ba8346535f9b" className="bolded-name">Michael</div>
                  <p data-w-id="35a57260-3313-32da-a27f-071029f4a8d5">I think I get it more now that I&#x27;m older 'cause it&#x27;s like... I feel like people just love to be able to talk shit about a group as a whole 'cause they&#x27;re like, &quot;Man, I&#x27;ve seen at least three people do this. So I&#x27;ve got the data set I need, you know.&quot; Part of me thinks one of the reasons she decided to move from Maryland-D.C. was almost to get away from, like, large numbers of Nigerians.</p>
                  <p data-w-id="2f5b1aef-98b4-5487-4592-128c4f13574a">'Cause, she&#x27;s expressed this to me that like, you know, sometimes being around very traditional Nigerians can be very frustrating to her. And especially if you like really, really grew up with it, you just want something different, you know. My two oldest siblings have been in Nigeria, but me and my brother closest to me have never been.</p>
                  <p data-w-id="782a4ec6-4d4b-e2aa-97a3-6fac320adb66">They actually spent like a whole year in Nigeria and went to school there for a year, and like came back. I&#x27;ve never actually, like, asked my two oldest siblings about, like, how that experience was for them. Sometimes my mom would talk about it and it was like, they came back with a chip on their shoulder.</p>
                  <div data-w-id="3cb94a05-5cdc-0a10-7601-f09c52554c33" className="bolded-name">Guru</div>
                  <p data-w-id="b6636ab2-870b-1c09-a98b-f416e69bbc1e">And then, when you were growing up, were there other Nigerians in school or were you, like, predominantly just around, like, American Black kids?</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
              <div className='bolded-name'>Michael</div>
              </div>
                <div className="p-wrapper side">
                    <p>In my most recent Arkansas church, there were a few other Nigerians there, just like out of the blue, which was interesting. But my school was really white, wasn&#x27;t great.<br /></p>
                    <p>Even just Black people at the school. You could count on two hands the number of Black people in my grade, you know?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>What were your feelings about not knowing Yoruba, given the fact that your mom wasn&#x27;t really pressuring you, your siblings didn&#x27;t know it either, and then you weren&#x27;t around a lot of Nigerians in school, ever. <b className="bolded">Was it something that you thought about, not knowing the language, or was it something that was more of like a distant connection?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
              <div className='bolded-name'>Michael</div>
              </div>
                <div className="p-wrapper side">
                    <p>It kind of was a distant thing of like, this is this thing my mom does. 'Cause when I was a kid, especially being the youngest kid when you have a lot of siblings, there are a lot of people telling you don&#x27;t ask a question about this. And I&#x27;m like, okay.<br /></p>
                    <p>Since the only person that knew it was my mom and like, you know, my mom was kind of someone that like, &quotwhy are you asking me questions?&quot; Unless you were like, &quot;I need to go to the hospital.&quot; <br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="0436a4f7-f99e-b047-90f6-645879cff33e" className="bolded-name">Guru</div>
                  <b data-w-id="0436a4f7-f99e-b047-90f6-645879cff340" className="bolded">I guess that was going on for most of your life. What caused that shift in you to want to learn Yoruba? 'Cause I know you ended up taking some classes in college.</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>I&#x27;ve always been interested in learning languages. I was always really fascinated by linguistics and I would always try and look at the IPA pronunciation guides and you&#x27;re trying to learn how to pronounce the word in another language, and then you click on it and it&#x27;s like an upside down G and a S with a slash through it. Like how am I pronouncing this word, you know?<br /></p>
                    <p>And like, you know, from there, like learning just like about like, you know, the origins of different languages. I always wanted to learn more languages, but when I was in school, the only foreign language they really offered was Spanish. There&#x27;s a point where we had a French teacher and then the French teacher left and then they were just like, &quot;yeah we just don&#x27;t have French anymore.&quot; Like, like, they just, they&#x27;re like, &quot;You can take French 1 online.&quot; Coming to college, I really wanted to learn French. French is always such a chic language. It&#x27;s the language of love. And you know, I even justified it because so many African countries speak French. French is one of their top three languages, especially in West Africa, it could even kind of serve me there.<br /></p>
                    <p>But then I was looking at French courses, and I&#x27;d almost signed up for this six-credit French intensive. And I was like, you know, I&#x27;m just gonna like really learn French. And then, then I saw that they offered a Yoruba class and I was like, Hmm. Yeah. I never even had the idea that I would even be able to take like an elementary Yoruba.<br /></p>
                    <p>I looked at it and like it fit with my schedule and it was four credits, so it was like, oh, I wouldn&#x27;t have to like really randomly kill myself to take this foreign language. But like the six credit one, it would&#x27;ve been like every Monday through Friday we had to meet for this.<br /></p>
                    <p>I was like, you know what? When am I ever gonna get the chance again to just like take an elementary Yoruba classes? So I decided to sign up for the Yoruba one and it was cool. It was cool to have like a className of mostly Nigerians, but there were also a few non-Nigerians. Interestingly enough, there is a Yoruba diaspora in Latin America, and so there was a non-Black Latino in the className who was from the Yoruba diaspora, which was interesting.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="75d5c71e-e504-c440-8d14-df90d053bd95" className="bolded-name">Guru</div>
                  <b data-w-id="75d5c71e-e504-c440-8d14-df90d053bd97" className="bolded">I&#x27;m curious, like what was your mom&#x27;s reaction when you decided you were gonna take this Yoruba classes?</b>
                </div>
              </div>
              <div className="section-wrapper quote">
                  <div className="bolded-name">Michael</div>
                  <p><span>She was definitely really happy. She&#x27;s like, your grandma&#x27;s gonna be really happy about this because my grandma still speaks a lot of yoruba and I feel Yoruba is a very like personal language for her and my mom. It was like, oh, like be able to say a few words of it together. It made her smile, you know?</span></p>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>I always feel like language is interesting because you know, when you start to like tap into the language, then it opens up the floodgates of, oh, let me now try to watch like Nigerian movies. Lemme try to listen to the music more regularly.<br /></p>
                    <p>Let me try to do X, Y, and Z. More and more and more like going to Nigerian restaurants and ordering in Yoruba. I&#x27;m sure throughout the className you also touched on some of those historical cultural moments, <b className="bolded">did that change the way you perceived your Nigerian identity or did it kind of like evolve you forward in any way?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper quote">
                  <div data-w-id="2272ff3e-653f-19d8-0222-0a15c7790b4e" className="bolded-name">Michael</div>
                  <p><span>I definitely think it did evolve me forward. it&#x27;s okay to not know yoruba because it doesn&#x27;t make you any less Nigerian than others. <br /><br />Especially when I was younger, I always had that chip on my shoulder. My mom&#x27;s Nigerian, but I don&#x27;t feel like I can really consider myself Nigerian cause I don&#x27;t speak the language, I&#x27;ve never been to Nigeria.</span></p>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>And tying back to another thing you had mentioned earlier with your last name, <b className="bolded">how did that... I don&#x27;t know if I wanna call it a revelation or a transition or however you want to put it, but how did that change?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Yeah, I feel like it put a lot of things into focus for me. Every time we would say it in a large group of our relatives, me and my siblings would always get clowned. They would be like, oh man, like these kids are not Nigerian at all. You know, it never clicked to me that, oh, we&#x27;re literally pronouncing our last name wrong.<br /></p>
                    <p>It&#x27;s interesting that my mom chose to like tell it to us that way so it was easier for white people to say, but then it still was always mispronounced and so I&#x27;m like, well we might as well have just said it the right way cuz like it actually, didn&#x27;t make any difference.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607ea98" className="bolded-name">Guru</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607ea9a"><b className="bolded">When and how did you find out?</b><b className="bolded"><br /></b></p>
                  <div data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607ea9e" className="bolded-name">Michael</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaa0">It was when I was in that Yoruba classes.</p>
                  <div data-w-id="9ec0a0ca-de13-1f96-7f88-7b0346075eb5" className="bolded-name">Guru</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaa2">Oh, really?</p>
                  <div data-w-id="44c04d43-8118-9f3a-50cf-0935d2e50b37" className="bolded-name">Michael</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaa4">Yeah. There&#x27;s like a few different vowels in Nigeria and for certain vowels, you nasalize a vowel by adding an &quot;n&quot; end to the end. I learned about how each of the vowels was pronounced and if I pronounce this like how with each of the vowel rules you just taught me like it&#x27;s pronounced like this. And I&#x27;m like, wait, wait, wait, wait. Like, oh, ain&#x27;t it wrong? </p>
                  <p data-w-id="7c2daa15-9503-5345-e63e-3cb232a353fa">My teacher would always ask me, what state in Nigeria are you from? And I&#x27;m like, oh, I don&#x27;t really know. And he&#x27;s just like, you don&#x27;t know. He was always like, go ask your father. And I&#x27;m like, oh, my parents are divorced. It&#x27;s like everything I said to him, he was just like, oh.</p>
                  <div data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaa6" className="bolded-name">Guru</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaa8"><b className="bolded">Did you end up taking Yoruba two, three, like did you end up just doing the whole cycle?</b></p>
                  <div data-w-id="8fe23089-75df-b186-1d67-372ad75043e6" className="bolded-name">Michael</div>
                  <p data-w-id="d354454d-ccc3-9db5-2e4e-d6d89607eaab">I never did. I only took the one Yoruba classes just because it&#x27;s like, and you can attest to this, the dramatic writing program doesn&#x27;t leave you the most room to like explore random electives because sometimes it&#x27;ll just be like, hey, you took too many electives, now you owe us money. Like I thought that was the point of college. But no, actually you shouldn&#x27;t have taken this many electives.<b className="bolded"><br /></b></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                  <b className="bolded">Have you found other ways to like continue learning?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Since then, I haven&#x27;t really kept up with my language practice. I don&#x27;t know that many Nigerians in my personal life. I feel like I always meet Nigerians randomly, and it&#x27;s like they&#x27;re always inviting me to church. Yeah, for sure I&#x27;m gonna wake up. 9:00 AM on a Sunday and take an hour train to the Bronx so I can go to church. You know, I don&#x27;t wanna do that, but like, I do wanna meet more Nigerians.<br /></p>
                    <p>I feel like if I had more time and more money I would more actively try and seek out Nigerian communities, but for where I am right now, and like especially the things I&#x27;m trying to do, there are definitely Nigerian comedians, but there aren&#x27;t that many at my level right now.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="996112e2-dba8-bce1-5571-d21d181cbdeb" className="bolded-name">Guru</div>
                  <b data-w-id="996112e2-dba8-bce1-5571-d21d181cbded" className="bolded">Can you name any like Nigerian comedians that have served as like an inspiration for you at all?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                  <p>Yeah. There&#x27;s this one, his name is Travis. He&#x27;s really been on Twitter and he&#x27;s been getting bigger in the standup scene. He has a 30-minute special on the Comedy Central stand-up YouTube page. I know he wrote a Batman comic.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                 <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                    <p>Oh wow!</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className='p-wrapper side'>
                  <p>Yeah, and he was working on "Saved by the Bell" too. He is a current young Nigerian comedian writer who&#x27;s doing the thing, all of the things I wanna be doing. I&#x27;ll phrase it as a Donald Glover Disciple. One of his jokes is that he describes himself as Donald Glover&#x27;s Wario. I see the vibe, you know?<br /></p>
                  <p>And then Ayo Edebiri. I&#x27;m pretty sure she&#x27;s from, if not Boston, Massachusetts for sure. And she also went to NYU. She writes for Big Mouth. She&#x27;s in that new FX show The Bear, which is huge on Twitter, and she&#x27;s been on a lot of other shows. She was on Dickinson. She has a podcast, fellow podcaster.<br /></p>
                  <p>But yeah, there are a lot of cool Nigerian comics out in the scene, but it&#x27;s just like, I&#x27;m still in my, I&#x27;ll phrase it as my Indie darling. So I&#x27;m like, you know, maybe one day once I get nominated for my Golden Globe, then I can reach out to them.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="d70a9894-81f6-0d8c-5b84-1429135332c2" className="bolded-name">Guru</div>
                  <p data-w-id="d70a9894-81f6-0d8c-5b84-1429135332c4">I wanted to touch on your comedy and your writing. how interacting with these Nigerian comedians, and your family starting to immerse yourself in Yoruba, how has that, if at all, influenced your artistic identity? as you&#x27;ve been involving yourself more in these cultural elements, has it also changed the way you write or the things you write, or what you like to bring up in your standup? What&#x27;s that evolution been like in your artistic journey?</p>
                  <div data-w-id="d70a9894-81f6-0d8c-5b84-1429135332d1" className="bolded-name">Michael</div>
                  <p data-w-id="d70a9894-81f6-0d8c-5b84-1429135332d5">Yeah, I feel like it&#x27;s definitely influenced the way I write and the way I do stand up too. One of the interesting things about Yoruba as a language is that it is a tonal language and so, you know, the way you say things influences the actual meaning of it.</p>
                  <p data-w-id="d70a9894-81f6-0d8c-5b84-1429135332de">I just remembered another Nigerian comic. I noticed it when I was watching his standup, the way that he used the tone of his voice when he was speaking was very dynamic. I wonder if that&#x27;s a function of him being Nigerian. Cause like even if you don&#x27;t speak Yoruba there&#x27;s an animated way of speaking that Nigerian people often use. It influences you even if you don&#x27;t speak the language.<b className="bolded"><br /></b></p>
                  <p data-w-id="d70a9894-81f6-0d8c-5b84-1429135332cb">The way Nigerians speak English is its own thing. Cuz it&#x27;s so influenced by British English. But then, if you grew up in the States... but then your parents grew up in Nigeria and depending on their parents... Some of them have more of a British influence and then some of them have more of a strictly Nigerian influence. And then some of them might even have more of a French influence. So it&#x27;s interesting, the different influences, the sub-influences that then go into the influence that then makes you speak the way you speak.</p>
                  <p data-w-id="c5a0094f-5af6-fd98-b640-b82dca425606">Especially as a writer, I&#x27;m always so fascinated by the rhythm of how people speak, and sometimes... You know this experience for sure, you&#x27;ll be writing a line, and you&#x27;re just like, this just isn&#x27;t fucking working. And then you&#x27;ll just move one word and you&#x27;re like, oh, that&#x27;s perfect.</p>
                  <p data-w-id="11efba64-7721-8e44-502a-e770ad47ad99">Sometimes it&#x27;s that subtle difference between, you know, this is how Nigerian will say it, versus this is how someone from New York would say it.</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="a590fab7-0356-cbdf-2d5c-69cb275450c5" className="bolded-name">Guru</div>
                  <b data-w-id="a590fab7-0356-cbdf-2d5c-69cb275450c7" className="bolded"> Has your performance or diction changed at all? like the things you&#x27;re noticing in these other comics, have you noticed that shift in you as well?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Sometimes I feel like it frees me to express the idea, the way it sounds in my head versus how I think it should sound as a standup. The interesting thing about standup is that it&#x27;s just... you&#x27;re up there being yourself and you&#x27;re just telling jokes. But to do standup, you have to embody a persona. And sometimes the persona is just you, but sometimes the persona is a fragmented version of you. Or sometimes you&#x27;re playing off of an archetype that other comedians before you have established.<br /></p>
                    <p>So it&#x27;s like how much of it is you trying to play the archetype that you think that people see you as, or like you trying to authentically say what sounds funny in your head, you know?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="36cd29f7-c11f-5c50-c18d-3b59042ce88c" className="bolded-name">Guru</div>
                  <p data-w-id="36cd29f7-c11f-5c50-c18d-3b59042ce88e" className="bolded">I&#x27;ve heard people sometimes talking about how. When they speak in another language, sometimes their personalities can slightly shift. Not from a performance perspective, but just like a daily life Michael perspective. <b>Were there any shifts like that in the way you thought about things or the way you acted when you were physically trying to talk in Yoruba versus English?</b></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Yeah, I feel like I didn&#x27;t really experience any large personality shifts, but it made me think about things in a more Nigerian way.<br /></p>
                    <p>In certain aspects, like in Yoruba, greetings are a really big thing. One of the first things we learned was greetings, because like, you know, there are certain greetings that you&#x27;re supposed to use for like the different times of the day. And then there are also different greetings that you use for different levels. If you&#x27;re greeting your friend, you can say this, but if you&#x27;re greeting an elder you should say it like this, you know? It&#x27;s the same word and the same function, but the situations in that you&#x27;re allowed to use them are different.<br /></p>
                    <p>And then you have to go to your Rolex. and it&#x27;s like what time is it and what&#x27;s my relationship to this person? The fact that you have to consider a lot of things before you speak, I feel that was a thing that I was thinking of a lot more when I was taking the Yoruba classes.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="a0a0fc59-e6b2-2a05-8dcb-1391c8a5a9b6" className="bolded-name">Guru</div>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a1b">To my understanding, I could be totally off base about this, but to my understanding, in Africa itself, I believe the Nigerian entertainment industry is technically the biggest. It&#x27;s called Nollywood.</p>
                  <div data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a1d" className="bolded-name">Michael</div>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a1f">Yeah, they do call it Nollywood.</p>
                  <b data-w-id="d3130ab5-5243-0807-a0ce-05b976870c83" className="bolded-name">Guru</b>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a21">Hey, India has Bollywood.<b className="bolded"><br /></b></p>
                  <b data-w-id="7aa24651-4447-61c4-06ce-9fa3cd6a49c4" className="bolded-name">Michael</b>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a25">I know Bollywood. Hey, we stole Bollywood.</p>
                  <b data-w-id="f882f2c4-a7bf-3c60-2b57-d145a361f658" className="bolded-name">Guru</b>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a27">No, no, hey, and Bollywood took it from Hollywood. But I&#x27;m curious, as these Nigerian comics have been exploding and Nollywood is growing more and more–I&#x27;m even seeing now a lot of Netflix original productions in Nollywood, as that media is becoming more popular globally and it is entering the mainstream, has that changed your relationship with like Nigerian content or Yoruba as a language? Does it make you more invested in it now that it&#x27;s starting to become more accepted? Is that not something you&#x27;re thinking about?</p>
                  <b data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a19" className="bolded-name">Michael</b>
                  <p data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a29">I definitely am thinking about it more cuz, especially now, my mom has been watching more TV and more movies. I was living with my mom for like a while, almost a full year and so we would watch stuff together and a few times we would watch some Nollywood movies that were on Netflix like you mentioned.</p>
                  <p>And it was interesting seeing the different types of Nollywood movies. All of them are very melodramatic. I feel like melodrama is what Nollywood specializes in. But it was interesting cuz some of them were the kind of stereotype of what a Nollywood movie is... of like seven betrayals and someone cheats on their husband with the brother and the brother&#x27;s also secretly engaged to the Aris to like a Nigerian oil for like</p>
                  <p>There&#x27;s always like an ais, some there in there . But yeah, there&#x27;s also. , more modern Nollywood films that like looked more modern, like American movies I had seen. But then they had Nigerian themes, but then they also had like an internet generation tone to them. There&#x27;s more diversity of type in the space than I thought. So, you know, I wanna like look into more Nollywood films. I watch movies, but I don&#x27;t watch that many movies, so it&#x27;s like I still need to like get into it more.</p>
                </div>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>Actually, it&#x27;s funny that you mentioned your mom watches more stuff now because the accessibility to Nigerian content is greater. I feel the same with my parents, especially my dad because he pretty much exclusively watches Tamil content, and growing up he always watched it too, but he would always find some random site on the internet to get that stuff. But now with the advent of Netflix, Amazon Prime, and whatever else, I feel like, I think it&#x27;s just really great that like there are just more avenues for people to like tap into their culture.<br /></p>
                    <p>It really makes a world of a difference I think when you get to see the look on their face when I tell my dad &#x27;Thank you.&#x27; For example, I got Hulu recently, so Disney owns Hulu and then Disney also owns Hot Star, which is like an Indian streaming service. What was interesting was that like if you have Hulu, you can access some Hot Star content. So, I was telling my dad like, oh, I got Hulu. I can share the login and then he was like kind of indifferent about it. He was just like, oh, why are we getting this? What&#x27;s the point of it? And then I mentioned, oh, you can get Hot Star and then you can get Tamil movies.<br /></p>
                    <p>I feel it&#x27;s very important that accessibility now exists because it&#x27;s like when our parents immigrated here, they were caught off from an entire world, right? Yeah. And they didn&#x27;t have these. Mediums to continue. I mean, aside from, yes, like they, they can like seek out spaces like churches or you know, whatever to, you know, like get that community.<br /></p>
                    <p>But there are all these other mediums that were lacking, at least when we were growing up and like now, 20-something years later. There&#x27;s a plethora of them, which I think is really awesome. And you know, for me, I&#x27;ve told you this before, it was actually through watching a lot of Tamil movies that kind of refreshed my understanding of the language.<br /></p>
                    <p>I feel like movies and music is a really good way to keep constant for you. But yeah, one of the last questions, and I know you only took a little bit of time in Yoruba, but do you have a favorite word in that language, and if so, what? Why?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>I would say I have two. The number one I would say is <b className="bolded">&quot;ah.&quot; </b>That&#x27;s the Nigerian... something bad happens and you&#x27;re just like <b>&quot;oh ah.&quot;</b> Or you can even use it as... it&#x27;s so flexible, that&#x27;s why I love it so much. It&#x27;s like you can use it as like something bad just happened or you&#x27;re, man, that was crazy. Like even when you&#x27;re happy you can use <b>&quot;oh ah.&quot; </b>You&#x27;re just like, ah, man, like it&#x27;s really happening. You know, like, that&#x27;s crazy.<br /></p>
                    <p>And then my other favorite one is <b className="bolded">&quot;o ti to.&quot; </b>And that one is, uh, it&#x27;s enough. Like you say that when you&#x27;re just like, please stop. its enough.<br /></p>
                    <p>That one was always, cause my mom would, it was almost like, like it would almost be a game with my mom of like, anytime, like something would happen and like we would hear her say it and it&#x27;d be like, oh, we know she&#x27;s had enough. Alright, we need to chill.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12821" className="bolded-name">Guru</div>
                  <p data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12823">That&#x27;s awesome. Well, this has spectacular. So, thank you so much again, Michael, for coming on this podcast, uh, about to say the Passion Project, but that&#x27;s not the name of this podcast, Before we head out, do you wanna plug your socials and like anything else?</p>
                  <div data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12825" className="bolded-name">Michael</div>
                  <p data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12827">Sure. I&#x27;ll plug my Instagram is at Jaquan the Great.</p>
                  <div data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12829" className="bolded-name">Guru</div>
                  <p data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf1282b">Awesome. Cool. Well thank you so much again, and this has been fantastic.<b className="bolded"><br /></b></p>
                  <div data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf1282f" className="bolded-name">Michael</div>
                  <p data-w-id="5b1a1937-bb62-a32e-1331-c5fa1bf12831">Oh yeah. Thanks for having me.</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a6" className="bolded-name">Guru</div>
                  <b data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a8" className="bolded">Thank you so much again for listening and as always, please like, share, comment, etc, and whatever else will help us go viral.</b>
                </div>
              </div>
        </section>
      </main>
    )
  }
  
  export default Michael
  
  export const Head = () => <title>Michael</title>
  
