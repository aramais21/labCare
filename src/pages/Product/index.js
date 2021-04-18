import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import Layout from '../../components/Layout';

import { RowFlexDiv, Image } from '../../styles';
import { MainText, RightCont, SecondaryText,ProductWrapper} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';
import useFetch from '../../hooks/useFetch';
import Fallback from '../../components/Fallback';

import useTranslate from '../../hooks/useTranslate';

const Product = () => {
    const {id} = useParams();
    const {loading, data, error, request} = useFetch();
    const {translate} = useTranslate();

    useEffect(() => {
        if(data === null && !loading) {
            request(`/category/${id}`, 'GET', {}, {})
        }
    }, [loading, data, id, request])
    
    return(
        <ProductWrapper>
            <Layout background = {GREEEN_HEX}>
                <RowFlexDiv  justifyContent = 'space-around' alignItems = 'center' >
                {!loading && data !== null &&  !error?
                    <>
                        <Image src = {data.src} width = '592px' height = '592px' mobileWidth = '300px' mobileHeight = '300px' background = {WHITE_HEX} />
                        <RightCont>
                            <MainText>{translate(data.title)}</MainText>
                            <SecondaryText>{translate(data.desc)}</SecondaryText>
                        </RightCont>
                    </>
                :
                <Fallback></Fallback>
                }
                </RowFlexDiv>
                
            </Layout>
        </ProductWrapper>
    )
}

export default Product;