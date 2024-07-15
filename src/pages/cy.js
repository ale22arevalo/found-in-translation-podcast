import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"
import cynthia_headshot from "../images/cynthia/cynthia_headshot.webp"

const Cy = () => {

              useEffect(() => {
                // Get all elements with class 'section-wrapper'
                const parentDivs = document.querySelectorAll('.section-wrapper');
            
                // Iterate over each 'section-wrapper' element
                parentDivs.forEach(parentDiv => {
                    // Get the corresponding 'p-wrapper side' element within each 'section-wrapper'
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
        <h1>
          <span className="changing-word">Signature</span>
          <span className="static-title">Moves</span>
        </h1>
      </section>

      <BackTop />

    <div className="main-body">
            <section className='section-wrapper'>
              <div className="name-wrapper">
                <h3>The Host<br/><span className="first-name">Guru Ramanathan</span></h3>
              </div>
              <div className="p-wrapper side">
                  <p>Hello and welcome to <b className="bolded">Found in Translation</b>. I&#x27;m your host Guru Ramanathan and this is a podcast where people who are first/second generation and/or immigrants come on to talk about their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more.</p>
                  <p>This week&#x27;s guest is Cynthia Mojica. I'm very excited for you guys to hear from her because Cynthia is such an articulate and thoughtful person, and has a very interesting story to share. The language she predominantly speaks at home is American Sign Language, or ASL. She is a hearing person, but her mom is hard of hearing while her dad is fully deaf. So, in this episode, she talks about: </p>
                  <div className='text-photo'>
                    <div className='text-arrow'>
                      <p className='handwriting'>This is Cynthia</p>
                    </div>
                    <img className="vertical-photo" src={cynthia_headshot} alt="" loading="lazy" />
                  </div>
                  <p><b className='bolded'>A) </b>being a C.O.D.A., or Child of Deaf Adults, and having to grow up while also acting as a translator for her parents</p>
                  <p><b className='bolded'>B) </b>the nuances of American Sign Language and deaf culture as a whole</p>
                  <p><b className='bolded'>C) </b>and the need for more accessible spaces in our society.</p>
                  <p>I hope you guys enjoy.</p>
                </div>
            </section>
            
            <div className='cue'>~ interview begins ~</div>

            <section className="section-wrapper">
                <div className="name-wrapper">
                  <h3>The Guest<br /><span className="first-name">Cynthia Mojica</span></h3>
                </div>
                <div className="p-wrapper side side">
                  <p>The language that I speak at home is predominantly ASL, but also English. It&#x27;s kind of like a weird mix, but if I were to just say one, it would be ASL.</p>
                </div>
            </section>
            <section className="section-wrapper">
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
                <div className="p-wrapper side">
                  <p>I&#x27;d love to learn more about how you had to learn ASL in your childhood and how that played out when you were growing up? </p>
                </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <b className='bolded'>My mom is hard of hearing and my dad is fully deaf.</b>
                  <p>And so, in the deaf community, that would make me a <b className='bolded'>C.O.D.A.</b> So that&#x27;s a Child of Deaf, I guess, in my case, Adults. Sometimes people could have one or two, obviously. So, I usually ask this question a lot to my mom because I, for the longest time, didn&#x27;t know what came first.</p>
                  <p>It was kind of like, you know, the chicken and the egg question. What came first: ASL or English. And the consensus is both. But, I started taking ASL classes.</p>
                  <p>And I have pictures in my house of just me and my mom practicing gestures. I&#x27;m mimicking my mom, like touching my nose and touching my ears and touching my head and, you know, just lots of visual stuff.</p> 
                  <p>And then, for my elementary to middle school time, I went to an integrated school in the city where there were deaf students, hard of hearing students, and students who were hearing like me who may have deaf parents like I did.</p>
                  <p>And it was sort of like this nice tight knit community that my family felt was a good safe space for both their child&#x27;s education, but also their ability to be in touch with their child&#x27;s education.</p> 
                  <p>And then, when I went to high school, I decided I wanted to go outside of that bubble and that&#x27;s kind of where the formal classes ended for me.</p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <b className='extra-bolded'>Can you talk a little bit more about just what it was like having to grow up with being like a ASL-English translator and how those interactions were like when you had to, let's say, take your parents to a parent-teacher conference at school or having friends over, and stuff like that?</b> 
              </div>
            </section>
            <section className="section-wrapper quote">
                <div className='bolded-name'>Cynthia</div>
                <p><span>In terms of translating, I feel like it&#x27;s a lot of similarities to a lot of immigrant family households. And my mom herself is an immigrant from the Dominican Republic.</span></p>
            </section>
            <section className="section-wrapper">
              <div className='p-wrapper full'>
                <p>I felt like I had to grow up pretty early on just because the moment I became at least semi-fluent in English, I had to translate for my parents, whether it be for government offices or the post office or some store, restaurant, etc. That was a lot.</p>
                <p>In terms of school, I didn&#x27;t have to worry about parent-teacher conferences because the teachers there, some of them were deaf themselves.</p>
                <p>Some of them knew how to sign and did the formal education that they needed to support those students. And so I never had to worry about getting an interpreter until I went to high school and that&#x27;s when things started going downhill.</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                  <b className='extra-bolded'>When you were growing up, did you have like a preference of ASL or English being your primary language, and how did that kind of affect your own self-perception of being immersed in deaf culture or not?</b>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>I had a preference of English, just because in the beginning, I wasn&#x27;t really good at it. It was part of the experience of being a child with two deaf adults that you kind of lose, unless you have, you know, hearing family members outside of your immediate family that will help you develop the language.</p>
                  <p>I didn&#x27;t have that. So a lot of my issues with English kind of manifested when I went to school. I had to go to speech therapy for like five years. That made me appreciate ASL more because I at least -- I had to think about this -- but I&#x27;m able to better describe a word that I&#x27;m missing in ASL than describe a word that I&#x27;m missing in English.</p>
                  <p>So that&#x27;s kind of like a way that I can describe my relationship to ASL more, but I guess now if I were to compare it to how I felt before, and I feel more comfortable speaking in English than ASL.</p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <b className="extra-bolded">And is there a reason for that?</b>
              </div>
            </section>
            <section className="section-wrapper quote">
                <div className='bolded-name'>Cynthia</div>
                <p><span>I think if I were to explain it to my childhood self, it was probably some semblance of shame and it was mainly because the world isn&#x27;t as accommodating than the circles that were created by my family, by my school&#x27;s community (an integrated very diverse population).</span></p>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper full">
                <p>And then like stepping out into a doctor&#x27;s office and seeing the exact opposite happen is, you know, part of the negative feelings that I felt towards ASL. It was also because, outside of school, there were definitely kids that didn&#x27;t know the language at all. But I know for any friends that I made outside of school, there was a lot of like weird questions that I would be asked. There would be a lot of like, I don&#x27;t know, very insensitive comments that would be made.</p>
                <p>And so that made me feel less inclined to show that in public. Another thing is like strangers. Whenever I would sign to my parents outside of school, they would always stare. And that would make me uncomfortable as someone who was very shy and reserved.<b className="bolded"></b></p>
                <b className="bolded">So it&#x27;s yeah, a lot of conflicting feelings as I got-- as I grew up. But, you know, you, you mature and you learn that, you know, there&#x27;s nothing to be ashamed of.</b>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Yeah. And as you were growing up, like I know you&#x27;re in this integrated school, but as someone who was growing up with deaf parents and also being a person of color, <b className="extra-bolded">what were the pockets of diversity where you were able to align yourself with versus not, as you were going through school?</b></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Oh that&#x27;s a good question. In terms of race and ethnicity, it was actually very diverse. I never felt isolated in terms of my ethnicity as a Puerto Rican and Dominican individual.</p>
                  <p>My friend group was predominantly hearing people, even though I did have friends who were hard of hearing and deaf, but, you know, when I would go sit at the lunch table, I would be with the hearing kids. I would sit down with the hearing kids and we would talk.</p>
                  <p>I would go to class and sometimes, certain subjects, we would separate the class. So that kind of created the pockets, I think fundamentally, but I never felt like I only had to stay in that circle. I think I was just the type of person that I didn&#x27;t care.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>I feel like I&#x27;ve talked to, on this podcast and also just in my life, there have been people who have the ability to, let&#x27;s say, have a foot in two worlds at once. And you hear from one side, you&#x27;re not "X" enough to be in this community.</p>
                  <p>You hear the same thing from the other side. And so, I&#x27;m curious if that ever came up from some of your hard of hearing or deaf friends who are saying like, </p>
                  <p>Because you&#x27;re not actually deaf or hard of hearing, you can&#x27;t fully be immersed in this culture. And then there&#x27;s the other kids who are just have, you know, they can hear properly. <b className='extra-bolded'>Did you ever receive any comments like that?</b></p>
                </div>
              </div>
            </section>
            <section className='section-wrapper'>
              <div className="name-wrapper">
                  <div className='bolded-name'>Cynthia</div>
                </div>
              <div className="p-wrapper side">
                <p>The answer, to just say it shortly, is no. I would think of it in terms of ableism. I&#x27;m hearing. So, technically speaking, I have the upper hand, the privilege, in terms of the hierarchy of people.</p>
                <p>However, if I was a deaf person, if I was a hard of hearing person, I would definitely have those feelings because there&#x27;s a deaf community. And then there&#x27;s specific issues within the community where it&#x27;s like, "Oh, you&#x27;re not deaf enough." </p>
                <p>Or you&#x27;re not adjusting to the rest of the world, I guess, that aren&#x27;t a non-deaf community, the non-deaf people. So, for me, when it comes to trying to fit in in those circles, I never felt a need to do that because I knew that I could easily drop into any pockets.</p>
                <p>And I feel like that&#x27;s similar to a lot of other privileged groups where they feel like they don&#x27;t need to feel the disconnect between certain groups.</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p><b className="bolded">Yeah. Growing up, I didn&#x27;t even see that, or barely any, deaf characters, or even just the use of ASL in films and shows. At least in the last two years, I&#x27;ve seen a rise of ASL, or just a more positive exposure of the deaf community in mainstream media.</b></p>
                  <p>Like, there was the film &quot;C.O.D.A.&quot; that won Best Picture. The year before that there was &quot;Sound of Metal&quot;. And, of course, &quot;The Eternals,&quot; which was, I mean, huge Marvel film.</p>
                  <p>And so, I&#x27;m curious, how do you feel about the representation of ASL in mainstream media, but then also at large, <b className="extra-bolded">are you seeing more acknowledgement or, I guess, more accessible spaces, in regular society? Is that representation in media having an effect, a positive effect?</b></p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>Mm-hmm. Well, first of all, I see that &quot;Eternals&quot; were mentioned. I think that&#x27;s Lauren Ridloff. She was actually a teacher at my elementary school. She was a teacher before she left, and then I guess she went into theater and acting. </p>
                  <p>So, yes, I do know her and her husband. They were both teachers at my school, so that was pretty cool to see on the big screen. I know a lot of my elementary school, middle school friends were very proud of her to see her on the big screen.</p>
                  <p>I know for me, the first semblance of representation was &quot;Switched at Birth.&quot; And that was a popular show where I swear like everybody that I meet, even now, they&#x27;re like, &quot;Oh my God, I watched 'Switched at Birth.' ASL is so cool, I wanted to learn it instead.&quot; </p>
                  <p>And I feel like back when it first aired and it got like a lot of buzz and popularity, I was like, &quot;Oh my God, I don&#x27;t know how to feel. This is kind of weird.&quot; I felt pressured to watch it, too. And I did watch a few episodes, but...</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                  <p>I guess, sorry, before you go on, when you say weird, <b className='extra-bolded'> did it make you uncomfortable or are you just like not sure how to accept it, like what do you mean?</b></p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>I&#x27;m just remembering all the times where I have told people, like, oh yeah, my parents are deaf. And the first thing that they say to me is, "Oh, I&#x27;m so sorry." </p>
                  <p>And then I&#x27;m like, &quot;Oh, okay. I didn&#x27;t say they were dead.&quot; And so just seeing it on the screen and people being like, "Oh my God, that&#x27;s so cool. Like, I wanna learn." </p>
                  <p>You know, it's just bittersweet, I would say. But, I feel like I&#x27;ve had a bunch of conversations about it with some of my deaf friends like, "Oh, what do you think of the show?" </p>
                  <p>And I&#x27;m happy that there&#x27;s more, and there has been more since then. Has it done any fundamental changes? I don&#x27;t, personally, don&#x27;t think so. I guess the exposure has led to more people who are interested in learning the language. I guess, maybe the exposure has led people to be more understanding of deaf people. Just know that they exist and that they deal with these issues.</p>
                  <p>But I guess it&#x27;s hard for me to really say. I am not the ones that are directly affected by it. My parents are. So, there&#x27;s always that issue. I think part of the reason why, when you asked me to do this podcast, in the back of my mind, I&#x27;m always like, I am speaking not for myself. I am speaking for myself and my experiences, but at the end of the day, when it comes to, you know, discussing whether or not, you know, represent-- things are being really represented, I&#x27;m not speaking for myself.</p>
                  <p>I feel like as I&#x27;ve learned both languages at once, it took me a long time to really, really understand my parents. </p>
                  <p>There are still times where I speak to my parents and there&#x27;s like a disconnect. Like I don't, I&#x27;m like, &quot;Oh, I don&#x27;t really know what you&#x27;re saying.&quot; And they might have misunderstood what I said, and then it becomes this whole conflict. And then it, you know, just screws up my perception of like, is this who my parents are?</p>
                  <p>And I&#x27;m like, "Oh God, they&#x27;re being so annoying right now." But parents can be annoying. But, I would say being able to communicate my feelings definitely helped a lot as I grew up because I know back then it was a lot more difficult for me to one, understand my own feelings and my connections with ASL, but also to convey it. Because I was able to convey it through writing.</p>
                  <p>My parents are also illiterate. And that&#x27;s also just due to the lack of accessible educational stuff as children.</p>
                  <p>I know this is not what every deaf person went through. There&#x27;s definitely a lot of privileged people out there that were able to get the education early on, that were able to make the decision of whether or not they wanted to go through cochlear implants or hearing aids and whatnot.</p>
                  <p>But from my experience, my parents just had the low end of the stick and they weren&#x27;t fortunate enough to get that formal education. So ASL was really all they know. </p>
                  <p>So as someone who is learning both ASL and English, and trying to convey their feelings, as well as understand their own feelings, it took a long time for me to tell my parents, &quot;Oh, sometimes when you say this, it hurts my feelings.&quot; For them to respond, &quot;No, this is just, I&#x27;m just saying it because that&#x27;s just how I say it in this language.&quot; It&#x27;s not that I&#x27;m trying to hurt you. It&#x27;s just, I&#x27;m just trying to convey it to you.</p>
                  <p>I think definitely at my time at NYU, you know, being a psych major, that was more of a beneficial experience for me. I&#x27;m no psychologist now, but that was my form of therapy. So...the stereotypes are true! People go into psych for their own reasons. For their own benefit, for their own mental health.</p>
              </div>
            </section>
            <section className="section-wrapper">
                <div className="name-wrapper">
                  <div className='bolded-name'>Guru</div>
                </div>
              <div className="p-wrapper side">
                <p>I feel like that&#x27;s better than psych students who take one class and then they feel they can psychoanalyze everyone around them.</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>I also wanted to get a better sense of ASL in and of itself. We didn&#x27;t really stop to do this, but I wonder if you could talk a little bit more about ASL as a language, like more so, what it is like.</p>
                  <p>Can you talk a little bit more about how you learned it and what it is like as a language, or I guess how people who are deaf, or just not deaf, like how they use the language, if this question&#x27;s making sense.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
                <div className="p-wrapper side">
                  <p>Yeah, it makes sense. One of the only ways I can describe it is just going through my experience of this concept. I took ASL 1 at NYU because I wanted the easy credits. But also because I wanted to refresh my memory of basic vocabulary. And it did help me a lot, but it also helps me observe the class.</p>
                  <p>Because when I went into the class and, you know, it&#x27;s like ASL only, but, like, at one point we get breaks or you can step outside and talk to other people. And when I actually engaged with other people in the class, outside of the classroom, they&#x27;re like, &quot;I thought this was gonna be easy, but it&#x27;s so hard.&quot; </p>
                  <p>It&#x27;s like, &quot;I didn&#x27;t know that it was super grammar intensive and there&#x27;s a structure. And you can&#x27;t speak and you have to show your expressions.&quot; And, and I would say a fundamental part of the language is using your face. And that is something that I have polished to the point where I can&#x27;t even talk without being super expressible.</p>
                  <p>It&#x27;s like stuck in my head, on my face. I definitely think that&#x27;s one thing, like facial expressions is an indicator of tone, it's an indicator of grammar. It tells you whether or not you&#x27;re asking a question, you&#x27;re making an exclamation or just a statement.</p>
                  <p>The way you position yourself, the way you look at people, the way you enter a space where two people are signing, is important. There&#x27;s so many different, like physical, directional things that matter that I feel like is obviously very unique.</p>
                </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper full">
                <b className='bolded'>I grew up with a misconception, and I, and I fought myself for saying this for the longest time. I was like, &quot;Oh yeah, how can people think that like, I don&#x27;t know English. Like I have to know English to know ASL.&quot; That&#x27;s not true. ASL is like an entire entity in itself.</b>
                <p>You have to throw away the English language to understand ASL. Like English definitely helps, obviously, but you have to throw away sentence structure entirely. Grammar, throw it out the window. The structure of, of, of just like how you say a simple sentence. Totally different.</p>
                <p>You don&#x27;t say every single word in a sentence. You could say two signs and that&#x27;s like two sentences. It&#x27;s so much more than just doing gestures. So, I would say that&#x27;s another fundamental part of ASL.</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>The facial expression I think is really interesting. And in that clas, that 101 class, I&#x27;m curious, like, did they... I guess, how did they teach that?</p>
                  <div className="image-414 phot-fader"></div>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>I mean, in class it was a lot more hands on. There would be no talking at all. The instructor was always a deaf person, so there was no need to talk at all. In terms of facial expressions... God, I mean, I&#x27;m no teacher, so it&#x27;s really hard to even explain it. But they teach you how to move your eyebrows a certain way. You have to-- I think I would picture like if you&#x27;re an actor. You don&#x27;t say lines with a straight face.</p>
                  <p>There&#x27;s no reason in ASL for you to be just talking with a straight face because then you&#x27;ll, they&#x27;ll always think you&#x27;re mad. It won&#x27;t make sense in a lot of contexts. It displays tone, it displays grammar, it displays all these different things.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Yeah, yeah, yeah, I feel like even for people who have a surface level awareness of ASL, they probably won&#x27;t consider the facial expression portion. And like, I&#x27;m only more familiar with it because you&#x27;ve explained it to me.</p>
                  <p>Have you ever thought about that or talked to your parents, or other deaf friends, about people who don't know the language, they kind of reduce it to just like hand gestures as opposed to thinking about all the complexities of it?</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Part of the positive experience of taking that ASL class was that they acknowledged that it&#x27;s a language and it has a culture. There&#x27;s a history, there&#x27;s a culture, there&#x27;s different dialects, there&#x27;s different ways to say different words, just like any other language.</p>
                  <p>A lot of times when people are like, &quot;Oh yeah, I learned ASL for a bit.&quot; The most common thing that I get is like that, &quot;I only know how to spell my name.&quot; Maybe like please and thank you. Hi. Goodbye. And it&#x27;s like, that kind of perspective that I get from other people is, it&#x27;s usually pretty telling to me. Is that usually when they learn ASL, they just think it&#x27;s some really cool trick.</p>
                  <p>That&#x27;s why whenever I go to the store and the cashier is like, &quot;Oh yeah, I know a little sign.&quot; I do feel appreciative because it, it tells me that, you know, you could use that when you&#x27;re, you&#x27;re on the job and, you know, some deaf person comes in and they ask you a question, and you&#x27;ll be able to help them. And that makes me happier.</p>
                  <p>That doesn&#x27;t mean you should sign to every deaf person that you see. They may not need the actual assistance. Obviously you should learn how to ask if they need the help. If they say no, then be respectful about it.</p>
                  <p>But if you&#x27;re not actually immersing yourself and talking to deaf people and being in the community and learning more about their experiences, then I don&#x27;t think you&#x27;re really utilizing the language at all.</p>
                  <p>This goes for the disabled community as a whole. Some disabled activists and creators and stuff who have said that it&#x27;s one thing to advocate for disabled people, but to not know anyone who&#x27;s disabled, to not be friends with people who are disabled, to not associate yourselves with people who are disabled, it just feels performative.</p>
                  <p>So, that&#x27;s how I feel similarly to people who are learning ASL. The purpose is to really utilize it, to understand and better clear up any stereotypes or misconceptions about deaf people, and maybe advocate for a more accessible world, you know, as allies.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>We were talking about this off air, but you did mention acknowledging ASL as a language. And so, I actually thought that was a very interesting thread and I was wondering if you could talk a little bit more about... I didn&#x27;t even realize there was a debate, if I&#x27;m gonna be honest with you. So are there actual people who don&#x27;t consider it a legit language?</p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>Maybe it&#x27;s just me being biased, but I have a very distinct memory in my childhood where I spoke to, maybe it was like a lawyer or something. And I was speaking about the fact that I knew ASL and he literally looked at me like, &quot;What?&quot; </p>
                  <p>&quot;That&#x27;s a language? That counts? What? I don&#x27;t think that counts. Does that count?&quot; It literally stunned me. I was like, &quot;Yeah, it&#x27;s a language.&quot; After I remember actively looking online and be like, &quot;Is it really a language?&quot; You know, fully immersed in the language and culture.</p>
                  <p>But because of that one person, that one person outside of the community being like, &quot;Is this even real?&quot; So, to answer the question that I was asked in the past for so many years, yes! But for the longest time, I was stumped by this sudden fake debate. But I think now whenever I tell this to people like you, when I&#x27;m like, &quot;Oh yeah, people used to think that it wasn&#x27;t a language.&quot; I&#x27;m glad to hear the response is like, &quot;What? That&#x27;s so dumb. Because of course it&#x27;s a language.&quot; </p>
                  <p>Is it officially recognized as a language in other countries? Every country has their own sign language. That&#x27;s another misconception, too, that I got often is like, &quot;Oh yeah, is ASL universal?&quot; Maybe read the acronym.</p>
                </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Exactly. One of my old mentors, he&#x27;s working on a short film right now. it basically centers around a kid who knows Black American Sign Language. I didn&#x27;t even have awareness that a specific subsect of that would exist, or you were mentioning earlier there would be like dialects.</p>
                  <p>I knew, obviously, different countries would have their own sign language, but I guess I hadn&#x27;t really thought about -- I&#x27;m just saying how ignorant I was for many years, which I&#x27;m fine to admit, because I think a lot of people are -- but even I hadn&#x27;t really considered the number of dialects or subsects of ASL that would exist, even in this country, let alone all over the world.</p>
                  <b className="extra-bolded">Have you seen more conversation or exposure around that?</b>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>No, this is funny because I didn&#x27;t even know about BASL until recently, too.</p>
                  <p>Which says a lot because, looking back at it, if you ever look into the history of ASL, it&#x27;s predominantly white. So, being able to look at it in a new lens, in a more intersectional lens, is something that I definitely feel more inclined to look into. BASL is very interesting because I can&#x27;t even say if the way I sign has been fundamentally like BSAL-- BASL, or like just regular ASL, because Black people are the blueprint, essentially, for like a lot of things in America. It only was open until recently where I was like, kh yeah, that makes so much sense that, you know, Black ASL exists because we had segregation. There were segregated schools in America.</p>
                  <p>So, of course, the way that they learned ASL was different than the deaf children in like white schools. So, it has a historical context to it.</p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>The intersectionality thing you mentioned is super interesting. And I won&#x27;t speak for the rest of the world because I&#x27;m not as knowledgeable about how deaf culture manifests itself in other parts of the world. So, if we&#x27;re just talking about America right now, I feel like American society in and of itself doesn&#x27;t lend itself to be accessible for people with disabilities. But, you were pointing out there, even in disabled culture, there is a spectrum of inaccessibility to accessibility, which I'd love to unpack a little bit.</p>
                  <p>What are the conversations like around issues of deaf children not having equity when it comes to educational resources or financial resources? Or the lack of history, or lack of teaching around the history of the various kinds of ASL?</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="p-wrapper full">
                <b className='bolded'>I think it&#x27;s an ongoing conversation. I did research in college about the kind of divide between deaf children and parents, you know, who ultimately want to do what&#x27;s best for their kids, but may not actually realize that what they&#x27;re doing may actually harm them.</b>
                <p>So what I mean by that is when parents give birth to a deaf child, especially if they&#x27;re hearing themselves, they commonly, in research, it says that they go through a period of grief and that in itself is a lot, you know, very telling to what could happen if, you know, a child could recognize that period of grief that they go through. But that&#x27;s usually early on.</p>
                <p>They either try to fix their child or they try to help them adapt around their identity as a disabled or a deaf individual. Deaf, hard of hearing, whatever, it&#x27;s the spectrum. So, parents would go towards the fixing route, which is usually like the medical model of disability that you may have heard in books or in theories.</p>
                <p>And it&#x27;s basically like, our goal is to help you be as close to a hearing person as possible. Which means surgeries as young as a baby to get the cochlear implant, forcing these kids to go into only hearing schools and never touching a lick of sign language. They never fully adapt.</p>
              </div>
            </section>
            <section className="section-wrapper">
            <div className="p-wrapper full">
                <b className="bolded">They never fully adapt.</b>
                <p>I will say though, one thing that I was surprised in my research is that even within those communities -- let&#x27;s say a parent decides to go through that identity route and they say, &quot;You know what, I&#x27;m gonna let my kid immerse themselves in the culture, but I also want them to immerse themselves in everyday non-deaf spaces.&quot; </p>
                <p>Because they dabble in both worlds, they create that disconnect that you were trying to, you know, ask me earlier where it&#x27;s like, am I really a part of this community or not? Because within the deaf community, there&#x27;s a spectrum, as I mentioned. There are deaf children whose parents told them, &quot;You&#x27;re not learning sign language at all. You&#x27;re just gonna adapt and figure it out when you&#x27;re older.&quot; </p>
                <p>And then there&#x27;s deaf children that are like, &quot;My parents are deaf, too. So, we&#x27;re all deaf. That&#x27;s all I know. I don&#x27;t know a lick of English, I don&#x27;t care. And that&#x27;s how I identify as.&quot; </p>
                <p>And then you have a whole group of people that are like, there&#x27;s a whole debate in like the disabled community where it&#x27;s like, some people don&#x27;t want to identify themselves as disabled because it&#x27;s not very beneficial. They don&#x27;t see themselves as their disability. </p>
                <p>And then there&#x27;s some people who they&#x27;re like, &quot;Yeah, I&#x27;m disabled and I use that as an identity, and that is important to me.&quot; </p>
              </div>
            </section>
            <section className="section-wrapper">
            <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <b className='bolded'>I guess just to wrap it up, do you have a specific name sign? Could you tell us how you got it or like what it means and such?</b>
              </div>
            </section>
            <section className="section-wrapper quote">
                <div className='bolded-name'>Cynthia</div>
                <p><span>I dread this question so much because I forgot to even mention it first of all. Everyone has a sign name because no one is gonna spell your name every single time.</span></p>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                  <p>Of course.</p>
              </div>
            </section>
            <section className="section-wrapper">
             <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>Could you imagine spelling your full name?</p>
              </div>
            </section>
            <section className="section-wrapper">
              <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className="p-wrapper side">
                <p>Not, not mine. Your name is fine, but my full name, that would be impossible. </p>
              </div>
            </section>
            <section className="section-wrapper">
             <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                  <p>No. That takes up too much time. And ASL is all about brevity. Anyways. I do have a sign name. The way sign names work, usually, is that you just take the letter of your first name and somehow attribute it to a personality trait that you may have. So, you just, you know, sign the letter. So for me, it&#x27;s C, and then I&#x27;m just gonna use a common sign name.</p>
                  <p>So for sign names most commonly used by girls, they take the letter and they attribute it to their hair. So they may brush the letter up-down their head, or just attribute their like long hair. And if they have short hair or curly hair, they may do a little, like, twirl.</p>
                  <p>To like show the curl, and that might be their sign name. So that&#x27;s a common sign name that sometimes it may be given to you. I just found one and I just stuck with it. I don&#x27;t think there&#x27;s any true meaning to it. Just my name and that you just kind of shake it.</p>
                  <p>There&#x27;s really no reason. I think at some point I was so upset at the fact that I didn&#x27;t have a story behind it that I used to just make it up. I used to just make it up. I used to just, like, they&#x27;ll be like, &quot;Oh Cynthia, why is your name like, you know, you just shaking your hand?&quot; And I&#x27;m like, &quot;Oh, because I just like shaking things, that's pretty much it.&quot; </p>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Yeah. So, when you&#x27;re introducing yourself to someone for the first time, though, would you spell out your name and then show them your signed name?</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
             <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Yep! That&#x27;s how it is. They wouldn&#x27;t know otherwise.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Well, yeah, that&#x27;s what I meant... I mean, if I just met you and then you did the shaking thing, I&#x27;d be like...what do you mean?</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
             <div className="name-wrapper">
                <div className='bolded-name'>Cynthia</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Yeah, yeah. You spell it and then you do the sign.</p>
                </div>
              </div>
            </section>
            <section className="section-wrapper">
               <div className="name-wrapper">
                <div className='bolded-name'>Guru</div>
              </div>
              <div className='p-wrapper side'>
                <div>
                  <p>Got it. Thank you so much for coming onto the podcast. This has been very illuminating for me and I feel it'll be very enlightening for a lot of the people who are going to experience this episode. </p>
                  <p>Thank you so much for listening to episode three! Now we will roll the credits! I'm your host Guru Ramanathan. This is Found in Translation. Created, executive produced, and edited by Alejandra Arevalo and myself. And music by Lux the Lightbulb. Thank you so much again for listening and embarking on this journey with us. Please like, share, comment, etc., and do all the things to help us go viral. And stay tuned for the next and last episode of this season. We greatly appreciate your support. </p>
                </div>
              </div>
            </section>
      </div>
    </main>
  )
}

export default Cy

export const Head = () => <title>Cynthia</title>
