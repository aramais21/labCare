import React, {useMemo, useState} from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../../../components/Layout';
import ErrorMessage from '../../../components/ErrorMessage';
import Selection from '../../../components/Selection';
import DataRow from '../../../components/DataRow';

import { deleteData } from '../../../helpers/fecth';

import { Row } from '../../../styles';
import {Button} from './style';

import { GREEEN_HEX } from '../../../config/constants';
import update from '../../../helpers/update';

const Delete = () => {
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
    
        const submit = async () => {
            const neededPath = paths.find(({name}) => name === currName );
            const res = await deleteData(neededPath.path, chosenItem._id);
            if (res.error) {
                setError(res.error);
            }
            setChosenItem(null);
            update(currName, dispatch)
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
            <Layout background = {GREEEN_HEX} justifyContent = 'center' >
                <Selection clickHandler = {selectHandler} paths = {paths} ></Selection>
                {currName===null?
                    null
                :
                    <>
                        <DataRow name = {currName} onClick = {clickHandler} ></DataRow>
                        <Row><Button chosenItem = {chosenItem} onClick = {chosenItem!==null?submit:() => {}} >Submit</Button></Row>
                    </>
                }
                <ErrorMessage error = {error} ></ErrorMessage>
            </Layout>
        )
    
}

export default Delete;