import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tuotelista({ props, selectedCategory, setSelectedCategory }) {

  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    axios.get(props.url + '/tuoteryhma.php')
      .then((response) => {
        const json = response.data;
        if (json) {
          if (selectedCategory === null) {
            selectedCategory(json[0]);
          }
          setCategory(json);
        }
      }).catch(error => {
        console.log(error.response.data)       //Tästä puuttuu hieman
      });
  }, [selectedCategory])

  function onCategoryChange(value) {
    setSelectedCategory(categorys.filter(category => category.id === value));
  }

  return (
    <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
      {categorys.map((category) => (
        <option key={category.id} value={category.id}>{category.name}</option>
      ))}
    </select>
  )
}