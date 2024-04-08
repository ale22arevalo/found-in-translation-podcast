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
        <h1>Third Culture Living</h1>
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
                    This week&#x27;s guest is ajhbcjajnjkcnajncja.<br />
                  </p>
                  <p> bcsahjjcajk<br /></p>
                  <p><b className="list">A </b>s‍<br /><b className="list">B </b>bcxhkabjkca<br /><b className="list">C </b> kjnckajncja<br /><b className="list">D)</b> acjbajnkva<br /></p>
                  <p>Hope you enjoy!<br /></p>
              </div>
            </section>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <p>~ interview begins ~</p>
                <b className="bolded">Going back to your early childhood, growing up in Dhaka, what was your connection to Bengali or how did it play out when you were growing up?</b>
              </div>
            </div>
            <section className='section-wrapper'>
                <div className="name-wrapper">
                  <h3>The Guest<br /><span className="first-name">Fareeha Mahmood</span></h3>
                </div>
              <div className='p-wrapper side'>
                  <p>in Bangladesh you have Bangla medium schools and you have English medium schools. So in Bangla medium schools, all of your subjects and courses everything&#x27;s taught in Bengali, but in English medium schools, it&#x27;s taught in English.<br /></p>
                  <p>So, I went to an English medium school, but I remember I would still speak Bengali with my friends. So that was always kind of like the primary language in which I thought, I guess in terms of my thinking, and obviously we spoke English in school and that&#x27;s where I learned it because we didn&#x27;t speak English at home.<br /></p>
                  <p>I didn&#x27;t really recognize myself or my language is different because for the most part also Bangladesh is more or less of homogenous country, you know?<br /></p>
                  <p>Most people do speak Bengali and of course there&#x27;s other dialectS and languages here and there, but for the most part I wasn&#x27;t really confused about who I was.<br /></p>
                  <p>I guess it was definitely easier cuz I was six or seven. so I didn&#x27;t have to think much about this, but so it was definitely just Bengali through and through.<br /></p>
                  <p>As an eight year old, me and my family, we moved to Jakarta where we lived for three years and then we moved to Dubai, where I was from fifth grade till high school graduation. <br /></p>
                  <p>So, I&#x27;d say most of my growing up and formative years were in Dubai. That&#x27;s where, I didn&#x27;t necessarily find myself, but I think that&#x27;s where I became more comfortable with myself. I found my friends. And then finally I came to New York for college. And yeah, I&#x27;ve been in New York city ever since college.<br /></p>
                  <p>I still speaking Bengali with my parents, all of my family members, my brother. And so that&#x27;s definitely been a constant in my life, but I think what&#x27;s changed throughout, especially as I&#x27;ve moved and grown up, is my closeness to the language as well as my understanding of it.<br /></p>
              </div>
            </section>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>I guess first moving to Jakarta. <b>What was that initial transition when you had to enter a new environment? </b><br /></p>
                  <p>Sorry, literally a new country, I should say, where the primary language of your people, the first language you ever knew, suddenly wasn&#x27;t anymore.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, that was the first time that I became aware of the fact that I&#x27;m Bengali and I&#x27;m from Bangladesh and I&#x27;m different and that&#x27;s not necessarily like a, you know, good or bad thing.<br /></p>
                  <p>Sometimes I felt a little awkward communicating with my parents in Bengali, in front of my other friends or if like my friends were over and my mom was watching you know a Bengali or a Hindi show,<br /></p>
                  <p>I would feel a little, oh, like, I don&#x27;t want her to think that we&#x27;re different, you know? And so I think that&#x27;s kind of the first time I started becoming aware of who I actually was and how I&#x27;m not, you know, white or American or English speaking<br /></p>
                  <p>All of a sudden I wasn&#x27;t talking, I wasn&#x27;t speaking in Bengali with my friends, it was English and with my teachers, it was in English. And so I think like the English speaking part of my life became a lot more dominant cuz I was spending, you know, a lot more hours in school.</p><img class="image-414 phot-fader" src="images/youngmombabyfareeha.jpg" alt="" sizes="100vw" data-w-id="33426a22-c68f-3114-f33c-e86cbadcba02" loading="lazy" srcset="images/youngmombabyfareeha-p-500.jpg 500w, images/youngmombabyfareeha-p-800.jpg 800w, images/youngmombabyfareeha-p-1080.jpg 1080w, images/youngmombabyfareeha-p-1600.jpg 1600w, images/youngmombabyfareeha.jpg 1632w" />
                  <p>Also, when I was growing up in Dhaka, we actually had to take Bengali classes. So that&#x27;s how we officially learned the language and like, you know, reading stories in Bengali poetry, et cetera.</p>
                  <p>Also, when I was growing up in Dhaka, we actually had to take Bengali classes. So that&#x27;s how we officially learned the language and like, you know, reading stories in Bengali poetry, et cetera.</p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <b className="bolded">I lost that after like second grade when I moved to Jakarta.</b>
                <p>And I didn&#x27;t really like separately study Bengali with my parents or anything like that.</p>
                <p>Basically my knowledge of Bengali was pretty much at a second grade level. </p>
                <p>And I think it still kind of is.</p>
                <p>But we still spoke Bengali at home and I spoke English at school and with my friends, but I think the, you know, my relationship with my mother tongue definitely changed and made me feel bit of like an outsider which is also funny to think about, because it was an international school.</p>
                <p>And so we literally had like kids from all over the world, but I still felt different and I&#x27;m still trying to figure out like why that was the case, even though everyone around me spoke different languages and you know, had like various ethnic backgrounds, et cetera. But yeah, I think that&#x27;s kind of where it started to change for me in terms of my how I think about Bengali and how it relates to me.</p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Going back to the Bangla medium and English medium schools, I&#x27;m also just curious, <b>was there any stratification?</b><br /></p>
                  <p>I guess when it came to who was able to attend those kinds of schools or I guess another way of saying is like, someone&#x27;s gonna know English and Bangla, was that kind of something where it&#x27;s like, oh, if you&#x27;re middle, upper middle class or higher, those kids are getting that. <br /></p>
                  <p>And then, <b>what was the role of English in Dhaka, in the societal role it was playing?</b><br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, totally. I mean, for the most part, I think you&#x27;re spot on. Maybe it&#x27;s different now and because I haven&#x27;t lived in Bangladesh, I might not be as aware of how it&#x27;s playing out currently, but at least when I was growing up I think mostly middle class, upper middle class kids, you&#x27;d see them going to English medium schools.<br /></p>
                  <p>And for the most part, these schools were private schools. And so you had to pay a tuition and that&#x27;s kind of the group of people that would be able to afford it. Whereas with Bangla medium schools I&#x27;m pretty sure there were private schools and a lot of government schools as well. <br /></p>
                  <p>And so I think the difference between being funded by the government versus being a private school, definitely played a role in the demographics or like the students that I would be, you know, spending my time with during the day.<br /></p>
                  <p>Even though we have that stratification at the school level you know, from like elementary to high school as far as I&#x27;m aware, most universities they&#x27;re like English medium. So all of your classes are gonna be taught in English. <br /></p>
      
                  <p>And like, I know in the past maybe like even some of my cousins who might have gone to like a big a Bangla medium school that transition to university might have been like a little harder to them because I mean, now they&#x27;re like being taught in like a completely different language.<br /></p>
                  <p>Obviously they, you know, might have been aware of English and they did speak it, but I think they would&#x27;ve been more confident in Bengali. And you could say the same for me. Like if all of a sudden I was just, yes, I speak Bengali at home, but all my life I&#x27;ve been going to English, medium schools.<br /></p>
                  <p>And if I, all of a sudden had to go to a Bangla medium, like taught university, then it would it would not be good  it would be super hard. But I guess, like that&#x27;s not necessarily as applicable to me because anyways, I was going to an English medium school in Dhaka. I mean the primary language spoken in my school in Jakarta and Dubai were English. And so yeah, I feel like I didn&#x27;t have to, especially cuz I was younger. I wasn&#x27;t like as aware of yeah, of like what was really going on.<br /></p><img class="image-414 phot-fader" src="images/elementaryschool.jpg" alt="" sizes="100vw" data-w-id="cd763c7d-168b-8c3d-2337-439a025af0b4" loading="lazy" srcset="images/elementaryschool-p-500.jpg 500w, images/elementaryschool-p-800.jpg 800w, images/elementaryschool.jpg 1024w" />
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. I mean, I don&#x27;t think anyone would expect a six year old to know about the working class, unless you&#x27;re Greta Thunberg or something.<br /></p>
                  <p>Well, it&#x27;s funny that you mentioned that for like Bangladesh, cuz I&#x27;ve seen it play out in Tamil Nadu and other Indian states.<br /></p>
                  <p>And I&#x27;m thinking of like two movies that are about like Tamil films and like one of them is called <strong>Pariyerum Perumal</strong> and it&#x27;s about a lower cast guy who ends up going to law school and on his first day of school, he doesn&#x27;t know English, but the whole university is just taught in English and then he asks his professor if they can teach in Tamil.<br /></p>
                  <p>I mean it&#x27;s a Tamil university. So he thinks it&#x27;s a very obvious question and everyone just erupts and laughter around him. And then, the teacher gives him... this is like a recurring thing throughout the movie, but the teacher gives him this assignment where he has to write an apology letter, but he has to do it in English.<br /></p>
                  <p>And then there&#x27;s another film called <strong>Kattradhu Thamizh</strong> which was like the main character. He wants to be a Tamil teacher. And it&#x27;s sort about his like societal frustrations of the appreciation of the Tamil language eroding and the sort of how globalization&#x27;s affecting everything.<br /></p>
                  <p>And I dunno, it&#x27;s just so interesting when you think about languages like Tamil or Bangladesh or Hindi and like all these kind of things that have like just huge... Tamil is like one of the oldest languages in the world, you know?<br /></p>
                  <p>And like, there are so many languages that are derived from like Sanskrit and other stuff, like so many languages, like in that part of the world especially, go back like thousands of years or, or something, or even hundreds of years.<br /></p>
                  <p>And so it&#x27;s just kind of crazy to me when you actually sit down and think about how despite having such intense roots, they&#x27;re not considered like the primary thing in our home countries. I also get it because at this point, English is just the norm everywhere.<br /></p>
                  <p>Whether it be for education or business or whatever, it&#x27;s just kind of like become the universal thing, but I&#x27;m sure someone else can write an essay about like colonialism and how that all happened.<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <b className="bolded">Fareeha</b>
                <p>It would be a lot of essays.</p>
                <b className="bolded">Guru</b>
                <p>Yeah. But that was my whole other tangent. I just thought it was very interesting though.</p>
                <b className="bolded">Fareeha</b>
                <p>No, for sure. I think the other interesting thing about Bengali is, I mean when you look back at history, so basically after, you know, partition and basically us being divided by like majority Muslim or majority Hindu in terms of like India being majority Hindu and then west Pakistan and east Pakistan being majority Muslim.<b><br /></b></p>
                <b className="bolded">Guru</b>
                <p>Sorry, not to interrupt me, but I also just wanted to say I can&#x27;t I&#x27;m so happy you said that because I know I I&#x27;m just gonna say this right now. I&#x27;m betting 99% of the people listening to this podcast don&#x27;t even know that Bangladesh at one point was East Pakistan.<b><br /></b></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>No, totally. So basically, yeah, like we were East Pakistan, cuz we were the kind of other Muslim majority part of, you know, whatever the British had colonized. And basically at that time, even though it was technically independence for Indian and Pakistan, it was not independence for what we now know today as Bangladesh cuz we were under West Pakistan&#x27;s rule.<br /></p>
                  <p>And kind of with that, a lot of the stipulations, one of them being we had to speak or do so we couldn&#x27;t speak Bengali basically. So like when you would, if you were to talk to like my dad, I mean he was like pretty young, but his like older siblings, they will tell me like, oh, you know, we literally have to like learn or do in school.<br /></p>
                  <p>And that&#x27;s what we spoke at school and we couldn&#x27;t speak Bengali. And because language is such an important part of your identity. Like at that time they couldn&#x27;t really use Bengali as like, it couldn&#x27;t, it wasn&#x27;t necessarily allowed to be a part of their identity because Everything was in OU. And I remember like, learning about.<br /></p>
                  <p>You know, I don&#x27;t know all that much about Bangladesh&#x27;s history, but what, what I do know is like basically after, you know, 1947, a couple years pass, and there&#x27;s like all this unrest for a lot of different reasons, you know, building up in Bangladesh because we would also want our political and economic and cultural freedom.<br /></p>
                  <p>And because yes, we&#x27;re Muslim majority like west Pakistan, but we still have like our own language and identity and culture. You know, like south Asia is not just like a monolith. And so basically in 1952, you know, a couple years after the partition, 1947 I think like a bunch of university students basically start saying, no, like I wanna speak Bangla.<br /></p>
                  <p>Like, that&#x27;s my mother language, that&#x27;s my mother tongue. And I have a right to speak that in university at home. That&#x27;s how I want to live my life. And so. That basically kind of amounted up to February 21st in 1952. I hope that year is right. <br /></p>
                  <p>But essentially there was like a whole fight for, you know, like our own mother language and a lot of, and you know, to this day we still like commemorate a lot of the martyrs that fought that actually physically fought to be able to speak Bengali.<br /></p>
                  <p>Because a lot of people died in that fight that ensued. And so, and I don&#x27;t know if like everyone would know, but February 21st is actually like national mother tongue or mother language day. And that&#x27;s because of the fight that happened in Bangladesh. And so and also like after kind of, we got independence of our language.<br /></p>
                  <p>That&#x27;s what showed people, you know, maybe we can actually be an independent nation as well. And then in 1971, we finally were after a lot of things happened. And so I think because of that reason and because of like how Bangla actually came to be like the official language, people also have like a lot of pride in the language because, you know, like we, like, we had to fight for it.<br /></p>
                  <p>You know, we did, we couldn&#x27;t speak our own language before. And so even though like, I, like, I&#x27;m not like the most fluent person in Bangla. I still feel like very proud of the fact that I speak Bengali. And this is definitely a different sentiment than what I had just mentioned when I was growing up.<br /></p>
                  <p>And maybe like, this is just part of me growing up and becoming more comfortable with myself and my identity and like my language. But I feel like if you were to ask any other person who speaks Bengali I feel like for the most part you&#x27;d get kind of like a similar sentiment.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>And I would say the same thing about Tamil speakers, because I truly have not met another population on this planet that is as proud of their language than Tamil. And I think part of it does have to do with like, just how old it is.<br /></p>
                  <p>But even in the usual Indian film, they always have like a bunch of dance numbers and stuff. But I&#x27;ve seen like several, Tamil films where for no particular reason, they&#x27;re just throwing in like a language anthem. They just need to have like a quick sideway, to be like, yes, Tamil&#x27;s ruling the world. It is the best thing ever.<br /></p>
                  <p>Going back to what you were saying, there&#x27;s something integral to your identity there, because knowing the language, it is a tool, but then that tool gives you access to such a wealth of things.<br /></p>
                  <p>And also, if you&#x27;re in a <b>random country</b>, let&#x27;s say you go to Finland.<br /></p>
                  <p>Then all of a sudden <b>you hear someone talking Bangla</b>.<br /></p>
                  <p>You&#x27;re like, oh shit, like <b>that&#x27;s my person</b>, you know?<br /></p>
                  <p>So, I feel like the language thing is so integral to not just sort of like a self-identification of like, I want to be like, you know, comfortable proud of just like who I am, but then it is also  outward looking, it helps you connect with others as well.<br /></p>
                  <p>And actually, I guess like kind of taking that theme into Jakarta and Dubai, so how did you go about finding community at these places? Did you meet other like Bangladeshi or just like Bangla speakers at these schools? Or did you have to  find community in a different way?<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, so different experience, both in Jakarta and Dubai. So, in Jakarta I remember like, I don&#x27;t exactly know if this is how it played out, but we lived in a sort of compound. So it was like five different buildings and so a bunch of different people and you kind of just have like, you know, parks and whatever in between.<br /></p>
                  <p>And I remember I was just like out on a walk with my parents and maybe my brother who was just like two or three at the time, but I guess we were speaking Bengali and there was like an older, you know, auntie, I mean, she wasn&#x27;t old. Maybe she was like, whatever.<br /></p>
                  <p>She was just an, but she basically approached us because she heard us speak Bengali and she was like, oh, you guys are, you know, speaking Bengali, like, are you from Bangladesh?<br /></p>
                  <p>Like when did you guys get here? And basically a whole conversation started and that auntie basically introduced us to a whole other Bengali community in Jakarta. And so In some of, and, you know, in like a funny way, some of them were actually like related to us, which we didn&#x27;t know, but that&#x27;s just, you kind of find that out.<br /></p>
                  <p>If you&#x27;re brown, I feel like you&#x27;re at one point related to someone or another person. And so that&#x27;s how we met other, you know, Bengali families in Jakarta, like a country that my parents had never been to, never lived in. We were all new in. But we still found community because we were speaking. You know our language and I basically had met other Bengali kids through there and had that community kind of that way.<br /></p>
                  <p>And so we celebrated things like Eid and Pohela Boishakh, which is like the Bengali New Year. And did all these Bengali celebrations with one another. And even though we were new in that country we still had a community and like, I was always excited to hang out with the other kids over the weekend. <br /></p>
                  <p>What was interesting though, is that we always spoke English with the other kids. So, because I grew up in Dhaka, like I knew at that time, I guess, at least like for how old I was like seven or eight, like my Bangla was, you know, at that level and like pretty good,<br /></p>
                  <p>But some of the other kids had kind of lived in Jakarta for, you know, quite a while or maybe they grew up somewhere else and they moved to Jakarta.And so not everyone span spoke Bengali. And we all just spoke English with one another. But still like, it was nice to have like a shared cultural identity, cuz I didn&#x27;t really find that in my school. There were other Bengali kids, but maybe there were in different grades or different classes.<br /></p>
                  <p>So, we didn&#x27;t have a big Bengali community in Dubai. Like yes, we had some relatives here and there, but it was maybe just like two or three families at most. Whereas in Jakarta it was a bunch. And so I didn&#x27;t really find the friendships that I had found in like a Bengali community in Dubai. And in that way it was different. <br /></p>
                  <p>And I think that like looking back, I also felt a little bad that like, my parents didn&#x27;t have the community that they had back in Jakarta. And so it was a little hard that way in terms of schools. So again, and also what I&#x27;ve noticed in like international schools, you&#x27;ll very rarely find a lot of Bengali kids there cause you know, with international schools, like, yes, we&#x27;re all from different ethnic backgrounds, et cetera.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
            <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>So I&#x27;m just curious at an international school, when we&#x27;re talking about people coming from all these different backgrounds were they predominantly people that were coming from other parts of Asia or they&#x27;re like, like European kids there or South American kids, African kids. I guess like in terms of like, I guess, like how diverse was it?<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah, no, that&#x27;s a good point. So yes, like we would have kids from, you know, 70, 80 different countries, but the number of kids from each of these countries would obviously differ. Like I remember in Jakarta, there was like a really big American and Australian population, as well as Indian and South Korean.<br /></p>
                  <p>In Dubai, I think it was predominantly like South Asia, mainly India, and then predominantly like Middle East.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
            <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>And because you weren&#x27;t speaking Bengali as much or if you&#x27;re an international school, the cultural experience is getting a little, I&#x27;m assuming a little homogenized to some degree.<br /></p>
                  <p>How was that affecting or was it affecting your relationship with your, like your direct relationship with your parents or. Your like other relatives and such because there, like, was there kind of like a, there was a gap forming with the language. So, did that like in create or affect any kind of gap with like other people in your life outside of school?<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. So, I mean the short answer is yes. I remember like, you know, on our trips back, like in the winter or summer more and more, I started to recognize that my Bengali was not as great. And I was like growing different and sometimes, you know, my cousins or like my uncles or aunts would point out like, oh, you speak Lia with an American accent.<br /></p>
                  <p>Or like, you know, like I recognize that, or your English sounds different. You sound totally American. And I guess hearing that, like, I don&#x27;t think they mentioned like a negative way. I think that like, their comments were valid and true. But I did again feel different, but in like so I mean, first when I was growing up and I just moved, I felt different because I spoke Bengali, but now growing up I felt different because it was like, I didn&#x27;t speak Bengali good enough. You know? <br /></p>
                  <p>So there was sort of like a switch, I guess, as I was growing up. And you know, like even now, sometimes because I don&#x27;t have like the full knowledge of Bangla as a language and I&#x27;m still not completely fluent in it in terms of like, my reading is so bad and my writing, I don&#x27;t even wanna think about that, but I recognize that because I don&#x27;t have that full understanding of Bangla.<br /></p>
                  <p>Like a lot of the times I won&#x27;t get jokes or something, or funny videos that my cousins might send, you know, like I&#x27;ll just feel a little left out in that sense. I think I would want to get better at Bengali for sure. I definitely have to put in the effort for that, but yeah, I think it&#x27;s interesting to think about how there was kind of like a switch.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <p>Guru</p>
                <b className="bolded">Going back to, when you were saying you wanted to invest yourself more now with learning Bengali or Bangla. <br /><br />how much have you immersed yourself with Bengali media and if so, has that helped with your understanding, reading, writing, comprehension...</b>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. I remember when I used to go back for some of my breaks to Bangladesh when my aunt and uncle and like my grandparents used to live and talk at the time you know, they had like a bunch of story books in Bengali. And so sometimes I would try and read it. It would take me ages to like, get through like a super short novel.<br /></p>
                  <p>And so I recognize it was hard and like, you know, Bengali is like a very beautiful language. Like if you hear any of the poetry and like Robin not talks you know, songs and like poems that he&#x27;s written or like Kano Islam, it&#x27;s very nice. And like, I really do want to learn that and understand it because the way that I speak Bengali it&#x27;s super informal.<br /></p>
                  <p>So when I&#x27;m reading something like, you know, like a news article or like a novel, it&#x27;ll be a more like formal version of Bengali, which I&#x27;m not as familiar with. I think sometimes, like I just got like a little frustrated because I thought like, <br /></p>
                  <p><b>This is my own language. <br />I should just know it.<br />Why do I have to search up every other word?</b>‍<br /></p>
                  <p>So there were some, you know, one-off efforts of me, like trying to read books and stuff here and there to like, understand the language but it definitely hasn&#x27;t been like something continued like on my behalf.<br /></p>
                  <p>Like you mentioned, like maybe film and TV or music. I remember I was coming back from a wedding with some of my extended relatives and they started playing Bengali songs in their car. So, I was sitting next to one of my other younger cousins. She&#x27;s 10 or something, maybe 12, you know, like in her teens I guess. <br /></p>
                  <p>I was like, oh, I&#x27;ve like, never heard this before. And she was like, oh, how come? You&#x27;ve never heard, heard this before? Like, you&#x27;re not even Bengali, you know, like, it was just like a fun, small comment. And I was like, oh, yikes. Like a 13 year old girl who  grew up in the us, knew this Bengali song and I didn&#x27;t. And like, I literally lived in Bangladesh, you know? <br /></p>
                  <p>And so just small things like that, like make me realize, even though I speak Bengali all the time maybe like I&#x27;m not as close as I could be.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
            <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. But also like I get that. It was like a funny comment but to me, it&#x27;s irritating cause I&#x27;ve definitely been in situations... I think it&#x27;s this thing where people who aren&#x27;t of a culture and, we&#x27;re all guilty of doing this, but if you&#x27;re not part of that culture, you just kind of assume like, oh, this person is an expert on all of those things, you know? <br /></p>
                  <p>So it&#x27;s like, if you&#x27;re from Spain, then you know, the entire history from Spain, from like day one to now, and you should be able to educate me on all the actors, politicians, music, food, all those things.  And then if you don&#x27;t, then they&#x27;re like, oh, well, are you really Spanish? <br /></p>
                  <p>So I&#x27;ve gotten that too, as an Indian person. Like, oh, how do you not know this movie? How do you not know this food? Or, don&#x27;t know this festival or something like that. And it&#x27;s like a it&#x27;s it&#x27;s weird though that we, we kind of do that to people where we treat, sometimes we treat people like monoliths, I guess and sort of just have this like assumption of just like, oh, you must know everything.<br /></p>
                  <p>And it&#x27;s kind of strange to me that like, it&#x27;s wrong on them to assume we&#x27;re the monolith. But for some reason we feel guilty doing everything.but there&#x27;s no reason we should know everything.<br /></p>
                  <p>Even if I did like fully know Tamil and grew up... I mean, I was there for three years and then I came to United States, but like, if I had grown up the entire time and yadda yadda yadda even then, like, there&#x27;s no reason I should be expected to just know everything cuz as a human being, you just can&#x27;t know everything.<br /></p>
                  <p>I don&#x27;t know, like if there&#x27;s like a term for that or something, but it&#x27;s just like really strange that for some reason, we are the ones made to feel bad when it&#x27;s them making the incorrect assumption.<br /></p>
                </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>I&#x27;m totally with you on that. And so sometimes I just feel like a lot of people who grow up in like, who are like third culture kids, they&#x27;ll always have that struggle of like, oh, I&#x27;m not Bengali enough. Or like, maybe I&#x27;m not American enough or blah, blah, blah.<br /></p>
                  <p>And that&#x27;s always kind of there in the background. And I still feel like it&#x27;s there for me, like where I don&#x27;t feel Bengali enough. Like I, you know, like I&#x27;m not super aware of like the trending, like Bangla songs or like Bengali films and like, I wanna be, and I think maybe. Instead of reading the Bengali news  I feel like watching movies might be the way for me to go.<br /></p>
                  <p>Yeah. And it was like, I remember like seeing like in cans or can however you pronounce it. There was like a Bengali film that actually you know, was at, was at the film festival and it was just like really cool, like seeing a Bali film at like this kind of prestigious, you know, thing like prestigious event where like, I would&#x27;ve maybe just associated with like more European films or like something more, you know?<br /></p>
                  <p>And so it was just like it in a way maybe it feels like Bengali culture is like a little more mainstream or like people actually recognize Bangladesh as a country. And maybe like, that&#x27;s something that&#x27;s influencing me to want to, you know, more Bengali songs or like, you know, shows or movies, but I think it is very cool.<br /></p>
                  <p>I think maybe in general, if you just look at the trends in like media, I feel like south Asians are getting more of like rightfully so getting more recognition and even though like Bangladesh is not always kind of up there, I feel like it&#x27;s usually like India or Pakistan just given like the population you know, people would be more like aware of, but yeah, I feel like it is very cool cuz yeah, I think it would just be really nice to have that like shared experience or like way of connecting with people.<br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <p>Guru</p>
                <b className="bolded">When you came to NYU, did you go to any kind of Bengali student association?</b>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
              <div class="p-wrapper side">
                  <p>Yeah. So like I mentioned, most of my friends growing up were like South Asian or just brown or Asian in general. Especially you know, in a place like Dubai where that&#x27;s like a lot of what the student population was. And so, you know, I don&#x27;t even remember like, who said this to me, but someone was like, you know, Fareeha when you like go to college, you should branch out and like seek other different people who you might not have necessarily interacted with.<br /></p>
                  <p>And in freshman year, the dorm that I was placed in, like the floor that I was in, it was predominantly white. And I don&#x27;t even know how it ended up that way, but it did. And so most of the initial interactions that I had with people were white and like, I think mostly American.<br /></p>
                  <p>And that was a demographic that I didn&#x27;t really interact with as much other than like, if it were faculty, like in my high school, in terms of friendships and stuff. And you know, what that person said was just kind of floating in my head. I&#x27;m like maybe I should try and be friends with white people. I don&#x27;t know. Let&#x27;s see how that works out.<br /></p>
                  <p>Yeah, it didn&#x27;t work out. Like I expected it to they were all really nice people, you know? And I think like, it just didn&#x27;t work out because ultimately I realized I&#x27;m more myself and more comfortable. And I just feel more confident when I&#x27;m with other people who are international students, you&#x27;re like Asian or brown or Muslim, or, you know, what have you just like identity identities that kind of overlap a little more with mine.<br /></p>
                  <p>And that&#x27;s totally fine. I think and freshman year I just kind of had to like go through my own realization. And for that reason, cuz again, like in a way I was trying to just be different. I missed out on like bonding with other, you know, south Asian or Bengali kids and I did go to I think it was Bengali student association.<br /></p>
                  <p>But. I remember it was a lot of like, I think Bengali American kids and you know, it&#x27;s interesting, like thinking about my interaction with people who grow up in Bangladesh, people who are Bengali and grow up in different areas of the world and people who are Bengali American, like even though we&#x27;re all Bengali, obviously my interaction, my relationship with everyone is just like a little different just because of, you know, our experiences growing up.<br /></p>
                  <p>And for some reason, I guess at that point, I just, I couldn&#x27;t really relate to as much to like Bengali American kids. And so I didn&#x27;t really stick around with like the BSA as much and, you know, looking back sometimes I wish maybe I, I stuck around like maybe like I would&#x27;ve developed like nice friendships with like other Bengali people which I don&#x27;t really have as much of now.<br /></p>
                  <p>But at the time it just. Especially freshman year. I think I was just trying to figure it out, you know? And I think like, especially sophomore year and like junior year I just like found my people and like I found my friends who I was more comfortable with. And even though I do have like one Bali friend, but like, even though majority of my friends were not Bengali, this issue, like I still found home in them. And so it did work out at the end, but it was definitely a journey trying to kind of navigate that. <b>What was your experience like?</b><br /></p>
              </div>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Guru</div>
                </div>
                <p>I&#x27;m not gonna lie. Like my eternal quest in life is to meet them people like, for some reason, everyone else I know Tamil people. Every time I&#x27;m saying like, oh Tamil, and then they&#x27;re like, oh, I know like 10 of those. I&#x27;m like, where are they? where have they been?<br /></p>
                <p>So yeah, at NYU, I did meet other Indian students who are Indian American or just from like India itself. I feel like the difference there was more so that they were from different parts of India. So, like that was an even greater chasm, because it&#x27;s like, okay, you&#x27;re not only speaking a different language than me, cuz I mean, obviously you go from one state to the next India, it&#x27;s a different world.<br /></p>
                <p>So, they&#x27;re speaking different languages. They&#x27;re also speaking different customs. It&#x27;s like a whole other thing. So I feel like that&#x27;s kind of the reason why I didn&#x27;t like see, or I just didn&#x27;t have like as many Indian friends in college. <br /></p>
                <p>I feel like like at least in your case, like, even if you came from different backgrounds, there&#x27;s like a language similarity, or there are some like customs that are like similar, but then it&#x27;s like between like a south Indian and north Indian, like there&#x27;s a lot of us that are just like, yes, we are Indian but then when you get into the really nitty gritty, it&#x27;s like, there are definitely gonna be some more differences.<br /></p>
                <p>But then yeah, growing up, I knew like a few like Indian kids and we all kind of spoke something completely different from one another, but I feel like it was so like, I don&#x27;t know when you get to NYU, like, yeah, it is a lot more diverse, but like growing up predominantly a white town, it&#x27;s so much more blatant how much of a minority we are.<br /></p>
                <p>I definitely had like a lot more Asian friends, like leading into like high school and everything. But yeah, college was Introducing time. I I&#x27;m still waiting to, to find the, the population in America. I have so much to tell them.<br /></p>
                <p><b>Have you been back to Bangladesh, in the last few years, are you like looking forward to like doing that sometimes soon?</b><br /></p>
            </div>
            <div className='section-wrapper'>
                <div className='name-wrapper'>
                  <div className='bolded-name'>Fareeha</div>
                </div>
                <p>I actually went back a couple months ago. And that was kind of like the first time in like more than two years cuz you know, I couldn&#x27;t go, like I mentioned, we used to go back pretty often like winters and summers. But when I started college in the us, that was a little less frequent cuz it&#x27;s so far inexpensive and then COVID happened.<br /></p>
                <p>So, I basically didn&#x27;t see my parents or my brother for a little over two years. And so I went back earlier in the year and yeah, it was really nice. We still live in that. So after we moved back, we went back to that apartment that I essentially grew up in, in like the same apartment building with my other, you know, family members.<br /></p>
                <p>The number of family members in that building has definitely kind of waned and like died down. So, it&#x27;s a little more quiet, but yeah, it was nice being back. Especially like after a while.<br /></p>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <b className="bolded">Guru</b>
                <p>Nice. And I forget if we asked a similar question already, but the last question I would pose to you is do you have a favorite word in Bengali or a favorite term or phrase?</p>
                <b className="bolded">Fareeha</b>
                <p>That&#x27;s such a good question. Wouldn&#x27;t even know what that would be in like English. There&#x27;s like some random Bengali words, I just like how they sound. Like Br̥ṣṭi. Br̥ṣṭi means rain. And I was just thinking about it the other day. Cuz like it was like a little overcast or maybe it rained, honestly, I don&#x27;t remember.</p>
                <p>But I just like one of my favorite things about being back home is like the way that it feels and smells after it rains. Cause Bangladesh is so like, there&#x27;s like so much greenery and like nature everywhere. It&#x27;s just like. It&#x27;s like a different feeling after it rains, especially like when we have like our monsoon season, obviously, like sometimes it&#x27;s actually bad because there&#x27;s like serious flooding, et cetera. I always remember like those summers those like rainy summers I just loved it when it rained and Br̥ṣṭi is definitely one of those random little words that I like. </p>
                <p>But, you know, I might even like ask this question to my parents and see if they have a favorite Bengali word. I feel like it might even be hard for them to come up with an answer, but yeah, maybe like if I, you know, start watching the Bengali movies and shows and music maybe I&#x27;ll have an actual answer.</p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <b className="bolded">Guru</b>
                <b className="bolded">All right. Cool. Well as we&#x27;re wrapping up, if you just wanna plug your socials or anything else you&#x27;re like working on.</b>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper full'>
                <b className="bolded">Fareeha</b>
                <p>Yeah, totally. I had a chance to work on was actually writing a book and having it published. So it was, it&#x27;s actually like been more than a year, which is crazy to think about. But I wrote a book on social impact where I spoke to a bunch of people in the industry, you know, creating a tangible, positive impact in different ways, whether that be through impact investing or through nonprofits or government, et cetera.</p>
                <p> And I kind of compile it all into my book the impact mind, and it basically looks at how we as individuals can you know, make a difference with the resources that we have at hand. And I feel like because it covers so many different stories and people from so many different walks of life hopefully a story resonates with you and you can see how, you know, you have the power to you know, not necessarily change the whole world, but make a change in the world.</p>
                <p>And so that&#x27;s definitely something I was really excited to work on and still very passionate about. So it would be awesome if you check that out, it&#x27;s called <b>&quot;The Impact Mind&quot; by Fareeha Mahmood.</b></p>
                <b className="bolded">Guru</b>
                <p>Is it on Amazon or where can people find it?</p>
                <b className="bolded">Fareeha</b>
                <p>Yeah, it&#x27;s on the Barnes &amp;Noble website, Amazon. I think it should be on all the major sites,<b><br /></b></p>
                <b className="bolded">Guru</b>
                <p>Well, I hope everyone checks out your book. I&#x27;ll have to check out your book now as well. Thank you again for coming on our, our little podcast here. And also you are closing out season one.</p>
                <b className="bolded">Fareeha</b>
                <p>I feel so special. What an honor.</p>
                <b className="bolded">Guru</b>
                <p>But yeah. Thank you again.</p>
              </div>
            </div>
            <div className='section-wrapper'>
              <div className='p-wrapper side'>
                <b className="bolded">Guru</b>
                <b className="bolded">Thank you so much again for listening. and as always, please like, share, comment, eTC, and whatever else will help us go viral.</b>
              </div>
        </div>
      </div>
    </main>
  )
}

export default Fa

export const Head = () => <title>Fareeha</title>
