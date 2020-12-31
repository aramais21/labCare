import React from 'react';

// Css
import '../Css/Components/Branch.css'

const Branch = ({src, text, alt}) => {
    return (
    <div className = 'Branch' >
        <div className = 'BranchIconCont' >
            <img src = {src} className = 'BracnchIconImg' alt = {alt} ></img>
        </div>
        <div className = 'FloatingPlanet' ></div>
        <p className = 'BranchText' > {text} </p>
    </div>
    );
}

export default Branch;