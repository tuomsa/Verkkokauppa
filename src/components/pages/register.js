import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/register.css"


/*  	osoite 	postinro 	postitmp 	puhelinnro 	e_mail 	salasana 	status 	 */

export default function Register() {


    return (
        <div className="formReg"> 
        <h1 className="reki">REKISTERÖIDY</h1>
        <form >
            <div className="eNimi">
            <input type="text" placeholder="Etunimi" onChange ></input>
            </div>
            <div className="sNimi">
            <input type="text" placeholder="Sukunimi" onChange ></input>
            </div>
            <div className="tPaikka">
            <input type="text" placeholder="Toimipaikka" onChange ></input>
            </div>
            <div className="pNro">
            <input type="text" placeholder="Puhelinnumero" onChange ></input>
            </div>
            <div className="sPosti">
            <input type="text" placeholder="Sähköposti" onChange></input>
            </div><div className="sSana">
            <input type="text" placeholder="Salasana" onChange></input>
            </div>
            <button className="regBut"> REKISTERÖI!</button>
        </form>
        
        
        </div>

    )
};