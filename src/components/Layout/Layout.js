import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from './../Navigation/ToolBar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showBackdrop: true
    }

    backdropHandler = () => {
        this.setState({showBackdrop: false});
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer show={this.state.showBackdrop} close={this.backdropHandler} />
                <main className={ classes.Content }> { this.props.children }</main>
            </Aux>
        );
    }
} 

export default Layout;