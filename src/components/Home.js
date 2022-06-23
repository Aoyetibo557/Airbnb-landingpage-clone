import { Button } from '@material-ui/core';
import React from 'react';
import Banner from './Banner';
import Card from './Card';
import HeroCard from './HeroCard';
import './Home.css';
import MiniCard from './MiniCard';


function Home() {
    return (
        <div className="home"> 
            <Banner />

            <div className="home__explore">
                <h2>Explore nearby</h2>
                <div>
                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240"
                        place="Montauk"
                        distance={3}
                    />

                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg?im_q=medq&im_w=240"
                        place="Ocean City"
                        distance={3}
                    />
                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=240"
                        place="Newport"
                        distance={4.5}
                    />

                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
                        place="Woodstock"
                        distance={3}
                    />
                </div>

                <div>
                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"
                        place="Stowe"
                        distance={8}
                    />

                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240"
                        place="Ithaca"
                        distance={5.5}
                    />

                    <MiniCard 
                        src="https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=240"
                        place="Nantuket"
                        distance={9}
                    />

                    <MiniCard
                        src="https://a0.muscache.com/im/pictures/56ede60a-f90f-48ac-8bb4-85a6d88215e5.jpg?im_q=medq&im_w=240"
                        place="Philadelphia"
                        distance={2}
                        
                    />
                </div>
            </div>

            <div className="home__section__container">
                <h3>Live anywhere</h3>
                <div className="home__section">
                    <Card 
                        src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
                        title="Entire homes"
                        description=""
                        price=""
                    />

                    <Card 
                        src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
                        title="Unique stays"
                        description=""
                        price=""
                    />

                    <Card 
                        src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720"
                        title="Cabins and cottages"
                        description=""
                        price=""
                    />

                    <Card 
                        src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
                        title="Pets allowed"
                        description=""
                        price=""
                    />
                </div>

            </div>

            <div className="home__herocard">
                <HeroCard 
                    src="https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=2560"
                    title=" Your world is worth sharing"
                    subTitle="Turn your extra space into your next opportunity."
                />
            </div>

            <div className="home__discover">
                <h2>Discover Experiences</h2>
                <p>Unique activities with local experts-in person or online.</p>
                <div>
                    <Card
                        src = "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"
                        title="Experiences"
                        description="Local things to do, whatever you are."
                        price=""
                    />

                    <Card 
                        src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720"
                        title="Online Experiences"
                        description="Live, interactive activities led by Hosts."
                        price=""
                    />

                    <Card 
                        src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720"
                        title="Adventures"
                        description="Multi-day trips with meals and stays."
                        price=""
                    />
                </div>
            </div>


        </div>
    )
}

export default Home
