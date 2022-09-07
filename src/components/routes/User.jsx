import React from 'react';
import userLogo from '../../assets/media/png/user.png';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navivate = useNavigate();
    const obj = JSON.parse(localStorage.getItem('user'));
    const handleLogOut = () => {
        localStorage.removeItem('user');
        navivate('/');
    }
    return (
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
    )
}

export default User