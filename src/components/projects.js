import React from 'react'
import ProjectGrid from './project_grid'
import ghlogo from '../assets/imgs/github.svg'

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
            src: ghlogo
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ghlogo
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ghlogo
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ghlogo
          },
          {
            title: 'Ritm-U',
            subtitle: 'Applicazione Android/iOS per il controllo del respiro',
            src: ghlogo
          },
        ]}/>
      </div>
    </div>
  )
}

export default Projects
