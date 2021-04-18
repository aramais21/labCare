import React, { useEffect, useState, memo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {isEqual} from 'lodash';

import {selectProductStatus, selectProducts, fecthProducts} from '../../redux/slices/products';
import useTranslate from '../../Hooks/useTranslate';

import {Image, Input} from '../../styles';
import {Form, Button, ProductText, Product, Row} from './style';
import InputWDropbox from '../InputWDropBox';

const FormSwitcher = ({name, formValue, submitHandler, isUsedFor}) => {
    const {translate} = useTranslate();
    const dispatch = useDispatch();
    const status = useSelector(selectProductStatus);
    const products = useSelector(selectProducts);
    const [formData,setFormData] = useState({...formValue});
    const [productId,setProductId] = useState(null);

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

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
            <Form>
                <Input onChange = {changeHandler} value = {formData.img?formData.img:''} name = 'img'  placeholder = 'img url' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Partner':
            return (
            <Form>
                <Input onChange = {changeHandler} value = {formData.logo?formData.logo:''} name = 'logo'  placeholder = 'logo url' ></Input>
                <Input onChange = {changeHandler} value = {formData.url?formData.url:''} name = 'url'  placeholder = 'url to their website' ></Input>
                <Input onChange = {changeHandler} value = {formData.name?formData.name:''} name = 'name' type = 'name' placeholder = 'their name' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Product':
            return (
            <Form>
                <InputWDropbox name = 'title' inputType = 'text' placeholder = 'product name' setFormData = {setFormData} value = {formData.title?formData.title:undefined} ></InputWDropbox>
                <Input onChange = {changeHandler} value = {formData.src?formData.src:''} name = 'src'  placeholder = 'the image that will be displayed as a small square'  ></Input>
                <Input onChange = {changeHandler} value = {formData.mainPic?formData.mainPic:''} name = 'mainPic'  placeholder = 'the main image' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Category':
            return (
            <>
                {isUsedFor !== 'update'?
                    <Row>
                    {products.map((product) => {
                        return (
                            <Product isActive = {product._id === productId} key = {product._id} onClick = {product._id !== productId?() => setProductId(product._id):() => {}} >
                                <ProductText>{translate(product.title)}</ProductText>
                                <Image width = '200px' height = '200px' src = {product.src} ></Image>
                            </Product>
                        );
                    })}
                    </Row>
                :
                    null
                }
                
                <Form>
                    <InputWDropbox name = 'title' inputType = 'text' placeholder = 'category name' setFormData = {setFormData} value = {formData.title?formData.title:undefined} ></InputWDropbox>
                    <Input onChange = {changeHandler} value = {formData.src?formData.src:''} name = 'src'  placeholder = 'img url' ></Input>
                    <InputWDropbox name = 'desc' placeholder = 'description' setFormData = {setFormData} value = {formData.desc?formData.desc:undefined} ></InputWDropbox>
                    <Button onClick = {() => submitHandler({...formData, productID: productId}, setFormData)} >Submit</Button>
                </Form>
            </>
            );
        case 'Social Link':
            return (
                <Form>
                    <Input onChange = {changeHandler} value = {formData.socialNetwork?formData.socialNetwork:''} name = 'socialNetwork'  placeholder = 'social network name' ></Input>
                    <Input onChange = {changeHandler} value = {formData.link?formData.link:''} name = 'link'  placeholder = 'link to the network' ></Input>
                    <Input onChange = {changeHandler} value = {formData.imageUrl?formData.imageUrl:''} name = 'imageUrl'  placeholder = 'icon url should be png' ></Input>
                    <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
                </Form>
            );
        default:
            return <> </>;
    }
}

export default memo(FormSwitcher, isEqual);