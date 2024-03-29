import React, {memo, useEffect} from 'react';
import { isEqual } from 'lodash';

import Slide from '../Slide';

import {SliderCont} from './style.js';

const SliderContent = ({slides, dispatch, currIndex}) => {
    useEffect(() => {
        if(slides?.length>1) {
            const interval = setInterval(() => {
                dispatch({type: 'forward'});
            }, 2000);
            return () => clearInterval(interval);
        }
    },[dispatch, slides.length])

    return (
        <SliderCont currIndex={currIndex}>
            {slides?.length > 1?
                slides.map(({img, id}) => {
                    return (
                        <Slide img = {img} key = {id}/>
                    );
                })
            :
                <Slide img = {slides.img} key={slides.id} />
            }
            {}
        </SliderCont>
    );
}



export default memo(SliderContent, isEqual);