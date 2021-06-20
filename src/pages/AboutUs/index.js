import React from 'react';
import OurMission from '../../components/OurMission';
import OurStrategy from '../../components/OurStrategy';

import Slider from '../../components/Slider';
import { mainTitle } from '../../data/aboutUs';
import useTranslate from '../..../hooks/useTranslate';

import {AboutWrapper} from './style';

const AboutUs = () => {
    const {translateLocal} = useTranslate();
    return(
        <AboutWrapper className = 'AboutMain'>
            <Slider mainTitle = {translateLocal(mainTitle)} data = {{img: 'https://www.dropbox.com/s/yuyb0a0af8gwi0j/chair.jpg?raw=1', id: '1234'}} />
            <OurMission />
            <OurStrategy />
        </AboutWrapper>
    )
}

export default AboutUs;