import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients:{
                salad:2,
                bacon:1,
                meat:1,
                cheese:2
            }
        };
    }
    

    render() {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;