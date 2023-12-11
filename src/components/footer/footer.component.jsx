import './footer.styles.scss';

const Footer = () => {

  return(
    <div className='bg-black d-flex justify-content-center py-5 align-items-center'>
      <ul className='list-unstyled text-white d-flex justify-content-around m-0'>
        <li>
          <a href="https://github.com/gandradep" rel="noreferrer" target="_blank" className="logo">
            <img className="logo" src="images/social-media/github.svg" alt="github link" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-andrade-silla-turca/" rel="noreferrer" target="_blank" className="logo">
            <img src="images/social-media/linkedin.svg" alt="linkedin link" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/leribagandrade" rel="noreferrer" target="_blank" className="logo">
            <img src="images/social-media/twitter.svg" alt="twitter link" />
          </a>
        </li>
      </ul>

    </div>

  )

}

export default Footer;