import axios from "./index";
import { USER_URI } from "../constants/api";

class UserClient {
    getUserInfo() {
        return axios
            .post(`${USER_URI}/ThongTinNguoiDung`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    getAccountInfo() {
        return axios
            .post(`${USER_URI}/ThongTinTaiKhoan`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    updateUser(data) {
        return axios
            .put(`${USER_URI}/CapNhatThongTinNguoiDung`, { ...data })
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
