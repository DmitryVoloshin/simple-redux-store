import React from 'react';
import './cart-table.css';


const CartTable = () =>{
    return(
        <div className="shopping-cart-table">
            <h2>Your Order is</h2>
            <table className="table">
                <thead className="cart-table_head">
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className="cart-table_body">
                    <tr>
                    <td>1</td>
                    <td>Phone</td>
                    <td>1</td>
                    <td>799$</td>
                    <td>
                        <button className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <button className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                        <button className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                    </td>
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