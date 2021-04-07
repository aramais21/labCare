import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import SectionDevider from '../SectionDeviderText'

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';

import {Image} from '../../styles';
import { ActivityList, ActivityCardWrapper, ActivityIconCont, ActivityCardTitle, ActivityCardText, ActivityCardButton } from './style.js';

const OurActivites = () => {
    const data = [
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: 'https://www.dropbox.com/s/qatmttp502foppi/coaching.png?raw=1',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: 'https://www.dropbox.com/s/7zrioeqq3o6rq9n/labor-man.png?raw=1',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: 'https://www.dropbox.com/s/ktbv0qhuv2k1bgz/microscope%20%281%29.png?raw=1',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: 'https://www.dropbox.com/s/di2mkafshc779h1/wine.png?raw=1',
            title: 'Activity #1'
        },    
    ]
    return (
        <Layout background = {GREEEN_HEX} >
            <SectionDevider text = 'Our Activites' secondaryText = 'text text text text text' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} />
            <ActivityList>
                {data.map(({text, buttonLabel, icon, title}) => {
                    return (
                        <ActivityCardWrapper>
                            <ActivityIconCont><Image src = {icon} alt = 'icon' width = '60%' height = '60%' noBackground = {true} ></Image></ActivityIconCont>
                            <ActivityCardTitle>{title}</ActivityCardTitle>
                            <ActivityCardText>{text}</ActivityCardText>
                            <Link to = '/activities' > <ActivityCardButton>{buttonLabel}</ActivityCardButton> </Link>
                        </ActivityCardWrapper>
                    );
                })}
            </ActivityList>
        </Layout>
    )
}

export default OurActivites;