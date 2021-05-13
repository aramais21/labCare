import React, {memo} from 'react';
import Layout from '../Layout/index.js';
import { isEqual } from 'lodash';

import {Text, BackgroundImage} from './style.js';

const SectionDeviderImage = ({text}) => {
    return(
        <Layout>
            <BackgroundImage imgUrl = 'https://www.dropbox.com/s/ti9dy6wyvwpolnr/hands.jpeg?raw=1' >
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