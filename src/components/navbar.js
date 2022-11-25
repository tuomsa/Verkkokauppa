import React from "react"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import Popup from './popup';
import axios from "axios";
import logout from './imgVid/logout.png';


export default function Navbar(props) {

  const [search, setSearch] = useState('');
  const [headers, setHeaders] = useState([]);


  useEffect(() => {
    axios.get(props.url +'/getmodel.php')
      .then((response) => {
        setHeaders(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data);
      });
  }, [])

  return (

    <nav id="mainnavbar" className="navbar navbar-expand-lg">
      {props.loggedIn ? <button className="logout" type="button" onClick={event => props.setLoggedIn(false)} ><p>{props.userName}</p></button> : null}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link"><Link id="homelink" to="/components/pages/Home">Home</Link></a>
          </li>
          <li className="nav-item-dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown01">
              {headers.map(header => (
                <li key={header.id}>
                  <Link className="dropdown-item" to={'/components/pages/' + header.tyyppi + "pyorat"} >
                    {header.tyyppi + "pyörät"}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <input type="text" className="search" placeholder="Etsi tuotteita" /> <button className="searchButton">Etsi</button>
          </li>
          <li>
            <a className="shop-link" href="#"><i className="fa-solid fa-cart-plus fa-xl" id="shoppingCart"></i></a>
          </li>
        </ul>
        <div>
          {!props.loggedIn ? <Popup setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} /> : null}
        </div>
      </div>
      <Link to="/components/pages/admin"><button className="adminbtn">Admin</button></Link>
    </nav>
  )
}

/*

<img id="logo" src={Logo} alt="logo" />

<Link className="nav-link" to="/components/pages/maantiepyorat">Maantiepyörät</Link>
<Link className="nav-link" to="/components/pages/maastopyorat">Maastopyörät</Link>
<Link className="nav-link" to="/components/pages/sahkopyorat">Sähköpyörät</Link>













*/