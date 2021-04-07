import { fecthCategories } from "../redux/slices/categories";
import { fecthPartners } from "../redux/slices/partners";
import { fecthProducts } from "../redux/slices/products";
import { fecthSlides } from "../redux/slices/slides";
import { fecthSocLinks } from "../redux/slices/socialLinks";

const update = (currName, dispatch) => {
    switch (currName) {
        case 'Slide':
            dispatch(fecthSlides());
            return;
        case 'Partner':
            dispatch(fecthPartners())
            return;
        case 'Product':
            dispatch(fecthProducts())
            return;
        case 'Category':
            dispatch(fecthCategories());
            return;
        case 'Social Link':
            dispatch(fecthSocLinks());
            return;
        default: 
            return;
    }
}

export default  update;