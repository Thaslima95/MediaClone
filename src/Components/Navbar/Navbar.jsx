import navbar from './navbar.css';
import {Person} from '@styled-icons/bootstrap/Person';
import {SearchHeart} from '@styled-icons/bootstrap/SearchHeart';
import {HomeHeart} from '@styled-icons/boxicons-solid/HomeHeart';
import {ChatHeart} from '@styled-icons/bootstrap/ChatHeart';
import { NotificationsCircle } from 'styled-icons/ionicons-outline';
import {Link} from "react-router-dom";
import React from 'react';
import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';
import {useEffect} from 'react';


export default function Navbar() {
  const {profilePicture} = useSelector(state=>state.user);
    const dispatch = useDispatch();
 

 
  const pf="http://localhost:6500/images/";
  return (
    <>
    <div className="navbarContainer">
       
<div className="navbarLeft">
  <Link to="/" style={{textDecoration:"none"}}>
  <span className="navbarLogo">MediaBook</span>
  </Link>
    
</div>
<div className="navbarCenter">
  <div className="searchbar">
    <SearchHeart className="searchIcon" size="20"/>
    <input className="textInput" type="text" placeholder="Search People,Post,Newsletter.."></input>
</div>
</div>
<div className="navbarRight">
<div className="navbarLinks">
  <span className="navbarLink">Home</span>
  <span className="navbarLink">TimeLine</span>
  </div>
  <div className="navbarIcon">
    <div className="navbarIconItem">
      <Person size="35"/>
      <span className="Iconnotify">1</span>

    </div>
    <div className="navbarIconItem">
<ChatHeart size="35"/>
<span className="Iconnotify">5</span>
    </div>
    <div className="navbarIconItem">
<NotificationsCircle size="35"/>
<span className="Iconnotify">6</span>
    </div>
  </div>
 
  
  <img className="profilepic" src={profilePicture ? pf+profilePicture : pf+"avatar.jpg"} alt="" />

</div>
</div>

    
    </>
  )
}
