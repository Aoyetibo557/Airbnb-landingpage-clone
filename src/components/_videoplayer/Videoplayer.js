import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd';
import {DefaultPlayer as Video} from "react-html5video";
import "react-html5video/dist/styles.css";


const videoURL = "blob:https://www.airbnb.com/4e596c18-b5ca-4145-bdd1-8e0b780c6695";

function Videoplayer() {
    const [isModalopen, setIsModalopen] = useState(false);

    const showModal = () => {
        setIsModalopen(true);
    };
    const handleCancel = () => {
        setIsModalopen(false);
        // stop playing video when modal is closed
        document.getElementById("video").pause();

        // set the session storage key to false so that the modal doesn't show up again
        sessionStorage.setItem("videoMadalOpen", "false");
    };

    useEffect(() => {
        // sets session storage of videoMadalOpen to true, check if the state is set to closed, if so, don't show the modal otherwise show the modal
        if (sessionStorage.getItem("videoMadalOpen") !== "true") {
            setIsModalopen(false);
        } else {
            showModal();
        }
        
    }, [sessionStorage.getItem("videoMadalOpen")]);
  return (
    <div>
        <Modal title="Video Player" visible={isModalopen} onCancel={handleCancel} footer={null} width={850}>
            <Video id="video" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="https://a0.muscache.com/im/pictures/da6ccae2-c381-450d-90f8-54223f6eb6dd.jpg?im_q=highq&im_w=240"
                onCanPlayThrough={() => {
                    // Do stuff
                  
                    console.log("Video is ready to play");
                }}
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </Video>
        </Modal>
    </div>
  )
}

export default Videoplayer