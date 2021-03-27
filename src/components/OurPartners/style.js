import styled from 'styled-components';
import { BLACK_HEX, CENTURY_GOTHIC_BOLD, WHITE_HEX } from '../../config/constants';

export const PartnerWrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    position: relative;
`;

export const ArrowWrapper = styled.div`
    padding: ${props => props.direction==='left'?'0 50px 0 0':'0 0 0 50px'} ;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Arrow = styled.div`
    width: 45px;
    height: 45px;
    border-bottom:3px solid ${WHITE_HEX};
    border-left: 3px solid ${WHITE_HEX};
    transform: translate(${props => props.direction==='left'?'':'-'}50%, 0) rotate(${props => props.direction==='left'?'45':'-135'}deg);
`;

export const PartnerInner = styled.div`
    width: 80%;
    position: relative;
    overflow: hidden;
    height: 196px;
    flex-grow: 1;
`;

export const PartnerList = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 0;
    left: -${props => props.itemIndex * (196 + 84)}px;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: 0.2s linear all;
`;

export const Partner = styled.div`
    min-width: 196px;
    min-height: 196px;
    background-color: ${WHITE_HEX};
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
    margin: 0 42px;
    position: relative;
`;

export const PartnerLogo = styled.div`
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
    opacity: 1;
    transition: 0.2s linear all;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
    font-size: 32px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${BLACK_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
`;