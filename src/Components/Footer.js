import React from 'react';

import '../Css/Components/Footer.css';

const Footer = () => {

    const data = {
        socialLinks: [
            {
                socialNetwork: 'facebook',
                link: 'https://www.facebook.com/',
                imageUrl: 'https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png'
            },
            {
                socialNetwork: 'instagram',
                link: 'https://www.instagram.com/',
                imageUrl: 'https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/instagram-colourful-icon.png'
            },
            {
                socialNetwork: 'twitter',
                link: 'https://twitter.com/?lang=en',
                imageUrl: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'
            }
        ]
    }

    return(
        <div className = 'footerWrapper' >
            <div className = 'topCont' >
                <div className = 'followUsCont'>
                    <div className = 'followUsText' > Follow Us </div>
                    <div className = 'icons' >
                        {data.socialLinks.map((item, index) => {
                                return <a className = 'linkExternal' target = '_blank' href = {item.link}><img className = 'linkImg' src = {item.imageUrl} alt = {item.socialNetwork}/></a>
                        })}
                    </div>                   
                </div>
                <div className = 'emailCollector' >
                    <div className = 'emailText' >subscribe to our news letter</div>
                    <input className = 'emailInput' placeholder = 'EMAIL' ></input>
                    <div className = 'emailBtn' >send</div>
                </div>
                <div className = 'arrowUp' onClick = {() => window.scrollTo(0,0)}>
                    <img className = 'arrowUpImg'  src = 'https://www.freeiconspng.com/uploads/black-circle-arrow-up-icon-31.png'/>
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