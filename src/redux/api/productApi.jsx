import { responsiveArray } from "antd/es/_util/responsiveObserver";
import { http } from ".";
import { v4 as uuidv4 } from 'uuid';
export const productApi = {
    post: async (data) => {
        if (data.payload.name != undefined) {
            data.payload = { ...data.payload, id: uuidv4() }
            await http.post('products', data.payload);
        }
    },
    getAllProduct: async () => {
        let response = await http.get('products');
        return response.data
    },
    updateProduct: async (data) => {
        await http.put(`products/${data.payload.id}`, data.payload);
    },
    deleteProduct: async (data) => {
        await http.delete(`products/${data.payload}`);
    },
    userOrder: async (data) => {
        await http.post('orders', data);
    },
    getOrder: async (data) => {
        let response = await http.get(`orders?userId=${data}`);
        return response.data
    },
    getUserForOrder: async (data) => {
        let response = await http.get(`users/${data.payload}`);
        return response.data
    },

    sortStock: async (data) => {
        let response = await http.get(`products?status=${data}`);
        return response.data
    },
    sortCategory: async (data) => {
        let response = await http.get(`products?category=${data}`);
        return response.data
    },


}