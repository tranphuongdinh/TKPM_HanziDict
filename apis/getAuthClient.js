import axios from "./index";
import { USER_URI } from "../constants/api";

class AuthClient {
    login(formData) {
        return axios
            .post(`${USER_URI}/DangNhap`, { ...formData })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    register(formData) {
        return axios
            .post(`${USER_URI}/DangKy`, { ...formData })
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
