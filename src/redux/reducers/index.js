import {produce} from 'immer';

const reducer = produce((state,action) => {
    const {type, payload} = action;
    switch(type) {
        default:
            return state;
    }
})

export default reducer;