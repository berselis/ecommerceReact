import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {

  const { register, handleSubmit, reset } = useForm();
  const [showInvalidCredential, setShowinvalidCredential] = useState();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login';
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.data));
        setShowinvalidCredential('');
        reset();
        navigate('/user')

      }).catch(() => {
        setShowinvalidCredential('show-login-invalid');
      })

  }
  return (
    <div className='container'>
      <div className='row'>

        <div className='form-layout'>
          <form onSubmit={handleSubmit(onSubmit)} className='row'>

            <h5><strong>Welcome! Enter your email and password to continue</strong></h5>
            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('email')} className='form-control' type='email' placeholder='email' required />
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('password')} className='form-control' type='password' placeholder='password' required />
              </div>
            </div>

            <div className='col-md-12'>
              <div className='form-group'>
                <h6 className={`login-invalid ${showInvalidCredential}`}><strong>invalid credential!!</strong></h6>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <button className="btn">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>LogIn</span>
                </button>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <span>Don't have an account? <NavLink to='/signup'>Sing Up</NavLink></span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn