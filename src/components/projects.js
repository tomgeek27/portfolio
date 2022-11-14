import React from 'react'
import ProjectGrid from './project_grid'
import {projects} from '../constants'
import Content from './common/content';

function Projects() {
  return (
    <Content 
      title={{it: "Progetti", en: "Projects"}} 
      cit={"Anyone who has lost track of time when using a computer knows the propensity to dream, the urge to make dreams come true and the tendency to miss lunch."} 
      author={"Tim Berners Lee"}>
      <ProjectGrid projects={projects}/> 
    </Content>
  )
}

export default Projects
