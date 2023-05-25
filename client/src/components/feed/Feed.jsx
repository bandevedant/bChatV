import React,{useState,useEffect} from 'react'
import './feed.css'
import  Share  from '../share/Share'
import  Post  from '../post/Post'
// import {Posts} from '../../data/dummyData' 
import axios from 'axios'

export const Feed = ({username}) => {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
     const fetchPosts=async()=>{
      const res=username
                ? await axios.get("/posts/profile/"+username)
                : await axios.get("/posts/timeline/64660bd3cdf4fa8968ed3f51"); 
      // console.log(res.data);
      // console.log("Helo");
      setPosts(res.data);
     }
      fetchPosts();
  },[username])
  
  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share />
       { posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
       
      </div>
    </div>
  )
}

