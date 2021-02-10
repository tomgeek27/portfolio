import React from 'react'
import ProjectGrid from './project_grid'
import {projects} from '../constants'
import Feature from './common/feature';

function Projects(props) {
  return (
    <Feature 
      title="Projects" 
      cit={"Good programmers know what to write. Great ones know what to rewrite"} 
      author={"E. Raymond"}>
      <ProjectGrid projects={projects}/> 
    </Feature>
  )
}

export default Projects
