import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"

const Cy = () => {

              
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
    <main> 
      <Navbar />
      <section id="topper" className="topper">
        <h1>Signature Moves</h1>
      </section>

      <BackTop />

    <div className="main-body">
      <section className="section-bodytext">
        <div className="page-padding">
          <div className="container-large">
            <section className='section-wrapper'>
              <div className="name-wrapper">
                <h3>The Host<br /> <span className="first-name">Guru Ramanathan</span></h3>
              </div>
              <div className="p-wrapper">
                <div>
                  <p>Hello and welcome to <strong className="bolded">Found in Translation</strong>. <br />I&#x27;m your host Guru Ramanathan. <br /></p>
                  <p className="info-p right-in prevphoto emphasis">This is a podcast where first/second generation and immigrant youth come on to talk about their relationship with their cultural language and how that&#x27;s influenced their connection to their culture, family, friends, and more.<br /></p>
                  <p>This week&#x27;s guest and our first guest ever is the lovely and endlessly talented , <br />
                  </p><img className="image-414 phot-fader" src="images/current-headshot.jpg" alt="" 
                  // 
                  sizes="(max-width: 479px) 89vw, 45vw" data-w-id="7a7ef6b4-6cf6-1d1e-0c59-b590f503e0a7" loading="lazy" srcset="images/current-headshot-p-500.jpg 500w, images/current-headshot-p-800.jpg 800w, images/current-headshot-p-1080.jpg 1080w, images/current-headshot-p-1600.jpg 1600w, images/current-headshot-p-2000.jpg 2000w, images/current-headshot-p-2600.jpg 2600w, images/current-headshot.jpg 3024w" />
                  <p>nmnlkmkllkmlm<br /></p>
                  <p>m knjlnk<br /></p>
                  <p className="info-p right-in emphasis"><strong className="list">A </strong>whvbkjbjkbj<br />‍<br /><strong className="list">B </strong>hvjhvhbj<br />‍<br /><strong className="list">C </strong> hohchvjvjk<br /></p>
                  <p>cghcjhvk<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b8f" className="text-block-7 fader notes">~ interview begins ~</div>
                <div data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b98" className="speech-center fader"><strong className="bolded">Cynthia: </strong>The language that I speak at home is predominantly ASL American sign language but also English. It&#x27;s kind of like a weird mix, but if I were to just say one, it would be ASL.</div>
                <h2 data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b91" className="heading-8 fader"><strong className="bolded">Guru:</strong> I&#x27;d love to begin getting a bit more context about what your household is like.</h2>
                <div data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b93" className="speech-center fader">So, I know you were saying the primary language spoken is ASL.<br /></div>
                <div data-w-id="5bc7f160-43c1-530a-c3f4-65b9f4219b96" className="speech-center fader">I&#x27;d love to learn more about which of your family members are hard of hearing or deaf and how you had to learn ASL in your childhood and how that played out when you were growing.</div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                  <h3>The Guest<br /> <span className="first-name">Cynthia Mojica</span></h3>
                </div>
              <div className='p-wrapper'>
                  <div>
                    <div>my mom is hard of hearing and my dad is fully deaf.</div>
                  </div>
                  <div>And so in the deaf community, that would make me a <strong className="bolded">Coda</strong>. So that&#x27;s a child of deaf, I guess, in my case, adults sometimes. People could have one or two, obviously. So I usually ask this question a lot to my mom because I, for the longest time didn&#x27;t know what came first.</div>
                  <p>It was kind of like, you know, the chicken and the egg question. What came first ESL or English. And the consensus is both. It was a dual language kind of thing. But I started taking ASL classNamees with my mom when I was about three years old. And I have pictures in my house of just me and my mom practicing gestures.<br /></p><img className="image-414 phot-fader" src="images/mimicking-mom.jpg" alt="" sizes="(max-width: 479px) 89vw, 45vw" data-w-id="258d5e9c-4b25-f942-79bf-2efe3def5572" loading="lazy" srcset="images/mimicking-mom-p-500.jpg 500w, images/mimicking-mom-p-800.jpg 800w, images/mimicking-mom.jpg 960w" />
                  <div>I&#x27;m mimicking my mom, like touching my nose and touching my ears and touching my head and, you know, just lots of visual stuff. And then for my elementary to middle school time, I went to an integrated school in the city where there were deaf students. Part of hearing students and students who were hearing like me who may have deaf parents like I did.</div>
                  <p>And it was sort of like this nice tight knit community that my family felt was a good safe space for both their child&#x27;s education, but also their ability to be in touch with their child&#x27;s education. And then, when I went to high school, I decided I wanted to go outside of that bubble and that&#x27;s kind of where the formal classNamees ended.<br /></p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="16be7753-1d53-6079-1551-2086453af09b" className="text-block-7 fader">Guru</div>
                <h2 data-w-id="16be7753-1d53-6079-1551-2086453af0b1" className="span-subheading popping fadder question">Can you talk a little bit more about just what it was like having to grow up with in essence being a translator within your own family and how those interactions were like, when you had to, let&#x27;s say like take your parents to a parent teacher conference at school, or having friends over and stuff like that.</h2>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                  <p>In terms of translating, I feel like it&#x27;s a lot of similarities to a lot of immigrant family households. My mom herself is an immigrant from the Dominican Republic. <br /></p>
                  <p>I felt like I had to grow up pretty early on just because the moment I became at least semi fluent in English, I had to translate for my parents, whether it be for, government offices or the post office, or some store, restaurant, et cetera, like I was taking phone calls and filling out forms left and right for them. And that was, that was a lot.<br /></p>
                  <p>In terms of school, I didn&#x27;t have to worry about parent teacher conferences because the teachers there, some of them were deaf themselves.<br /></p>
                  <div>Some of them knew how to sign and did the formal education that they needed to support those students. And so I never had to worry about getting an interpreter until I went to high school and that&#x27;s when things started going downhill.</div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                  <p>When you were growing up, did you have a preference of ASL or English being your primary language and how did that kind of affect, your own self of being immersed in deaf culture<br /></p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4">Rachel</h4>
              </div>
              <div className='p-wrapper'>
                  <p>I had a preference of English just because in the beginning, I wasn&#x27;t really good at it. It was part of the experience of being a child with two deaf adults is that you kind of lose unless you have, you know, hearing family members outside of your immediate family that will help you develop the language.<br /></p>
                  <p>I didn&#x27;t have that. So a lot of my issues with English kind of manifested when I went to school, I had to go to speech therapy for like five years. That made me appreciate ASL more because I at least I had to think about this, but I&#x27;m able to better describe a word that I&#x27;m missing in ASL than describe a word that I&#x27;m missing in English.<br /></p>
                  <p>So that&#x27;s kind of like a way that I can describe my relationship to ASL more, but I guess now if I were to compare it to how I felt before, I feel more comfortable speaking in English than ASL.<br /></p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <h2 data-w-id="35a57260-3313-32da-a27f-071029f4a8ce" className="heading-8 fader nametag">Guru</h2>
                <div><strong className="bold-text">And is there a reason for that?</strong></div>
                <h2 data-w-id="139a822a-a1cc-953b-640b-ba8346535f9b"  className="heading-8 fader nametag">Cynthia</h2>
                <div data-w-id="35a57260-3313-32da-a27f-071029f4a8d7" className="speech-center fader">I think if I were to explain it to my childhood self, it was probably some semblance of shame and it was mainly because the world isn&#x27;t as accommodating than the circles that were created by my family, by my by my school&#x27;s community and integrated very diverse population.</div>
                <div data-w-id="b6636ab2-870b-1c09-a98b-f416e69bbc1e"  className="speech-center fader">And then like stepping out into a doctor&#x27;s office and seeing the exact opposite happen is, you know, part of the negative feelings that I felt towards ASL. It was also because outside of school, maybe sometimes in school, there were definitely kids that didn&#x27;t know the language at all, but I know for any friends that I made outside of school, there was a lot of like weird questions that I would be asked. There would be a lot of like, I don&#x27;t know, very insensitive comments that would be made.</div>
                <div data-w-id="35a57260-3313-32da-a27f-071029f4a8d3" className="speech-center fader">And so that made me feel less inclined to show that in public. Another thing is like strangers, whenever I would sign to my parents outside of school, they would always stare. And that would make me uncomfortable as someone who was very shy and reserved.<strong className="bolded"><br /></strong></div>
                <div data-w-id="35a57260-3313-32da-a27f-071029f4a8d5" className="speech-center fader"><strong className="bolded">So it&#x27;s yeah, a lot of conflicting feelings as I got as I grew up. But you know, you, you mature and you learn that, you know, there&#x27;s nothing to be ashamed of.</strong></div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Yeah. And as you were growing up, like I know you&#x27;re like in this integrated school, but as someone who was growing up with deaf parents and also being a person of color, <strong className="bolded">what were the pockets of diversity where you were able to align yourself with versus not as you were kind of going through?</strong><br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>That&#x27;s a good question. In terms of race and ethnicity, it was actually very diverse. I never felt isolated in terms of my ethnicity as a Puerto Rican and Dominican individual.<br /></p>
                  <p>My friend group was predominantly hearing people, even though I did have friends who were hard of hearing and deaf, but you know, when I would go sit the lunch table, I would be with the hearing kids. I would sit down with the hearing kids.<br /></p>
                  <p>Sometimes certain subjects we would separate the className. So that kind of created the pockets, I think fundamentally, but I never felt like I only had to stay in that circle. I think I was just the type of person that I didn&#x27;t care.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>I feel like I&#x27;ve talked too on this podcast and also just in my life, there have been people who have the ability to let&#x27;s say have a foot in two worlds at once and you hear from one side, you&#x27;re not X enough to be in this community.<br /></p>
                  <p>And then hear from the, you hear the same thing from the other side. And so I&#x27;m curious if that ever came up from some of your heart of hearing or deaf friends who are saying like, oh, you&#x27;re not like actually deaf or heart of hearing.<br /></p>
                  <p>  Because you&#x27;re not actually deaf or heart of hearing, you can&#x27;t fully be immersed in this culture. And then there&#x27;s the other kids who are just have, you know, they can hear properly. Did you ever receive any comments like that?<br /></p>
                </div>
              </div>
            </section>
            <div className="section-tabs info_component">
              <div className="p-wrapper">
                <div data-w-id="3e21aea0-54b2-6df0-e110-1c786750c6b2" data-current="Tab 1" data-easing="linear" data-duration-in="0" data-duration-out="0" className="tabs w-tabs">
                  <div className="tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current">
                      <div className="text-block-5">1</div>
                    </a>
                    <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link">
                      <div className="text-block-4">2</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="tab-pane w-tab-pane w--tab-active"><img sizes="(max-width: 479px) 78vw, (max-width: 767px) 76vw, (max-width: 991px) 40vw, 41vw" srcset="images/sister-and-I-now-p-500.jpg 500w, images/sister-and-I-now-p-800.jpg 800w, images/sister-and-I-now-p-1080.jpg 1080w, images/sister-and-I-now-p-1600.jpg 1600w, images/sister-and-I-now-p-2000.jpg 2000w, images/sister-and-I-now-p-2600.jpg 2600w, images/sister-and-I-now.jpg 3024w" src="images/sister-and-I-now.jpg" loading="lazy" alt="" className="image-412" /></div>
                    <div data-w-tab="Tab 2" className="tab-pane w-tab-pane"><img sizes="(max-width: 479px) 78vw, (max-width: 767px) 76vw, (max-width: 991px) 40vw, 41vw" srcset="images/Sister-and-I-when-we-were-younger-1-p-500.jpg 500w, images/Sister-and-I-when-we-were-younger-1-p-800.jpg 800w, images/Sister-and-I-when-we-were-younger-1.jpg 1024w" src="images/Sister-and-I-when-we-were-younger-1.jpg" loading="lazy" alt="" className="image-412"/></div>
                  </div>
                </div>
              </div>
              <div className="p-wrapper">
                <h2 className="heading-8 nametag right-in">Cynthia</h2>
                <div className="right-in info-p">To just say it shortly is no. I would think of it in terms of ableism. Am the I&#x27;m I&#x27;m hearing. So technically speaking, like I have the upper hand, the privilege in terms of the hierarchy of people. So I never really had to deal with the disconnect between the deaf students and the hard of hearing students.</div>
                <div className="right-in info-p">However, if I was a deaf person, if I was a hard of hearing person, I would definitely have those feelings because there&#x27;s a deaf community. And then there&#x27;s specific issues within the community where it&#x27;s like, oh, you&#x27;re not deaf enough.</div>
                <div className="right-in info-p">Or you&#x27;re not adjusting to the rest of the world, I guess that aren&#x27;t a non deaf community, the non deaf people. So for me, when it comes to trying to fit in, in those circles, I never felt a need to do that because I knew that I could easily drop into any pockets.</div>
                <div className="right-in info-p">And I feel like that&#x27;s similar to a lot of other privileged groups where they feel like they don&#x27;t need to feel the disconnect between certain groups. And I acknowledge that now. Back then that never came to my mind, but that&#x27;s the best way that I can describe it.</div>
              </div>
            </div>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p><strong className="bolded">Yeah. Were talking a little bit earlier about oh, you didn&#x27;t grow up finding a lot of accessibility in public spaces and schools, or, anything of that nature.</strong><br /></p>
                  <p>And I mean, I&#x27;ll say this, growing up, I didn&#x27;t even see that or barely any, deaf characters or even just the use of ASL in films and in American films and shows and such. At least in the last two years I&#x27;ve seen a rise of ASL or just a more positive exposure of the deaf community in mainstream media.<br /></p>
                  <p>There was the film &quot;Coda&quot; that won best picture, the year before that there was &quot;Sound of Metal,&quot; which was got some Oscar nominations, and of course there was, there are &quot;Eternals,&quot; which was, I mean, huge Marvel film.<br /></p>
                  <p>And so I&#x27;m curious, how do you feel about the representation of ASL in mainstream media, then also at large, <strong className="bolded">are you seeing more acknowledgement or more accessible spaces, in regular society? Is that representation in media having an effect, a positive effect?</strong><br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Mm-hmm. Well, first of all I see that &quot;Eternals&quot; were mentioned. I think that&#x27;s Lauren Ridloff. She was actually a teacher at my elementary school. She was a teacher before and then I guess she went into theater and acting. <br /></p>
                  <p>So that was pretty cool to see on the big screen. I know a lot of my elementary school, middle school friends were very proud of her to see her on the big screen. I know for me, the first semblance of representation was &quot;Switch at Birth.&quot; And that was a popular show where I swear like everybody that I meet now, even now, they&#x27;re like, oh my God, I watched &quot;Switch at Birth.&quot;<br /></p>
                  <p>I feel like back when it first aired and it got like a lot of buzz and like popularity, I was like, oh my God, I don&#x27;t know how to feel. This is kind of weird. I felt pressured to watch it too. and I did watch a few episodes, but...<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Sorry, before you go on, when you say weird, did it make you uncomfortable or are you just like, not sure how to accept?<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>I&#x27;m just remembering all the times where I have told people, oh yeah, my parents are deaf. And the first thing that they say to me is, oh, I&#x27;m so sorry.<br /></p>
                  <p>And then I&#x27;m like, oh, Okay. I didn&#x27;t say they were dead. I, like, they&#x27;re still alive as well. Like I never said anything of that nature. And so just see it on the screen and people being like, oh my God, that&#x27;s so cool. Like, I wanna learn, I can&#x27;t believe, this is like, never been a thing.<br /></p>
                  <p>It was bittersweet, I would say, but I feel like I&#x27;ve had a bunch of conversations about it with some of my deaf friends like, oh, what do you think of the show? And they seemed pretty happy to see that on the screen.<br /></p>
                  <p>And I&#x27;m happy that there&#x27;s more and there has been more since then. Has it done any fundamental changes? I don&#x27;t personally don&#x27;t think so. I guess the exposure has led to more people who are interested in learning the language. I guess maybe the exposure has led people to be more understanding of deaf people and you know, just know that they exist and that they deal with these issues.<br /></p>
                  <p>But I guess it&#x27;s hard for me to really say, cuz I am not the ones that are directly affected by it. My parents are. So there&#x27;s always that, that issue. I think part of the, the reason why, when you asked me to do this podcast in the back of my mind, I&#x27;m always like, I am speaking, not for myself. I am speaking for myself and my experiences, but at the end of the day, when it comes to, you know, Discussing whether or not, you know, represent things are being really represented I&#x27;m not speaking for myself.<br /></p>
                  <p>Part of the experience of learning ASL as someone who is hearing is learning more about your parents in the later stage of your life. I feel like as I&#x27;ve learned both languages at once, it took me a long time to really understand my parents. <br /></p>
                  <p>There are still times where I speak to my parents and there&#x27;s like a disconnect. I&#x27;m like, oh, I don&#x27;t really know what you&#x27;re saying. And they might have misunderstood what I said, and then it becomes this whole conflict. And then, you know, just screws up my perception of like, is this who my parents are?<br /></p>
                  <p>And I&#x27;m like, oh God, they&#x27;re being so annoying right now. But parents can be annoying. But I would say being able to communicate my feelings definitely helped a lot as I grew up because I know back then it was a lot more difficult for me to one, understand my own feelings and my connections with ASL, but also to convey it because I was able to convey it through writing.<br /></p>
                  <p>I forgot to mention this, but my parents are also illiterate. And that&#x27;s also just due to the lack of education and accessible, you know, educational stuff that they went through and they didn&#x27;t go through as children.<br /></p>
                  <p>I know this is not what every deaf person went through. There&#x27;s definitely a lot of privileged people out there that were able to get the education early on that were able to make the decision of whether or not they wanted to go through cochlear implants or hearing aids and whatnot.<br /></p>
                  <p>But from my experience, my parents experienced, they just had the low end of the stick and they weren&#x27;t fortunate enough to get that formal education. So ASL was really all they know. <br /></p>
                  <p>So, as someone who is learning both ASL and English and trying to convey their feelings, as well as understand their own feelings, it took a long time for me to tell my parents, oh, sometimes when you say this, it hurts my feelings. For them to respond, no, this is just, I&#x27;m just saying it because that&#x27;s just how I say it in this language. It&#x27;s not that I&#x27;m trying to hurt you. It&#x27;s just, I&#x27;m just trying to convey it to.<br /></p>
                  <p>I think definitely at my time at NYU, you know, being a psych major, that was more of a beneficial experience for me. I&#x27;m no, I&#x27;m no psychologists now, but that was my form of therapy. So the, the stereotypes are true. People go into psych for their own reasons. For their own benefit for their own mental health.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="b2c89759-eab5-5911-dc6f-405ccdf0e0ed" className="text-block-7 fader">Guru</div>
                <h2 data-w-id="05838c40-e779-834f-d121-d3a8474afa9c" className="span-subheading popping fadder question">I feel like that&#x27;s better than psych students who take one className and then they feel they can psychoanalyze everyone around them. Is a bit more obnoxious.<br /></h2>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>But, I also wanted to get a better sense of ASL in and of itself. We didn&#x27;t really stop to do this, but I wonder if you could talk a little bit more about ASL as a language, like more so, what it is like.<br /></p>
                  <p>You were talking about how it&#x27;s blunt, if that&#x27;s an appropriate word to use or maybe that&#x27;s just like the, the, how your parents were using it. But can you talk a little bit more about how you learned it and what it is like as a language, or I guess how people who are deaf or just not deaf, like how they use the language, if this question&#x27;s making sense.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="section-tabs info_component">
                <div className="p-wrapper">
                  <div data-w-id="98577c5b-6f15-65c6-e94e-31286340f24e" data-current="Tab 1" data-easing="linear" data-duration-in="0" data-duration-out="0" className="tabs w-tabs">
                    <div className="tabs-menu w-tab-menu">
                      <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current">
                        <div className="text-block-5">1</div>
                      </a>
                      <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link">
                        <div className="text-block-4">2</div>
                      </a>
                    </div>
                    <div className="w-tab-content">
                      <div data-w-tab="Tab 1" className="tab-pane w-tab-pane w--tab-active"><img sizes="(max-width: 479px) 78vw, (max-width: 767px) 76vw, (max-width: 991px) 40vw, 41vw" srcset="images/MoreCompetition-p-500.jpg 500w, images/MoreCompetition-p-800.jpg 800w, images/MoreCompetition-p-1080.jpg 1080w, images/MoreCompetition-p-1600.jpg 1600w, images/MoreCompetition.jpg 1954w" src="images/MoreCompetition.jpg" loading="lazy" alt="" className="image-412" /></div>
                      <div data-w-tab="Tab 2" className="tab-pane w-tab-pane"><img sizes="(max-width: 479px) 78vw, (max-width: 767px) 76vw, (max-width: 991px) 40vw, 41vw" srcset="images/YoungRachelDancing-p-500.jpg 500w, images/YoungRachelDancing-p-800.jpg 800w, images/YoungRachelDancing-p-1080.jpg 1080w, images/YoungRachelDancing.jpg 1201w" src="images/YoungRachelDancing.jpg" loading="lazy" alt="" className="image-412" /></div>
                    </div>
                  </div>
                </div>
                <div className="p-wrapper">
                  <h2 className="heading-8 nametag right-in">Cynthia</h2>
                  <div className="right-in info-p">Yeah, it makes sense. I, the, one of the only ways I can describe it is just going through my experience of this gonna sound? I took ASL one at NYU because I wanted the easy credits, but also because I wanted to refresh my memory of basic vocabulary and it did help me a lot, but it also helps me observe the className.</div>
                  <div className="right-in info-p">Because when I went into the className and you know, it&#x27;s like ASL only, but like at one point, you know, we get breaks or, you know, you can step outside and talk to other people. And when I actually engaged with other people in the className, outside of the classNameroom, they&#x27;re like, I thought this was gonna be easy, but it&#x27;s so hard.</div>
                  <div className="right-in info-p">It&#x27;s like, I didn&#x27;t know that it was like super grammar intensive and there&#x27;s a structure. And you can&#x27;t speak and you have to show your expressions. And, and I would say a fundamental part of the language is using your face and that is something that I have polished to the point where I can&#x27;t even talk without being super expressible.</div>
                  <div className="right-in info-p">It&#x27;s stuck in my head, like actually on my head, on my face. I definitely think that&#x27;s one thing like facial expressions is an indicator of tone, an indicator of grammar. It tells you whether or not you&#x27;re asking a question, you&#x27;re making an exclamation or just a statement.</div>
                  <div className="right-in info-p">The way you position yourself, the way you look at people, the way you enter a space where two people are signing, is important. There&#x27;s so many different, like physical, directional things that matter that I feel like is obviously very unique.</div>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <h2 data-w-id="b5fe2be7-aa99-20aa-5543-415641eafab9" className="heading-8 fader">I grew up with a misconception and I, and I fought myself for saying this for the longest time. I was like, oh yeah. How can people think that? Like, I don&#x27;t know English, like I have to know English, no ASL. That&#x27;s not true. ASL is like an entire entity in itself.</h2>
                <div data-w-id="b5fe2be7-aa99-20aa-5543-415641eafabb" className="speech-center fader">You have to throw away the English language to understand ASL. English definitely helps obviously, but you have to throw away sentence structure entirely. Grammar, throw it out the window. The structure of, of, of just like how you say a simple sentence. Totally different.</div>
                <div data-w-id="b5fe2be7-aa99-20aa-5543-415641eafac0" className="speech-center fader">You don&#x27;t say every single word in a sentence, you could say two signs and that&#x27;s like two sentences. So it&#x27;s so much more than just doing gestures. So I would say that&#x27;s another fundamental of ASL.</div>
              </div>
            </section>
            <div data-w-id="bce311d5-d517-4f04-892e-7d3cb88b36e5">
              <div className="text-block-14">Rachel along with South Korean dance company.</div><img src="images/KoreanDancePeopleThatCame.jpeg" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 90vw, 92vw" srcset="images/KoreanDancePeopleThatCame-p-500.jpeg 500w, images/KoreanDancePeopleThatCame.jpeg 768w" alt="" className="image-415" />
            </div>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>The facial expression, I think is really interesting. And in that className, that 1-1 className I&#x27;m curious, like, did they, I guess, how did they teach that?<br /></p>
                  <div className="image-414 phot-fader"></div>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>I mean, in className it was a lot more hands on. There would be no talking at all. The instructor was always a deaf person, so there was no need to talk at all. In terms of facial expressions, God, I mean, I&#x27;m no teacher, so it&#x27;s really hard to even explain it, but they teach you how to move your eyebrows a certain way. You have to, I think I would picture, like, if you&#x27;re an actor, you don&#x27;t say lines with a straight face.<br /></p>
                  <p>There&#x27;s no reason in ASL for you to be just talking on a straight face because then you&#x27;ll, they&#x27;ll always think you&#x27;re mad. It won&#x27;t make sense in a lot of contexts, cuz again, it displays tone, it displays grammar, it displays all these different things.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>I feel like even for people who have a surface level awareness of [00:19:00] ASL, they probably won&#x27;t consider the facial expression portion. And like, I&#x27;ll be the first to admit, I&#x27;m only more familiar with it cuz you&#x27;ve explained it to me cuz we&#x27;re friends.<br /></p>
                  <p>Have you kind of ever thought about that or talked to your parents or other deaf friends about almost the like, I don&#x27;t know what the right word is like the, like how ASL can in and up itself be generalized or they kind of reduce it to just like hand gestures, as opposed to thinking about all the complexities.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru">   Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Part of the positive experience of taking that ASL className was that the fact that they acknowledged that it&#x27;s a language and it has a culture, there&#x27;s a history, there&#x27;s a culture, there&#x27;s different dialects, there&#x27;s different ways to say different words, just like any other language.<br /></p>
                  <p>If you&#x27;re thinking of ASL as oh, you know, some fun tricks here and there. Oh, Hey, I can, a lot of, a lot of times when people are like, oh yeah, I learned ASL for a bit. The [00:20:00] most common thing that I get is like that. I only know how to spell my name. Maybe like please. And thank you. Hi goodbye. And it&#x27;s like that kind of perspective that I get from other people is it&#x27;s usually pretty telling to me is that usually when they learn ASL, they just think it&#x27;s some really cool.<br /></p>
                  <p>That&#x27;s why, whenever I go to the store and the cashier is like, oh yeah, I know little sign. I do feel appreciative because it, it tells me that, you know, you could use that when you&#x27;re, you&#x27;re on the job and, you know, some deaf person comes in and they ask you a question and you&#x27;ll be able to help them. And that makes me happier.<br /></p>
                  <p>That doesn&#x27;t mean you should sign to every deaf person that you see. They may not need the actual assistance. Obviously you should learn how to ask if they need the help. If they say no, then be respectful about it.<br /></p>
                  <p>I think for ASL, especially, it&#x27;s one thing to be like, I&#x27;m learning the language, but if you&#x27;re not actually immersing yourself and talking to deaf people and being in the community and learning more about their experiences, then I don&#x27;t think you&#x27;re [00:21:00] really utilizing the language at all.<br /></p>
                  <p>I&#x27;ve looked into some disabled activists and creators and stuff who have said that it&#x27;s one thing to advocate for disabled people, but to not know anyone who&#x27;s disabled, to not be friends with people who are disabled, to not really associate yourselves with people who are disabled, it just feels lackluster.<br /></p>
                  <p>It feels performative almost. So that&#x27;s how I feel similarly to people who are learning ASL. On one hand, the purpose is to really utilize it, to understand and better clear up any, stereotypes or misconceptions, I guess about deaf people and maybe advocate for a more accessible world, you know, as allies.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="542b7611-4c6b-9c66-bff4-41e5e8b10237" className="text-block-7 fader">Guru</div>
                <h2 data-w-id="542b7611-4c6b-9c66-bff4-41e5e8b10239" className="span-subheading popping fadder question">I know we were talking about this off air, but you did mention a little bit before of Acknowledging ASL as a language. And so I actually thought that was a very interesting thread. you could talk a little bit more about, I didn&#x27;t even realize [00:22:00] there was a debate if I&#x27;m gonna be honest, so are there actual people who don&#x27;t consider it a legit language.</h2>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Rachel</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Maybe it&#x27;s just me being biased, but I have a very distinct memory in my childhood where I spoke to maybe it was like a lawyer or something. It was like some grown up. And I was speaking about the fact that I knew ASL and he literally looked at me like what?<br /></p>
                  <div>That&#x27;s a language that counts what, I don&#x27;t think that counts does that count. And it literally stunned me. I was like yeah, it&#x27;s a language. And after I remember actively looking on London and be like, is it really a language, you know, fully immersed in the language and culture.</div>
                  <div>I think my mom also started texting me in Korean as well. I still respond in English because the spelling part is hard, but now I can read pretty well.</div>
                  <div>But because of that one person, that one person outside of the community being like, is this even? So to answer the question that I was asked in the past for so many years, like, yes, but for the longest time, I was stumped by this sudden fake debate. That&#x27;s like, but I think now whenever I tell this to people like you, when I&#x27;m like, oh [00:23:00] yeah, people used to think that it wasn&#x27;t a language. I&#x27;m glad to hear the, that the, for the most part, the response is like, what? That&#x27;s so dumb. Of course it&#x27;s a language.</div>
                  <p>Is it officially recognized as a language in other countries? Every country has their own sign language. That&#x27;s another misconception too, that I got often is like, oh yeah, it&#x27;s ASL universal. Maybe read the acronym,<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Exactly. One of my old mentors, he&#x27;s working on a short film right now and it basically centers around a kid who knows black American sign language. I didn&#x27;t even have awareness of specific dialects.<br /></p><img src="images/RachelAtNYUNotTisch.jpg" loading="lazy" sizes="(max-width: 479px) 89vw, 45vw" srcset="images/RachelAtNYUNotTisch-p-500.jpg 500w, images/RachelAtNYUNotTisch-p-800.jpg 800w, images/RachelAtNYUNotTisch-p-1080.jpg 1080w, images/RachelAtNYUNotTisch.jpg 1170w" alt="" className="image-414 phot-fader right-in" />
                  <p>I knew obviously different countries would have their own sign language, but I guess I hadn&#x27;t really thought about, I&#x27;m just saying how ignorant I was for many years. Which I&#x27;m fine to admit, cuz I think a lot of people are, but I hadn&#x27;t really considered the number of dialects or [00:24:00] Subec of ASL that would exist even in this country, let alone all over the world.<br /></p>
                  <div><strong className="bolded">Have you seen more conversation or exposure around that?</strong></div>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="quote">
                <div className="text-block-7 fader">Cynthia</div>
                <div className="quote-text faderr">No, this is funny because I didn&#x27;t even know about BASL until recently too.</div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru">   Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Looking back at it, if you ever look into the history of ASL, it&#x27;s predominantly white. So being able to look at it in a new lens, in a more intersectional lens is something that I definitely feel more inclined to look into BS a L is very interesting because I can&#x27;t even say if the way I sign has put fundamentally like BS a L ASL or like just regular ASL, because black people are the blueprint essentially for a lot of things in America. But it only was open until recently where I was like, oh yeah, that makes so much sense that, you [00:25:00] know, black ASL exists because we had segregation, there were segregated schools in America.<br /></p>
                  <p>So of course, the way that they learned ASL was different than the deaf children in like white schools. So it has a historical context to it and it just reminds people that it&#x27;s not just this universal, one way easy language.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>The intersectionality thing you mentioned is super interesting. And I won&#x27;t speak for the rest of the world because I&#x27;m not as knowledgeable about how deaf culture manifests itself in other parts of the world. So if we&#x27;re just talking about America right now, I feel like American doesn&#x27;t lend itself for people with disabilities, broadly speaking, but you were pointing out there, even in disabled culture, there is a spectrum of in accessibility to accessibility.<br /></p>
                  <p>And obviously I feel like that spectrum exists in a lot of different marginalized communities. I feel like there&#x27;s strata, everywhere you go, which [00:26:00] is awful. But, in your, like, the classNamees you may have taken in college, or even just, your own general research and immersion in this culture, what are the conversations like around this kind of issues of deaf children not having equity when it comes to educational resources or financial resources or the lack of history or lack of teaching around the history of the various kinds of ASL.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <h2 data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdac7" className="heading-8 fader">I think it&#x27;s an ongoing conversation. I know I did research in high school in college about the kind of divide between deaf children and parents who ultimately want to do what&#x27;s best for their kids, but may not actually realize that what they&#x27;re doing may actually harm them.</h2>
                <div data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdac9" className="speech-center fader">So what I mean by that is when children, when parents give birth to a deaf child, especially if they&#x27;re hearing themselves, they commonly in research, it says that they go through a period of grief and that in itself is a lot, you know, very telling to, what could happen if you know, a child could recognize that period of grief that they go through, but that&#x27;s usually early on in the, in the child would afterwards, they have to make a choice.</div>
                <div data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacb" className="speech-center fader">They either try to fix their child or they try to help them adapt around their identity as a disabled or a deaf individual deaf part of hearing, whatever it&#x27;s the spectrum. So oftentimes parents would go towards the fixing route, which is usually like the medical model of disability that you may have heard in books or like theories and stuff.</div>
                <div data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacd" className="speech-center fader">And it&#x27;s basically like our goal is to help you be as close to a hearing person as possible, which means surgeries as young as a baby to get the cochlear implant, forcing these kids to go into only hearing schools and never touching a lick of sign language.</div>
                <div data-w-id="2030e3c3-cf06-e8f0-ec37-7140ed3cdacf" className="speech-center fader"><strong className="bolded">They never fully adapt.</strong></div>
                <div data-w-id="dc6ff06e-f715-4216-3f90-ea38aadbe5b8" className="speech-center fader">I will say though, one thing that I was surprised in my research is that even within those communities, let&#x27;s say a parent decides to go through that identity route and they say, you know what, I&#x27;m gonna let my kid immerse themselves in the culture, but I also want them to immerse themselves in everyday non deaf spaces.</div>
                <div data-w-id="9c63708a-be25-c76c-1407-918a3c1147fb" className="speech-center fader">Because they dabble in both worlds they create that disconnect that you were trying to, you know, ask me earlier where it&#x27;s like, am I really a part of this community or not? Because within the deaf community, there&#x27;s a spectrum. As I mentioned, there are deaf children whose parents told them, you&#x27;re not learning sign language at all.</div>
                <div data-w-id="9b07fd8c-b212-8fc0-c727-f538cb3ff4f0" className="speech-center fader">You&#x27;re just gonna adapt and figure it out when you&#x27;re older. And then there&#x27;s deaf children that are like, my parents are deaf too. So we&#x27;re all deaf. That&#x27;s all I know. I don&#x27;t know, lick of English, I don&#x27;t care. And that&#x27;s, and that&#x27;s how I identify as, and then you have a whole group of people that are like, there&#x27;s a whole debate in like the disabled community where it&#x27;s like, some people don&#x27;t want to identify themselves as disabled because it&#x27;s not very beneficial.</div>
                <div data-w-id="957c6b95-2309-f741-6cc3-5c12f75099af" className="speech-center fader">They don&#x27;t see themselves as their disability. And then there&#x27;s some people who they&#x27;re like, yeah, I&#x27;m disabled. And I use that as an identity, and that is important to me. I think my parents would be considered the latter, they do acknowledge themselves as disabled and they recognize that they do need the assistance.</div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="694a3682-bf1a-864a-da52-0a77da8d5529" className="text-block-7 fader">Guru</div>
                <h2 data-w-id="694a3682-bf1a-864a-da52-0a77da8d552b" className="span-subheading popping fadder question">I guess just to wrap it up, do you have a specific name sign, and Could you tell us how you got it or what it means and such</h2>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="quote">
                <div className="text-block-7 fader">Rachel</div>
                <div className="quote-text faderr">I dread this question so much because I forgot to even mention it. First of all, like, yeah. That&#x27;s another part of the culture is that everyone has a sign name because no one is gonna spell your name every single time.</div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4 guru">   Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Of course. Yeah.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Could you imagine spelling your full name?<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper">
                <div data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a6" className="text-block-7 fader">Guru</div>
                <h2 data-w-id="96ee040b-b379-b87d-1827-8d9d2bc025a8" className="span-subheading popping fadder question">like, your name is fine, but my full name, that would be...</h2>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>No. that takes up too much time. And ASL is all about brevity. Anyways. I do have a sign name. The way sign names work usually is that you just take the letter of your first name and somehow attribute it to a personality trait that you may have. So you just, you know, sign the letter. So for me, it&#x27;s C and then I&#x27;m just gonna use a common sign name. So for girls, just for the audio view listeners, I guess.<br /></p>
                  <p>So for sign names, most commonly used by girls they take the letter and they attribute it to their hair. So they may brush the letter up, down their head, or just attribute their like long hair. And if they have short hair or curly hair, they may like do a little.<br /></p>
                  <p>To like show the curl and that might be their sign name. So that&#x27;s a common sign name that may be, you know, attributed. It&#x27;s not usually attributed. Sometimes it may be given to you. I just, I don&#x27;t know. I just found one and I just stuck with it. I don&#x27;t think there&#x27;s any true meaning to it. Just my name and that you just kind of shake it.<br /></p>
                  <p>There&#x27;s really no reason. I think at some point I was so upset at the fact that I didn&#x27;t have a story behind it that I used to just make, make it up. I used to just make it up. I used to just like, they&#x27;ll be like, oh Cynthia, why is your name? Like, you know, you just shaking your hand and I&#x27;m like, oh, because I just like shaking things.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Yeah. So when you&#x27;re introducing yourself to someone for the first time, though, would you like spell out your name and then show them your signed name? Or how would....<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>That&#x27;s how, that&#x27;s how it is. Yep. Cause they wouldn&#x27;t know otherwise.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Well, yeah, that&#x27;s what I meant. That&#x27;s like, cause I mean, if I just met you and then you did the shaking thing, I&#x27;d be...<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Cynthia</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Yeah. You&#x27;d have no idea. Yeah. You usually spell it and then you do the sign immediately after.<br /></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="info-title-wrapper">
                <h4 className="flip-left-in heading-4"> Guru</h4>
              </div>
              <div className='p-wrapper'>
                <div>
                  <p>Thank you so much for coming onto the podcast. This has been very illuminating. Very enlightening for a lot of the people who are going to experience this episode. Well, anyways though thank you for sharing all your experiences has been really awesome. And yeah, that is a wrap.<br /></p>
                </div>
              </div>
            </section>
          </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Cy

export const Head = () => <title>Cynthia</title>
