import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';

import Layout from '../../components/Layout'
import SectionDeviderText from '../../components/SectionDeviderText';

import { RowFlexDiv, Image } from '../../styles';
import { DownArrow , BottomContInner ,ProductsWrapper ,CategoryWrapper ,CategoryText, MainCategoryText, MainCategoryWrapper, MainImageText, MainImageWrapper } from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fecthProducts, selectProducts, selectProductStatus } from '../../redux/slices/products';
import useTranslate from '../../Hooks/useTranslate';
import { ourProducts } from '../../data/products';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductStatus);
    const {translate, translateLocal} = useTranslate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fecthProducts());
            return;
        }
    })

    const clickhandler = useCallback((index) => {
        if(selectedCategory !== index) {
            setSelectedCategory(null);
            const timeout = setTimeout(() => {
                setSelectedCategory(index);
                imageRef.current.scrollIntoView();
                clearTimeout(timeout);
            }, 500);
        }
        else {
            imageRef.current.scrollIntoView();
        }
    },[setSelectedCategory, selectedCategory]);

    const arrowClickHandler = () => {
        categoryRef.current.scrollIntoView();
    }

    const imageRef = useRef(null);
    const categoryRef = useRef(null);

    return(
        <ProductsWrapper>
            <Layout background = {GREEEN_HEX} >
                <SectionDeviderText textColor = {WHITE_HEX} backgroundColor = {GREEEN_HEX} text = {translateLocal(ourProducts)} noMarginBottom = {true} ></    SectionDeviderText>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    {products.map(({src, title, categories}, index) => {
                        return (
                            <MainCategoryWrapper key = {title + categories.length} onClick = {() => clickhandler(index)}>
                                <Image src = {src} width = '80vh' height = '80vh' maxWidth = {522} maxHeight = {522} mobileWidth = '300px' mobileHeight = '300px'  backgroundColor = {WHITE_HEX}></Image>
                                <MainCategoryText>{translate(title)}</MainCategoryText>
                            </MainCategoryWrapper>
                        )
                    })}
                </RowFlexDiv>
            </Layout>
            
            <BottomContInner selectedCategory = {selectedCategory} ref = {imageRef}>
            {selectedCategory !== null?
                <Layout background = {GREEEN_HEX} >
                    <MainImageWrapper>
                        <Image src = {products[selectedCategory].mainPic} width = '100vw' height = '100vh' noMargin = {true}></Image>
                        <MainImageText>{translate(products[selectedCategory].title)}</MainImageText>
                        <DownArrow onClick = {arrowClickHandler}></DownArrow>
                    </MainImageWrapper>
                    <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' ref = {categoryRef} >
                        {products[selectedCategory].categories.map(({_id,src, title}) => {
                            return (
                                <Link to = {`/product/${_id}`} key = {_id}>
                                    <CategoryWrapper>
                                        <CategoryText>{translate(title)}</CategoryText>
                                        <Image src ={src} width = '432px' height = '432px' mobileWidth = '250px' mobileHeight = '250px'></Image>
                                    </CategoryWrapper>
                                </Link>
                            );
                        })}
                    </RowFlexDiv>
                </Layout>            :
                null
            }
            </BottomContInner>

        </ProductsWrapper>
    )
}

export default Products;