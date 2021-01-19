import React from 'react';

import SectionDeviderText from '../../../../components/SectionDeviderText';

import marker from '../../../../assets/marker.png';
import './style.css';

const OurLocations = () => {
    return (
        <div className = 'ourLocMain'>
            <SectionDeviderText text = ' our locations' color = 'green' />
            <div className = 'locWrapper' >
                <div className = 'locCont' >
                    <iframe className = 'locFrame'  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1524.1065813931411!2d44.51671108947271!3d40.18206935923676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x406abce4a0ce7b77%3A0xcade158796e5c69b!2sHin%20Yerevantsi%20St%2C%20Yerevan%2C%20Armenia!3m2!1d40.182231!2d44.515815599999996!5e0!3m2!1sen!2s!4v1611057477763!5m2!1sen!2s" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <div className = 'locInfo' >
                        <div className = 'locText' >location</div>
                        <div className = 'locDesc' >consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore </div>
                    </div>
                </div>
                <div className = 'locCont'>
                    <img className = 'marker'  src = {marker} />
                    <div className = 'locInfo locInfoRight' >
                        <div className = 'locText' >location</div>
                        <div className = 'locDesc' >Lorem ipsum dolor sit amet, </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurLocations;