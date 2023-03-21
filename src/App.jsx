import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import HomeC from './Pages/Home/HomeC'
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  
  BrowserRouter
} from "react-router-dom";

import {Navigate} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux';
import {useState,useEffect} from 'react';
import { loginWithCookieAction } from './reducers/userReducer.js';



function App() {

  const {username} = useSelector(state=>state.user);
  
   
  const { loading } = useSelector(state => state.user);
    const dispatch = useDispatch();

      useEffect(() => {
        console.log("before cookie")
    dispatch(loginWithCookieAction());
    console.log("after cookie")
  }, [])
  return (
    
    <Router>
    <Routes>



<Route path="/login" element={ <Login />}></Route>
<Route path="/register" element={ <Register/>}>

</Route>
<Route path="/" element={username ? <HomeC /> : <Login/>}></Route>


      </Routes>
    </Router>
    
  
  );
}

export default App;
