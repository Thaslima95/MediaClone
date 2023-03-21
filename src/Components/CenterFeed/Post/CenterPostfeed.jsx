import React from 'react';
import {MoreVertical} from '@styled-icons/feather/MoreVertical';

import './postfeeds.css';
import {Heart} from '@styled-icons/fa-solid/Heart';
import {Like} from '@styled-icons/boxicons-regular/Like';
import {useState,useEffect,useContext} from "react";
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';


export default function CenterPostfeed ({post}) {
  const pf="http://localhost:6500/images/"
  const [likeColor,setColor]=useState("#000000")
  const [Members,setMember]=useState({})




const {username, _id} = useSelector(state=>state.user);
    const dispatch = useDispatch();



  useEffect(()=>{
    setisLiked(post.likes.includes(_id))
  },[_id,post.likes])
useEffect(()=>{
  const fetchMember=async ()=>{
    
    const res=await axios.get(`/users?userId=${post.userId}`)
   
    setMember(res.data);
  }
  fetchMember();
},[post.userId])
console.log(Members)


const [Likes,setLikes]=useState(post.likes.length)
const [isLiked,setisLiked]=useState(false);
const likeEvent=()=>{

  try{
axios.put("/posts/"+post._id+"/like",{userId:_id})

  }catch(err)
  {
    console.log(err)
  }
  setLikes(isLiked?Likes-1:Likes+1);
  isLiked?setColor("#000000"):setColor("#0000FF")
 setisLiked(!isLiked);
  
}
  return (
    <>
    
    <div className="postfeedContainer">
      <div className="postfeedWrapper">
        <div className="postfeedTop">
          <div className="postfeedTopLeft">
            
           <Link to={`/profile/${Members.username}`}>
           
              <img src={pf+Members.profilePicture|| pf+"avatar.jpg"} alt="" className="postprofileimage" />
</Link>
            
            <span className="postprofileName">{Members.username}</span>
            <span className="postProfileDate">{format(post.createdAt)}</span>
          </div>
          <div className="postfeedTopRight">
            <MoreVertical className="more" size="25"/>
          </div>
        </div>
        <div className="postfeedCenter">
          <span className="postText">{post?.desc}</span>
          
          <img src={pf+post.img} alt="post image" className="postImage" />
        </div>
        <div className="postfeedBottom">
          <div className="postfeedBottomLeft">
            <Like className="likeIcons" color={likeColor} size="25" onClick={likeEvent}/>
            <Heart className="HeartIcons" color="#ff4d94"onClick={likeEvent} size="25"/>
            <span className="countlikes">{Likes}</span>
          </div>
          <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
              </div>
        </div>

      </div>
      <hr/>
    </div>


</>
  )

  
}
