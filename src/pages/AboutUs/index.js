import React from 'react';

import WhoWeAre from './components/WhoWeAre';
import OurLeadership from './components/OurLeadership';

import './style.css';

const AboutUs = () => {
    return(
        <div className = 'AboutMain'>
            <WhoWeAre/>
            <OurLeadership/>
        </div>
    )
}

export default AboutUs;