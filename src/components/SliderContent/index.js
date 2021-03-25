import React, {useEffect} from 'react';
import styled from 'styled-components';

import Slide from '../Slide';

import './style.css';

const SliderContent = ({slides, dispatch, currIndex}) => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('changed');
            dispatch({type: 'forward'});
        }, 2000);
        return () => clearInterval(interval)
    },[dispatch])

    return (
        <SliderCont currIndex={currIndex}>
            {slides.map(({img, id}) => {
                return (
                    <Slide img = {img} key = {id}/>
                );
            })}
        </SliderCont>
    );
}

const SliderCont = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 0;
    transition: 0.2s linear left;
    left: -${props => props.currIndex*100}vw;
    z-index: 2;
`;

export default SliderContent;