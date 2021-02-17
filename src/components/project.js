import React from 'react';
function Project(props) {
  return (
    <div className="margin17">
      <a href={props.url} className="project flex-column vertical-center horizontal-center">
        <img className="img-project" src={props.src} alt=""/>
        <div className="flex-column vertical-center margin43h margin23top">
          <span className="title-project">{props.title}</span>
          <div className="subtitle-project margin5top">{props.subtitle}</div>
        </div>
      </a>
    </div>
  );
}

export default Project;