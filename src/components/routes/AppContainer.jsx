import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slice';
import { getAllCategorys } from '../../store/slices/categorys.slice';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
let productsDB = [];

const AppContainer = () => {

  const dispatch = useDispatch();

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


  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users';
  //   const user = {
  //     "firstName": "Berselis",
  //     "lastName": "Mendoza",
  //     "email": "berselismendoza@gmail.com",
  //     "password": "pass1234",
  //     "phone": "1234567891",
  //     "role": "admin"
  //   };

  //   axios.post(URL, user)
  //     .then(res => console.log(res.data))
  //     .catch(error => console.log(error))

  // }, [])


//  const user = {
//     "status": "available",
//     "id": 1355,
//     "firstName": "Berselis",
//     "lastName": "Mendoza",
//     "email": "berselismendoza@gmail.com",
//     "phone": "1234567891",
//     "role": "admin"
// }





  //console.log(productsDB);
  //console.log(categorys);

  return (
    <div className="product-view">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 sidebar">

            <div className="sidebar-widget category">
              <h2 className="title">Product</h2>
              <div className="product-price-range">
                <div className="dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">Price range</div>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#" className="dropdown-item">$0 to $100</a>
                    <a href="#" className="dropdown-item">$101 to $500</a>
                    <a href="#" className="dropdown-item">$501 to $1000</a>
                    <a href="#" className="dropdown-item">$1001 to up</a>
                  </div>
                </div>
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
              <div className="col-md-12">
                <div className="product-view-top">
                  <div className="row">

                    <div className="col-md-6 col-sm-8 col-xs-12">
                      <form onSubmit={handlerSubmitByName} className="product-search">
                        <input type="text" placeholder='Search...' />
                        <button type='submit'><i className="bi bi-search"></i></button>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
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
                        <button className="btn"><i className="bi bi-cart-fill"></i>Add to Cart</button>
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
  )
}

export default AppContainer