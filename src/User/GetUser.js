import { useEffect } from "react";
import { useState } from "react";

function GetUser(){
   
    const [users, setUsers] = useState([]);

    useEffect(() => {
       fetch('http://localhost:5073/api/User', {method: 'GET'})
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             setUsers(data);
          })
          
    }, []);

    return (
<>
<table>
{users.map((item)=>
<tr>
        <td>{item.name}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        </tr>
   )}
   </table>

</>
    )
}export default GetUser;