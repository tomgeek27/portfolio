import './App.css';
import Home from './components/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setDefaultBreakpoints } from 'react-socks';
import downloadlogo from './assets/imgs/download.svg'

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);

function App() {

  console.log("HIRE ME! :)")
 
  return (
    <div>
      <header style={{backgroundColor: 'white', position: 'fixed', width: '100%', height: '60px', alignItems: 'center', display: 'flex', zIndex: 10}}>
        <a
        className="social-icon-external" 
        style={{
          position: 'absolute',
          right: '3.5%',
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 10px',
          display: 'flex',
          alignItems: 'center'
        }} href='/cv.jpg' download>
          <img src={downloadlogo} style={{height: '16px', width: '16px', marginRight: '10px'}}/>
          <div style={{
            fontFamily: 'CoolveticaRg',
            color: '#707070',
            fontSize: '16px'
          }}>
          Curriculum

          </div>
        </a>
      </header>
      <Home />
    </div>
  );
}

export default App;
