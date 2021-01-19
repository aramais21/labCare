import React from 'react';

import WhoWeAre from './components/WhoWeAre';
import OurLeadership from './components/OurLeadership';
import OurLocations from './components/OurLocations';

import './style.css';

const AboutUs = () => {
    return(
        <div className = 'AboutMain'>
            <WhoWeAre/>
            <OurLeadership/>
            <OurLocations/>
        </div>
    )
}

export default AboutUs;