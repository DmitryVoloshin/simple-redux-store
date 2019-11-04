import React from 'react';
import './phone-list-item.css';

const PhoneListItem = ({ phone }) =>{
    const {model,memory,price,pic} = phone;

    return(
      <div className="phone-list_item">
          <div className="phone-list_cover">
                <img src={pic} alt={model} className="phone-list_img"/>
          </div>
          <div className="phone-list_details">
                <a href="#" className="list-details_title">{model}</a>
                <div className="list-details_memory">{memory}</div>
                <div className="list-details_price">${price}</div>
                <button className="btn btn-info add-to-cart">Buy</button>
          </div>
      </div>
    );
};

export default PhoneListItem;