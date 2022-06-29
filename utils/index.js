import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";

import { storage } from "../firebase";

export const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
};

export const uploadImageToFirebase = async (file, filename) => {
    const imageRef = ref(storage, `images/${uuid()}-${filename}`);
    const fileToUpload = dataURLtoFile(file.path, file.name);
    await uploadBytes(imageRef, fileToUpload);
    const url = await getDownloadURL(imageRef);
    return url;
};

export const stringToSlug = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const shuffle = (array) => {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
