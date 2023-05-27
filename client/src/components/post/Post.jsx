import React,{useState,useEffect,useContext} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import axios from 'axios'
import { format } from 'timeago.js';
import {AuthContext} from '../../context/AuthContext'

 const Post = ({post}) => {

   const [like,setLike]=useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false);
    const [users,setUsers]=useState({});
    
    const {user:currentUser}=useContext(AuthContext);

     

    const likeHandler=async()=>{
        try{
            await axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
            
        }catch(err){
            console.log(err);
        }

        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);           //it just switches true false in frontend but for backend we need to send the request which is done below
    }
    
    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))  //if the post.likes array contains the current user id then it will return true else false
     },[currentUser._id,post.likes])

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
                    <img src={users.profileImg ? PF+users.profileImg : PF+"person/noAvatar.png"} alt="" className="postTopImg" />
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