import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/admin.css'

const URL = 'http://localhost/fiuketesti/asiakas.php';

export default function Admin () {

  const[consumers, setConsumers] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setConsumers(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error)
        alert(error);
      });
  }, [])

  return (
    <div className="container">
      <table className="table">
          <tr className="titles">
            <th>Asiakastunnus</th>
            <th>Asiakasnimi</th>
            <th>Osoite</th>
            <th>Postinumero</th>
            <th>Paikkakunta</th>
            <th>Puhelinnumero</th>
            <th>Sähköposti</th>
            <th>Salasana</th>
          </tr>       
          {consumers.map(item => (
            <tr key={item.id}>
              <td>{item.astunnus}</td>
              <td>{item.asnimi}</td>
              <td>{item.osoite}</td>
              <td>{item.postinro}</td>
              <td>{item.postitmp}</td>
              <td>{item.puhelinnro}</td>
              <td>{item.e_mail}</td>
              <td>{item.salasana}</td>
            </tr>
          ))}
      </table>
    </div>
  )
}