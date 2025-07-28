import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"

const Tim = () => {
    useEffect(() => {
        const parentDivs = document.querySelectorAll('.section-wrapper');
        
        parentDivs.forEach(parentDiv => {
            const fadeDiv = parentDiv.querySelector('.p-wrapper');

            if (parentDiv && fadeDiv) {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            fadeDiv.classList.add('fade');
                        } else {
                            fadeDiv.classList.remove('fade');
                        }
                    });
                });

                observer.observe(parentDiv);
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
                    <iframe 
                        style={{borderRadius:'12px'}} 
                        src="https://open.spotify.com/embed/episode/YOUR_EPISODE_LINK" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </section>

                <section className='section-wrapper'>
                    <div className="name-wrapper">
                        <h3>The Host<br/><span className="first-name">Guru Ramanathan</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>Hello, and welcome to <b className="bolded">Found in Translation</b>. I'm your host, Guru Ramanathan, and this is a podcast where people who are first, second generation, and immigrants come on to talk about their relationship with their cultural language and how that has influenced their connection to their culture, family, friends, and more.</p>
                        <p>This is our first episode of season two, which is very exciting, and I'm so thrilled to have on as our first guest Tim Bumatai. Who I got to know through his fiance, Julie, Julie and I used to be co workers. And I would always hear a lot of amazing stories about Tim and always felt like, wow, we were kind of the same person and I would love to meet him one day.</p>
                        <p>So I'm very glad that we're getting to do that here and to talk about something very special for the both of us.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <h3>The Guest<br /><span className="first-name">Tim Bumatai</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>Hi. Yeah. Thanks. Tim Bumatay, he, him really happy to be here. I'm a first generation Filipino American and I grew up, I was born in, grew up and raised in Southern California. I currently live in Los Angeles and the language of my family is Tagalog from the Philippines. So. That's what we'll be talking about today.</p>
                    </div>
                </section>

                <div className='cue'>~ interview begins ~</div>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Awesome. Could you share a little bit more about what your connection with the language was in your childhood and how that played out when you were growing up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. So my connection with the Galog is pretty simple. That's my mom's native language. So is my dad's. And so I grew up with my mom speaking with other Filipinos in Tagalog but only really with elders and with previous generations, like Filipino immigrants, which she speaks tagalog.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>And so with first generation Filipino Americans, such as her own children and other younger generations, she would speak in English. So we would hear them speak in Tagalog and we would just be spoken to in English. So it was a weird intro and way of learning our native language.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, and what about with your relatives though? I feel like sometimes for me when I was growing up and having spent most of my life in America and then the few times when I would go over to India, I feel like, My relatives would sometimes have an expectation on me, like knowing the language, or sometimes they would have their own side conversations about how that process was going with my mom.</p>
                        <p>But since your mom was kind of already setting that sort of boundary, if you will I was curious if your relatives ever commented on that, or if they also only spoke to you in English.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>My relatives also really only spoke to me in English. It, I don't know if it was, it's, if it's a Filipino immigrant thing to just come here and immediately assimilate and just be like, okay, the next generation of us is here. And so we're just going to speak English. But it was never Oh, you need to learn Tagalog or you need to be a certain way.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>But you know, we would, my sister and I, we would Hear them saying like, Oh, well, they don't, well, they don't speak. They're American. They're there. They're this, but like, you know, we can understand and just respond back and go like, Oh no, we're, we're also Filipino, but there was never any real pressure to connect with the language.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. And with that split, did you ever ask your mom why she wouldn't talk to you in Tagalog? Or did you guys also ever, did you also express I would like to learn this, why won't you teach me or anything like that?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't remember ever feeling bad about being spoken to in English. I think, you know, growing up, In Southern California, everybody around me was just speaking English. So it was just like, well, this is the language of this place here. And so I never really expressed too much of an interest when I was younger to want to speak.</p>
                        <p>But just because I was exposed to it. Even passively or indirectly, I ended up learning the language that way. So I can understand the Gallo like fluently. On a scale of one to 10, I'd be able to read and listen to, and maybe even translate on a seven or eight. I would say speaking and being conversational, I'm maybe a three at most.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How did that then bleed into other parts of your culture, though? Like, even though they weren't, like, teaching you the language, were you guys still surrounded by a lot of Filipino customs, food, or I guess how deep was that assimilation going?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>At gatherings and stuff, we would definitely have Filipino food. There's the whole roasted pig on the table that people are just Picking stuff out of. There's the metal trays of food and pancit and sinigang. It's Filipino culture to just like, have you leave with droves of food.</p>
                    </div>
                </section>
                 <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>You can't leave a Filipino party without leaving with food. But also in the end, it's like really one of my few concrete connections to the culture, I think, is, is the food because even growing up, my mom was like cooking Western food as well. So I think for me specifically, it's just one of the few concrete things that I can hold on to in terms of my heritage.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you cook Filipino food yourself?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Not a lot. Sometimes, yeah, sometimes I'll cook like longanisa, which is like a sweet sausage. Sometimes I'll make lumpia. We'll go out to eat for Filipino food because I know that there are places that do it way better than I think I would ever.</p>
                        <p>But yeah, There are customs like this thing called Monopo where, you know, you go to a Filipino elder's home and they have to bless you, so they hold out their right hand and you hold it to your forehead and, you know, growing up, you'd walk into a home and an elder would be like, just hand you their hand and just be like, bless.</p>
                        <p>And so there, there are those types of Filipino customs that, you know, we were definitely. exposed to, or if you're at like, say a wedding, the elder males in those settings would wear very specific garb. Oh my gosh, I don't even know what it's called. But yeah it's like this white sheer button up short sleeve shirt.</p>
                        <p>See, it just shows how much like, even I, you know, I guess being exposed to it is not like participating necessarily, because I never wore those things.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And could you, expand a little bit on what the Filipino community looked like when you were growing up in L. A.?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Well in, so I grew up really in Orange County in Irvine. And the community that I was exposed to was mostly family, friends, cousins. But. I don't know, I don't know how to describe it. It was like, it wasn't, it seemed American to me.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Well, at that point in time, how are you defining American? And I guess, like, how did that then translate to the people around you?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>That's a great question. I don't know just being here. I can't really speak about the Filipino community without speaking about just the community community that I lived in at</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, please.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Which, you know, in Irvine at the time, we were blessed to have so many different cultures there.</p>
                        <p>You know, we had a lot of East Asians, a lot of South Asians, a lot of Middle Eastern And, and of course, Caucasian and everything that comes with that. And so, you know, my friends growing up were Black, Mexican, Asian. And so it, it just felt like just existing in that space was being American.</p>
                        <p>And so all my friends were first generation Americans as well. Going over to their homes felt very familiar too, because, you know, they spoke English. Some of them did speak Mandarin, Cantonese or Vietnamese. . But we were going through the same things.</p>
                        <p>Their parents were having conversations in their native language, but then speaking English to their children and to us. I mean, other than the food and the fact that our families were speaking Tagalog with each other , it's it didn't feel much different to any of the other things that I sort of experienced in at the time there.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, that's really interesting because for me, growing up surrounded by predominantly white people, the fact that I was different, it was just more blatant to me, and that also coincides with I needed to learn English after I had moved to America.</p>
                        <p>So I feel like it was something that I kind of thought about all the time of like, I'm not an American, I'm just an Indian.</p>
                        <p>But I feel like it's interesting to hear from this perspective of, because you were surrounded by a lot of the people, not just who were Filipino, but just a lot of people from diverse cultures, it almost made it the fact that you weren't really different. If that makes sense.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, totally. And I've heard a lot of things that are similar to your experience, where there's this very apparent sense of you are another type of person rather than you are just with a part of this community. And I think because everybody, like you said, was so diverse where I grew up. It's not that we didn't know that we were different from other people, but just that everybody was so different.</p>
                        <p>But yeah, I mean, there was a huge white population where we were. I mean, it's Orange County. It's like, yeah. But the circles that I found myself surrounding myself with were very, very diverse.</p>
                        <p>It's complicated because I always knew that I wasn't white. It's not like I assumed I was like, Oh, I'm like, white American.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>But I knew that I'm not that type of American. So I was in this weird, like intersection of I'm American technically, and I'm Filipino technically. So it I think that's, That's where I, that's where I'm like most familiar with. That's when, I don't know if that ever really had a specific moment of clicking. But it is how I've really identified myself as. It's like, I'm technically American and I'm technically Filipino.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Was there any kind of external schooling for the Filipino community? Like I know, like, like I went to like this like Sunday Indian school, I know people who went to like Chinese school or Korean school. Was there ever anything like that for you?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Not that I'm aware of. And. You know, when I got your questions, I was like, Oh, did that even exist back then? If it existed, I wasn't exposed to it. And I didn't really know anybody who did it. A lot of the Philippine first generation Filipino Americans that I grew up with are very similar to me in that they can understand the language, but they can't speak it. And so I didn't know that they ever went to any sort of formal Tagalog classes. I don't know if those existed.</p>
                        <p>Even my grandma who probably knew English the least was a very proficient English speaking person. Heavy accent for sure, but she definitely spoke good English. So it didn't, me not being able to speak, didn't really affect my relationship with family.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                            I used to joke and say english is a first language for every Filipino that lives in post World War II, like that era of the world. I think you'd be hard pressed to find any Filipino born in America or born in the Philippines that can't speak English.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                            I think it's really interesting how peoples cultures are formed based on how they speak to each other.
                        </b>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think now we sort of understand that geography and, you know, side of things is more affecting than just the language or culture affects the language than, you know, like that's that stuff affects it more. But I just find the way we describe things in the world and the way different cultures describe things in the world is like really interesting.</p>
                        <p>I'm interested in learning more and taking actual classes just cause I am fascinated with language. I think every time we travel, I make it a point to learn more than saying hello good morning. Good night. I think it's the highest form of respect you can pay to a people is to speak their language.</p>
                        <p>You know, Julia and I went to Greece a couple of years ago and Greek is so wildly different, even just like the Greek alphabet is just crazy.</p>
                        <p>But I was like, just being in another place forced me to like, Not force me, but like, I just became really interested in going like, I want to be able to read these street signs. I'm hell bent on being able to read these street signs. And so I learned how to sort of read signs. Those letters on that trip and we took a ferry and I was like, okay, I'm going to try and order in full on, like, not just pointing at something and saying like, Oh, Spanakopita. Like I want that. I want to say it. Can I please have this? I think for me, the experience of actually going to a place has always been My spark and wanting to immerse myself in that, in that language.</p>
                        <p>And then I come home and I go, okay, well now let's, let's learn even more. Which brings me back to Tagalog and Filipino culture.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                            Here's the other thing: I haven't been to the Philippines since I was two.
                        </b>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And it's been 34 years. And so Just to give you a sense of how removed I feel from Filipino culture and distanced from the language. I 1000 percent feel more American than I do feel Filipino, just because of culturally, I'm just so immersed and trained in American culture.</p>
                        <p>It just affected my relationship with the culture or my idea of like where I fit in Filipino culture. I think in now my mid thirties, I look back at my childhood and I look back at the fact that I never pushed or no one ever pushed me to learn the language. And I go, Oh, this language could very well die with my generation because I know a lot of other Filipino Americans are in the same position.</p>
                        <p>Language is like the song of a people, you know, this song stops being sung with me. And so I feel a little bit of guilt with that. So there's that aspect of it. And I'm a little bummed that I was never forced to do it. And you know, obviously it's never too late.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, I mean, I was not expecting you to come here with the existential crisis of Tagalog.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Sorry, you know, I always, I always question what that is because think about what the Philippines is pre Spanish colonialism, right? It was just hundreds of island territories whose language was based off of Sanskrit, like a bunch of different things.</p>
                        <p>Even the word Philippines. It's Spanish. And so we have just a complicated relationship, I feel, and this is a Filipino American saying this. I think we just culturally have a complicated relationship with our own past because for hundreds of years we were under Spanish rule.</p>
                        <p>And then even after that, the Americans and the allies had liberated us. And so there's a huge filipino affinity for American culture and English speaking things that I feel like that's trickled down into our generation of Filipino Americans. And so I, I think that's a symptom of just being generationally Filipino.</p>
                        <p>I think it's really interesting. It's fascinating. Where does that come from?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, there was one of my Filipino friends or she's half Filipino, but she's also going to come on this podcast. But then she was saying that if she were to talk about, It wouldn't be from her perspective. She would talk about it from her mom's perspective and what mom went through and I was like, well, this podcast, it's about YOU, so, we can't, we can't do that. But I just thought that was interesting that was her first thought.</p>
                        <p>I know you were saying like when you were growing up, it's not something that you felt bad about or anything like that, but did you have a light bulb moment when you were realizing this gap between you and Filipino culture.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It wasn't until I think my late twenties,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>We started this podcast episode, this recording, this conversation with you asking how to pronounce my last name. I was listening to Michael's episode of how he just was mispronouncing his last name, but didn't know it for his whole, almost his whole life.</p>
                        <p>And it's similar to mine, except I knew I was mispronouncing it my whole life. I was pronouncing my last name, Bumate,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Mm hmm. Yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>and I would hear Tagalog speaking people or native Filipinos saying Bumatay and I'd go, that's correct. And I would hear roll call.</p>
                        <p>And it's like Timmy Bumate, and I'd be like, yes, that is correct. It wasn't until I was like, Oh, well, maybe I should stop going by Timmy and just go by Tim now as like a sign of like, I'm an adult or whatever. But what's your last name, dude?</p>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                           Like you just start to ask yourself, like what else do you need to change? And so I made it a point in my late twenties to introduce myself to new people and correct myself with people I was already familiar with and say it's Bumatay because I don't think it's that much more difficult to pronounce than Bumatay.
                        </b>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It wasn't until later that my relationship with Tagalog and Filipino culture became more important to me, for me to understand.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I'm assuming it happened like it was more of a gradual shift, but were there certain people or certain sets of factors that really spurned that drive in you to want to connect more with Filipino culture?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>You know, there weren't a lot of mainstream Filipino things that I can think of growing up there were Filipino people that made it into the mainstream that I remember being like, Oh, that's cool. They're, they're one of us. But, it wasn't until, within the last 10 years that, you know, Ube, Is a bigger thing in the world. And I'm just like, Oh, cool. Or like people have eaten more than just pancit. They've had lechon, they've had adobo, they've had sisig, they've had Filipino Filipino foods where I'm like, Oh, okay, that's cool.</p>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                           And I think it's Filipino culture and Filipino foods seeping their way into mainstream recently. Sort of forced me to confront, Hey, you're, you're this still. Right. Do you want to visit the Philippines again at some point, do you want to revisit your relationship with the language at some point?
                        </b>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And now in the age of social media and algorithms being so good my feeds are just know that this is the content that I want to be fed. I'm seeing a lot more Filipino and Tagalog content. And yeah, I think it's been a gradual thing within the last 10 years that through all those factors that I've been wanting to be more in tune with that part of my culture and heritage.</p>
                        <p>But why am I not doing it?</p>
                        <p>Would be so easy, I think, for me to pick up Tagalog, like I can already understand the language. But why.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>is stopping you, I guess?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't know, I don't know. This is yeah, maybe this is something to unpack in therapy, but I don't know. I couldn't, I can't tell you it's it would be. I know it would be easy.</p>
                        <p>So, you know, this is already inspiring me to like, look into. I know there's one like pretty close by like maybe two or three miles away where they do in person classes and stuff. You know what else it is? There's not a lot of Tagalog speaking people around me or that at least I'm exposed to. I have a coworker who works out of our Singapore office who is Filipino and we only get to see each other if we're having some sort of offsite where we're all gathering in one place or something.</p>
                        <p>But the last time she was here, I tried to speak with her, just to ask her, like, Hey, have you eaten uh, come on, can uh, and she immediately was like, wow, you sound so white. And I was like, okay, cool. I will only speak to you in English now,</p>
                        <p>When I do speak in Tagalog, or if I do try to think in Tagalog, it is my mind saying it in English and then pairing it with the word, and so it does come off forced, and I do feel a little strange doing it, and I feel like I'm sort of putting on an act.</p>
                        <p>I'm like cosplaying as a Tagalog speaking person.</p>
                        <p>There just isn't a lot of people to have those conversations with out here. And now my mom lives in Michigan and my dad lives in Buffalo, and so I'm not really around them too much to practice.</p>
                        <p>My sister doesn't speak it. I mean, she can understand it in the same way that I can and my half brother who I'm really close with. For sure. I mean, they never spoke it in his home growing up. So he has a more removed relationship with the language, but yeah, I think it is, it's kind of on me and I recognize that to learn more.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Have you like thought about planning a trip? I'm sure you've thought about it, but is that on the cards for the next year or two of going to the Philippines?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yes. A thousand percent. I've been trying to plan this with the family for two or three years now at this point. At this point it's going to be difficult to just coordinate with multiple people. I think I'm just either going to have to go by myself or with Julie. But you know, I think Julie and I are considering Japan as our honeymoon. Even thinking about going to Japan and not going to the Philippines. It's like, I think I carry around a little bit of guilt, just like thinking about it, like, Oh, wow. You're going to be in that part of the world again. cause I just went, I just recently in the last, I think, yeah, a year, year and a half, I went to Singapore and I'm like, I'm in this part of the world, why am I not going to the Philippines? Yeah, I think it's just been a little difficult to coordinate with family, so I think I'm going to have to just do it.</p>
                        <p>I have my own little eat, pray, love journey on my own. Yeah</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. And I mean, aside from the general idea of being immersed in the culture and, and country and everything, is there anything in particular when you do end up going to the Philippines that you want to do or see that you've always had in your head, like, Oh, I need to make sure I do this when I go there.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>We have a family farm out there that has been just in the family for a long time. It was my grandpa's and my grandma's and then in the family before that, I think has a lot of like really interesting history, especially during the war, where during Japanese occupation, my grandfather who worked for the government would go to go to work.</p>
                        <p>And Japanese soldiers knew that he was going to work. After he left, they would come onto the farm and my grandmother would have to take care of them. And then at the end of the day, they would leave. My grandfather would come back and he would grab a gun and try and find these soldiers and try and kill them.</p>
                        <p>And so this happened on that farm and I'd love to visit that. The farm is not operational anymore. In fact, like our family is not even on there. We have this poverty is a huge issue in the Philippines. And I think there's Over a hundred people just like kind of squatting on the land now.</p>
                        <p>And so just visiting and just seeing that part of my family history would be nice. I think that's the, that's like, if I were to pick one thing that I'm looking forward to, it's seeing that.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So you feel like you have this big gap between you and Filipino culture, but has there been a point in your life where you felt like the gap was kind of shortening or maybe you felt like you were actually really in sync with the culture, the language or, yeah you know, where it didn't feel as like sort of isolating,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Well, recently there was a sort of block party in historic Filipino town. Here in L. A. where I bet every Filipino in Los Angeles was just at this place was packed. But a lot of those people were like very, had very similar past and histories as I do. But I think it was more like I was connecting with other Filipino Americans and less so with Filipinos.</p>
                        <p>And It's, it's pretty American, like if you, if you asked me, it's like, it's very like, the clothing, the music is very like, there's like R& B, there's hip hop, there's, it's, it feels like very American. I don't, I don't know how else to describe it. It doesn't feel like it's different other than the people there are Filipino.</p>
                        <p>It was just like, Hey, this is just me connecting with other people who have similar history as me of with the culture. And I think that's the most I've ever felt connected to Filipino culture was through being connected with Filipino Americans.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>right.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>it's interesting.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I guess just to wrap it up we always like to ask people, you know, do you have a favorite word in the language? So, do you have a favorite word in Tagalog?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. I think it's lakas or lakas. It means a strength. that's my word in Tagalog. I like it because, you know, we have like Lakas ng Bayan means power of the people, power to the people. So it's like, it means power. It means strength. But it's even used in ways that are, like, not as profound sounding as that. Like, lakasanang, volume, right? Like, you can use it to say, hey, can you give strength to the volume? And I think that's a really interesting word. It's a small word, but it's a, it's also a huge word. And so I think lakas is my favorite word.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay, cool. Well, thank you so much, Tim, for coming on to the podcast and helping to kick off season two. This has been a really awesome discussion.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I hope that there is something here that you can cut together. You know, it's I, I, I, what you've said about your other friend who's half Filipino and what they have, they've sort of responded to, you know, potentially being on here that really resonated with me because it was like my Filipino experience really is through the experience of others who I view as more connected to the language and the culture than I am. So I, I just found that really fascinating and I find what you're doing here really fascinating. And I think the more people can share these stories, the more people might be interested in either learning about other cultures, learning other languages.</p>
                        <p>So really cool stuff.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>No, thank you so much. And you know, it really means a lot for you to come on and sort of be vulnerable with us as, as well. And we're looking to do more of these with also as many different kinds of backgrounds and cultures and languages as possible. But yeah, so thank you so much again, Tim.</p>
                        <p>And that's a wrap.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tim</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Awesome.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Tim

export const Head = () => <title>Tim Bumatai Interview</title>