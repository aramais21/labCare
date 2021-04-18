import styled from 'styled-components';
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    margin: 16px 0;
    align-items: center;
`;

export const Button = styled.div`
    background-color: ${GREEEN_HEX};
    color: ${WHITE_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    padding: 16px 8px;
    font-size: 16px;
    margin: 8px auto;
    border: 2px solid ${WHITE_HEX};
    cursor: pointer;
    ${fontForSmallerScreen(16)};
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const ProductText = styled.div`
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-size: 16px;
    font-weight: bold;
    color: ${WHITE_HEX};
    text-align: center;
    margion: 16px 0;
`;

export const Product = styled.div`
    margin: 16px;
    padding: 16px 8px;
    ${props => {
        if(props.isActive) {
            return `border: 3px solid ${WHITE_HEX};`;
        }
        return 'cursor: pointer;';
    }}
`;
