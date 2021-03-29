import styled from "styled-components";

import { CENTURY_GOTHIC_BOLD, GREEEN_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`
export const SliderTextCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    color: ${GREEEN_HEX};
    height: min-content;
`;

export const SliderText = styled.div`
    font-size: 85px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    ${fontForSmallerScreen(85)}
`;

export const SliderParagraph = styled.div`
    font-size: 36px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    text-align: center;
    ${fontForSmallerScreen(36)}
`;