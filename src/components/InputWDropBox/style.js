import styled from "styled-components";
import { Input } from "../../styles";

import {WHITE_HEX, GREEEN_HEX, CENTURY_GOTHIC_BOLD} from '../../config/constants';

export const Wrapper = styled.div`
    width: 300px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    flex-flow: column-reverse nowrap;

`;

export const SmallInput = styled(Input)`
    min-width: 300px;
    margin: 0;
`;

export const TextArea = styled.textarea`
    width: 300px;
    max-width: 300px;
    margin: 0;
    height: ${props => Math.floor(props.value.length/24)*32 + 32}px;
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    padding: 8px 4px;
    font-size: 16px;
    outline: none;
`;

export const DropBox = styled.select`
    width: 60px;
    background-color: ${WHITE_HEX};
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    padding: 7px 4px;
    font-size: 16px;
    outline: none;
    margin-bottom: 16px;
`;

export const Option = styled.option`
    color: ${GREEEN_HEX};
    font-family: ${CENTURY_GOTHIC_BOLD};
    font-weight: bold;
    font-size: 16px;
    outline: none;
`;