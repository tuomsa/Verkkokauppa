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