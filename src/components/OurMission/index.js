import React from 'react';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';

const OurMission = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <TitleAndText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" title='our mission' textColor={WHITE_HEX} ></TitleAndText>
                <Image maxWidth = {668} maxHeight = {755} width = '668px' height = '755px' mobileWidth = '300px' mobileHeight = '330px' src = 'https://www.dropbox.com/s/7b37b8l6uu2ttc7/our%20mission6.jpg?raw=1' ></Image>
            </RowFlexDiv>
        </Layout>
    );
}

export default OurMission;