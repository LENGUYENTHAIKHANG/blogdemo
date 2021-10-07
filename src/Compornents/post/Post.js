import React from 'react'
import data from './postdata.js'
import './post.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'

function Post() {
    return (
        <div className="post">
            
            {data.cates.map(item => (
                <div className="posts">
                    <h3>{item.name}</h3>
                    <p className='detail'>{item.detail}</p>
                    <img src={item.image} className="imagepost"/>
                    
                    <p>{item.time}</p>
                    <Router>
                    <a href={'/sp/'+item.id}><button className="btnslide">xem thêm</button></a>
                    </Router>
                </div>
            ))

            }
          
        </div>
    )
}

export default Post
