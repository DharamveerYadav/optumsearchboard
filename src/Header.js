import React from 'react';
import logo from './Assests/img/logo.png';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./Header.css";

const Header = (props) => {

    return (
           <header className="header">
               <div className="logoContainer">
                <img src={logo} alt="trillo logo" className="logo"/>
                <h2 className="logoText">Optum | State Government Analystics</h2>
                </div>

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search"/>
                    <button className="search__button">
                    <SearchIcon className="search__icon"/>
                      
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                    <QuestionMarkIcon className="user-nav__icon"/>
                    <span className="user-nav__iconText">Help</span>

                        
                    </div>
                    <div className="user-nav__icon-box">
                    <NotificationsIcon className="user-nav__icon" />
                    <span className="user-nav__iconText">Notifications</span>
                      
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__icon-box">
                    <AccountCircleIcon className="user-nav__icon"/>
                   
                    <span className="user-nav__iconText">Hi, Jone</span>
                    </div>
                    
                </nav>
            </header>

        )

}

export default Header;