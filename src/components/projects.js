import React from 'react'
import ProjectGrid from './project_grid'
import { Breakpoint } from 'react-socks';        

import {projects} from '../constants'
import Feature from './common/feature';

function Projects(props) {
  return (
    <Feature 
      title="Projects" 
      cit={"Good programmers know what to write. Great ones know what to rewrite"} 
      author={"E. Raymond"}>
      <ProjectGrid projects={projects} width={props.width}/> 
    </Feature>
  )
}

export default Projects
