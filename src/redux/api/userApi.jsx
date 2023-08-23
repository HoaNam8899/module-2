import { http } from ".";
import { v4 as uuidv4 } from 'uuid';
export const userApi = {
    // getLogin: async (data) => {

    //     let response = await http.get(`users?username=${data.payload.username}&password=${data.payload.password}`);
    //     return response.data;
    // },
    post: async (data) => {
        data.payload = { ...data.payload, id: uuidv4() }
        await http.post('users', data.payload);
    },
    checkUsername: async (data) => {
        let response = await http.get(`users?username=${data.payload}`);
        return response.data;
    },
    checkEmail: async (data) => {
        let response = await http.get(`users?email=${data.payload}`);
        return response.data;
    },
    checkPhone: async (data) => {
        let response = await http.get(`users?phone=${data.payload}`);
        return response.data;
    },
    getAllUser: async () => {
        let response = await http.get(`users`);
        return response.data;
    },
    updateUser: async (data) => {
        await http.put(`users/${data.payload.id}`, data.payload);

    },
    deleteUser: async (data) => {
        await http.delete(`users/${data.payload}`);

    },
    getAdmin: async () => {
        let response = await http.get(`admin`);
        return response.data
    },


}

