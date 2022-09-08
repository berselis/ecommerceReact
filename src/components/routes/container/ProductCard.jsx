import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product, hanlerAddProductToCart }) => {
    return (
        <div className="col-md-4">
            <div className="product-item">
                <div className="product-title">
                    <strong>{product.title}</strong>
                </div>
                <div className="product-image">
                    <img src={product.productImgs[0]} />
                    <div className="product-action">
                        <NavLink to={`/product/${product.id}`}>
                            <i className="bi bi-search"></i>
                        </NavLink>
                    </div>
                </div>
                <div className="product-price">
                    <h3><span>$</span>{product.price}</h3>
                    <button onClick={hanlerAddProductToCart} data-id-product={product.id} className="btn">
                        <i className="bi bi-cart-fill"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard