import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Navbar from './components/navbar';

import Home from './components/pages/Home';
import Maantiepyorat from './components/pages/maantiepyora';
import Maastopyorat from './components/pages/maastopyorat';
import Sahkopyorat from './components/pages/sahkopyorat';
import NotFound from './components/pages/NotFound'
import Admin from './components/pages/admin';

import ScrollToTop from './components/scrollTop';
import PopUp from './components/popup';
import Footer from './components/footer';
import Logo from "./components/imgVid/logo.png"
import './App.css';

//const URL = 'http://localhost/fiuke/';
const URL = 'http://localhost:3001/src/php/'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.tuotenro === product.tuotenro)) {
      const existproduct = cart.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existproduct[0].amount) + 1, product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  return (
    <>
      <div className='App'>
        <img id="logo" src={Logo} alt="logo" />
        <Navbar
          url={URL}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
          setUserName={setUserName}
        />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/maantiepyorat' element={<Maantiepyorat url={URL} addToCart={addToCart} />} />
            <Route path='/maastopyorat' element={<Maastopyorat url={URL} addToCart={addToCart} />} />
            <Route path='/sahkopyorat' element={<Sahkopyorat url={URL} addToCart={addToCart} />} />
            <Route path='/admin/*' element={<Admin url={URL} />} />
            <Route path='/login' element={<PopUp />} />       {/*testi,poista rivi*/}
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
