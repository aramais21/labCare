import React from 'react';

import SectionDeviderText from '../../../../components/SectionDeviderText';

import potrait from '../../../../assets/potrait.jpg';
import './style.css';

const OurLeadership = () => {
    const data = [
        { _id: Math.floor(Math.random()*10000), name: 'Anun Anunyan', proffession: 'something phd', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis elit in urna pharetra, et maximus mi tincidunt. Mauris nisi velit, laoreet ac urna vitae' },
        { _id: Math.floor(Math.random()*10000), name: 'Anun Anunyan', proffession: 'something phd', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis elit in urna pharetra, et maximus mi tincidunt. Mauris nisi velit, laoreet ac urna vitae' },
        { _id: Math.floor(Math.random()*10000), name: 'Anun Anunyan', proffession: 'something phd', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis elit in urna pharetra, et maximus mi tincidunt. Mauris nisi velit, laoreet ac urna vitae' },
    ]

    return(
        <div className = 'ourLeadMain'>
            <SectionDeviderText text = 'our leadership' color = 'white'/>
            <div className = 'ourLeadWrapper' >
            {data.map((item) => {
                return (
                    <div className = 'ourLead'  key = {item._id}>
                        <img src = {potrait} className = 'potrait'/>
                        <div className = 'nameSurname'>{item.name}</div>
                        <div className = 'deviderLead' />
                        <div className = 'proffesion'>{item.proffession}</div>
                        <div className = 'aboutLead'>{item.about}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default OurLeadership;