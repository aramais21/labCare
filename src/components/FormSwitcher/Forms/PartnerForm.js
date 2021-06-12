import React from 'react';

import {Input} from '../../../styles';
import {Form, Button} from '../style';

const PartnerForm = ({changeHandler, submitHandler, formData}) => {
    return (
        <Form>
            <Input onChange = {changeHandler} value = {formData.logo?formData.logo:''} name = 'logo'  placeholder = 'logo url' ></Input>
            <Input onChange = {changeHandler} value = {formData.url?formData.url:''} name = 'url'  placeholder = 'url to their website' ></Input>
            <Input onChange = {changeHandler} value = {formData.name?formData.name:''} name = 'name' type = 'name' placeholder = 'their name' ></Input>
            <Button onClick = {submitHandler} >Submit</Button>
        </Form>
    )
}

export default PartnerForm;