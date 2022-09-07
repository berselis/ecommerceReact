import React from 'react';
import { NavLink } from 'react-router-dom';


const AppHeader = () => {


  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavLink to='/' className={'navbar-brand'}><h2>MENU</h2></NavLink>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
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

                <a className="btn cart">
                  <i className="bi bi-cart"></i>
                  <span>Cart</span>
                </a>
              </div>
              <div className="nav-item dropdown">

                <div className="dropdown-menu">
                  <button className='btn'>User</button>
                  <button className='btn'>Purchases</button>
                  <button className='btn'>Shopping cart</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AppHeader