import React from 'react';
import ghlogo from '../assets/imgs/github.svg'
function Project(props) {
  return (
    <a href={props.url}>
      <div className="project flex-column vertical-center horizontal-center margin17">
        <img src={props.src} style={{width: '150px', height: '150px'}}/>
        <div className="flex-column vertical-center margin43h margin23top">
          <span className="title-project">{props.title}</span>
          <div className="subtitle-project margin5top">{props.subtitle}</div>
        </div>
      </div>
    </a>
  );
}

export default Project;