import axios from "./index";
import { AUTH_URI } from "/constants/api";

class UserClient {
    getUserInfo() {
        return axios
            .get(`${AUTH_URI}/getUserInfo`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    updateUserInfo(data) {
        return axios
            .post(`${AUTH_URI}/updateUserInfo`, { ...data })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}

export function getUserClient() {
    return new UserClient();
}
