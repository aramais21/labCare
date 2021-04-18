import { useSelector } from "react-redux"
import { selectLang } from "../redux/slices/lang"

const useTranslate = () => {
    const lang = useSelector(selectLang);

    const translate = (langArr) => {
        if(langArr?.length>=0) {
            return langArr.find((item) => item.lang === lang).text
        }
        return '';
    }
    
    const translateLocal = (langObj) => {
        return langObj[lang];
    }

    return {translate, translateLocal};
}

export default useTranslate;