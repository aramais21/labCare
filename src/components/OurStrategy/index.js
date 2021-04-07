import React from 'react';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';

const OurStrategy = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <Image maxWidth = {943} maxHeight = {630} width = '943px' height = '630px' mobileHeight = '200px' mobileWidth = '300px' src = 'https://www.dropbox.com/s/7iw79bi3piabf6m/our%20straegy1.jpeg?raw=1' />
                <TitleAndText textColor = {WHITE_HEX} title = 'our strategy' text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
            </RowFlexDiv>
        </Layout>
    );
}

export default OurStrategy;