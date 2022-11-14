import React from "react"
import "./styles/login.css"
import Login from "./login"
import { useState } from "react";
import loginIcon from "./imgVid/login.png"

{/* LOGIN-LOMAKE MINKÄ KIRJAUTUMISNAPPI AVAA */}

export default function PopUp() {

    const [buttonPopUp, setButtonPopup] = useState(false);

    return (
      <div className="popup">
        <button className="loginBtn" onClick={() => setButtonPopup(true)}><p className="logintxt">Kirjaudu sisään / Rekisteröidy</p><img className="loginImg" src={loginIcon}/></button>

        <Login trigger={buttonPopUp} setTrigger={setButtonPopup}>

          {/* TÄHÄN ALLE KIRJAUTUMIS LOMAKE */}

          <form>
            <div><h1>KIRJAUDU SISÄÄN</h1></div>
            <div className="input-container">
              <input type="text" name="uname" className="inputEmail" placeholder="Sähköpostiosoite" required />
            </div>
            <div className="input-container">
              <input type="password" name="pass" className="inputPW" placeholder="Salasana" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <div className="register"><a href="#">Rekisteröidy tästä</a></div>
          </form>
        </Login>
      </div>
    )
  }