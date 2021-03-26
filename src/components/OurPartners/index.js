import React, { useEffect, useReducer, useState } from 'react';

import { GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import Layout from "../Layout"
import SectionDevider from '../SectionDeviderText';

import {PartnerWrapper, Arrow, Partner, PartnerLogo, PartnerHover, PartnerList, PartnerInner} from './style'

const OurPartners = () => {
    const [data, setData] = useState([
        {
            id: 0,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo0'
        },
        {
            id: 1,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo1'
        },
        {
            id: 2,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo2'
        },
        {
            id: 3,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo3'
        },
        {
            id: 4,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo4'
        },
        {
            id: 5,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo5'
        },
        {
            id: 6,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo6'
        },
        {
            id: 7,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            name: 'logo7'
        },
    ]);

    const [activeIndex, dispatchActiveIndex] = useReducer((state, action) => {

        if(action.direction==='right') {
            if(state+5<data.length-1) {
                return ++state;
            }
            else {
                const first = data.slice(0,state);
                const rest = data.slice(state, data.length);
                const newArr = [...rest, ...first];
                console.log(first);
                setData(newArr);
                return 0;
            }
        }
        else {
            if(state>0){
                return --state;
            }
            else {
                const last = data.slice(-1);
                const rest = data.slice(0,-1);
                const newArr = [...last, ...rest]
                console.log(newArr)
                setData(newArr);
                return state;
            }
        }
    },0);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatchActiveIndex({direction: 'right'});
        },1000);
         
        return () => clearInterval(interval);
    },[dispatchActiveIndex])

    return (
        <Layout background={GREEEN_HEX}>
            <SectionDevider text='Our Partners' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} ></SectionDevider>
            <PartnerWrapper>
                <Arrow direction = 'left' onClick = {() => dispatchActiveIndex({direction: 'left'})} ></Arrow>
                <PartnerInner>
                    <PartnerList itemIndex={activeIndex}>
                        {data.map(({id, url, logo, name}) => {
                            return (
                                <Partner key = {id} href = {url} target = '_blank' rel="noopener noreferrer">
                                    <PartnerLogo src={logo} alt = {name}/>
                                    <PartnerHover>{name}</PartnerHover>
                                </Partner>
                            );
                        })}
                    </PartnerList>
                </PartnerInner>
                <Arrow direction = 'right' onClick = {() => dispatchActiveIndex({direction: 'right'})} ></Arrow>
            </PartnerWrapper>
        </Layout>
    );
}

export default OurPartners;