import React from 'react';

import {Image} from '../../styles'
import useTranslate from '../..../hooks/useTranslate';

import { data, pictures } from '../../data/activities';

import { ActivityWrapper, ActivityGridComponent, Title, Text, Line, ActivityColumn, ListItem, LinkDiv } from './style';
import { Link } from 'react-router-dom';
 
const Activities = () => {
    const {translateLocal} = useTranslate();

    const ActivityTextCont = ({info}) => (
        <ActivityGridComponent backgroundColor = {info.backgroundColor}>
            <Title color = {info.color} >
                    {translateLocal(info.title)}
                    <Line color = {info.color} ></Line>
            </Title>
            {info.desc.map((item) => {
                if (item.type === 'text') {
                    return <Text color = {info.color} >{translateLocal(item)}</Text>
                }
                else if (item.type === 'listItem') {
                    return <ListItem color = {info.color} >{translateLocal(item)}</ListItem>
                }
                else {
                    return <LinkDiv><Link to = {item.url}>{translateLocal(item.text)}</Link></LinkDiv>
                }
            })}
            <Text color = {info.color} >{translateLocal(info.desc)}</Text>
        </ActivityGridComponent>
    )

    const ActivityImg = ({url}) => (
        <ActivityGridComponent noPadding = {true} >
            <Image src = {url} noMargin={true} width = '100%' height = '50vh' mobileWidth = '100vw' mobileHeight = '50vh'></Image>
        </ActivityGridComponent>
    )

    return(
        <ActivityWrapper>
            <ActivityColumn>
                <ActivityTextCont info = {data.lab} />
                <ActivityImg url={pictures.lab} />
                <ActivityTextCont info = {data.yeast} />
                <ActivityImg url={pictures.yeast} />
            </ActivityColumn>
            <ActivityColumn>
                <ActivityImg url={pictures.mining} />
                <ActivityTextCont info = {data.mining} />
                <ActivityImg url={pictures.trainings} />
                <ActivityTextCont info = {data.trainings} />
            </ActivityColumn>
        </ActivityWrapper>
    )
}

export default Activities;