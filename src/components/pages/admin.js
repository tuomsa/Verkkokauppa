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
    var newCategoryStatus = document.getElementById("status").value;
    formData.append('name', newCategoryName);
    formData.append('status', newCategoryStatus);
    axios.post(props.url + 'postcategories.php', formData)
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
        <div className="productscontainer">
          <h2 className="label">Tuoteryhmät</h2>
          <CategoryList
            url={props.url}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi tuoteryhmä</button>
        </div>
    )
  } else {
    return (
      <div className="productscontainer">
        <h2>Lisää uusi Tuoteryhmä</h2>     
            <label>Uuden tuoteryhmän nimi:</label>
            <input type="text" id="newCategoryInput" />
            <p>Lisää tuoteryhmä näkyviin
            <input type="checkbox" className="form-check-input" id="status" value="active"/></p>
            <button type="button" id="cancel" className="btn btn-outline-danger" onClick={() => setAddingCategory(false)}>Peruuta</button>
            <button type="button" id="savebtn" className="btn btn-outline-success" onClick={e => saveCategory(e)}>Tallenna</button>
      </div>
    )
  }
}