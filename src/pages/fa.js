import React, {useEffect} from 'react'
import Navbar from '../components/navbar';
import BackTop from '../components/backtop';
import "../styles.css"

const Fa = () => {

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
          <span className="changing-word">Third Culture</span>
          <span className="static-title">Living</span>
        </h1>
      </section>

      <BackTop />
      <div className="main-body">
            <section className='section-wrapper'>
              <div className='name-wrapper'>
                <div>
                  <h3>The Host<br/><span className="first-name">Guru Ramanathan</span></h3>
                </div>
              </div>
              <div className='p-wrapper side'>
                  <p>Hello and welcome to <b>Found in Translation</b>. <br />I&#x27;m your host Guru Ramanathan. <br /></p>
                  <p>This is a podcast where first/second generation and immigrant youth come on to talk about their relationship with their cultural language and how that&#x27;s influenced their connection to their culture, family, friends, and more.<br /></p>
                  <p>
                    This episode's guest is Fareeha Mahmood, and it's actually the final episode of the season Fareeha, who came in way of Alejandra, is living in New York City right now, but is actually here to talk about:  <br />
                  </p>
                  <p><b className="list">A) </b>Growing up in Bangladesh and how the history of that country influenced her passion for the language<br /><b className="list">B) </b>She also discusses attending international schools and how that affected her knowledge of Bengali.<br /><b className="list">C) </b>And, we discussed the concept of language as a form of self-identification, especially in the United States<br /></p>
                  <p>So, I hope you enjoy!</p>
              </div>
            </section>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <h3 className="cue">~ interview begins ~</h3>
                <p>Going back to just your early childhood, you know growing up in Dhaka, <b className="extra-bolded">what was your connection to Bengali or how did it play out when you were growing up?</b></p>
              </div>
            </div>
            <section className='section-wrapper'>
                <div className="name-wrapper">
                  <h3>The Guest<br /><span className="first-name">Fareeha Mahmood</span></h3>
                </div>
              <div className='p-wrapper side'>
                  <p>So in Bangladesh, you have Bangla medium schools and you have English medium schools. So in Bangla medium schools, all of your subjects and courses, everything&#x27;s taught in Bengali, but in English medium schools, it&#x27;s taught in English.<br /></p>
                  <p>So, I went to an English medium school, but I remember I would still speak Bengali with my friends. So, that was always kind of like the primary language in which I thought. And obviously we spoke English in school and that&#x27;s where I learned it.<br /></p>
                  <p>Because we didn&#x27;t speak English at home, I didn&#x27;t really recognize myself or my language is different because, for the most part also, Bangladesh is more or less a homogenous country, you know?<br /></p>
                  <p>Most people do speak Bengali and of course there&#x27;s other dialects and, like, languages here and there, but, for the most part, I wasn&#x27;t really confused about who I was.<br /></p>
                  <p>I guess it was definitely easier 'cause I was six. So I didn&#x27;t have to think much about this, but... So it was definitely just Bengali through and through.<br /></p>
                  <p>As an eight-year-old, me and my family, we moved to Jakarta, where we lived for three years. We moved to Dubai, where I was there from fifth grade till high school graduation. <br /></p>
                  <p>So, I&#x27;d say most of my growing up and formative years were in Dubai. That&#x27;s where, like, I didn&#x27;t necessarily find myself, but I think that&#x27;s where I became more comfortable with myself. I found my friends. And then finally, I came to New York. And yeah, I&#x27;ve been in New York city ever since college.<br /></p>
              </div>
            </section>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>I guess first moving to Jakarta. <b className='extra-bolded'>What was that initial transition like when you had to enter a new environment? </b><br /></p>
                  <p>Sorry, literally a new country, I should say, where the primary language of your people, the first language you ever knew, suddenly wasn&#x27;t anymore.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>That was kind of like the first time that I became aware of the fact that I&#x27;m Bengali and I&#x27;m from Bangladesh and I&#x27;m different. And that&#x27;s not necessarily like a, you know, good or bad thing.<br /></p>
                  <p>Sometimes I felt a little awkward communicating with my parents in Bengali in front of my other friends, or if like my friends were over and my mom was watching a Bengali or a Hindi show, I would feel a little, oh, like, I don&#x27;t want her to think that we&#x27;re different, you know? <br /></p>
                  <p>And so I think that&#x27;s kind of the first time I started becoming aware of who I actually was and how I&#x27;m not, you know, white or American or English speaking.<br /></p>
                  <p>All of a sudden I wasn&#x27;t speaking in Bengali with my friends, it was English. And with my teachers, it was in English. And so, I think like the English speaking part of my life became a lot more dominant cuz I was spending, you know, a lot more hours in school.</p><img class="image-414 phot-fader" src="images/youngmombabyfareeha.jpg" alt="" sizes="100vw" data-w-id="33426a22-c68f-3114-f33c-e86cbadcba02" loading="lazy" srcset="images/youngmombabyfareeha-p-500.jpg 500w, images/youngmombabyfareeha-p-800.jpg 800w, images/youngmombabyfareeha-p-1080.jpg 1080w, images/youngmombabyfareeha-p-1600.jpg 1600w, images/youngmombabyfareeha.jpg 1632w" />
                  <p>And so that's... And also, like, when I was growing up in Dhaka, we actually had to take Bengali classes. So that&#x27;s how we officially learned the language and like, you know, reading stories in Bengali poetry, et cetera, and I lost that after like second grade when I moved to Jakarta.</p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <p>And I didn&#x27;t really like separately study Bengali with my parents or anything like that.</p>
                <p><b className="bolded">Basically my knowledge of Bengali was pretty much at a second grade level. And I think it still kind of is.</b></p>
                <p>But, we still spoke Bengali at home, and I spoke English at school and with my friends. But I think the, you know, my relationship with my mother tongue definitely changed and made me feel bit of like an outsider. Which is also funny to think about because it was an international school.</p>
                <p>And so we literally had like kids from all over the world, but I still felt different. And, I&#x27;m still trying to figure out like why that was the case, even though everyone around me spoke different languages, and you know, had like various ethnic backgrounds, et cetera. But yeah, I think that&#x27;s kind of where it started to change for me in terms of my... how I think about Bengali and how it relates to me.</p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, and actually, going back to the Bangla medium and English medium schools, I&#x27;m also just curious, <b>was there any stratification, I guess, when it came to who was able to attend those kinds of schools?</b><br /></p>
                  <p>Or I guess another way of saying it is like, if someone&#x27;s gonna know English and Bangla, was that kind of something where it&#x27;s like, oh, if you&#x27;re middle, upper middle class or higher, those kids are getting that.</p>
                  <p>And then, <b className='extra-bolded'>what was the role of English in Dhaka?</b><br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, totally. I mean, for the most part, I think you&#x27;re spot on. I feel like, maybe it&#x27;s different now and because I haven&#x27;t lived in Bangladesh, I might not be as aware of how it&#x27;s playing out currently, but at least when I was growing up, I think mostly middle class, upper middle class kids, you&#x27;d see them going to English medium schools.<br /></p>
                  <p>And for the most part, these schools were private schools. And so you had to pay a tuition. And that&#x27;s kind of the group of people that would be able to afford it. Whereas with Bangla medium schools, I&#x27;m pretty sure there were private schools and a lot of government schools as well.</p>
                  <p>And so, I think the difference between being funded by the government versus being a private school definitely played a role in the demographics, or like the students that I would be, you know, spending my time with during the day.</p>
                  <p>Even though we have that stratification at the school level, you know, from like elementary to high school, as far as I&#x27;m aware, most universities, they&#x27;re like English medium. So all of your classes are gonna be taught in English.</p>
                  <p>And like, I know in the past maybe like, even some of my cousins who might have gone to like a big a Bangla medium school, that transition to university might have been like a little more harder to them because I mean, now they&#x27;re like being taught in like a completely different language.</p>
                  <p>Obviously they, you know, might have been aware of English and they did speak it, but I think they would&#x27;ve been more confident in Bengali. And you could say the same for me. Like if all of a sudden I was just, yes, I speak Bengali at home, but all my life I&#x27;ve been going to English medium schools.</p>
                  <p>And if I, all of a sudden, had to go to a Bangla medium, like taught university, then it would it would not be good. It would be super hard. And so, yeah, but I guess, like that&#x27;s not necessarily as applicable to me because, anyways, I was going to an English medium school in Dhaka. I mean, the primary language spoken in my school in Jakarta and Dubai were English. And so yeah, I feel like I didn&#x27;t have to, especially 'cause I was younger, I wasn&#x27;t like as aware of what was really going on.</p>
                  {/* <img class="image-414 phot-fader" src="images/elementaryschool.jpg" alt="" sizes="100vw" data-w-id="cd763c7d-168b-8c3d-2337-439a025af0b4" loading="lazy" srcset="images/elementaryschool-p-500.jpg 500w, images/elementaryschool-p-800.jpg 800w, images/elementaryschool.jpg 1024w" /> */}
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, I mean, I don&#x27;t think anyone would expect a six year old to know everything about the working class, unless you&#x27;re like Greta Thunberg or something.<br /></p>
                  <p>But I don't know, it&#x27;s just so interesting... It's like, Tamil is like one of the oldest languages in the world, you know?<br /></p>
                  <p>And like, there are so many languages that are derived from like Sanskrit and other stuff, like so many languages, like in that part of the world especially, go back like thousands of years or, or something, or even hundreds of years.<br /></p>
                  <p>And so it&#x27;s just kind of crazy to me when you actually sit down and think about how, despite having such intense roots, they&#x27;re not considered like the primary thing in our home countries. I also get it because, at this point, English is just the norm everywhere.<br /></p>
                  <p>Whether it be for education or business or whatever, it&#x27;s just kind of like become the universal thing, but I&#x27;m sure someone else can write an essay about like colonialism/imperialism, and how that all happened.<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                 <div className='bolded-name'>Fareeha</div>
                <p>It would be a lot of essays, yeah.</p>
                <div className='bolded-name'>Guru</div>
                <p>Yeah!</p>
                 <div className='bolded-name'>Fareeha</div>
                <p>I think the other interesting thing about Bengali is, I mean, when you look back at history-- So basically after, you know, Partition and basically us being divided by majority Muslim or majority Hindu in terms of like India being majority Hindu and then West Pakistan and East Pakistan being majority Muslim.<b><br /></b></p>
                <div className='bolded-name'>Guru</div>
                <p>Not to interrupt, but I also just wanted to say, I&#x27;m so happy you said that because I know, I&#x27;m just gonna say this right now, I&#x27;m betting 99% of the people listening to this podcast don&#x27;t even know that Bangladesh at one point was East Pakistan.<b><br /></b></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. So basically, yeah, like we were East Pakistan, 'cause we were the kind of other Muslim majority part of, you know, whatever the British had colonized. And basically at that time, even though it was technically independence for India and Pakistan, it was not independence for what we now know today as Bangladesh 'cause we were under West Pakistan&#x27;s rule.<br /></p>
                  <p>And kind of with that, a lot of the stipulations, one of them being we had to speak Urdu. So we couldn&#x27;t speak Bengali basically. So like when you would, if you were to talk to like my dad, I mean he was like pretty young, but his like older siblings, they will tell me like, oh, you know, we literally had to like learn Urdu in school and that&#x27;s what we spoke at school and we couldn&#x27;t speak Bengali.<br /></p>
                  <p>And because language is such an important part of your identity, like at that time, they couldn&#x27;t really use Bengali. It wasn&#x27;t necessarily allowed to be a part of their identity.<br /></p>
                  <p>But essentially there was like a whole fight for, you know, like our own mother language, and to this day we still like commemorate a lot of the martyrs that fought, that actually physically fought, to be able to speak Bengali.<br /></p>
                  <p>Because a lot of people died in that fight that ensued. And so, and I don&#x27;t know if like everyone would know, but February 21st is actually like National Mother Tongue or Mother Language Day. And that&#x27;s because of the fight that happened in Bangladesh. And so, and also like after kind of, we got independence of our language, that&#x27;s what showed people, you know, maybe we can actually be an independent nation as well.<br /></p>
                  <p>And then in 1971, we finally were after a lot of things happened. Because of how Bangla actually came to be like the official language, people also have like a lot of pride in the language because, you know, like we, like, we had to fight for it.<br /></p>
                  <p>I&#x27;m not like the most fluent person in Bangla, I still feel like very proud of the fact that I speak Bengali. And this is definitely a different sentiment than what I had just mentioned when I was growing up.<br /></p>
                  <p>And maybe like, this is just part of me growing up and becoming more comfortable with myself and my identity and like my language. But, I feel like if you were to ask any other person who speaks Bengali, I feel like, for the most part, you&#x27;d get kind of like a similar sentiment.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>I would say the same thing about Tamil speakers. Truly have not met another population on this planet that is as proud of their language than Tamil. And I think part of it does have to do with like, just how old it is.<br /></p>
                  <p>But even in, like, movies they&#x27;re just throwing in like a language anthem. They just need to have like a quick segue, to be like, yes, Tamil&#x27;s ruling the world, it is the best thing ever.<br /></p>
                  <p>Going back to what you were saying, there&#x27;s something integral to your identity there because knowing the language, it is a tool, but then that tool gives you access to such a wealth of things.<br /></p>
                  <p>And also, if you&#x27;re in a <b>random country</b>, let&#x27;s say you go to, I don't know, Finland.<br /></p>
                  <p>And then all of a sudden <b>you hear someone talking Bangla</b>.<br /></p>
                  <p>Then you&#x27;re like, <b>Oh, that&#x27;s my person</b> <br /></p>
                  <p>Yeah and so, I feel like the language thing is so integral to not just sort of like a self-identification of like, I want to be like, you know, comfortable/proud of just like who I am, but then it is also outward looking. It helps you connect with others as well.<br /></p>
                  <p>And actually, I guess like kind of taking that theme into Jakarta and Dubai, so how did you go about finding community at these places? Did you meet other like Bangladeshi or just like Bangla speakers?<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, so different experience, both in Jakarta and Dubai. So in Jakarta, I remember like, I don&#x27;t exactly know if this is how it played out, but we lived in a sort of compound. So it was like five different buildings, and so a bunch of different people, and you kind of just have like, you know, parks and whatever in between.<br /></p>
                  <p>And I remember I was just like out on a walk with my parents, and maybe my brother who was just like two or three at the time, but I guess we were speaking Bengali and there was like an older, you know, auntie. I mean, she wasn&#x27;t old. Maybe she was like, whatever. She was just an auntie.<br /></p>
                  <p>But she basically approached us because she heard us speak Bengali and she was like, oh, you guys are, you know, speaking Bengali, like, are you from Bangladesh? Like when did you guys get here?<br /></p>
                  <p>And basically a whole conversation started. And that auntie basically introduced us to a whole other Bengali community in Jakarta. And so in some of, and, you know, in like a funny way, some of them were actually like related to us, which we didn&#x27;t know, but that&#x27;s just, you kind of find that out if you're brown I feel like.<br /></p>
                  <p>And so we celebrated things like Eid and Pohela Boishakh, which is like the Bengali New Year. And did all these Bengali celebrations with one another. <br /></p>
                  <p>In Dubai, we didn&#x27;t have a big Bengali community. Like yes, we had some relatives here and there, but it was maybe just like two or three families at most. Whereas in Jakarta it was a bunch. And so, I didn&#x27;t really find the friendships that I had found in like a Bengali community in Dubai. And in that way it was different. <br /></p>
                  <p>And I think that like looking back, I also felt a little bad that like my parents didn&#x27;t have the community that they had back in Jakarta. And so it was a little hard that way. In terms of schools, so again, and also what I&#x27;ve noticed in like international schools, you&#x27;ll very rarely find a lot of Bengali kids there.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
            <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>So I&#x27;m just curious at an international school, when we&#x27;re talking about like people coming from all these different backgrounds, were they predominantly people that were coming from other parts of Asia or they&#x27;re like, like European kids there, or South American kids, African kids. I guess like, in terms of like, I guess, like how diverse was it ultimately?<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, no, that&#x27;s a good point. So yes, like we would have kids from, you know, 70-80 different countries, but the number of kids from each of these countries would obviously differ. Like I remember in Jakarta, there was like a really big American and Australian population as well as Indian and South Korean.<br /></p>
                  <p>In Dubai, I think it was predominantly South Asia, mainly India, and then predominantly Middle East.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Because you weren&#x27;t speaking Bengali as much, or if you&#x27;re an international school, the cultural experience is getting a little, I&#x27;m assuming a little homogenized, to some degree.<br /></p>
                  <p>How was that affecting, or was it affecting, your relationship with your, like your direct relationship with your parents or your like other relatives and such because there, like, was there kind of like a... there was a gap forming with the language, so did that like in create or affect any kind of gap with like other people in your life outside of school?<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. So I mean, the short answer is yes. I remember like, you know, on our trips back, like in the winter or summer, more and more, I started to recognize that my Bengali was not as great. And I was like growing different and sometimes, you know, my cousins or like my uncles or aunts would point out like, oh, you speak Bengali with an American accent.<br /></p>
                  <p>Or your English sounds different. You sound totally American. I don&#x27;t think they mentioned in like a negative way. I think that like, their comments were valid and true. But I did, again, feel different. <br /></p>
                  <p>I remember I was coming back from a wedding with some of my extended relatives and they started playing Bengali songs in their car. So, I was sitting next to one of my other younger cousins. She&#x27;s like 10 or something, or maybe like 12, you know, like in her teens I guess. <br /></p>
                  <p>I was like, oh, I&#x27;ve like, never heard this before. And she was like, oh, how come you&#x27;ve never heard, heard this before? Like, you&#x27;re not even Bengali. You know, like, it was just like a fun, small comment. And I was like, oh, yikes. Like a 13 year old girl, who grew up in the US, knew this Bengali song and I didn&#x27;t. And like, I literally lived in Bangladesh, you know? <br /></p>
                  <p>And so, just small things like that, like make me realize, even though I speak Bengali all the time, maybe like I&#x27;m not as close as I could be.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
            <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. But also, like, I, ok so I get that it was like a funny comment, but I do think the underlying, sort of, I guess like subtext there is a little, to me, it&#x27;s irritating. I think it&#x27;s this thing where people who aren&#x27;t of a culture and, we&#x27;re all guilty of doing this, but if you&#x27;re not part of that culture, you just kind of assume like, oh, this person is an expert on all of those things, you know? <br /></p>
                  <p>And it&#x27;s kind of strange to me that like, it's wrong on them to assume we&#x27;re the monolith. But for some reason WE feel guilty doing everything. But there&#x27;s no reason we should know everything.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>I&#x27;m totally with you on that. I think people who grow up in like, who are like third culture kids, they&#x27;ll always have that struggle of like, oh, I&#x27;m not Bengali enough. Or like, maybe I&#x27;m not American enough or blah, blah, blah.<br /></p>
                  <p>And that&#x27;s always kind of there in the background. And I still feel like it&#x27;s there for me, like where I don&#x27;t feel Bengali enough. I&#x27;m not super aware of the trending Bangla songs or Bengali films and like, I wanna be. And I think maybe instead of reading the Bengali news, I feel like watching movies might be the way for me to go.<br /></p>
                  <p>Yeah. And it was like, I remember like seeing like in Cannes or Cannes, however you pronounce it. There was like a Bengali film that actually you know, was at, was at the film festival and it was just like really cool, like seeing a Bengali film at like this kind of prestigious, you know, thing. Like prestigious event where like, I would&#x27;ve maybe just associated with like more European films or like something more, you know?<br /></p>
                  <p>In a way, maybe it feels like Bengali culture is like a little more mainstream or like people actually recognize Bangladesh as a country. And maybe like, that&#x27;s something that&#x27;s influencing me to want to, you know, know more Bengali songs or like, you know, shows or movies.<br /></p>
              </div>
            </div>
                <p><b className='extra-bolded'>Have you been back to Bangladesh, in the last few years? Are you looking forward to doing that sometime soon?</b><br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div className='p-wrapper side'>
                <p>I actually went back a couple months ago [Production Note: We recorded this in 2022, so Fareeha is referring to traveling to Bangladesh in early 2022]. And that was kind of like the first time in like more than two years 'cause we used to go back pretty often like winters and summers. But when I started college in the US, that was a little less frequent 'cause it&#x27;s so far and expensive. And then COVID happened.<br /></p>
                <p>So, I basically didn&#x27;t see my parents or my brother for a little over two years. And so I went back earlier in the year, and yeah, it was really nice. We still live in that-- so after we moved back, we went back to that apartment that I essentially grew up in, in like the same apartment building with my other, you know, family members.<br /></p>
                <p>The number of family members in that building has definitely kind of waned and like died down. So, it&#x27;s a little more quiet, but yeah, it was nice being back. Especially like after a while.<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <div className='bolded-name'>Guru</div>
                <p>I forget if we asked a similar question already, but the last question I would pose to you is, do you have a favorite word in Bengali, or a favorite term or phrase, or anything like that?</p>
                 <div className='bolded-name'>Fareeha</div>
                <p>That&#x27;s such a good question. I wouldn&#x27;t even know what that would be in like English. There&#x27;s like some random Bengali words, I just like how they sound. Like বৃষ্টি (Br̥ṣṭi). বৃষ্টি means rain. And I was just thinking about it the other day. 'Cause like, it was like a little overcast or maybe it rained... Honestly, I don&#x27;t remember.</p>
                <p>But I just like, one of my favorite things about being back home is like the way that it feels and smells after it rains. 'Cause Bangladesh is so like, there&#x27;s like so much greenery and like nature everywhere. It&#x27;s just like-- It&#x27;s like a different feeling after it rains, especially like when we have like our monsoon season. Obviously, like sometimes it&#x27;s actually bad because there&#x27;s like serious flooding, et cetera. But I always remember like those summers, those like rainy summers I just loved it when it rained. And বৃষ্টি is definitely one of those random little words that I like. </p>
                <p>But, you know, I might even like ask this question to my parents and see if they have a favorite Bengali word. I feel like it might even be hard for them to come up with an answer. But yeah, maybe like if I, you know, start watching the Bengali movies and shows and music, maybe I&#x27;ll have an actual answer.</p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div className='p-wrapper side'>
                <p>All right. Cool. Well, as we&#x27;re wrapping up, if you just wanna plug your socials or anything else you&#x27;re like working on, that would be awesome.</p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <div className='bolded-name'>Fareeha</div>
                <p>Yeah, totally. I mean, like, one of the coolest things that I had a chance to work on was actually writing a book and having it published. So it was, it&#x27;s actually like been more than a year, which is crazy to think about. But, I wrote a book on social impact where I spoke to a bunch of people in the industry, you know, creating a tangible, positive impact in different ways, whether that be through impact investing or through nonprofits or government, et cetera.</p>
                <p> And I kind of compiled it all into my book, &quot;The impact Mind.&quot; And, it basically looks at how we as individuals can, you know, make a difference with the resources that we have at hand. And I feel like because it covers so many different stories and people from so many different walks of life, hopefully a story resonates with you and you can see how, you know, you have the power to, you know, not necessarily change the whole world, but make a change in the world.</p>
                <p>And so that&#x27;s definitely something I was really excited to work on and still very passionate about. So, it would be awesome if you check that out. It&#x27;s called <b>&quot;The Impact Mind,&quot; by Fareeha Mahmood.</b></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                <p>And where can people-- Like is it on Amazon or where can people find it, or buy it?</p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                <p>Yeah, it&#x27;s on the Barnes & Noble, the website, Amazon. I think it should be, like, on all the major sites. <b><br /></b></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                <p>Well, I hope everyone checks out your book. I&#x27;ll have to check out your book now as well. So, yeah, I mean, thank you again for coming on to our, our little podcast here. And also you are closing out season one.</p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
              </div>
              <div className='p-wrapper side'>
                <p>I feel so special. What an honor.</p>
              </div>
            </div>
                    <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                <p> You're the season finale of this venture, into this whole world. But yeah, thank you again. </p>
              </div>
            </div>
                  
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div className='p-wrapper side'>
                <b className="bolded">And that is a wrap on our season! And we will roll the credits. I'm your host Guru Ramanathan. This is FOUND IN TRANSLATION, created, executive produced, and edited by Alejandra Arevalo and myself. And music by Lux the Lightbulb. Thank you so much again for listening and embarking on this journey with us. Please like, share, comment, etc, and do all the things that will help us go viral. We have greatly appreciated your support from the beginning to the end of the season.</b>
              </div>
        </div>
      </div>
    </main>
  )
}

export default Fa

export const Head = () => <title>Fareeha</title>
