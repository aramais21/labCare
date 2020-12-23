import React, {useState, useEffect, memo} from 'react';
import {useHistory} from 'react-router-dom';
import {isEqual} from 'lodash';

import '../Css/Components/PartnerList.css';

const PartnerList = ({timeInterval}) => {
    const history = useHistory();
    const [itemIndex, setItemIndex] = useState(0);

    const data = [
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
        },
        {
            id: Math.floor(Math.random()*10000),
            logo: 'https://lh3.googleusercontent.com/proxy/Cdhgjpgnp8R6W9oKm8lmBjxtCGVEhTnARovOc7rmhr-df7GGtByK9DoApDZOFYKstYw6CBaeAw83-HuftayvyaNPT51Odixycu24CqXRvsTPmw',
            url: 'https://www.youtube.com/watch?v=WjOk3CjTbGo&ab_channel=IztvNetwork'
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
                list
            </div>
            <div className = 'rightArrow' >
                <button className = 'controller' ></button>
            </div>
        </div>
        </>
    )
}

export default memo(PartnerList, isEqual);