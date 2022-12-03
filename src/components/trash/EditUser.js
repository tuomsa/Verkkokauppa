import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser(url) {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { astunnus } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser(url) {
    axios.get(url + `/index.php/users${astunnus}`)
      .then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(url +'/index.php ${astunnus}/edit', inputs)
    .then(function (response) {
      console.log(response.data);
      navigate('/');
    });

  }
  return (
    <div>
      <h1>Käyttäjähallinta</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Nimi: </label>
              </th>
              <td>
                <input value={inputs.asnimi} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Osoite: </label>
              </th>
              <td>
                <input value={inputs.osoite} type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Postinumero: </label>
              </th>
              <td>
                <input value={inputs.postinro} type="text" name="mobile" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Toimipaikka: </label>
              </th>
              <td>
                <input value={inputs.postitmp} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Puhelinnumero: </label>
              </th>
              <td>
                <input value={inputs.puhelinnumero} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Sähköposti: </label>
              </th>
              <td>
                <input value={inputs.e_mail} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Salasana: </label>
              </th>
              <td>
                <input value={inputs.salasana} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Tallenna</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}