import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/admin.css';

const CONSUMERS_URL = 'http://localhost/fiuke/asiakas.php';
const PRODUCTS_URL = 'http://localhost/fiuke/tuote.php';
const ORDERS_URL = 'http://localhost/fiuke/tilaus.php';

export default function Admin () {

  const[consumers, setConsumers] = useState([]);
  const[products, setProducts] = useState([]);
  const[orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(CONSUMERS_URL)
      .then((response) => {
        setConsumers(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error)
        alert(error);
      });
  }, [])

  useEffect(() => {
    axios.get(PRODUCTS_URL)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error)
        alert(error);
      });
  }, [])

  useEffect(() => {
    axios.get(ORDERS_URL)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error)
        alert(error);
      });
  }, [])

  return (
    <div className="container">
      <h2 style={{color: "white"}} className="tableheader">Asiakkaat</h2>
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
        {consumers.map(consumer => (
          <tr key={consumer.id}>
            <td>{consumer.astunnus}</td>
            <td>{consumer.asnimi}</td>
            <td>{consumer.osoite}</td>
            <td>{consumer.postinro}</td>
            <td>{consumer.postitmp}</td>
            <td>{consumer.puhelinnro}</td>
            <td>a{consumer.e_mail}</td>
            <td>{consumer.salasana}</td>
            <td><button id="modify" className="editbuttons"></button></td>
            <td><button id="remove" classNAme="editbuttons"></button></td>
          </tr>
        ))}
      </table>
      
      <h2 style={{color: "white"}} className="tableheader">Tuotteet</h2>
      <table className="table">
        <tr className="titles">
          <th>Tuotenumero</th>
          <th>Tuoteryhmä</th>
          <th>Merkki</th>
          <th>Malli</th>
          <th>Hinta</th>
          <th>Kustannus</th>
          <th>Kuvaus</th>
          <th>Muokkaa</th>
          <th>Poista</th>
        </tr>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.tuotenro}</td>
            <td>{product.trnro}</td>
            <td>{product.merkki}</td>
            <td>{product.malli}</td>
            <td>{product.hinta}</td>
            <td>{product.kustannus}</td>
            <td>{product.kuvaus}</td>
            <td><button id="modify" className="editbuttons"></button></td>
            <td><button id="remove" classNAme="editbuttons"></button></td>
          </tr>
        ))}
      </table>

      <h2 style={{color: "white"}} className="tableheader">Tilaukset</h2>
      <table className="table">
        <tr className="titles">
          <th>Tilausnumero</th>
          <th>Asiakastunnus</th>
          <th>Tilauspäivä</th>
          <th>Tuotenumero</th>
          <th>kpl</th>
          <th>Muokkaa</th>
          <th>Poista</th>
        </tr>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.tilausnro}</td>
            <td>{order.astunnus}</td>
            <td>{order.tilauspvm}</td>
            <td>{order.tuotenro}</td>
            <td>{order.kpl}</td>
            <td><button id="modify" className="editbuttons"></button></td>
            <td><button id="remove" classNAme="editbuttons"></button></td>
          </tr>
        ))}
        </table>
    </div>
  )
}