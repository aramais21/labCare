import React from 'react';

import Branch from '../Branch';

import './style.css';

import yeast from '../../../../assets/yeast.png';
import mining from '../../../../assets/mining.png';
import training from '../../../../assets/training.png';
import equipment from '../../../../assets/equipment.png';

const Branches = () => {
    return (
        <div className = 'ImgCont' >
            <div className = 'ImgContInfo' >
                <p className = 'ImgContWelcome' >Welcome to LabCare</p>
                <p className = 'ImgContMoto' > lab and mining related stuff</p>
                <div className = 'ImgContBranches' >
                    <Branch src = {yeast} text = 'Yeast and Yeast derivatives' alt = 'icon' ></Branch>
                    <Branch src = {equipment} text = 'Laboratory equipment and consumables' alt = 'icon' ></Branch>
                    <Branch src = {mining} text = 'Mining and exploration' alt = 'icon' ></Branch>
                    <Branch src = {training} text = 'Trainings and consultancy' alt = 'icon' ></Branch>
                </div>
            </div>
        </div>
    )
}

export default Branches