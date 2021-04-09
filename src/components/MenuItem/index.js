import React, { memo } from 'react';
import {NavLink} from 'react-router-dom';
import {isEqual} from 'lodash';

// Css
import './style.css';

const MenuItem = ({to, name, onClick}) => {
    return(
    <NavLink to = {to}  className = 'ItemOutter' onClick = {onClick?onClick:() => {}} >
        <div className = 'ItemCross' >
            <span className = 'CrossStick' ></span>
            <span className = 'CrossStick' ></span>
        </div>
        <div className = 'ItemText' >
            {name}
        </div>
    </NavLink>
    );
}

export default memo(MenuItem, isEqual);