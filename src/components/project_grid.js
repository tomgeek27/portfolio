import React from 'react';
const _ = require("lodash");             

const project_div_dim = 365; 


function ProjectGrid(props) {
  
  const [width, setWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
 
  }, [])
  
  var elem_per_row = Math.min(Math.max(1, Math.floor(width / project_div_dim)), 3)
  var triples = props.projects.length / elem_per_row + 1
  
  return (
    <div class="flex-column">
      {
        _.times(triples, (i) => {
          return <div class="flex-row vertical-center">
            {
              props.projects.slice((elem_per_row * i), Math.min((elem_per_row * i) + elem_per_row), props.projects.length).map(element => 
                <Project title={element.title} subtitle={element.subtitle} src={element.src} url={element.url}/>
              )
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