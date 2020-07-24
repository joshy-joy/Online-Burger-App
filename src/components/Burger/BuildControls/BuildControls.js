import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'}
]; 

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.Price}>Total Price: <strong>{props.price}</strong></div>
        { controls.map(
            ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label}
                            add={ () => props.addIngredient(ctrl.type) }
                            remove={ () =>  props.removeIngredient(ctrl.type) }
                            disabled={ props.disabled[ctrl.type]} />
            }
        )}
        <button 
            className={classes.PurchaseButton} 
            disabled={!props.purchasable}
            onClick={props.orderSummeryDisplay} >Order Now: <strong>{props.price} $</strong></button>
    </div>
);

export default buildControls;