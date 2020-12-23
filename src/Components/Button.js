import React from 'react';
import {useSelector} from 'react-redux';

// Selector
import {goToSelector} from '../redux/selectors';

// Css
import '../Css/Components/Button.css';

const ShowMoreBtn = ({text, path, color, history}) => {
    const goTo = useSelector(goToSelector);

    return (
        <div className = {`btnProject${color}`} onClick = {() => {goTo(path, history)}} >
            {text}
            <div className = 'arrow' >
            </div>
        </div>
    )
}

export default ShowMoreBtn;