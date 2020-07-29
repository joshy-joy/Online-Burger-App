import React from 'react';

import NavigationItems from './../NavigationItems/NavigationItems';
import Backrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Aux';
import Logo from './../../Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClass = [classes.sideDrawer, classes.Close];
    if (props.show) {
        attachedClass = [classes.sideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backrop show={props.show} closeModel={props.close} />
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.NavigationItems}>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;