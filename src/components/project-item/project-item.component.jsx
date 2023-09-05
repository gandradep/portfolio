import './project-item.styles.scss';

const ProjectItem = ({info}) => {
  return(
    <div>
      {info.title} {info.type}
    </div>
  )
};

export default ProjectItem