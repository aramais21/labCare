import React from 'react';
import {NavLink} from 'react-router-dom';

const MenuItem = ({to, name}) => {
    return(
    <NavLink to = {to}  className = 'ItemOutter' >
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

export default MenuItem;