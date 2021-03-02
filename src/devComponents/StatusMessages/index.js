import React from 'react';
import {useSelector} from 'react-redux';

import {messagesSelector} from '../../redux/selectors'
import Message from '../Message';

import './style.css';

const StatusMessages = () => {
    const messages = useSelector(messagesSelector);
    return (
        <div>
            {messages.map((message) => <Message  key = {message.id} {...message} />)}
        </div>
    );
}

export default StatusMessages;