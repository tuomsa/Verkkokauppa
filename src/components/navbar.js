import React from "react"
import './navbar.css'
import Miehet from "./miehet"

export default function Navbar() {

  return (

    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a id="header" className="navbar-brand">
          <h1 className="logo">FIUKE</h1>
          <a className="shop-link" href="#"><i class="fa-solid fa-cart-plus fa-xl" id="shoppingCart"></i></a>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input type="text" className="search" placeholder="Etsi tuotteita" /> <button className="searchButton">Etsi</button>
          <ul className="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Miehet</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Naiset</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Nuoret</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}