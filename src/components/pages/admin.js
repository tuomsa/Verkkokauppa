import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/admin.css';
import CategoryList from "./categorylist";
import Data from "./productslist";

export default function ManageCategories(props) {

  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addingCategory, setAddingCategory] = useState(false);
  const [status, setStatus] = useState([]);

  const options = [
    { value: "active", label: 'aseta tuoteryhmä aktiiviseksi' }
  ];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setStatus((prev) => [...prev, value]);
    } else {
      setStatus((prev) => prev.filter((opt) => opt !== value));
    }
  };

  function saveCategory(e) {
    e.preventDefault();

    const formData = new FormData();
    var newCategoryName = document.getElementById("newCategoryInput").value;
    formData.append('name', newCategoryName);
    formData.append('status', status);

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
     
        <button className="btn btn-outline-danger" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi tuoteryhmä</button>
        <Data
      url={props.url}
      />
      </div>

    )
  } else {
    return (
      <div className="productscontainer">
        <h2>Lisää uusi Tuoteryhmä</h2>
        <label>Uuden tuoteryhmän nimi:</label>
        <input type="text" id="newCategoryInput" />
        {options.map((opt, i) => (
          <label key={i}>
            <input
              type="checkbox"
              name="status"
              className="form-check-input"
              value={opt.value}
              onChange={handleChange}
            />{' '}
            {opt.label}
          </label>
        ))}
        <div>
          <button type="button" id="cancel" className="btn btn-outline-danger" onClick={() => setAddingCategory(false)}>Peruuta</button>
          <button type="button" id="savebtn" className="btn btn-outline-success" onClick={e => saveCategory(e)}>Tallenna</button>
        </div>
      </div>
    )
  }
}