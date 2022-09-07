import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { getConfig } from '../../utils/getConfig';
import Purchase from './purchases/Purchase';
import ModalPurchases from './purchases/ModalPurchases';


const Purchases = () => {

  const [purchases, setPruchases] = useState([]);
  const userSession = getConfig();

  const [showModal, setShowModal] = useState(false);
  const [itemsPurchases, setItemPurchases] = useState()

  useEffect(() => {
    if (userSession) {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
      axios.get(URL, userSession)
        .then(res => {
          setPruchases(res.data.data.purchases)
        }).catch(error => console.log(error))
    }
  }, []);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = (products, index) => {
    const contentModal = {
      number: index,
      products: products
    }
    setItemPurchases(contentModal);
    setShowModal(true);
  }

  return (
    <>
      <ModalPurchases isShow={showModal} itemsPurchases={itemsPurchases} handleCloseModal={handleCloseModal} />
      <div className="breadcrumb-wrap">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to='/user'>User</NavLink>
            </li>
            <li className="breadcrumb-item active"><a>Purchases</a></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='row purchases'>
          <h3 className='purchases-title'><strong>My purchases</strong></h3>

          <div className='col-md-12'>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Total items</th>
                    <th>Amount</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    purchases.map((item, index) => {
                      let date = new Date(item.createdAt);
                      const row = {
                        index: index += 1,
                        date: date.toDateString(),
                        totalItem: item.cart.products.reduce((total, next) => { return total += next.productsInCart.quantity }, 0),
                        amount: item.cart.products.reduce((amount, next) => { return amount += next.productsInCart.quantity * parseFloat(next.price) }, 0),
                        products: item.cart.products
                      }

                      return <Purchase key={item.id} row={row} handleShowModal={handleShowModal} />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>





    </>

  )
}

export default Purchases