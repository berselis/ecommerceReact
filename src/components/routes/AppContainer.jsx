import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slice';
import { getAllCategorys } from '../../store/slices/categorys.slice';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { getConfig } from '../../utils/getConfig.js';
import Search from './container/Search';
import Filter from './container/Filter';
import Cateogry from './container/Cateogry';
import ProductCard from './container/ProductCard';

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
            text: "Item added to cart!!",
            icon: "success",
          });


        }).catch(error => {
          swal({
            title: 'Ops! something wrong!!',
            text: error.toString(),
            icon: "error",
          });
        })

    } else {
      navigate('/login');
    }
  }

  const handleFilter = (e) => {
    const option = e.target.options[e.target.options.selectedIndex];
    const filter = option.value;
    if (filter == 'ALL') {
      setProducts(productsDB);
      return
    }

    if (filter == 'filter') {
      const min = parseFloat(option.getAttribute('data-min'));
      const max = parseFloat(option.getAttribute('data-max'));
      const productFilter = productsDB.filter(pro => min <= parseFloat(pro.price) && parseFloat(pro.price) <= max);
      setProducts(productFilter);
      return
    }

    const min = parseFloat(option.getAttribute('data-min'));
    const productFilter = productsDB.filter(pro => parseFloat(pro.price) >= min);

    setProducts(productFilter);


  }



  return (
    <div className="product-view">
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-4 sidebar">
            <Filter handleFilter={handleFilter} />
            <Cateogry categorys={categorys} handlerQuerybyPrice={handlerQuerybyPrice} />
          </div>

          <div className="col-lg-8">
            <div className="row">

              <Search handlerSubmitByName={handlerSubmitByName} />

              {
                products.map(product => <ProductCard key={product.id} product={product} hanlerAddProductToCart={hanlerAddProductToCart} />)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppContainer