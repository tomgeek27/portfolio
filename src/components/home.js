import React from 'react'
import AnimatedBg from './animated_bg'
import PageTop from './page_top'
import Projects from './projects'
import Skills from './skills'
import Experiences from './experiences'
import Contacts from './contacts'

import {educations, career} from '../constants'


function Home() {

  return (
    <>
      <AnimatedBg />
      <PageTop />
      {/* <div style={{backgroundColor: 'white', paddingTop: '50px'}}>
        <Projects />
        <Skills />
        <Experiences educations={educations} career={career}/>
      </div>
      <Contacts /> */}
    </>
  );
}

export default Home;
