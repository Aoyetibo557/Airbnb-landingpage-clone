import React, { useState } from 'react'
import './Banner.css';
import Search from './Search';
import ThumbNail from "../images/airbnbLogo.png";


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function Banner() {
    const [ showSearch, setShowSearch] = useState(false)
    return (
        <div className='banner_video_container'>
            <video aria-label='Banner Video' className='banner_video' loop controls muted 
                poster={ThumbNail}
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>
      
            
            // {/* <div className="banner">
            //     <div className="banner__search">
            //         {showSearch && <Search />}

            //     </div>

            //     <div className="ban">
                    
            //         <img src="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560" alt="" /> 
            //         <h3>Made possible by Hosts</h3>
            //     </div>
        
            // </div> */}
    )
}

export default Banner
