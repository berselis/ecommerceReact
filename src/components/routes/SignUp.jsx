import React from 'react';
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) =>{
    console.log(data)

    reset();
  }

  return (
   <div className='container'>
      <div className='row'>

        <div className='form-layout'>
          <form onSubmit={handleSubmit(onSubmit)} className='row'>

            <h5><strong>Create new account</strong></h5>
            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('email')}  className='form-control' type='email' placeholder='Email' required/>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('firstName')}  className='form-control' type='text' placeholder='First name' required/>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('lastName')}  className='form-control' type='text' placeholder='Last name' required/>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('password')} className='form-control' type='password' placeholder='password' required/>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <input {...register('phone')}  className='form-control' type='text' placeholder='Phone' required/>
                <input {...register('role')} type='text' hidden value={'admin'}/>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <button className="btn">
                  <i className="bi bi-save2"></i>
                  <span>Ceate</span>
                </button>
              </div>
            </div>

            <div className='col-m-12'>
              <div className='form-group'>
                <span>Already have an account? <NavLink to='/login'>LogIn</NavLink></span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp