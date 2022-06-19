import { USER_URI } from "../constants/api";
import axios from "./index";

class AuthClient {
    login(formData) {
        return axios
            .post(`${USER_URI}/login`, { ...formData })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    register(formData) {
        return axios
            .post(`${USER_URI}/register`, { ...formData })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }
}

export function getAuthClient() {
    return new AuthClient();
}
