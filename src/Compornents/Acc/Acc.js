import React from 'react'
import"./acc.css"
import Slidebar from '../Slidebar/Slidebar'

function Acc() {
    return (
        <div className="acc">
            <div className="accleft">
                <div className="accle">
                <h3>Update your profile</h3>
                <div>
                    <h5> profile picture</h5>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg" className="imgpc"/>
                        <label htmlFor="fileInput">
                        <i class="far fa-address-card proimg"></i>
                        </label>
                        <input className="Wirteinput" type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <div className='update'>
                        <h4>UserName</h4>
                        <input type="text" placeholder="Khang" className="iput"/>
                        <h4>Email</h4>
                        <input type="email" placeholder="khangle@123" className="iput"/>
                        <h4>Password</h4>
                        <input type="password" placeholder="******" className="iput"/>
                        <br/>
                        <button type="submit" className="btnup">Update</button>
                    </div>
                    <a className="detelee">delete account</a>
                </div>
</div>
            </div>
            <div className="accright">
                <Slidebar/>
            </div>
        </div>
    )
}

export default Acc
