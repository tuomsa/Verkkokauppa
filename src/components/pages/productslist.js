import { useState } from "react";
import {useEffect} from "react";
import axios from "axios";
import '../styles/porducts.css'


export default function Data (props) {

    const [products,setProducts] =useState([]);


  useEffect(() => {
    axios.get(props.url + 'getalldata.php')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data)
      });
  }, [])

return (

        <div className="productlist">
            <h2 style={{ color: "black" }} className="tableheader">Tuotteet</h2>
            <table className="table">
                <tr className="titles">
                    <th>Tuotenumero</th>
                    <th>Tuoteryhmä</th>
                    <th>Kuva</th>
                    <th>Merkki</th>
                    <th>Malli</th>
                    <th>Hinta</th>
                    <th>Kustannus</th>
                    <th>Kuvaus</th>
                    <th>Muokkaa</th>
                    <th>Poista</th>
                </tr>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.tuotenro}</td>
                        <td>{product.trnro}</td>
                        <td><img id="bikepicture" className="bikepicture" src={'/productImg/' + product.logomerkki + "_" + product.tuotemalli + ".png"} /></td>
                        <td>{product.logomerkki}</td>
                        <td>{product.tuotemalli.charAt(0).toUpperCase() + product.tuotemalli.slice(1).replace('_', ' ')}</td>
                        <td>{product.hinta} €</td>
                        <td>{product.kustannus} €</td>
                        <td className="description">{product.kuvaus}</td>
                        <td><i class="fa-sharp fa-solid fa-pen-to-square"></i></td>
                        <td><i class="fa-sharp fa-solid fa-trash"></i></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}