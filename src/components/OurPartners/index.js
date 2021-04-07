import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { fecthPartners, selectPartners, selectPartnerStatus } from '../../redux/slices/partners';
import Layout from "../Layout"
import SectionDevider from '../SectionDeviderText';

import {PartnerWrapper, Arrow, Partner, PartnerLogo, PartnerHover, PartnerList, PartnerInner, ArrowWrapper} from './style'

const OurPartners = () => {
    const dispatch = useDispatch();
    const partners = useSelector(selectPartners);
    const status = useSelector(selectPartnerStatus);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fecthPartners());
            return
        }
    })

    return (
        <Layout background={GREEEN_HEX} fixedHeight  = {863}>
            <SectionDevider text='Our Partners' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} noMarginBottom={true}></SectionDevider>
            <PartnerWrapper>
                <ArrowWrapper direction = 'left'>
                    <Arrow direction = 'left' /*onClick = {() => dispatchActiveIndex({direction: 'left'})}*/ ></Arrow>
                </ArrowWrapper>
                <PartnerInner>
                    <PartnerList itemIndex={0}>
                        {partners.map(({id, url, logo, name}) => {
                            return (
                                <Partner key = {id} href = {url} target = '_blank' rel="noopener noreferrer">
                                    <PartnerLogo src={logo} alt = {name}/>
                                    <PartnerHover>{name}</PartnerHover>
                                </Partner>
                            );
                        })}
                    </PartnerList>
                </PartnerInner>
                <ArrowWrapper direction = 'right' >
                    <Arrow direction = 'right' /*onClick = {() => dispatchActiveIndex({direction: 'right'})}*/ ></Arrow>
                </ArrowWrapper>
            </PartnerWrapper>
        </Layout>
    );
}

export default OurPartners;