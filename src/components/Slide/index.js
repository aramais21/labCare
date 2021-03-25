import React from 'react';

import './style.css';

const Slide = ({img}) => {
    return ( 
        <img src = {img} className = 'slideImg' alt = 'slide img'/>
    );
}

export default Slide;