import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getConfig } from '../../utils/getConfig.js';
import axios from 'axios';
import Item from './cart/Item.jsx';
import Summary from './cart/Summary.jsx';

const ShoppingCart = () => {
    const [cart, setCart] = useState();
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    const [checkOut, setCheckOut] = useState(false);
    const userSession = getConfig();
    const [update, setUpdate] = useState()

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
                }).catch(error => console.log(error))
        }
    }, [checkOut, update]);


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
                    setCheckOut(true);
                    swal({
                        text: "Purchases Done!!",
                        icon: "success",
                    });

                }).catch(error => console.log(error))
        }
    }

    const handlePlus = (obj) => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.patch(URL, obj, userSession)
            .then(() => {
                setUpdate(obj);

            }).catch(error => console.log(error))
    }

    const handleMinus = (obj) => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.patch(URL, obj, userSession)
            .then(() => {
                setUpdate(obj);

            }).catch(error => console.log(error))

    }

    const handleRemove = (id) => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`;
        axios.delete(URL, userSession)
            .then(() => {
                setUpdate(id)
            }).catch(error => console.log(error))
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
                                                    const row = {
                                                        id: item.id,
                                                        title: item.title,
                                                        price: price,
                                                        quantity: quantity,
                                                        totalItem: totalItem,
                                                        plus: handlePlus,
                                                        minus: handleMinus,
                                                        remove: handleRemove
                                                    }
                                                    return <Item key={item.productsInCart.id} item={row} />
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4">
                            <Summary subTotal={subTotal} total={total} handlerPurchases={handlerPurchases} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShoppingCart