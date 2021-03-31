import styled from 'styled-components';
import { CENTURY_GOTHIC_BOLD, WHITE_HEX, COD_GRAY_HEX, MYRIAD_PRO, GREEEN_HEX, smBreakingPoint } from '../../config/constants';
import { mediaMaxWidth } from '../../config/helpers';

export const FooterWrapper =  styled.div`
    width: 100%;
    min-height: 404px;
    background-color: ${COD_GRAY_HEX};
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: relative;
`;
 export const TopCont = styled.div`
    width: 90%;
    display: flex;
    flex-flow: row wrap;
`;

export const Column = styled.div`
    margin-top: 63px;
    text-align: left;
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    ${mediaMaxWidth(smBreakingPoint,`
        margin: 63px auto 0;
    `)}
`;

export const ColumnTitle = styled.div`
    font-size: 24px;
    line-height: 28.8px;
    color: ${WHITE_HEX};
    font-family: ${MYRIAD_PRO};
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const ColumnElement = styled.div`
    color: rgba(255,255,255, 0.7) !important;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    font-size: 18px;
    line-height: 21.6px;
    margin-bottom: 24px;
`;

export const FollowUsText = styled.div`
    color: ${WHITE_HEX};
    font-size: 32.63px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: bold;
    height: fit-content;
`;

export const Icons = styled.div`
    width: 157px;
    max-height: 47px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`;

export const IconCont = styled.div`
    width: 47px;
    height: 47px;
    overflow:  hidden;
    border-radius: 100%;
`

export const LinkExternal = styled.a`
    width: 47px;
    height: 47px;
    overflow: hidden;
`;

export const EmailCollector = styled.div`
    min-width: 18.75rem;
    margin-top: 2rem;
`;

export const EmailText = styled.div`
    color: ${WHITE_HEX};
    font-size: 31px;
    font-weight: bold;
    font-family: ${CENTURY_GOTHIC_BOLD};
    text-transform: uppercase;
    line-height: 37px;
`;

export const EmailInput = styled.input`
    background-color: ${WHITE_HEX};
    height: 38px;
    max-width: 334px;
    width: 90%;
    outline: none;
    font-size: 25px;
    line-height: 30px;
    padding-left: 0.625rem;
    font-familt: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    margin: 26px 0 11px;
    ::placeholder {
        color: #4d4d4d;
    }
`;

export const EmailBtn = styled.div`
    width: 98px;
    height: 31px;
    background-color: ${GREEEN_HEX};
    cursor: pointer;
    color: ${WHITE_HEX};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    text-transform: uppercase;
`;

export const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${GREEEN_HEX};
    border-radius: 100%;
    position: absolute;
    right: 12px;
    top: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ArrowUpImg = styled.img`
    width: 110%;
    height: 110%;
`;

export const BottomCont = styled.div`
    width: 90%;
    height: 2.5rem;
    border-top: 0.25rem solid #000000;
    margin: 2rem 0 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RightsCont = styled.div`
    color: #ffffff;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-family: 'CenturyGothic';
`;

export const Mention = styled.div`
    color: #4d4d4d;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-family: 'CenturyGothic';
`;