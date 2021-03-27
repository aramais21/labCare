import React from 'react';
import OurMission from '../../components/OurMission';
import OurStrategy from '../../components/OurStrategy';

import Slider from '../../components/Slider';

import {AboutWrapper} from './style';

const AboutUs = () => {
    return(
        <AboutWrapper className = 'AboutMain'>
            <Slider data = {{img: 'https://previews.dropbox.com/p/thumb/ABEyZnFDh37-yVVMBr6XoJAryKzaSROyV532mbz0DLt_ZZtVtg_7h37BCKZQ0O3cjCLj6CeY-Ph6K14GP2JhK11vt23anPvfWg6p7-6dlH77iFpLOuuNF2kePcR4LsxnSgvGT7cO63uL_E5v2UR3jvvfezL3eW1OHUlXT5tTDIuc_Nvg1SHVcEp4osSNwO8ghVLy22fCldPkcG528FrLX71avoMrSpL1aW6YV-LRLVGCmaQ2UiH3C0iYOV8H6iGlTJCyXrhptqIUD-d_JesJrGVrU6lHlK7MiwvXNTfEGqCwcVuJosyAi-VQSdhIZ9MTDhf8BbzmxAx26WGuOq5pfh5Q1JY8H-_wHqbqrPaYUPm4Sg/p.jpeg?fv_content=true&size_mode=5', id: '1234'}} />
            <OurMission />
            <OurStrategy />
        </AboutWrapper>
    )
}

export default AboutUs;