import styled from "styled-components";
import { CENTURY_GOTHIC_BOLD, MYRIAD_PRO } from "../../config/constants";

export const Wrapper = styled.div`
    width: 50;
    min-width: 300px;
    max-width: 700px;
    display: flex;
    flex-flow: column nowrap;
    margin: 33.5px 0;
`;

export const Title = styled.div`
    color: ${props => props.textColor};
    font-weight: bold;
    font-size: 55px;
    line-height: 1.2;
    font-family: ${CENTURY_GOTHIC_BOLD};
    text-align: left;
    margin-bottom: 67px;
    text-transform: uppercase;
`;

export const Text = styled.div`
    color: ${props => props.textColor};
    font-size: 29px;
    line-height: 1.2;
    font-family: ${MYRIAD_PRO};
    text-align: left;
`;