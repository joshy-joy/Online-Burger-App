import React from 'react';

import classes from './Model.css';
import Aux from './../../../hoc/Aux';
import Backdrop from './../Backdrop/Backdrop';

const model = (props) => (
    <Aux>
        <Backdrop show={props.show} closeModel={props.closeModel} />
        <div className={classes.Model}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} >
            {props.children}
        </div>
    </Aux>
);

export default model