import React from 'react';

// Components
import SectionDeviderText from '../../components/SectionDeviderText';
import SectionDeviderImage from '../../components/SectionDeviderImage';
import Slider from '../../components/Slider';
import OurActivities from '../../components/OurActivities';
import PartnerList from './components/PartnerList';

// Css
import './style.css';

const Home = () => {

    return(
        <div className = 'HomeMain' >
            <Slider />
            <OurActivities />
            {/* <ProjectsList/> */}
            <SectionDeviderImage />
            <SectionDeviderText text =  {'Our partners'} color = {'green'} />
            <PartnerList timeInterval = {5000}/>
        </div>
    )
}

export default Home;