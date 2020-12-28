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
        }
    ];

    const reducer = (action) => {
        switch (action) {
            case 'increase':
                if(data.length>itemIndex) {
                    setItemIndex((prev) => prev + 1);
                    console.log('added')
                }
                else {
                    setItemIndex(0)
                }
                console.log('+')       
                break;
            case 'decrease':
                if(itemIndex > 1) {
                    setItemIndex((prev) => prev - 1);
                }
                else {
                    setItemIndex(data.length-1);
                }
                console.log('-')
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            reducer('increase');
        }, timeInterval);
        return () => {
            clearInterval(interval)
        }
    },[itemIndex]);

    console.log(`render the partnerList ${itemIndex}`);
    return (
        <>
        <div className = 'listWrapper' >
            <div className = 'leftArrow' onClick = {() => reducer('decrease')} >
                <button className = 'controller' ></button>
            </div>
            <div className = {`list center`}  >
                {data.map((item,index) => {
                    return <Partner {...item} key = {item.id} index = {index} />
                })}
            </div>
            <div className = 'rightArrow' onClick = {() => reducer('increase')} >
                <button className = 'controller' ></button>
            </div>
        </div>
        </>
    )
}

export default memo(PartnerList, isEqual);