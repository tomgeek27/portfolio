import React from 'react'
import AnimatedBg from './animated_bg'
import Project from './project'
import PageTop from './page_top'
import Projects from './projects'
import Experiences from './experiences'
import Contacts from './contacts'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import me from '../assets/imgs/me.jpg'
import SocialButton from './social_button'
import ghlogo from '../assets/imgs/github.svg'
import inlogo from '../assets/imgs/linkedin.svg'
import uplogo from '../assets/imgs/upwork.svg'
import { gh_url, in_url, up_url } from '../constants/social_url'
function Home() {
  return (
    <BreakpointProvider>
      <AnimatedBg />
      <PageTop />
      <Projects />
      <Experiences educations={[
        {
          date: '2016 - 2019',
          title: 'Laurea Triennale in Informatica',
          location: 'Università statale degli studi di Milano',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
          date: '2016 - 2019',
          title: 'Laurea Triennale in Informatica',
          location: 'Università statale degli studi di Milano',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
          date: '2016 - 2019',
          title: 'Laurea Triennale in Informatica',
          location: 'Università statale degli studi di Milano',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]} career={[
        {
          date: '2016 - 2019',
          title: 'Laurea Triennale in Informatica',
          location: 'Università statale degli studi di Milano',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]}/>
      <Contacts />
    </BreakpointProvider>
  );
}

export default Home;
