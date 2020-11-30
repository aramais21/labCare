import React, { useState } from 'react';

// Components
import Branches from '../Components/Branches';
import ProjectsList from '../Components/ProjectsList';
import SectionDevider from '../Components/SectionDevider';

// Css

import '../Css/Pages/Home.css'

const Home = () => {
    // const [sections, setSections] = useState(['Branches', 'Projects', 'Companies', 'MailCollector']);
    
    // A function that should determine what section to load
    // const sectionPredictor = (item) => {
    //     switch(item) {
    //         case 'Branches':
    //             return <Branches></Branches>;
    //         default: 
    //             return;
    //     }   
    // }

    return(
        <div className = 'HomeMain' >
            {/* {sections.map((item) => {
                return sectionPredictor(item);
            })} */}
            <Branches/>
            <SectionDevider main = {"Our projects"} secondary = {"See our works and become asured of their quality "} />
            <ProjectsList/>
        </div>
    )
}

export default Home;