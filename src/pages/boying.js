import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"

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
                    <span className="changing-word">Found in</span>
                    <span className="static-title">Translation</span>
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
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <h3>The Guest<br /><span className="first-name">Boying</span></h3>
                    </div>
                    <div className="p-wrapper side">
                        <p>Hi, I'm Boying. I was born in China as a Chinese citizen, and then I moved to New York City when I was five. I grew up in the Lower East Side until I was 10, then we moved to Chinatown. I moved to Seattle in 2020 for work. My pronouns are she/her. I predominantly spoke Mandarin Chinese growing up, but my family is from Fujian province which has its own dialect called Minnanhua.</p>
                    </div>
                </section>

                <div className='cue'>~ interview begins ~</div>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Are you still a Chinese citizen?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Oh, I did get my citizenship in the United States. I went on a trip to Italy with my friend and found the visa process to be a hassle, so I finally went and got my United States citizenship.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Congrats! Let's go back to your childhood. Could you share more about your connection with Mandarin and other dialects growing up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Living on the Lower East Side, there wasn't much Chinese around, but at home we spoke Mandarin. I spoke Mandarin to my grandparents and mom. My dad is mute and deaf - we communicated through writing, which I'm bad at because these days we use pinyin. Once we moved to Chinatown, everything around us was in Chinese - Mandarin, Fu, and Cantonese.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>What was it like learning English while growing up in that environment?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>At school is where I predominantly learned English and got integrated into American culture. I remember one time in after school I thought I was having a fever, and the only way I knew how to describe it in English was "my head was hot." I don't think they understood my concern.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How did you balance both languages growing up?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I actually think there was an imbalance - my childhood felt extremely Chinese. I was influenced by my cousins and consumed a lot of Chinese media - books, games, variety shows. I didn't watch many things American kids my age would have watched.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you have any favorite Chinese shows or media from that time?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>They're very nostalgic for me. It's nice to bond with people who came to America in middle school or high school over these shared cultural references - it's like a time capsule.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How do you think that media consumption informed your identity as a Chinese person?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>It was still an American version of being Chinese in America. Our parents' knowledge of their homeland gets stuck at the time they left. I feel more Chinese than many Chinese Americans, but not as Chinese as people who grew up in China.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How do you measure that "Chineseness"?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Probably the amount of cultural references you understand. I might recognize popular songs from my childhood, but someone from China might reference TV shows I've never watched. That's the gap.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Have you ever gotten comments about being "Americanized"?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Actually, Chinese immigrants often say "wow, your Chinese is so good!" They feel a sense of kinship, but I always feel very different from them. I've never been considered westernized language-wise, though behaviorally I might be more "American."</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Did you ever go to Chinese school?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I did, but I really sucked at pinyin because I couldn't figure out the tones. Eventually I soft quit Chinese school and started going to the library instead.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How would you describe Mandarin to someone not familiar with it?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>The concept of radicals is really helpful - they tell you about the meaning of a word, while the rest informs pronunciation. Many characters are variations of each other with different radicals. If you learn the base, you can learn how to pronounce them.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you have a preference between communicating in Chinese or English?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I'm much more fluent in English and better able to express myself. My Chinese is very practical - fluent for everyday use but I couldn't write essays. I think it's easier to be "cute" in Chinese because of cultural expectations.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>How do you feel when Chinese culture becomes mainstream in America?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I realized how different my perspective was because I grew up so immersed in Asian media. When "Crazy Rich Asians" came out, everyone was excited about representation, but I didn't get it because I'd always seen Asians on screen. Now that I'm in Seattle with more diverse friends, I understand that perspective better.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>When was the last time you went back to China?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>I did a study abroad in Shanghai in 2019. I wouldn't call it "home" though - I spent so little time there. China doesn't recognize dual citizenship, so now that I'm an American citizen, visiting would be more complicated.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Looking back, is there anything you'd do differently with your language journey?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>Sometimes I feel like I should study more, learn more vocabulary. I took a business class in Chinese at NYU Shanghai but I'll never use those stock market terms. Since moving to Seattle, I don't speak Chinese much anymore and that makes me a little sad - it feels like a chunk of my life is becoming irrelevant.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Do you have a favorite word in Chinese?</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Boying</div>
                    </div>
                    <div className='p-wrapper side'>
                        <p>There's a word that's three of the character for "rock" stacked in a triangle. I don't think it means a group of rocks, I just think it's a fun word visually.</p>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="name-wrapper">
                        <div className='bolded-name'>Guru</div>
                    </div>
                    <div className="p-wrapper side">
                        <p>Thank you for coming onto the podcast. Do you have anything else you'd like to mention?</p>
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