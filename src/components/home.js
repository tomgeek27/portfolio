import React from 'react'
import AnimatedBg from './animated_bg'
import PageTop from './page_top'
import  { Breakpoint, BreakpointProvider } from 'react-socks';

function Home() {
  return (
    <BreakpointProvider>
      <div>
        <AnimatedBg />
        <PageTop/>
      </div>
    </BreakpointProvider>
  );
}

export default Home;
