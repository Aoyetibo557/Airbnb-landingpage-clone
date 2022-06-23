import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import './Banner.css';
import Search from './Search';



function Banner() {
    const [ showSearch, setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}

                <Button variant="outlined" className="banner__searchButton" onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>

            </div>

            <div className="ban">
                
                <img src="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560" alt="" /> 
                <h3>Made possible by Hosts</h3>
            </div>
           
            {/* <div className="banner__info">
                <h1>Get Out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div> */}
        </div>
    )
}

export default Banner
