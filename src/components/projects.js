import React from 'react'
import ProjectGrid from './project_grid'
import { Breakpoint } from 'react-socks';        

import {projects} from '../constants'

function Projects() {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white'
    }}>
      <div class="container">
        <div class="flex-column center-vertical features top27">
          Projects
        </div>
        <div class="top43 container bottom40">
          <ProjectGrid projects={projects}/> 
        </div>

      </div>
    </div>
  )
}

export default Projects
