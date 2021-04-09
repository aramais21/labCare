import React from 'react';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';
import { data } from './data';

const OurStrategy = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <Image maxWidth = {943} maxHeight = {630} width = '943px' height = '630px' mobileHeight = '200px' mobileWidth = '300px' src = {data.img} />
                <TitleAndText textColor = {WHITE_HEX} title = {data.title} text = {data.text} />
            </RowFlexDiv>
        </Layout>
    );
}

export default OurStrategy;