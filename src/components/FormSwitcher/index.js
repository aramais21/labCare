import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectProductStatus, selectProducts, fecthProducts} from '../../redux/slices/products';

import {Image} from '../../styles';
import {Form, Input, Button, ProductText, Product, ProductActive, Row} from './style';

const FormSwitcher = ({name, formValue, submitHandler}) => {

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
    })

    switch(name) {
        case 'Slide':
            return (
            <Form>
                <Input onChange = {changeHandler} value = {formData.img?formData.img:''} name = 'img' type = 'text' placeholder = 'img url' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Partner':
            return (
            <Form>
                <Input onChange = {changeHandler} value = {formData.logo?formData.logo:''} name = 'logo' type = 'text' placeholder = 'logo url' ></Input>
                <Input onChange = {changeHandler} value = {formData.url?formData.url:''} name = 'url' type = 'text' placeholder = 'url to their website' ></Input>
                <Input onChange = {changeHandler} value = {formData.name?formData.name:''} name = 'name' type = 'name' placeholder = 'their name' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Product':
            return (
            <Form>
                <Input onChange = {changeHandler} value = {formData.title?formData.title:''} name = 'title' type = 'text' placeholder = 'product name' ></Input>
                <Input onChange = {changeHandler} value = {formData.src?formData.src:''} name = 'src' type = 'text' placeholder = 'the image that will be displayed as a small square'  ></Input>
                <Input onChange = {changeHandler} value = {formData.mainPic?formData.mainPic:''} name = 'mainPic' type = 'text' placeholder = 'the main image' ></Input>
                <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
            </Form>
            );
        case 'Category':
            return (
            <>
                <Row>
                    {products.map((product) => {
                        if(product._id === productId) {
                            return (
                                <ProductActive key = {product._id} >
                                    <ProductText>{product.title}</ProductText>
                                    <Image width = '200px' height = '200px' src = {product.src} />
                                </ProductActive>
                            );
                        }
                        return (
                            <Product key = {product._id} onClick = {() => setProductId(product._id)} >
                                <ProductText>{product.title}</ProductText>
                                <Image width = '200px' height = '200px' src = {product.src} ></Image>
                            </Product>
                        );
                    })}
                </Row>
                <Form>
                    <Input onChange = {changeHandler} value = {formData.title?formData.title:''} name = 'title' type = 'text' placeholder = 'category name' ></Input>
                    <Input onChange = {changeHandler} value = {formData.src?formData.src:''} name = 'src' type = 'text' placeholder = 'img url' ></Input>
                    <Input onChange = {changeHandler} value = {formData.desc?formData.desc:''} name = 'desc' type = 'text-field' placeholder = 'description' ></Input>
                    <Button onClick = {() => submitHandler({...formData, productID: productId}, setFormData)} >Submit</Button>
                </Form>
            </>
            );
        case 'Social Link':
            return (
                <Form>
                    <Input onChange = {changeHandler} value = {formData.socialNetwork?formData.socialNetwork:''} name = 'socialNetwork' type = 'text' placeholder = 'social network name' ></Input>
                    <Input onChange = {changeHandler} value = {formData.link?formData.link:''} name = 'link' type = 'text' placeholder = 'link to the network' ></Input>
                    <Input onChange = {changeHandler} value = {formData.imageUrl?formData.imageUrl:''} name = 'imageUrl' type = 'text' placeholder = 'icon url should be png' ></Input>
                    <Button onClick = {() => submitHandler(formData, setFormData)} >Submit</Button>
                </Form>
            );
        default:
            return <> </>;
    }
}

export default FormSwitcher;