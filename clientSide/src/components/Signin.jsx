import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    
        const [email, setEmail]=useState("");
        const [name, setName]=useState("");
        const [password , setPassword]= useState("");
        const navigate=useNavigate();
         // const handlechange=(e)=>{
         //  setEmail(e.target.value);
         //  setPassword(e.target.value);
         // }
         const handleonclick=()=>{
            if (!email || !password || !name) {
                alert("All fields are required.");
                return;
              }
         axios.post(`http://localhost:8080/user/register`,{
              name:name,
             emailId:email,
             password:password
         }).then(response=>{
             if(response.status===200){
                 navigate("/chat")
             }
            
         }).catch((error)=>{
            alert("EmailId already registered");
         })
         };
    return (
        <div>
        <div className="main">
        <div className="main2">
        <h1>SignIn</h1>
        <p>Register yourself </p>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} 
        placeholder="Name"/> 
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} 
        placeholder="EmailID"/> 
        <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}
         placeholder="Password"/>
        <button type="button" onClick={handleonclick}>Signin</button> 
        {/* <Link to>Register Yourself</Link> */}
        <Link to={"/"}>Already Registered?</Link>
           </div>
        {/* <div className="main2"></div> */}
       </div>
        </div>
    );
}

export default Signin;
