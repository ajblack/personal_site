import React from 'react';
import './ContactInfo.scss';

export default function ContactInfo(){

  return(
    <div className="content-container">
      <h1>Austin Blackman</h1>
      <ul>
        <li>
          <a href={'/resume.pdf'} target='_blank'>
            resume {''}<i className="fas fa-file-pdf"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
