import React, {memo, useEffect, useReducer} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';

import { fecthSlides, selectSlides, selectSlideStatus } from '../../redux/slices/slides';

import Layout from '../Layout';
import SliderContent from '../SliderContent';

import {SliderWrapper, SliderParagraph, SliderText, SliderTextCont} from  './style';

const Slider = ({data, mainTitle, secondaryTitle}) => {
    const dispatch = useDispatch();
    const slides = useSelector(selectSlides);
    const status = useSelector(selectSlideStatus);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fecthSlides());
            return;
        }
    },[dispatch, status]);

    const [currIndex, dispatchCurrIndex] = useReducer((state, action) => {
        switch(action.type) {
            case 'forward':
                if (state < slides.length-1) {
                    return state + 1;
                }
                return 0;
            case 'backward':
                if (state>0) {
                    return state - 1;
                }
                return slides.length;
            default:
                return;
        }
    }, 0);

    return (
        <Layout>
            <SliderWrapper>
                <SliderContent slides = {data?data:slides} dispatch = {dispatchCurrIndex} currIndex = {currIndex} />
                <SliderTextCont>
                    <SliderText>{mainTitle}</SliderText>
                    {secondaryTitle?                    
                        <SliderParagraph>{secondaryTitle}</SliderParagraph>
                    :
                        null
                    }
                </SliderTextCont>
            </SliderWrapper>
        </Layout>
    );
}

export default memo(Slider, isEqual);