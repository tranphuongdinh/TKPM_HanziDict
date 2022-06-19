import axios from "axios";

import { REST_API_URL } from "../constants/api";

const axiosInstance = axios.create({
    baseURL: REST_API_URL,
    timeout: 5000,
});

export default axiosInstance;
