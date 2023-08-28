import './LogIn.css';
import React from 'react';
import logo from "../../pictures/smallLogo.png";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{useForm} from"react-hook-form";
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';

function LogIn() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const { register} = useForm();
  const handleSubmit = (event) => {
    console.log('Sign in successful!');
    if(userName==""){
      console.log("username");
    }
    else
    navigate(`/home/${userName}/${userPassword}`);
  };
  const registerOptions={
    name:{required:"fff"},
    password:{
      required:"ded"
    }
  }
  const tryToLogin = (event) => {
    fetch(`http://localhost:5073/api/User/${userName}`, { method: 'GET', headers: { "password": userPassword } })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        
      })
  }
  const getaproveUserDetails = axios.
  get(`http://localhost:5073/api/User/${userName}` 
  ).then(function (response) {
      var res = response.json();
      console.log("response", 'res: ' + res.message, response.message);
  })
  .catch(function (error) {
      console.log("error", error);
  });
  return (
    <>
      <br></br>

      <MDBContainer className="my-5 gradient-form">

        <MDBRow>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">

              <div className="text-center">
                <img src={logo}
                  style={{ width: '250px', height: '115px' }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1" style={{ color: "White" }}>ברוכים הבאים לשירות רכב שיתופי ריווחי</h4>
              </div>
              {/* <form onSubmit={handleSubmit}> */}
              {/* <p  style={{color:'white'}}>אנא הכנס לחשבונך</p> */}
              {/* required: {
            value: true,
            message: 'required',
          } */}
              <MDBInput wrapperClass='mb-4' label='name' labelStyle={{ color: 'white' }} id='form1' type='text' onChange={(e) => setUserName(e.target.value)} />
              <MDBInput  wrapperClass='mb-4' label='סיסמא' labelStyle={{ color: 'white' }} id='form2' type='password' onChange={(e) => setUserName(e.target.value)} />
              {/* {text === '' && <p className="comment">{registerOptions.name.required}</p>} */}

              <div className="text-center pt-1 mb-5 pb-1">
                {/* <button  type="submit"  onClick={handleSubmit}>ok</button> */}
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2"  onClick={getaproveUserDetails}>היכנס</MDBBtn>
                <a className="text-muted" href="#!" style={{ color: "white" }}>?שכחת סיסמא</a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <MDBBtn outline className='mx-2' color='light' style={{ color: "white" }}>
                  הירשם עכשיו
                </MDBBtn>
                <p className="mb-0" style={{ color: "white" }}>?עוד לא נרשמת</p>
              </div>
{/* </form> */}
            </div>
         
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>

    </>
  );
}

export default LogIn;

//     // const navigate = useNavigate ();
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//               <h2 className="fw-bold mb-2 text-uppercase">Log In</h2>
//               <p className="text-white-50 mb-5">Please enter your login and password!</p>

//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' type='text' size="lg" onChange={(e)=>setUserName(e.target.value)}/>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setUserPassword(e.target.value)}/>

//               <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
//               <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={tryToLogin(userName,userPassword)}>
//                 Login
//               </MDBBtn>

//               <div className='d-flex flex-row mt-3 mb-5'>
//                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//                   <MDBIcon fab icon='facebook-f' size="lg"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//                   <MDBIcon fab icon='twitter' size="lg"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
//                   <MDBIcon fab icon='google' size="lg"/>
//                 </MDBBtn>
//               </div>

//               <div>
//                 {/* <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold" onClick={()=>navigate ("/SignUp")}>Sign Up</a></p> */}

//               </div>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default LogIn;