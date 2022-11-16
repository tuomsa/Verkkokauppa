import React from "react"
import "./styles/login.css"
import Login from "./login"
import { useState } from "react";
import loginIcon from "./imgVid/login.png"

{/* LOGIN-LOMAKE MINKÄ KIRJAUTUMISNAPPI AVAA */}

export default function PopUp(props) {

    const [buttonPopUp, setButtonPopup] = useState(false);    
    const testLogin = () => {
    var userName = document.getElementById('uname').value;
    props.setLoggedIn(true);
    props.setUserName(userName);
    }

    return (
      <div className="popup">
        <button className="loginBtn" onClick={() => setButtonPopup(true)}><p className="logintxt">Kirjaudu sisään / Rekisteröidy</p><img className="loginImg" src={loginIcon}/></button>

        <Login trigger={buttonPopUp} setTrigger={setButtonPopup}>

          {/* TÄHÄN ALLE KIRJAUTUMIS LOMAKE */}

          <form>
            <div><h1>KIRJAUDU SISÄÄN</h1></div>
            <div className="input-container">
              <input type="text" name="uname" id="uname" className="inputEmail" placeholder="Sähköpostiosoite" required />
            </div>
            <div className="input-container">
              <input type="password" name="pass" className="inputPW" placeholder="Salasana" />
            </div>
            <div className="button-container">
            <button className="" onClick={testLogin}>Lähetä</button>
            </div>
            <div className="register"><a href="#">Ei vielä rekisteröityä tiliä? Liity tästä.</a></div>
          </form>
        </Login>
      </div>
    )
  }