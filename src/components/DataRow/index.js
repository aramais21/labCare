import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';

import { fecthCategories, selectCategories, selectCategoryStatus } from '../../redux/slices/categories';
import { fecthPartners, selectPartners, selectPartnerStatus } from '../../redux/slices/partners';
import { fecthProducts, selectProducts, selectProductStatus } from '../../redux/slices/products';
import { fecthSlides, selectSlides, selectSlideStatus } from '../../redux/slices/slides';
import { fecthSocLinks, selectSocLinks, selectSocLinkStatus } from '../../redux/slices/socialLinks';

import { Row, Image } from '../../styles';
import {TextWrapper, TextCont} from './style';

const Text = ({onClick, children}) => {
    return (
        <TextWrapper onClick = {onClick} >
            <TextCont>{children}</TextCont>
        </TextWrapper>
    )
}

const DataRow = ({name, onClick}) => {
    const dispatch = useDispatch();

    const slideStatus = useSelector(selectSlideStatus);
    const partnerStatus = useSelector(selectPartnerStatus);
    const categoryStatus = useSelector(selectCategoryStatus);
    const socialLinkStatus = useSelector(selectSocLinkStatus);
    const productStatus = useSelector(selectProductStatus);

    const slides = useSelector(selectSlides);
    const partners = useSelector(selectPartners);
    const categories = useSelector(selectCategories);
    const socialLinks = useSelector(selectSocLinks);
    const products = useSelector(selectProducts);

    useEffect(() => {
        switch(name) {
            case 'Slide':
                if(slideStatus === 'idle') {
                    dispatch(fecthSlides());
                }
                return ;
            case 'Partner':
                if(partnerStatus === 'idle') {
                    dispatch(fecthPartners());
                }
                return ;
            case 'Product':
                if(productStatus === 'idle') {
                    dispatch(fecthProducts());
                }
                return ;
            case 'Category':
                if(categoryStatus === 'idle') {
                    dispatch(fecthCategories());
                }
                return ;
            case 'Social Link':
                if(socialLinkStatus === 'idle') {
                    dispatch(fecthSocLinks());
                }
                return ;
            default:
                return ;
        }
    }, [dispatch, slideStatus, partnerStatus, productStatus, categoryStatus, socialLinkStatus, name]);

    switch(name) {
        case 'Slide':
            return (
                <Row>
                    {slides.map((slide) => {
                        return (<Image onClick = {() => onClick(slide)}  width = '200px' height = '200px' src = {slide.img} ></Image>)
                    })}
                </Row>
            );
        case 'Partner':
            return (
                <Row>
                    {partners.map((partner) => {
                        return (
                            <Text onClick = {() => onClick(partner)} >{partner.name}</Text>
                        )
                    })}
                </Row>
            );
        case 'Product':
            return (
                <Row>
                    {products.map((product) => {
                        return (
                            <Text onClick = {() => onClick(product)} >{product.title}</Text>
                        )
                    })}
                </Row>
            );
        case 'Category':
            return (
                <Row>
                    {categories.map((category) => {
                        return (
                            <Text onClick = {() => onClick(category)} >{category.title}</Text>
                        )
                    })}
                </Row>
            );
        case 'Social Link':
            return (
                <Row>
                    {socialLinks.map((socLink) => {
                        return (
                            <Text onClick = {() => onClick(socLink)} >{socLink.socialNetwork}</Text>
                        )
                    })}
                </Row>
            );
        default:
            return (<></>)
    }
}

export default memo(DataRow, isEqual);