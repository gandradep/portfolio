import React, { useState } from 'react';
import './project-item.styles.scss';

const ProjectItem = ({info, onClick}) => {
  const { imageUrl, title } = info;
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {


    if (isMobileDevice()) {
      if(isTapped){
        onClick(info);
      }
      setIsTapped(!isTapped);
    } else {
      // On desktop, trigger the onClick prop
      onClick(info);
    }
  }

  const isMobileDevice = () => {
    const mobileWidthThreshold = 768; // Adjust this threshold as needed
    return window.innerWidth < mobileWidthThreshold;
  };

  const containerClassName = `project-container ${
    isTapped ? 'tapped' : ''
  }`;

  return(
    <div className={`${containerClassName} my-2`} onClick={handleTap}>
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