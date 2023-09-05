import React, { useState } from 'react';
import Directory from "../directory/directory.component";
const Projects = () => {
  const [filterBy, setFilterBy] = useState('developer');
  const projects = [
    {
      "id": 1,
      "title": "example1",
      "type": "developer"
    },
    {
      "id": 2,
      "title": "example2",
      "type": "creative"
    },
    {
      "id": 3,
      "title": "example3",
      "type": "music"
    },
    {
      "id": 4,
      "title": "example4",
      "type": "developer"
    }
  ];
  const handleButtonClick = (content) => {
    setFilterBy(content);
  }
  return(
    <div>
      <h1>My Recent Works</h1>
      <button onClick={
        () =>handleButtonClick('developer')
        }>
          Developer
      </button>
      <button onClick={
        () =>handleButtonClick('creative')
        }>
          Creative Tech
      </button>
      <button onClick={
        () =>handleButtonClick('music')
        }>
          Music
      </button>
      <Directory projects={projects} filterBy={filterBy} />
    </div>
  )
};

export default Projects;