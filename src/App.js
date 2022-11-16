import { useState } from 'react';
import Navbar from './components/navbar';
import Maantiepyorat from './components/pages/maantiepyorat';
import Maastopyorat from './components/pages/maastopyorat';
import ScrollToTop from './components/scrollTop';
import Footer from './components/footer';
import Sahkopyorat from './components/pages/sahkopyorat';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

  return (
    <div className='App'>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        userName={userName}
        setUserName={setUserName}
      />
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
