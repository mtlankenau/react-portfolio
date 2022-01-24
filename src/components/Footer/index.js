import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  
  const github = "https://github.com/mtlankenau";
  const linkedin = "https://www.linkedin.com/in/mlankenau/";
  const twitter = "https://twitter.com/lank_uh_now"

  return (
    <footer className="bd-footer py-5 mt-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-3 align-items-center">
            <a href={github} target="_blank" rel="noreferrer" className="align-items-center col-lg-6 mb-12">
              <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="align-items-center col-lg-3 mb-3">
              <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            <a href={twitter} target="_blank" rel="noreferrer" className="align-items-center col-lg-3 mb-3">
              <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </a>
          </div>
          <h5>&copy;2022 by mtlankenau</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;