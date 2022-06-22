import React from 'react';
import logo from '../../images/food_logo.webp';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
            </div>
        </nav>
        
    );
};

export default Header;