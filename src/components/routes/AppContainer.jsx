import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slice';
import { getAllCategorys } from '../../store/slices/categorys.slice';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { getConfig } from '../../utils/getConfig.js';
import Search from './container/Search';
let productsDB = [];

const AppContainer = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categorys = useSelector(state => state.categorys);
  productsDB = useSelector(state => state.products);
  const [products, setProducts] = useState(productsDB);

  useEffect(() => {
    dispatch(getAllProducts()).then(promise => setProducts(promise.payload));
    dispatch(getAllCategorys());
  }, []);

  const handlerQuerybyPrice = (e) => {
    const categ = e.target.getAttribute('data-category');
    if (categ == 'ALL') return setProducts(productsDB)
    setProducts(productsDB.filter(prod => prod.category.name == categ))
  }

  const handlerSubmitByName = (e) => {
    e.preventDefault();
    const finder = e.target.firstElementChild.value
    if (finder) {
      setProducts(productsDB.filter(prod => prod.title == finder))
      e.target.firstElementChild.value = '';
    }
  }

  const hanlerAddProductToCart = (e) => {
    const userSession = getConfig();
    if (userSession) {
      const id = parseInt(e.target.getAttribute('data-id-product'));
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';

      const order = {
        id: id,
        quantity: 1
      }

      axios.post(URL, order, userSession)
        .then(res => {
          swal({
            text: "Item add to cart",
            icon: "success",
          });


        }).catch(error => {
          swal({
            title: 'Ops! something wrong!',
            text: error.toString(),
            icon: "error",
          });
        })

    } else {
      navigate('/login');
    }
  }



  return (
    <>
      <div className="product-view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 sidebar">

              <div className="sidebar-widget category">
                <h2 className="title">Product</h2>
                <div className="product-price-range">
                  <select className='select-price-range'>
                    <option value={'ALL'}>-Price range-</option>
                    <option value={'0 to 500'}> 0 to 500</option>
                    <option value={'501 to 100'}> 501 to 100</option>
                    <option value={'1001 to up'}> 1001 to up</option>
                  </select>
                </div>
              </div>


              <div className="sidebar-widget category">
                <h2 className="title">Category</h2>
                <nav className="navbar bg-light">
                  <ul onClick={handlerQuerybyPrice} className="navbar-nav">
                    <a data-category='ALL' className="nav-link" href="#"><i className="bi bi-caret-right-fill"></i>All products</a>
                    {
                      categorys?.map(categ => (
                        <li className="nav-item" key={categ.id}>
                          <a data-category={categ.name} className="nav-link" href="#"><i className="bi bi-caret-right-fill"></i>{categ.name}</a>
                        </li>
                      ))
                    }

                  </ul>
                </nav>
              </div>


            </div>


            <div className="col-lg-8">
              <div className="row">

                <Search handlerSubmitByName={handlerSubmitByName} />

               
                {
                  products?.map(product => (
                    <div key={product.id} className="col-md-4">
                      <div className="product-item">
                        <div className="product-title">
                          <strong href="#">{product.title}</strong>

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

export default AppContainer