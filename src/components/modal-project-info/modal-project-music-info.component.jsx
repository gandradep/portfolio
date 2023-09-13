import './modal-project-info.styles.scss';

const ModalMusicInfo = ({info, onClose}) => {
  const {title, description, imageUrl} = info;

  return(
    <div className="modal-overlay">
      <div className="modalContent">
        <button onClick={onClose} className="close-button">
          &times; {/* The '×' character for the close button */}
        </button>
        <h2>{title} Music</h2>

        <div className='d-flex row mt-4'>
        <img className='img-fluid col-12 col-sm-5 align-self-center order-sm-1' src={imageUrl} alt="" />
          <div className='col-12 col-sm-6 mt-4 mt-sm-0'>
            <p>{description}</p>


          </div>

        </div>

      </div>
    </div>
  );

}

export default ModalMusicInfo;