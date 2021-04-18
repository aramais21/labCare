import { configureStore } from '@reduxjs/toolkit';

import slideReducer from '../slices/slides';
import partnerReducer from '../slices/partners';
import productReducer from '../slices/products';
import socLinkReducer from '../slices/socialLinks';
import categoryReducer from '../slices/categories';
import authReducer from '../slices/auth';
import langReducer from '../slices/lang';

const store = configureStore({
    reducer: {
        slides: slideReducer,
        partners: partnerReducer,
        products: productReducer,
        socLinks: socLinkReducer,
        categories: categoryReducer,
        auth: authReducer,
        lang: langReducer
    }
})

export default store;