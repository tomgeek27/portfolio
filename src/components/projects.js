import React from 'react'
import ProjectGrid from './project_grid'
import ritmu from '../assets/imgs/projects/ritmu.png'

function Projects() {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white'
    }}>
      {/* Titolo experiences */}
      <div class="flex-column center-vertical features top27">
        Projects
      </div>
      <div class="top43 container bottom40">
        <ProjectGrid projects={[
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ritmu
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ritmu
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ritmu
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ritmu
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ritmu
          },
        ]}/>
      </div>
    </div>
  )
}

export default Projects
