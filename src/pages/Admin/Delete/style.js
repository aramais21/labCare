import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../../config/constants";
import { fontForSmallerScreen } from "../../../config/helpers";

export const Button = styled.div`
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-size: 20px;
    font-wieght: bold;
    margin: 16px 0;
    padding: 8px 16px;
    transition: 0.2s linear all;
    ${props => {
        if(props.chosenItem !== null) {
            return `
                cursor: pointer;
                opacity: 1;
            `
        }
        return `
            opacity: 0.6;
        `
    }}
    ${fontForSmallerScreen()}
`;