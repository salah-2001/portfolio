import React from 'react';
import './HeroImg3Styles.css';
import Typewriter from 'typewriter-effect';

const HeroImg3= () =>{

    return (
      <div className="hero3-img">
       <div className="heading3">
         <h1>ABOUT</h1>
         <p>
         <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:60,
                        strings:["I'M A FRIENDLY FRONT-END DEVELOPER."]
                         }}
                />
            </p>
       </div>
      </div>
     )
   
}

export default HeroImg3;
