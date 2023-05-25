import React from 'react'
import './register.css'

export default function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}
