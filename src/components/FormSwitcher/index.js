import React, { useEffect, useState, memo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {isEqual} from 'lodash';

import {selectProductStatus, fecthProducts} from '../../redux/slices/products';

import SocialLinkForm from './Forms/SocialLinkForm';
import PartnerForm from './Forms/PartnerForm';
import ProductForm from './Forms/ProductForm';
import CategoryForm from './Forms/CategoryForm';

const FormSwitcher = ({name, formValue, submitHandler, isUsedFor}) => {
    const dispatch = useDispatch();
    const status = useSelector(selectProductStatus);
    const [formData,setFormData] = useState({...formValue});

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = () => submitHandler(formData, setFormData);

    useEffect(() => {
        if(status === 'idle' && name === 'Category') {
            dispatch(fecthProducts());
            return
        }
        return () => {
            
        }
    },[status, name, dispatch])

    switch(name) {
        case 'Slide':
            return (
                <SocialLinkForm changeHandler={changeHandler} formData={formData} submitHandler={onSubmit} />
            );
        case 'Partner':
            return (
                <PartnerForm changeHandler={changeHandler} formData={formData} submitHandler={onSubmit} />
            );
        case 'Product':
            return (
                <ProductForm changeHandler={changeHandler} formData={formData} submitHandler={onSubmit} setFormData={setFormData}/>
            );
        case 'Category':
            return (
                <CategoryForm changeHandler={changeHandler} formData={formData} submitHandler={submitHandler} setFormData={setFormData} isUsedFor={isUsedFor}/>
            );
        case 'Social Link':
            return (
                <SocialLinkForm changeHandler={changeHandler} formData={formData} submitHandler={onSubmit}/>
            );
        default:
            return <> </>;
    }
}

export default memo(FormSwitcher, isEqual);