import { CHAR_URI } from "../constants/api";
import axios from "./index";

class CharactersClient {
    getAllChars() {
        return axios
            .get(`${CHAR_URI}/allCharacters`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getCharById(id) {
        return axios
            .get(`${CHAR_URI}/getCharacter/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    registerChar(formData) {
        return axios
            .post(`${CHAR_URI}/uploadCharacter`, { ...formData })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    search(prefix) {
        return axios
            .get(`${CHAR_URI}/autocomplete/${prefix}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }
}

export function getCharactersClient() {
    return new CharactersClient();
}