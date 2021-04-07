import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, WHITE_HEX } from "../../../config/constants";
import { fontForSmallerScreen } from "../../../config/helpers";

export const MainText = styled.div`
    color: ${WHITE_HEX};
    font-size: 24px;
    max-width: 340px;
    text-align: center;
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    ${fontForSmallerScreen(24)}
`;