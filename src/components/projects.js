import React from 'react'
import ProjectGrid from './project_grid'
import {projects} from '../constants'
import Feature from './common/feature';

function Projects() {
  return (
    <Feature 
      title="Projects" 
      cit={"Anyone who has lost track of time when using a computer knows the propensity to dream, the urge to make dreams come true and the tendency to miss lunch."} 
      author={"Tim Berners Lee"}>
      <ProjectGrid projects={projects}/> 
    </Feature>
  )
}

export default Projects
