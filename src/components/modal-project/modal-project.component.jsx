import './modal-project.styles.scss';

import ModalDeveloperInfo from '../modal-info/modal-developer-info.component';
import ModalMusicInfo from '../modal-info/modal-music-info.component';

const ModalProject = ({info, onClose}) => {
  const {title} = info;

  return(
    <div className="modal-overlay">
      <div className="modalContent">
        <button onClick={onClose} className="close-button">
          &times; {/* The '×' character for the close button */}
        </button>
        <h2>{title}</h2>
        {info.type==='developer' && (
          <ModalDeveloperInfo info={info} />
        )}
        {info.type==='music' && (
          <ModalMusicInfo info={info} />
        )}

      </div>
    </div>
  );

}

export default ModalProject;