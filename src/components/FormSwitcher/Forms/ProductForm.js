import React from 'react';

import InputWDropbox from '../../InputWDropBox';

import {Input} from '../../../styles';
import {Form, Button} from '../style';

const ProductForm = ({changeHandler, submitHandler, formData, setFormData}) => {
    return (
        <Form>
            <InputWDropbox name = 'title' inputType = 'text' placeholder = 'product name' setFormData = {setFormData} value = {formData.title?formData.title:undefined} ></InputWDropbox>
            <Input onChange = {changeHandler} value = {formData.src?formData.src:''} name = 'src'  placeholder = 'the image that will be displayed as a small square'  ></Input>
            <Input onChange = {changeHandler} value = {formData.mainPic?formData.mainPic:''} name = 'mainPic'  placeholder = 'the main image' ></Input>
            <Button onClick = {submitHandler} >Submit</Button>
        </Form>
    )
}

export default ProductForm;