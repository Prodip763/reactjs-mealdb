import React from 'react';
import './Food.css';

function Food(props) {
    // console.log(props.food);
    const { strMeal, strCategory, strInstructions, strMealThumb } = props.Food;
    return (
        <div className='food'>
            <img src={strMealThumb}></img>
            <p className='food-name'>{strMeal}</p>
            <p>Category: {strCategory}</p>
            <p><small>{strInstructions}</small></p>
            <p></p>
        </div>
    );
}

export default Food;