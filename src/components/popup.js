import React from "react"
import "./styles/login.css"
import Login from "./login"
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function PopUp(props) {

  const [buttonPopUp, setButtonPopup] = useState(false);
  const testLogin = () => {
    var userName = document.getElementById('uname').value;
    props.setLoggedIn(true);
    props.setUserName('Kirjaantuneena : ' + userName);
  }

  return (
    <div className="popup">
      <button className="loginBtn" onClick={() => setButtonPopup(true)}><i className="fa-sharp fa-solid fa-right-to-bracket fa-2xl"></i></button>
      <Login trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <form id="loginForm">
          <div className="input-container">
            <div className="row">
              <div className="col-sm">
                <p className="popupheader">KIRJAUDU SISÄÄN</p>
                <input type="text" name="uname" id="uname" className="inputEmail" placeholder="Sähköpostiosoite" required />
                <input type="password" name="pass" className="inputPW" placeholder="Salasana" />
                <Link className="regg" to="/register"><a onClick={() => setButtonPopup(false)} > Ei vielä tiliä? Rekisteröidy tässä!  </a> </Link>
              </div>
              <div className="col-sm">
                <button className="loginPopUpBtn" onClick={testLogin} >Lähetä</button>
              </div>
            </div>
          </div>
        </form>
      </Login>
    </div>
  )
}
