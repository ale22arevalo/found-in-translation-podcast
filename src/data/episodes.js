// One entry per episode, in the order they appear on the home page (newest season first).
// `number` is the episode's place in release order, used for previous/next links.
// `slug` is the page under src/pages, `anchor` is the section id on the home page.
// The first blurb paragraph follows the guest's bolded full name.
const episodes = [
  {
    slug: "tim",
    number: 5,
    anchor: "tim",
    name: "Tim",
    fullName: "Tim Bumatay",
    season: 2,
    title: "Talking Tagalog and Existential Crises",
    color: "#ffbf69",
    blurb: [
      " is here to talk about a crisis — but in a fun, intellectual, and intersectional kind of way. And a reminder that it’s never too late to learn a new language!",
      "He discusses his struggles with connecting to Tagalog and Filipino culture, his aspirations to visit The Philippines, his fascination with languages in general, and how his definition of what it means to be American has evolved throughout his life.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/1KTiEBo7wHVLhFvT1hnKV7?si=KHVcpzw5SA6g4DBeX3-Xuw",
      apple: "https://podcasts.apple.com/us/podcast/episode-5-talking-tagalog-and-existential-crises/id1752322799?i=1000732913792",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/0d07c451-211f-4500-866d-9d977ba2425d/found-in-translation-episode-5-talking-tagalog-and-existential-crises",
    },
  },
  {
    slug: "tania",
    number: 6,
    anchor: "tania",
    name: "Tania",
    fullName: "Tania Varganova",
    season: 2,
    title: "Russian Globetrotter",
    color: "#fee440",
    blurb: [
      " has two people to thank for inspiring her to come live in NYC: Mary-Kate and Ashley Olsen. Go watch New York Minute if you want to learn more.",
      "In the meantime, she talks about what it was like growing up in Russia, how she became the English expert among her friends in St. Petersburg, how her personality differs between speaking in English versus Russian, and what her transition moving to NYC and adapting to American culture has been like over the past number of years.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/71rdRrFm8kcW4rK7150g1m?si=yCk6IcS7R6miszNpviHX_w",
      apple: "https://podcasts.apple.com/us/podcast/episode-6-russian-globetrotter/id1752322799?i=1000735241695",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/68293e47-0a6b-447f-829e-966509b05f4a/found-in-translation-episode-6-russian-globetrotter",
    },
  },
  {
    slug: "cristina",
    number: 7,
    anchor: "cristina",
    name: "Cristina",
    fullName: "Cristina Hain",
    season: 2,
    title: "Diving into Deutschland (and the Philippines!)",
    color: "#BDCFB5",
    blurb: [
      " takes a break from traveling around the world to (once again) be a guest on a Guru (and Alejandra) podcast! As a German-Filipino woman, Cristina talks about how her multicultural upbringing affected her language journey.",
      "While she mainly speaks about her experience with German and living in Berlin for a summer, she also shares why she bounced between learning German, Spanish, and Tagalog throughout her life and why she chose to pursue a linguistics minor in college.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/16PSCArTjHxPm2UB9eicUO?si=OGtJHRG-Q-GlpmPYZwURLA",
      apple: "https://podcasts.apple.com/us/podcast/episode-7-diving-into-deutschland-and-the-philippines/id1752322799?i=1000737473102",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/646f73cb-a586-4ccd-84f1-039e17f422a7/found-in-translation-episode-7-diving-into-deutschland-and-the-philippines",
    },
  },
  {
    slug: "boying",
    number: 8,
    anchor: "boying",
    name: "Boying",
    fullName: "Boying Tang",
    season: 2,
    title: "China(town) Chronicles",
    color: "#ff8fab",
    blurb: [
      " was born in China, raised in NYC’s Chinatown, and mainly grew up on Chinese media, including Mandarin-language games and TV shows.",
      "She shares how her experience living in that neighborhood and the influence of Chinese media affected her cultural identity and perception of Asian American media representation at large. She also dives into the nuances of learning Mandarin, going to Chinese school, and her preferences on communicating between Mandarin and English.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/3mtnx8OFlLi5XjlNtzUlYE?si=1de8bba4d7434a54",
      apple: "https://podcasts.apple.com/us/podcast/episode-8-china-town-chronicles/id1752322799?i=1000738925264",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/8c20abf0-4149-4899-8d2e-f30fd048fa93/found-in-translation-episode-8-china-town-chronicles",
    },
  },
  {
    slug: "jared",
    number: 9,
    anchor: "jared",
    name: "Jared",
    fullName: "Jared Patel",
    season: 2,
    title: "How an Aspirational/Aspiring Polyglot Mastered Mandarin",
    color: "#a7c957",
    blurb: [
      ", a Puerto Rican-Indian from New York, discusses his connection to Spanish and Gujarati, why he dedicated himself to learning Mandarin and immersing himself in Chinese culture, his experience studying abroad in China, and how this unique language journey has affected his familial relationships and personal identity.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/0GEi31ozdrZKNEMl21XjvL?si=04f66e008ca048e3",
      apple: "https://podcasts.apple.com/us/podcast/found-in-translation/id1752322799?i=1000741784512",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/f1ab9bae-683e-412b-b9c8-719373e1f8b9/found-in-translation-episode-9-how-an-aspirationalaspiring-polyglot-mastered-mandarin",
    },
  },
  {
    slug: "rachel",
    number: 1,
    anchor: "rachel",
    name: "Rachel",
    fullName: "Rachel Lee",
    season: 1,
    title: "Korean Whispers",
    color: "#a3cef1",
    blurb: [
      " would like to thank the K-Pop group GOT7 for changing her life. The dancer-marketer-photographer-podcaster-artist extraordinaire credits them with inspiring her to learn Korean and connect more with her culture.",
      "She shares how she navigated her Korean identity while growing up in Dallas, Texas, how that affected her relationship with her relatives, peers, and church group, and the rise of Korean media’s global dominance.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/0zTTVVqz56JDLyBtCWxh31?si=2Yja4IdhTSGlJChbH-UJ6Q",
      apple: "https://podcasts.apple.com/us/podcast/episode-1-korean-whispers/id1752322799?i=1000659578614",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/daf1cee0-df6f-46cc-b9ad-c1c69dab41f7/found-in-translation-episode-1-korean-whispers",
    },
  },
  {
    slug: "michael",
    number: 2,
    anchor: "michael",
    name: "Michael",
    fullName: "Michael Oluokun",
    season: 1,
    title: "A Comedy of Errors and Education (in Yoruba)",
    color: "#94d2bd",
    blurb: [
      " is a comedian who takes us on a rip-roaring journey through his life, spanning stories between Little Rock, Arkansas, Washington D.C., and NYC.",
      "He shares how he hilariously uncovered Nigerian customs at family parties, how learning Yoruba in college led to the realization that he had been mispronouncing his last name for almost 20 years, and how his writing and performances have been shaped by this journey.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/0PSfqaMO2ftb9SJHTHHQeB?si=AOdpHNw4SKiCZesWbmgTag",
      apple: "https://podcasts.apple.com/us/podcast/episode-2-a-comedy-of-errors-and-education-in-yoruba/id1752322799?i=1000660980264",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/f4f6a6c9-3df1-4ec1-b076-a0b3b2e1b481/found-in-translation-episode-2-a-comedy-of-errors-and-education-in-yoruba",
    },
  },
  {
    slug: "cy",
    number: 3,
    anchor: "cynthia",
    name: "Cynthia",
    fullName: "Cynthia Mojica",
    season: 1,
    title: "Signature Moves",
    color: "#c8b6ff",
    blurb: [
      " embodied the role of translator for her parents as a child. She is a hearing person while her mom is hard-of-hearing and her dad is deaf, so the language they predominantly use at home is American Sign Language (ASL).",
      "She talks about being a C.O.D.A (Child of Deaf Adults), the nuances and structure of ASL as a language, and the pertinence of bringing more accessible spaces into our society.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/3DcfUVtJbhekzPyssvo4rx?si=rQD1dtXSSzKm6XKY8NrpBg",
      apple: "https://podcasts.apple.com/us/podcast/episode-3-signature-moves/id1752322799?i=1000662561982",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/74a2be53-91ba-4f9d-9e69-609da6dcb043/found-in-translation-episode-3-signature-moves",
    },
  },
  {
    slug: "fa",
    number: 4,
    anchor: "fareeha",
    name: "Fareeha",
    fullName: "Fareeha Mahmood",
    season: 1,
    title: "Third Culture Living",
    color: "#cbeef3",
    blurb: [
      " talks us through a globe-trotting journey beginning with her upbringing in Dhaka, Bangladesh, attending international schools in Indonesia and UAE, and finally moving to NYC.",
      "She talks about how her experiences in these vastly different countries affected her knowledge of Bengali and proximity to Bengali culture, how the history of Bangladesh influenced her passion for the language, and the concept of language as a form of self-identification.",
    ],
    links: {
      spotify: "https://open.spotify.com/episode/1fgnXhMBJz6bEU6XunT28p?si=hLBesZTRTJuTYk7dbWA1vw",
      apple: "https://podcasts.apple.com/us/podcast/episode-4-third-culture-living/id1752322799?i=1000663960462",
      amazon: "https://music.amazon.com/podcasts/48ecb0b7-af78-4191-a8bc-dbf45dc5acdf/episodes/811c2c8d-8cb0-4974-aa98-46b9d531994d/found-in-translation-episode-4-third-culture-living",
    },
  },
]

export const getEpisode = slug => episodes.find(episode => episode.slug === slug)

// The episodes released just before and after this one (either may be undefined)
export const getAdjacentEpisodes = slug => {
  const { number } = getEpisode(slug)
  return {
    previous: episodes.find(episode => episode.number === number - 1),
    next: episodes.find(episode => episode.number === number + 1),
  }
}

export default episodes
