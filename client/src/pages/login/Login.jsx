import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='loginContainer'>
        <div className="loginWrapper">

            <div className="loginLeft">
            <div className="loginLeftWrapper">
                <h3 className="loginLogo">bChatV</h3>
                <h4 className="loginDesc">Connect Around the world !!</h4>
            </div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
