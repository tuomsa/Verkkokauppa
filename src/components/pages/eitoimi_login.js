/* 


  ---Tekee formin kunhan routattu app.js:ään mutta mitään ei tapahdu kun yrittää kirjautua---



import React from "react"
import "../styles/log1n.css"
import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";


const URL = "http://localhost:3001/src/php/"



export default function Loggered({setLoggedUser}){

    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");



      return (
        <> 
        


         <form className="kirjauslom">
        <h1>Kirjaudu sisään</h1>
       <div> <label>Käyttäjä: </label>
        <input type="text" placeholder="Käyttäjä" value={uname} onChange={e=>setUname(e.target.value)}></input>
        </div>
        <div>
        <label>Salasana: </label>
        <input type="text" placeholder="Salasana" value={pw} onChange={e=>setPw(e.target.value)}></input>
        </div>
        <button type="button" onClick={GetIn}> Sisään</button>
      <Link to="/register" >  <p> Ei vielä tiliä? Rekisteröidy tässä</p></Link>

         </form>
    
    </>


      )

      function GetIn(){
        const formData = new FormData();
        formData.append("uname",uname);
        formData.append("pw",pw);

            
      axios.post(URL+"rest_login.php",formData, {withCredentials:true} )
      .then(resp => setLoggedUser(resp.data))
      .catch(e=>console.log(e.message))
      }
    
    }     */