import Navbar from './components/navbar';
import BgVideo from './components/bgvideo';
import Miehet from './components/miehet';
import Naiset from './components/naiset';
import ScrollToTop from './components/scrollTop';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BgVideo />
      <Navbar />
      <div id="miehet">
        <Miehet />
      </div>
      <div id="naiset">
        <Naiset />
      </div>
      <ScrollToTop />
    </div>

  );
}

export default App;
