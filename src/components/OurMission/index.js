import React from 'react';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';
import { data } from './data';

const OurMission = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <TitleAndText text={data.text} title={data.title} textColor={WHITE_HEX} ></TitleAndText>
                <Image maxWidth = {668} maxHeight = {755} width = '668px' height = '755px' mobileWidth = '300px' mobileHeight = '330px' src = {data.img} ></Image>
            </RowFlexDiv>
        </Layout>
    );
}

export default OurMission;