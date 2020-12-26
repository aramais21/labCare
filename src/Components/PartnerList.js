import React, {useState, useEffect, memo} from 'react';
import {useHistory} from 'react-router-dom';
import {isEqual} from 'lodash';

import Partner from './Partner.js';

import '../Css/Components/PartnerList.css';

const PartnerList = ({timeInterval}) => {
    const history = useHistory();
    const [itemIndex, setItemIndex] = useState(0);

    const data = [
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if(data.length>itemIndex) {
                setItemIndex((prev) => prev + 1);
                console.log('added')
            }
            else {
                setItemIndex(0)
            }
        }, timeInterval);
        return () => {
            clearInterval(interval)
        }
    },[itemIndex])
    console.log(`render the partnerList ${itemIndex}`);
    return (
        <>
        <div className = 'listWrapper' >
            <div className = 'leftArrow' >
                <button className = 'controller' ></button>
            </div>
            <div className = {`list center`}  >
                {data.map((item,index) => {
                    return <Partner {...item} key = {item.id} index = {index} />
                })}
            </div>
            <div className = 'rightArrow' >
                <button className = 'controller' ></button>
            </div>
        </div>
        </>
    )
}

export default memo(PartnerList, isEqual);