import React from 'react';

// Css
import '../Css/Components/SectionDevider.css'

const SectionDevider = ({main, secondary}) => {
    return (
        <div className = 'cont' >
            <div className = 'mainText' > {main} </div>
            <div className = 'devider' ></div>
            <div className = 'secondaryText' > {secondary} </div>
        </div>
    )
}

export default SectionDevider;