import { createSlice} from "@reduxjs/toolkit";

const nameUserSlice = createSlice({
    name: 'nameUser',
    initialState: '',
    reducers:{
        setNametrainer: (stete, action) => action.payload
    }
});
export const {setNametraine} = nameUserSlice.actions;
export default nameUserSlice.reducer;