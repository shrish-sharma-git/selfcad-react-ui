import React, { useState } from 'react'
import './jumbotron.css'
import BellLogo from '../assets/bell-solid.svg';

const Jumbotron = () => {
    const [selected, setSelected] = useState("Newest");

    return (  
        <div className="jumbotron">
            <div className="nav">
                <div className="company-name">
                    <img src="https://pngimage.net/wp-content/uploads/2018/05/example-logo-png-1.png" alt="" width={"100px"} height={"100px"}/>
                    <span>SelfCAD Projects</span>
                </div>
                <div className="user-profile">
                    <span className='user-name'>Jenny Wilson</span>

                    <img className='bell-icon' src={BellLogo} />
                    
                    <img className='user-profile-image' src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="" width={"40px"} height={"40px"}/>
                </div>
            </div>
            <div className="header">
                <h1>Welcome to SelfCAD Editor</h1>
                <h6>New to 3D modelling?</h6>
                <h6>Try out our Interactive Tutorials.</h6>
            </div>
            <div className="search-bar">
                <input type={"text"} placeholder={"Find Project"} />
                <button className='search-btn'>x</button>
            </div>
            <div className="sort-bar">
                <label htmlFor="sorting">Sort by</label>
                <select id='sorting'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value={"Newest"}>Newest</option>
                    <option value={"Oldest"}>Oldest</option>
                </select>
            </div>
        </div>
    );
}
 
export default Jumbotron;