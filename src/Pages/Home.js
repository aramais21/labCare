import React, { useState } from 'react';

// Components
import Branches from '../Components/Branches';
import ProjectsList from '../Components/ProjectsList';
import SectionDeviderText from '../Components/SectionDeviderText';
import SectionDeviderImage from '../Components/SectionDeviderImage';

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
            <SectionDeviderText text = {'Our projects'} color = {'orange'} />
            <ProjectsList/>
            <SectionDeviderImage />
            <SectionDeviderText text =  {'Our partners'} color = {'green'} />
        </div>
    )
}

export default Home;