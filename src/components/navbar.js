import React from "react"
import { useState } from "react";
import Logo from "./imgVid/logo.png"
import './styles/navbar.css'
import Popup from './popup';
import BgVideo from './pages/bgvideo';

export default function Navbar() {

  const [search, setSearch] = useState('')

  return (
    <nav id="navbar" className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div id="logo"><img src={Logo} alt="logo" /></div>
        <a className="shop-link" href="#"><i className="fa-solid fa-cart-plus fa-xl" id="shoppingCart"></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#maantiepyorat">Maantiepyörät</a></li>
            <li className="nav-item"><a className="nav-link" href="#maastopyorat">Maastopyörät</a></li>
            <li className="nav-item"><a className="nav-link" href="#sahkopyorat">Sähköpyörät</a></li>
          </ul>
          <input type="text" className="search" placeholder="Etsi tuotteita" /> <button className="searchButton">Etsi</button>
        </div>
      </div>
    <div>
     <BgVideo />
     <Popup/>
    </div>
    </nav>
  )
}