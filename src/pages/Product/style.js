import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, MYRIAD_PRO, WHITE_HEX } from "../../config/constants";

export const RightCont = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-width: 60%;
    justify-content: flex-start;
    height: 100%;
    margin-top: 64px;
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
`;

export const SecondaryText = styled.div`
    color: ${WHITE_HEX};
    font-family: ${MYRIAD_PRO};
    font-size: 28px;
    line-height: 1.2;
    text-align: left;
`;