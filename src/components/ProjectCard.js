import React from 'react'
import './box.css'

const ProjectCard = () => {
    return (  
        <div className="box folded-box">
            <span>Project</span>
            <button className='more-btn'>
                <i class="fa fa-ellipsis-v more-ico"></i>
            </button>
        </div>
    );
}
 
export default ProjectCard;