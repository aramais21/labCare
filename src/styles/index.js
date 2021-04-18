import styled from "styled-components";
import { smBreakingPoint, WHITE_HEX, GREEEN_HEX, CENTURY_GOTHIC_BOLD } from "../config/constants";
import { mediaMaxWidth, fontForSmallerScreen } from "../config/helpers";

export const RowFlexDiv = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-flow: row wrap;
    flex-grow: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    max-width: ${props => props.maxWidth}px;
    max-height: ${props => props.maxHeight}px;
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.noBackground?'none':WHITE_HEX};
    min-width: ${props => props.minWidth}px;
    min-height: ${props => props.minHeight}px;
    width: ${props => props.width? props.width:'100%'};
    height: ${props => props.height? props.height:'100%'};
    ${props => !props.noMargin?'margin: 33.5px 0;':''}
    ${props => mediaMaxWidth(smBreakingPoint, `
        max-width: ${props.mobileWidth};
        max-height: ${props.mobileHeight};
    `)}
`;

export const Input = styled.input.attrs((props) => ({type: props.text?props.text:'text'}))`
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    padding: 8px 4px;
    font-size: 16px;
    margin: 8px 0;
    min-width: 300px;
    outline: none;
    ${fontForSmallerScreen(16)};
`;
