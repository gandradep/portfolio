import React, { useState } from 'react';
import Directory from "../directory/directory.component";

import './projects.styles.scss';
const Projects = () => {
  const [filterBy, setFilterBy] = useState('developer');
  // type: developer||creative||music
  const projects = [
    {
      "id": 9,
      "title": "Munay Suyu",
      "type": "developer",
      "imageUrl": "/images/projects/munaysuyu.jpg",
      "tech": [
        "PHP",
        "Javascript",
        "MySql"
      ],
      "links":{
        "liveUrl":"http://munaysuyu.org/"
      },
      "description": "This project is an all-encompassing mobile application tailored for a spiritual school. This app is a dedicated hub for students and enthusiasts, providing access to a wealth of essential information, historical insights, and upcoming events."
    },
    {
      "id": 11,
      "title": "Breathe Global",
      "type": "developer",
      "imageUrl": "/images/projects/breatheglobal.jpg",
      "tech": [
        "Sass",
        "Javascript",
        "Bootsrap"
      ],
      "links":{
        "liveUrl":"https://www.breathe.global/"
      },
      "description": "Breathe Global in my portfolio showcases my expertise in migrating a webpage related to wearable iron lungs from Webflow to a fully hardcoded solution. This project involved custom interface design, interactivity enhancements, performance optimization, emphasizing my commitment to meaningful technological change for improved web experiences."
    },
    {
      "id": 14,
      "title": "Angeles Mountains",
      "type": "developer",
      "imageUrl": "/images/projects/losangeles.jpg",
      "tech": [
        "CSS3",
        "HTML5",
        "Bootsrap"
      ],
      "links":{
        "liveUrl":"https://gandradep.github.io/angeles_mountains/",
        "source":{
          "text":"Github",
          "url":"https://github.com/gandradep/angeles_mountains"
        }
      },
      "description": "Welcome to the Mountain Hiking Planner, an example web application designed to help outdoor enthusiasts plan their mountain hikes in the beautiful landscapes of Los Angeles. This project is a demonstration of translating a Photoshop design into a functional and responsive web application."
    },
    {
      "id": 13,
      "title" : "Claro de Luna",
      "imageUrl": "/images/projects/luna.png",
      "type": "creative",
      "tech": [
        "Arduino",
        "LogicX"
      ],
      "credits": "Video music by Silla Turca",
      "srcUrl": "https://www.youtube.com/embed/BFaLDq-3-dI?si=0sqa_WhY8vmS1MK-" ,
      "description": "In collaboration with Iriz Collective, I contributed to a customized installation for the 'Bosque de Luz' exhibit at the Botanical Garden of Quito. The installation aimed to immerse visitors in a moonlit environment through carefully designed soundscapes and lighting. The space provided a unique experience of being surrounded by nature under the moon, with an added interactive element—a microphone for visitors to share expressions of gratitude."
    },
    {
      "id": 12,
      "title": "Portfolio S.B.",
      "type": "developer",
      "imageUrl": "/images/projects/steve.jpg",
      "tech": [
        "Sass",
        "Javascript",
        "Bootsrap"
      ],
      "links":{
        "liveUrl":"https://www.stevebull.org/"
      },
      "description": "The project consisted of migrating a portfolio webpage from Webflow to a custom single-page application. The resulting site is responsive, featuring a dynamic menu that appears and hides based on scrolling for an improved user experience. Additionally, the implementation ensures that it is easy for the user to update and showcase new projects on the portfolio."
    },

    {
      "id": 10,
      "title": "Taipei Sounds",
      "type": "developer",
      "imageUrl": "/images/projects/taipeisound.jpg",
      "tech": [
        "React",
        "P5.js",
        "Sass"
      ],
      "links":{
        "liveUrl":"https://taipeisounds.gandradep.com/",
        "source":{
          "text":"Github",
          "url":"https://github.com/gandradep/taipei-sounds"
        }
      },
      "description": " Taipei Sounds , a unique auditory experience that explores the vibrant sounds of Taipei's streets. Developed as part of the \"Fundamental Programming for Digital Music and Sound Synthesis\" class at National Taiwan Normal University, this project offers a creative blend of technology and music."
    },

    {
      "id": 8,
      "title": "Conference Page",
      "type": "developer",
      "imageUrl": "/images/projects/conference_page.jpg",
      "tech": [
        "Html",
        "CSS3",
        "Javascript"
      ],
      "links":{
        "liveUrl":"https://gandradep.github.io/conferencePage/index.html",
        "source":{
          "text":"Github",
          "url":"https://github.com/gandradep/conferencePage"
        }
      },
      "description": "The Mobile-Responsive single-page application (SPA) for a conference page is a software development initiative to create a user-friendly and mobile-optimized platform for hosting and managing conference-related content. "
    },
    {
      "id": 7,
      "title": "Famous Quotes",
      "type": "developer",
      "imageUrl": "/images/projects/quotes.jpg",
      "tech": [
        "React",
        "Redux",
        "Javascript"
      ],
      "links":{
        "liveUrl":"https://profound-biscochitos-b105fe.netlify.app/",
        "source":{
          "text":"Github",
          "url":"https://github.com/gandradep/famousQuotes"
        }
      },
      "description": "A user-friendly mobile application designed to connect you with the profound wisdom of history's most influential thinkers. With just a few taps, you can delve into the deep insights and words of wisdom that have shaped our world. "
    },
    {
      "id": 6,
      "title": "Cronistas de un Mundo sin Voces",
      "imageUrl": "/images/projects/cronistas.png",
      "srcUrl": "https://bandcamp.com/EmbeddedPlayer/album=3425267136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
      "type": "music",
      "embedSrc": "bandcamp",
      "description": "Ep from LCDO released in July 2023. The album was composed during the pandemic and the songs are inspired by different controversial characters. "
    },
    {
      "id": 5,
      "title": "Llanchama",
      "imageUrl": "/images/projects/llanchama.png",
      "srcUrl":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/544680099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      "type": "music",
      "embedSrc": "soundcloud",
      "description": "\"Llanchama\" is an enchanting audio track that captures the essence of a transformative three-month sojourn at the spiritual center in the Peruvian town of Llanchama. Through an intricate interplay of sounds, it eloquently conveys the depth of the artist's immersive experience, inviting listeners to embark on their own spiritual voyage through the Peruvian rainforest. Explore the mystical resonance of nature, ritual, and self-discovery in this captivating installment of the Nomadic Adaptations series"
    },
    {
      "id": 4,
      "title": "No spicy",
      "imageUrl": "/images/projects/nospicy.png",
      "srcUrl": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1591910699&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      "type": "music",
      "embedSrc": "soundcloud",
      "description": "\"No Spicy\" is an extraordinary sound journey that takes you on a captivating journey through the vibrant streets of Seoul, South Korea. This track was originally presented as part of \"Third Other 8,\" and it encapsulates the rich tapestry of sounds encountered during a two-week holiday in Seoul, including recordings from metro stations and Korean pubs."

    },
    {
      "id": 3,
      "title" : "Drones Question Booths",
      "imageUrl": "/images/projects/drones.png",
      "type": "creative",
      "tech": [
        "Processing",
        "FacadeSignage"
      ],
      "credits": "Video music by Silla Turca",
      "srcUrl": "https://player.vimeo.com/video/224869964?h=3dd8ad19ef",
      "description": "This exhibition allows users to engage with the captivating world of drones while revealing their genuine thoughts and perceptions about this transformative technology. Through interactive touch-screen question booths, visitors become active participants, shaping a real-time projection mapping display that reflects the collective sentiments and curiosity surrounding drones. Designed for th Drone Exhibition at the Intrepid Museum in NYC, 2017."
    },
    {
      "id": 2,
      "title" : "A Day in the Andes",
      "imageUrl": "/images/projects/andes.png",
      "type": "creative",
      "tech": [
        "Processing",
        "Adobe Premier",
        "LogicX"
      ],
      "credits": "Video music by Mauricio Vicencio",
      "srcUrl": "https://www.youtube.com/embed/-36Y2RvOVU8?si=wHJUWNSrUqO8HsJM",
      "description": "The performance is a sensory voyage that transports the audience into the heart of the Andes. Through a harmonious blend of immersive soundscapes, meticulously crafted visual elements, and the rhythmic poetry of traditional dances, it creates an enchanting and authentic portrayal of \"A Day in the Andes. Showcased at the prestigious faculty event, IMPACT 2016, at Loewe Theater, NYU Steinhardt."
    },
    {
      "id": 1,
      "title" : "Surveillance",
      "imageUrl": "/images/projects/surveillance.png",
      "type": "creative",
      "tech": [
        "MaxMsp",
        "Adobe Premier",
        "LogicX"
      ],
      "credits": "",
      "srcUrl": "https://player.vimeo.com/video/162329450?h=05b6b8ffbd",
      "description": "Installation selected for the GSO grant 2015 by Tisch School of the Arts of NYU. The installation is a big Eye with screens, where you can see live and pre recorded video. The purpose of the piece is to remind people that nowadays (specially in big cities) we are always being surveilled"
    }
  ];
  const handleButtonClick = (content) => {
    setFilterBy(content);
  }
  return(
    <div className="projects-container">
      <h1 className='text-center'>My Recent Works</h1>
      <div className='my-4 d-flex flex-column flex-sm-row justify-content-center align-items-center'>
        <button
          onClick={() =>handleButtonClick('developer')}
          className={ filterBy === 'developer' ? 'button active-button' : 'button'}
        >
            Developer
        </button>
        <button
          onClick={() =>handleButtonClick('creative')}
          className={ filterBy === 'creative' ? 'button active-button' : 'button'}
        >
            Creative Tech
        </button>
        <button
          onClick={() =>handleButtonClick('music')}
          className={ filterBy === 'music' ? 'button active-button' : 'button'}
        >
            Music
        </button>

      </div>

      <Directory projects={projects} filterBy={filterBy} />
    </div>
  )
};

export default Projects;