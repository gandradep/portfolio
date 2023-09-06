import './project-item.styles.scss';

const ProjectItem = ({info}) => {
  const { imageUrl, title } = info;
  return(
    <div className='project-container'>
      <div
        className='background-image'
        style={
          {backgroundImage: `url(${imageUrl})`}
        }
      />
      <div className="project-body-container">
        <h2>{title}</h2>
      </div>

    </div>
  )
};

export default ProjectItem