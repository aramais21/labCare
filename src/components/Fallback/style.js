import styled from "styled-components";
import { GREEEN_HEX } from "../../config/constants";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justidy-content: center;
    align-items: center;
    background-color: ${GREEEN_HEX};
`;