import React from "react"
import { useState } from "react";
import './styles/navbar.css'


export default function Navbar() {

  const [search, setSearch] = useState('')

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 id="header" className="navbar-brand">FIUKE</h1>
        <a className="shop-link" href="#"><i className="fa-solid fa-cart-plus fa-xl" id="shoppingCart"></i></a>
        <a className="login-link" href="#">LOGIN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input type="text" className="search" placeholder="Etsi tuotteita" /> <button className="searchButton">Etsi</button>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#miehet">Miehet</a></li>
            <li className="nav-item"><a className="nav-link" href="#maastopyorat">Maastopyörät</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Nuoret</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Unisex</a></li>
            <li className="nav-item"><a className="nav-link" href="#footer">click to footer</a></li>
            <li className="nav-item"><a className="btn disabled" href="#">linkki2</a></li>
            <li className="nav-item"><a className="btn disabled" href="#">Linkki3</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}