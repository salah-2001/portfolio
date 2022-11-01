import React from 'react';
import './AbouteContentStyles.css';
import {Link} from 'react-router-dom';
import salah1 from '../assets/salah1.png';
import salah from '../assets/salah.jpg';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>
                Je m'appelle  Salah-Eddine  Chhoub, j'ai 21ans  ,    j'ai eu mon diplôme en technicien 
                spécialisé  en  développement  informatique  ,  Je  suis  un  homme  créatif, 
                ponctuelle, responsable et j’ai la capacité  de travailler en  équipe  .  Je suis  à  la 
                recherche  d’un  stage  pré  embauche  d’apprendre  et  développer  mes compétences.
            </p>
            <a href="chhoub.front-end.pdf" alt="" className='btn btn-light ' download="chhoub.front-end.pdf"> <i class="fa-solid fa-download"></i> cv</a>
            <Link to={'/contact'} className='btn mt-2'>
              contact
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={salah} alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={salah1}  alt="true" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
