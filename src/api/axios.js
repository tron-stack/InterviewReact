import axios from "axios";

//configuration for HTTP requests

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        //Accept: "application/json",
        "Content-Type": "application/json",
        "Token": `${localStorage.getItem('Token')}`,
    }
})

export default axiosClient