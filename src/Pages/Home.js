import React, { useState } from 'react';

import Branches from '../Components/Branches';

const Home = () => {
    const [sections, setSections] = useState(['Branches', 'Projects', 'Companies', 'MailCollector']);
    
    // A function that should determine what section to load
    const sectionPredictor = (item) => {
        switch(item) {
            case 'Branches':
                return <Branches></Branches>;
            default: 
                return;
        }   
    }

    return(
        <div className = 'HomeMain' >
            {sections.map((item) => {
                return sectionPredictor(item);
            })}
        </div>
    )
}

export default Home;