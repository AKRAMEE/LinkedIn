import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidbar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1627734450717-ce6149030d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="cover" />
                <Avatar className="sidebar__avatar" />
                <h2>Akram Nebih</h2>
                <h4>nebihakram@gmail.com</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3.888</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4.050</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('SalesforceDeveloper')}
                {recentItem('SalesforceAdmin')}
                {recentItem('GraphicDesign')}
                {recentItem('SoftwareEngineering')}
            </div>
        </div>
    )
}

export default Sidebar
