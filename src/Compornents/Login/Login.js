import React from 'react'
import'./login.css'

function Login() {
    return (
        <div className="login">
            
            <div className="formlogin">

            <h1>Login</h1>
            <input type="text" placeholder="UserName" className="logip"/>
            <br/>
            <input type="password" placeholder="PassWord" className="logip"/>
            <br/>
            <a href="/" ><button type="submit" className="btnlog">Login</button></a>
            <br/>
            <a href="/register" className="regis">Register?</a>
            </div>
        </div>
    )
}

export default Login
