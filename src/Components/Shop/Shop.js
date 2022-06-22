import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css';

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[]);
    return (
        <div className='container'>
            <div className="product-container">
           
                {
                    
                    foods.map(food => <Food key={food.idMeal}
                        Food={food}></Food>)
                }
            </div>
            <div className="order-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;