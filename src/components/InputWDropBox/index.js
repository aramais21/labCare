import React, { useState, useMemo, useEffect, memo } from 'react';
import { isEqual } from 'lodash';

import { langEnum } from '../../config/constants';

import {Wrapper, SmallInput, DropBox, Option, TextArea} from './style';

const InputWDropbox = ({inputType = 'text-area', onChange, name, placeholder = 'text', value, setFormData}) => {

    const [data, setData] = useState(value?value:Object.entries(langEnum).map((item)=> ({lang: item[0], text: ''})));
    const [dropBoxData, setDropBoxData] = useState(langEnum.ENG);
    const currentTranslation = useMemo(() => {
        return data.find(({lang}) => lang === dropBoxData)
    },[data, dropBoxData]);

    useEffect(() => {
        setFormData((prev) => ({...prev,[name]: data}))
    },[data, setFormData, name])


    const inputChangeHandler = (e) => {
        setData(data.map(({lang, text}) => {
            if(lang === dropBoxData) {
                return {lang, text: e.target.value}
            }
            return {lang, text};
        }))
    }

    const dropBoxChange = (e) => {
        setDropBoxData(e.target.value);
    }

    return (
        <Wrapper>
            {inputType === 'text-area'?
            <TextArea
                value = {currentTranslation?currentTranslation.text:''} 
                type = {inputType} 
                onChange = {onChange?onChange:inputChangeHandler} 
                name = {name} 
                placeholder = {placeholder}
            />
            :
            <SmallInput 
                inputType = {inputType} 
                value = {currentTranslation?currentTranslation.text:''} 
                type = {inputType} 
                onChange = {onChange?onChange:inputChangeHandler} 
                name = {name} 
                placeholder = {placeholder} 
            />
            }
            
            <DropBox onChange = {dropBoxChange} >
                <Option value = {langEnum.ENG} >{langEnum.ENG}</Option>
                <Option value = {langEnum.ARM} >{langEnum.ARM}</Option>
                <Option value = {langEnum.RUS} >{langEnum.RUS}</Option>
            </DropBox>
        </Wrapper>
    );
}
export default memo(InputWDropbox, isEqual);