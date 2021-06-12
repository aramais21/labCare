import React, {useMemo, useState} from 'react';

import Layout from '../../../components/Layout';
import FormSwitcher from '../../../components/FormSwitcher';
import ErrorMessage from '../../../components/ErrorMessage';
import Selection from '../../../components/Selection';

import { postData } from '../../../helpers/fecth';

import { GREEEN_HEX } from '../../../config/constants';
import update from '../../../helpers/update';
import { useDispatch } from 'react-redux';

const Add = () => {
    const dispatch = useDispatch();
    const paths = useMemo(() => [
        {name: 'Slide', path: '/slide'},
        {name: 'Partner', path: '/partner'},
        {name: 'Product', path: '/product'},
        {name: 'Category', path: '/category'},
        {name: 'Social Link', path: '/socialLink'},
    ],[]);
    const [currName, setCurrName] = useState(null);
    const [error, setError] = useState('');

    const submit = async (formData, setFormData) => {
        const neededPath = paths.find(({name}) => name === currName );
        const res = await postData(neededPath.path, formData)
        if (res.error) {
            setError(res.error);
        }
        else {
            setError('');
        }
        setFormData({})
        update(currName, dispatch)
    }

    const clickHandler = (name) => {
        setCurrName(name);
        setError('');
    }

    return (
        <Layout background = {GREEEN_HEX} justifyContent = 'center' fixedHeight='140vh' >
            <Selection clickHandler = {clickHandler} paths = {paths} ></Selection>
            {currName===null?
                null
            :
                <FormSwitcher name = {currName} submitHandler = {submit}></FormSwitcher>
            }
            <ErrorMessage error = {error} ></ErrorMessage>
        </Layout>
    )
    
}

export default Add;