import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from './../Navigation/ToolBar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(
            (prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer};
            }
        );
    }

    render() {
        return (
            <Aux>
                <Toolbar sideDrawerToggle = { this.sideDrawerToggleHandler } />
                <SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerHandler} />
                <main className={ classes.Content }> { this.props.children }</main>
            </Aux>
        );
    }
} 

export default Layout;