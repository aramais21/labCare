import React from 'react';

import './style.css';

const Slide = ({img}) => {
    return ( 
        <img src = {img} className = 'slideImg'/>
    );
}

export default Slide;