import React from 'react';
import './ContactInfo.scss';

export default function ContactInfo(){

  return(
    <div>
      <h2>Austin Blackman</h2>
      <ul>
        <li>
        austin.blackman@gmail.com
        </li>
        <li>
        802-236-7898
        </li>
        <li>
          <a href={process.env.PUBLIC_URL+'/austin_blackman_resume.pdf'}>
            resume {''}
          </a>
        </li>
      </ul>
      <div>
        <a href="https://www.linkedin.com/in/austin-blackman-86893b55">
          <img src={process.env.PUBLIC_URL+'/li.png'}/>
        </a>
        <a href="https://github.com/ajblack">
          <img src={process.env.PUBLIC_URL+'/github.png'}/>
        </a>
      </div>
    </div>
  )
}
