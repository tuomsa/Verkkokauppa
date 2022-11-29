import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../../styles/admin.css';
import Tuoteryhmat from "./tuoteryhmat";



export default function Admin({url}) {

  const [seletedCategory, setSelectedCategory]= useState(null)
  const [newCategory, setNewCategory] = useState("");
  const [addingCategory, setAddingCategory] = useState(false);


  function saveProductCategory(e) {
    e.preventDefault();
    const json = JSON.stringify({tyyppi: newCategory});
    axios.post(url + '/tuoteryhmaAdd.php', json,{
      headers: {
        'Content-Type' : 'application/json'
      }     
    })
    .then((response) => {
      setNewCategory('');
      setAddingCategory(false);
      setSelectedCategory(response.data)
    }).catch(error => {
      console.log(error.response.data);
    });
  }

  if (!addingCategory) {
    return (
      <>
        <div className="productscontainer">
          <label><h2>Tuoteryhmien järjestely</h2></label>
          <Tuoteryhmat
            url={url}
            selectedCategory={seletedCategory}
            setSelectedCategory={seletedCategory}
          />
          <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi tuoteryhmä</button>
        </div>
      </>
    )  
  } else {
    return (
    <>
    <h3>Lisää uusi Tuoteryhmä</h3>
    <form onSubmit={saveProductCategory}>
      <div className="productscontainer">
        <label>Uuden tuoteryhmän nimi:</label>
        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />    
        <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
        <button type="submit">Tallenna</button>
        </div>
    </form>
    </>
    )
  }
}  

