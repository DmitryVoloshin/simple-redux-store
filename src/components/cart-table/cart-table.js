import React from 'react';
import { connect } from 'react-redux';

import{
phoneAddedToCart,
phoneRemovedFromCart,
allPhonesRemovedFromCart
} from '../../actions';
import './cart-table.css';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, model, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{model}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart:{ cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
      onIncrease:phoneAddedToCart,
      onDecrease:phoneRemovedFromCart,
      onDelete:allPhonesRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);