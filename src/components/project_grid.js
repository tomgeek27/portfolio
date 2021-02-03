import React from 'react';
import Project from './project'
const _ = require("lodash");             

function ProjectGrid(props) {

  var triples = props.projects.length / 3 + 1
  console.log(triples)
  return (
    <div class="flex-column">
      {
        _.times(triples, (i) => {
          console.log(props.projects.slice((3*i), Math.min((3*i) + 3), props.projects.length))

          return <div class="flex-row vertical-center">
            {
              //
              props.projects.slice((3*i), Math.min((3*i) + 3), props.projects.length).map(element => 
                <Project title={element.title} subtitle={element.subtitle} src={element.src}/>
              )
            } </div>
          })
      }
    </div>
  );
}

export default ProjectGrid;