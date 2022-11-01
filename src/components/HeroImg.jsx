import React from 'react';
import './HeroImgStyles.css';
import background from '../assets/background.gif'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
   <div className="hero">
        <div className="mask">
            <img src={background} alt="" className="int-img" />
        </div>
        <div className="content">
            <p>
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:60,
                        strings:["Hi , I'M SALAH-EDDINE CHHOUB  ","I'M DEVELOPER WEB FRNT-END REACT JS"]
                         }}
                />
            </p>
            <h1>React developer</h1>
            <Link to={'/project'} className='btn'>
               Projects
            </Link>
            <Link to={'/contact'} className='btn btn-light'>
              contact
            </Link>
            <a href="chhoub.front-end.pdf" alt="" className='btn btn-light' download="chhoub.front-end.pdf"> <i class="fa-solid fa-download"></i> cv</a>
        </div>
   </div>
  )
}

export default HeroImg
