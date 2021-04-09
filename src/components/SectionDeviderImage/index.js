import React, {memo} from 'react';
import Layout from '../Layout/index.js';
import { isEqual } from 'lodash';

import {Text, BackgroundImage} from './style.js';

const SectionDeviderImage = ({text}) => {
    return(
        <Layout>
            <BackgroundImage imgUrl = 'https://static.wixstatic.com/media/33e6f0_384970f13b0d462780491eb1050bfe69~mv2.jpg/v1/crop/x_214,y_0,w_853,h_853/fill/w_324,h_334,al_c,q_80,usm_0.66_1.00_0.01/achievement-3737229_1280.webp' >
                {text?
                    <Text>{text}</Text>
                :
                    null
                }
            </BackgroundImage>
        </Layout>
    )
}

export default memo(SectionDeviderImage, isEqual);