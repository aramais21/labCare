import React from 'react';
import {useSelector} from 'react-redux';

import {socLinksSelector} from '../../redux/selectors';

import './style.css';

const Footer = () => {
    const socLinks = useSelector(socLinksSelector);

    return(
        <div className = 'footerWrapper' >
            <div className = 'topCont' >
                <div className = 'followUsCont'>
                    <div className = 'followUsText' > Follow Us </div>
                    <div className = 'icons' >
                        {socLinks.map((item) => {
                                return <a key = {item.id} className = 'linkExternal' target = '_blank' rel="noopener noreferrer" href = {item.link}><img className = 'linkImg' src = {item.imageUrl} alt = {item.socialNetwork}/></a>
                        })}
                    </div>                   
                </div>
                <div className = 'emailCollector' >
                    <div className = 'emailText' >subscribe to our news letter</div>
                    <input className = 'emailInput' placeholder = 'EMAIL' ></input>
                    <div className = 'emailBtn' >send</div>
                </div>
                <div className = 'arrowUp' onClick = {() => window.scrollTo(0,0)}>
                    <img className = 'arrowUpImg' alt = 'arrow pointing upwards' src = 'https://www.freeiconspng.com/uploads/black-circle-arrow-up-icon-31.png'/>
                </div>
            </div>
            <div className = 'bottomCont' >
                <div className = 'rightsCont' >@2021 LabCare Ltd - | all rights reserved</div>
                <div className = 'mention' >created by aramaisay</div>
            </div>
        </div>
    )
}

export default Footer;