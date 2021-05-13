import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { partnersTitle } from '../../data/home';
import useTranslate from '../../Hooks/useTranslate';
import { fecthPartners, selectPartners, selectPartnerStatus } from '../../redux/slices/partners';
import Layout from "../Layout"
import SectionDevider from '../SectionDeviderText';

import {Partner, PartnerLogo, PartnerHover} from './style'

const OurPartners = () => {
    const dispatch = useDispatch();
    const partners = useSelector(selectPartners);
    const status = useSelector(selectPartnerStatus);
    const {translateLocal} = useTranslate();

    useEffect(() => {
        const asyncFunc = async () => {
            if(status === 'idle') {
                dispatch(fecthPartners());
                return;
            }
        }
        asyncFunc();
    },[ dispatch, partners, status]);

    return (
        <Layout background={GREEEN_HEX} noAlign = {true} fixedHeight = {600}  >
            <SectionDevider text={translateLocal(partnersTitle)} textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} noMarginBottom={true}></SectionDevider>
            <Slider 
                infinite = {true} 
                speed = {500} 
                slidesToShow = {6} 
                arrows = {false} 
                dots = {false}
                autoplaySpeed = {2000} 
                autoplay = {true} 
                centerMode = {true} 
                slidesToScroll = {1}
                responsive = {[
                    {
                        breakpoint: 1328,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 1120,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]}
            >
            {partners.map(({_id, url, logo, name}) => {
                console.log(_id,'printed')
                return (
                    <Partner key = {_id} href = {url} target = '_blank' rel="noopener noreferrer">
                        <PartnerLogo src={logo} alt = {name}/>
                        <PartnerHover>{name}</PartnerHover>
                    </Partner>
                );
            })}
            </Slider>
        </Layout>
    );
}

export default OurPartners;