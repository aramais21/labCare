import React from 'react';

import { RowFlexDiv, Image } from '../../styles';
import Layout from '../Layout';

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import TitleAndText from '../TitleAndText';

const OurStrategy = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                <Image maxWidth = {943} maxHeight = {630} width = '943px' height = '630px' mobileHeight = '200px' mobileWidth = '300px' src = 'https://previews.dropbox.com/p/thumb/ABEkmDLXPCYd-jp2Npy7UBJ03kYU6UsKl9pfNrTkDH5utaFvWfcFHyqu5iBZpTEycC3toD9Geb42OGbNsdC51nLgd4ao6_DiICjcDmfK7etwHPZAMiEN1iYBR1Cepo6RH2f8ehrGMwJNvu2PTQZpZkjRsi47Cbc6qUDA8N2-1wjDSoFPIGpV6KW_NwdOclkMgZyByBv1O58KI1s04kqyTo_Gp7-4FUx9NOCvbmRz9irrH2miRsxAxl3Zf4JKQyjhcMUTQd_qrvmMp6iZjPOFOXtq67XpAT7ZxtDXiisKdRo3-G4kzRMHk9Vk5jMLj_93mm_OZsQCPrkDFPRj9oY6y28qhztpRLX-OCYD4e6byIfyKA/p.jpeg?fv_content=true&size_mode=5' />
                <TitleAndText textColor = {WHITE_HEX} title = 'our strategy' text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
            </RowFlexDiv>
        </Layout>
    );
}

export default OurStrategy;