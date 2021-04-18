import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fecthSocLinks, selectSocLinks, selectSocLinkStatus} from '../../redux/slices/socialLinks';

import {Image} from '../../styles'
import {
    FooterWrapper, 
    TopCont, 
    FollowUsText, 
    Icons, 
    IconCont, 
    EmailText, 
    EmailInput, 
    EmailBtn, 
    ArrowUp, 
    ArrowUpImg, 
    BottomCont, 
    RightsCont, 
    Mention, 
    LinkExternal, 
    Column,
    ColumnTitle,
    ColumnElement,
} from './style';
import useTranslate from '../../hooks/useTranslate';
import { placeholder, titles } from '../../data/footer';
import { buttonLabels, regularNavBar } from '../../data';

const Footer = () => {
    const dispatch = useDispatch();
    const socLinks = useSelector(selectSocLinks);
    const status = useSelector(selectSocLinkStatus);
    const {translateLocal} = useTranslate();

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fecthSocLinks());
            return
        }
    },[status, dispatch]);

    return(
        <FooterWrapper>
            <TopCont>

                <Column marginRight = '69px' marginLeft='0px'>
                    <FollowUsText>{translateLocal(titles.followUs)}</FollowUsText>
                    <Icons>
                        {socLinks.map((item) => {
                            return (
                            <LinkExternal key = {item.id} target = '_blank' rel="noopener noreferrer" href = {item.link}>
                                <IconCont>
                                    <Image src = {item.imageUrl} alt = {item.socialNetwork} width = '47px' height = '47px' noMargin = {true} />
                                </IconCont>
                            </LinkExternal>
                            )
                        })}
                    </Icons>                   
                </Column>

                <Column  marginRight = '0px' marginLeft='0px'>
                    <EmailText>{translateLocal(titles.subscribe)}</EmailText>
                    <EmailInput placeholder = {translateLocal(placeholder)} ></EmailInput>
                    <EmailBtn>{translateLocal(buttonLabels.send)}</EmailBtn>
                </Column>

                <Column  marginRight = '0px' marginLeft='auto'>
                    <ColumnTitle>{translateLocal(titles.ourContacts)}</ColumnTitle>
                    <ColumnElement><Link to = '/contacts' > {translateLocal(regularNavBar.contacts)} </Link></ColumnElement>
                </Column>

                <Column  marginRight = '0px' marginLeft='145px'>
                    <ColumnTitle>{translateLocal(titles.pages)}</ColumnTitle>
                    <ColumnElement><Link to = '/' >{translateLocal(regularNavBar.home)}</Link></ColumnElement>
                    <ColumnElement><Link to = '/about' >{translateLocal(regularNavBar.aboutUS)}</Link></ColumnElement>
                    <ColumnElement><Link to = '/activities' >{translateLocal(regularNavBar.activities)}</Link></ColumnElement>
                    <ColumnElement><Link to = '/products' >{translateLocal(regularNavBar.products)}</Link></ColumnElement>
                    <ColumnElement><Link to = '/contacts' >{translateLocal(regularNavBar.contacts)}</Link></ColumnElement>
                </Column>
                

                <ArrowUp onClick = {() => window.scrollTo(0,0)}>
                    <ArrowUpImg alt = 'arrow pointing upwards' src = 'https://www.freeiconspng.com/uploads/black-circle-arrow-up-icon-31.png'/>
                </ArrowUp>

            </TopCont>
            <BottomCont>
                <RightsCont>@2021 LabCare Ltd - | all rights reserved</RightsCont>
                <Mention>created by aramaisay</Mention>
            </BottomCont>
        </FooterWrapper>
    )
}

export default Footer;