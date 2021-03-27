import React from 'react';

import {Wrapper, Title, Text} from './style';

const TitleAndText = ({title, text, textColor}) => {
    return (
        <Wrapper>
            <Title textColor = {textColor} >{title}</Title>
            <Text textColor = {textColor} >{text}</Text>
        </Wrapper>
    );   
}

export default TitleAndText;