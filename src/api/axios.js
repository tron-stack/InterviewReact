import axios from "axios";

//configuration for HTTP requests
const axiosClient = axios.create(
        {
            baseURL: 'http://localhost:8000',
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("Token")}`
            }
        }
    
    )

export default axiosClient