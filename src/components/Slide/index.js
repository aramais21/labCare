import React, { memo } from 'react';
import { isEqual } from 'lodash';

import {BackgroundImage} from './style';

const Slide = ({img}) => {
    return ( 
        <BackgroundImage src = {img} />
    );
}

export default memo(Slide, isEqual);