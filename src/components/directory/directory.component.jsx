import React, { useState } from 'react';

import ProjectItem from '../project-item/project-item.component';
import ModalDeveloperInfo from '../modal-project-info/modal-project-developer-info.component';
import ModalMusicInfo from '../modal-project-info/modal-project-music-info.component';
import './directory.styles.scss';

const Directory = ({projects, filterBy}) => {

  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = projects.filter((project) => {
    return project.type === filterBy;
  });

  const handleProjectItemClick = (projectInfo) => {
    // Log the project info when a project item is clicked
    setSelectedProject(projectInfo);
  };

  const closeModal = () => {
    // Close the modal by resetting the selected project
    setSelectedProject(null);
  };

  return(
    <div className='directory-container my-4'>
      {filteredProjects.map((project) => (
      <ProjectItem
        key={project.id}
        info={project}
        onClick={handleProjectItemClick}
      />
    ))}

    {selectedProject && filterBy === 'developer' && (
      <ModalDeveloperInfo info={selectedProject} onClose={closeModal} />
    )}
    {selectedProject && filterBy === 'music' && (
      <ModalMusicInfo info={selectedProject} onClose={closeModal} />
    )}
    </div>
  )
}

export default Directory;