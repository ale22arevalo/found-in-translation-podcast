import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/navbar';
import "../styles.css"
import BackTop from '../components/backtop';
import michael_headshot from '../images/michael/michael_headshot.webp';
import michael_family from '../images/michael/michael_family.webp';
import michael_birthday from '../images/michael/michael_birthday.webp';
import baby_michael from '../images/michael/baby_michael.webp';
import michael_siblings from '../images/michael/michael_siblings.webp';
import michael_mom from '../images/michael/michael_mom.webp';
import michael_college from '../images/michael/michael_college.webp';
import michael_crew from '../images/michael/michael_crew.webp';

const Michael = () => {
  
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
    })

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
      <main className="page-style">  
        <Navbar />
        <section className="topper" style={{padding:'5px 5px'}}>
            <h1 className="site-hero" id="topper"> 
              <span className="changing-word">A Comedy of Errors</span>
              <span className="static-title">(and Education in Yoruba)</span>
            </h1>
            {/* <iframe width="315" height="560"
              src="https://youtube.com/embed/3gI3fBK-dCE?si=1SNNq7Q_Ci_hSj--&rel=0&amp;modestbranding=1"
              title="YouTube video player"
              frameborder="0">
            </iframe> */}
          {/* </div> */}
          </section>
        
        <BackTop />

        <section className="main-body">
            <section className="section-wrapper">
              <div className="name-wrapper">
                <h3>The Host<br /> <span className="first-name">Guru Ramanathan</span></h3>
              </div>
                <div className="p-wrapper side">
                    <p>Hello and welcome to <b className="bolded">Found in Translation</b>. <br />I&#x27;m your host Guru Ramanathan. <br /></p>
                    <p>And this is a podcast where first/second generation and immigrants come on to talk about their relationship with their cultural language and how that&#x27;s influenced their connection to their culture, family, friends, and more.<br /></p>
                    <p>
                      <a href="https://www.Michaelhaeunlee.com/" target="_blank" className="hoverable-link">‍</a>This week&#x27;s guest is Michael Oluokun close friend and one of the funniest writers and comedians that I know. Michael and I were in the same program at NYU and even co-hosted a podcast for a few years with some other friends of ours.<br />
                    </p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Michael</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg> */}
                    </div>
                    <img className="vertical-photo" src={michael_headshot} alt="" loading="lazy" />
                  </div>
                    <p> Now, he&#x27;s on the other side of the mic, and here to talk about <br /></p>
                    <p><b>A)</b> navigating his Nigerian identity<br />‍<b>B)</b> hilariously uncovering Nigerian customs at family parties<br /><b>C)</b> learning the language Yoruba in college<br /><b>D)</b> how this journey has shaped his writing performances<br/></p>
                    <p>Hope you enjoy!<br /></p>
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
                        I feel like it&#x27;s pretty chill cuz now I don&#x27;t have to think about like, oh no, am I asking enough questions? Am I giving the guest enough space to talk? I can talk for as long as I want.<br />
                      </p>
                    </div>
                  </div>
              </section>

              <div className="section-wrapper">
               <div className='name-wrapper'>
                <div className='bolded-name'>Guru</div>
               </div>
                <div className="p-wrapper side">
                    <p>Well, yeah, this entire episode, it&#x27;s your space, it&#x27;s your time to shine. We&#x27;re also gonna start this one at the very beginning. I always feel like it&#x27;s interesting to think about what your connection to your language was right when you were pretty young and see how that&#x27;s evolved over time.<br /></p>
                    <p>I&#x27;m so curious to hear from your perspective as the youngest of four siblings, and I know your mom also came from Nigeria, but just to begin, <b className="bolded">what was your connection with Yoruba in your childhood and how did it kind of play out when you were growing up?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Yeah, hen I was younger it was the language that my mom and my Nigerian relatives would speak, but we just would never really be in on it.<br /></p>
                    <p>My mom very deliberately decided not to teach me or any of my siblings Yoruba, which was an interesting choice. But I respect it, but you know, sometimes I kind of wish I would&#x27;ve been taught it. <br /></p>
                    <p>There were different points where my grandma lived with us when I was younger, so they would speak it to each other, but none of my siblings were ever taught it.<br /></p>
                    <p>I got familiar with the sounds of it, but I never learned the vocabulary or diction or grammar of it. I even learned like, oh, my name wasn&#x27;t pronounced the way I think it was pronounced. But then that was also an intentional thing on my mom&#x27;s part.</p>
                </div>
              </div>

              <div className="section-wrapper center">
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is baby Michael</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg> */}
                  </div>
                    <img className="vertical-photo" src={baby_michael} alt="" loading="lazy" />
                  </div>
                </div>
              <div className="section-wrapper">
                <div className="p-wrapper full">
                  <b data-w-id="869e026c-7fae-d570-381b-544bf71c2700" className="bolded">I feel like my mom almost chose not to teach it to us</b>
                  <p>so that we would... for lack of a better term, <b className="bolded">assimilate better</b>.</p>
                  <p>You know, she wanted us to be <b className="bolded">fully American</b>.</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                  <b data-w-id="16be7753-1d53-6079-1551-2086453af0b1" className="bolded">To begin with your relatives, did you ever talk with them growing up?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>We had a lot of relatives who were in the States, so a lot of them kind of congregated in the DC area. There&#x27;s a pretty big Nigerian community in the Maryland-DC area, and so I had a lot of aunts and uncles who lived there. <br /></p>
                    <p>We would go to Maryland for a week for holiday, it would always be some kind of occasion. And then there would be a big party where there&#x27;s a bunch of Nigerians invited. <br /></p>
                    <p>There are two levels of the party, one where the adults are usually from Nigeria and then their children... some might have been born in Nigeria and then moved to the States at a young age. And then some were born in the States but they had some level of fluency in Yoruba. So it&#x27;s interesting, each person&#x27;s experience was a little different.<br /></p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Michael's Family</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg> */}
                    </div>
                    <img className="horizontal-photo" src={michael_family} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                  <b data-w-id="5b60de1a-8120-6443-1b42-9b299f9be6df" className="bolded">What was the culture around English versus Yoruba in those circles?</b>
                  <p >Because I&#x27;ve definitely had some of those parties But then there&#x27;s a bit of a hierarchy as to who can communicate in the multiple languages. The parents always talk about like, oh, your kid does so well here, but I wish mine could too. I was wondering, was there that sort of internal prejudice around those who were better at Yoruba than others?</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Yeah, to an extent. I wouldn&#x27;t say it was ever super bad, but it would always kind of come out in the...<br /></p>
                    <p>&quot;Oh, you don&#x27;t know you were supposed to do this?&quot;<br /></p>
                    <p>or, &quot;oh, you said that so American. wow, you really aren&#x27;t Nigerian.&quot;<br /></p>
                    <p>or, &quot;oh, you said that so American. wow, you really aren&#x27;t Nigerian.&quot;<br /></p>
                    <p>It was almost kinda club-type exclusion. And then, we weren&#x27;t primed on the speaking so it was us, American children, in front of this panel of judgmental Nigerians. <br /></p>
                    <p>We&#x27;re going up and we&#x27;re like, happy birthday, grandma. You know, we&#x27;re saying our last name wrong. And then cousins come up and they&#x27;re saying their names perfectly pronounced.<br /></p>
                    <p>But it was always like that was kind of the experience of you&#x27;re walking into a situation where you&#x27;re like &#x27;this is gonna be fine&#x27; and then something happens and you&#x27;re like, &#x27;oh, it&#x27;s not fine, I&#x27;m confused.&#x27; You&#x27;re looking to your parent like, &#x27;why didn&#x27;t you tell me?&#x27; There&#x27;s obviously something not being communicated.<br /></p>
                    <div className='text-photo top'>
                    <div className='text-arrow'>
                      <p className='handwriting'>Michael and his family at his grandma's 80th birthday party</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg> */}
                    </div>
                    <img className="horizontal-photo" src={michael_birthday} alt="" loading="lazy" />
                  </div>
                    <p>I remember one time we went to an aunt&#x27;s house and like there&#x27;s a custom with certain Nigerians where you&#x27;re supposed to bow upon entry. That&#x27;s a custom in a lot of different cultures.<br /></p>
                    <p>Most Nigerians usually don&#x27;t adhere to it, but some are very, stringent about that. And we had one aunt in particular who was really stringent about that. But you know, all of us as children didn&#x27;t know that. And the phrase for you to bow is &quot;dobale.&quot; We show up to the house and we&#x27;re just like,<br /></p>
                    <p>Oh, hey what&#x27;s up Auntie?<br /></p>
                    <p>Her name is Jok, and she&#x27;s just like,<br /></p>
                    <p>&quot;dobale&quot; <br /></p>
                    <p>And we&#x27;re like,<br /></p>
                    <p>&quot;huh?&quot;<br /></p>
                    <p>She&#x27;s like,<br /></p>
                    <p>&quot;dobale&quot; <br /></p>
                    <p>And then my mom&#x27;s like,<br /></p>
                    <p>&quot;oh, you&#x27;re supposed to bow.&quot;<br /></p>
                    <p>I must have been no older than eight or nine. I&#x27;m just like, <br /></p>
                    <p>&quot;what?&quot;<br /></p>
                    <p>&quot;Get on your knees.&quot;<br /></p>
                    <p>&quot;ok...&quot;<br /></p>
                    <p>You can react to it in two different ways. You can kind of look at it, but it&#x27;s like that was kind of crazy at the moment, but isn&#x27;t that a funny story? I feel like sometimes people can kind of get a chip on their shoulder because of that. It&#x27;s funny, my mom herself, who grew up in Nigeria, she&#x27;s always like, these Nigerians! She always phrases it like that. I&#x27;m like, you know, you&#x27;re a Nigerian too.<br /></p>
                  </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p>Yeah, it&#x27;s interesting because I&#x27;ve heard my parents talk in the third person perspective of all Indians are like this, all Desis are like this. And then growing up I didn&#x27;t really understand, but like you&#x27;re also that, so you&#x27;re hating yourself.<b className="bolded"><br /></b></p>
                  <p>Michael</p>
                  <p>I think I get it more now, but I&#x27;m older cuz it&#x27;s like, yeah. I feel like people just love to be able to talk about a group as a whole, cuz they&#x27;re like, man, I&#x27;ve seen at least three people do this. So I&#x27;ve got the data set I need, you know? Part of me thinks one of the reasons she decided to move from Maryland/DC was almost to get away from large numbers of Nigerians.</p>
                  <p>She&#x27;s expressed this to me like, you know, sometimes being around very traditional Nigerians can be very frustrating to her. And especially if you like really, really grew up with it, you just want something different, you know. My two oldest siblings have been in Nigeria, but me and my brother closest to me have never been.</p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Michael and his siblings</p>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                        <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                          <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                          <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                            <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                            </marker></defs>
                      </svg> */}
                    </div>
                    <img className="vertical-photo" src={michael_siblings} alt="" loading="lazy" />
                  </div>
                  <p>They actually spent a whole year in Nigeria and went to school there for a year and then came back. I&#x27;ve never actually asked my two oldest siblings about how that experience was for them. Sometimes my mom would talk about it and it was like, they came back with a chip on their shoulder. Now, they&#x27;re not Black, they&#x27;re Nigerians, you know?</p>
                  <p>Guru</p>
                  <p>And then, when you were growing up, going to school and such... were there other Nigerians in school or were you predominantly around American Black kids?</p>
                  <p>And so going back to what you were saying about having that resentment with some of your relatives, <b className="bolded">was part of it also their level of ownership over the language or the culture that you weren&#x27;t necessarily able to tap into at a young age?</b><b className="bolded"><br /></b></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
              <div className='bolded-name'>Michael</div>
              </div>
                <div className="p-wrapper side">
                    <p>In my most recent Arkansas church, there were a few other Nigerians there, just like out of the blue, which was interesting. But my school was really white, wasn&#x27;t great.<br /></p>
                    <p>Even just black people at the school, you could count on two hands. A number of black people in my grade, you know?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>What were your feelings about not knowing Yoruba, given the fact that your mom wasn&#x27;t really pressuring you? Your siblings didn&#x27;t know it either, and then you weren&#x27;t around a lot of Nigerians in school. <b className="bolded">Was it something that you thought about not knowing the language or was it something that was more of like a distant connection?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
              <div className='bolded-name'>Michael</div>
              </div>
                <div className="p-wrapper side">
                    <p>Yeah, kind of was a distant thing of like, this is this thing my mom does. Cuz when I was a kid, especially being the youngest kid when you have a lot of siblings, there are a lot of people telling you don&#x27;t ask a question about this. And I&#x27;m like, okay, I just won&#x27;t.<br /></p>
                    <p>It was like oh, I don&#x27;t know this, but like I don&#x27;t need to know this since the only person that knew it was my mom and like, you know, my mom was kind of someone that like, why are you asking me questions? Unless you were like, I need to go to the hospital she&#x27;s like, don&#x27;t ask me, you know. And even then she would be like, I&#x27;m a doctor. Let me see, you know.<br /></p>
                    <div className='text-photo'>
                      <div className='text-arrow'>
                        <p className='handwriting'>This is Michael's mom</p>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                          <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                            <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                            <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                              <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                              </marker></defs>
                        </svg> */}
                        </div>
                        <img className="vertical-photo" src={michael_mom} alt="" loading="lazy" />
                      </div>
                    </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="0436a4f7-f99e-b047-90f6-645879cff340" className="bolded">I guess that was going on for most of your life. What caused that shift in you to want to learn Yoruba? Cause I know you ended up taking some classes in college...</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>I think it&#x27;s because like I&#x27;ve always been interested in learning languages and even just linguistics in general, when I was younger, I was always really fascinated by linguistics and I would always try and look at the IPA pronunciation guides and you&#x27;re trying to learn how to pronounce the word in another language, and then you click on it and it&#x27;s like an upside down G and an S with a slash through it. How am I pronouncing this word?<br /></p>
                    <p>From there, like learning just like about like, you know, the origins of different languages. I always wanted to learn more languages, but when I was in school, the only foreign language they really offered was Spanish. Like there&#x27;s a point where we had a French teacher and then the French teacher left and then they were we don&#x27;t have French anymore.  like they just, they&#x27;re like, you can take French one online.  coming to college, I really wanted to learn French. French is always such a chic language, and it&#x27;s like, oh, it&#x27;s the language of love. And you know, I even justified it because so many African countries speak French. French as one of their top three languages, especially in West Africa, could even serve me there.<br /></p>
                    <p>But then I was looking at French courses and I&#x27;d even almost signed up for this six-credit French intensive. And I was like, you know, I&#x27;m just gonna like really learn French. And then I saw that they offered a Yoruba class and I was like, hmm. I never even thought of the idea that I would even be able to take like an elementary Yoruba class.<br /></p>
                    <p>It fit with my schedule and it was four credits, so it was like, oh, I wouldn&#x27;t have to like really kill myself to take this foreign language. The six credit one, it would&#x27;ve been like every Monday through Friday we had to meet for this.<br /></p>
                    <p>I was like, you know what? When am I ever gonna get the chance again to take an elementary Yoruba class? So I decided to sign up for the Yoruba 1 and it was cool. It was cool to have like a class of mostly Nigerians, but there were also a few non-Nigerians. Because, interestingly enough, there is a Yoruba diaspora in Latin America, and so there was a non-Black Latino in the class who was from the Yoruba diaspora, which was interesting.<br /></p>
                    <div className='text-photo'>
                        <div className='text-arrow'>
                          <p className='handwriting'>This is Michael in college</p>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                            <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                              <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                              <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                </marker></defs>
                          </svg> */}
                        </div>
                        <img className="vertical-photo" src={michael_college} alt="" loading="lazy" />
                      </div>
                    </div>
              </div>
                <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="75d5c71e-e504-c440-8d14-df90d053bd97" className="bolded">Just to round out the contextual details...When you had taken this Yoruba 1 class, what year in college were you in?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <div className="bolded-name">Michael</div>
                    <p><span>I'm fairly certain it was sophomore year. Yeah, it definitely wasn't freshmen year. I think it had to have been sophomore year because junior year was when we got kicked out for COVID. Because there was even the option of taking Yoruba 2, but then I would have had to commute to Columbia to take this course. So I was like, nah. </span></p>
                  </div>
              </div> 
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="75d5c71e-e504-c440-8d14-df90d053bd97" className="bolded">What was your mom&#x27;s reaction when you decided you were gonna take this Yoruba class?</b>
                </div>
              </div>
              <div className="section-wrapper quote">
                  <div className="bolded-name">Michael</div>
                  <p><span>She was definitely really happy. She&#x27;s like, your grandma&#x27;s gonna be really happy about this. Because my grandma still speaks a lot of Yoruba and Yoruba is a very personal language for her and my mom. Just to be able to say a few words of it together... It made her smile, you know?</span></p>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>Yeah! So, I always feel like language is interesting because you know, when you start to like tap into the language, then it opens up the floodgates of, oh, let me now try to watch like Nigerian movies. Lemme try to listen to the music more regularly.<br /></p>
                    <p>Let me try to do X, Y, and Z. More and more. Like going to Nigerian restaurants and order in Yoruba. I&#x27;m sure through the class you also touched on some of those historical/cultural moments. <b className="bolded">Did that change the way you perceived your Nigerian identity or did it kind of like evolve you forward in any way?</b><br /></p>
                </div>
              </div>
              <div className="section-wrapper quote">
                  <p>Michael</p>
                  <p><span>I definitely think it did evolve me forward. One, it encouraged me -- you know, it&#x27;s okay to not know Yoruba because it doesn&#x27;t make you any less Nigerian than others. <br /><br />Especially when I was younger, I always had that chip on my shoulder of like, my mom&#x27;s Nigerian, but I don&#x27;t feel like I can really consider myself Nigerian because I don&#x27;t speak the language. I&#x27;ve never been to Nigeria.</span></p>
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
                    <p>Yeah, I feel like it kind of put a lot of things into focus for me. You know, every time we would say it in a large group of our relatives, me and my siblings would always get clowned. They would be like, oh man, like these kids are not Nigerian at all. You know, it never clicked to me that, we&#x27;re literally pronouncing our last name wrong.<br /></p>
                    <p>And it&#x27;s interesting that my mom chose to tell it to us that way so it was easier for white people to say, but then it still was always mispronounced and so I&#x27;m like, well we might as well have just said it the right way 'cause like it actually didn&#x27;t make any difference.<br /></p>
                    <div className='text-photo top'>
                      <div className='text-arrow'>
                          <p className='handwriting'>This is Michael and his comedy crew</p>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                            <g strokeWidth="10" stroke="hsl(240, 54%, 47%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,-18,-220)">
                              <path d="M261.13715744018555 249.81211853027344Q154.13715744018555 560.8121185302734 561.1371574401855 549.8121185302734 " markerEnd="url(#SvgjsMarker1249)"></path></g>
                              <defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1249">
                                <polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="hsl(240, 54%, 47%)"></polygon>
                                </marker></defs>
                          </svg> */}
                        </div>
                        <img className="vertical-photo" src={michael_crew} alt="" loading="lazy" />
                      </div>
                    </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p><b className="bolded">When and how did you find out?</b><b className="bolded"><br /></b></p>
                  <p>Michael</p>
                  <p>It was when I was in that Yoruba classes.</p>
                  <p>Guru</p>
                  <p>Oh, really?</p>
                  <p>Michael</p>
                  <p>Yeah. There&#x27;s like a few different vowels in Nigeria, and certain vowels, you can nasalize. You nasalize a vowel by adding an &quot;n&quot; end to the end. I learned about how each of the vowels was pronounced and I was like, if I pronounce this like how, with each of the vowel rules you just taught me, like it&#x27;s pronounced like this. And he's like yeah. And I'm like oh! I've been saying it wrong. </p>
                  <p>My teacher would always ask me, what state in Nigeria are you from? And I&#x27;m like, oh, I don&#x27;t really know. And he&#x27;s just like, you don&#x27;t know?! I know, he was always like, go ask your father. And I&#x27;m like, oh, my parents are divorced. It&#x27;s like everything I said to him, he was just like, ohh no!</p>
                  <p>Guru</p>
                  <p><b className="bolded">So, did you end up taking Yoruba 2, 3, like did you end up just doing the whole cycle?</b></p>
                  <p>Michael</p>
                  <p>I never did. I only took the one Yoruba classes just because the Dramatic Writing program doesn&#x27;t leave you the most room to like explore out with just random electives because sometimes it&#x27;ll just be like, hey, you took too many electives, now you owe us money. I was like, oh what? Like I thought that was the point of college. But no, actually you shouldn&#x27;t have taken this many electives.<b className="bolded"><br /></b></p>
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
                    <p>Since then, I haven&#x27;t really kept up with my language practice. You know, I don&#x27;t know that many Nigerians in my personal life. I feel like I always meet Nigerians randomly, and it&#x27;s like they&#x27;re always inviting me to church. Yeah, for sure I&#x27;m gonna wake up. 9:00 AM on a Sunday and take an hour train to the Bronx so I can go to church. You know, I don&#x27;t wanna do that, but like, I do wanna meet more Nigerians.<br /></p>
                    <p>I feel like if I had more time and more money I would more actively try and seek out Nigerian communities, but for where I am right now, and like especially the things I&#x27;m trying to do. There are definitely Nigerian comedians, but there aren&#x27;t that many at my level right now.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="996112e2-dba8-bce1-5571-d21d181cbded" className="bolded">Can you name any Nigerian comedians that have served as like an inspiration for you?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                  <p>Yeah. There&#x27;s this one, his name is Yedoye Travis. He&#x27;s really big on Twitter and he&#x27;s been getting bigger in the standup scene. He has a 30-minute special on the Comedy Central stand-up YouTube page. And I know he wrote a Batman comic.<br /></p>
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
                  <p>Yeah, and he was working on "Saved by the Bell," too. And so he's kind of like a current young Nigerian comedian/writer who&#x27;s kind of like--  I&#x27;ll phrase it as a Donald Glover disciple. One of his jokes is that he describes himself as Donald Glover&#x27;s Wario.<br /></p>
                  <p>And then Ayo Edebiri. I&#x27;m pretty sure she&#x27;s from, if not Boston, Massachusetts for sure. And she also went to NYU. She writes for Big Mouth. She&#x27;s in that new FX show The Bear, and she&#x27;s been on a lot of other shows. She was on Dickinson. She has a podcast.<br /></p>
                  <p>But yeah, there are a lot of cool Nigerian comics out in the scene, but it&#x27;s just like, I&#x27;m still in my, I&#x27;ll phrase it as my indie darling phase. So I&#x27;m like, you know, maybe one day... once I get nominated for my Golden Globe, then I can reach out to them.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p>Yeah. I wanted to touch on your comedy and your writing, and such. I'm curious, how has interacting with these Nigerian comedians, your family, starting to immerse yourself in Yoruba influenced your artistic identity? Or has it changed the way you write or the things you write, or what you like to bring up in your standup? What&#x27;s that evolution been like in your artistic journey, too?</p>
                  <p>Michael</p>
                  <p>Yeah, I feel like it&#x27;s definitely influenced the way I write and the way I do stand up, too. One of the interesting things about Yoruba as a language is that it is a tonal language and so, you know, the way you say things influences the actual meaning of it.</p>
                  <p>I just remembered another Nigerian comic. His name is, I think, David Gborie. And I noticed it when I was watching his standup. The way that he used the tone of his voice was very dynamic. I wonder if that&#x27;s a function of him being Nigerian. 'Cause even if you don&#x27;t speak Yoruba, there&#x27;s an animated way of speaking that Nigerian people often use. It influences you even if you don&#x27;t speak the language.<b className="bolded"><br /></b></p>
                  <p>The way Nigerians speak English is its own thing. 'Cause it&#x27;s so influenced by British English. But then, if you grew up in the States... but then your parents grew up in Nigeria and then depending on their parents... Some of them have more of a British influence and then some of them have more of a strictly Nigerian-Nigerian influence. And then some of them might even have more of a French influence. So it&#x27;s interesting, the different influences, the sub-influences, that then go into the influence that then makes you speak the way you speak.</p>
                  <p>Especially as a writer, I&#x27;m always so fascinated by the rhythm of how people speak. And sometimes you&#x27;ll be writing a line, and you&#x27;re just like, this just isn&#x27;t working. And then you&#x27;ll just move one word and you&#x27;re like, oh, that&#x27;s perfect.</p>
                  <p>Sometimes it&#x27;s that subtle difference between this is how Nigerian will say it, this is how someone from New York would say it.</p>
                </div>
                <iframe width="315" height="560"
                      src="https://www.youtube.com/embed/3gI3fBK-dCE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen>
                </iframe>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="a590fab7-0356-cbdf-2d5c-69cb275450c7" className="bolded"> Has your performance or diction changed at all? Have you noticed that shift in you as well?</b>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>Sometimes I feel like it frees me to express the idea the way it sounds in my head versus how I think it should sound, you know, as a standup, you know. The interesting thing about standup is that it&#x27;s just you up there, so ostensibly you&#x27;re up there being yourself and you&#x27;re just telling jokes. But to do standup, you kind of have to embody a persona. And sometimes the persona is just you, but sometimes the persona is a fragmented version of you. Or like sometimes you&#x27;re playing off of an archetype that other comedians before you have established.<br /></p>
                    <p>So it&#x27;s like how much of it is you trying to play the archetype that you think that people see you as, or you trying to authentically say what sounds funny in your head, you know?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p>And I&#x27;ve heard people sometimes talking about how when they speak in another language, sometimes their personalities can like slightly shift. <b>Were there any shifts like that in the way you thought about things or the way you acted when you were physically trying to talk in Yoruba versus English?</b></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>I feel like I didn&#x27;t really experience any large personality shifts, but it made me think about things in a more Nigerian way, in certain aspects.<br /></p>
                    <p>Like in Yoruba, greetings are a really big thing. One of the first things we learned was greetings because there are certain greetings that you&#x27;re supposed to use for the different times of the day. And then there are also different greetings that you use for different levels. Oh, if you&#x27;re greeting your friend, you can say this, but if you&#x27;re greeting an elder you should say it like this, you know? It&#x27;s interesting there are different levels to the same word and the same function, but the situations that you&#x27;re allowed to use them in are different.<br /></p>
                    <p>And then you have to go through your rolodex. And it&#x27;s like what time is it and what&#x27;s my relationship to this person? And so, yeah it's just the fact that you have to consider a lot of things before you speak, I feel that was a thing that I was thinking of a lot more when I was taking the Yoruba class.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p>In Africa itself, I believe the Nigerian entertainment industry is technically the biggest. It&#x27;s called Nollywood.</p>
                  <p>India has Bollywood.<b className="bolded"><br /></b></p>
                  <b data-w-id="7aa24651-4447-61c4-06ce-9fa3cd6a49c4" className="bolded-name">Michael</b>
                  <p>I know Bollywood. Hey, we stole Bollywood.</p>
                  <b data-w-id="f882f2c4-a7bf-3c60-2b57-d145a361f658" className="bolded-name">Guru</b>
                  <p>No, no, hey, and Bollywood took it from Hollywood. But as these Nigerian comics have been exploding and Nollywood is growing more and more. I&#x27;m even seeing now a lot of Netflix original productions in Nollywood. I'm curious, as that media is becoming more popular globally and it is entering the mainstream, has that changed your relationship with like Nigerian content or Yoruba as a language? Does it make you more invested in it now that it&#x27;s starting to become more accepted?</p>
                  <b data-w-id="b5d98ab6-6fc0-6ea7-4a03-ceb0925d2a19" className="bolded-name">Michael</b>
                  <p>I definitely am thinking about it more 'cause, especially now, my mom has been watching more TV and more movies. And so like, I was living with my mom for almost a full year and so we would watch stuff together and a few times we would watch some Nollywood movies that were on Netflix like you mentioned.</p>
                  <p>And it was interesting seeing the different types of Nollywood movies. All of them are very melodramatic. I feel like melodrama is what Nollywood kind of specializes in. But it was interesting 'cause some of them were the kind of stereotype of what a Nollywood movie is... of seven betrayals and, you know, someone cheats on their husband with the brother, and the brother&#x27;s also secretly engaged to the heiress to like a Nigerian oil for like...</p>
                  <p>There&#x27;s always like an heiress, somewhere in there. But yeah, there&#x27;s also more modern Nollywood films that looked more modern, like American movies I had seen. But then they had Nigerian themes, but then they also had like an Internet generation tone to them. There&#x27;s more diversity of type in the space than I thought. So, you know, I wanna look into more Nollywood films. I watch movies, but I don&#x27;t watch that many movies.</p>
                </div>
              </div>
              <div className="section-wrapper">
               <div className='name-wrapper'>
              <div className='bolded-name'>Guru</div>
            </div>
                <div className="p-wrapper side">
                    <p>Actually, yeah, it&#x27;s funny that you mentioned your mom watches more stuff now because the accessibility to Nigerian content is greater. I feel the same with my parents because, especially my dad, because he pretty much exclusively watches Tamil content. And growing up he always watched it, too, but he would always find some random site on the Internet to get that stuff. But now with the advent of Netflix, Amazon Prime, like whatever else, I think it&#x27;s just really great that like there are just more avenues for people to like tap into their culture.<br /></p>
                    <p>It really makes a world of a difference, I think, when you get to see the look on their face... So Disney owns Hulu and then Disney also owns Hotstar, which is like an Indian streaming service. If you have Hulu, you can access some Hotstar content. So, I was telling my dad like, oh, I got Hulu. I can share the login and then he was like kind of indifferent about it. He was just like, oh, why are we getting this? What&#x27;s the point of it? And then I mentioned, oh, you can get Hotstar and then you can get Tamil movies.<br /></p>
                    <p>I feel it&#x27;s very important that accessibility now exists because when our parents immigrated here, they were cut off from an entire world, right? And they didn&#x27;t have these mediums to continue, aside from, yes, like they, they can like seek out spaces like churches or you know, whatever to get that community.<br /></p>
                    <p>But there are all these other mediums that were kind of lacking, at least when we were growing up. And now, 20-something years later, there&#x27;s a plethora of them, which I think is really awesome. And you know, for me, I&#x27;ve told you this before, it was actually through watching a lot of Tamil movies that I kind of refreshed my understanding of the language.<br /></p>
                    <p>I feel like movies and music is a really good way to keep it constant for you. But yeah...one of the last questions, and I know you only took a little bit of time in Yoruba, but I am curious: do you have a favorite word in that language, and if so, why?<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Michael</div>
                </div>
                <div className="p-wrapper side">
                    <p>I would say I have two. The number one I would say is <b className="bolded">&quot;ah.&quot; </b>That&#x27;s the Nigerian... something bad happens and you&#x27;re just like <b>&quot;oh ah.&quot;</b> Or you can even use it as... it&#x27;s so flexible, that&#x27;s why I love it so much. It&#x27;s like you can use it as like something bad just happened or you&#x27;re, man, that was crazy. Like even when you&#x27;re happy you can use <b>&quot;oh ah.&quot; </b>You&#x27;re just like, ah, man, like it&#x27;s really happening. You know, like, that&#x27;s crazy.<br /></p>
                    <p>And then my other favorite one is <b className="bolded">&quot;o ti to.&quot; </b>And that one is, uh, it&#x27;s enough. Like you say that when you&#x27;re just like, otito, it is enough.<br /></p>
                    <p>That one was always, cause my mom would, it was almost like, like it would almost be a game with my mom of like, anytime, like something would happen and like we would hear her say it and it&#x27;d be like, oh, we know she&#x27;s had enough. Alright, we need to chill.<br /></p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <p>That&#x27;s awesome. Well, this has been spectacular. So, thank you so much again, Michael, for coming on this podcast, uh, about to say the Passion Project, but that&#x27;s not the name of this podcast, Before we head out, do you wanna plug your socials and like anything else?</p>
                  <p>Guru</p>
                  <p>Awesome. Cool. Well thank you so much again, and this has been fantastic.<b className="bolded"><br /></b></p>
                  <p>Michael</p>
                  <p>Oh yeah. Thanks for having me.</p>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="p-wrapper">
                  <p>Guru</p>
                  <b data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a8" className="bolded">Thank you so much again for listening and as always, please like, share, comment, etc, and whatever else will help us go viral.</b>
                </div>
              </div>
        </section>
      </main>
    )
  }
  
  export default Michael
  
  export const Head = () => <title>Michael</title>
  
