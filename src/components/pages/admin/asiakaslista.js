import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Asiakaslista ({url}) {

const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(url +'/asiakas.php')
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data);
      });
}, [])


return (
  <>
    <h2 style={{ color: "white" }} className="tableheader">Asiakkaat</h2>
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
        <th>Muokkaa</th>
        <th>Poista</th>
      </tr>
      {customers.map(customer => (
        <tr key={customer.id}>
          <td>{customer.astunnus}</td>
          <td>{customer.asnimi}</td>
          <td>{customer.osoite}</td>
          <td>{customer.postinro}</td>
          <td>{customer.postitmp}</td>
          <td>{customer.puhelinnro}</td>
          <td>{customer.e_mail}</td>
          <td>{customer.salasana}</td>
          <td><button id="modify" className="editbuttons"></button></td>
          <td><button id="remove" classNAme="editbuttons"></button></td>
        </tr>
      ))}
    </table>
  </>
)
}