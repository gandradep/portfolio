import ProjectItem from '../project-item/project-item.component';
import './directory.styles.scss';

const Directory = ({projects}) => {
  return(
    <div >
      {projects.map((project) => (
      <ProjectItem key={project.id} info={project}/>
    ))}
    </div>

  )

}

export default Directory;