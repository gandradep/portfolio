import React, { useState } from 'react';
import Directory from "../directory/directory.component";

import './projects.styles.scss';
const Projects = () => {
  const [filterBy, setFilterBy] = useState('developer');
  // type: developer||creative||music
  const projects = [
    {
      "id": 1,
      "title": "Munay Suyu",
      "type": "developer",
      "imageUrl": "/images/projects/munaySuyuMobile.png",
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
      "id": 2,
      "title": "Conference Page",
      "type": "developer",
      "imageUrl": "/images/projects/conference_page.png",
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
      "id": 3,
      "title": "Famous Quotes",
      "type": "developer",
      "imageUrl": "/images/projects/quotes.png",
      "tech": [
        "Html",
        "CSS3",
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
      "id": 4,
      "title": "Cronistas de un Mundo sin Voces",
      "imageUrl": "/images/projects/cronistas.png",
      "srcUrl": "https://bandcamp.com/EmbeddedPlayer/album=3425267136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
      "type": "music",
      "description": "Ep from LCDO released in July 2023. The album was composed during the pandemic and the songs are inspired by different controversial characters. "
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