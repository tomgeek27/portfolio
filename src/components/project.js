import React from 'react';
import ghlogo from '../assets/imgs/github.svg'
function Project(props) {
  return (
    <div className="margin17">
      <a href={props.url} className="project flex-column vertical-center horizontal-center">
        <img src={props.src} style={{ width: '150px', height: '150px' }} />
        <div className="flex-column vertical-center margin43h margin23top">
          <span className="title-project">{props.title}</span>
          <div className="subtitle-project margin5top">{props.subtitle}</div>
        </div>
      </a>
    </div>
  );
}

export default Project;