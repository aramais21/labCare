import React from 'react';

import {Image} from '../../styles'
import useTranslate from '../../hooks/useTranslate';

import { data, pictures } from '../../data/activities';

import { ActivityWrapper, ActivityGridComponent, Title, Text, Line } from './style';
 
const Activities = () => {
    const {translateLocal} = useTranslate();

    return(
        <ActivityWrapper>
            {data.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        padding = {71}
                        startHeight = {index<=1?index+1:index+2} 
                        endHeight = {index<=1?index+3:index+4}  
                        backgroundColor = {item.backgroundColor} 
                        startWidth = {index%2?1:2} 
                        endWidth = {index%2?2:3}
                        mobileStartHeight = {(index+1)*2}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2+1}
                        mobileEndWidth = {2} 
                    >
                        <Title color = {item.color} >
                            {translateLocal(item.title)}
                            <Line color = {item.color} ></Line>
                        </Title>
                        <Text color = {item.color} >{ translateLocal(item.desc)}</Text>
                    </ActivityGridComponent>
                );
            })}
            {pictures.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        startHeight = {index<=1?index%2?index+2:index+1:index%2?index+3:index+2} 
                        endHeight = {index<=1?index%2?index+3:index+2:index%2?index+4:index+3}  
                        startWidth = {index%2?2:1} 
                        endWidth = {index%2?3:2}
                        mobileStartHeight = {index*2+1}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2}
                        mobileEndWidth = {2}
                    >
                        <Image src = {item.src} noMargin = {true} maxWidth = '50vw ' maxHeight = '50vh' mobileWidth = '100vw' mobileHeight = '50vh' />
                    </ActivityGridComponent>
                )
            })}
        </ActivityWrapper>
    )
}

export default Activities;