import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "../saga";
import createSagaMiddleware from 'redux-saga';
import useReducer from "../slice/userSlice";
import productReducer from "../slice/productSlice"
import orderReducer from "../slice/orderSlice"

const sagaMiddleware = createSagaMiddleware();

export const storeApp = configureStore({
    reducer: {
        user: useReducer,
        product: productReducer,
        order: orderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);