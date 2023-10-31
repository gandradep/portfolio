import './modal-project.styles.scss';

import ModalDeveloperInfo from '../modal-info/modal-developer-info.component';
import ModalMusicInfo from '../modal-info/modal-music-info.component';
import ModalCreativeInfo from '../modal-info/modal-creative-info.component';

const ModalProject = ({info, onClose}) => {
  const {title} = info;

  return(
    <div className="modal-overlay">
      <div className="modalContent">
        <div className="modalHeader">
          <button onClick={onClose} className="close-button">
            &times; {/* The '×' character for the close button */}
          </button>
          <h2>{title}</h2>
        </div>

        {info.type==='developer' && (
          <ModalDeveloperInfo info={info} />
        )}
        {info.type==='music' && (
          <ModalMusicInfo info={info} />
        )}
        {info.type==='creative' && (
          <ModalCreativeInfo info={info} />
        )}

      </div>
    </div>
  );

}

export default ModalProject;