import React from 'react';
const _ = require("lodash");             

function ProjectGrid(props) {
  
  return (
    <div class="row vertical-center">
      {
        props.projects.map((element) => {
          return <div class="flex-row vertical-center col-xl-4 col-lg-5 col-md-12">
            {
              
              <Project title={element.title} subtitle={element.subtitle} src={element.src} url={element.url}/>
              
            } </div>
          })
      }
    </div>
  );
}

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

export default ProjectGrid;