import React from 'react'
import AnimatedBg from './animated_bg'
import PageTop from './page_top'
import Projects from './projects'
import Experiences from './experiences'
import Contacts from './contacts'
import { BreakpointProvider } from 'react-socks';

import {educations, career} from '../constants'

function Home() {
  return (
    <BreakpointProvider>
      <AnimatedBg />
      <PageTop />
      <Projects />
      <Experiences educations={educations} career={career}/>
      <Contacts />
    </BreakpointProvider>
  );
}

export default Home;
