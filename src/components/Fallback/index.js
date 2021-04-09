import React from 'react';
import { LAODER_URL } from '../../config/constants';

import {Image} from '../../styles'
import {Wrapper} from './style';

const Fallback = () => {
    return (
        <Wrapper>
            <Image src = {LAODER_URL} width = '300px' height = '300px' noBackground = {true} ></Image>
        </Wrapper>
    );
}

export default Fallback;