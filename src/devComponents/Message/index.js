import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import { DELETE_MESSAGE_OBJ } from '../../redux/actions/actionObjects';

import './style.css';

const Message = ({message, status, id}) => {
    const dispatch = useDispatch();

    const deleteMessage = () => dispatch(DELETE_MESSAGE_OBJ(id));

    useEffect(() => {
        const timeout = setTimeout(() => {}, 2000)
        return () => {
            timeout.clearTimeout();
            deleteMessage();
        };
    });

    return (
        <div onClick = {() => deleteMessage()} >{message}</div>
    );
}

export default Message;