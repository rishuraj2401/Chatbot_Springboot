import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
const Login = () => {
   const [email, setEmail]=useState("");
   const [password , setPassword]= useState("");
   const navigate=useNavigate();
    // const handlechange=(e)=>{
    //  setEmail(e.target.value);
    //  setPassword(e.target.value);
    // }
    const handleonclick = () => {
        if (!email || !password) {
          alert("All fields are required.");
          return;
        }
      
        axios
          .post(`http://localhost:8080/user/login`, {
            emailId: email,
            password: password,
          })
          .then((response) => {
            if (response.status === 200) {
              navigate("/chat");
            } else {
              alert("User not found."); // Handle user not found error
            }
          })
          .catch((error) => {
            alert("An error occurred."); // Handle other errors
            console.error("Error:", error);
          });
      };
      
//     useEffect(()=>{
// console.log(email,"&", password);
//     })

    return (
       <>
       <div className="main">
        <div className="main1">
        <h1>Login</h1>
        <p>Please fill the required details </p>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} 
        placeholder="EmailID"/> 
        <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}
         placeholder="Password"/>
        <button type="button" onClick={handleonclick}>Login</button> 
        {/* <Link to>Register Yourself</Link> */}
        <Link to={"/signin"}>Register Yourself</Link>
           </div>
        {/* <div className="main2"></div> */}
       </div>
       

       </>
    );
}

export default Login;
