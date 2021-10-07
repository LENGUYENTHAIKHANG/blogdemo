import React from 'react'
import './Write.css'

function Write() {
    return (
        <div className="write">
            <form className="writeForm">
            <img src="http://icdn.dantri.com.vn/zoom/1200_630/2018/12/28/photo-7-15459601551391339960716-crop-15459605298361663971099.jpg" className="imgw"/>
                <div className="writefromgroup">
                    
                    <label htmlFor="fileInput">
                        <i className="fas fa-plus iconinput"></i>
                    </label>
                    <input className="Wirteinput" type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="Wirteinput" autoFocus={true}/>
                </div>
                <div className="writefromgroup">
                    <textarea placeholder="Tell your story....." type="text" className="Wirteinput writetext"/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
            
        </div>
    )
}

export default Write
