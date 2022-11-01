import React  from 'react';
import './HeroImg2Styles.css';
import Typewriter from 'typewriter-effect';

const HeroImg2 =()=>{

    return (
      <div className="hero-img">
       <div className="heading">
         <h1>PROJECTS</h1>
         <p>
         <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:60,
                        strings:[" Some of my most recent works."]
                         }}
                />
         </p>
       </div>
      </div>
     )
  }


export default HeroImg2;
