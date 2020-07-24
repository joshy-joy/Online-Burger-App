import React from 'react';

import Aux from './../../../hoc/Aux';

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
        </Aux>
    );
};

export default orderSummery;