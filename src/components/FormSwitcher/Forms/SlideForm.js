import React from 'react';

import {Input} from '../../../styles';
import {Form, Button} from '../style';

const SlideForm = ({changeHandler, submitHandler, formData}) => {
    return (
        <Form>  
            <Input onChange = {changeHandler} value = {formData.socialNetwork?formData.socialNetwork:''} name = 'socialNetwork'  placeholder = 'social network name' ></Input>
            <Input onChange = {changeHandler} value = {formData.link?formData.link:''} name = 'link'  placeholder = 'link to the network' ></Input>
            <Input onChange = {changeHandler} value = {formData.imageUrl?formData.imageUrl:''} name = 'imageUrl'  placeholder = 'icon url should be png' ></Input>
            <Button onClick = {submitHandler} >Submit</Button>
        </Form>
    )
}

export default SlideForm;