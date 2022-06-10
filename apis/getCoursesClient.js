import qs from "qs";
import axios from "./index";
import { COURSES_URI } from "../constants/api";

class CoursesClient {
    getCourses(query) {
        const q = { ...query };
        return axios
            .get(`${COURSES_URI}/LayDanhSachKhoaHoc?${qs.stringify(q)}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getCoursesByCategory(maDanhMuc, MaNhom = "GP01") {
        const q = { maDanhMuc, MaNhom };
        return axios
            .get(`${COURSES_URI}/LayKhoaHocTheoDanhMuc?${qs.stringify(q)}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getCoursesByPage(page = 1, pageSize = 10, tenKhoaHoc = "", maNhom = "") {
        const q = { page, pageSize, tenKhoaHoc, maNhom };
        return axios
            .get(
                `${COURSES_URI}/LayDanhSachKhoaHoc_PhanTrang?${qs.stringify(q)}`
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getCourseDetail(maKhoaHoc) {
        return axios
            .get(`${COURSES_URI}/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getCategory() {
        return axios
            .get(`${COURSES_URI}/LayDanhMucKhoaHoc`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getStudentInfoOfCourse(maKhoaHoc) {
        return axios
            .get(
                `${COURSES_URI}/LayThongTinHocVienKhoaHoc?maKhoaHoc=${maKhoaHoc}`
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    registerCourse(maKhoaHoc, taiKhoan) {
        return axios
            .post(`${COURSES_URI}/DangKyKhoaHoc`, { maKhoaHoc, taiKhoan })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    unregisterCourse(maKhoaHoc, taiKhoan) {
        return axios
            .post(`${COURSES_URI}/HuyGhiDanh`, { maKhoaHoc, taiKhoan })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }
}

export function getCoursesClient() {
    return new CoursesClient();
}
