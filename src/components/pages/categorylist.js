import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/categorylist.css';

export default function CategoryList({ url, selectedCategory, setSelectedCategory }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'getcategories.php')
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
    setSelectedCategory(categories.filter(item => item.id === value));
  }

  return (
    <div>
      <tr>
        <th>Tuoteryhmä</th>
        <th>Tyyppi</th>
        <th>Tila</th>
      </tr>
      {categories.map(category => (
        <tr key={category.trnro}>
          <td>{category.trnro}</td>
          <td>{category.tyyppi}</td>
          <td>{category.status}</td>
        </tr>
      ))}
    </div>
  )
}
