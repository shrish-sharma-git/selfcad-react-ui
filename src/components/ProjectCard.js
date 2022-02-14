import React from 'react'
import './box.css'
import ThreeDots from '../assets/ellipsis-vertical-solid.svg';

const ProjectCard = () => {
    return (  
        <div className="box folded-box">
            <span>Project</span>
            <button>...</button>
        </div>
    );
}
 
export default ProjectCard;