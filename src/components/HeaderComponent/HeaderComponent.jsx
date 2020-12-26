import React from 'react';
import './HeaderComponent.scss';

export default function HeaderComponent(){

  return(
    <div className="link-container">

      <a className="header-link" href="https://www.linkedin.com/in/austin-blackman-86893b55">
      Contact me {' '} <i className="fab fa-linkedin"></i>
      </a>
      <a className="header-link" href="https://github.com/ajblack/personal_site">
      See my code {' '} <i className="fab fa-github"></i>
      </a>
    </div>
  )
}
