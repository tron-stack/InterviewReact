import axios from "axios";

//configuration for HTTP requests
const axiosClient = axios.create(
        {
            baseURL: 'http://localhost:8000',
        }
    
    )

export default axiosClient