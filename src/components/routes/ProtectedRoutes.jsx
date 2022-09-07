import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getConfig } from '../../utils/getConfig.js';



export const ProtectedRoutes = () => {
    const userConfig = getConfig();
    if (userConfig) {
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to='/login' />
        )
    }
}

export default ProtectedRoutes;

