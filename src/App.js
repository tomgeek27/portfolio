import React, { useState } from "react"

import './App.css';
import Home from './components/home.js';
import Header from './components/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setDefaultBreakpoints } from 'react-socks';
import downloadlogo from './assets/imgs/download.svg'
import { useScrollPosition } from "./components/hooks/use_scroll_position"

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);

function App() {

  const [sticky, setSticky] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )

  console.log("HIRE ME! :)")
 
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
