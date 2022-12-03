import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/admin.css';
import Tuotelista from "./productlist";
import CategoryList from "./categorylist";



export default function ManageCategories({ url }) {

  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);

  function saveCategory(e) {
    e.preventDefault();
    const json = JSON.stringify({ name: newCategory });
    axios.post(url + 'postcategories.php', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setNewCategory('');
        setAddingCategory(false);
        setSelectedCategory(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }

  if (!addingCategory) {
    return (
      <>
        <div className="productscontainer">
          <label><h2>Tuoteryhmien järjestely</h2></label>
          <CategoryList
            url={url}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi tuoteryhmä</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h3>Lisää uusi Tuoteryhmä</h3>
        <form onSubmit={saveCategory}>
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