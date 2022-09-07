import React from 'react';
import { NavLink } from 'react-router-dom';


const AppHeader = () => {

  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <NavLink to='/' className={'navbar-brand'}></NavLink>
         

          <div className='navbar-collapse justify-content-between'>
            <div className="navbar-nav mr-auto">
              <NavLink to='/' className={'nav-item nav-link'}><h2>E-Commerce</h2></NavLink>
            </div>
            <div className="navbar-nav ml-auto">
              <div className="user">
                <NavLink to='/user' className={'btn wishlist'}>
                  <i className="bi bi-person-circle"></i>
                  <span>User</span>
                </NavLink>

                <NavLink to='/purchases' className='btn cart'>
                  <i className="bi bi-shop-window"></i>
                  <span>Purchases</span>
                </NavLink>

                <NavLink to='/shoppingcart' className='btn cart'>
                  <i className="bi bi-cart"></i>
                  <span>Cart</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AppHeader