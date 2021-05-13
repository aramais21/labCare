import styled from 'styled-components';
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import { fontForSmallerScreen } from '../../config/helpers';

export const Partner = styled.a`
    width: 196px !important;
    height: 196px;
    background-color: ${WHITE_HEX};
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
    position: relative;
    cursor: pointer;
`;

export const PartnerLogo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 80%;
    z-index: 1;
`;

export const PartnerHover = styled.div`
    position: absolute;
    opacity: 0;
    transition: 0.2s linear all;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color: ${WHITE_HEX};
    font-size: 32px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    z-index:2;
    ${fontForSmallerScreen(32)}
    ${Partner}:hover & {
        opacity: 0.6;
    }
`;