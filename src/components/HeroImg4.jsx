import React  from 'react';
import './HeroImg4Styles.css';
import Typewriter from 'typewriter-effect';

const HeroImg4 =()=>{

    return (
      <div className="hero4-img">
       <div className="heading4">
         <h1>CONTACT</h1>
         <p>
         <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:60,
                        strings:[" Lets have a chat."]
                         }}
                />
         </p>
       </div>
      </div>
     )
  }


export default HeroImg4;