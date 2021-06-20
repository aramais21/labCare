import React from 'react';

import SectionDevider from '../../components/SectionDeviderText';
import Layout from '../../components/Layout';
import useTranslate from '../..../hooks/useTranslate';

import { RowFlexDiv, Image } from '../../styles';
import { ContactSecondText ,ContactMainText ,ContactInfo ,ContactIcon ,ContactCont ,ContactWrapper, LeftCont, RightCont, Rounded} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import { data, title } from '../../data/contacts';


const Contacts = () => {
    const {translateLocal} = useTranslate();
    return (
        <ContactWrapper>
            <Layout background = {WHITE_HEX} >
                <SectionDevider text = {translateLocal(title)} backgroundColor = {WHITE_HEX} textColor = {GREEEN_HEX} noMarginBottom = {true} ></SectionDevider>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    <LeftCont>
                        <Rounded>
                            <Image noMargin={true} src='https://www.dropbox.com/s/q0em0dzyw619v61/yerevan.jpeg?raw=1' width='450px' height='337px' mobileWidth = '300px' mobileHeight='225px'></Image>
                        </Rounded>
                    </LeftCont>
                    <RightCont>
                        {data.map(({src, title, secondary}) => {
                            return(
                                <ContactCont key = {title+secondary}>
                                    <ContactIcon><Image noBackground = {true} width='80px' height='80px' src = {src} ></Image></ContactIcon>
                                    <ContactInfo>
                                        <ContactMainText>{translateLocal(title)}</ContactMainText>
                                        <ContactSecondText>{typeof secondary === 'object'?translateLocal(secondary):secondary}</ContactSecondText>
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