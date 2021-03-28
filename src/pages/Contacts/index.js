import React from 'react';

import SectionDevider from '../../components/SectionDeviderText';
import Layout from '../../components/Layout';

import { RowFlexDiv, Image } from '../../styles';
import { ContactSecondText ,ContactMainText ,ContactInfo ,ContactIcon ,ContactCont ,ContactWrapper, LeftCont, RightCont} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';


const Contacts = () => {
    const data = [
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://previews.dropbox.com/p/thumb/ABGXRswuNxqhXX4diJnrMt46JLJO1v7GGkwdaqa4q41n4123VuaDC9KSkvwjvYS0ffzZvlE7Q8nv_OUdROAJmnLSb_QTz3axr_bCV_Ly2oRxd5tmkEH0lvChPOMDrEHVpjKveVY_2UYMNQf5zkALBTZUh65ejt-hPr-TFaZGrtk3Uk1jjJH6R5bDQ5XeZjkHSN2MvFtGw2igsiWmRlJ3QLOkw26LenqClqihtMF3EeifACwNV3YP6P4L4-UcWG6faxi5TdtCrnr2RB1bCu8awShNEa6P-ut84EQNY9U8A2LeM_BJSYkAu5D--re5oG-v2rNzaX8t62g8_0HrEn8_dcZD921mfAMetReWCQSymdsEVw/p.png?fv_content=true&size_mode=5',
        },
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://previews.dropbox.com/p/thumb/ABGgBXeBqXatjyMwIpkJLeT8wDHoeOq7HuP2jE2D3ZoljdeZqCJl9fUqJ0_sMTQrf4tvKFbXZscyt_TofUWsPiFlfO0k_DWscdyBVTnWvPgGg1nhljC_eloulTzWYe97sfEQqbA2gGou_bA29WfwfHMLPE0Iq1DQqAVs_cTHBrtc__3im3E8JPxrFtNGviaYPJ7B1wUZK_XETDH060Q4yByqCBvIgWeBu8KMs-yem7thoKJugMzrNa7iVrw-vdX8wCrZA01JYWhUV-KeIVizkP7eTrOIy2ZHXBVmxdFPyaVI2nDVJO084UoHdGs34xSjP5bmVkuHj6Tujtz7gFJnfOw_vZGcr7HlKagVIFxYgGHEkg/p.png?fv_content=true&size_mode=5',
        },
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://previews.dropbox.com/p/thumb/ABGxK9BU4OnzpKpV2xPhbpSUcgzRk_notliau0JiOJAYI3fW3nKGie5J8GAHlt7noLDXFgwg55697eJ_ByXuWAmmTGQFl9YGGl_Bg7RThF5T8ecq-s-VXMh5pPPwE6IK4EjMxd1ZyEttoQN6r9JpzGwALLq_IeAedNIaJy4LiKfdPsTp0YV1JWjdpIDNRLSjJbv2kLEFT7IWZzbprB1SmKDfMh9JAzhyMabIfc41GvhG0PmEpBywuzX_VKJ45qCG2aJ-esWcaxESX7JGjx-o8gio_aC1y59gzQQvGB9dFxIhlUHtu97KHipn7xVYV84dV6V1K1PIdM-R6PnzvwZPG0wLtPl-hn8U7t25b22idCfYSQ/p.png?fv_content=true&size_mode=5',
        },
    ]
    return (
        <ContactWrapper>
            <Layout background = {WHITE_HEX} >
                <SectionDevider text = 'our locations' backgroundColor = {WHITE_HEX} textColor = {GREEEN_HEX} noMarginBottom = {true} ></SectionDevider>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    <LeftCont>
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24384.604513130744!2d45.71711527464609!3d40.18513176709114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f95ede87e6fbb%3A0xeef8e625dfa98442!2sVardenis%2C%20Armenia!5e0!3m2!1sen!2s!4v1616959419059!5m2!1sen!2s" 
                            width="450" 
                            height="450" 
                            style={{
                                border: 0,
                            }} 
                            allowfullscreen="" 
                            loading="lazy"
                        ></iframe>
                    </LeftCont>
                    <RightCont>
                        {data.map(({src, title, secondary}) => {
                            return(
                                <ContactCont key = {title+secondary}>
                                    <ContactIcon><Image noBackground = {true} width='80px' height='80px' src = {src} ></Image></ContactIcon>
                                    <ContactInfo>
                                        <ContactMainText>{title}</ContactMainText>
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