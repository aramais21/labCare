import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, MYRIAD_PRO, smBreakingPoint, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen, mediaMaxWidth } from "../../config/helpers";

export const ProductWrapper = styled.div`
    ${mediaMaxWidth(smBreakingPoint,`
        margin-top: 5.625rem;
    `)}
`

export const RightCont = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-width: 60%;
    justify-content: flex-start;
    height: 100%;
    margin-top: 64px;
    ${mediaMaxWidth(smBreakingPoint, `
        width: 320px;
        max-width: 320px;
    `)}
`;

export const MainText = styled.div`
    color: ${WHITE_HEX};
    margin-bottom: px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    font-size: 36px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-left: 63px
    ${fontForSmallerScreen(36)}
    ${mediaMaxWidth(smBreakingPoint, `
        margin-bottom: 32px;
    `)}
`;

export const SecondaryText = styled.div`
    color: ${WHITE_HEX};
    font-family: ${MYRIAD_PRO};
    font-size: 28px;
    line-height: 1.2;
    text-align: left;
    ${fontForSmallerScreen(28)}
    ${mediaMaxWidth(smBreakingPoint, `
        margin-bottom: 64px;
    `)}
`;

export const Link = styled.a`
    font-family: ${MYRIAD_PRO};
    font-size: 16px;
    line-height: 1.2;
    margin: 12px 0;
    color: blue;
`;