import axios from "./index";
import { CHAR_URI } from "/constants/api";

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

    getMyChars() {
        return axios
            .get(`${CHAR_URI}/getMyCharacters`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    getAllUnactivateChars() {
        return axios
            .get(`${CHAR_URI}/getAllUnactivateCharacters`)
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

    uploadChar(formData) {
        return axios
            .post(`${CHAR_URI}/uploadCharacter`, { ...formData })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    activateChar(id) {
        return axios
            .put(`${CHAR_URI}/activateCharacter/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    deleteChar(id) {
        return axios
            .put(`${CHAR_URI}/deleteCharacter/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error?.response?.data;
            });
    }

    updateChar(id, formData) {
        return axios
            .put(`${CHAR_URI}/updateCharacter/${id}`, { ...formData })
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
