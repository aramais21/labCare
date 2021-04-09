import React, { memo } from 'react';
import { isEqual } from 'lodash';

import {Wrapper, Title, Text} from './style';

const TitleAndText = ({title, text, textColor}) => {
    return (
        <Wrapper>
            <Title textColor = {textColor} >{title}</Title>
            <Text textColor = {textColor} >{text}</Text>
        </Wrapper>
    );   
}

export default memo(TitleAndText, isEqual);