import {produce} from 'immer';

import { DELETE_MESSAGE } from '../actions';

const reducer = produce((state,action) => {
    const {type, payload} = action;
    switch(type) {
        case DELETE_MESSAGE:
            const newMessArr = state.messages.filter((item) => item.id!==payload.id);
            state.messages = newMessArr;
            return state;
        default:
            return state;
    }
})

export default reducer;