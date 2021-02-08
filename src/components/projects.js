import React from 'react'
import ProjectGrid from './project_grid'
import { Breakpoint } from 'react-socks';        

import {projects} from '../constants'

function Projects() {
  return (
    <div class="container">
      <div class="flex-column center-vertical features top27">
        Projects
      </div>
      <div class="flex-column center-vertical cit top27">
        "Good programmers know what to write. Great ones know what to rewrite" 
      </div>
      <div class="flex-column center-vertical cit">
        - E. Raymond
      </div>
      <div class="top43 container bottom40">
        <ProjectGrid projects={projects}/> 
      </div>
    </div>
  )
}

export default Projects
