import React from 'react';
import Layout from '../../../components/Layout';

import {MainText} from './style';

import { GREEEN_HEX } from '../../../config/constants';

const Main = () => {
    return (
        <Layout background = {GREEEN_HEX} justifyContent = 'center' >
            <MainText>
                Welcome to the admin page,
                here you will be able to modify dynamic data.
                To start your journey as an admin I would advise you to
                open any of the 3 pages in the navbar
            </MainText>
        </Layout>
    )
}

export default Main;