import React from 'react';

import {LayoutDiv} from './style.js';

const Layout = ({children, background}) => {
    return(
        <LayoutDiv background={background}>
            {children}
        </LayoutDiv>
    )
}

export default Layout;