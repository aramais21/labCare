import React from 'react';

import Layout from '../../components/Layout';

import { RowFlexDiv, Image } from '../../styles';
import { MainText, RightCont, SecondaryText,ProductWrapper} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';

const Product = () => {
    const data = {
        title: 'Beer and beer bjksa',
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        src: ''
    }

    return(
        <ProductWrapper>
            <Layout background = {GREEEN_HEX}>
                <RowFlexDiv  justifyContent = 'space-around' alignItems = 'center' >
                    <Image src = {data.src} width = '592px' height = '592px' mobileWidth = '300px' mobileHeight = '300px' background = {WHITE_HEX} />
                    <RightCont>
                        <MainText>{data.title}</MainText>
                        <SecondaryText>{data.text}</SecondaryText>
                    </RightCont>
                </RowFlexDiv>
            </Layout>
        </ProductWrapper>
    )
}

export default Product;