import React, {useState, useContext, useRef } from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file,setFile]=useState(null);  //file is the image or video that we are going to upload


  const handleShare = async (e) => {
    e.preventDefault();
    const newPost={
        userId:user._id,
        desc:desc.current.value
    }
    try{
        await axios.post("/posts",newPost);
        // window.location.reload();
    }catch(err){
        console.log(err);
    }
  };

  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profileImg
                ? PF + user.profileImg
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="shareImg"
          />
          <input
            type="text"
            placeholder={"Share your thought " + user.username + " !"}
            ref={desc}
            className="shareInput"
           
          />
        </div>
        <hr className="shareHr" />

        <form className="shareBottom" onSubmit={handleShare}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="shareFile">
              <PermMediaIcon htmlColor="Red" className="shareIcon" />
              <span className="shareOptionName">Image or Video</span>
              <input
                type="file"
                id="shareFile"
                style={{ display: "none" }}
                accept=".jpg,.png,.jpeg"
                onChange={(e)=>(setFile(e.target.files[0]))}
                //array first element means there are multiple files but we are uploading only one file so we are taking the first element
              />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="" className="shareIcon" />
              <span className="shareOptionName">Tag</span>
            </div>
            <div className="shareOption">
              <AddReactionIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionName">Reaction</span>
            </div>
            <div className="shareOption">
              <FmdGoodIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionName">Location</span>
            </div>
          </div>
          <button className="shareBtn" type="submit">
            Share
          </button>
          {!file && <span>could not upload</span>}
        </form>
      </div>
    </div>
  );
};
export default Share;
