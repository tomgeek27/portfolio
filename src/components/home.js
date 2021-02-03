import React from 'react'
import AnimatedBg from './animated_bg'
import Project from './project'
import PageTop from './page_top'
import Projects from './projects'
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
        
    </BreakpointProvider>
  );
}

export default Home;
