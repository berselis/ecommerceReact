import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const ProtectedRoutes = () => {

    const userToken = window.localStorage.getItem('token');


    if (userToken) {
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to='/login'/>
        )
    }
}

export default ProtectedRoutes;

