import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is Header JSX</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/cart">Cart</a>
            </nav>
        </div>
    );
};

export default Header;