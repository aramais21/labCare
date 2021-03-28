import styled from "styled-components";
import { WHITE_HEX } from "../config/constants";

export const RowFlexDiv = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-flow: row wrap;
    flex-grow: 1;
`;

export const Image = styled.div`
    max-width: ${props => props.maxWidth}px;
    max-height: ${props => props.maxHeight}px;
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${WHITE_HEX};
    min-width: ${props => props.minWidth}px;
    min-height: ${props => props.minHeight}px;
    width: 100%;
    height: 100%;
    ${props => !props.noMargin?'margin: 33.5px 0;':''}
`;