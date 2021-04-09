import React, { memo } from 'react';
import { isEqual } from 'lodash';

// Css
import {Wrapper, InnerCont, MainText, Devider, SecondaryText} from './style.js';

const SectionDevider = ({text, backgroundColor, textColor, secondaryText, noMarginBottom}) => {
    return (
        <Wrapper backgroundColor = {backgroundColor} noMarginBottom = {noMarginBottom} >
            <InnerCont>
                <MainText backgroundColor = {backgroundColor} color = {textColor} > {text} </MainText>
                <Devider backgroundColor = {textColor}></Devider>
            </InnerCont>
            {secondaryText?
                <SecondaryText color = {textColor} >{secondaryText}</SecondaryText>
            :
                null}
        </Wrapper>
    )
}

export default memo(SectionDevider, isEqual);
