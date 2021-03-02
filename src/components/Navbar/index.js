import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// Components 
import logo from '../../assets/logo.jpg';
import LanguagePicker from '../LanguagesPicker';
import MenuItem from '../MenuItem';

// Css
import './style.css';

const Navbar = () => {
    const [isSideMenuActive, setIsSideMenuActive] = useState(false);

    return(
        <div className = 'NavOutter' >
            <div className = 'NavInner' >
                {/* logo */}
                <Link to = '/' className = 'LogoOuter' >
                    <img className = 'LogoImg'  src = {logo} alt = 'logo' ></img>
                </Link>
                {/* menu elements */}
                <div className = {isSideMenuActive?'MenuOutterActive':'MenuOutter'} >
                    <MenuItem to = '/about' name = 'About Us' ></MenuItem>
                    <MenuItem to = '/activities' name = 'Activities' ></MenuItem>
                    <MenuItem to = '/products' name = 'Products' ></MenuItem>
                    <MenuItem to = '/contacts' name = 'Our Contacts' ></MenuItem>
                </div>
                {/* burger menu */}
                <div className = {isSideMenuActive? 'HamActive':'Ham'} onTouchStart = {() => {setIsSideMenuActive(!isSideMenuActive);}} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* language */}
            <LanguagePicker isSideMenuActive={isSideMenuActive} />
        </div>
    )
}

export default Navbar;