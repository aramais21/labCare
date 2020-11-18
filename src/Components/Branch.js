import React from 'react';

const Branch = ({src, text}) => {
    return (
    <div className = 'Branch' >
        <div className = 'BranchIconCont' >
            <img src = {src} className = 'BracnchIconImg' ></img>
        </div>
        <div className = "FloatingPlanet" ></div>
        <p className = 'BranchText' > {text} </p>
    </div>
    );
}

export default Branch;