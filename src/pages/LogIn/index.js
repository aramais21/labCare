import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Fallback from '../../components/Fallback';

import { check, logIn, selectAuthStatus, selectIsAbleToOpenAdmin } from '../../redux/slices/auth';

import { GREEEN_HEX } from '../../config/constants';

import {Image} from '../../styles';
import { Button, Input, LogInText, OuterCont, LayOver } from './style';

const Login = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);
    const isAbleToOpenAdmin = useSelector(selectIsAbleToOpenAdmin);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(check());
        }
    });

    const submitHandler = async (e) => {
        setIsLoading(true);
        const body = JSON.stringify({email: emailRef.current.value, password: passwordRef.current.value});
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/auth/login`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body});
        const res = await response.json();
        if(!res.error && res.data) {
            dispatch(logIn(res.data.token));
        }
        setIsLoading(false);
    }

    if(isAbleToOpenAdmin) {
        return(
            <Layout justifyContent = 'center' background = {GREEEN_HEX}>
                {
                status === 'loading' || status === 'idle'?
                    <Image minHeight = {360} minWidth = {300} src = 'https://www.dropbox.com/s/yehywo6h9yak5yl/Clock-Loading.gif?raw=1' ></Image>
                :
                    isAbleToOpenAdmin?
                        <OuterCont>
                            <LogInText>Log In</LogInText>
                            <Input ref = {emailRef} placeholder = 'email' type = 'email'  ></Input>
                            <Input ref = {passwordRef} placeholder = 'password' type = 'password'  ></Input>
                            <Button onClick = {submitHandler} >Submit</Button>
                            {isLoading && <LayOver isLoading = {isLoading} > Loading ... </LayOver>}
                        </OuterCont>
                    :
                        <OuterCont>
                            You are forbidden from entering this page.
                        </OuterCont>
                }
            </Layout>
        );
    }
    else if (!isAbleToOpenAdmin && status!=='loading' ) {
        return (
            <Layout>
                is not<Image minHeight = {300} minWidth = {300} src = 'https://www.dropbox.com/s/yehywo6h9yak5yl/Clock-Loading.gif?raw=1' ></Image>
            </Layout>
        )
    }
    else if (status === 'loading') {
        return (
            <Fallback></Fallback>
        )
    }
}

export default Login;