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
        <Breakpoint xl up>
          <div class="flex-column center-vertical features top27">
            Projects
          </div>
        </Breakpoint>
        <Breakpoint x down>
          <div class="flex-column center-vertical features-s top27">
            Projects
          </div>
        </Breakpoint>
        <div class="top43 container bottom40">
          <ProjectGrid projects={projects}/> 
        </div>

      </div>
    </div>
  )
}

export default Projects
