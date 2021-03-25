import React from 'react';

import Layout from '../Layout';
import SectionDevider from '../SectionDeviderText'

import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';


import './style.css';

const OurActivites = () => {
    return (
        <Layout background = 'green' >
            <SectionDevider text = 'Our Activites' secondaryText = 'text text text text text' textColor = {WHITE_HEX} backgroundColor={GREEEN_HEX} />
        </Layout>
    )
}

export default OurActivites;