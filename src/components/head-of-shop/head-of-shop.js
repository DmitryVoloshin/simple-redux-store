import React from 'react';
import './head-of-shop.css';
import { Link } from 'react-router-dom';

const HeaderOfShop = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="main-page_link">iShop</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart_block">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default HeaderOfShop;