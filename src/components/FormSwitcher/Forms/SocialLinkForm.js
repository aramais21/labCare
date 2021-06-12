import React from 'react';

import {Input} from '../../../styles';
import {Form, Button} from '../style';

const SocialLinkForm = ({changeHandler, submitHandler, formData}) => {
    return (
        <Form>
            <Input onChange = {changeHandler} value = {formData.img?formData.img:''} name = 'img'  placeholder = 'img url' ></Input>
            <Button onClick = {submitHandler} >Submit</Button>
        </Form>
    )
}

export default SocialLinkForm;