import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categorySlice = createSlice({
    name: 'categorys',
    initialState: null,
    reducers: {
        setCategorys: (state, action) => action.payload
    }
});

export const { setCategorys } = categorySlice.actions;
export default categorySlice.reducer;
export const getAllCategorys = () => async (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    try {
        const res = await axios.get(URL);
        return dispatch(setCategorys(res.data.data.categories));
    } catch (error) {
        return console.log(error)
    }
}