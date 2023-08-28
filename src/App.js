import './App.css';
import UserCRUD from './User/UserCRUD';
import GetUser from "./User/GetUser";
import GetUserById from "./User/GetUserById";
import DeleteUser from "./User/DeleteUser";
import PutUser from "./User/PutUser";
import PostUser from "./User/PostUser";
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import LogIn from './Shared-Cars-Service/Enterace/LogIn';
import SignUp from './Shared-Cars-Service/Enterace/SignUp';
import Navbar from './Shared-Cars-Service/Navbar';
import logo from "./pictures/smallLogo.png";
import gif from "./pictures/dribbble-3.gif";
import Home from "./Shared-Cars-Service/Home";
function App() {
  return (
    // style={{ backgroundColor: 'black' }}
      <div >
        {/* <Navbar></Navbar> */}
        {/* <LogIn></LogIn> */}
        <BrowserRouter>
          <Routes>
            <Route path="" element={<LogIn/>}></Route>
            <Route path="/home/:userName/:userPassword" element={<Home/>}></Route>
            {/* <Route path="/SignUp" element={<SignUp />}></Route> */}
          </Routes>
        </BrowserRouter>
        <br></br><br></br>
        <br></br><br></br>
        <img src={gif} alt="Image" style={{ width: '25%', height: '200px' }}/><img src={gif} alt="Image" style={{ width: '25%', height: '200px' }}/><img src={gif} alt="Image" style={{ width: '25%', height: '200px' }}/><img src={gif} alt="Image" style={{ width: '25%', height: '200px' }}/>
        <br></br><br></br><br></br>
        <p style={{ textAlign: 'center' }}>
          <h6 style={{ color:'White'}}> כל הזכויות שמורות לחדוה נפתלי ודסי גנוט©</h6><br></br>
          <h6 style={{ color:'White'}}>:לפרטים ויצירת קשר</h6><br></br>
          <h6 style={{ color:'White'}}> chedvanaftali@gmail.com | חדוה | 0583218448</h6><br></br>
          <h6 style={{ color:'White'}}> dassigenut1234@gmail.com | דסי | 0504119627</h6><br></br>
          </p>
      </div>
  );
}

export default App;