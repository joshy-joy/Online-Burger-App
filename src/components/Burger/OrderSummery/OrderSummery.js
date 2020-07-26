import React from 'react';

import Aux from './../../../hoc/Aux';
import Button from './../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients).map(
        igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            );
        }
    );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Delicious Burger with following Ingredients :</p>

            <ul>
                {ingredientSummery}
            </ul>
            <Button btnType='Danger' action={props.cancelPurchase}>Cancel</Button>
            <Button btnType='Success' action={props.purchaseItem}>Purchase</Button>
        </Aux>
    );
};

export default orderSummery;