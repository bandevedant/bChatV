import React from 'react'
import './closeFriend.css'

export default function CloseFriend({friend}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    
    <li className="sidebarFriend">
        <img src={PF+friend.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{friend.username}</span>
    </li>
  )
}
