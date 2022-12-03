<select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
{categories.map((category) => (
  <option key={category.id} value={category.id}>{category.tyyppi}</option>
))}
</select>







<div className="productscontainer">
<label><h2>Tuoteryhmien järjestely</h2></label>
<Asiakaslista
  url={url}
/>
<button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi tuoteryhmä</button>
</div>
</>
)



{!props.loggedIn ? <Popup setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} > : null} 





import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/admin.css';
import Tuotelista from "./tuotelista";
import CategoryList from "./categorylist";



export default function ManageCategories({url}) {

  const [newCategory, setNewCategory] = useState([]);
  const [selectedCategory, setSelectedCategory]= useState(null);
  const [addingCategory, setAddingCategory] = useState(false);

  console.log(newCategory);
  function saveCategory(e) {
    e.preventDefault();
    const json = JSON.stringify({tyyppi: newCategory});
    axios.post(url + 'tuoteryhmaAdd.php', json,{
      headers: {
        'Content-Type' : 'application/json'
      }     
    })
    .then((response) => {
      setNewCategory('');
      setAddingCategory(false);
      setSelectedCategory(response.data);
    }).catch(error => {
      console.log(error.data.response)
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


//Sasa Testi
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Admin.css';

import ListUser from './ListUser';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

export default function Admin({ url }) {
  return (
    <div className="Adminmain">
      <h5>Hallintapaneeli</h5>  
        <nav>
          <ul>
            <li>
              <Link to="/admin">Listaa käyttäjät</Link>
            </li>
            <li>
              <Link to="/user/create">Luo uusi käyttäjä</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser url={url} />} />
          <Route path="/user/create" element={<CreateUser url={url} />} />
          <Route path="/user/:id/edit" element={<EditUser url={url} />} />
        </Routes>     
    </div>
  );
}