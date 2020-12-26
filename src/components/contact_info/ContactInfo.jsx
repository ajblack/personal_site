import React from 'react';
import './ContactInfo.scss';

export default function ContactInfo(){

  return(
    <div className="content-container">
      <h1>Austin Blackman</h1>
      <ul>
        <li>
          <a href={process.env.PUBLIC_URL+'/austin_blackman_resume.pdf'}>
            resume {''}<i className="fas fa-file-pdf"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
