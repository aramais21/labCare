import React from 'react';

import Layout from '../Layout';
import SectionDevider from '../SectionDeviderText'

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';


import { ActivityList, ActivityCardWrapper, ActivityIconCont, ActivityIcon, ActivityCardTitle, ActivityCardText, ActivityCardButton } from './style.js';
import { Link } from 'react-router-dom';

const OurActivites = () => {
    const data = [
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: '',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: '',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: '',
            title: 'Activity #1'
        },
        {
            text: 'jasndas k ak sdkaj dsks k djk vak dvka vk ka kjv kaj vkj askd vkj k dka vk avkkmokfnkj  fdk k dk k k jdk sj k kj ashjdbvasj  ashd auhjs aj chas dhdjs jh hj hj dssdjh jsajh djhs asd SA DH SA GH H hb b nb ab nbd suiiuub hjhj j s',
            buttonLabel: 'more',
            icon: '',
            title: 'Activity #1'
        },    
    ]
    return (
        <Layout background = 'green' >
            <SectionDevider text = 'Our Activites' secondaryText = 'text text text text text' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} />
            <ActivityList>
                {data.map(({text, buttonLabel, icon, title}) => {
                    return (
                        <ActivityCardWrapper>
                            <ActivityIconCont><ActivityIcon src = {icon} alt = 'icon' /></ActivityIconCont>
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