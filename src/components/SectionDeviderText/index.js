import React from 'react';

// Css
import './style.css';

const SectionDevider = ({text, color}) => {
    return (
        <div className = 'cont'>
            <div className = {`text ${color}Text`} > {text} </div>
            <div className = {`devider ${color}Devider`} ></div>
        </div>
    )
}

export default SectionDevider;