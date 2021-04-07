import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

// Components 
import logo from '../../assets/logo.jpg';
import { logOut, selectIsLoggedIn } from '../../redux/slices/auth';
import LanguagePicker from '../LanguagesPicker';
import MenuItem from '../MenuItem';

// Css
import './style.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const [isSideMenuActive, setIsSideMenuActive] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <div className = 'NavOutter' >
            <div className = 'NavInner' >
                {/* logo */}
                <Link to = '/' className = 'LogoOuter' >
                    <img className = 'LogoImg'  src = {logo} alt = 'logo' ></img>
                </Link>
                {/* menu elements */}
                <div className = {isSideMenuActive?'MenuOutterActive':'MenuOutter'} >
                    {isLoggedIn?
                        <>
                            <MenuItem to = '/add' name = 'Post' ></MenuItem>
                            <MenuItem to = '/delete' name = 'Delete' ></MenuItem>
                            <MenuItem to = '/update' name = 'Update' ></MenuItem>
                            <MenuItem to = '/' name = 'Log Out' onClick = {() => dispatch(logOut())} ></MenuItem>
                        </>
                    :
                        <>
                            <MenuItem to = '/about' name = 'About Us' ></MenuItem>
                            <MenuItem to = '/activities' name = 'Activities' ></MenuItem>
                            <MenuItem to = '/products' name = 'Products' ></MenuItem>
                            <MenuItem to = '/contacts' name = 'Our Contacts' ></MenuItem>
                        </>
                    }
                    
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