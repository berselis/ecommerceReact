import React from 'react';
import userLogo from '../../assets/media/png/user.png';
import { NavLink, useNavigate } from 'react-router-dom';

const User = () => {
    const navivate = useNavigate();
    const obj = JSON.parse(localStorage.getItem('user'));
    const handleLogOut = () => {
        localStorage.removeItem('user');
        navivate('/');
    }
    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="breadcrumb-item active"><a>User</a></li>
                    </ul>
                </div>
            </div>


            <div className='container'>
                <div className='row'>

                    <div className='form-layout'>
                        <div className='card-user'>
                            <div className='header'>
                                <img src={userLogo} />
                                <h6><strong>{obj.user.email}</strong></h6>
                                <small>{`${obj.user.firstName} ${obj.user.lastName}`}</small>

                            </div>
                            <div className='footer'>
                                <button onClick={handleLogOut} className='btn'>
                                    <i className="bi bi-box-arrow-left"></i>
                                    <span>LogOut</span>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default User