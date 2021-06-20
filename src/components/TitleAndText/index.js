import React, { memo } from 'react';
import { isEqual } from 'lodash';

import useTranslate from '../.../Hooks/useTranslate';

import {Wrapper, Title, Text, ListItem} from './style';

const TitleAndText = ({title, desc, textColor}) => {
    const {translateLocal} = useTranslate();
    return (
        <Wrapper>
            <Title textColor = {textColor} >{title}</Title>
            {desc.map((item) => {
                if(item.type === 'text') {
                    return <Text textColor={textColor} >{translateLocal(item)}</Text>
                }
                return <ListItem textColor={textColor} >{translateLocal(item)}</ListItem>
            })}
        </Wrapper>
    );   
}

export default memo(TitleAndText, isEqual);