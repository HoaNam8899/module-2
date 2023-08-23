import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currentUser: [],
    check: {
        username: false,
        email: false,
        phone: false
    },
    allUser: [],
    admin: []
    // userCart: [],
    // totalPrice: [],
    // bill: []
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.currentUser = action.payload

        },
        resultCheckUsername: (state, action) => {
            state.check.username = action.payload
        },
        resultCheckEmail: (state, action) => {
            state.check.email = action.payload
        },
        resultCheckPhone: (state, action) => {
            state.check.phone = action.payload
        },
        resultGetAllUser: (state, action) => {
            state.allUser = action.payload
        },
        getAminSuccess: (state, action) => {
            state.admin = action.payload

        },
    }
})
export const { actions: userAction } = userSlice;
export default userSlice.reducer;