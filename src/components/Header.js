import React from 'react'
import './Header';
import './Header.css';
import Logo from '../images/airbnbLogo.png'
import { HiOutlineSearch } from 'react-icons/hi';
import { GrLanguage } from 'react-icons/gr'
import { MdLanguage } from 'react-icons/md';
import { Avatar } from '@material-ui/core';




function Header() {
    return (
        <div className="header">
            <div>
                <img className="logo" src={Logo} alt="Logo" />
            </div>
            
            <div className="header__searchcontainer">
                <input type="text" name="searchbar"  placeholder="Start your Search"/>
                <HiOutlineSearch className="header__icons" />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <MdLanguage className="header__icon" />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
