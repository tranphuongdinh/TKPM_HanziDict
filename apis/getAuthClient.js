import { AUTH_URI } from "../constants/api";
import axios from "./index";

class AuthClient {
    login(formData) {
        return axios
            .post(`${AUTH_URI}/login`, { ...formData })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    signup(formData) {
        return axios
            .post(`${AUTH_URI}/signup`, { ...formData })
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
