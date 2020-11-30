import React, { useState } from 'react';

// Components
import Branch from './Branch';

// Css
import '../Css/Components/Branches.css'

// Images
import yeast from '../assets/yeast.png';
import mining from '../assets/mining.png';
import training from '../assets/training.png';
import equipment from '../assets/equipment.png';

const Branches = () => {
    const [data, setData] = useState([
        { image: yeast, text: 'Yeast and Yeast derivatives'},
        { image: equipment, text: 'Yeast and Yeast derivatives'},
        { image: yeast, text: 'Yeast and Yeast derivatives'},
        { image: yeast, text: 'Yeast and Yeast derivatives'},
    ])
    return (
        <div className = 'ImgCont' >
            {/* <img className = 'ImgContBack'  src = 'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300062/96537002-scientist-with-plant-in-scientific-laboratory-mature-woman-holding-test-tube-with-plant-seedling-wor.jpg' ></img> */}
            <div className = 'ImgContInfo' >
                <p className = 'ImgContWelcome' >Welcome to LabCare</p>
                <p className = 'ImgContMoto' > lab and mining related stuff</p>
                <div className = 'ImgContBranches' >
                    <Branch src = {yeast} text = 'Yeast and Yeast derivatives' ></Branch>
                    <Branch src = {equipment} text = 'Laboratory equipment and consumables' ></Branch>
                    <Branch src = {mining} text = 'Mining and exploration' ></Branch>
                    <Branch src = {training} text = 'Trainings and consultancy' ></Branch>
                </div>
            </div>
        </div>
    )
}

export default Branches