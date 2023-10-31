import './modal-info.styles.scss';

const ModalDeveloperInfo = ({info}) => {
  const {description, tech, imageUrl, links} = info;
  return(
    <div className='d-flex row'>
          <img className='img-fluid col-12 col-sm-5 align-self-center order-sm-1' src={imageUrl} alt="" />
          <div className='col-12 col-sm-6 mt-4 mt-sm-0'>
            <p>{description}</p>
            {tech && (
              <>
              <h4 className='my-4'>Tech</h4>
              <div className='d-flex justify-content-start'>
                {tech.map((item) => (
                  <p className='me-2 px-3 py-2 badge rounded-pill text-bg-secondary' key={item.id}>{item}</p>
                ))}
              </div>
              </>
            )}
            {links && (
              <>
                <h4 className='mb-3'>Project Links</h4>
                {links.liveUrl &&(
                  <a className='link-button' href={links.liveUrl} target='_blank' rel="noreferrer">Live</a>
                )}
                {links.source &&(
                  <a className='link-button' href={links.source.url} target='_blank' rel="noreferrer">{links.source.text}</a>
                )}

              </>
            )}
          </div>
        </div>
  );

};

export default ModalDeveloperInfo;