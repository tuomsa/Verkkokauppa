import Navbar from './components/navbar';

import Maantiepyorat from './components/pages/maantiepyorat';
import Maastopyorat from './components/pages/maastopyorat';
import ScrollToTop from './components/scrollTop';
import Footer from './components/footer';
import Sahkopyorat from './components/pages/sahkopyorat';
import Login from './components/login'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar /> 
      <div id="maantiepyorat">
        <Maantiepyorat />
      </div>
      <div id="maastopyorat">
        <Maastopyorat />
      </div>
      <div id="sahkopyorat">
        <Sahkopyorat />
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
