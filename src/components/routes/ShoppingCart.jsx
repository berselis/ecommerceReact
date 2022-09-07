import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getConfig } from '../../utils/getConfig.js';
import axios from 'axios';
import Item from './cart/Item.jsx';

const ShoppingCart = () => {
    const [cart, setCart] = useState();
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    const [checkOut, setCheckOut] = useState(false);
    const userSession = getConfig();

    useEffect(() => {
        if (userSession) {
            const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
            axios.get(URL, userSession)
                .then(res => {
                    const cart = res.data.data.cart
                    setCart(cart);
                    const subTotal = cart.products.reduce((sum, next) => {
                        return sum += parseFloat(next.price) * next.productsInCart.quantity;
                    }, 0);
                    setSubTotal(subTotal);
                    const tax = subTotal * 0.25;
                    setTotal(subTotal + 25 + tax);
                }).catch(error => console.log('peticion'))
        }
    }, [checkOut]);


    const handlerPurchases = () => {
        if (userSession) {
            const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
            const addressBook = {
                street: "First St Julios",
                colony: "North SPM",
                zipCode: 21000,
                city: "DO",
                references: "Big city"
            }

            axios.post(URL, addressBook, userSession)
                .then(() => {
                    swal({
                        text: "Purchases Done!!",
                        icon: "success",
                    });
                    setCheckOut(true);
                }).catch(error => console.log(error))



        }
    }


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
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th className='item-cart-name'>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                cart?.products.map(item => {
                                                    const price = parseFloat(item.price);
                                                    const quantity = parseFloat(item.productsInCart.quantity);
                                                    const totalItem = price * quantity;
                                                    return <Item key={item.productsInCart.id} title={item.title} price={price} quantity={quantity} total={totalItem} />
                                                })
                                            }

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
                                                <p>Sub Total<span>{`$ ${subTotal}`}</span></p>
                                                <p>Shipping Cost<span>$ 25</span></p>
                                                <p>Taxes<span>25%</span></p>
                                                <h2>Grand Total<span>{`$ ${total}`}</span></h2>
                                            </div>
                                            <div className="cart-btn">
                                                <button onClick={handlerPurchases} className="btn">
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