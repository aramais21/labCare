import React from 'react';

import useTranslate from '../../Hooks/useTranslate';
import { ourStrategy } from '../../data/aboutUs';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';

const OurStrategy = () => {
    const {translateLocal} = useTranslate();
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <Image maxWidth = {943} maxHeight = {630} width = '943px' height = '630px' mobileHeight = '200px' mobileWidth = '300px' src = {ourStrategy.img} />
                <TitleAndText textColor = {WHITE_HEX} title = {translateLocal(ourStrategy.title)} desc = {ourStrategy.desc} />
            </RowFlexDiv>
        </Layout>
    );
}

export default OurStrategy;