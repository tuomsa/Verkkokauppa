import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/register.css"
import { Link } from 'react-router-dom'

export default function Register(props) {

    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postnro, setPostNro] = useState("");
    const [postpl, setPostTmp] = useState("");
    const [phnnro, setPuhNro] = useState("");
    
    function RegSend(){
        const formData = new FormData();
        formData.append("uname",uname);
        formData.append("pw",pw);
        formData.append("email",email);
        formData.append("address",address);
        formData.append("postnro",postnro);
        formData.append("posttmp",postpl);
        formData.append("puhnro",phnnro);
  
        axios.post(props.url+"rest_register.php",formData, {}  )
        
        .catch(e=>console.log(e.message))
      }
    
    return (
        <div className="formReg">
            <h1 className="reki">REKISTERÖIDY</h1>
            <form >
                <div className="aNimi">
                    <input type="text" placeholder="Nimesi" value={uname} onChange={e => setUname(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="password" placeholder="Salasana" value={pw} onChange={e => setPw(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="text" placeholder="Osoite" value={address} onChange={e => setAddress(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="text" placeholder="Posti numero" value={postnro} onChange={e => setPostNro(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="text" placeholder="Postitoimipaikka" value={postpl} onChange={e => setPostTmp(e.target.value)} ></input>
                </div>
                <div className="sSana">
                    <input type="text" placeholder="Puhelin" value={phnnro} onChange={e => setPuhNro(e.target.value)} ></input>
                </div>
                <Link classname="WTF" to='/'>   <button type="button" className="regBut" onClick={RegSend}> REKISTERÖI!</button> </Link>
            </form>
        </div>
    )
};