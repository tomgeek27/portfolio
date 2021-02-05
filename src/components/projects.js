import React from 'react'
import ProjectGrid from './project_grid'
import ritmu from '../assets/imgs/projects/ritmu.png'
import { Breakpoint } from 'react-socks';        

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
        <Breakpoint m down>
          <div class="flex-column center-vertical features-s top27">
            Projects
          </div>
        </Breakpoint>
        <div class="top43 container bottom40">
          <ProjectGrid projects={[
            {
              title: 'Ritm-U',
              subtitle: 'Applicazione Android/iOS per il controllo del respiro',
              src: ritmu,
              url: ""
            },
            {
              title: 'Ritm-U',
              subtitle: 'Applicazione Android/iOS per il controllo del respiro',
              src: ritmu,
              url: ""
            },
          ]}/> 
        </div>

      </div>
    </div>
  )
}

export default Projects
