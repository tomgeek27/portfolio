import React from 'react'
import AnimatedBg from './animated_bg'
import PageTop from './page_top'
import Experiences from './experiences'
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
      <div>
        <AnimatedBg />
        <PageTop />
        <Experiences />
      </div>
    </BreakpointProvider>
  );
}

export default Home;
