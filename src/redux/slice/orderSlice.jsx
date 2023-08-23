import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allOrder: []
};
export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getAllOrder: (state, action) => {
            state.allOrder = action.payload
        }
    }
})
export const { actions: orderAction } = orderSlice;
export default orderSlice.reducer;