import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";



export const Error = styled.div`
    font-size: 24px;
    color:${WHITE_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    ${fontForSmallerScreen(24)}
`