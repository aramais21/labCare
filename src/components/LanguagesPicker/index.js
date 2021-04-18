import React, {memo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {isEqual, partition} from 'lodash';

import { change, selectLang } from '../../redux/slices/lang';
import { langData } from './data';

import { LangWrapper, MainFlag, FlagList, Flag } from './style';
import { Image } from '../../styles';

const LanguagePicker = ({isSideMenuActive}) => {
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();
    const [[chosenLang], options] = partition(langData, (item) => item.lang === lang);
    const [isActive, setIsActive] = useState(false);
    const onClickMain = () => {
        setIsActive(!isActive);
    }

    const onClick = (lang) => {
        dispatch(change({lang}));
        setIsActive(false);
    }

    return (
        <LangWrapper isActive = {isActive || isSideMenuActive}>
            <MainFlag isActive = {isActive || isSideMenuActive} onClick = {onClickMain} ><Image noMargin = {true} src = {chosenLang.img}/></MainFlag>
            <FlagList isActive = {isActive || isSideMenuActive}>
                {options.map(({img, lang}) => {
                    return <Flag key = {`${lang} ${img}`} onClick = {() => onClick(lang)} ><Image noMargin = {true} src={img} ></Image></Flag>
                })}
            </FlagList>
        </LangWrapper>
    );
}

export default memo(LanguagePicker, isEqual);