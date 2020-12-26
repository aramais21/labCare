import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {goToSelector} from '../redux/selectors';

import '../Css/Components/Partner.css';

const Partner = ({logo, url, alt, index}) => {
    const goTo = useSelector(goToSelector);
    const history = useHistory();
    return (
        <div className = {`partnerCont partnerCont${index%2?'Green':'Orange'}`} onCick = {() => {goTo(url, history);}} >
            <div className = 'partnerSlider' >{alt}</div>
            <img className = 'partnerImg' src = {logo} alt = {alt} />
        </div>
    );
}

export default Partner;