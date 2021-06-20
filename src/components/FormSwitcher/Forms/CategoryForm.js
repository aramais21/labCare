import React, { memo, useCallback, useState, useRef} from 'react';
import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';

import InputWDropbox from '../../InputWDropBox';
import { selectProducts } from '../../../redux/slices/products';
import useTranslate from '../../.../Hooks/useTranslate';
import { langEnum } from '../../../config/constants';

import {Input, Image} from '../../../styles';
import {Form, Button, Row, Product, ProductText, Chips, Chip} from '../style';

const CategoryForm = ({changeHandler, submitHandler, formData, setFormData, isUsedFor}) => {
    const [productId,setProductId] = useState(null);
    const products = useSelector(selectProducts);
    const [selectedLinkId, setSelectedLinkId] = useState();
    const [links, setLinks] = useState(formData?.links||[]);
    const [linkForm, setLinkForm] = useState(formData?.links?.find((link) => link._id === selectedLinkId), [formData, selectedLinkId] || {});
    const {translate} = useTranslate();
    const linkUrlRef = useRef();
    
    const submitLinkHandler = () => {
        if(selectedLinkId) {
            const pastLinks = formData?.links.filter((link) => link._id !== selectedLinkId);
            setLinks([...pastLinks, {...linkForm, url: linkUrlRef.current.value}]);
            return ;
        }

        setLinks(formData.links?[ ...formData.links, {...linkForm, url: linkUrlRef.current.value}]: [{...linkForm, url: linkUrlRef.current.value}]);
        setLinkForm({text:[{lang: langEnum.ENG, text: ''},{lang: langEnum.ARM, text: ''},{lang: langEnum.RUS, text: ''},]});
        linkUrlRef.current.value = '';
    }

    const renderChips = useCallback(() => {
        if(links.length<=0) {
            return null
        }
        return (
            <Chips>
                {links.map((link) => <Chip key={link.text[1].text + link} onClick={() => setSelectedLinkId(link._id)}>{link.url}</Chip>)}
            </Chips>
        )
    }, [links])

 
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
                {renderChips()}
                <InputWDropbox inputType = 'text' name = 'text' placeholder = 'link text' setFormData = {setLinkForm} value = {linkForm?.text} ></InputWDropbox>
                <Input ref={linkUrlRef} value = {selectedLinkId?linkForm.url:undefined} name = 'url'  placeholder = 'link url' ></Input>
                <Button onClick={submitLinkHandler}>Add Link</Button>
                <Button onClick = {() => submitHandler({...formData, productID: productId, links}, setFormData)} >Submit</Button>
            </Form>
        </>
    )
}

export default memo(CategoryForm, isEqual);