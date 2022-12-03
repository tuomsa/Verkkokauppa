import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/listUsers.css'

export default function ListUser({url}) {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(url + '/index.php/users')
        .then(function(response) {
        console.log(response.data);
        setUsers(response.data);
        });
    }

    const deleteUser = (astunnus) => {
        axios.delete(url + `/index.php/${astunnus}/delete`).then(function(response) {
          console.log(axios);
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div>
            <h1>Käyttäjät</h1>
            <table>
                <thead>
                    <tr>
                        <th>astunnus</th>
                        <th>Nimi</th>
                        <th>Katuosoite</th>
                        <th>Postinumero</th>
                        <th>Toimipaikka</th>
                        <th>Puhelinnumero</th>
                        <th>Sähköposti</th>
                        <th>Salasana</th>
                        <th>Muokkaa</th>
                        <th>Poista</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.astunnus}>
                            <td>{user.astunnus}</td>
                            <td>{user.asnimi}</td>
                            <td>{user.osoite}</td>
                            <td>{user.postinro}</td>
                            <td>{user.postitmp}</td>
                            <td>{user.puhelinnro}</td>
                            <td>{user.e_mail}</td>
                            <td>{user.salasana}</td>
                            <td><Link to={`user/${user.astunnus}/edit`} style={{marginRight: "10px"}}><i id="editBtn" className="fa-solid fa-pen-to-square fa-2xl"></i></Link></td>
                            <td><button className="deleteBtn" onClick={() => deleteUser(user.astunnus)}><i className="fa-sharp fa-solid fa-trash fa-xl"></i></button></td>
                            <td>     
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}