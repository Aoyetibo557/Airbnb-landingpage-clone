import React, {useEffect, useState} from 'react'
import "./NotFound.css";
import { useHistory } from 'react-router-dom';
import NotFoundImage from "../images/404.svg";
import Header from './Header';

function NotFound() {
    const [timer, setTimer] = useState(10);
    const history = useHistory();

    useEffect(() => {
        setInterval(() => {
            countDown()
        },1000);


        return clearInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[timer])

    const countDown = () =>{
        if(timer === 0) {
            history.push("/")
        }else{
            setTimer(timer -1)
        }
    }
  return (
    <div className='notfound'>
        <div>
            <Header />
        </div>

       <div className='notfound__container'>
            <img className='notfound__image' src={NotFoundImage} alt='' />
            <h3>You will be redirected to the home page in <span className='timer'> {timer}</span> seconds</h3>
       </div>
    </div>
  )
}

export default NotFound