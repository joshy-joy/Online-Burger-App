import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummer from './../../components/Burger/OrderSummery/OrderSummery';



const INGREDIENT_PRICE = {
    cheese: 0.5,
    meat: 0.75,
    bacon: 0.75,
    salad: 0.25
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0
        },
        price: 5,
        purchasable: false,
        purchasing: false
    };

    purchaseControlHandler = (updatedPrice) => {
        if(updatedPrice > 5) {
            this.setState({purchasable: true});
        } else {
            this.setState({purchasable: false});
        }
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const updatedPrice = this.state.price + INGREDIENT_PRICE[type];
        this.setState({ingredients: updatedIngredient, price: updatedPrice});
        this.purchaseControlHandler(updatedPrice);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            };
            updatedIngredient[type] = updatedCount;
            const updatedPrice = this.state.price - INGREDIENT_PRICE[type];
            this.setState({ingredients: updatedIngredient, price: updatedPrice});
            this.purchaseControlHandler(updatedPrice);
        }
    }

    orderSummeryDisplayHandler = () => {
        this.setState({purchasing: true});
    }

    closeModel = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('Thanks for your purchase..lol!');
    }

    render() {
        const disabled = { ...this.state.ingredients};
        for(let item in disabled) {
            disabled[item] = disabled[item] <= 0;
        }
        return (
            <Aux>
                <Model show={this.state.purchasing} closeModel={this.closeModel}>
                    <OrderSummer 
                        ingredients={this.state.ingredients} 
                        cancelPurchase={this.closeModel}
                        purchaseItem={this.purchaseContinueHandler } />
                </Model>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler}  
                    removeIngredient={this.removeIngredientHandler} 
                    price={this.state.price} 
                    disabled= {disabled}
                    purchasable={this.state.purchasable}
                    orderSummeryDisplay={this.orderSummeryDisplayHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;