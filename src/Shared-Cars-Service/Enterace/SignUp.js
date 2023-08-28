// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';

// function SignUp() {
//     const [userName, setUserName] = useState("");
//     const [userEmail, setUserEmail] = useState("");
//     const [userPassword, setUserPassword] = useState("");
//     const tryToSignUp = (userName, userEmail, userPassword)=>(e) => {
//         // let userDTO = {};
//         // userDTO.Name = userName;
//         // userDTO.Password = userPassword;
//         // userDTO.Email = userEmail; //e.preventDefault();
    
//         // axios.post(`http://localhost:5073/api/User`, {
//         //   userDTO
//         // }).then(res => {
//         //   console.log(res);
//         //   console.log(res.data);
//         // });
           


//         fetch(`http://localhost:5073/api/User`, {method: 'POST', body: {userName, userEmail, userPassword}})
//         .then((res) => res.json())
//         .then((data) => {
//            console.log(data);
//         })
//     }
//     const navigate = useNavigate ();
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//               <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
//               <p className="text-white-50 mb-5">Please enter your details</p>

//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' type='text' size="lg" onChange={(e)=>setUserName(e.target.value)}/>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg2' type='email' size="lg" onChange={(e)=>setUserEmail(e.target.value)}/>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg3' type='password' size="lg" onChange={(e)=>setUserPassword(e.target.value)}/>

//               {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
//               <MDBBtn outline className='mx-2 px-5' color='white' size='lg'  onClick={tryToSignUp(userName,userPassword,userEmail)}>
//                 Sign Up
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
//                 <p className="mb-0">Have an account? <a href="#!" class="text-white-50 fw-bold" onClick={()=>navigate ("/LogIn")}>Log In</a></p>

//               </div>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default SignUp;