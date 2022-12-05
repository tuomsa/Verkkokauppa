import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/admin.css';
import Tuotelista from "./productlist";
import CategoryList from "./categorylist";



export default function ManageCategories(props) {

  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);


  function saveCategory(e) {
    e.preventDefault();
    const formData = new FormData();
    var newCategoryName = document.getElementById("newCategoryInput").value;
    formData.append('name', newCategoryName);
    axios.post(props.url + 'postcategories.php', formData)
      .then((response) => {
        setNewCategory('');
        setAddingCategory(false);
        setSelectedCategory(response.data);
      }).catch(error => {
        console.log(props.url + 'postcategories.php')
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }

  if (!addingCategory) {
    return (
      <>
        <div className="productscontainer">
          <label><h2>Tuoteryhmien järjestely</h2></label>
          <CategoryList
            url={props.url}
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
        <form>
          <div className="productscontainer">
            <label>Uuden tuoteryhmän nimi:</label>
            <input type="text" id="newCategoryInput" />
            <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
            <button type="button" onClick={e => saveCategory(e)}>Tallenna</button>
          </div>
        </form>
      </>
    )
  }
}