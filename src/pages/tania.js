import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"

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
                        <p>Hello and welcome to <b className="bolded">Found in Translation</b>. I'm your host Guru Ramanathan and this is a podcast where people who are first, second generation, and immigrants come on and talk about their relationship with their cultural language and how that has influenced their relationship to their culture, family, friends, and more.</p>
                        <p>This week's guest is a good friend of mine and a co worker. First time I've had a co worker on the show. And her name is Tanya Varganova And I will let her introduce herself.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <h3>The Guest<br /><span className="first-name">Tania Varganova</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>Hi. Hello. Thank you Guru for pronouncing my last name correctly. Varganova. Actually it's not correctly because it's Varganova in Russian pronunciation. But Varganova, that's like the American way. And I feel like I even myself call myself Varganova. So that's weird. But yes, my name is Tanya.</p>
                        <p>I was born in St. Petersburg and my pronouns are she, her, and I'm very excited to be here.</p>
                    </div>
                </section>

                <div className='cue'>~ interview begins ~</div>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Amazing. I think first we'd love to begin with your upbringing in Russia. What was that connection to Russian and English, like, when you were growing up, and were you in a household where they spoke a mix of Russian and English or additional languages, or was it just specifically Russian?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>That's a great question, and I actually was chatting with my mom about this because we're going on vacation and my mom does not speak English at all, so I grew up in a very Russian speaking family. I always loved languages in general. I feel like It wasn't really easy for me to learn the grammar, even Russian grammar you have to study it in Russian schools, and one other language, and usually it's either English or German I studied English, so it's like when you go to school you study Russian and English at the same time.</p>
                        <p>And when I say, studying Russian that means like the grammar specifics and how to write properly you write like a lot of essays, and I feel like, I always struggled with it, even though I wanted to be a journalist, but I just sometimes, it's I just couldn't get some of the rules. It was really interesting for me to learn, and I was a really good student, so I was always reading books, and doing research I know my mom, for example, she always was really great in grammar, and she didn't study that much, but it came to her naturally.</p>
                        <p>So that was like a very interesting thing for me growing up. That I really had to I had to study even my own native language.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like it was complicated, but with Russian specifically it was important for me to understand the background of the language, because we have a lot of really excellent writers, and they were so equipped in using this language as such a great and powerful tool and so that was very important for me to get a gist of this, and that's why I was reading and learning. I really wanted to be a journalist it's a complicated relationship but it's definitely an interesting one.</p>
                        <p>My mom only speaks Russian. And she's very reluctant in learning even a couple of words in English. I don't know why, but I told her like just to study a couple words that you would need to use when you travel. For some reason she just .Says, Nah I can't. So she really relies on me.</p>
                        <p>I feel like the older you get the harder maybe it is to learn just because you have so much like information and you have work and things. I studied learning Italian and I'm really struggling with it and I think I'm going to give up because It's just, it's hard for me to memorize words I don't know, maybe I'm not paying attention enough, but I like watch those videos and then I completely forget everything they said.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>But I feel like also German and English, they're very similar. So when I was studying English and German at the same time, I kept confusing words because they're very similar. So I would use English words during my German classes and I'd be like, wait no, this is English and then when I was like studying English, like in English classes, like I would use German words and it was such a mess in my head.</p>
                        <p>So I understand why it's definitely challenging to learn, especially languages that are a little bit similar and that could be confusing. I think I should go back to German, maybe. I should definitely give up on Italian and just go back to German, maybe</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And when you were, growing up, did you guys have Russian mediums or English medium schools or universities, or was, everything predominantly Russian? And I guess in terms of the way you were taught or the way you maybe interacted with your peers, was there A mix of like different languages or everyone was exclusively just talking in Russian for the most part.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I feel like everyone was exclusively talking in Russian. I loved English, and I had this goal to move to New York since I was like 13 probably, so I was maybe trying to talk in English to people, but I feel like most of my classmates, for example, in school, they didn't, also, I went, I studied.</p>
                        <p>I went to the math school, so a focus on math and physics, and some other subjects that are not languages. I feel like my classmates didn't really care that much to learn and I was like the best student in English and they would just ask me questions. And I was so passionate about this and I was like, of course like I will explain how you build out sentences in english. I don't know if you have this in america, but we had days I think like once in three months In school you would go to So if you were in middle school, you would go to the elementary school and you would play teachers for a day only. And I always chose english and I was an English teacher for a day and it was so fun. But I feel like all my friends, it wasn't a priority for them. And, yeah, I feel like I was always just very obsessed with English and New York and everyone else wasn't really into that.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I think it'd be great to understand more of just what Russian is like as a language. Obviously this isn't like linguistic class or anything, but if you could give more of a sense of what the grammar structure is like, or alphabet structure, stuff like that.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>for sure. I want to say that my main struggle actually with English was that English has a lot of different tenses. Russian has only three. It's a future, past, and present. To me, I still don't sometimes understand when I should be using I have been, like, it's very confusing, I think, for all Russian people because it's either, it's in the past or in the future or present.</p>
                        <p>And then the alphabet is, I feel like very different. We have one letter that you can't even pronounce it. It literally just makes the, and a letter, the letter before that softer and it looks really weird it is definitely different, very different from English.</p>
                        <p>And also, important thing that I personally struggle with is articles. We don't have. I think we don't, yeah, we don't have there's no A and the which is also very confusing to me. In overall Russian, we have a lot of adjectives.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>If I were to describe Russian language, I would probably say we use, yeah, a lot of adjectives, but also It's like a song sometimes, like they use, and I keep thinking about writers, like famous writers like Dostoevsky and Tolstoy. The way they build sentences, and this is the goal, like this is what, if you're a writer especially, or if you want to sound eloquent, this is the goal of how to build out those sentences. They use a lot of I don't know that word.</p>
                        <p>I don't know how to explain that. They use words that don't make sense, but they only make sense for Russian people. If you read a sentence and it says table, if you're not native speaker, you will probably don't understand the sentence because it's like, it looks simple, but for Russian people it means a very different thing.</p>
                        <p>So I think that's why russian literature is very Unique in terms of words because they use a lot of them and when I was reading the seagull . I was actually working on helping my friend who was in the production of the seagull by Chekhov and she made me read the seagull in english and russian and compare. And there were some things that I could not explain because They don't make sense to person who doesn't speak Russian.</p>
                        <p>This is what I can tell you about Russian without going into deeper questions about linguistics, but yeah.</p>
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
                        <p>I grew up in St. Petersburg, which is a very beautiful city with a lot of gorgeous architecture and history behind it. It's really beautiful</p>
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
                        <p>Not a tone, definitely, but slang -I know that there are some differences between the words that people from Moscow would use. Specifically there's one word it describes the entrance into the building. And we have one word in people who grew up in St. Petersburg, but people from Moscow use a completely different word. And I think there's a little Beef between people from Moscow and St. Petersburg and they would make fun of each other and they would be like, oh, okay he's that word. So he's from Moscow. It's a little bit like LA and New York. People who grew up in St. Petersburg probably don't want to move to Moscow. They're no this is our city and this is the best city and people from Moscow are the same. I think maybe there are about 40, 50 important words that are very different, but in terms of pronunciation, or tone, I don't think there are differences in terms of accents. I don't think we have accents.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I was gonna ask that because I was wondering if not obviously the same, but something like in America where if someone's from the South, they might have that little Southern slang and you can tell they're from the South. But that's not the case in Russia.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>yeah, I don't think it's the case. It's only about those certain words that you would use. People from bigger cities can seem snobby sometimes, and they can make fun of people who are from smaller towns.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And then transitioning into the English passion and the New York dream , how did that start and was it, did one come first where it's like you're trying to learn English, getting more exposed to America and New York and that was the journey or is it like the other way around or simultaneously?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I was really into movies. I would watch a lot of American movies and specifically remember that movie, what's it, New York Minute with the Olsen sisters. I was very inspired by it and I remember they were really popular when I was growing up.</p>
                        <p>So, I Would watch those movies and I would be like, okay, like I really want to go and this looks so cool. And I had this dream to move to New York. I thought it was like a universal mistake that I was born in Russia Like I was supposed to like New York is my home. I set the goal in mind around when I was like 11 or 12, as long as I remember, like I was always dreaming about it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like the education in Russian schools, especially in English, it wasn't I didn't feel satisfied with the course of the English language and I wanted some to challenge myself and learn more words and be really advanced in English. I didn't just want to know basic phrases because I knew that I would eventually move. So you can take after school classes. The teachers would have after classes. It's like extra gigs that they would do. I don't know if that's a thing in america, But if you like wanted to learn more and that could be like for any</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>subject.</p>
                        <p>They have tutoring, cram sessions,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>tutoring. Yeah So I always had a tutor after school. When I was In high school and I was really saving money For my trip. I was very close to moving and of course, I wanted to be Excellent in english. I went to english first and I think it's a very like popular school And I see a lot of kids like on the streets of new york actually from english first. They have like little badges so it's like an international english school and they had native speaking English teachers. It was really great for me because I really wanted to hear the pronunciation and learn the accent.</p>
                        <p>And then I moved to LA in 2015 because there was a student exchange program between Russia and United States. And if you're a student, you can go to the United States and to work like at a restaurant or at a hotel. And the idea was to work to make some money and then you would have a month or two to just to travel. It's called work and travel.</p>
                        <p>I went to LA and I spent three months in LA, and then I did not like LA, then I, yeah, it definitely wasn't anything that I imagined. And then I went to New York as a tourist just to see what's up and I fell in love. I went back to Russia to get my master's, I actually studied engineering and medical physics, this is very very far from journalism or PR.</p>
                        <p>But then I came back to New York and, stayed here to pursue my dream. But yeah, I kept learning English, and even now I learn it every day. I have a little book where I write all the words. I still write it. I still, when I read books, like I always take screenshots of words.</p>
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
                        <p>have six books right now with words. I wish I remembered all of them. Memorized all of them. I just write it down and try to learn.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Are these words that when you're reading a book or in conversation, are these words that you just find to be interesting or unique or, what's ticking you off that it needs to get written down or not.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I write everything. If I don't know a word, I write it down. If, sometimes, there are some words that they don't make sense. I actually showed it to my American friend and she was like, yeah we don't use this word. This is literally this is not, you would only use it if, if you write a book or a philosophy book.</p>
                        <p>And I was like, okay I won't be using it. But, usually when I see a word I try to write it down, just in case, you never know. And I can always just open it and just like look at it and try to memorize. Yeah everything you say, it all goes into the book.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And I actually wanted to talk about the movie journey as well. One when you were watching the movies, was it an American film that was dubbed into Russian or American movies, but English subtitle.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, dub dub, unfortunately. But then, growing up, if you go to a movie theater, you would definitely watch a dub movie. But then, once we had, full access to social media and YouTube and stuff, so I started watching movies in English with subtitles. It was so different. Even now I can't watch dubbed things. Even I'm watching this like French show that you recommended. And, yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Oh, nice.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. And I watch it with subtitles because I wanna hear The authentic, the real voice of the actors, it's so different.</p>
                        <p>So now I sometimes I'm like when I talk to my mom and she has a movie on the background and she tells me like, oh this movie and it's an American movie that I know and I'm like, oh, that sounds so interesting. I don't know. It doesn't sound like that movie at all.</p>
                        <p>So I love subtitles now, but growing up, you have to watch, a lot of dub things.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>and let's say you watch the movie in dubbed and then when you Revisited the movie later In life like did any parts of them? I don't know if you have any specific examples in mind, but did any part of the movie change? Like the way you interpreted a scene or maybe that scene used more American slang or some other figure of speech or just the way you like took the movie in when you actually got to hear it in the original language versus the dubbed language.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It's a good question, and I wish I could answer. But the last time I saw a dubbed movie was probably 10 15 years ago. So I don't remember if it changed. I can only think of Titanic, because I saw it many times in the dubbed version and original version. And I just remember it was really weird to me because in Russian media, they don't really have film industry . But they have a couple people who would do the dubbing of the movie. So Leonardo DiCaprio's voice is dubbed by this guy. And he would work on all his movies. So you associate Leonardo with this guy. I still remember his voice. To me, it was really weird to just watch Titanic with Leonardo's voice, because I was like, this does not sound like him, that's definitely not his voice. His voice is this Russian dude. I remember that was a very interesting experience.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Now jumping to New York itself. So you moved here. Can you talk a little bit more about what your initial journey in America, specifically New York was like? How did that language learning journey of trying to, talk more in English, immerse yourself more in American culture and having Russian alongside you, what were those like first steps like?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>yeah, it was challenging, but also very rewarding. My friend, actually, he is from Dominican Republic, and he came here when he was like 14, I think, and he mentioned that he watched a lot of cartoons and a lot of things just because he wanted to understand some jokes and references.</p>
                        <p>I'm not gonna lie, sometimes I still feel a little lost. I tried to immerse myself in American, and I feel like I was really immersed, and since, even in Russia, I would follow bloggers from United States and I would just read articles in English I had my finger on a pole, so</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>in terms of like media and film. But still, once I arrived, I realized that I didn't really know much. Then I just realized that it's not a disadvantage to me. I can, always ask and my background is definitely very different. I just add something to the environment that I'm in.. And I also learn everyday. It's still a process, I'm still definitely learning, and especially working in this industry, when my co workers, they mention, or send some jokes. Very often, I don't quite understand it, and I have to Google it, and then I have to understand. And I don't, I like mainstream pop culture, but I feel like I don't really can relate to that sometimes.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I feel like for PR specifically, or sorry, entertainment PR specifically, I feel like there's this mix of needing to know, pop culture, like TikTok trends. But I think there's like a mix of that. And then there's also the corporate jargon too, that, we needed to pick up at the same time. But was it easier to start to pick up American pop culture slang or the corporate jargon and whatnot.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like there's really no distinction. We are in corporate, but we live in this entertainment thing. So we really, we watch TikToks for work, that's very unique. And I'm very grateful for that because I do, do it for fun, but I also do it for work and I can Again, bring something to the table. It just happens naturally, This is why I feel like I'm meant to be in this space Industry and because I feel it just happens naturally. I really love doing this right and Learning thanks to social media. It's definitely more accessible. And now, I'm not going to say that I learned a lot from TikTok, but I actually do learn a lot from TikTok. So I'm not going to lie. Yeah</p>
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
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Two Russian friends, very close friends. I don't speak Russian that much. And I feel like when I moved here, I really wanted to cut ties with my Russian background and I just really wanted to immerse myself in this American culture and language.</p>
                        <p>And, it wasn't hard for me to do because I was working at a restaurant and I was the only Russian person. Everyone was American. And I made a lot of friends and we would go out, we would do things.</p>
                        <p>And then I met my close friend, I met her in LA, but then she moved to New York and she also introduced me to another friend. So we're now three of us together and I speak Russian with them and with my mom on zoom. They are my Russian community.</p>
                        <p>But the rest are mostly American.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>A common thing actually for, I think, immigrants and people who speak multiple languages, like I'm not good at English and Russian at this point because I keep forgetting Russian words and I mix English and Russian. My mom does not understand me because she doesn't know a single word in English.</p>
                        <p>These two really close friends, we understand each other because we speak the same Russian English mix, like this, yeah and they don't they don't make fun of me, I don't make fun of them for that, because when I went to Russia a couple years ago, I was trying to communicate with my Russian friends and they're like, okay, you clearly forgot Russian.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah, I know sometimes people feel like they have subtle or sometimes significant personality shifts when they switch between different languages. So do you feel that when you're speaking in Russian or is it just the byproduct of being with friends who already know you well?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like I'm definitely nicer in English. I have very dry humor, and I think, It is a part of my nationality, too, because a lot of Russian people, we do have this dry humor. And, I feel like we could be the driest we can three of us as, and there's no way to just, we just don't think about this. I think I'm funnier in Russian but also maybe, yeah, it's because it's like a dry humor.</p>
                        <p>I do occasionally meet with friends of my Russian friends, and they're also Russian sometimes we like get to, it's very important in Russian culture to celebrate New Year's. So we gather and do it Russian style because it's the most important celebration of the year.</p>
                        <p>And I like doing it. I like this silly tradition to just do a little, like you write your wish on a paper, like you burn it you drop it in a champagne glass, you drink the ash, like it's silly, but it's really important to me to do that and I feel like for them as well because we're all come, from the same country.</p>
                        <p>So it's unites us in a way. So that is my community and since I didn't go to Brighton Beach and eat some Russian</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>The Brighton Beach has like a large population of Russians</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>yeah. But it's a it's an interesting world. I feel like it's Russians, but they're all like Soviet Union Russians. It's very old school. And when I go, I feel like I like went back in time.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And I think you alluded to this already and but you had mentioned wanting to cut ties with Russian , but do you keep up with any Russian media, social media, writers, anything of that nature just in terms of staying updated to what's going on?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>actually do not. And even when I was in Russia, I don't like the pop culture, Russian pop culture in general. I'm not gonna say I don't like any of it, but there are some music bands that I like, but I was never up to date on Russian media.</p>
                        <p>Right now I have no idea. What's going on, but I do follow two channels. So we have this platform it's called telegram. It's like WhatsApp but I think it's, yeah, like it, it was built by it was created by a Russian guy, IT guy. And they have channels, so you can essentially, they post messages or post information, like news.</p>
                        <p>Kind of. I follow two channels, and it's mostly about, it's still mostly about American celebrities. It's do you want gossipy thing. But sometimes here and there, they talk about Russian celebrities. And this is how I keep myself up to date on the Russian media or pop culture.</p>
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
                        <p>I would love to go back to Russia just to visit my friends. I don't feel like it's my home to go back and live there. I don't feel that connection. But I of course want to see my family. But in terms of Russian, I don't think at this point in life, I have any interest in diving deeper into the learning process, of Russian or I think my focus is on getting better and better in English. Because it's not possible to know everything.</p>
                        <p>So you can always learn, like you learn until you die. And with any language, even if you're a native speaker, you still learn your language. Cause there are so many words that you've never heard of. And it is so fascinating.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And then if someone were to start learning the language or was interested in learning the language, do you have any advice for them about how they may Should get into that. Just in terms of Oh, if you're going to start learning this, maybe have these tips or nuances in mind before you jump into it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Tania</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think it's important to read Russian writers, Russian books, and it's going to be very challenging because they use those phrases that, if you have a dictionary and you're going to try to translate it, it's not going to make sense. So sometimes it might, it could be helpful to have a tutor and see who would explain those phrases because it could be very vague of what they're trying to say by using those Very fairly simple and common words, but this is not what they're trying to say. But I think because of that It is challenging, but it's also very interesting. Like Dostoyevsky, Pushkin. They're really fantastic writers.</p>
                        <p>Even if you're not studying Russian, I think people should read it just because it's great. And, I always You know, this tip is not a tip, but if you want to speak, you have to speak.</p>
                        <p>It's just like German. I studied it for eight years and I remember two phrases. And I wish I could really talk. I really don't speak the language, but you really have to practice.</p>
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
                        <p>I just wanted to say thank you so much for having me. I had a great time.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Tania

export const Head = () => <title>Tania Varganova Interview</title>