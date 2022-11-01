import React from 'react';
import './WorkCardStyles.css';
import {NavLink} from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt=''/>
        <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
        <a className='btn' href={props.view}>view</a> 
        <a className='btn' href={props.sorce}>sorce</a> 
        </div>
      </div>
    </div>
  )
}

export default WorkCard
