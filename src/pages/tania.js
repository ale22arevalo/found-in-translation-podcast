import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"
import tania_profile from '../images/tania/tania_profile.jpg';
import tania_baby from '../images/tania/tania_baby.jpg';
import tania_outdoors from '../images/tania/tania_outdoors.jpg';
import tania_highschool from '../images/tania/tania_highschool.png';
import tania_friends from '../images/tania/tania_friends.png';
import tania_movie_poster from '../images/tania/tania_movie_poster.jpg';
import tania_standing from '../images/tania/tania_standing.png';
import tania_nyc from '../images/tania/tania_nyc.png';
import tania_titanic from '../images/tania/tania_titanic.jpg';
import tania_ny from '../images/tania/tania_ny.jpg';
import tania_russian from '../images/tania/tania_russian.jpg';
import tania_texts from '../images/tania/tania_texts.png';
import tania_nycsnow from '../images/tania/tania_nycsnow.jpg';
import tania_europe from '../images/tania/tania_europe.jpg';
import tania_crimepunishment from '../images/tania/tania_crimepunishment.jpg';
import tania_ahero from '../images/tania/tania_ahero.jpg'

const Tania = () => {
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
                        <p>Hello and welcome to <b className="bolded">Found in Translation</b>. I'm your host Guru Ramanathan and this is a podcast where people who are first/second generation, and immigrants come on and talk about their relationship with their cultural language and how that has influenced their relationship to their culture, family, friends, and more.</p>
                        <p>This week's guest is a good friend of mine and a co worker. First time I've had a co worker on the show. And her name is Tania Varganova And I will let her introduce herself.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania</p>
                        </div>
                            <img className="vertical-photo" src={tania_profile} alt="" loading="lazy" />
                    </div>
                </section>

                <div className='cue'>~ interview begins ~</div>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I think first we'd love to begin with your upbringing in Russia. What was that connection to Russian and English like when you were growing up, and were you in a household where they spoke a mix of Russian and English, or additional languages, or was it just specifically Russian?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>That's a great question. And I actually was chatting with my mom about this because we're going on vacation and my mom does not speak English at all, so I grew up in a very Russian speaking family. I always loved languages in general. I feel like it wasn't really easy for me to learn the grammar, even Russian grammar you have to study it in Russian schools, and one other language, and usually it's either English or German. I studied English. So it's like when you go to school, you study Russian and English at the same time.</p>
                        <p>And when I say studying Russian that means like the grammar specifics and how to write properly. You write like a lot of essays, and I feel like, I always struggled with it, even though I wanted to be a journalist. It's I just couldn't get some of the rules. It was really interesting for me to learn, and I was a really good student, so I was always reading books, and doing research. I know my mom, for example, she always was really great in grammar, and she didn't study that much, but it came to her naturally.</p>
                        <p>So, that was like a very interesting thing for me growing up. That I really had to study even my own native language.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Baby Tania</p>
                        </div>
                            <img className="horizontal-photo" src={tania_baby} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                          I feel like it was complicated, but with Russian, specifically, it was important for me to understand the background of the language because we have a lot of really excellent writers, and they were so equipped in using this language as such a great and powerful tool. And so that was very important for me to get a gist of this, and that's why I was reading and learning. I really wanted to be a journalist. It's a complicated relationship, but it's definitely an interesting one.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                       My mom only speaks Russian. And she's very reluctant in learning even a couple of words in English. I don't know why, but I told her like just to study a couple words that you would need to use when you travel. For some reason she just says, nah I can't. So, she really relies on me.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like the older you get, the harder maybe it is to learn just because you have so much like information and you have work and things. I studied learning Italian and I'm really struggling with it, and I think I'm going to give up because it's just, it's hard for me to memorize words. I don't know, maybe I'm not paying attention enough, but I like watch those videos and then I completely forget everything they said.</p>
                        <p>But, I feel like also German and English, they're very similar. So, when I was studying English and German at the same time, I kept confusing words because they're very similar. So, I would use English words during my German classes and I'd be like, wait no, this is English. And then when I was like studying English, like in English classes, like I would use German words and it was such a mess in my head.</p>
                        <p>So, I understand why it's definitely challenging to learn, especially languages that are a little bit similar and that could be confusing. I think I should go back to German, maybe. I should definitely give up on Italian and just go back to German, maybe. </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>One of Tania's travels</p>
                        </div>
                            <img className="horizontal-photo" src={tania_outdoors} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And when you were, growing up, did you guys have Russian-mediums or English-medium schools, or universities, or was, everything predominantly Russian? And, I guess in terms of the way you were taught or the way you maybe interacted with your peers, was there a mix of like different languages or everyone was exclusively just talking in Russian for the most part? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                       Yeah, I feel like everyone was exclusively talking in Russian. I loved English, and I had this goal to move to New York since I was like 13 probably, so I was maybe trying to talk in English to people.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I went to the math school, so a focus on math and physics, and some other subjects that are not languages.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania's graduation from English First</p>
                        </div>
                            <img className="vertical-photo" src={tania_highschool} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                        I feel like my classmates didn't really care that much to learn and I was like the best student in English and they would just ask me questions. And I was so passionate about this and I was like, of course like I will explain how you build out sentences in English.
                        </b>
                    </div>
                </section>
                 
                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I don't know if you have this in America, but we had days I think like once in three months in school. So, if you were in middle school, you would go to the elementary school and you would play teachers for a day only. And I always chose English and I was an English teacher for a day, and it was so fun. But, I feel like all my friends, it wasn't a priority for them. And, yeah, I feel like I was always just very obsessed with English and New York. Everyone else wasn't really into that.</p>
                        <p>I think it'd be great to understand more of just what Russian is like as a language. Obviously, this isn't like linguistic class or anything, but if you could give more of a sense of what the grammar structure is like, or alphabet structure, stuff like that? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, for sure. I want to say that my main struggle actually with English was that English has a lot of different tenses. Russian has only three. It's a future, past, and present. To me, I still don't sometimes understand when I should be using I have been, like, it's very confusing, I think, for all Russian people because it's either, it's in the past or in the future or present.</p>
                        <p>And then the alphabet is  very different. We have one letter that you can't even pronounce. </p>
                        <p>And also, important thing that I personally struggle with is articles. We don't have articles. In overall Russian, we have a lot of adjectives.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>If I were to describe Russian language, I would probably say we use, yeah, a lot of adjectives, but also it's like a song sometimes. I keep thinking about writers, like famous writers like Dostoevsky and Tolstoy. </p>
                        <p>They use words that don't make sense, but they only make sense for Russian people. If you read a sentence and it says "table," if you're not native speaker, you will probably don't understand the sentence because it's like, it looks simple. But, for Russian people it means a very different thing.</p>
                        <p>So I think that's why Russian literature is very unique in terms of words because they use a lot of them.</p>
                    </div>
                </section>
                 <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                        I was actually helping my friend who was in the production of The Seagull by Chekhov and she made me read The Seagull in English and Russian and compare. And there were some things that I could not explain because they don't make sense to person who doesn't speak Russian. This is what I can tell you about Russian without going into deeper questions about linguistics, but yeah.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. And what part of Russia did you grow up in?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I grew up in St. Petersburg, which is a very beautiful city with a lot of gorgeous architecture and history behind it. It's really beautiful. </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And were there any regional differences to how Russian gets spoken there versus Moscow or somewhere else, like a specific slang or tone or any other nuances to the way it was spoken there versus other parts.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Not a tone, definitely slang. I know that there are some differences between the words that people from Moscow would use. Specifically, there's one word it describes the entrance into the building. And, we have one word in people who grew up in St. Petersburg, but people from Moscow use a completely different word. And, I think there's a little beef between people from Moscow and St. Petersburg, and they would make fun of each other and they would be like, oh, okay he's that word. So, he's from Moscow. It's a little bit like LA and New York. People who grew up in St. Petersburg probably don't want to move to Moscow, and people from Moscow are the same. I think maybe there are about 40, 50 important words that are very different. But, in terms of pronunciation or tone, I don't think there are differences in terms of accents. I don't think we have accents.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania and her friends in St. Petersburg </p>
                        </div>
                            <img className="vertical-photo" src={tania_friends} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I was gonna ask that because I was wondering if not obviously the same, but something like in America where if someone's from the South, they might have that little Southern twang, and you can tell they're from the South. But, that's not the case in Russia? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I don't think it's the case. It's only about those certain words that you would use. People from bigger cities can seem snobby sometimes, and they can make fun of people who are from smaller towns.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And then transitioning into the English passion and the New York dream, how did that start?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                     <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                          I would watch a lot of American movies and specifically remember New York Minute with the Olsen sisters. I was very inspired by it and I remember they were really popular when I was growing up. So, I would watch those movies and I would be like, okay, like I really want to go and this looks so cool. And, I had this dream to move to New York. I thought it was like a universal mistake that I was born in Russia. I set the goal in mind around when I was like 11 or 12. As long as I remember, I was always dreaming about it.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>New York Minute</p>
                        </div>
                            <img className="vertical-photo" src={tania_movie_poster} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like the education in Russian schools, especially in English, it wasn't that great. I didn't feel satisfied with the course of the English language and I wanted to challenge myself and learn more words and be really advanced in English. I didn't just want to know basic phrases because I knew that I would eventually move. So, you can take after school classes. I don't know if that's a thing in America.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>subject.</p>
                        <p>They have tutoring, cram sessions.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Tutoring! So, I always had a tutor after school when I was in high school. I was really saving money for my trip. I was very close to moving and, of course, I wanted to be excellent in English. I went to English First [Editor's Note: EF Education First] and I think it's a very like popular school. I see a lot of kids on the streets of New York actually from English First. They have like little badges. It's like an international English school. They had native speaking English teachers. It was really great for me because I really wanted to hear the pronunciation and learn the accent.</p>
                        <p>And then I moved to LA in 2015 because there was a student exchange program between Russia and United States. And, if you're a student, you can go to the United States and to work like at a restaurant or at a hotel. And the idea was to work to make some money, and then you would have a month or two to just to travel. It's called work and travel.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania</p>
                        </div>
                            <img className="vertical-photo" src={tania_standing} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                     <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                         I went to LA and I spent three months in LA. Then I went to New York as a tourist just to see what's up. I fell in love. I went back to Russia to get my master's. I actually studied engineering and medical physics, this is very, very far from journalism or PR. But, then I came back to New York and stayed here to pursue my dream. But, yeah, I kept learning English, and even now I learn it every day. I have a little book where I write all the words. I still write it. I still, when I read books, like I always take screenshots of words.
                        </b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania</p>
                        </div>
                            <img className="vertical-photo" src={tania_nyc} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Oh, okay.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I have six books right now with words. I wish I remembered all of them. Memorized all of them. I just write it down and try to learn.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Are these words that when you're reading a book, or in conversation, are these words that you just find to be interesting or unique or what's ticking you off that it needs to get written down or not? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I write everything. <b className='extra-bolded'>If I don't know a word, I write it down.</b> Sometimes, there are some words that they don't make sense. I actually showed it to my American friend and she was like, yeah we don't use this word. You would only use it if you write a philosophy book.</p>
                        <p>And, I was like, okay I won't be using it. But, usually when I see a word I try to write it down, just in case. You never know. And I can always just open it and just like look at it and try to memorize. Yeah, everything you say, it all goes into the book.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I actually wanted to talk about the movie journey as well. One, when you were watching the movies, was it an American film that was dubbed into Russian, or American movies, but English subtitles? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, dub, unfortunately. But, then, growing up, if you go to a movie theater, you would definitely watch a dub movie. But then, once we had full access to social media and YouTube and stuff, so I started watching movies in English with subtitles. It was so different. Even now I can't watch dubbed things. Even I'm watching this like French show that you recommended.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Lupin? Oh, nice.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. And I watch it with subtitles because I wanna hear the real voice of the actors, it's so different.</p>
                        <p>Sometimes when I talk to my mom and she has a movie on the background and she tells me like, oh this movie and it's an American movie that I know, and I'm like, oh, that sounds so interesting. I don't know. It doesn't sound like that movie at all.</p>
                        <p>So, I love subtitles now.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Let's say you watch the movie dubbed, and then when you revisited the movie later in life, did any part of the movie change? Like the way you interpreted a scene or the way you took the movie in when you actually got to hear it in the original language? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It's a good question and I wish I could answer. But, the last time I saw a dubbed movie was probably 10-15 years ago. So, I don't remember if it changed. I can only think of "Titanic," because I saw it many times in the dubbed version and original version. <b className='extra-bolded'>So, Leonardo DiCaprio's voice is dubbed by this guy. And, he would work on all his movies. So, you associate Leonardo with this guy.</b> I still remember his voice. To me, it was really weird to just watch "Titanic" with Leonardo's voice. I remember that was a very interesting experience.</p>
                    </div>
                </section>
                            
                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Titanic</p>
                        </div>
                            <img className="vertical-photo" src={tania_titanic} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Now jumping to New York itself. So, you moved here. Can you talk a little bit more about what your initial journey in America, specifically New York, was like? How did that language learning journey of trying to talk more in English, immerse yourself more in American culture, and having Russian alongside you, what were those like first steps like?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, it was challenging, but also very rewarding. My friend, actually, he is from Dominican Republic. He came here when he was like 14, I think. He mentioned that he watched a lot of cartoons and a lot of things just because he wanted to understand some jokes and references.</p>
                        <p>I'm not gonna lie, sometimes I still feel a little lost. I would follow bloggers from United States and I would just read articles in English.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania in New York</p>
                        </div>
                            <img className="vertical-photo" src={tania_ny} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>But, still, once I arrived, I realized that I didn't really know much. But then I just realized that it's not a disadvantage to me. I can always ask and my background is definitely very different. I just add something to the environment that I'm in. I also learn everyday. It's still a process, I'm still definitely learning. Especially working in this industry, when my co-workers send some jokes.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='p-wrapper full'>
                        <b className='extra-bolded'>
                          Very often, I don't quite understand it and I have to Google it. I like mainstream pop culture, but I feel like I don't really relate to that sometimes.
                        </b>
                    </div>
                </section>
                

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Was it easier to pick up American pop culture slang or the corporate jargon? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like there's really no distinction. We are in corporate, but we live in this entertainment thing. So, we watch TikToks for work, that's very unique. And, I'm very grateful for that because I do it for fun, but I also do it for work and I can bring something to the table. It just happens naturally. This is why I feel like I'm meant to be in this industry. I really love doing this, right, and learning thanks to social media. It's definitely more accessible. And, now, I'm not going to say that I learned a lot from TikTok, but I actually do learn a lot from TikTok. So, I'm not going to lie.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>What's your Russian community like in New York?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania and Russian food</p>
                        </div>
                            <img className="vertical-photo" src={tania_russian} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't speak Russian that much. I feel like when I moved here, I really wanted to cut ties with my Russian background and I just really wanted to immerse myself in this American culture and language.</p>
                        <p>And, it wasn't hard for me to do because I was working at a restaurant and I was the only Russian person. Everyone was American. And, I made a lot of friends and we would go out, we would do things.</p>
                        <p>Then I met my close friend, I met her in LA, but then she moved to New York. And she also introduced me to another friend. So, we're now three of us together and I speak Russian with them. They are my Russian community.</p>
                        <p>But, the rest are mostly American.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania's text messages in Russian </p>
                        </div>
                            <img className="vertical-photo" src={tania_texts} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>A common thing actually for, I think, immigrants and people who speak multiple languages, like I'm not good at English and Russian at this point because I keep forgetting Russian words, and I mix English and Russian. My mom does not understand me because she doesn't know a single word in English.</p>
                        <p>These two really close friends, we understand each other because we speak the same Russian-English mix. When I went to Russia a couple years ago, I was trying to communicate with my Russian friends and they're like, okay, you clearly forgot Russian.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, I know sometimes people feel like they have subtle or sometimes significant personality shifts when they switch between different languages. So, do you feel that when you're speaking in Russian or is it just the byproduct of being with friends who already know you well?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <b className='extra-bolded'>I feel like I'm definitely nicer in English. I have very dry humor, and I think it is a part of my nationality, too. A lot of Russian people, we do have this dry humor.</b>
                        <p>I think I'm funnier in Russian, but also maybe, yeah, it's because it's like a dry humor.</p>
                        <p>I do occasionally meet with friends of my Russian friends, and they're also Russian. It's very important in Russian culture to celebrate New Year's. So, we gather and do it Russian style because it's the most important celebration of the year.</p>
                        <p>And I like doing it. I like this silly tradition. You write your wish on a paper, you burn it, you drop it in a champagne glass, you drink the ash. It's silly, but it's really important to me to do that. </p>
                        <p>It unites us in a way. So, that is my community. I go to Brighton Beach and eat some Russian food. </p>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania in winter</p>
                        </div>
                            <img className="vertical-photo" src={tania_nycsnow} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Brighton Beach has a large population of Russians.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. But, it's an interesting world. <b>I feel like it's Russians, but they're all Soviet Union Russians. It's very old school. And, when I go, I feel like I went back in time.</b></p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I think you alluded to this already, but you had mentioned wanting to cut ties with Russian. But, do you keep up with any Russian media, social media, writers, anything of that nature, just in terms of staying updated to what's going on?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I actually do not. Even when I was in Russia, I don't like Russian pop culture in general. I'm not gonna say I don't like any of it, but there are some bands that I like, but I was never up to date on Russian media.</p>
                        <p>Right now, I have no idea what's going on, but I do follow two channels. So, we have this platform called Telegram. They have channels, so they post messages or post information, like news.</p>
                        <p>I follow two channels and it's still mostly about American celebrities. But, sometimes they talk about Russian celebrities. And, this is how I keep myself up to date on the Russian media or pop culture.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Looking ahead, are you planning to go back to Russia soon?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I would love to go back to Russia just to visit my friends. I don't feel like it's my home to go back and live there. I don't feel that connection. But, I, of course, want to see my family. But, in terms of Russian, I don't think at this point in life, I have any interest in diving deeper into the learning Russian. I think my focus is on getting better and better in English. It's not possible to know everything.</p>
                        <p>So, you can always learn, like you learn until you die. And with any language, even if you're a native speaker, you still learn your language. Because there are so many words that you've never heard of. And, it is so fascinating.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania in Europe</p>
                        </div>
                            <img className="vertical-photo" src={tania_europe} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>If someone were to start learning the language, do you have any advice for them about how they may get into that? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think it's important to read Russian writers, Russian books. It's going to be very challenging because they use those phrases that, if you have a dictionary and you're going to try to translate it, it's not going to make sense. So, it could be helpful to have a tutor and see who would explain those phrases. It could be very vague of what they're trying to say by using those fairly simple and common words, but this is not what they're trying to say. But, I think because of that it is challenging, but it's also very interesting. Like Dostoyevsky, Pushkin. They're really fantastic writers.</p>
                        <p>Even if you're not studying Russian, I think people should read it just because it's great. This tip is not a tip, but if you want to speak, you have to speak.</p>
                        <p>It's just like German. I studied it for eight years and I remember two phrases. And I wish I could really talk. I really don't speak the language, but you really have to practice.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Tania's favorite books: "Crime and Punishment" and "A Hero of Our Time"</p>
                        </div>
                            <img className="vertical-photo" src={tania_crimepunishment} alt="" loading="lazy" />
                            <img className="vertical-photo" src={tania_ahero} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>That's a wrap. Thank you so much for coming on to the pod.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I just wanted to say thank you so much for having me. I had a great time! </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Tania

export const Head = () => <title>Tania Varganova Interview</title>
