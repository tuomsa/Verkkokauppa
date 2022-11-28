import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/admin.css';
import Tuotelista from "../tuotelista";


export default function Admin({url}) {

  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);

  function saveCategory(e) {
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
      setSelectedCategory(response.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }

  if (!addingCategory) {
    return (
      <>
        <h3>Tuoteryhmien järjestely</h3>
        <div>
          <label>Tuoteryhmät</label>
          <Tuotelista
            url={url}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää</button>
        </div>
      </>
    )
  } else {
    return (
    <>
    <h3>Lisää uusi Tuoteryhmä</h3>
    <form onSubmit={saveCategory}>
      <div>
        <label>Tuoteryhmän nimi</label>
        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        </div>
        <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
        <button type="submit">Tallenna</button>
    </form>
    </>
    )
  }
}