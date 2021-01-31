import './App.css';
import Home from './components/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);

function App() {
 
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
