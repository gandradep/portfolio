import './modal-project-info.styles.scss';

const ModalProjectInfo = ({title, onClose}) => {

  return(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          &times; {/* The '×' character for the close button */}
        </button>
        <h2>{title}</h2>
      </div>
    </div>
  );

}

export default ModalProjectInfo;