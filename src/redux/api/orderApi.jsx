import { http } from ".";

export const orderApi = {
    getAllOrder: async () => {

        let response = await http.get('orders');
        return response.data

    },
    changeStatus: async (data) => {

        let response = await http.get(`orders?billId=${data.payload[0]}`);
        response.data[0].status = data.payload[1]
        await http.put(`orders/${response.data[0].id}`, response.data[0])

    },
    changeQty: async (data) => {
        let response = await http.get(`orders?billId=${data.payload[2]}`);
        //
        let a = response.data[0].cart.find(x => x.id == data.payload[1])
        a.qty = parseInt(data.payload[0])
        //
        let total = response.data[0].cart.map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.qty)).reduce((a, b) => a + b, 0)
        response.data[0].total = total
        await http.put(`orders/${response.data[0].id}`, response.data[0])
    },

}