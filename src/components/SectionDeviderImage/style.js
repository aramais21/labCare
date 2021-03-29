// .imgDevider {
//     width: 100%;
//     height: 67.5rem;
//     background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-image: url('../../assets/partners.jpg');
// }

import styled from "styled-components";
import { CENTURY_GOTHIC, WHITE_HEX } from "../../config/constants";
import { fontForSmallerScreen } from "../../config/helpers";

export const BackgroundImage = styled.div`
    width: 100%;
    flex-grow:1;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.imgUrl});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    color: ${WHITE_HEX};
    font-family: ${CENTURY_GOTHIC};
    font-size: 72px;
    text-align: center;
    text-shadow: 3px 1px 3px rgba(0, 0, 0, 1);
    ${fontForSmallerScreen(72)}
`;
