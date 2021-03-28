import styled from 'styled-components';
import { CENTURY_GOTHIC, MYRIAD_PRO, WHITE_HEX } from '../../config/constants';

export const ActivityWrapper = styled.div`
    width: 100%;
    height: 300vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh 50vh 50vh 50vh 50vh 50vh;
    margin-top: 5.626rem;
`;

export const ActivityGridComponent = styled.div`
    grid-column: ${props => props.startWidth} / ${props => props.endWidth};
    grid-row:  ${props => props.startHeight} / ${props => props.endHeight};
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    display: flex;
    align-items: center;
    flex-flow: column nowrap
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-family: ${MYRIAD_PRO};
    font-size: 30px;
    line-height: 1.2;
    text-align: justify;
    text-align-last: center;
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