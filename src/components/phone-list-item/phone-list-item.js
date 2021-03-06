import React from 'react';
import './phone-list-item.css';

const PhoneListItem = ({ phone,onAddedToCart }) =>{
    const {model,memory,price,pic} = phone;

    return(
      <div className="phone-list_item">
          <div className="phone-list_cover">
                <img src={pic} alt={model} className="phone-list_img"/>
          </div>
          <div className="phone-list_details">
                <span className="list-details_title">{model}</span>
                <div className="list-details_memory">{memory}</div>
                <div className="list-details_price">${price}</div>
                <button 
                onClick={onAddedToCart}
                className="btn btn-info add-to-cart">Buy</button>
          </div>
      </div>
    );
};

export default PhoneListItem;