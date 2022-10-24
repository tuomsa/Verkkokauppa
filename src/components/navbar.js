import React from "react"
import './navbar.css'

export default function Navbar() {

  return (

    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a id="header" className="navbar-brand">
          <h1>FIUKE</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          tähän tulee sitten komponentista droppeja
          {/*//tähä väliin lisätään select komponenttejä*/}
        </div>
      </div>
    </nav>
    
  )
}