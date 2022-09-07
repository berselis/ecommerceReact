import React from 'react';
import { NavLink } from 'react-router-dom';

const Purchases = () => {
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
            <li className="breadcrumb-item active"><a>Purchases</a></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='row'>

          <div className='col-md-12'>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>

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