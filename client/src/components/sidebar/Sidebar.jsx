import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import './sidebar.css'
import {Users} from '../../data/dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

 const Sidebar = () => {
  return (

    <div className='sidebarContainer'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    < RssFeedIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Feed</span>
                </li>
                <li className="sidebarListItem">
                    < ChatIcon  className='sidebarIcon'/>
                    <span className="sidebarIconName">Chat</span>
                </li>
                <li className="sidebarListItem">
                    < SlowMotionVideoIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Videos</span>
                </li>
                <li className="sidebarListItem">
                    < GroupsIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Groups</span>
                </li>
                <li className="sidebarListItem">
                    < BookmarkIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    < QuizIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Questions</span>
                </li>
                <li className="sidebarListItem">
                    < WorkIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Job</span>
                </li>
                <li className="sidebarListItem">
                    < CalendarTodayIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Events</span>
                </li>
                <li className="sidebarListItem">
                    < SchoolIcon className='sidebarIcon'/>
                    <span className="sidebarIconName">Courses</span>
                </li>
            </ul>
            <button className="sidebarBtn">Show More</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
                {Users.map(((u)=>(
                    <CloseFriend key={u.id} friend={u}/>
                )))}
                
            </ul>
            
        </div>

    </div>
  )
}
export default Sidebar
