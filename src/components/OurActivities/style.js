import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, GREY_WHITE_HEX, smBreakingPoint, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen, mediaMaxWidth } from "../../config/helpers";

export const ActivityList = styled.div`
    width: 100%;
    height: fill-available;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
`;

export const ActivityCardWrapper = styled.div`
    width: 384px;
    height: 651px;
    background-color: ${WHITE_HEX};
    padding: 50px 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-bottom: 124px;
    ${mediaMaxWidth(smBreakingPoint, `
        width: 300px;
        height: 550px;
    `)}
`;

export const ActivityIconCont = styled.div`
    min-width: 143px;
    min-height: 143px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${GREY_WHITE_HEX};
    overflow: hidden;
`;

export const ActivityIcon = styled.img`
    width: 80%;
    height: 80%;
`;

export const ActivityCardTitle = styled.div`
    color: ${GREEEN_HEX};
    font-size: 25px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    margin-top: 20px;
    min-height: 60px;
    text-transform:  capitalize;
    ${fontForSmallerScreen(25)}
`;

export const ActivityCardText = styled.div`
    color: ${GREEEN_HEX};
    font-size: 21px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: 700;
    line-height: 1.2;
    margin-top: 30px;
    text-align: center;
    word-break: break-all;
    ${fontForSmallerScreen(21)}
    ${mediaMaxWidth(smBreakingPoint,`
        margin-top: 20px;
    `)}
`;

export const ActivityCardButton = styled.div`
    background-color: ${GREEEN_HEX};
    width: 156px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${WHITE_HEX};
    font-size: 30px;
    font-weight: bold;
    font-family: ${CENTURY_GOTHIC_BOLD};
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 32px;
    ${fontForSmallerScreen(30)}
`;