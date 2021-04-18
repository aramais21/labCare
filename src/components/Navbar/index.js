import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

// Components 
import logo from '../../assets/logo.jpg';
import { regularNavBar } from '../../data';
import useTranslate from '../../Hooks/useTranslate';
import { logOut, selectIsLoggedIn } from '../../redux/slices/auth';
import LanguagePicker from '../LanguagesPicker';
import MenuItem from '../MenuItem';

// Css
import './style.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const [isSideMenuActive, setIsSideMenuActive] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const {translateLocal} = useTranslate();

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
                            <MenuItem to = '/about' name = {translateLocal(regularNavBar.aboutUS)} ></MenuItem>
                            <MenuItem to = '/activities' name = {translateLocal(regularNavBar.activities)} ></MenuItem>
                            <MenuItem to = '/products' name = {translateLocal(regularNavBar.products)} ></MenuItem>
                            <MenuItem to = '/contacts' name = {translateLocal(regularNavBar.contacts)} ></MenuItem>
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
            {isLoggedIn?
                null
            :
                <LanguagePicker isSideMenuActive={isSideMenuActive} />
            }
        </div>
    )
}

export default Navbar;