import React from "react"
import "./styles/login.css"
import Login from "./login"
import { useState } from "react";


{/* LOGIN-LOMAKE MINKÄ KIRJAUTUMISNAPPI AVAA */ }

export default function PopUp(props) {

  const [buttonPopUp, setButtonPopup] = useState(false);
  const testLogin = () => {
    var userName = document.getElementById('uname').value;
    props.setLoggedIn(true);
    props.setUserName(userName);
  }

  return (
    <div className="popup">
      <button className="loginBtn" onClick={() => setButtonPopup(true)}><i className="fa-sharp fa-solid fa-right-to-bracket fa-xl"></i></button>

      <Login trigger={buttonPopUp} setTrigger={setButtonPopup}>

        {/* TÄHÄN ALLE KIRJAUTUMIS LOMAKE */}

        <form>
          <div className="input-container">
            <div class="row">
              <div class="col-sm">
              <p className="popupheader">KIRJAUDU SISÄÄN</p>
                <input type="text" name="uname" id="uname" className="inputEmail" placeholder="Sähköpostiosoite" required />
                <input type="password" name="pass" className="inputPW" placeholder="Salasana" />
                <a href="#" className="register">Ei vielä rekisteröityä tiliä? Liity tästä.</a>
              </div>
              <div class="col-sm">
                <button className="loginPopUpBtn" onClick={testLogin}>Lähetä</button>
              </div>
            </div>
          </div>
        </form>
      </Login>
    </div>
  )
}
