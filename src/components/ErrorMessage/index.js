import React, {memo} from 'react';
import { isEqual } from 'lodash';

import {Row} from '../../styles';
import {Error} from './style';

const ErrorMessage = ({error}) => {
    if(error) {
    return (
        <Row>
            <Error>{error}</Error>
        </Row>
    )
    }
    return(
        null
    )
}

export default memo(ErrorMessage, isEqual);