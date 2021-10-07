import React from 'react'
import Header from '../Header/Header'
import Post from '../post/Post'
import Slidebar from '../Slidebar/Slidebar'

import './home.css'

function Home() {
    return (
        <div>
            
            <div className="homes">
                <div className="wpost"><Post/></div>
                <div className='wslide'><Slidebar/></div>
            </div>
        </div>
    )
}

export default Home
