import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Navbar from './components/navbar';

import Home from './components/pages/Home';
import Maantiepyorat from './components/pages/maantiepyora';
import Maastopyorat from './components/pages/maastopyorat';
import Sahkopyorat from './components/pages/sahkopyorat';
import NotFound from './components/pages/NotFound'
import Admin from './components/pages/admin';
import Cart from './components/pages/cart';

import ScrollToTop from './components/scrollTop';
import PopUp from './components/popup';
import Footer from './components/footer';
import Logo from "./components/imgVid/logo.png"
import './App.css';

const URL = 'http://localhost/fiuke/';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if ('cartItems' in localStorage) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    }
   }, [])

   function addToCart(product) {
    if (cartItems.some(item => item.tuotenro === product.tuotenro)){
      const existproduct = cartItems.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existproduct[0].amount)+1,product);
    } else {
    product['amount'] = 1;
    const newCartItems = [...cartItems,product];
    setCartItems(newCartItems);
    localStorage.setItem('cartItems',JSON.stringify(newCartItems)); 
  }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cartItems.filter(item => item.tuotenro !== product.tuotenro);
    setCartItems(itemsWithoutRemoved);
    localStorage.setItem('cartItems',JSON.stringify(itemsWithoutRemoved));
  }

  function subtractFromCart(product) {
    if (cartItems.some(item => item.tuotenro === product.tuotenro) & product.amount >= 2){
      const existproduct = cartItems.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existproduct[0].amount)-1,product);
    }
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cartItems.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCartItems = Object.assign([...cartItems],{[index]: product});
    setCartItems(modifiedCartItems);
    localStorage.setItem('cartItems',JSON.stringify(modifiedCartItems));
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
            <Route path='/cart' element={<Cart url= {URL} cartItems={cartItems} addToCart={addToCart} subtractFromCart={subtractFromCart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>} />
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
