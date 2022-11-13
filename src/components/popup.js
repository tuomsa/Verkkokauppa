import React from "react"
import "./styles/popup.css"
import Login from "./login"
import { useState } from "react";

{/* LOGIN-LOMAKE MINKÄ KIRJAUTUMISNAPPI AVAA */}

export default function PopUp() {

    const [buttonPopUp, setButtonPopup] = useState(false);

    return (

        <div className="popup">
            <button onClick={() => setButtonPopup(true)}>LOG IN</button>

            <Login trigger={buttonPopUp} setTrigger ={setButtonPopup}>

            {/* TÄHÄN ALLE KIRJAUTUMIS LOMAKE */}
                
            <form>
                <div> <h1>KIRJAUDU SISÄÄN </h1></div>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         
       </div>
       <div className="button-container">
        <label>ÄLÄ PAINA TÄTÄ</label>
         <input type="submit" />
       </div>
     </form>

            </Login>
        </div>


    )}