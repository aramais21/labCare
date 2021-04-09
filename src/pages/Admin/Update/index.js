import React, {useMemo, useState} from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../../../components/Layout';
import ErrorMessage from '../../../components/ErrorMessage';
import Selection from '../../../components/Selection';
import DataRow from '../../../components/DataRow';
import FormSwitcher from '../../../components/FormSwitcher';

import { updateData } from '../../../helpers/fecth';

import update from '../../../helpers/update';

import { GREEEN_HEX } from '../../../config/constants';

const Update = () => {
        const paths = useMemo(() => [
            {name: 'Slide', path: '/slide'},
            {name: 'Partner', path: '/partner'},
            {name: 'Product', path: '/product'},
            {name: 'Category', path: '/category'},
            {name: 'Social Link', path: '/socialLink'},
        ],[]);
        const dispatch = useDispatch();
        
        const [currName, setCurrName] = useState(null);
        const [error, setError] = useState('');
        const [chosenItem, setChosenItem] = useState(null);
    
        const submit = async (formData, setFormData) => {
            const neededPath = paths.find(({name}) => name === currName );
            const res = await updateData(neededPath.path, chosenItem._id, formData);
            if (res.error) {
                setError(res.error);
            }
            else {
                setError('');
            }
            setChosenItem(null);
            update(currName, dispatch);
            setFormData({});
        }
    
        const selectHandler = (name) => {
            setCurrName(name);
            setError('');
            setChosenItem(null);
        }
        
        const clickHandler = (item) => {
            setChosenItem(item);
        }
    
        return (
            <Layout background = {GREEEN_HEX} justifyContent = 'center' marginTop = '5.625rem'>
                <Selection clickHandler = {selectHandler} paths = {paths} ></Selection>
                {currName===null?
                    null
                :
                    <>
                        <DataRow name = {currName} onClick = {clickHandler} ></DataRow>
                        {chosenItem?
                            <FormSwitcher name = {currName} formValue = {chosenItem} submitHandler = {submit} ></FormSwitcher>
                        :
                            null
                        }
                    </>
                }
                <ErrorMessage error = {error} ></ErrorMessage>
            </Layout>
        )
    
}

export default Update;