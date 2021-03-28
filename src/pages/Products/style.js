import styled, { keyframes } from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../config/constants";

export const MainCategoryWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-width: 300px;
    cursor: pointer;
    margin-bottom: 98px
`;

export const MainCategoryText = styled.div`
    color: ${WHITE_HEX};
    font-size: 36px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
`;

export const MainImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const MainImageText = styled.div`
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-size: 84px;
    line-height: 1.2;
    font-weight: bold;
    color: ${WHITE_HEX};
    position: absolute;
    width: 852px;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:  auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

export const CategoryWrapper  = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 146px;
`;

export const CategoryText = styled.div`
    color: ${WHITE_HEX};
    font-size: 36px;
    font-weight: bold;
    text-align: centerl;
    line-height: 1.2;
    font-family: ${CENTURY_GOTHIC_BOLD};
    text-transform: uppercase;
`;

export const ProductsWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 5.625rem;
    position: relative;
`;

export const TopCont = styled.div`
    z-index: 1;
`;

export const BottomCont = styled.div`
    position: relative;
    transition: 0.2s linear all;
`;

export const BottomContInner = styled.div`
    height: ${props => props.selectedCategory!==null?'auto':'0'};
    left: 0;
    transition: 0.2s linear all;
`;

export const arrowAnimation = keyframes`
    0%{
        bottom: 32px
    }
    50% {
        bottom: 64px;
    }
    100% {
        bottom: 32px;
    }
`;

export const DownArrow = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 32px;
    margin: auto;
    background-color:  ${GREEEN_HEX};
    border-radius: 100%;
    width: 64px;
    height: 64px;
    cursor: pointer;
    background-image: url('https://www.freeiconspng.com/uploads/black-circle-arrow-up-icon-31.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(180deg);
    animation: ${arrowAnimation} 1.5s linear infinite;
`;
