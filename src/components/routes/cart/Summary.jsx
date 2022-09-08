import React from 'react'

const Summary = ({ subTotal, total, handlerPurchases }) => {
    return (
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
    )
}

export default Summary