import axios from "../http-common";

const Integration = {

    apiCall(endpoint, method, data){
        if(method === "GET"){
            if(data != null){
                const params = new URLSearchParams(data);
                return axios.get(endpoint+"?"+params);
            } else {
                return axios.get(endpoint);
            }
        } else if(method === "POST"){
            return axios.post(endpoint, data);
        }
    },

    async createOrder(orderData){
        try {
            const Response = await this.apiCall("/order", "POST", orderData);
            return Response.data;
        } catch (error) {
            console.log(error)
        }
    },

    async fetchOrder(orderID){
        try {
            const Response = await this.apiCall(`/order/${orderID}`, "GET");
            return Response.data;
        } catch (error) {
            console.log(error)
        }
    }

}
export default Integration;