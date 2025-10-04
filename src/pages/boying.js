import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"
import boying_babymom from '../images/boying/boying_babymom.jpg';
import boying_textdad from '../images/boying/boying_textdad.png';
import boying_toddler from '../images/boying/boying_toddler.jpg';
import boying_preschool from '../images/boying/boying_preschool.jpg';
import boying_elementary from '../images/boying/boying_elementary.jpg';
import boying_chinesestar1 from '../images/boying/boying_chinesestar1.jpg';
import boying_chinesestar2 from '../images/boying/boying_chinesestar2.png';
import boying_grandpasister from '../images/boying/boying_grandpasister.jpg';
import boying_paternalfamily from '../images/boying/boying_paternalfamily.jpg';
import boying_birthday from '../images/boying/boying_birthday.jpg';
import boying_badminton from '../images/boying/boying_badminton.png';
import boying_steambuns from '../images/boying/boying_steambuns.jpg';
import boying_chinesetv from '../images/boying/boying_chinesetv.jpg';
import boying_shangchi from '../images/boying/boying_shangchi.jpg';
import boying_disney from '../images/boying/boying_disney.jpg';
import boying_seattle from '../images/boying/boying_seattlefriends.jpg';

const Boying = () => {
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
                        <h3>The Guest<br/><span className="first-name">Boying</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>I was born in China as a Chinese citizen, and then I moved to New York City when I was five on a green card through my dad.</p>
                        <p>And, from until I was 10, I grew up in the Lower East Side, but then we moved to Chinatown and then I grew up there. Until I moved to Seattle in 2020 for work.</p>
                    </div>
                </section>

                  <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Baby picture with her mom</p>
                            </div>
                        <img className="vertical-photo" src={boying_babymom} alt="" loading="lazy" />
                        
                        </div>
                    </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Are you still a Chinese citizen?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Oh, I did get my citizenship in the United States. I went on a trip to Italy with my friend. And I found the visa process to be a hassle. So, I did finally go and get my United States citizenship. Woo! </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yay! Congrats! I would love to start going back to your childhood. Could you share more about what your connection with your language with the, actually wait, sorry. Also, for the language that you're speaking.</p>
                        <p>So, do you specifically speak, I know we're talking about Chinese, but is it specifically Mandarin or is it a different dialect of Chinese? </p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I did predominantly speak Mandarin Chinese growing up, but my family is from a province called Futian, and maybe it's only interesting to me, but the province Futian has a dialect. It's called Minnan Hua. But then, where specifically I'm from, my family's from, it's Fuzhou. <b className='extra-bolded'>The city is called Fuji, and we speak it entirely different dialect from the rest of the province.</b> So I grew up speaking mostly Mandarin because that's just like the media that was being consumed was a lot of Mandarin. But at home with my grandparents, they would speak they would speak a lot of fu. So I am able to have some limited comprehension of FU too. It's mainly Mandarin Chinese.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay, cool. Jumping into your childhood, could you talk about what your connection with chinese mandarins, other dialect, just overall how that played out as you were growing up in the city.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. I think living on the lower East side, there wasn't that much Chinese. But at home we would speak Mandarin Chinese.</p>
                        <b className='extra-bolded'>I would speak Mandarin Chinese to my grandparents, to my mom. My dad, he's mute and deaf. I used to know a little bit of sign language when I was younger, but definitely like these days, not really, but the primary way we would communicate was through writing.</b>
                        <p>Which I am very bad at because these days you have pinging, which is like romanized, the Romanized pronunciation, the Chinese. So I, it's hard to talk with them casually. It's hard to communicate with them casually because he likes to write, and his writing looks like trick and scratch to me, so I don't understand what he's writing.</p>
                        <p>And then he's not very good about taking out his phone to type it out. So that was, so growing up in the Lower East Side, I think that was maybe the extent of my Chinese exposure. And then once we moved to Chinatown, obviously everything around us was in Chinese.</p>
                        <p>And let me specify here in Chinese actually, it's, but it's gonna be Mandarin, it's gonna be fu and then it's also gonna be Cantonese. So I grew up in Chinatown with a lot of influences from all three languages.</p>
                        <p>But the culturally, it's just Fuji. Fuji and Cantonese. Because a lot of the Fuji people will speak Mandarin.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Text messages with her dad</p>
                            </div>
                        <img className="vertical-photo" src={boying_textdad} alt="" loading="lazy" />
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And can you remind me again, like what age you were when you had moved here?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I moved to New York when I was five, and then when I was 10 we moved to Chinatown.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                             <p className='handwriting'>Toddler in China + Preschool in America</p>
                        </div>
                        <img className="vertical-photo" src={boying_toddler} alt="" loading="lazy" />
                        <img className="vertical-photo" src={boying_preschool} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So I so for me, like when I had moved at three I like, the language, like my parents broke at home was th which is a language from Southern India.</p>
                        <p>So when I started to go to school, it was a very interesting experience because I was trying to learn English and just American customs and just how like American kids walked and talked and played and whatever.</p>
                        <p>And, I can't fully describe it anymore 'cause it almost feels like a bit of a fever dream. But what was that like when you were growing up like in that sort of young age, were you also learning English in school and taking classes, or were you going to a school that was predominantly around other Chinese speakers or how did that work.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I remember when I started school, I don't remember if it was peak pre at kindergarten, but I'm assuming it was kindergarten.</p>
                        <p>I was not, it wasn't, there was I remember. A few Asians because I remember the mid fifth grade, I don't remember the kindergarten. <b className='extra-bolded'>But I think at school is where I would predominantly be learning English and just getting integrated into American culture.</b> And I think I do remember that one of my teachers was probably Chinese, so that helped me out a bit in just getting used to the environment.</p>
                        <p>In elementary school, I had a hard time expressing myself because I just didn't know as many words in English as I did in Chinese. <b className='extra-bolded'>I remember one time in after school I thought I was having a fever, and then the only way I knew how to describe it in English was my head was hot. And I don't think they understood.</b></p>
                        <p>I don't, I'm not sure they understood my concerns that I was having a fever.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Elementary school</p>
                            </div>
                        <img className="horizontal-photo" src={boying_elementary} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Yeah. At what age did you feel like you had a good understanding or grasp, like proficient grasp of English?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>That's a good question. I can't say I can answer that for certain because that, like head hot incident felt definitely it wasn't the first year but maybe a year or two in if I had to make a guess.</p>
                        <p>Yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And as you were like learning, I feel like for you, it was great that you were living in Chinatown and still immersed around other Chinese speaker, outside of your household. It seemed like you had a nice balance, like in school and outside of school, was that the case or how did you feel about balancing the knowledge and practice of both languages as you were growing up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I actually think that there was a very much of an imbalance with my knowledge of not necessarily the language, but like culturally I feel. As if my childhood was extremely Chinese. Because I, at that point in time, I think I was influenced a lot by my cousins or like what kind of media they consumed.</p>
                        <b className='extra-bolded'>And I just read a lot of Chinese books, played Chinese games and watched Chinese variety shows and TV shows. And I feel like I did not watch a lot of things that american kids my age would have done.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you have any favorite Chinese shows, books, music, I guess was there anything from that specific era of your life that was very impactful or influential for you?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't know if I'd say impactful and influential, but they're definitely like very nostalgic for me. The type of people who would be similar to me are people who probably came to America when they were in middle school or high school.</p>
                        <p>So they like grew up for a bit in China and then they came to America. So they still hold on to the kind of things they like from China. So it is really nice for me to bond with them over that, it's like a time capsule.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className='text-photo'>
                        <div className='text-arrow'>
                             <p className='handwriting'>Chinese stars</p>
                        </div>
                        <img className="vertical-photo" src={boying_chinesestar1} alt="" loading="lazy" />
                        <img className="vertical-photo" src={boying_chinesestar2} alt="" loading="lazy" />
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>I feel like for a lot of immigrant or, first, second gen kids, I don't think now since there's the advent of streaming, but I think for anyone who was growing up in like the nineties and maybe like even early mid two thousands, I feel like there was a bit of a disconnect with how we were getting access to pieces of media, like from our culture. Even growing up, I would watch a lot of Indian movies and stuff, but my dad had to go to so many pirating sites to get any access to them. Yeah.</p>
                        <p>And or he would, when we go to India, he would come back with like DVDs from there. And but I don't know I guess like for you since you seem to have a lot of access to it, like how is that like in retrospect, like how do you think that was informing your identity as just a Chinese person?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think in hindsight it was like the kind of identity as a Chinese person was very much. Even though I felt very connected and very accessible to all the Chinese culture, I think it was still very like a American version of being Chinese in America, which I don't know if that makes sense.</p>
                        <p>When your parents come to America, their values and like that, their knowledge of their homeland gets stuck with what they leave behind. That stuck at the time they left behind. And it feels like that in some way because you're getting only like a somewhat like you said, like your parents went to like ping shops.</p>
                        <b className='extra-bolded'>You get like a very filtered subset of the chinese media that's being like, produced in China. So I definitely feel, I feel like I'm more Chinese, a lot more Chinese than a lot of Chinese Americans, like way more Chinese. But I also don't feel like I am as Chinese as people who grew up in China.</b>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying with her grandpa and sister</p>
                            </div>
                        <img className="vertical-photo" src={boying_grandpasister} alt="" loading="lazy" />
                        
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Can you talk a little bit more about how you're measuring that or what you mean by of like. How do you define like more Chinese or less Chinese or how, what's like your measurement there?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <b className='extra-bolded'>Probably the amount of cultural references that you understand maybe. I would be able, if you play me like, like a Chinese American friend play me Chinese song. There's a good chance I'll know the song from listening to my parents play it or playing it when I was growing up in the mid two thousands or like early 2010s. It's a good chance I would recognize the popular songs.</b>
                        <p>But if I maybe talk to like a. Chinese person who came to America for college or a college or for work they might reference like TV shows that I've never watched before or like variety shows that I haven't watched. So I think that's the gap.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying with her paternal family</p>
                            </div>
                        <img className="vertical-photo" src={boying_paternalfamily} alt="" loading="lazy" />
                        
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Have you ever measured that sort of chineseness in relation to the proficiency of like language, like in terms of how much your Chinese American friends know it or don't know it, versus someone who's coming from China and stuff.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I've never measured it formally, but I can definitely see that relation in if you're not familiar enough with the language, then you're not as comfortable consuming media in that language.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And have you ever gotten any comments like that? I and other people I know who in a similar situation I feel like once you spend most of your life in America, like it's very easy to label us as americanized and such. So have you ever gotten comments like that, and if so, how do you like, feel about that or respond to it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>See, I think it's interesting because I'd say that. I don't think I've ever gotten that kind of comment, but when I interact with Chinese immigrants, and I feel like in the beginning they always think that, wow, she can speak Chinese.</p>
                        <p>She's wow, your Chinese is so good. <b className='extra-bolded'>They feel a sense of kinship and like I, I probably think that I'm really similar to them. But I feel I always feel like very different from them and I don't share the same thoughts or upbringing.</b> And I feel like very, I just feel very different.</p>
                        <p>But generally usually the feedback I get from elders is that, wow, your Chinese is so good. How do I get my kid to be as good as Chinese as you are? At least language wise, I've never been considered westernized, although, or like American, but perhaps behaviorally I think I might be more of a loose canyon in some of my other friends.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay. Since you're already growing up in Chinatown, I'm not sure if this even like had to come up, but do you guys ever have any specific conversation of we want you to only talk in Chinese at home, or it can be a mix of Chinese and English or were there insistence about the language being, always permeating, like in the household or fired conversations or were they like loose about how much you were speaking it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>We never had this kind of discussion because they don't know how to speak English. And I was very fluent in Chinese.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And when you were going to school, did you have a lot of Chinese friends or were you ever isolated in that regard? And then if you did have a lot of Chinese friends, were you guys talking to each other like in Chinese or would it be more like English?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>As I mentioned when I was five to 10, I grew up in the lower East side which is a more diverse neighborhood. But I also didn't go to high school in Chinatown, so I guess that doesn't make a difference actually. But in my high school it was 75% Asian. So I did find a lot of friends in high school who had a better grasp of the language or all like at my level or better, or like a little slightly below my level. So I was able to communicate with them in Chinese. And in preparation for this podcast, I was looking through my Facebook wall and then I just saw so much Chinese on my Facebook wall of my friends commenting and it was.</p>
                        <b className='extra-bolded'>It was weird to me how it feels like two different worlds that the people who can speak Chinese will it always seems almost like an inside joke that we can, there's some jokes we can make in Chinese and the rest of my friends will just not understand. But in elementary school and middle school, I think they, I had Chinese friends but they weren't that great in Chinese.</b>
                        <p>Very much more American.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying's birthday</p>
                            </div>
                        <img className="horizontal-photo" src={boying_birthday} alt="" loading="lazy" />
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Did you ever have to go to one of those weekend Chinese schools?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I did go to Chinese school for a bit, and then when they called my grandparent, my grandpa, he was like. Yeah, I put her in like the pre-K class or something like that. And so I went to a lowest level class, even though my Chinese was pretty good. But I really sucked at ping y because the tones, I just could not figure out the tones.</p>
                        <p>So I was having a really hard time in Chinese class. And then I think eventually in like third grade or something third grade, not my third, not the regular elementary class , but in third grade of Chinese school.</p>
                        <p>Yeah. I met a friend who was. In my same grade in elementary school who was a year higher than me in Chinese school. So I went and talked to the principal or something. I was like, I wanna skip a grade.</p>
                        <p>And I found out she got left back. And then so after that I soft quit at Chinese school, Uhhuh, because I just left like my class with like people that I know to like, go to this new grade where I didn't know anybody and I didn't wanna do, and like my friend wasn't even there anymore. So I started going to the library instead of going to Chinese school.</p>
                    </div>
                </section>
                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying's high school badminton team</p>
                            </div>
                        <img className="horizontal-photo" src={boying_badminton} alt="" loading="lazy" />
                        </div>
                </section>
                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Okay. could You talk about for someone who's like not a Mandarin speaker, just breaking down more of what kind of makes up the language or, I, it's I feel like a lot of the general.</p>
                        <p>Conception of Mandarin from the outside world is that it's a pretty extensive and complicated language just given the number of characters and everything. But, how would you approach describing the language or the nuances of it to someone who's not really well-versed in it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>A really helpful thing for me, I guess learning the language is the concept of radicals. And the other part, which I don't know, because yeah, the ra, it's like, there's like radicals and then there's the rest of the word, and then radicals tell you about the meaning of a word or like the context of the word.</p>
                        <p>And then the re the other part of it is informs you on how to pronounce the word. So I think growing up. Like using this method, I was able to read a lot of words and yeah, I think that's like the biggest tip I have for Chinese. They all look very, there's so many characters in Chinese, but they are, a lot of them are very variations of each other and they just have different variables different radicals.</p>
                        <p>And if you learn like how to see the base, then you'll learn how to pronounce all of them.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Yeah. Do you have a preference of communicating between Chinese and English?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. I definitely do.<b className='extra-bolded'>I think I am much more fluent in English and I'm better able to express myself in English.</b></p>
                        <p>But I was talking to a friend prior to the podcast and she feels like it's much more emotional to speak in Chinese 'cause it's, she's better able to express herself in Chinese and her English is like much more, I would say logical and not as emotional.</p>
                        <p>But my Chinese level, I'd say is very practical. Fluent, practical, would not be able to write any essays or no transition words using Chinese.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. I guess going off what your friend was mentioning, do you notice any subtle or significant personality shifts in yourself between talking in Chinese versus English?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p><b className='extra-bolded'>No, I feel like it's a little bit easier to be cute in Chinese because I think that is like a standard, or not beauty standard, but almost like personality standard or expected of like women to be cutesy soft and more East Asian standards.</b> And I get. I'm trying not to get canceled for this or anything, but yeah, so it in America it's like a lot more about like feminism, you like, girl boss, strong woman.</p>
                        <p>So I feel definitely feel when I talk in English, it's probably deeper more mature. And then when I talk in Chinese, I feel like it's more acceptable to be cuter.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Making steam buns</p>
                            </div>
                        <img className="vertical-photo" src={boying_steambuns} alt="" loading="lazy" />
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Wow. Going back to the, the sort of the conversation about media and stuff when something, that's related to Chinese culture or even just Chinese language becomes mainstream in America. How did that kind of or how does that make you feel in terms of just towards pride towards it, or even just awareness around how much other people who are not Chinese responding to it. When something like that goes mainstream , how does that sort of make you feel?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think this is something that I thought was really interesting because actually I think a year or two ago I like realized how different my perspective of american culture is from other people.</p>
                        <p>Because I grew up in, just in a very Chinese, Asian emerged environment, and I had a very skewed understanding or perception of how much of a minority Asians are in America. So I think there was a big moment of a few years back where like crazy Asians, where it was like, made it really big.</p>
                        <p>And I, and then everybody was like, oh my God. People like us on the screen, or Asian American representation to Hollywood. And I was just like, what? I don't really get it right. And talking to my friend, a year or two back, I realized it was because I had just grown up just seeing Asians on the screen, right?</p>
                        <p>I had watched so much Asian TV show or like movies that this just doesn't, this didn't really seem like a issue for me. But like now that I've moved out to Seattle and I feel like I have. A more diverse, I've met more diverse group of people and I'm watching more American TV shows and movies.</p>
                        <p>I definitely feel like I understand what they're saying a lot more now. <b className='extra-bolded'>Wow, like this movie or TV show, it's all white people. Yeah. I'm like, oh yeah, this is America, actually. Most of my friends are Asians. But actually it's like not the, it's like actually generally not the case. This is not the case that you have so many, so many Asians.</b></p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>K.O. 3an Guo</p>
                            </div>
                        <img className="vertical-photo" src={boying_chinesetv} alt="" loading="lazy" />
                        
                        </div>
                    </section>


                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So I guess after you had that revelation, is there an artist or a figure or piece of media or something that you would say was very boundary pushing for Chinese representation.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think recent years probably Shang Chi. Because it's like the only Asian American Marvel hero, and I think that was really like big.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Shang-Chi and the Legend of the Ten Rings</p>
                            </div>
                        <img className="vertical-photo" src={boying_shangchi} alt="" loading="lazy" />
                        
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Cool. Yeah. Did you go back to China when you were still a kid. Or like when was the last time that you went back home essentially?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Last time I was home, I was studying. I did a study abroad in Shanghai in 2019, I believe. And that was the last time I was in quote unquote home. But I went call it my h like home because I spent so little time there. Yeah. Just over the course of my life, I was, yeah. In my hometown saw my maternal grandma.</p>
                        <p>But yeah. Yeah. Wouldn't call it home.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. I guess what was it like to be there if if you like, recall and I guess and had it been like a big gap between 2019 and the previous time you had gone to China,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't think there was that big of a gap. 'cause I was looking at my pictures and there were, I did go sometime probably in high school. And I don't remember how it changed, but it, there might have been a subway system between the time I visited second last. And the first last was just saying that it, trying to build things really fast. The last time I went, I wasn't there for as long at the time as the last time I went, because the last time I went was I was in China for a lot longer because I was studying abroad in China. But the last time I went, I was there for a vacation. And I guess looked around by myself because the relatives I have in China are my maternal grandparents were old and some aunts and a cousin who has to work. So there wasn't really anybody who can like, travel with me or take me around.</p>
                    </div>
                </section>
                  <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying and her friends at Disney Shanghai</p>
                            </div>
                        <img className="vertical-photo" src={boying_disney} alt="" loading="lazy" />
                        
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>And do you have any plans to go like back to China anytime soon?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Not anytime soon. I don't really know many people in China and the people that are a lot of times when people go back to China, they have family take them around or extended family, take them around and I just don't have a lot of that in China.</p>
                        <p>I could possibly go visit China with a friend. <b className='extra-bolded'> China's really beautiful. There's just so much to see. And one of my friends is in China right now and she's sending me photos and I'm like, wow, it'd be so nice if I could go on a trip in China.</b></p>
                        <p>But there. Yeah, there's no current plans to go to China with any of my friends. And since I am American citizen now, that will be not as fun as I would as when I was in China. Last when I was like a Chinese citizen.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Does China not allow for dual citizenship?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>China does not recognize dual citizenship. I still have my Chinese passport, but they'll, I think they'll, I think what they will do is they'll ask like, why I, they want, they would wanna see my green card, but I already gave my green card to the American government. They'll probably take my Chinese passport if I try to go home with my Chinese passport.</p>
                        <p>Yeah. Yeah. So I, that, that's also why I haven't been back to yet.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah. Actually India doesn't allow dual citizenship either, or just, oh that's also why I'm like. Haven't become a US citizen yet, but yeah.</p>
                        <p>, I guess if you had to look back at how your journey with Chinese was evolving over time or how you were balancing it with English.</p>
                        <p>Is there anything that you may have wanted to do differently about it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I think I feel like definitely at certain points I have felt like. I should study Chinese, learn more vocab, be able to like, I'm like this good at Chinese and I feel like I should know more. So in NYU Shanghai, I took a business class in Chinese and I learned a bunch of stock market stuff that I am never gonna use.</p>
                        <p>I don't think I've remember most of them, but I felt like I should use Chinese somehow make it be useful for me since this is like my comparative strength, like I'm really good at Chinese and I'm really good at English too. And I also looked at some of my Asian American friends who were good at Chinese and they were really a lot better than Chinese than I was.</p>
                        <p>And they would read Chinese classical texts or poems. And I was like, and I'd feel like I. Should read or get better at Chinese. I had a little bit of a desire to be at that level of Chinese, but I think ultimately in the end, since I moved to Seattle, I don't really I haven't really been speaking in Chinese to people a lot and it makes me like a little bit sad.</p>
                        <p>Just 'cause I like so much of my life was taught in Chinese. <b className='extra-bolded'>I lived a lot of my life in Chinese and it just feels like there's nothing to connect it to anymore. Like this. Yeah. It's like a chunk of my life just irrelevant. And I don't know how I feel about that right now.</b></p>
                        <p>I don't know if I'll like, aggressively try to seek out people to talk Chinese with. I don't see that right now. And. That's just how it is now.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                        <div className='text-photo'>
                            <div className='text-arrow'>
                                <p className='handwriting'>Boying and her Seattle friends</p>
                            </div>
                        <img className="vertical-photo" src={boying_seattle} alt="" loading="lazy" />
                        
                        </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Got it. Do you do you have a favorite word in Chinese</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>as of yesterday, because I don't have a favorite word, but I was like, I'm gonna think of one because Yeah.</p>
                        <p>There's a word that I find very fun. It's called lei. There's some words in Chinese that are that are. That go like this, there's a word for wood, and then if you put toge, put it, put two woods together, you get like a what's between wood and forest, I dunno.</p>
                        <p>But you get like more woods and then you put through wood on top and two woods on bottom and you get a forest, right? So I find these words fun, but, so I chose the one that had. Three rocks in it. And I don't but I don't think it means like a pile of rocks. But I just thought it was, I thought it was really fun.</p>
                        <p>It's three rocks on top of each other. So that's my favorite word of the day, because,</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>So it just, so wait, so is it like the character for rock and then put it three on top of each other?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Yeah. Yeah. It's like in the triangle. Yeah. So it's like rock. Okay.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Yeah it like technically means like a group of rocks or</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I don't think it means a group of rocks, I think it's just it, I just think, I just find it to be a fun word. Okay. Yeah.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Cool. Yeah, thank you for coming onto the podcast. Do you have anything else you'd like to mention or plug?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>No, thank you for having me.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Boying

export const Head = () => <title>Boying Interview</title>
