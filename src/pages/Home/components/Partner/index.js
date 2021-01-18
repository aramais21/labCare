import React from 'react';

import './style.css';

const Partner = ({logo, url, alt, id, movedFrom}) => {
    return (
        <a className = {`partnerCont partnerCont${id%2?'Green':'Orange'} ${movedFrom === 'left'?'movedFromLeft':'movedFromRight'}`} href = {url} target = '_blank' rel="noopener noreferrer"  >
            <div className = 'partnerSlider' >{alt}</div>
            <img className = 'partnerImg' src = {logo} alt = {alt} />
        </a>
    );
}

export default Partner;