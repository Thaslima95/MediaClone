import React from 'react';

import './home.css';
import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Leftbar from '../../Components/LeftBar/Leftbar'
import Feed from '../../Components/CenterFeed/Feed';



export default function HomeC() {
   const {username,loading} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    console.log(username ? username : " no username ")
    console.log(loading)
  
  return (
    <>
    
        
        <>
      <Navbar/>
     <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        
     

       
        

      </div>
    </>
        

      
    </>
  )
}
