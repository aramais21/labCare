import React from 'react';

import SectionDevider from '../../components/SectionDeviderText';
import Layout from '../../components/Layout';
import useTranslate from '../../hooks/useTranslate';

import { RowFlexDiv, Image } from '../../styles';
import { ContactSecondText ,ContactMainText ,ContactInfo ,ContactIcon ,ContactCont ,ContactWrapper, LeftCont, RightCont} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import { data, iframeUrl, title } from '../../data/contacts';


const Contacts = () => {
    const {translateLocal} = useTranslate();
    return (
        <ContactWrapper>
            <Layout background = {WHITE_HEX} >
                <SectionDevider text = {translateLocal(title)} backgroundColor = {WHITE_HEX} textColor = {GREEEN_HEX} noMarginBottom = {true} ></SectionDevider>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    <LeftCont>
                        <iframe 
                            title="map"
                            src={iframeUrl} 
                            width="450" 
                            height="450" 
                            style={{
                                border: 0,
                            }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </LeftCont>
                    <RightCont>
                        {data.map(({src, title, secondary}) => {
                            return(
                                <ContactCont key = {title+secondary}>
                                    <ContactIcon><Image noBackground = {true} width='80px' height='80px' src = {src} ></Image></ContactIcon>
                                    <ContactInfo>
                                        <ContactMainText>{translateLocal(title)}</ContactMainText>
                                        <ContactSecondText>{secondary}</ContactSecondText>
                                    </ContactInfo>
                                </ContactCont>
                            )
                        })}
                        
                    </RightCont>
                </RowFlexDiv>
            </Layout>
        </ContactWrapper>
    )
}

export default Contacts;