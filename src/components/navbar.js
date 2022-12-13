import React from "react"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import Popup from './popup';
import axios from "axios";
import logout from './imgVid/logout.png';
import Home from './imgVid/home.png';


export default function Navbar(props) {

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(props.url + '/getcategoriesActive.php')
      .then((response) => {
        setCategories(response.data);
        console.log(response.data)
      }).catch(error => {
        alert(error.response === undefined ? error : error.reponse.data.error);
      });
  }, [])

  return (

    <nav id="mainnavbar" className="navbar navbar-expand-lg">
      {props.loggedIn ? <button id="logout" type="button" onClick={event => props.setLoggedIn(false)} ><p>{props.userName}</p></button> : null}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="nav-link"><Link id="homelink" to="/"><i className="fa-sharp fa-solid fa-house fa-2xl"></i></Link></a>
          </li>
          <li className="nav-item-dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              {categories.map(header => (
                <a key={header.trnro}>
                  <Link className="dropdown-item" to={'/' + header.tyyppi + "pyorat"} >
                    {header.tyyppi + "pyörät"}
                  </Link>
                </a>
              ))}
            </div>
          </li>
          <li>
          <a className="nav-link"><Link id="admin" to="/admin">Admin</Link></a>
          </li>
          <li>
          <form class="form-inline">
            <input type="text" className="search" placeholder="Etsi tuotteita"/>
            <button className="searchButton" type="submit">Etsi</button>
          </form>
          </li>
          <li>
            <a className="shop-link" href="/cart"><i className="fa-sharp fa-solid fa-basket-shopping fa-2xl" id="shoppingCart"></i></a>
          </li>
          <li>
          <a className="loginBtn">{!props.loggedIn ? <Popup setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} /> : null}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
