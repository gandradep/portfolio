import ProjectItem from '../project-item/project-item.component';
import './directory.styles.scss';

const Directory = ({projects, filterBy}) => {
  console.log(filterBy);
  const filteredProjects = projects.filter((project) => {
    return project.type === filterBy;
  });
  return(
    <div >
      {filteredProjects.map((project) => (
      <ProjectItem key={project.id} info={project}/>
    ))}
    </div>

  )

}

export default Directory;