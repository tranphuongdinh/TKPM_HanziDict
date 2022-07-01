import { yupResolver } from "@hookform/resolvers/yup";
import ClearIcon from "@mui/icons-material/Clear";
import UploadIcon from "@mui/icons-material/Upload";
import {
    IconButton,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import NoSsr from "@mui/material/NoSsr";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import FileUpload from "../FileUploader";
import styles from "./styles.module.scss";
import LoadingScreen from "/components/LoadingScreen";
import { PRIMARY_COLOR } from "/constants/style";
import { uploadImageToFirebase } from "/utils";

const EditCharForm = ({ defaultChar, handleUpdate, handleClose }) => {
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
    const [images, setImages] = useState([...defaultChar.img]);
    const [addImages, setAddImages] = useState([]);

    const handleUpload = async (data) => {
        setLoading(true);
        const imageUrls = await Promise.all(
            addImages.map((image, index) =>
                uploadImageToFirebase(image, image.name)
            )
        );

        const formData = {
            ...defaultChar,
            ...data,
            img: [...images, ...imageUrls],
        };

        await handleUpdate(defaultChar, "UPDATE", formData);
    };

    const handleFileUploadError = (error) => {
        toast.error(`Có lỗi xảy ra khi tải file: ${error}`);
    };

    const handleFilesChange = (files) => {
        setAddImages(files);
    };

    useEffect(() => {
        reset({ ...defaultChar });
    }, [defaultChar]);

    return (
        <Card
            sx={{
                p: 2,
                maxWidth: 800,
                width: "calc(100% - 40px)",
                maxHeight: "calc(100% - 40px)",
                overflow: "auto",
                position: "relative",
            }}
        >
            <IconButton
                sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    zIndex: 2,
                }}
                onClick={handleClose}
            >
                <ClearIcon></ClearIcon>
            </IconButton>
            {loading && <LoadingScreen />}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: PRIMARY_COLOR,
                    textAlign: "center",
                    mb: 4,
                    mt: 1,
                }}
            >
                Chi tiết từ đóng góp
            </Typography>
            <form
                className={styles.formWrapper}
                onSubmit={handleSubmit((data) => handleUpload(data))}
            >
                <Grid container spacing={2}>
                    {Object.keys(inputField).map((key, index) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                md={index < 4 ? 6 : 12}
                                key={uuidv4()}
                            >
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
                    <ImageList cols={4} rowHeight={160}>
                        {images.map((item, index) => {
                            return (
                                <ImageListItem
                                    key={uuidv4()}
                                    sx={{ position: "relative" }}
                                >
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            right: -0,
                                            zIndex: 2,
                                        }}
                                        onClick={() => {
                                            setImages(
                                                images.filter(
                                                    (img, imgIndex) =>
                                                        imgIndex !== index
                                                )
                                            );
                                        }}
                                    >
                                        <ClearIcon></ClearIcon>
                                    </IconButton>
                                    <Image
                                        priority
                                        src={item}
                                        layout="fill"
                                        style={{ transform: "scale(0.7)" }}
                                        alt={`${defaultChar.pinyin}-${defaultChar.chineseName}-${index}`}
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                </NoSsr>
                <NoSsr>
                    <Box sx={{ mt: 2, my: 2 }} className="fileUploadWrapper">
                        <FileUpload
                            multiFile={true}
                            disabled={false}
                            title="Thêm ảnh minh họa từ"
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
                        Cập nhật
                    </Button>
                </Box>
            </form>
        </Card>
    );
};

export default EditCharForm;
