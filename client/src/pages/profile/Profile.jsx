import React,{useState,useEffect} from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user,setUser]=useState({});

  useEffect(()=>{
    const fetchUser=async()=>{
     const res=await axios.get(`/users?username=${username}`); 
     setUser(res.data);
    }
     fetchUser();
 },[])

 const params=useParams();
const username=params.username;
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileTop">
            <div className="profileCover">
              <img
                src={user.coverImg ? PF+user.coverImg : PF+"person/noCover.png"}
                alt=""
                className="profileCoverImg"
              />
              <img 
                src={user.profileImg ? PF+user.profileImg : PF+"person/noAvatar.png"}
              alt=""
               className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.bio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
