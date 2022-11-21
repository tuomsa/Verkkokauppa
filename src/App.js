import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';

import Home from './components/pages/Home';
import Maantiepyorat from './components/pages/maantiepyorat';
import Maastopyorat from './components/pages/maastopyorat';
import NotFound from './components/pages/NotFound'
import Admin from './components/pages/admin';

import ScrollToTop from './components/scrollTop';
import Footer from './components/footer';
import Sahkopyorat from './components/pages/sahkopyorat';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      <div className='App'>
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
          setUserName={setUserName}
        />
        <div className='container'>
          <Routes>
            <Route path='/components/pages/Home' element={<Home />} />
            <Route path='/components/pages/maantiepyorat' element={<Maantiepyorat />} />
            <Route path='/components/pages/maastopyorat' element={<Maastopyorat />} />
            <Route path='/components/pages/sahkopyorat' element={<Sahkopyorat />} />
            <Route path='/components/pages/admin' element={<Admin />} />        {/*testi,poista rivi*/}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <div>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
