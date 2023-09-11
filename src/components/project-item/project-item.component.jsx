import './project-item.styles.scss';

const ProjectItem = ({info, onClick}) => {
  const { imageUrl, title } = info;
  const handleClick = () => {
    onClick(info);
  }

  return(
    <div className='project-container'>
      <div
        className='background-image'
        style={
          {backgroundImage: `url(${imageUrl})`}
        }
      />
      <div className="project-body-container" onClick={handleClick}>
        <h2>{title}</h2>
      </div>

    </div>
  )
};

export default ProjectItem