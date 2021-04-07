import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const OuterCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    color: ${WHITE_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    position: relative;
`;

export const LogInText = styled.div`
    font-size: 36px;
    margin-bottom: 32px;
    ${fontForSmallerScreen(36)}
`;

export const Input = styled.input`
    margin-bottom: 16px;
    padding: 4px 8px;
    font-size: 24px;
    max-width: 300px;
    outline: none;
    color: ${GREEEN_HEX};
    ${fontForSmallerScreen(24)}
`;

export const Button = styled.div`
    font-size: 20px;
    padding: 4px 8px;
    outline: none;
    cursor: pointer;
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    ${fontForSmallerScreen(20)}
`;

export const LayOver = styled.div`
    position: fixed;
    bottom: ${props => props.isLoading?'0':'-100%'};
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    color: ${WHITE_HEX};
    font-size: 36px;
    font-weight: bold;
    transition: 0.2s linear all;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 10000;
    ${fontForSmallerScreen(36)}
`;