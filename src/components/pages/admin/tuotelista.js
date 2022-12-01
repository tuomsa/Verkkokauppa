import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tuotelista ({url}) {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    axios.get(url + '/tuote.php')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data)
      });
  }, [])

  return (
    <>
      <h2 style={{ color: "white" }} className="tableheader"></h2>
      <table className="table" style={{ border: "1px solid black" }}>
        <tr className="titles" style={{ border: "1px solid black" }} >
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
            <td>{product.tuotemerkki}</td>
            <td>{product.tuotemalli}</td>
            <td>{product.hinta}</td>
            <td>{product.kustannus}</td>
            <td>{product.kuvaus}</td>
            <td><button id="modify" className="editbuttons"></button></td>
            <td><button id="remove" classNAme="editbuttons"></button></td>
          </tr>
        ))}
      </table>
    </>
  )
}