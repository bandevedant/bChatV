import React,{useState,useEffect} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Users} from '../../data/dummyData'
import axios from 'axios'
import { format } from 'timeago.js';

import './post.css'

 const Post = ({post}) => {
   const [like,setLike]=useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false);
    const [users,setUsers]=useState({});

    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);
    }

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   

  useEffect(()=>{
     const fetchUsers=async()=>{
      const res=await axios.get(`/users?userId=${post.userId}`); 
      setUsers(res.data);
     }
      fetchUsers();
  },[post.userId])

  return (
      <div className="postContainer">
        {/* {console.log(post.photo)} */}
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={users.profilePicture || PF+"profile.jpg"} alt="" className="postTopImg" />
                    <span className="postTopName"> {users.username}</span>
                    <span className="postTime">{format(users.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='postTopRightIcon'/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc }</span>
                <img  alt="" className="postImg" src={PF+post.img}/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  src={`${PF}heart.png`} alt="" className="likeImg" onClick={likeHandler}/>
                    <img src={`${PF}likeImg.png`} alt="" className="likeImg" onClick={likeHandler} />
                    <span className="likeCount">Liked by {like} people</span>
                </div>
                <div className="postBottomRight">{post.comment} Comments</div>
            </div>
        </div>
    </div>
  )
}
export default Post;
//client\src\assets\post\1.jpeg