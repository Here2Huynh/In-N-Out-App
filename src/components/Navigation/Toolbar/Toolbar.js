import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        <div style={{ color: '#FFEF02'}} >MENU</div>
        <div className={classes.Logo} >
            <Logo />
        </div>
        <nav className={classes.DesktopOnly} >
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;

