import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"
import cristina_family from '../images/cristina/cristina_family.jpg'
import cristina_germangrandparents from '../images/cristina/cristina_germangrandparents.jpg'
import cristina_germanfriends from '../images/cristina/cristina_germanfriends.jpg'
import cristina_filipinofamily from '../images/cristina/cristina_filipinofamily.jpg'
import cristina_germanfriends2 from '../images/cristina/cristina_germanfriends2.jpg'
import cristina_sistergermany from '../images/cristina/cristina_sistergermany.jpg'
import cristina_germanfood from '../images/cristina/cristina_germanfood.jpg'
import cristina_germanemail from '../images/cristina/cristina_germanemail.png'
import cristina_joselyn from '../images/cristina/cristina_joselyn.jpg'
import cristina_joselyn2 from '../images/cristina/cristina_joselyn2.jpg'
import cristina_philippines from '../images/cristina/cristina_philippines.jpg'
import cristina_filipinofamily2 from '../images/cristina/cristina_filipinofamily2.jpg'
import cristina_postdam from '../images/cristina/cristina_postdam.jpg'
import cristina_sd from '../images/cristina/cristina_sd.jpg'
import cristina_sister from '../images/cristina/cristina_sister.jpg'
import cristina_sdfamily from '../images/cristina/cristina_sdfamily.jpg'
import cristina_trip from '../images/cristina/cristina_trip.jpg'
import cristina_trip2 from '../images/cristina/cristina_trip2.jpg'

