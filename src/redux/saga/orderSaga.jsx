import React from 'react'
import { orderAction } from "../slice/orderSlice";
import { orderApi } from '../api/orderApi';
import { put, call } from "redux-saga/effects";

export const orderSaga = {
    getAllOrder: function* () {
        try {

            let response = yield call(orderApi.getAllOrder);
            yield put(orderAction.getAllOrder(response))
        } catch (err) {
            yield put()
        }
    },
    changeStatus: function* (data) {
        try {
            yield call(orderApi.changeStatus, data);
            yield put({ type: "GET_ALL_ORDER" })
        } catch (err) {
            yield put()
        }
    },
    changeQty: function* (data) {
        try {
            yield call(orderApi.changeQty, data);
            yield put({ type: "GET_ALL_ORDER" })
        } catch (err) {
            yield put()
        }
    },
}