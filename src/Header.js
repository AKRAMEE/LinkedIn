import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcone from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Linkedin" />
                <div className="header_search">
                    {/**Search Icone */}
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcone} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://img.icons8.com/color/480/avatar.png" title="me" />
            </div>
        </div>
    )
}

export default Header
