import React, {useReducer} from 'react';

import Layout from '../Layout';
import SliderContent from '../SliderContent';

import './style.css';

const Slider = () => {

    const slides = [
        {img: 'https://wallpaperaccess.com/full/758475.jpg', id: '123'},
        {img: 'https://wallpaperaccess.com/full/758475.jpg', id: '1234'},
        {img: 'https://wallpaperaccess.com/full/758475.jpg', id: '1235 iruieyib'},
    ];

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
            <div className = 'sliderWrapper' >
                <SliderContent slides = {slides} dispatch = {dispatchCurrIndex} currIndex = {currIndex} />
                <div className = 'sliderTextCont' >
                    <div className = 'sliderText' >Welcome to LabCare</div>
                    <div className = 'sliderParagraph' > TEXTEXTTEXTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT </div>
                </div>
            </div>
        </Layout>
    );
}

export default Slider;