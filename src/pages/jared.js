import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"
import jared_family1 from '../images/jared/jared_family1.jpg'
import jared_family2 from '../images/jared/jared_family2.jpg'
import jared_chinesesign from '../images/jared/jared_chinesesign.jpg'
// import jared_family3 from '../images/jared/jared_family3.jpg'
import jared_family4 from '../images/jared/jared_family4.jpg'
import jared_family5 from '../images/jared/jared_family5.jpg'
import jared_family6 from '../images/jared/jared_family6.jpg'
import jared_family7 from '../images/jared/jared_family7.jpg'
import jared_family8 from '../images/jared/jared_family8.jpg'
import jared_china from '../images/jared/jared_china.jpg'
import jared_china2 from '../images/jared/jared_china2.jpg'
import daddy_yankee from '../images/jared/daddy_yankee.jpg'
import haunting_bookcover from '../images/jared/haunting_bookcover.jpg'
import hamilton from '../images/jared/hamilton.jpg'
import jared_chinafriends from '../images/jared/jared_chinafriends.jpg'

const Jared = () => {
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
                    <span className="changing-word">How an Aspirational/Aspiring Polyglot</span>
                    <span className="static-title">Mastered Mandarin</span>
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
                        <p>Hello and welcome to <b className="bolded">Found In Translation</b>. I'm your host Guru Ramanathan and this is a podcast where we talk to people who are first, second gen, or immigrants about their relationship with their cultural language and how that has influenced their relationship to their culture, family, friends, and more.</p>
                        <p>This week’s guest is Jared Patel, a Puerto Rican-Indian who discusses his connection to Spanish and Gujarati, why he dedicated himself to learning Mandarin and immersing himself in Chinese culture, his experience studying abroad in China, and how this unique language journey has affected his familial relationships and personal identity. Hope you enjoy!</p>
                    </div>
                </section>

                <div className='cue'>~ interview begins ~</div>

                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, if you want to just begin talking a little bit more about what your connection was with, let's maybe just begin with Spanish and Gujarati in your childhood and how that kind of played out when you were growing up in a house of mixed cultures? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <h3>The Guest<br /><span className="first-name">Jared Patel</span></h3>
                    </div>
                    <div className='p-wrapper side'>
                        <p>When I was much younger my mom actually tried to speak almost exclusively Spanish with me at home. I was fluent as a little kid, under the age of 10 can get right. And I got pretty comfortable with the language for a long time. And then I went to elementary school and it was an interesting situation because where I grew up it wasn't extremely culturally diverse.</p>
                        <b className='extra-bolded'>So when my mom was the only one speaking to me in Spanish, I started to feel uncomfortable. And as a kid, that's when you wanna step back. You wanna fit in. And, one of my biggest regrets to this day is, one day I said to my mom, please don't talk to me like that, when she was talking to me in Spanish. </b>
                        <p>None of my friends talked to their parents like that. I feel odd, I feel weird, I feel left out. And so, ultimately at that point I pulled away from learning Spanish as a child and ended up losing all of that, fluency I had built up to that point.</p> 
                        <b className='extra-bolded'>On the Gujarati side my dad actually never spoke growing up it was much of the chagrin of my grandparents. Definitely. They speak they speak pretty often at home, but, he, basically had the fluency of a eighth grader, I would say. He could talk, communicate all the time, but never really taught us, and me and my siblings actually my grandparents almost exclusively speak it at home.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photos</p>
                        </div>
                            <img className="vertical-photo" src={jared_family1} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Not much English. Just even the act of communicating with my grandparents, understanding what was going on. It was a lot of handholding and leaning on, other members of the family to try to just get by and understand, which, at the end of the day, it's not totally uncommon, I feel like, for a lot of people who grew up as like second, third gen, but definitely something that I want to get to a point where I'm improving upon.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And how did that impact your, to this stay on like the Indian side for a second since you weren't being spoken the language or getting immersed in that side of the culture, like how did that then impact your relationship with your other relatives? Did you at points feel closer to the, your mom's like relatives and your dad's relatives, or, even at school, did you feel more affinity with Spanish speaking kids than Indian kids?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <b className='extra-bolded'>It's an interesting question. I think that ultimately, I don't think I related to one group more than the other. And. Not by virtue of having spent more time or understood the language a little bit better with either group. It's actually quite the opposite. I felt, a lack of affinity for both. I grew up in, a town that was predominantly white. Not a lot of, language diversity was there, or cultural diversity to be completely honest.</b>
                        <p>And that changed, as as I got. Town started to get a lot more people of color, a lot more immigrants, a lot more people who spoke different types of languages. When I was younger at least it wasn't really there.</p> 
                        <b className='extra-bolded'>And so I didn't even find myself really identifying with a Puerto Rican or an Indian.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And the only proximity I got to that was more or less my family. And, I felt, that affinity for my family, I felt that affinity for my family's culture. But it was different. It wasn't, it didn't feel as natural as, I think maybe someone who grew up in and around the culture might have felt.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And so I went through this when I was like I wanna say like middle school. Yeah. Mainly in middle school, a little bit of high school where my parents had sent me to an Indian like school to learn more about the culture and also the language. And there were kids from like different, languages, like all there. So I obviously, like you hadn't done that for Gujarati, but was there anything like that for Spanish or did you hear about the few people of color, in your school, did you hear about them going to a Spanish school, an Indian school, or a Chinese Korean school?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Actually, I hadn't really heard of that until I left until I left my town. It wasn't something that I had seen really predominantly. The neighbors had gone to a Korean school. But it wasn't something that I had heard of for Spanish or even the Indian or Asian languages until much later on in life.</p>
                        <p>Honestly, if I had known at the time, I might've been interested to do it, but I also have to, think back to my bullheadedness as a kid and not willing to really spend as much time with the language as I probably should have.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. What about in middle school, high school? What language did you take at school?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, so it's it's funny in in middle school they sit us all down the first day and basically ask what type of what type of language do you wanna learn? And, they gave. It used to be three options. And then the year I joined it was four.</p>
                        <p>Spanish, French, Latin. And then the last option, which they added the year I went to middle school was Chinese. And Chinese to me was something so foreign, but incredibly interesting. I had loved Chinese culture growing up. I loved Chinese food. I loved I loved the old myths and legends.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Reading about the Jade Emperor and, the journey to the west, it was like a really cool culture, a really cool history there. And so I thought that learning Chinese would be awesome. I heard that it would be the hardest one. And of course, being a kid who wanted to stand out, on the brighter side, I was like, yes, this is the hardest one.</p>
                        <p>This is gonna be super interesting. I like the culture, I like the idea. Let me take Chinese.</p> 
                        <b className='extra-bolded'>My mom was horrified that I didn't wanna take Spanish. My dad couldn't care less. But it was definitely an interesting step. I ended up taking Chinese through middle school and high school.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And then ended up continuing a little bit in college, but pulled back just due to credit load towards the end.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And so when you're learning Chinese, is it just Mandarin or are they giving you like, some foundation in Mandarin and Cantonese? Because I feel like when people hear Chinese, they might just assume it's one version of the language. But could you explain more about like the differences or what specifically like you were learning?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. Chinese has a few few different dialects. Cantonese is one that you mentioned. Mandarin is what I would consider the main dialect throughout China.</p>
                        <p>That's like the official the official language of the culture. That's the that's the one that I actually, or the country, not the culture. That's the one that I ended up learning. And then within, Mandarin itself, there are a whole bunch of different sub dialects. There are, for different regions, like Shanghai will have Shanghai. Canton will have Cantonese, which is, same thing that's spoken in Hong Kong. There's Chung Uni. Every different, city or state province has, its own version of the language. Some are closer to, that main core dialect than others, but ultimately it's like learning a different language sometimes. In terms of, the actual writing itself even is built into two different categories.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>There's the traditional characters, which, originated from the original pictographs that people derived the characters from initially. And then there's the simplified characters, which were adopted by the island of Taiwan. And then later the the main government in China, just to simplify the way that we write things out.</p>
                        <p>Much much simpler in terms of stroke number. Shapes. Some of them have actually lost. This was one of the complaints of my original Chinese teachers. Some of them have actually lost the initial meaning because they're just so much far simplified from what the structure used to be.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And so I feel like one of the common conceptions of Chinese is it's so difficult to learn it since it's a pretty intricate language and every character means its own thing and whatnot. What was your thought process like with grasping the characters and what else was drawing you to wanting to master that? Or was it something that kind of came to you like easily or did you like the challenge of it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I would say it's a little bit of both.</p>
                        <b className='extra-bolded'>Chinese was interesting in that there's really no standard phonetic alphabet. They use characters to represent different words and meanings, and each character can be said a whole bunch of different ways. But ultimately as I learned, what each character represented how the sentences were built, it's a lot more logical than, you would've expected.</b>
                        <p>Not to say it was easy to learn by any means. It's extremely challenging, but it was definitely something that like once you understood the building blocks, you could start to pick together how things work. For example, the character for tree is just tree, but you put two trees together, you have woods, you put three trees together, you have a forest.</p>
                        <p>So it makes sense how like they build out from certain characters.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared with a sign in Chinese</p>
                        </div>
                            <img className="vertical-photo" src={jared_chinesesign} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>going back to what your mom had said, like she was horrified of you wanting to I guess not do Spanish essentially. Did you need to convince her like further or was it just I'm like a stubborn teenager, I'm just gonna do this? Or like how did that develop over the years since you like, kept taking Chinese through college?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I think that part of it was, after, after, initially going into Chinese in middle school, she had resigned herself to the fact that I was not going to be as in tune with the language at least in near term.</p>
                        <p>That said, she did have my siblings who both are fluent. They didn't quite have that same experience.</p> 
                        <b className='extra-bolded'>I guess when they were younger, pulling away from the language, which has always been interesting for me just because, when they wanted to have a conversation, maybe didn't want me to be involved, they might throw in some Spanish or, they might just do it to annoy me or agitate me just because they know it's an easy way to keep me left out. And I think that part probably contributed a little bit to me wanting to learn the language as I grew up. But also, I just felt that the connection to the culture it would've been so much deeper if I hadn't known the language a lot earlier.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family4} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And so I've spent a lot of time now trying to get trying to get back to the fluency that I once had, which has taken longer than I would expect.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. What's, what is that process? Or, I don't know. I feel like I could be making this up, but I feel like there's some sort of actual research put in of it's harder to learn a language as you get older and obviously we're not like really old yet. But is it, can you just talk about what that's been like, of like now, like in your twenties, like trying to not learn a language from scratch, but since you were having this touch and go relationship with it, what's it been like jumping back into it and is it, is your process just like Duolingo, is it just like practicing with your siblings or, how are you trying to get that fluency again?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, no, I think it's a great question. At the end of the day, I probably subscribe more to the language immersion method. I, watch movies in Spanish or TV shows in Spanish and I'll like. I'll pull up a, English based TV show, put on subtitles in English, and then play the audio in Spanish or I'll watch something like what's that show on Netflix Elite?</p>
                        <p>I don't know if you've ever seen it, but I watch that, in the original language with English subtitles. And I try as much as I can to spend time just listening to the language, listening to audio books and language, even if I'm not completely understanding them. But if it's a book I've already read.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Maybe I can catch some things, maybe I can learn a little bit as time goes on. In terms of, how easy it's been, it definitely, I would say it's been much harder. I feel like when I was learning Chinese, which was generally at the time recognized as a much harder language to learn, I was pretty much soaking it up like a sponge. I was understanding the way everything fit together. Like things just made sense.</p> 
                        <b className='extra-bolded'>In a way that, Spanish and now as I'm trying to learn Gujarati as well have just not fit into for me. But I also started learning those so much later on that, I do wonder that had it been, 10, 15 years ago and I was trying to learn these languages, would it have been significantly easier?</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Did you ever talk to your dad explicitly about why he didn't care about you learning Gujarati? Or is it, was it just like always this unspoken thing of just yeah, I don't care, and like you just grew up with that as a normal family setting?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, it I feel like it was unspoken.</p>
                        <p>My siblings don't speak it either. Ultimately I think it's something that, we've never explicitly spoken about this, but I think it's just something that he thought we wouldn't need at the end of the day.</p>
                        <p>Because, we weren't constantly in environments where that would be something that, we're using all the time.</p>
                    </div>
                </section>
                
                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="vertical-photo" src={jared_family4} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Did you ever, when you were going more into learning Chinese and immersing yourself like in that like culture how did that affect your. I guess what I'm trying to ask is as you were prioritizing one language over the other, did that affect the sort of knowledge and pride or yeah, pride essentially, that you would have towards a specific, like part of your identity or was it were you at any point kind of feeling like assimilating into the chinese like culture or identity in some way?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>No, I mean I think ultimately, yeah, I definitely felt as I interacted with the language and I think this also is what contributed to me wanting to learn more Gujarati and Spanish as I grew up.</p>
                        <p>The more I interacted with the Chinese language, the more I took these classes. Even, going to China my sophomore year of college and spending six months out there I did feel a close affinity to the culture, to the environment. I, learned about, the different holidays, the different celebrations, amazing types of food. And yeah, some of that I had gotten growing up on the, both the Spanish and the and the Indian side, but there was a certain affinity that I do think I had just because I knew the language, I understood what was being spoken about around me. I understood, the different aspects of cooking.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared in China</p>
                        </div>
                            <img className="vertical-photo" src={jared_china} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Like even in Chinese there's a whole bunch of, different flavors that you can communicate in the language two different types of spiciness. There's numbing spice and then there's like savory spice. And then there's two different words for that. And just understanding, which region that food comes from versus the numbing spice versus, where you get the sweet food or the savory food.</p>
                        <p>And understanding that like now I can, go to any restaurant anywhere, know exactly what type of cuisine they're serving and say, this is exactly what I'm gonna expect. Versus, when it comes to like Indian food or Spanish food, I know the dishes. I know generally you know what each type of dish is gonna be.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>But I don't know the different regional specialties. I don't know, what's best from where. I don't know whether a dosa from South India is gonna be as good as a dosa from North India. But ultimately, as I've spent more time with the culture, I think on both sides it has gone a little bit beyond, just understanding the language.</p>
                        <p>It's gone to the point where, I feel like just for, pure affinity to my family, pure affinity to, to the, celebrations and holidays that we had growing up. It would be just so much more helpful to understand a little bit more and, have a greater appreciation for it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Because, not to say that I didn't growing up, but being able to really understand all of the nuances of what's going on, I think would be, a phenomenal thing. Great example, I just came back from, from a wedding this past week and Indian wedding beautiful four day celebration.</p>
                        <b className='extra-bolded'>Again, it's like like you're sitting through some of these ceremonies. You're sitting through a blessing and you're not understanding anything that's going on. You know what each thing is generally supposed to symbolize, but if you understand the language, you understand everything that's being said, it adds so much more of a greater appreciation for me.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family5} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>For the event. <b className='extra-bolded'>And now, my girlfriend's Indian, my parents are elated.</b> But like I think that it's also, just so you know, if it ever gets to that point where, we're in a situation like that, I would want to be able to appreciate that just to the most capacity I could.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>When something about your, let's say Puerto Rican or like Gujarati like culture goes mainstream. Versus like when something like, okay, for example, like I know people who are like, not Korean, but they're diehard K-Pop, K-drama fans. So like when they see like their favorite K-pop k drama stars, like getting more mainstream attention or winning awards or something, there's like a great sense of pride. Like it is something that goes beyond just like normal fandom. It's almost like some of those like fan bases can be so rapturous that like they're so immersive that it becomes this like sense of pride for them. And so when you see let's say like an elite or I know like money heist, huge hit on Netflix or something from Gujarati goes mainstream. Was that something that also moved the needle for you of oh, this is something that fills me with pride, or I wanna feel more proud of this. So I would like to go back and learn the language or immerse myself more in the culture?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I would definitely say I did feel more prideful about, my, my own, ethnic culture. Having grown up with, Daddy Yankee, Donald Mar on the, Spanish music side.</p>
                        <p>Seeing those guys pop off and, the states as well. That's been, really cool. And, I felt a tremendous amount of pride for, for, those things.</p>
                        <b className='extra-bolded'>I feel pride in my understanding of the language, but I don't feel the same sort of pride that I do when, say an Indian movie I watched during my childhood, like a Bollywood movie I watched during my childhood becoming more popular here in the States. So I do think it's a little bit of a double-edged sword too, right?</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Daddy Yankee</p>
                        </div>
                            <img className="horizontal-photo" src={daddy_yankee} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Because there are some things that I'll see and then I'll feel a little bit of disappointment in my culture too, right? Controversial take, but I absolutely hated Hamilton and I am not a fan of Lin and Manuel Miranda. Puerto Rican has done a great job bringing notoriety to the culture, but I actually, I didn't feel pride in that.</p>
                        <p>So it was the, it was a little bit of the opposite in.</p>
                    </div>
                </section>

                 <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Hamilton</p>
                        </div>
                            <img className="vertical-photo" src={hamilton} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Wait if you don't, this isn't, maybe this is a detour, but could you talk more about not liking Lynn Manuel? Because there, there was like another person I knew at Tisch I, I didn't know her well, but she's Puerto Rican. I would see her on like her, like social media. Like she would be really critical of Lin-Manuel. Which, it's something that you wouldn't like, expect at first. I think she would call him performative or like the way he would use his money or influence not the best, especially when there were a lot of at the time, like Puerto Rico was being hit with a few different natural disasters and other crises. But yeah. Why don't you like Lin Manuel? 'cause I feel like it's interesting, there was like another person who I know Puerto Rican also didn't like him either.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. I won't pretend to be an expert on him by any means. Great book about him is "The Haunting of Lin-Manuel Miranda." It covers a little bit about how he maybe wasn't the person that everybody thought he was. And look, at the end of the day, yes, I feel like he was a little bit performative, but ultimately, my distaste for him comes from the fact that I felt like Hamilton was a little bit of a bastardization of the traditional musical genre.</p>
                        <p>And it could have been phenomenal. It was made to be a crowd pleaser that's very snappy, very attention grabbing, but ultimately fell short in, a couple of key components that any musical should have. And the fact that it, broadened horizons for people who had never seen a musical before and wanted to see, that sort of aspect the little rappy aspect the ability to touch on history, but also, the fact that it lacked historical context. You can look at Hamilton any way you want, but you can't say that, Aaron Burr was a black man. You can't say that that slave, that the way they portrayed slavery was accurate to the time period.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>The Haunting of Lin-Manuel Miranda</p>
                        </div>
                            <img className="horizontal-photo" src={haunting_bookcover} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Ultimately yeah, you can broaden horizons as much as you want, but I felt personally that, it fell a little bit short and some key aspects that, would properly represent the time period, properly represent the musical genre in general. And then, hit upon, is he actually doing this?</p>
                        <p>And talking about his own culture personally as a Puerto Rican. Is he saying, I take pride in myself as a Puerto Rican. I believe that, this is drawing attention to the culture he was right. And so I felt like there was a little bit of. I wouldn't call it performative activism because there was no activism going on, but, performative representation.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So actually no I agree with what you're saying. So you're in a safe space here. And maybe the internet will just come to hate us. But yeah, I was very late to Hamilton, I guess is what I'll say. I didn't really like jump on the train, when it first opened. But I feel like once I saw it and got to know more about the background of it. I, part of it did feel performative to me. 'cause while the cast is incredible and very diverse, I know a lot of the creative team, like people actually pulling the strength behind the scenes, weren't. I also think it's important to recognize, who is Hamilton made for?</p>
                        <p>I know it's now on disney Plus. So the whole world can watch it, but it was initially made for a Broadway audience, which tends to skew more affluent and white. They want a version of history that, let's say is diverse, but is still palatable for them.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And I definitely think there was like the historical depiction of slavery especially was like really reductive. I sometimes liken the first half of Hamilton to a Indian movie actually. Like a mainstream Indian movie. 'cause the way he's built up in the first half almost feels like an Indian action hero.</p>
                        <p>There's a whole song just talking about him and glorifying him and hyping him up until he finally appears. And then it turns into a war episode. And there's a whole I could be wrong, but I'm pretty sure there was a song from George Washington where he was basically being like, I cannot win this war unless this one guy comes.</p>
                        <p>And then on the second half, I found him to be an asshole because he basically gets with three different women or two different women and just is. But is like sympathized at the same, I don't know. It was like messy for me. It was enter, it was like an entertaining show, but I feel like when you really think about it, it was a little like all over the place and I'm not sure if it's hitting the point it wants to make. And that doesn't anything to do with the episode.</p>
                        <p>But I just wanted to have a quick Hamilton discourse 'cause I feel like it's usually very lauded, so I was happy to find someone who was a bit more mixed on it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, no, I completely agree with with everything you had to say. It's it's funny, I I find myself often I'll bring up that that viewpoint and people don't tend to like it.</p>
                        <p>Glad to hear someone of us clear opinion.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Honestly I'm no theater expert. But that's okay. That's okay. Jumping back into I guess the languages of it all Alejandra did mention something in the chat, which I wanted to ask you more as like a fun question, but when you are going to karaoke, do you, I. Sorry not in real life, but if you were going to karaoke hypothetically, and all the world songs are at your disposal, your first choice, is it going to be a Spanish song Gujarati song or a Chinese song?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>If we're excluding English, I think my go-to would be Spanish. Growing up, my grandfather used to play music all the time.</p>
                        <p>He also, he was a big fan of the classics, so it was a little bit of a mix. I got Elton John growing up, I got all of the old American songs that, became classics in their own right. But then we also got a lot of, I don't know if I would call I guess I could call it just island music that he played when he was younger that he had from his childhood, that my mom had from her childhood.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family6} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And those songs, they remind me so much of, growing up the barbecues that we used to have the family playing dominoes around the table all the good food we used to eat. And yeah, I love to listen to those songs and sing those songs.</p>
                        <p>And, ironically, I can't understand what they mean, but I can I can speak 'em pretty well. When it comes to karaoke I might call myself fluent in Spanish. Okay.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you notice you having any subtle or significant personality shifts when you're speaking in any of these different languages?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It's actually, it's interesting. I. I don't know. It's actually something that's been brought up to me before, but I haven't personally noticed. For instance, when I, even when I speak English with my mom, I've been told that I adopt a slight accent on top of, the way I normally speak. And you know that, that said I don't know if I've personally noticed a sort of shift, but the languages themselves do have tonalities that make them feel different coming out.</p> 
                        <b className='extra-bolded'>When I speak English, I feel like it's a lot more, rigid, structural, a little bit eloquent. Ali is saying my Chinese sounds a little sassy. But it's definitely, it's a little bit more of a, like a fluid language where the tonality is so important.</b>
                        <p>So that delivery changes the way you speak about things. And so I can totally understand that. I know hearing other people speak different languages, I've heard changes in tone, changes in seem like change in personality that I personally haven't noticed within myself, but it's also hard to identify those.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I grew up in New York. I don't have a New York accent most of the time, but if I'm at a baseball game and I'm screaming, sometimes it'll slip out. It's not like I ever tried to learn or lose that accent. It's just, an aspect of my surroundings and I adopted it without even knowing it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Have you been to each Puerto Rico, Gujarat and China have you been to all three of these locations?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah I haven't been to PR or Gujarat yet. I'm hoping to go at some point in the near future to both. But China, I actually have been to, so I spent, I spent six months at a summer abroad program. Three months in the summer abroad program. Three months really. Or traveling around the country in China.</p>
                        <p>So I went with I went with my father around Chinese New Year to China. We left over the holidays, spent a couple months just traveling around from Beijing to is where they had the terracotta warriors. We went to, a whole bunch of different regions in the country that were amazing to see.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family7} alt="" loading="lazy" />
                    </div>
                </section>



                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And then I did my semester abroad in Shanghai. And that's actually where I ended up meeting Ale. And it was also, my opportunity, I would say to really get into understanding the culture in a way that I didn't before. I had talked about, the immersion process in learning Spanish.</p>
                        <p>I think that was one of the most helpful parts of learning Chinese as well. When I was learning it in school. Yeah. I learned the characters. I learned how to speak, but comfort with the language, I think trumped everything when I was abroad. My first, week or two in China, I was very uncomfortable with, communicating even though I could understand what people were saying to me just because I didn't ha, I didn't feel like I had the level of proficiency I needed.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared and his friends in Shanghai</p>
                        </div>
                            <img className="vertical-photo" src={jared_chinafriends} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <b className='extra-bolded'>Within a month or two that was completely gone. And, by the time I left I felt not only could I get around the country by myself and interact with people by myself, but I also could help others understand, the environment we were in.</b>
                        <p>I think a great example is I did a couple of trips around the country with other members, with other classmates, and ultimately ended up being the most proficient in Chinese. And I would handle things like navigating things, like talking to locals, ordering at restaurants in a way that, I, if it was the first week or two there, even though I had, I would say a pretty similar level of proficiency, I don't know if I would've been comfortable enough to do.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared in China</p>
                        </div>
                            <img className="vertical-photo" src={jared_china2} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Cool. And second to last question. Since you're, already a mixed race person and then you have this third sort of language on top of that, that you're well-versed in I'm just curious, as you've gone throughout life, how have you navigated those kinds of conversations about people having certain, or I, maybe I should frame it phrase like this. Have you had to face those kind of conversations about people having certain expectations about your knowledge and your knowledge, connection, mastery of like certain languages or, certain connections to the respective cultures. Have, is that something you've had to encounter? And I guess what if, so what are those like situations like, or how do you like deal with them now?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>When it comes to, Spanish there's a whole term for this. It's called a Novo Kid. They don't understand basically, and I guess it's something that, for there to be a term about it, something that, a lot of first and second Gs have to have experience.</p>
                        <p>A lot of the time I'll find myself, not just with Spanish, but be it Spanish, someone will come up to me. Try speaking the language, realize I don't, and then you can tell even though, they won't say anything, maybe out of politeness, maybe out of disrespect or, whatever.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Jared's family photo</p>
                        </div>
                            <img className="horizontal-photo" src={jared_family8} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>You can tell there's disappointment in their eyes. And so it's it's interesting to, see that. And then on the other side of that, when I've been in New York and I've had a Chinese tourist come up to me, try to communicate with me in English, switch to Chinese. Thinking, I don't speak the language, and then I'll be able to help them.</p>
                        <p>And then on the other side of that, you see that and be able to say, okay, that's actually really cool. They weren't expecting this, I was able to help them. And, that's super fulfilling. So it's a little bit of a catch 22 in that, where you don't know, and the expect expectations are there.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <b className='extra-bolded'>You really want to know. I don't think anyone wants to feel like they're, being disappointing. They're unable to deliver on something that someone expects of them. But at the same time, I don't think that, it's something that I'll ever be able to totally grapple with because at the end of the day, I'm not sure I'll ever reach the level of proficiency that people expect from me.</b>
                        <p>And I think that's okay. Honestly, it's just a matter of, for me a matter of being able to engage with the culture as closely as possible. Engage with the language as closely as possible, whether that's fluency, pseudo fluency, or, even intermediate level speaking.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay. Amazing. And then, yeah, the last question we always like to end on is do you have a favorite word? I guess in this case, do you have a favorite word in Spanish? Gujarati and Chinese?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Oh, that's a great question. Okay. Let me think about this for a second. I don't think I'm allowed to say most of my favorite words.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, this is you can say whatever want on this podcast,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>but in Spanish, actually, my favorite word growing up was pencil sharpener, just because the way it rolled off the tongue, Punta.</p>
                        <p>I, my my brother used to say that all the time. And he would use it as a, he would use it as a kind of a jab. He's you're as bright as a pencil sharpener. In Chinese honestly it's probably one of the foods, maybe the soup, dumplings.</p>
                        <p>Just every time I think about that, my mouth, waters. And then I, honestly, I couldn't pin one down for Gujarati.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay. No, that's totally fine. But yeah. Thank you so much Jared, for coming on to the podcast. Is there anything else you wanted to share or plug?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Jared</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>No. Thank you so much for having me.</p>
                        <p>Really happy to to join and share my experiences.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay, awesome. Thank you.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Jared

export const Head = () => <title>Jared Patel Interview</title>
