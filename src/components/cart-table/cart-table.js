import React from 'react';
import './cart-table.css';


const CartTable = () =>{
    return(
        <div className="shop-cart_table">
            <h2>Your Order is</h2>
            <table className="cart-table_block">
                <thead className="cart-table_head">
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>

                <tbody className="cart-table_body">
                    <tr>1</tr>
                    <tr>Phone</tr>
                    <tr>1</tr>
                    <tr>799$</tr>
                    <tr>
                        <button className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <button className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                        <button className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                    </tr>
                </tbody>
            </table>
            <div className="total-price">
                Total:799$
            </div>
        </div>
    )
}

export default CartTable;