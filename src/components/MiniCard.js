import React from 'react';
import './MiniCard.css';




function MiniCard({src, place, distance}) {
    return (
        <div className="minicard">
            <img src={src} alt="" />
            <div className="minicard__info">
                <h2>{place}</h2>
                <p>{distance} hour drive</p>
            </div>
        </div>
    )
}

export default MiniCard
