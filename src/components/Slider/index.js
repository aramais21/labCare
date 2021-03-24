import React, {useReducer} from 'react';

import Layout from '../Layout';
import SliderContent from '../SliderContent';

import './style.css';

const Slider = () => {

    const slides = [
        {img: 'https://previews.dropbox.com/p/thumb/ABH-6rJd4nxj-a9emJVEfVY3yBesVUYQ99GGCdD-5TlsYiwloLmb_gFqJfzZ3uAPmpirOARlRNkwjSshRxOSDwrgrr5grsH__VUkruIQsVluHvyLZA1LlbWHNWkjIGuZGd7m6iexIP33gCAIEHyZ_2965l8v8tUD9I6U6cEuR07t9sVVFQ0dR2JQRho8eDb7YMsnx1KKSykCs9Na9sdMqstLt4Goi_shwiqSaC8Qu56WBEYcidUuMvNYvExDFQa13tUiaz9Bnd-aFhB8RfMnUrjg0kuJDD3OSFfDeaUIutatPZDOgMdqIPQyXqDTcxprghBG_v7rbjsvzk3BBvE8vVm5CADvadtwf2JKVxXpPEj-Ig/p.jpeg?fv_content=true&size_mode=5', id: '123'},
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