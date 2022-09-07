import { configureStore } from "@reduxjs/toolkit";
import nameUser from './slices/nameUser.slice';
import products from './slices/products.slice';
import categorys from './slices/categorys.slice';
export default configureStore({
    reducer:{
        nameUser,
        products,
        categorys
    }
})