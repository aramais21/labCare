import React from 'react';
import { GREEEN_HEX, LAODER_URL } from '../../config/constants';

import {Image} from '../../styles'
import Layout from '../Layout';
import {Wrapper} from './style';

const Fallback = () => {
    return (
        <Layout background = {GREEEN_HEX} >
            <Wrapper>
                <Image src = {LAODER_URL} width = '300px' height = '300px' noBackground = {true} ></Image>
            </Wrapper>
        </Layout>
    );
}

export default Fallback;