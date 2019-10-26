import React, { Fragment } from 'react';
import './phone-list-item.css';

const PhoneListItem = ({ phone }) =>{
    const {model,memory,price} = phone;

    return(
        <Fragment>
            <span>{model}</span>
            <span>{memory}</span>
            <span>{price}</span>
        </Fragment>
    );
};

export default PhoneListItem;