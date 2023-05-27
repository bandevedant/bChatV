import React, { useRef, useContext } from "react";
import "./login.css";
import CircularProgress from '@mui/material/CircularProgress';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
            <button className="loginButton">{isFetching ?<CircularProgress color="inherit" /> :"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
