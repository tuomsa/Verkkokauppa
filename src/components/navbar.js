import React from "react"
import './navbar.css'

export default function Navbar() {

  return (
    
<nav id="navbar" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a id="header" class="navbar-brand">
      <h1>FIUKE</h1>
      <p>[Pyöräilijän kauppa]</p>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="#pageOne">Pyörät 1</a></li>
        <li class="nav-item"><a class="nav-link" href="#pageTwo">Pyörät 2</a></li>
        <li class="nav-item"><a class="nav-link" href="#pageThree">Pyörät 3</a></li>
      </ul>
    </div>
  </div>
</nav>
  )
}