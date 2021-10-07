import React from 'react'
import data from'../post/postdata'
import Slidebar from '../Slidebar/Slidebar';
import'./sing.css'

function SinglePost(item) {
    let product = data.cates.find(x=>x.id === item.match.params.id);
    return (
        <div className='singlepage'>
            <div className='leftt'>
            <img className='bgi' src={product.bgimage}/>
            <h1 className="names">{product.name}</h1>
            <span className="tgian">{product.time}</span>
            <p className='noidung'>{product.noidung}</p>
            
            <img className="imgphu" src={product.img1}/>
            <img className="imgphu" src={product.img2}/>
            <img className="imgphu" src={product.img3}/>
            <img className="imgphu" src={product.img4}/>
            <h4 className="tacgia">{product.tacgia}</h4>
            </div>
            <div className="rightt">
               <Slidebar/> 
            </div>
        </div>
    )
}

export default SinglePost
