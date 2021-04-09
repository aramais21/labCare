import React, { memo } from 'react';
import { isEqual } from 'lodash';

import {Row} from '../../styles';
import {SelectType} from './style';

const Selection = ({clickHandler, paths}) => {

    return (
        <Row>
            {paths.map((path) => {
                return (
                    <SelectType key = {`${path.name}${path.path}`} onClick = {() => clickHandler(path.name)}>{path.name}</SelectType>
                );
            })}
        </Row>
    );
}

export default memo(Selection, isEqual);