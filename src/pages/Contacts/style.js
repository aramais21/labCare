import styled from 'styled-components';
import { BLACK_HEX, CENTURY_GOTHIC_BOLD, GREEEN_HEX, smBreakingPoint } from '../../config/constants';
import { fontForSmallerScreen, mediaMaxWidth } from '../../config/helpers';

export const ContactWrapper = styled.div`
    margin-top: 3rem;
`;

export const LeftCont = styled.div`
`;

export const RightCont = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-width: 300px;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    ${mediaMaxWidth(smBreakingPoint,`
        width: 100%;
        margin: 32px 0;
    `)}
`;

export const ContactCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    margin: 16px 0;
    max-width: 500px;
`;

export const ContactIcon = styled.div`
    min-width: 123px;
    min-height: 123px;
    border-radius: 100%;
    background-color: ${GREEEN_HEX};
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 123px;
    max-height: 123px;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    margin-left: 27px
`;

export const ContactMainText = styled.div`
    color: ${GREEEN_HEX};
    font-size: 36px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    line-heigth: 1.2;
    max-width: 300px;
    text-align: left;
    ${fontForSmallerScreen(36)}
`;

export const ContactSecondText = styled.div`
    color: ${BLACK_HEX};
    font-size: 24px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    line-heigth: 1.2;
    max-width: 300px;
    text-align: left;
    ${fontForSmallerScreen(24)}
`;