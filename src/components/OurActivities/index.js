import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import SectionDevider from '../SectionDeviderText'
import useTranslate from '../.../Hooks/useTranslate';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import {data} from '../../data/activities';

import {Image} from '../../styles';
import { ActivityList, ActivityCardWrapper, ActivityIconCont, ActivityCardTitle, ActivityCardText, ActivityCardButton } from './style.js';
import { buttonLabels } from '../../data';
import { activitiesTitle } from '../../data/home';

const OurActivites = () => {

    const {translateLocal} = useTranslate();
    
    return (
        <Layout background = {GREEEN_HEX} >
            <SectionDevider text = {translateLocal(activitiesTitle)} textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} />
            <ActivityList>
                {Object.keys(data).map((key) => {
                    return (
                        <ActivityCardWrapper key = {data[key].title.ENG} >
                            <ActivityIconCont><Image src = {data[key].icon} alt = 'icon' width = '60%' height = '60%' noBackground = {true} ></Image></ActivityIconCont>
                            <ActivityCardTitle>{translateLocal(data[key].title)}</ActivityCardTitle>
                            <ActivityCardText>{translateLocal(data[key].minDesc)}</ActivityCardText>
                            <Link to = '/activities' > <ActivityCardButton>{translateLocal(buttonLabels.more)}</ActivityCardButton> </Link>
                        </ActivityCardWrapper>
                    );
                })}
            </ActivityList>
        </Layout>
    )
}

export default OurActivites;