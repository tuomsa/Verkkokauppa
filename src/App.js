import Navbar from './components/navbar';
import BgVideo from './components/pages/bgvideo';
import Miehet from './components/pages/miehet';
import Maastopyorat from './components/pages/maastopyorat';
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
      <div id="maastopyorat">
        <Maastopyorat />
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
