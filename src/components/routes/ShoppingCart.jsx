import React from 'react';
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {
    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/user'>User</NavLink>
                        </li>
                        <li className="breadcrumb-item active"><a>Shopping cart</a></li>
                    </ul>
                </div>
            </div>
            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            <tr>
                                                <td>
                                                    <div className="img">
                                                        <a href="#"><img src="img/product-1.jpg" alt="Image" /></a>
                                                        <p>Product Name</p>
                                                    </div>
                                                </td>
                                                <td>$99</td>
                                                <td>
                                                    <div className="qty">
                                                        <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                        <input type="text" value={1} readOnly />
                                                        <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td>$99</td>
                                                <td><button><i className="fa fa-trash"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-page-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cart-summary">
                                            <div className="cart-content">
                                                <h1>Cart Summary</h1>
                                                <p>Sub Total<span>$99</span></p>
                                                <p>Shipping Cost<span>$1</span></p>
                                                <h2>Grand Total<span>$100</span></h2>
                                            </div>
                                            <div className="cart-btn">
                                                <button className="btn">
                                                    <i className="bi bi-cart-check-fill"></i>
                                                    <span>Checkout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShoppingCart