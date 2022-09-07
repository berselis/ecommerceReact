import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slice';
import axios from 'axios';

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(useParams().id)
  const [product, setProduct] = useState();
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quanty, setQuanty] = useState(1);

  const handlerPlus = () => setQuanty(quanty + 1);
  const handlerMinus = () => {
    let rest = quanty - 1
    if (rest <= 0) rest = 1;
    setQuanty(rest);
  }
  const handlerImg = (e) => {
    const setImg = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
    setImg.src = e.target.src;
  }
  const handlerRelated = (e) => {
    const id = e.target.getAttribute('data-id');
    setId(id);
    setQuanty(1);
  }

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios.get(URL)
      .then(res => {
        const product = res.data.data.product;
        setProduct(product);
        dispatch(getAllProducts()).then(promise => {
          setRelatedProduct(promise.payload.filter(pro => pro.category.name == product.category && pro.id != product.id))
        });
      })
      .catch(error => console.log(error))
  }, [id]);

  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="breadcrumb-item active"><a>Products</a></li>
          </ul>
        </div>
      </div>

      <div className="product-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-detail-top">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="product-slider-single normal-slider">
                      <img src={product?.productImgs[0]} />
                    </div>
                    <div className="product-slider-single-nav normal-slider">
                      {
                        product?.productImgs.map(img => <div key={img} className="slider-nav-img"><img onClick={handlerImg} src={img} /></div>)
                      }
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="product-content">
                      <div className="title"><h2>{product?.title}</h2></div>

                      <div className="price">
                        <h4>Price:</h4>
                        <p>${product?.price}</p>
                      </div>
                      <div className="quantity">
                        <h4>Quantity:</h4>
                        <div className="qty">
                          <button onClick={handlerMinus} className="btn-minus"><i className="fa fa-minus"></i></button>
                          <input readOnly type="text" value={quanty} />
                          <button onClick={handlerPlus} className="btn-plus"><i className="fa fa-plus"></i></button>
                        </div>
                      </div>


                      <div className="action">
                        <a className="btn"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                        <a className="btn"><i className="fa fa-shopping-bag"></i>Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row product-detail-bottom">
                <div className="col-lg-12">
                  <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="pill">Description</a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="container tab-pane active">
                      <h4>Product description</h4>
                      <p> {product?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sidebar">

            </div>

            <div className="product">
              <div className="section-header">
                <h1>Related Products</h1>
              </div>

              <div className="row align-items-center product-slider">
                {
                  relatedProduct?.map(product => (
                    <div key={product.id} className="col-md-4">
                      <div className="product-item">
                        <div className="product-title">
                          <strong href="#">{product.title}</strong>

                        </div>
                        <div className="product-image">
                          <img src={product.productImgs[0]} />
                          <div className="product-action">
                            <a className='product-action-finder'>
                              <i onClick={handlerRelated} data-id={product.id} className="bi bi-search"></i>
                            </a>

                          </div>
                        </div>
                        <div className="product-price">
                          <h3><span>$</span>{product.price}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails