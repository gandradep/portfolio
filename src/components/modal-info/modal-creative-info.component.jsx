import './modal-info.styles.scss';

const ModalCreativeInfo = ({info}) => {
  const {description, srcUrl, title, tech, credits} = info

  return(
    <div className='d-flex row'>
      <div className='col-12 col-sm-6 align-self-center order-sm-1 d-flex justify-content-center'>
        <div className='w-100'>
          <iframe
            className="video-youtube"
            src={srcUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <p>{credits}</p>
        </div>

      </div>

      <div className='col-12 col-sm-6 mt-4 mt-sm-0'>
        <p>{description}</p>
        {tech && (
              <>
              <h4 className='my-4'>Tech</h4>
              <div className='d-flex justify-content-start'>
                {tech.map((item, index) => (
                  <p className='me-2 px-3 py-2 badge rounded-pill text-bg-secondary' key={index}>{item}</p>
                ))}
              </div>
              </>
            )}
      </div>
    </div>

  )
}

export default ModalCreativeInfo;

