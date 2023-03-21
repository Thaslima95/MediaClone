import React from 'react';
import './leftbar.css';


import {DynamicFeed} from '@styled-icons/material/DynamicFeed';
import {ChatHeart} from '@styled-icons/bootstrap/ChatHeart';
import {Videos} from '@styled-icons/boxicons-solid/Videos';
import {Groups} from '@styled-icons/material-twotone/Groups';
import {Bookmarks} from '@styled-icons/ionicons-sharp/Bookmarks';
import {EmojiEvents} from '@styled-icons/material-twotone/EmojiEvents';


export default function Leftbar() {
  return (
    <div className="leftbarContainer">
    <div className="leftbarWrapper">
      <ul className="leftbarList">
        <li className="leftbarListItem">
          <DynamicFeed  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Feeds</span>

        </li>
        <li className="leftbarListItem">
           <ChatHeart  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Charts</span>
        </li>
        <li className="leftbarListItem">
           <Videos  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Videos</span>
        </li>
        <li className="leftbarListItem">
          <Groups  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Groups</span>
        </li>
        <li className="leftbarListItem">
          <Bookmarks  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Bookmarks</span>
        </li>
        <li className="leftbarListItem">
          <EmojiEvents  className="ListItemIcon" size="25"/>
          <span className="listItemText"> Events</span>
        </li>
       
      </ul>
     
      <hr className="lefthr"></hr>
     
      </div>
       </div>
  )
}
