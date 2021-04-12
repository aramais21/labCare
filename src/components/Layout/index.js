import React, { memo } from 'react';
import {isEqual} from 'lodash';

import {LayoutDiv} from './style.js';

const Layout = ({children, background, fixedHeight, justifyContent, marginTop, noAlign}) => {
    return(
        <LayoutDiv background={background} fixedHeight = {fixedHeight} justifyContent = {justifyContent} marginTop = {marginTop} noAlign = {noAlign}>
            {children}
        </LayoutDiv>
    )
}

export default memo(Layout, isEqual);