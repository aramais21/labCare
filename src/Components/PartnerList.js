import React, {useState, useEffect, memo} from 'react';
import {useHistory} from 'react-router-dom';
import {isEqual} from 'lodash';
import {produce} from 'immer';

import Partner from './Partner.js';

import '../Css/Components/PartnerList.css';

const PartnerList = ({timeInterval}) => {
    const history = useHistory();    
    const [data, setData] = useState([
        {
            id: 0,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo0'
        },
        {
            id: 1,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo1'
        },
        {
            id: 2,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo2'
        },
        {
            id: 3,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo3'
        },
        {
            id: 4,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo4'
        },
        {
            id: 5,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo5'
        },
        {
            id: 6,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo6'
        },
        {
            id: 7,
            logo: 'https://assets.stickpng.com/thumbs/58406746657b0e0e08612e45.png',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork',
            alt: 'logo7'
        },
    ]);

    const [movedFrom, setMovedFrom] = useState('left');

    const reducer = produce((action) => {
        switch (action) {
            case 'increase':
                setMovedFrom('left');
                setData((prev) => {
                    const lastElem = prev[prev.length-1]
                    const rest = prev.slice(0, prev.length-1);
                    return [lastElem, ...rest];
                })
                break;
            case 'decrease':
                setMovedFrom('right');
                setData((prev) => {
                    const firstElem = prev[0];
                    const rest = prev.slice(1);
                    return [...rest, firstElem];
                })
                break;
            default:
                break;
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            reducer('increase');
        }, timeInterval);
        return () => {
            clearInterval(interval)
        }
    },[data]);

    console.log(`render the partnerList`);
    return (
        <>
        <div className = 'listWrapper' >
            <div className = 'leftArrow' onClick = {() => reducer('decrease')} >
                <button className = 'controller' ></button>
            </div>
            <div className = {`list`}  >
                {data.map((item,index) => {
                    return <Partner {...item} key = {item.id} index = {index} movedFrom = {movedFrom}/>
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