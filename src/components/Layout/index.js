import React from 'react';
import styled from 'styled-components';

import './style.css';

const Layout = ({children, background}) => {
    return(
        <LayoutDiv background={background}>
            {children}
        </LayoutDiv>
    )
}

const LayoutDiv = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x:hidden;
    ${props => {
        if(props?.background === 'green') {
            return 'background-color: #1aa45d;';
        }
        else if (props.background === 'orange') {
            return 'background-color: #e57424';
        }
        return '';
    }}
`

export default Layout;