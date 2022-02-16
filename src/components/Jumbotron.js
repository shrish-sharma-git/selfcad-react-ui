import React, { useState } from 'react'
import './jumbotron.css'
import BellLogo from '../assets/bell-solid.svg';
import Logo from '../assets/logo.png';

const Jumbotron = () => {
    const [selected, setSelected] = useState("Newest");

    return (  
        <div className="jumbotron">
            <div className="nav">
                <div className="company-name">
                    <img src={Logo} alt="SelfCAD Logo" width={"50px"} height={"50px"}/>
                    <span>Self</span><span className='blue-color'>CAD</span>
                    <span>Projects</span>
                </div>
                <div className="user-profile">
                    <span className='user-name'>Jenny Wilson</span>

                    <img className='bell-icon' src={BellLogo} />
                    
                    <img className='user-profile-image' src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="User Image" width={"40px"} height={"40px"}/>
                </div>
            </div>
            <div className="header">
                <p className='welcome-msg'>Welcome to Self<span className='blue-color'>CAD</span> Editor</p>
                <p className='sub-1'>New to 3D modelling?</p>
                <p className='sub-2'>Try out our <span className='blue-color'>Interactive Tutorials.</span></p>
            </div>
            <div className="jumbo-content">
                <div className="search-bar">
                    <input type={"text"} placeholder={"Find Project"} className="search-input"/>
                    <button className='search-btn'>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="sort-bar">
                    <span>Sort By:</span>
                    <select id='sorting'
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="sort-input"
                    >
                        <option value={"Newest"}>Newest</option>
                        <option value={"Oldest"}>Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
 
export default Jumbotron;