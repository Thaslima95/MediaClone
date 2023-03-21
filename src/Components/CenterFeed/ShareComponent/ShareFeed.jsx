import React, { useContext,useRef,useState } from 'react';
import './sharefeed.css';

import {FileMedia} from '@styled-icons/octicons/FileMedia';
import {Label} from '@styled-icons/boxicons-solid/Label';
import {Location} from '@styled-icons/entypo/Location';
import {Emoji} from '@styled-icons/fluentui-system-filled/Emoji';
import {Share} from '@styled-icons/fluentui-system-regular/Share';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';
import {loadingAction} from '../../../reducers/userReducer';



export default function ShareFeed() {
  const pf="http://localhost:6500/images/"

  const {username, _id,profilePicture} = useSelector(state=>state.user);
    const dispatch = useDispatch();
  const [file,setFile]=useState(null);
  const desc=useRef();

  
const shareHandler=async (e)=>{
e.preventDefault();
console.log(desc.current.value)
if(desc.current.value=="")
{
  toast("Post cannot be empty")
}
else{

const newPost={
  userId:_id,
  desc:desc.current.value
}
if(file)
{
  const data=new FormData();
  const fileName=Date.now()+file.name;
  data.append("name",fileName)
  data.append("file",file)
  
  
 newPost.img=fileName;

try{
await axios.post("/upload",data)

}catch(error)
{
  console.log(error)
}
}
try{
  
  await axios.post("/posts",newPost);
toast("Post shared success");
  setTimeout(function(){
    dispatch(loadingAction(true))
}, 3000);
  
  
}catch(err)
{
  console.log(err)
}
}
}
  return (
    
    <>
    <div className="ShareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
<img src={profilePicture ? pf+profilePicture : pf+"avatar.jpg" } alt="" className="shareprofile" />
<input type="text" className="shareInputText"  placeholder="What's in your mind?" ref={desc}/>
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" onSubmit={shareHandler}>
              <div className="ShareOptions">
                <label htmlFor='file' className="ShareOption">
<FileMedia color="#33ff33" className="FileMediaIcon" size="25px"/>
<span className="shareOptionText">Photos or Videos</span>
<input type="file" style={{display:"none"}} id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                 <div className="ShareOption">
<Label className="FileMediaIcon" size="25px"/>
<span className="shareOptionText">Tag</span>
                </div>
                 <div className="ShareOption">
<Location color="blue" className="FileMediaIcon" size="25px"/>
<span className="shareOptionText">Location</span>
                </div>
                 <div className="ShareOption">
<Emoji color="Goldenrod" className="FileMediaIcon" size="25px"/>
<span className="shareOptionText">Feelings</span>
                </div>

              </div>
              <button className="ShareButton" type="submit">
Share<Share size="25"/>
              </button>
              
              
              <ToastContainer />
            </form>
           
        </div>
        
        </div>

</>
  )
}
