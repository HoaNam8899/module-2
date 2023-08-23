import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProduct: [],
    vegetable: [],
    meat: [],
    fish: [],
    fruit: [],
    frozen: [],
    packages: [],
    cart: [],
    orders: [],
    productDetail: []


};
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProductSuccess: (state, action) => {
            state.allProduct = action.payload
        },
        getAllProductForShop: (state, action) => {
            state.vegetable = action.payload.filter(x => x.category.indexOf('vegetable') >= 0);
            state.fruit = action.payload.filter(x => x.category.indexOf('fruit') >= 0);
            state.meat = action.payload.filter(x => x.category.indexOf('meat') >= 0);
            state.fish = action.payload.filter(x => x.category.indexOf('fish') >= 0);
            state.frozen = action.payload.filter(x => x.category.indexOf('frozen') >= 0);
            state.packages = action.payload.filter(x => x.category.indexOf('package') >= 0)
        },
        getCart: (state, action) => {
            state.cart = action.payload
        },
        getOrder: (state, action) => {
            state.orders = action.payload
        },
        productDetail: (state, action) => {
            state.productDetail = action.payload
        },

    }
})
export const { actions: productAction } = productSlice;
export default productSlice.reducer;