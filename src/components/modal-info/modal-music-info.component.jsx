import './modal-info.styles.scss';

const ModalMusicInfo = ({info}) => {
  const {description, srcUrl, title, embedSrc} = info

  let iframeClassName = "";
  if (embedSrc === "bandcamp") {
    iframeClassName = "music-bandcamp";
  } else if (embedSrc === "soundcloud") {
    iframeClassName = "music-soundcloud";
  }

  return(
    <div className='d-flex row'>
      <div className='col-12 col-sm-5 align-self-center order-sm-1 d-flex justify-content-center'>
        <iframe title={title} className={iframeClassName} src={srcUrl} seamless />
      </div>

      <div className='col-12 col-sm-6 mt-4 mt-sm-0'>
        <p>{description}</p>
      </div>
    </div>

  )
}

export default ModalMusicInfo;