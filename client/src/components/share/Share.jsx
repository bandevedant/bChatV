import React, {useContext} from 'react'
// import profile from '../../assets/profile.jpg'
import './share.css'   
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {AuthContext} from '../../context/AuthContext'

 const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}=useContext(AuthContext);

  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img  src={user.profileImg ? PF+user.profileImg : PF+"person/noAvatar.png"}
                 alt="" className="shareImg" />
                <input type="text" placeholder={'Share your thought '+ user.username+" !"} className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="Red" className='shareIcon'/>
                        <span className="shareOptionName">Image or Video</span>
                    </div>
                    <div className="shareOption">
                        < LabelIcon htmlColor="" className='shareIcon' />
                        <span className="shareOptionName">Tag</span>
                    </div>
                    <div className="shareOption">
                        <AddReactionIcon htmlColor="goldenrod" className='shareIcon'/>
                        <span className="shareOptionName">Reaction</span>
                    </div>
                    <div className="shareOption">
                        <FmdGoodIcon htmlColor="blue" className='shareIcon'/>
                        <span className="shareOptionName">Location</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </div>
    </div>
  )
}
export default Share;