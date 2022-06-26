import axios from "axios";

import { REST_API_URL } from "/constants/api";

const axiosInstance = axios.create({
    baseURL: REST_API_URL,
    timeout: 5000,
    headers: {
        "Accept-Version": 1,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${
            typeof window !== "undefined"
                ? localStorage.getItem("access_token")
                : ""
        }`,
    },
});

export default axiosInstance;
