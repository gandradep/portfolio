import React, { useState } from 'react';
import Directory from "../directory/directory.component";

import './projects.styles.scss';
const Projects = () => {
  const [filterBy, setFilterBy] = useState('developer');
  const projects = [
    {
      "id": 1,
      "title": "Budget App",
      "type": "developer",
      "imageUrl": "/images/projects/budgetMobile.png",
      "description": "This application, helps us keep track of our expenses. You can create categories and add expenses to one or several categories you created."
    },
    {
      "id": 2,
      "title": "example2",
      "imageUrl": "/images/projects/budgetMobile.png",
      "type": "creative"
    },
    {
      "id": 3,
      "title": "example3",
      "imageUrl": "/images/projects/budgetMobile.png",
      "type": "music"
    }
  ];
  const handleButtonClick = (content) => {
    setFilterBy(content);
  }
  return(
    <div>
      <h1>My Recent Works</h1>
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
      <Directory projects={projects} filterBy={filterBy} />
    </div>
  )
};

export default Projects;