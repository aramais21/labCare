import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${WHITE_HEX};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
`;

export const TextCont = styled.div`
    color: ${GREEEN_HEX};
    font-size: 24px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    text-align: center;
    ${fontForSmallerScreen(24)}
`;
