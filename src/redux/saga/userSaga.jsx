import { put, call } from "redux-saga/effects";
import { userAction } from "../slice/userSlice";
import { userApi } from "../api/userApi";


export const userSaga = {
    addUser: function* (data) {
        try {
            yield call(userApi.post, data);
            yield put({ type: 'GET_ALL_USER' });
        } catch (err) {
            yield put()
        }
    },
    checkUsername: function* (data) {
        try {

            let response = yield call(userApi.checkUsername, data);
            if (response.length > 0) {
                yield put(userAction.resultCheckUsername(true))
            } else {
                yield put(userAction.resultCheckUsername(false))
            }
        } catch (err) {
            yield put()
        }
    },
    checkEmail: function* (data) {
        try {

            let response = yield call(userApi.checkEmail, data);
            if (response.length > 0) {
                yield put(userAction.resultCheckEmail(true))
            } else {
                yield put(userAction.resultCheckEmail(false))
            }

        } catch (err) {
            yield put()
        }
    },
    checkPhone: function* (data) {
        try {

            let response = yield call(userApi.checkPhone, data);
            if (response.length > 0) {
                yield put(userAction.resultCheckPhone(true))
            } else {
                yield put(userAction.resultCheckPhone(false))
            }

        } catch (err) {
            yield put()
        }
    },
    currentUser: function* (data) {
        try {

            // let arrayName = data.payload.fullName.split(' ');
            // let lastName = arrayName[arrayName.length - 1];
            // let firstName = arrayName.slice(0, arrayName.length - 1).join(' ');
            // data.payload = { ...data.payload, firstName: firstName }
            // data.payload = { ...data.payload, lastName: lastName }
            yield put(userAction.currentUser(data.payload));

        } catch (err) {
            yield put()
        }
    },
    getAllUser: function* () {
        try {
            let data = yield call(userApi.getAllUser);
            yield put(userAction.resultGetAllUser(data));
        } catch (err) {
            yield put()
        }
    },
    updateUser: function* (data) {
        try {
            yield call(userApi.updateUser, data);
            yield put({ type: 'GET_ALL_USER' });
            yield put(userAction.currentUser(data.payload));
        } catch (err) {
            yield put()
        }
    },
    deleteUser: function* (data) {
        try {
            yield call(userApi.deleteUser, data);
            yield put({ type: 'GET_ALL_USER' });
        } catch (err) {
            yield put()
        }
    },
    logout: function* () {
        try {
            let data = []
            yield put(userAction.currentUser(data));
        } catch (err) {
            yield put()
        }
    },
    // updateUserFromCheckout
    updateUserFromCheckout: function* (data) {
        try {
            yield call(userApi.updateUser, data);
            yield put(userAction.currentUser(data.payload));
        } catch (err) {
            yield put()
        }
    },

    getAdmin: function* () {
        try {
            let response = yield call(userApi.getAdmin);
            yield put(userAction.getAminSuccess(response))
        } catch (err) {
            yield put()
        }
    },

    searchUser: function* (data) {
        try {

            yield put(userAction.resultGetAllUser(data.payload));
        } catch (err) {
            yield put()
        }
    },
}
