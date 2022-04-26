import axios from "../http-common";
/**
 * Request calls to the backend API
 */
const Integration = {
    apiCall(endpoint, method, data){
        if(method === "GET") {
            if(data != null) {
                const params = new URLSearchParams(data);
                return axios.get(endpoint + "?" + params);
            } else {
                return axios.get(endpoint);
            }
        } else if(method === "POST") {
            return axios.post(endpoint, data);
        }
    },

    async createOrder(orderData) {
        try {
            const response = await this.apiCall("/order", "POST", orderData);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    async fetchOrder(orderID) {
        try {
            const response = await this.apiCall(`/checkout/${orderID}`, "GET");
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}
export default Integration;