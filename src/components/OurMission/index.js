import React from 'react';

import useTranslate from '../..../hooks/useTranslate';
import { ourMission } from '../../data/aboutUs';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';


const OurMission = () => {
    const {translateLocal} = useTranslate();
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <TitleAndText desc={ourMission.desc} title={translateLocal(ourMission.title)} textColor={WHITE_HEX} ></TitleAndText>
                <Image maxWidth = {668} maxHeight = {755} width = '668px' height = '755px' mobileWidth = '300px' mobileHeight = '330px' src = {ourMission.img} ></Image>
            </RowFlexDiv>
        </Layout>
    );
}

export default OurMission;