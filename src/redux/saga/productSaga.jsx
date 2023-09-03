import React from 'react'
import { productAction } from "../slice/productSlice";
import { productApi } from '../api/productApi';
import { put, call } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';
export const productSaga = {
    addProduct: function* (data) {
        try {

            yield call(productApi.post, data);
            yield put({ type: 'GET_ALL_PRODUCT' });
        } catch (err) {
            yield put()
        }
    },
    getAllProduct: function* () {
        try {
            let response = yield call(productApi.getAllProduct);
            yield put(productAction.getAllProductForShop(response));
            yield put(productAction.getAllProductSuccess(response));
        } catch (err) {
            yield put()
        }
    },
    updateProduct: function* (data) {
        try {
            yield call(productApi.updateProduct, data);
            yield put({ type: 'GET_ALL_PRODUCT' });
        } catch (err) {
            yield put()
        }
    },
    deleteProduct: function* (data) {
        try {
            yield call(productApi.deleteProduct, data);
            yield put({ type: 'GET_ALL_PRODUCT' });
        } catch (err) {
            yield put()
        }
    },
    addToCart: function* (data) {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            let product = carts.find(x => x.id == data.payload.id);
            if (product == undefined) {
                carts.push(data.payload)
            } else {
                product.qty += 1
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            yield put(productAction.getCart(carts))
        } catch (err) {
            yield put()
        }
    },
    deleteProductCart: function* (data) {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            let product = carts.findIndex(x => x.id == data.payload);
            carts.splice(product, 1);
            localStorage.setItem('carts', JSON.stringify(carts));
            yield put({ type: 'GET_PRODUCT_FOR_CART' })
        } catch (err) {
            yield put()
        }
    },
    changeQtyCart: function* (data) {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            let product = carts.find(x => x.id == data.payload[1]);
            if (data.payload[0] == 0) {
                product.qty > 1 ? product.qty -= 1 : product.qty = 1

            } else {
                product.qty += 1
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            yield put({ type: 'GET_PRODUCT_FOR_CART' })
        } catch (err) {
            yield put()
        }
    },
    deleteAllCart: function* () {
        try {
            let carts = [];
            localStorage.setItem('carts', JSON.stringify(carts));
            yield put(productAction.getCart(carts))
        } catch (err) {
            yield put()
        }
    },
    getProductForCart: function* () {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            yield put(productAction.getCart(carts))
        } catch (err) {
            yield put()
        }
    },
    ///////////////////////
    userOrder: function* (data) {
        try {
            let currentUser = data.payload[1]
            // console.log('data', data)
            // lấy ngày tháng năm
            const currentDate = (new Date()).toLocaleString();

            // data.payload = { ...data.payload, id: uuidv4() }
            let carts = JSON.parse(localStorage.getItem('carts'));
            let total = carts.map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.qty)).reduce((a, b) => a + b, 0)
            let newData = {
                userId: data.payload[0],
                billId: uuidv4(),
                date: currentDate,
                cart: carts,
                status: 'đang xử lý',
                total: total,
                currentUser: currentUser
            }
            localStorage.setItem('carts', JSON.stringify([]));

            yield call(productApi.userOrder, newData);
            // get orders
            let response = yield call(productApi.getOrder, data.payload[0]);
            yield put(productAction.getOrder(response))

            yield put(productAction.getCart([]))

        } catch (err) {
            yield put()
        }
    },
    getOrder: function* (data) {
        try {
            let response = yield call(productApi.getOrder, data.payload);
            yield put(productAction.getOrder(response))
        } catch (err) {
            yield put()
        }
    },
    productDetail: function* (data) {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            let currentProduct = carts.find(x => x.id == data.payload.id)
            if (currentProduct != undefined) {
                yield put(productAction.productDetail(currentProduct));
            } else {
                data.payload = { ...data.payload, qty: 1 }
                yield put(productAction.productDetail(data.payload));
            }
        } catch (err) {
            yield put()
        }
    },
    addProductDetail: function* (data) {
        try {
            let carts = JSON.parse(localStorage.getItem('carts')) || [];
            let currentProduct = carts.find(x => x.id == data.payload.id)
            if (currentProduct != undefined) {
                if (data.payload.qty <= 1) {
                    currentProduct.qty = 1
                } else {
                    currentProduct.qty = data.payload.qty;
                }
                // yield put(productAction.productDetail(currentProduct));
            } else {
                carts.push(data.payload)
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            yield put(productAction.getCart(carts))
        } catch (err) {
            yield put()
        }
    },
    // sort 
    sortProduct: function* (data) {
        try {

            if (data.payload === 'non') {
                yield put({ type: 'GET_ALL_PRODUCT' })
            } else if (data.payload === 'stocking' || data.payload === 'out of stock') {
                var response = yield call(productApi.sortStock, data.payload);
            } else {
                var response = yield call(productApi.sortCategory, data.payload);
            }
            yield put(productAction.getAllProductSuccess(response));
        } catch (err) {
            yield put()
        }
    },
    searchProduct: function* (data) {
        try {
            yield put(productAction.getAllProductSuccess(data.payload));
            // console.log(data.payload)
        } catch (err) {
            yield put()
        }
    },
}
