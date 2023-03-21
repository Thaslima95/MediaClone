import React from 'react';
import './register.css';
import {useRef} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import { signupUtil } from '../../apiUtil';
import {useState,useEffect} from 'react';


export default  function  Register() {
  const username=useRef();
  const email=useRef();
  const password=useRef();
  const cpassword=useRef();
  


   const [pwdValidation, setPwdValidation] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false
    });

    const [isValid, setIsValid] = useState(false);

    const { lowercase, uppercase, number, symbol, length } = pwdValidation;


    useEffect(() => {
        const isPwdValid = Object.values(pwdValidation).every(Boolean);
        console.log({ isPwdValid });
        setIsValid(isPwdValid);
        console.log({ isValid });
    }, [pwdValidation])




    const validatePasword = (e) => {
        const password = e.target.value;
        console.log(password);
        // regex.test(string)
        const lowercase = /(?=.*[a-z])/.test(password);
        const uppercase = /(?=.*[A-Z])/.test(password);
        const number = /(?=.*\d)/.test(password);
        const symbol = /(?=.*[\W_])/.test(password);
        const length = password.length >= 8;
        // setPassword(password);
        setPwdValidation({ lowercase, uppercase, number, symbol, length });
    }

  
  const handleRegister = async (e) => {
  e.preventDefault();
  
  
  if(cpassword.current.value !== password.current.value)
  {
    cpassword.current.setCustomValidity("Password doesn't match")
    console.log("if block")
  }
  else{
       const payload={
      username:username.current.value,
      email:email.current.value,
      password:password.current.value
    }
        try {
          console.log("signup")
            const data = (await signupUtil(payload))?.data
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
	}
  
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
<h3 className="loginLogo">MediaBook</h3>
<span className="loginDesc">Connect with friends! To Entertain your day</span>
            </div>
            <div className="loginRight">
                <form className="registerBox" onSubmit={handleRegister}>
                  <input type="text" placeholder="UserName" className="UserName" required ref={username}  />
<input type="email" placeholder="Email" className="UserEmail" required ref={email} />
<input type="password" placeholder="password" className="UserPassword" onChange={validatePasword} required ref={password} />

<input type="password" placeholder="Confirm password" className="ConfirmPassword" required ref={cpassword}  />

<button className="signupButton" type="Submit"  >Sign Up</button>

<span className="forgotPassword">Already have an account?</span>
<Link to="/login">
<button className="registerloginButton">Login here</button>
</Link>

                </form>
            </div>
        </div>
    </div>
  )
}
