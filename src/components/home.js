import React from 'react'
import AnimatedBg from './animated_bg'
import PageTop from './page_top'
import Projects from './projects'
import Skills from './skills'
import Experiences from './experiences'
import Contacts from './contacts'
import { BreakpointProvider } from 'react-socks';

import {educations, career} from '../constants'

function Home() {
  return (
    <BreakpointProvider>
      {/* <AnimatedBg /> */}
      <PageTop />
      <div style={{backgroundColor: 'white'}}>
        <Projects />
        <Skills />
        <Experiences educations={educations} career={career}/>
      </div>
      <Contacts />
    </BreakpointProvider>
  );
}

export default Home;
