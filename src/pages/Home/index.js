import React from 'react';

// Components
import Branches from './components/Branches';
import ProjectsList from './components/ProjectsList';
import SectionDeviderText from '../../components/SectionDeviderText';
import SectionDeviderImage from '../../components/SectionDeviderImage';
import Slider from '../../components/Slider';
import PartnerList from './components/PartnerList';

// Css
import './style.css';

const Home = () => {

    return(
        <div className = 'HomeMain' >
            {/* <Branches/> */}
            <Slider />
            <SectionDeviderText text = {'Our projects'} color = {'orange'} />
            <ProjectsList/>
            <SectionDeviderImage />
            <SectionDeviderText text =  {'Our partners'} color = {'green'} />
            <PartnerList timeInterval = {5000}/>
        </div>
    )
}

export default Home;