import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';

import { fecthCategories, selectCategories, selectCategoryStatus } from '../../redux/slices/categories';
import { fecthPartners, selectPartners, selectPartnerStatus } from '../../redux/slices/partners';
import { fecthProducts, selectProducts, selectProductStatus } from '../../redux/slices/products';
import { fecthSlides, selectSlides, selectSlideStatus } from '../../redux/slices/slides';
import { fecthSocLinks, selectSocLinks, selectSocLinkStatus } from '../../redux/slices/socialLinks';
import useTranslate from '../../hooks/useTranslate';

import { Row, Image } from '../../styles';
import { TextCont, Wrapper} from './style';

const Text = ({onClick, children}) => {
    return (
        <Wrapper onClick = {onClick} >
            <TextCont>{children}</TextCont>
        </Wrapper>
    )
}

const DataRow = ({name, onClick}) => {
    const dispatch = useDispatch();
    const {translate} = useTranslate()

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
                        return (
                            <Wrapper key = {slide._id}>
                                <Image onClick = {() => onClick(slide)}  width = '200px' height = '200px' src = {slide.img} ></Image>
                            </Wrapper>
                        );
                    })}
                </Row>
            );
        case 'Partner':
            return (
                <Row>
                    {partners.map((partner) => {
                        return (
                            <Text key = {partner._id} onClick = {() => onClick(partner)} >{partner.name}</Text>
                        )
                    })}
                </Row>
            );
        case 'Product':
            return (
                <Row>
                    {products.map((product) => {
                        return (
                            <Text key = {product._id} onClick = {() => onClick(product)} >{translate(product.title)}</Text>
                        )
                    })}
                </Row>
            );
        case 'Category':
            return (
                <Row>
                    {categories.map((category) => {
                        return (
                            <Text key = {category._id} onClick = {() => onClick(category)} >{translate(category.title)}</Text>
                        )
                    })}
                </Row>
            );
        case 'Social Link':
            return (
                <Row>
                    {socialLinks.map((socLink) => {
                        return (
                            <Text key = {socLink._id} onClick = {() => onClick(socLink)} >{socLink.socialNetwork}</Text>
                        )
                    })}
                </Row>
            );
        default:
            return (<></>)
    }
}

export default memo(DataRow, isEqual);