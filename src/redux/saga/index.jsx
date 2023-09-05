import { all, takeLatest } from "redux-saga/effects"
import { userSaga } from "./userSaga"
import { productSaga } from "./productSaga"
import { orderSaga } from "./orderSaga"
export const rootSaga = function* () {
    yield all([
        // user
        takeLatest("ADD_USER", userSaga.addUser),
        takeLatest("CHECK_EMAIL", userSaga.checkEmail),
        takeLatest("CHECK_USERNAME", userSaga.checkUsername),
        takeLatest("CURRENT_USER", userSaga.currentUser),
        // takeLatest("CURRENT_USER_LOCAL", userSaga.currentUserLocal),
        takeLatest("CHECK_PHONE", userSaga.checkPhone),
        takeLatest("GET_ALL_USER", userSaga.getAllUser),
        takeLatest("UPDATE_USER", userSaga.updateUser),
        takeLatest("DELETE_USER", userSaga.deleteUser),
        takeLatest("LOGOUT", userSaga.logout),
        takeLatest("UPDATE_USER_FROM_CHECKOUT", userSaga.updateUserFromCheckout),
        takeLatest("GET_ADMIN", userSaga.getAdmin),
        takeLatest("SEARCH_USER", userSaga.searchUser),
        takeLatest("GET_LOCAL_USER", userSaga.getLocalUser),
        



        // product
        takeLatest("ADD_PRODUCT", productSaga.addProduct),
        takeLatest("GET_ALL_PRODUCT", productSaga.getAllProduct),
        takeLatest("UPDATE_PRODUCT", productSaga.updateProduct),
        takeLatest("DELETE_PRODUCT", productSaga.deleteProduct),
        takeLatest("ADD_TO_CART", productSaga.addToCart),
        takeLatest("DELETE_PRODUCT_CART", productSaga.deleteProductCart),
        takeLatest("CHANGE_QTY_CART", productSaga.changeQtyCart),
        takeLatest("DELETE_ALL_CART", productSaga.deleteAllCart),
        takeLatest("USER_ORDER", productSaga.userOrder),
        takeLatest("GET_ORDERS", productSaga.getOrder),
        takeLatest("PRODUCT_DETAIL", productSaga.productDetail),
        takeLatest("ADD_PRODUCT_FROM_DETAIL", productSaga.addProductDetail),
        takeLatest("SORT_PRODUCT", productSaga.sortProduct),
        takeLatest("SEARCH_PRODUCT", productSaga.searchProduct),
        takeLatest("GET_PRODUCT_FOR_CART", productSaga.getProductForCart),

        // order
        takeLatest("GET_ALL_ORDER", orderSaga.getAllOrder),
        takeLatest("CHANGE_STATUS", orderSaga.changeStatus),
        takeLatest("CHANGE_QTY", orderSaga.changeQty),
        takeLatest("SEARCH_ORDER", orderSaga.searchOrder),

    ])
}