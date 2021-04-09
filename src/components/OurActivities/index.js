import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import SectionDevider from '../SectionDeviderText'

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';

import {data} from './data';

import {Image} from '../../styles';
import { ActivityList, ActivityCardWrapper, ActivityIconCont, ActivityCardTitle, ActivityCardText, ActivityCardButton } from './style.js';

const OurActivites = () => {
    
    return (
        <Layout background = {GREEEN_HEX} >
            <SectionDevider text = 'Our Activites' secondaryText = 'text text text text text' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} />
            <ActivityList>
                {data.map(({text, buttonLabel, icon, title}) => {
                    return (
                        <ActivityCardWrapper key = {title} >
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