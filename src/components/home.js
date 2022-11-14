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
      <div className="divisor"/>
      <Projects />
      <div className="divisor"/>
      <Skills />
      <div className="divisor"/>
      <Experiences educations={educations} career={career}/>
      <div className="divisor"/>
      <Contacts />
      {/* <div style={{backgroundColor: 'transparent', paddingTop: '50px'}}>
        <Skills />
        <Experiences educations={educations} career={career}/>
      </div>
      <Contacts /> */}
    </>
  );
}

export default Home;
