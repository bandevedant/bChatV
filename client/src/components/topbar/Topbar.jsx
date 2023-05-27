import React,{useContext} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
// import profile from '../../assets/person/1.jpeg'
import './topbar.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

 const Topbar = () => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user}=useContext(AuthContext);

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to='/' style={{textDecoration:'none'}}>
            <div className="topbarLogo">bChatV</div>
            </Link>
        </div>
        <div className="topbarCenter">
            <SearchIcon className='icon'/>
            <input placeholder='Search for friend, post or video' className='searchInput'/>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon className='icon'/>
                    <span className='topbarIconItemCount'>1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon className='icon'/>
                    <span className='topbarIconItemCount'>2</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon className='icon'/>
                    <span className='topbarIconItemCount'>1</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`} style={{textDecoration:'none'}}>
            <img src={user.profileImg ? PF+user.profileImg : PF+"person/noAvatar.png"} alt="profilePic" className='topbarImg'/>
            </Link>
        </div>
    </div>
  )
}
export default Topbar
