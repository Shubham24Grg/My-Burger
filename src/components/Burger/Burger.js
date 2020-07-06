import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    const modifiedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_,i)=>{
                    return <BurgerIngredient key={igKey+i} type={igKey} />
                }
            )
        }
    ).reduce((prev,curr)=>{
        return prev.concat(curr)
    },[])

console.log(modifiedIngredients)
    return (

        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {modifiedIngredients}
            <BurgerIngredient type="bread-bottom" />



        </div>
    );
};

export default Burger;