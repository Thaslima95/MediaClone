import React, { useContext } from 'react';
import './feed.css';
import ShareFeed from './ShareComponent/ShareFeed';
import CenterPostfeed from './Post/CenterPostfeed';

import axios from "axios";
import {useState,useEffect} from "react";
import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';



export default function Feed({usernames}) {

   const {username,_id} = useSelector(state=>state.user);
    const dispatch = useDispatch();
  const  [posts,setPost]=useState([]);
 

  useEffect(()=>{
    const fetchPost=async ()=>{
     
      
       const res=usernames ? await axios.get(`/posts/profile/${usernames}`) : await axios.get(`/posts/timeline/${_id}`)

    
      setPost(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)- new Date(p1.createdAt)

      }));
    }
fetchPost();
  },[usernames]);

  console.log(posts)
  return (
    <div className="centerfeedContainer">
    
    <div className="wrapperFeedContainer">
     
         {/* {(!usernames || usernames===username) &&  <ShareFeed/>} */}
         <ShareFeed/>
         
{posts.map((p)=><CenterPostfeed key={p._id} post={p}/>)}  
       <hr/>
      
    </div>
    </div>
  )
}
