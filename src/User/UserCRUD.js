import { Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UserCRUD(){
    const navigate=useNavigate();
   
    return (<>
    <button onClick={()=>navigate('/GetUser')}><h1>Get Users</h1></button>
    </>)
}