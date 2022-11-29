import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tuotelista({url, setAddingCategory}) {

  const [categories, setCategories] = useState([]);
  console.log(categories)
 
    useEffect(() => {
      axios.get(url +'/getmodel.php')
        .then((response) => {
          setCategories(response.data);
          console.log(response.data)
        }).catch(error => {
          console.log(error.response.data);
        });
  }, [])

  
  return (
    <>
      <h2 style={{ color: "white" }} className="tableheader"></h2>
      <table className="table" style={{ border: "1px solid black" }}>
        <tr className="titles" style={{ border: "1px solid black" }} >
          <th>Tuoteryhmät</th>
        </tr>
        {categories.map(item => (
          <tr key={item.id}>
            <td>{item.tyyppi}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
