import React from 'react';

import NavigationItems from './../NavigationItems/NavigationItems';
import Logo from './../../Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            <Logo />
            <NavigationItems />
        </div>
    );
}

export default sideDrawer;