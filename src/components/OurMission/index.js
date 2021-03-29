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
                <Image maxWidth = {668} maxHeight = {755} width = '668px' height = '755px' mobileWidth = '300px' mobileHeight = '330px' src = 'https://previews.dropbox.com/p/thumb/ABFaumlKT73J9Xy7LYzPWdqxvEFYfUF_fnZrXFUsmYmW_0o5ujuVEX4s5X0zExpW_Fb8ajoEnFmi5ZoerkJ2_sIbvdp6T3NEbIXG63iDLhxsGBl9SoacRf4SMgF-s7YpdNq7dMF9bQ4HLgXPpO-Y6dzPGIOScgsJn_ZHQx4xyy-w-Fc7jdzNY49CM72sfR1nf1Ae7VJx5YxTdxWoMic2XyRnD0W9Z4Hc0gjlxXmBf6wZ8JnP6VOwSODe3MgQDBpLdTlnLiJywrZj0RMkE3IF5jw4O3lzhCeqdw_VWubHJnywBGcZcBkwNTKjTpM8lsowQFKxKX5V-QeX_ahzPqu4u2ol4EDz6dUrQTg0tfZMJDa4_A/p.jpeg?fv_content=true&size_mode=5' ></Image>
            </RowFlexDiv>
        </Layout>
    );
}

export default OurMission;