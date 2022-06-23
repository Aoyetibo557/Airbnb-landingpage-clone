import { Button } from '@material-ui/core';
import React from 'react'
import './HeroCard.css';



function HeroCard({src, title, subTitle}) {
    return (
        <div className="heroCard">
            <picture>
                <source srcSet="https://a0.muscache.com/im/pictures/59c2cdc5-c78c-48dc-8adf-647a62e77d75.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/59c2cdc5-c78c-48dc-8adf-647a62e77d75.jpg?im_w=1440 2x" media="(min-width: 743.1px) and (max-width: 1127px)" />
                <source srcSet="https://a0.muscache.com/im/pictures/2f6270e1-5b0b-454c-9f1e-b36bad7efd57.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/2f6270e1-5b0b-454c-9f1e-b36bad7efd57.jpg?im_w=720 2x" media="(max-width: 743px)" />
                <img src={src} alt="" />
            </picture>
            <div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <Button>Become a Host</Button>
            </div>

        </div>
    )
}

export default HeroCard
