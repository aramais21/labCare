import React from 'react';

import {LayoutDiv} from './style.js';

const Layout = ({children, background, fixedHeight, justifyContent, marginTop}) => {
    return(
        <LayoutDiv background={background} fixedHeight = {fixedHeight} justifyContent = {justifyContent} marginTop = {marginTop}>
            {children}
        </LayoutDiv>
    )
}

export default Layout;