const Cristina = () => {
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
                        <p>Hello and welcome to <b className="bolded">Found in Translation</b>. I'm your host Guru Ramanathan and this is a podcast where we talk to people who are first, second gen, or immigrants about their relationship with their cultural language and how that has influenced their relationship to their culture, family, friends, and more.</p>
                        <p>This week's guest is Cristina Hain, who we have go, I think all the way back to the sixth grade. And then we're also roommates. And so one of my longest friends, I have forced her to be in my short films. I made her a guest on my previous podcast. So it was only inevitable that she would come on this one too.</p>
                    </div>

             <div className='cue'>~ interview begins ~</div>

                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <h3>The Guest<br /><span className="first-name">Cristina Hain</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>My mom is Filipino and she's an immigrant, and my dad is fully German from the US. And so, that meant that at home, we only spoke English. But, my parents spoke more languages. My mom, since she grew up in the Philippines, is pretty fluent in Tagalog and then knew some Spanish.</p>
                        <p>And my dad knew German a little bit growing up, so he tried to teach us some. And we learned a little bit, but not as much.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So yeah, I know you, you had the presence of Tagalog and German, and I think it would be cool to dive into what that mix of cultures growing up was like, but I know for this specific episode, you're gonna be talking more about your experience with German. What was your connection with German in your childhood, and how did that play out when you were growing up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>My dad is an only child and he grew up with my grandparents, who were both fully German. My grandmother moved to the U.S. post-World War II, and so she grew up in Germany. My grandfather knew enough German to get around because his parents spoke it. And growing up, my dad also knew German, and my grandmother was a flight attendant for Lufthansa. And so, that meant that traveling was more accessible to them. So, my dad went back to Germany every year. And so, he really worked on his German then. And so, that was very important to him growing up. And when we were born my dad wanted to keep that going, or he wanted us to learn a little bit, too.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina's family</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_family} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>So, we had piano lessons that were 30 minutes away. I remember in growing up, he would put on German learning books I want to say, or we'd listen to something called like Superkatze, which would teach us basic German. <b className='extra-bolded'>We tried to learn German. We did not succeed. I remember I was really proud because I could count to 12 in German and that's where my German excelled when I was in elementary school to middle school. And then dropped off until college for me.</b> I got a minor in linguistics at school and I really loved the idea of learning languages.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And then I decided that for my first summer after college, I wanted to go focus on the language. And I was deciding between Spanish and German. And I said, you know what? I want to learn more German. <b className='extra-bolded'>I am half German. I think it's important. And I went to Berlin for four weeks and I took that German class, and it was really fun for me. I thought it was really great to be able to come back. I tried to speak a little bit with my grandmother. Really I wrote her postcards because I was too embarrassed to try to speak cause my accent's not great.</b></p>
                        <p>And that was the time that I was most knowledgeable of German. I do not say fluent, definitely not fluent. But able to get around, I was able to navigate the airport and ask people where I was supposed to go and that was great. And coming back and having that experience was awesome to be able to connect with my grandmother because she wanted to talk about the things I saw and the things that she remembered.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina with her German grandparents</p>
                        </div>
                            <img className="vertical-photo" src={cristina_germangrandparents} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Granted, she wasn't in Berlin. She's from the south of Germany. There's still lots of differences. And especially with language too, because South German, like she's from Bavaria. So, she just had different dialects because, even like within Germany, as people might know the dialects are just so varying and so different. So, coming from all the way from the northeast to where she lived, which was more like southwest. But, that was really fun for me to speak with her about it.</p>
                        <p>And then I love Germany so much that I had to go back the next year, so then I went back. And I tried to do a little bit of German. Everyone knew I didn't speak German in Berlin. And Berlin's such a melting pot that they said, don't even bother trying. We're just going to speak to you in English. And I said, that makes sense to me. And that is where I stopped learning German, but to keep it around randomly.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina with her German friends</p>
                        </div>
                            <img className="vertical-photo" src={cristina_germanfriends} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>At the time of this recording, my mom's actually in Germany right now. She literally just arrived there last night in Berlin. She's also gonna check out Munich and Nuremberg, and I think one other place. But yeah, she is a big history nut and had always been wanting to go to Germany.</p>
                        <p>Going back for a second, since you didn't necessarily know German growing up, and then also with Tagalog, how did that affect your relationship with some of your relatives who were from those respective countries?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                            <p><b className='extra-bolded'>Reflecting back on that, there was never a time where I think I felt bad for not knowing Tagalog or knowing German, or even Spanish in some capacity, because my mom said that growing up for her in the Philippines, she said they speak Spanish at home. Which is so funny because her Spanish is, I love my mom, Spanish is bad. Her Spanish is bad and we make fun of her every time.</b></p>
                            <p>And so she tried to put us in a Spanish camp for a week. And we tried to learn, but she didn't force us to go. We said we didn't like it being the young kids that we were, we didn't want to go to school, and then she just... We just never continued with it, and so we lost any of it. We also tried to do a Tagalog class, too, I want to say, with our family friends.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>That never took off. I remember absolutely none of that. I know we did it, and there was some vague memories, but no Tagalog did we learn. And then, as far as familial stuff goes, I'm very close with my Filipino family. Not that I'm not close with my German family, but my dad, like I said, was an only child.</p>
                        <p>I saw my grandparents enough, but it was different when my mom has two siblings and they have children and we had our cousins and they lived less than 15 minutes from us. So, growing up, I was around them a lot. But, they didn't speak really any Tagalog. My mom, especially to us, didn't speak Tagalog.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina with her Filipino-side of her family</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_filipinofamily} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>She only spoke it with her mom. Not even with her sister who I see a lot too. And I think I didn't notice it until we grew up. And then when I've met my extended family, cause especially with the Philippines, everyone's related. Somehow you're related to someone. And, other people knew more Tagalog than us. I still feel a little self conscious just being like, oh, do I know what you're saying?</p>
                        <p>Do I know enough words? And I know random words and random things. And I can make sense of things going on and especially intonation. <b className='extra-bolded'>So, when I'm with immediate family, I don't feel bad. When I'm with my more extended family, I feel sad. Like I would love to be able to speak another language.</b></p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think it's so cool. I think language is such a cool concept. Yeah, so Filipino side, definitely, like maybe slightly more aware. More as I got older. German side...because it was just really me and my sister who were there, it wasn't a super big deal. And then when I remember when I was learning German, I was really excited to show that to my grandma.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And with your linguistics studies in college, could you talk more about what specifically you were studying there in terms of, was it specifically about using German as a case study and breaking down the linguistics of that, or was it also a broader science of understanding the way language impacts identity and culture?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>The reason that I got my certificate in linguistics was because my parents were like, no, don't learn a language in college. Don't do that. That's a waste, not a waste, but there are so many other classes to take in college. Focus on those as opposed to learning a language, even though the language program was so good.</p>
                        <p><b className='extra-bolded'>For linguistics, what's spurred my interest was definitely the idea of the way languages function, or how they put into a formula. Because I'm an engineer. I love math. I love formulas. I love knowing how things go. I like the logic games. And the way that languages are formed, the way that English is formed, it's like subject, verb, noun, verb.</b></p>
                        <p>Whatever, you can rearrange everything. And I used to be better about all these like different grammar terms and all this stuff and how you can form a sentence. There's so many ways to form a sentence. That's so cool. German, you smush everything together, right? You start just explaining do you want to talk about a bull, and so it's a little bull, it's a little blue bull, and you just add it all together at the end. But the sentence structure is always subject verb. You always have to have the subject verb.</p>
                        <p>The first verb, and then you have put in everything else, and then if it's like a compound verb Oh, I want to go running in the park, it would be, I want in the park to run. I think. Pretty sure. My German is not great, but that's what I remember learning and thinking, Oh, that's so weird.</p>
                        <p>And I also liked, like my concentration was operations research and financial engineering, which meant I liked optimization. <b className='extra-bolded'>And I thought, what is the optimal language? How do you get optimal information? What is that structure? What is that sentence?</b> Because in English, especially with my sister, the way that we communicate is rapid fire.</p>
                        <p>That's also probably based on growing up, but I see where your thought's going. I'm going to go ahead and start my sentence on what you would say based off of that. In German, because you don't know, because you have to wait for them to say that second verb or whatever it is to complete the sentence, you actually have to wait for them to stop talking. They have to complete the sentence. And so I'm like, is that optimal? I don't know. I'm like, what is the best thing? And then obviously I took a bilingualism class in college, which was directly talking about this stuff and talking about, Oh, like code switching what does bilingualism mean? How all this stuff happened.</p>
                        <p>We were talking also about the idea of gender in languages, which doesn't need to be a thing, it's like weird that you gender objects. German just has the neutral gender. So there's three genders and you're just like, Oh my gosh, there's so many rules and that's just German. There's so many rules. And then English has so many exceptions and then Tagalog too.</p>
                        <p>Tagalog is just whatever. Like you just, there's no structure. You just say things. That's what my aunt said. So it's just what makes it like, what makes like, how does the language stick? I don't know. Like why? I don't know. It's so cool. I don't know.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I don't know. I guess that idea of the optimal language, I never really thought about it that way, but I guess it depends on how you are defining optimal because I guess in what you're saying, if it's about, How efficiently are you sharing the ideas? That's one thing, but then the German way as well, in terms of if you need to wait for the other person to finish, then that kind of feels like more effective.</p>
                        <p>In theory it sounds like more effective communication of I need to not cut someone off and actually have a proper, like you talk, I talk conversation.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>On the podcast, we've spoken a lot about how language can be this gateway to the broader culture and sometimes how much the language affects for some people can affect like how close their proximity to the culture. And I was curious if you had any thoughts on that based on your experience actually being in Germany, in terms of how close you felt to the actual German identity, essentially.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, I think for me being in Germany was an awesome experience. Just I love traveling too. And so being there, being in a new place, being somewhere different was really exciting and it was my first sort of big thing by myself. Being half German, I was like, oh my gosh, this is so cool. I am here.</p>
                        <p>Granted, I wasn't in the area that I'm from, and so my dad and my grandma, or my dad especially, my dad, my dad likes his, where he's a proud southern German man, likes being from Bavaria, likes having the flag and his pretzels, whatever.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina with her German friends and teacher</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_germanfriends2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think being in Berlin, I think being in any major city Berlin, New York I was like, I don't know, like LA, like what are those? Like a melting pot sort of, of all these different cultures coming together. It feels it feels fun to be there because not that I didn't feel embraced into the German culture, but when I think of Germany, I think of my dad. I think of our family trip to Germany in third grade when we went to Munich. Munich feels very stereotypical during what people think of in the sense that they have Lederhosen, Oktoberfest, the beer gardens, the full on get up, the Glockenspiels that come out, and the clocks, and it's super fun.</p>
                        <p><b className='extra-bolded'>But being in Berlin, it felt more industrial, felt more, you're moving on the go, life is happening. It's just a city in Germany where people speak German, but because it is such a melting pot, everyone speaks English. So I remember trying to speak German, they were like, you don't speak German. So they would just respond back in English, and I said, that's okay, I'm just gonna keep speaking in German to try.</b></p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her sister in Germnay</p>
                        </div>
                            <img className="vertical-photo" src={cristina_sistergermany} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Which was fun, and then most of them would just say no, and then I remember I had a flight. And there was an airport strike. I was like, I can't get to Munich. And I was on the phone with the agent and he's what's your last name? I said, that's Hain. And then he's he starts speaking to me in German.</p>
                        <p><b className='extra-bolded'>He's Oh, it's that's a German last name. You can't speak. I was like, no, I cannot go to an over the phone conversation.</b> That's about rescheduling a flight in German. So I guess to answer your question, very roundabout way of doing it was that in Germany, I felt, I'm going through the tier gotten, I'm going to get a pretzel, there's a beer, there's stuff around me that feels German. But it didn't feel like my idea of Germany. If I had been in Munich, I think that might've been different.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Like I said like languages alone are different. The food is also different. The stuff that my grandmother cooked way more I feel vinegary and like the spritz low that is more southern Germany than northern Germany. They have there's the currywurst which is basically a hot dog with like curry sauce on it Versus like the bratwurst that I'm used to. Goulash that my dad likes I found that more in Southern Germany versus in Northern Germany.</p>
                        <p>The food style is a little bit different. And so I was like, oh, this is like a new thing of Germany that I'm experiencing. And that was cool. I think, yeah, the subcultures within Germany are really interesting. I don't know too much about all of them. But, yeah. That kind of answers your question.</p>
                    </div>
                </section>

                 <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>German food</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_germanfood} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>and the fact that they spoke a lot of English there. I know you said you were still trying to like practice your German, regardless, but were you expecting them to have a good mix of English there or did it catch you off guard in terms of how you were trying to immerse yourself?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. I definitely think I went into it being, I'm going to come out so good in Germany. I think when I like commit to things, I'm like, oh my gosh, this is so exciting. And then sometimes I forget to think things fully through and then I was like, logically No, I'm not going to become fluent in German in four weeks.</p>
                        <p>That makes sense. But I was really excited about it. And I think had I gone to a more rural town, so to say, I definitely could have progressed more and more. But Berlin being the major city that it was, it took me back. Like I was surprised. I was like, Oh, I didn't expect this, but also it was comforting because I was like, Oh, what I'm doing is a little scary.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I didn't know anyone in Berlin. My program hadn't started. I was like, what's going on? It was good because I wanted to have that sort of ease into experience. I did really want to go and I did really want to become great in German and it was a college summer program where people were like, Oh my gosh, we're in Germany.</p>
                        <p>We're in Europe for this summer. We're not trying that hard necessarily. And I totally went in with the expression no, we're going to try so hard. We're all going German. And I was like, Oh, that was just me being the little study bug that I am. And I was like, okay, so I pivoted and had a different experience, which I enjoyed and it made me want to go back.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And I did go back. But yeah, I was definitely a little surprised. And I made really great friends who still live in Germany. I love them so much. I actually really do need to text them back today. I was thinking about that and I keep forgetting. Because of them, I've kept up talking with them, and I tried to speak more German straight after I left, I was like, we're speaking in German, we're texting in German, when I had questions about German, I asked them and that was really fun for me. I went to concerts with them when I went back. I went to this really interesting had a saxophone, it was like, I don't even remember what the band was called, but I was like this feels right, this feels like I'm Germany doing some crazy random music.</p>
                        <p>But then when I came back to the States, my dad was like, we're going to watch this German movie. We're going to watch this German movie. So my dad will be like, no, this is cool. We should do this.</p>
                    </div>
                </section>

                 <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina's German email</p>
                        </div>
                            <img className="vertical-photo" src={cristina_germanemail} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So you also learned Spanish growing up. I think when I took AP Spanish, weren't you the TA for my class? Am I making that up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I took AP a year earlier. Yeah. Yeah. But how much do you know Spanish now? My Spanish is definitely Okay, so I feel like it went on like a you cannot see, but my like, I'm doing like a nice little wave thing. Up and down, rollercoaster, so fun. So in high school, it was really fun, and I did it, and then I went to college, and I was not doing anything in Spanish for solid two years I guess.</p>
                        <p>And then my sister studied abroad in Costa Rica in 2022. And she got back into it and I was like, yeah, I should. So she went to Costa Rica, she learned, and her teacher said, I'll still teach you. We can just do Google meet. And she got me to do those two. So then basically from, I want to say September 2022 or no, July 2022, until honestly, I'm theoretically still in them right now. I'm doing Spanish lessons.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her sister with their Spanish teacher</p>
                        </div>
                            <img className="vertical-photo" src={cristina_joselyn} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I have not done one in a couple of months. That is entirely on me. And I do want to keep doing them, but my Spanish has been more around, more helpful. I feel more confident. I know more tenses. I know how to say things. And I feel like I can definitely get around if I need to. Not even if I need to, I could do that sophomore year of college, but like I could have an actual conversation, especially when I feel comfortable.</p>
                        <p>I went to Mexico last year and was able to do that. I was in Costa Rica visiting my Spanish teacher in February because she had a baby. And the fun thing about her is she doesn't, she's not fluent in English at all. She only speaks Spanish.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her sister with their Spanish teacher</p>
                        </div>
                            <img className="vertical-photo" src={cristina_joselyn} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>So she's teaching us Spanish only from speaking Spanish. So in that hour and a half, like we're only in Spanish mode and I'm comfortable enough in Spanish. I wouldn't even say I'm fluent, but I can definitely get around.</p>
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her sister with their Spanish teacher</p>
                        </div>
                            <img className="vertical-photo" src={cristina_joselyn2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Given that you're A) biracial and then B) had this touch and go relationship with the respective languages growing up, do you feel closer to any one side of your identity and has your journey with said languages influenced where you stand on that?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p><b className='extra-bolded'>I think growing up I would have said I feel so Asian. I feel very Filipino. I feel like that was just who I was. I was a Filipino girl. I was Asian. I thought that's what everyone thought of me too. And I recognize, I am very white passing. I know that. And I definitely have come to terms that too, as I've gotten older and not really thinking about it.</b></p>
                        <p>But when I was little, I was like, no, my look at my mom, like I am Asian. What else do you want from me? And realizing that people don't necessarily see me and think, Oh, she's Asian was, also just the fact that especially like Filipino culture versus German culture, Filipino culture, we're loud.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Young Cristina in the Philippines</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_philippines} alt="" loading="lazy" />
                    </div>
                </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>We have big families. We get together all the time. Like it's just, it's so informal in some senses, which just feels right to me and the way that I grew up. And having my cousins live less than 15 minutes from me and seeing them all the time. It just makes sense. Yeah, like this is who I'm seeing.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina's Filipino-side of her family</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_filipinofamily2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div>
                        <p>Then when I went to Germany and I like really was there and I was like, no, like I love germany. <b className='extra-bolded'>I love being German. I love the efficiency. I love the on timeness. I love the U Bahn, the S Bahn. My vote is like the chef's kiss best.</b> I was like, wow, no, like I am German. I recognize that I look just more white. And I love German food, which is definitely a hot take. And also as someone who was vegetarian and no longer. whatever being like German and be like, no, I love German food.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Postdam</p>
                        </div>
                            <img className="vertical-photo" src={cristina_postdam} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Very interesting. Very interesting. I feel more in touch with the German side. So I do feel more of like a blend between the two. I do still say that I feel very Filipino cause I. Even here, even in San Diego, it is my mom's cousin. So the same generation, my mom's cousin lives here and she has children who are like five and seven years younger than me.</p>
                        <p>And I didn't like really know them before I moved out here. And then I moved out here and then I inserted myself into that family. I was like, Oh, I'm back. Welcome. It's me. And it's been like, basically I've known them my entire life. I got ice cream with them yesterday. I got ice cream with them the day before.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina in San Diego</p>
                        </div>
                            <img className="vertical-photo" src={cristina_sd} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>We went to London together. I've been around this family for now, maybe a year and a half, and I go over at least once a week, and it just felt right. And so I think there's just like cultural differences and also just like the size of family differences.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Have people made assumptions about your understanding of the certain languages? Since we know people have mistaken your identity or not recognized parts of your identity, does that also extend to how they make assumptions about what you know about the culture, what you know about the language and so on?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, that's a great question. Now I'm like really thinking about it. I, I don't know. For myself I feel like I always like maybe it's just me, maybe it's just me testing people. At the end I'm just like I'm like, oh, like I am like Filipino and they're like, oh.</p>
                        <p>Like you are like, I don't know. They'll be talking about some like random like food. I don't know. I always take mangoes for example, because I am a mango snob and I will die on the hill that is Filipino mangoes are the best. I am a Filipino mango girl, Stan, whatever. And so I'll always pull that card out. And people are like, oh okay. Like, why would you think like what? And I was like like Filipino, they're like, Oh.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>So they don't then think I'm more than that in that sense. I've never gotten the questions like, Oh, like, how do you say this in Tagalog girl? Like, how do you say this? I've never really have gotten that.</p>
                        <p>And I do think maybe that is because, I really, I don't look that Filipino and also I think in probably the way that I present myself too, I feel like probably I am very American, very whitewashed. But Also that being said, like, when you look at my family and my sister people think we either look identical or we look very different.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her sister</p>
                        </div>
                            <img className="vertical-photo" src={cristina_sister} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I personally think we are so different. And also, a lot of times I haven't, I never. <b className='extra-bolded'>I remember I think one time in third second grade or something, I was like, oh, I'm, like, I'm from the Philippines, and someone said, that's a made up country, and I was like, no it's not a made up country. And she's like It's there on the globe.</b></p>
                        <p>They're like, I've never heard of it before. I was like, okay. I was like like my mom is from there. So I don't know.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>And I think especially where we grew up, people didn't know as much. I would say about the Philippines. The Filipino community isn't, not that it's not big, but It's not as around like you go to like where we are versus where my grandmother lives.</p>
                        <p>There are so many Filipinos in Jersey. There are so many Filipinos here in San Diego. It's great. But yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina and her family when she moved to San Diego</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_sdfamily} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Jersey's very interesting because they must have the highest population of Indians on the East Coast as well. I feel like Indians are either in the Bay Area or in New Jersey. And I don't know why that is Yes,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>here. Who's Indian. She's yeah, we're going like Edison, like they live in Edison. I'm like, yeah. I'm like, yes, I'm like, yes. You know why I know that? Because guru told me and I was like, yes, no, I'm in the know.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>my god. Do you ever feel any subtle or significant personality shifts when you're speaking in Spanish, German, or Tagalog?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah, definitely German. Definitely. <b className='extra-bolded'>I think when I like associate German, I like have to feel very put together, very stiff backed. I have to think about what I'm saying. This needs to be perfect.</b> And what I'm saying, like things need to be good. And that being said that's probably just my own like way of how I thought about it too. It is a harsh, it's a harsh language.</p>
                        <p>My grandparents, who I love. The term for endearment in German is like schatz, it's like mein schatz, which is like my darling, my love, whatever. And I did not know that was a term of endearment until I went to Germany. The way that my grandparents said it to each other was always like Shots like come on shots.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Like what are you doing? What and so I just thought it was not negative but I was like, I didn't realize that it was like darling or something like that and I was like Okay, so that was just like my experience with it.</p>
                        <p>Versus Spanish, it just flows. It just flows out. You come out, I can say things I can ramble in Spanish. Tagalog, it's also just it's it's such like a bumpy language. I feel like it goes up, it goes down, like so many fun, different intonations. And I don't know long enough words to put together. I think Tagalog is just more loose, and Spanish has a little bit more structure.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And as you've gone through learning multiple languages, do you have advice for anyone who is similarly juggling learning multiple languages or just maybe just in your position of juggling multiple identities?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I feel like learning multiple languages is always a challenge. I don't know if I have great advice. <b className='extra-bolded'>I think any way you can challenge your brain and learn something new, Just go for it and you're gonna mess up But that is literally the beauty of language is like we just all agreed upon this one day. They just agreed upon that. Okay, you mess up. Whatever. It doesn't, it really doesn't matter.</b></p>
                        <p>You're still trying, and that's better than not. So I say just keep going for it. And then for multiple cultures, I think, it's just lean in. That is who you are. Lean into whatever you want. And just happy. Find the pieces that you love. And stick with it.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>One of Cristina's trips</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_trip} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And then wrapping up the conversation do you have a favorite word in German?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Oh my gosh, my favorite word. I just was talking about this yesterday. My favorite word Okay, it's not that exciting, but There's lots of good ones, like krankenwagen. Great, that's ambulance. It literally means like sick wagon. Or and then, but, my favorite word is choose. Which means bye.</p>
                        <p>It's but it's spelled like t s c h u s s. I'm pretty sure. Again, maybe I should have fact checked that before. But either way, it's, but it's chus, and it just means bye, and I think it's so cute, and I think it's so funny. Because also what is it? It's like literally t s Like, yeah, T S C H U, with the umlaut, S S.</p>
                        <p>And it's just what? What is that? You sound like you're sneezing, maybe, but it's just, it's a fun word. I love it. Yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                            <p className='handwriting'>Cristina</p>
                        </div>
                            <img className="horizontal-photo" src={cristina_trip2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Nice. Thank you so much Cristina for coming on to the second podcast of our lifetime together. And do you have anything to plug?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>No, listen to my episode. Listen to the earlier episodes if you haven't. Listen to The Fashion Project. Those are my plugs. Otherwise, if you come out to San Diego, let me know.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah everyone should go visit Cristina at the San Diego Zoo.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Cristina</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>No, please. You'll make my day.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>yeah. Okay, cool. We can call that a wrap.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Cristina

export const Head = () => <title>Cristina Hain Interview</title>
