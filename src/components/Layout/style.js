import styled from 'styled-components';
import { WHITE_HEX } from '../../config/constants';

export const LayoutDiv = styled.div`
    width: 100vw;
    ${props => {
        if(props.fixedHeight) {
            return `height: ${props.fixedHeight}px;`
        }
        return 'min-height: 100vh;'
    }}
    position: relative;
    overflow-x:hidden;
    background-color: ${props => {
        if(props.background){
            return props.background;
        }
        return WHITE_HEX;
    }};
    display: flex;
    flex-flow: column nowrap;
    ${props => props.noAlign?'':'align-items: center;'}
    ${props => props.justifyContent?`justify-content: ${props.justifyContent};`:''}
    ${props => props.marginTop?`margin-top: ${props.marginTop};`:''}
`;