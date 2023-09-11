import React, { useState } from 'react';
import './project-item.styles.scss';

const ProjectItem = ({info, onClick}) => {
  const { imageUrl, title } = info;
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    if (isMobileDevice()) {
      if (isTapped) {
        // Trigger the onClick prop on the second tap/click
        onClick(info);
      }
      setIsTapped(!isTapped); // Toggle the tapped state
    } else {
      // On desktop, directly trigger the onClick prop on the first click
      onClick(info);
    }
  }

  const isMobileDevice = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const containerClassName = `project-container ${
    isTapped ? 'tapped' : ''
  }`;

  return(
    <div className={containerClassName} onClick={handleTap}>
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