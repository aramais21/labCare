import React, { useCallback, useRef, useState } from 'react';
import {Link} from 'react-router-dom';

import Layout from '../../components/Layout'
import SectionDeviderText from '../../components/SectionDeviderText';

import { RowFlexDiv, Image } from '../../styles';
import { DownArrow , BottomContInner ,ProductsWrapper ,CategoryWrapper ,CategoryText, MainCategoryText, MainCategoryWrapper, MainImageText, MainImageWrapper } from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            title: 'Wine and wine yeast',
            src: '',
        },
        {
            title: 'Wine and wine yeast',
            src: '',
        },
        {
            title: 'Wine and wine yeast',
            src: '',
        },
        {
            title: 'Wine and wine yeast',
            src: '',
        },
    ]
    const data = [
        {
            title: 'laboratory equipment',
            src: '',
            mainPic: 'https://previews.dropbox.com/p/thumb/ABFGQVXCOdzL98x-m-eRjKo3jX60ElBUx5_E9rfK9YKhTfx6Qexsr-8BW9BH1WjfhokahtAdk6mXskCKFuqHr8GlnGlnsXnMlbMavgzws4Ol87PRjxOgXEFf6uMBD3jShVLEgOHxlRSbFalEeXzevw0Z_O4L2s6cdBqpJmcgSiVLZ1mE7Ag0rvAnBx4U1sEyPj-VgUagYaqHqbnwqhM0e7Pz2d2lTWL1LaQ6kdNcHsEJ14gKzgFEHZsS2SadM4BeAxyKkZk0b3Hzm8TMW-1RxJSy993L6bLBN4MZTvgFxqOCJj7f9kOf61WeQfDYxTRASHt2hTwbnOVUnHjCzyGZwGMjyh-MO_uTLzryJnnTz2tBRA/p.png?size=2048x1536&size_mode=3',
            categories: [...categories],
        },
        {
            title: 'mining products',
            src: '',
            mainPic: 'https://previews.dropbox.com/p/thumb/ABEmxZSmp1IKUG4K857t9JmOj-Mn6wPHXOpohGNFS4cewZ3aBOzllyZccqM6jl7HZ9R5Y4XE0wQ02A7kXPG-ALHtF1PJNeYZ7MajV6-y401bFLXTrhfBqM_oC-qhuR0l3ICvoYP8pyFX413ghbFmxZ7UbuBquSedx6bTwPZHP0uSDMPleLtIefql9XLDKWBccYTFtzcWRPGnWSyomskKWMO0zQ15F-AMQ-3vq9dsQRYAiAlc-tF8HSqhwCN31EXJ9cFMZrARFZHAa3L3EDOiSKyFL82RpaJxfYzkkh7Vq1GHNQpuqEktFsDgUGoEQeNuaP38CgNJ26z96z0IfOoQojbe0xMSrfrhe-p7-iZfmOR00w/p.jpeg?fv_content=true&size_mode=5',
            categories: [...categories],
        },
        {
            title: 'yeast and yeast derivatives',
            src: '',
            mainPic: 'https://previews.dropbox.com/p/thumb/ABFkXSGLeUljoge5OE-VBhpo4kRD47pwLEgWpYktMd6hGKVo7sq8eiYM8HPxfKuBrJlVPwxQzlAXYSfTQeNbYuso7spK2fr4jlhhiVsBzDcsVDV_9a76crXK_HCQfQR4ZYSFPqR7c59P5OeA4cPyPkHP_OCS8LzY_9tJa1kamVqpMbKMkL8dadYQWqoeK1G0AL2nfitf0SclWLnAlSVnq73Q13wtYmQf1zwZbOZS0C7w-pK37KXy4o-gZjX_79rzNNCqvwfLaNrlflh5g2O6KEqIEfST5IhwI_fYmCUadOgRuo5SyOVBPkHR87bzlhlv0ge7_poYjzr0Arzoy6Zv-PjhCjuK0LByE6QiV6MGavd0Ew/p.jpeg?fv_content=true&size_mode=5',
            categories: [...categories],
        },
    ];

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
                <SectionDeviderText textColor = {WHITE_HEX} backgroundColor = {GREEEN_HEX} text = 'our products' noMarginBottom = {true} ></    SectionDeviderText>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    {data.map(({src, title, categories}, index) => {
                        return (
                            <MainCategoryWrapper key = {title + categories.length} onClick = {() => clickhandler(index)}>
                                <Image src = {src} width = '80vh' height = '80vh' minHeight = {300} minWidth = {300} maxWidth = {522} maxHeight = {522}     backgroundColor = {WHITE_HEX}></Image>
                                <MainCategoryText>{title}</MainCategoryText>
                            </MainCategoryWrapper>
                        )
                    })}
                </RowFlexDiv>
            </Layout>
            
            <BottomContInner selectedCategory = {selectedCategory} ref = {imageRef}>
            {selectedCategory !== null?
                <Layout background = {GREEEN_HEX} >
                    <MainImageWrapper>
                        <Image src = {data[selectedCategory].mainPic} width = '100vw' height = '100vh' noMargin = {true}></Image>
                        <MainImageText>{data[selectedCategory].title}</MainImageText>
                        <DownArrow onClick = {arrowClickHandler}></DownArrow>
                    </MainImageWrapper>
                    <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' ref = {categoryRef} >
                        {data[selectedCategory].categories.map(({src, title}) => {
                            return (
                                <Link to = {`/product/${'asd'}`}>
                                    <CategoryWrapper>
                                        <CategoryText>{title}</CategoryText>
                                        <Image src ={src} width = '432px' height = '432px'></Image>
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