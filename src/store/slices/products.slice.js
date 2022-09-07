import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => action.payload
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
export const getAllProducts = () => async (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products';
    try {
        const res = await axios.get(URL);
        return dispatch(setProducts(res.data.data.products));
    } catch (error) {
        return console.log(error);
    }

}