import React, { useState } from 'react';
import './header.css';
import logo from '../img/Logo-icon.svg';
import arrowDown from '../img/Arrow-down.svg';
import logoMenuIcon from '../img/Logo-menu-icon.svg';

function Header() {

    const [visible, setVisible] = useState(false);
	
	let LogoMenu;
	if (visible) {
	LogoMenu = <>
        <img src={logoMenuIcon} className="logo-menu-icon" alt="logo-menu-icon" height="20px" width="20px"></img>
        <ul className='logo-menu'>
            <li>Profile</li>
            <li>Log Out</li>
        </ul>
    </>
	}

    return <>
        <header className="header">
            <h1 className="header-main-text">Awesome Kanban Board</h1>
            <img src={logo} className="user-logo" alt="user-logo" height="40px" width="40px"></img>
            <img src={arrowDown} className="arrow-down-icon" alt="arrow-down-icon" 
            onClick={() => setVisible(!visible)}
            height="8px" width="12px"></img>
            {LogoMenu}
        </header>
    </>
}

export default Header;