import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        {/* {console.log('props.drawerToggleClicked', props.drawerToggleClicked)} */}
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo} >
            <Logo />
        </div>
        <nav className={classes.DesktopOnly} >
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;

