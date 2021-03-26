import React from 'react';

// Components
import SectionDeviderImage from '../../components/SectionDeviderImage';
import Slider from '../../components/Slider';
import OurActivities from '../../components/OurActivities';
import OurPartners from '../../components/OurPartners';

// Css
import './style.css';

const Home = () => {

    return(
        <div className = 'HomeMain' >
            <Slider />
            <OurActivities />
            <SectionDeviderImage text = 'Quality, trust and experience' />
            <OurPartners />
        </div>
    )
}

export default Home;