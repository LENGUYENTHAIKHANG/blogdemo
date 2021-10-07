import React from 'react'
import'./login.css'

function Register() {
    return (
        <div className="login">
            
            <div className="formlogin">

            <h1>Register</h1>
            <input type="text" placeholder="UserName" className="logip"/>
            <br/>
            <input type="email" placeholder="Email" className="logip"/>
            <br/>
            <input type="password" placeholder="PassWord " className="logip"/>
            <br/>
            <a href="/login" ><button type="submit" className="btnlog" onClick={()=>(alert('bạn đã đăng ký thành công'))}>Register</button></a>
            <br/>
            <a href="/login" className="regis">Login</a>
            
            </div>
        </div>
    )
}

export default Register
