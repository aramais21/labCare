import styled from 'styled-components';

export const SliderCont = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 0;
    transition: 0.2s linear left;
    left: -${props => props.currIndex*100}vw;
    z-index: 2;
`;