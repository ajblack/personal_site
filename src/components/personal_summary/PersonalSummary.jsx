import React from 'react';
import './PersonalSummary.scss';

export default function PersonalSummary(){

  return(
    <div>
      <p className="bold">
      I am a front-end focused software engineer based in Manchester, New Hampshire.
      </p>
      <p className="bold">
      I am passionate about creating effective user interfaces for clients across numerous industries.
      </p>
      <p>
      Outside of work, you will find me playing in the mountains or working with my brother on his
      {' '}
      <a href="https://firstchairsyrup.com/"> maple sugar farm
      </a>
      .
      </p>
    </div>
  )
}
