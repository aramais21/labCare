import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, GREEEN_HEX, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const SelectType = styled.div`
    cursor: pointer;
    margin: 8px 16px;
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    text-transform: uppercase;
    font-size: 24px;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    padding: 4px 8px;
    ${fontForSmallerScreen(24)}
`;