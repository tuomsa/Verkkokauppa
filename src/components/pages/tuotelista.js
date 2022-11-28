import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tuotelista( {url, selectedCategory, setSelectedCategory } ) {

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
  }, [selectedCategory])

  function onCategoryChange(value) {
    setSelectedCategory(categories.filter(item => item.id === value));
  }

  return (
    <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>{category.tyyppi}</option>
      ))}
    </select>
  )
}