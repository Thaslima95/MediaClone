import React from 'react';
import './login.css';


import axios from 'axios';
import {useState,useEffect} from 'react';
import { loginUtil } from '../../apiUtil';
import {useSelector,useDispatch } from "react-redux"
import { loginActionCreator } from '../../reducers/userReducer';
import {useNavigate, useLocation} from "react-router";

import {Link} from 'react-router-dom';
import { useRef } from 'react';

 export default function Login() {

     
  const state = useSelector(state=>state.user);
  const dispatch = useDispatch()

  const email=useRef();
  const password=useRef();

 const navigate = useNavigate();
  const {state:prevPath} = useLocation();


  useEffect(() => {
    console.log({prevPath});
  }, [])

  const loginHandle = async(e)=>{
   e.preventDefault();

   const user={
      email:email.current.value,
      password:password.current.value
    }
    console.log(user)
   try{
 dispatch(loginActionCreator(user));
  if(prevPath)
        navigate(prevPath);
   }
   catch(error)
   {
    console.log(error)
   }
    }
  


  return (
    <>
   
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
<h3 className="loginLogo">MediaBook</h3>
<span className="loginDesc">Connect with friends! To Entertain your day</span>
{/* {data ? console.log(data) : console.log("no user")} */}
 {/* {user ?<NextLogin user={user}/> : " "} */}
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={loginHandle}>
<input type="email" placeholder="Email" className="loginEmail" required  ref={email} />
<input type="password" placeholder="password" className="loginPassword" required ref={password} />



<button className="loginButton">Log In</button>

<span className="forgotPassword">Forgot Password?</span>


                </form>
            </div>
        </div>
    </div>
    </>
  )
}
