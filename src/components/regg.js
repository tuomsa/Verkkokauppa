/*import React, { useEffect } from "react"
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";









----------------ROSKAA---------------











const URL = "http://localhost:3001/src/php/rest_login.php"




export default function Regg(){


  const [loggedUser, setLoggedUser] = useState(null);
  
  return (

  useEffect( ()=>{
    axios.post(URL+"rest_login.php",{}, {withCredentials:true} )
    .then(resp=>setLoggedUser(resp.data))
    .catch(e => console.log(e.message));
  }, []);
  
  function Loggered({setLoggedUser}){

    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");

    function GetIn(){
      const formData = new FormData();
      formData.append("uname",uname);
      formData.append("pw",pw);

      axios.post(URL+"rest_login.php",formData, {withCredentials:true} )
      .then(resp => setLoggedUser(resp.data))
      .catch(e=>console.log(e.message))
    }
  }
}
  */