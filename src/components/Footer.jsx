import React from 'react';
import './FooterStyles.css';
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    
                    
                    <p>
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    Taroudant
                    </p>
                    
                </div>
                <div className="phone">
                    <p>
                        <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                        07.60.42.96.87
                    </p>  
                </div>
                <div className="email">
                    <p>
                        <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                         chhoub.salaheddine@gmail.com
                    </p>  
                </div>
            </div>
            <div className="right">
                <h4>about me</h4>
                <p> I'm a front-end developper react js , My expertise is to create front-end design for a website .</p>
                <div className="social">
                   <a href="https://web.facebook.com/profile.php?id=100060315006272"><FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/></a> 
                    <a href="https://www.linkedin.com/in/salah-eddine-chhoub-5b4995200"><FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/></a> 
                    <FaGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
