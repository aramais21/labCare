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

const Footer = () => {
    const dispatch = useDispatch();
    const socLinks = useSelector(selectSocLinks);
    const status = useSelector(selectSocLinkStatus);

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
                    <FollowUsText> Follow Us </FollowUsText>
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
                    <EmailText>subscribe to our news letter</EmailText>
                    <EmailInput placeholder = 'EMAIL' ></EmailInput>
                    <EmailBtn>send</EmailBtn>
                </Column>

                <Column  marginRight = '0px' marginLeft='auto'>
                    <ColumnTitle>our contacts</ColumnTitle>
                    <ColumnElement><Link to = '/contacts' > contact us </Link></ColumnElement>
                </Column>

                <Column  marginRight = '0px' marginLeft='145px'>
                    <ColumnTitle>pages</ColumnTitle>
                    <ColumnElement><Link to = '/' >home</Link></ColumnElement>
                    <ColumnElement><Link to = '/about' >about us</Link></ColumnElement>
                    <ColumnElement><Link to = '/activities' >activities</Link></ColumnElement>
                    <ColumnElement><Link to = '/products' >products</Link></ColumnElement>
                    <ColumnElement><Link to = '/contacts' >contacts</Link></ColumnElement>
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