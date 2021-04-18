import React from 'react';

// Components
import SectionDeviderImage from '../../components/SectionDeviderImage';
import Slider from '../../components/Slider';
import OurActivities from '../../components/OurActivities';
import OurPartners from '../../components/OurPartners';

// Css
import useTranslate from '../../Hooks/useTranslate';
import { mainTitle, moto } from '../../data/home';

const Home = () => {
    const {translateLocal} = useTranslate();

    return(
        <div className = 'HomeMain' >
            <Slider mainTitle = {translateLocal(mainTitle.title)} secondaryTitle = {translateLocal(mainTitle.moto)} />
            <OurActivities />
            <SectionDeviderImage text = {translateLocal(moto)} />
            <OurPartners />
        </div>
    )
}

export default Home;