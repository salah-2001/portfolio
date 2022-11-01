import React from 'react';
import './WorkCardStyles.css';
import WorkCardData from './WorkCardData';
import WorkCard from './WorkCard';

const Work= () => {
  return (
   <div className="work-conatiner">
    <h1 className="project-heading">PROJECTS</h1>
    <div className="project-conatiner">
     {WorkCardData.map((val,ind)=>{
        return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            sorce={val.sorce}
            />
        )
     })}
    </div>
   </div>
  )
}

export default Work;
