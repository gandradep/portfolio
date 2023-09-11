import ProjectItem from '../project-item/project-item.component';
import './directory.styles.scss';

const Directory = ({projects, filterBy}) => {
  const filteredProjects = projects.filter((project) => {
    return project.type === filterBy;
  });

  const handleProjectItemClick = (projectInfo) => {
    // Log the project info when a project item is clicked
    console.log(projectInfo);
  };

  return(
    <div className='directory-container'>
      {filteredProjects.map((project) => (
      <ProjectItem
        key={project.id}
        info={project}
        onClick={handleProjectItemClick}
      />
    ))}
    </div>
  )
}

export default Directory;