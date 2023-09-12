import './modal-project-info.styles.scss';

const ModalProjectInfo = ({info, onClose}) => {
  const {title, description, tech, imageUrl, links} = info;
  console.log(links);
  return(
    <div className="modal-overlay">
      <div className="modalContent">
        <button onClick={onClose} className="close-button">
          &times; {/* The '×' character for the close button */}
        </button>
        <h2>{title}</h2>

        <div className='d-flex row mt-4'>
        <img className='img-fluid col-12 col-sm-5 align-self-center order-sm-1' src={imageUrl} alt="" />
          <div className='col-12 col-sm-6 mt-4 mt-sm-0'>
            <p>{description}</p>
            {tech && (
              <>
              <h4>Tech</h4>
              <div className='d-flex justify-content-start'>
                {tech.map((item) => (
                  <p className='me-2 p-2 badge rounded-pill text-bg-secondary' key={item.id}>{item}</p>
                ))}
              </div>
              </>
            )}

            {links && (
            <h4>Project Link</h4>)}

          </div>

        </div>

      </div>
    </div>
  );

}

export default ModalProjectInfo;