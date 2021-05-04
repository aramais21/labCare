import styled from 'styled-components';
import { CENTURY_GOTHIC, MYRIAD_PRO, smBreakingPoint } from '../../config/constants';
import { fontForSmallerScreen, mediaMaxWidth } from '../../config/helpers';

export const ActivityWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh 50vh 50vh 50vh 50vh 50vh;
    margin-top: 5.626rem;
    ${mediaMaxWidth(smBreakingPoint,`
        grid-template-columns: 100%;
        grid-template-rows: 50vh 100vh 50vh 100vh 50vh 100vh 50vh 100vh;
    `)}
`;

export const ActivityGridComponent = styled.div`
    grid-column: ${props => props.startWidth} / ${props => props.endWidth};
    grid-row:  ${props => props.startHeight} / ${props => props.endHeight};
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding}px;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => mediaMaxWidth(smBreakingPoint, `
        grid-column: ${props.mobileStartWidth} / ${props.mobileEndWidth};
        grid-row:  ${props.mobileStartHeight} / ${props.mobileEndHeight};
        padding: ${props.padding/2}px;
        overflow: hidden;
    `)}
    
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-family: ${MYRIAD_PRO};
    font-size: 30px;
    line-height: 1.2;
    text-align-last: center;
    ${fontForSmallerScreen(30)}
    @media (max-width: 414px){
        font-size: 17px;
    }
`;

export const Title = styled.div`
    color: ${props => props.color};
    font-weight: bold;
    font-family: ${CENTURY_GOTHIC};
    font-size: 36px;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 51px;
    position: relative;
    ${fontForSmallerScreen(36)}
`;

export const Line = styled.div`
    width: 110%;
    position: absolute;
    background-color: ${props => props.color};
    height: 2px;
    left: -5%;
    bottom: -12px;
    margin: auto;
`;