import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryList({url, selectedCategory,setSelectedCategory}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + '/getcategories.php')
      .then((response) => {
        const json = response.data;
        if (json) {
          if (selectedCategory === null) {
            setSelectedCategory(json[0]);
          }
          setCategories(json);
        }
      }).catch(error => {
        console.log(error.data.response)
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [selectedCategory])

  function onCategoryChange(value) {
    setSelectedCategory(categories.filter(item => item.tyyppi === value));
  }

  return (
    <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category.trnro} value={category.trnro}>{category.tyyppi}</option>
      ))}
    </select>
  )
}
