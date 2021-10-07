import React from 'react'
import './topbar.css'

function Topbar() {
    return (
        <div className="top">
           <div className="left">
           <i class="fab fa-facebook"></i>
           <i class="fab fa-telegram"></i>
           <i class="fab fa-instagram-square"></i>
           <i class="fab fa-facebook-messenger"></i>
           </div>
           <div className="center">
               <ul className="list">
                   <a className="limk" href="/"><li>HOME</li></a>
                   <a className="limk"><li>ABOUT</li></a>
                   <a className="limk" onClick={()=>{alert('https://www.facebook.com/profile.php?id=100013373972602')}}><li>CONTACTS</li></a>
                   <a className="limk" href="/write"><li>WRITE</li></a>
                   <a className="limk"><li>LOG OUT</li></a>
               </ul>
           </div>
           <div className="ringht">
             <a href="/acc"> <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              className="avt"/></a>
              <i class="fas fa-search"></i>
           </div>
        </div>
    )
}

export default Topbar
