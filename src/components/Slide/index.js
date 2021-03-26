import React from 'react';
import styled from 'styled-components';
import { WHITE_HEX } from '../../config/constants';

import './style.css';

const Slide = ({img}) => {
    return ( 
        <BackgroundImage src = {img} />
    );
}

const BackgroundImage = styled.div`
    width: 100vw;
    height: 100%;
    background-image: url(${props => props.src});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${WHITE_HEX}
`;

export default Slide;