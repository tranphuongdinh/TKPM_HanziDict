import { yupResolver } from "@hookform/resolvers/yup";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import NoSsr from "@mui/material/NoSsr";
import TextField from "@mui/material/TextField";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import { storage } from "../../firebase";
import FileUpload from "../FileUploader";
import styles from "./styles.module.scss";
import { getCharactersClient } from "/apis/getCharactersClient";
import LoadingScreen from "/components/LoadingScreen";

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

const uploadImageToFirebase = async (file) => {
    const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);
    const fileToUpload = dataURLtoFile(file.path, file.name);
    await uploadBytes(imageRef, fileToUpload);
    const url = await getDownloadURL(imageRef);
    return url;
};

const ContributionForm = ({ defaultChar }) => {
    const schema = yup
        .object({
            pinyin: yup.string().required("Trường này là bắt buộc"),
            chineseName: yup.string().required("Trường này là bắt buộc"),
            mean: yup.string().required("Trường này là bắt buộc"),
            deepMean: yup.string().required("Trường này là bắt buộc"),
            explain: yup.string().required("Trường này là bắt buộc"),
            sino: yup.string().required("Trường này là bắt buộc"),
        })
        .required();

    const inputField = {
        pinyin: { label: "Pinyin" },
        chineseName: {
            label: "Chữ Hán",
        },
        sino: { label: "Từ Hán Việt" },
        mean: { label: "Nghĩa" },
        deepMean: { label: "Nghĩa mở rộng" },
        explain: { label: "Giải thích" },
    };

    const {
        formState: { errors },
        control,
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            chineseName: defaultChar?.chineseName || "",
            pinyin: defaultChar?.pinyin || "",
            sino: defaultChar?.sino || "",
            mean: defaultChar?.mean || "",
            deepMean: defaultChar?.deepMean || "",
            explain: defaultChar?.explain || "",
        },
    });

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const handleUpload = async (data) => {
        setLoading(true);
        const imageUrls = await Promise.all(
            images.map((image) => uploadImageToFirebase(image))
        );

        const formData = {
            ...data,
            images: imageUrls,
        };

        const res = await getCharactersClient().uploadChar(formData);
        setLoading(false);

        if (res?.message === "OK") {
            toast.success("Đóng góp chiết tự thành công!");
        } else {
            toast.error("Có lỗi xảy ra!");
        }
    };

    const handleFileUploadError = (error) => {
        toast.error(`Có lỗi xảy ra khi tải file: ${error}`);
    };

    const handleFilesChange = (files) => {
        setImages(files);
    };

    useEffect(() => {
        reset({ ...defaultChar });
    }, [defaultChar]);

    return (
        <Card sx={{ p: 2 }}>
            {loading && <LoadingScreen />}
            <form
                className={styles.formWrapper}
                onSubmit={handleSubmit((data) => handleUpload(data))}
            >
                <Grid container spacing={2}>
                    {Object.keys(inputField).map((key, index) => {
                        return (
                            <Grid item xs={12} sm={6} xl={4} key={uuidv4()}>
                                <Controller
                                    name={key}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            sx={{ width: "100%" }}
                                            error={!!errors[key]}
                                            label={inputField[key].label}
                                            multiline
                                            helperText={errors[key]?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <NoSsr>
                    <Box sx={{ mt: 2, my: 2 }}>
                        <FileUpload
                            multiFile={true}
                            disabled={false}
                            title="Ảnh minh họa từ"
                            header="Kéo ảnh vào đây"
                            leftLabel="hoặc"
                            rightLabel="để chọn file"
                            buttonLabel="click vào đây"
                            buttonRemoveLabel="Remove all"
                            maxFileSize={10}
                            maxUploadFiles={0}
                            maxFilesContainerHeight={357}
                            errorSizeMessage={""}
                            allowedExtensions={["jpg", "jpeg", "png"]}
                            onFilesChange={handleFilesChange}
                            onError={handleFileUploadError}
                            imageSrc={"/images/logocute.png"}
                            bannerProps={{ elevation: 0, variant: "outlined" }}
                            containerProps={{
                                elevation: 0,
                                variant: "outlined",
                            }}
                        />
                    </Box>
                </NoSsr>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        type="submit"
                        className="btnPrimary"
                        endIcon={<UploadIcon />}
                    >
                        Tải lên
                    </Button>
                </Box>
            </form>
        </Card>
    );
};

export default ContributionForm;
