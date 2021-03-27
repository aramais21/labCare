import React from 'react';

import {LayoutDiv} from './style.js';

const Layout = ({children, background, fixedHeight}) => {
    return(
        <LayoutDiv background={background} fixedHeight = {fixedHeight}>
            {children}
        </LayoutDiv>
    )
}

export default Layout;