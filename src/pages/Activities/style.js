import styled from 'styled-components';
import { CENTURY_GOTHIC, mdBreakingPoint, MYRIAD_PRO } from '../../config/constants';
import { fontForSmallerScreen, mediaMaxWidth } from '../../config/helpers';

export const ActivityWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5.626rem;
    flex-flow: row wrap;
    
`;

export const ActivityColumn = styled.div`
    width: 50%;
    min-width: 300px;
    ${mediaMaxWidth(mdBreakingPoint, `
        width: 100%;
    `)}
`;

export const ActivityGridComponent = styled.div`
    background-color: ${props => props.backgroundColor};
    ${props => props.noPadding?'':'padding: 71px;'}
    display: flex;
    flex-flow: column nowrap;
    ${props => props.noPadding?'':mediaMaxWidth(mdBreakingPoint, `
        padding: 35.5px 0px;
    `)}
    
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-family: ${MYRIAD_PRO};
    font-size: 26px;
    line-height: 1.2;
    text-indent: 40px;
    ${fontForSmallerScreen(26)}
`;

export const ListItem = styled.li`
    color: ${props => props.color};
    font-family: ${MYRIAD_PRO};
    font-size: 26px;
    line-height: 1.2;
    ${fontForSmallerScreen(26)}
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