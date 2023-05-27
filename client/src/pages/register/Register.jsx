import React, { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history= useHistory();

  const handleClick = async(e) => {
    e.preventDefault();

    if(password.current.value===confirmPassword.current.value){
        const user = {
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
        };
        try{
            await axios.post("/auth/register",user);
            history.push("/login");
        }catch(err){
            console.log(err);
        }
    }
    else{
        confirmPassword.current.setCustomValidity("Passwords don't match");
    }

  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLeftWrapper">
            <h3 className="loginLogo">bChatV</h3>
            <h4 className="loginDesc">Connect Around the world !!</h4>
          </div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              required
              className="loginInput"
              ref={confirmPassword}
            />
            <button className="loginButton">Sign In</button>
          </form>
          <Link to="/login">
            <button className="loginRegisterButton">Log into Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
