import Navbar from './components/navbar';
import BgVideo from './components/bgvideo';
import Miehet from './components/miehet';
import Naiset from './components/naiset';
import ScrollToTop from './components/scrollTop';
import Footer from './components/footer';


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
      <div id="footer">
      <Footer />
      </div>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
