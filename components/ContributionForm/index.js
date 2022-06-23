import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./styles.module.scss";

const ContributionForm = () => {
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
        pinyin: "Pinyin",
        chineseName: "Chữ Hán",
        mean: "Nghĩa hẹp",
        deepMean: "Nghĩa rộng",
        explain: "Giải thích nghĩa",
        sino: "Từ Hán Việt",
    };

    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const [images, setImages] = useState([]);

    const handleUpload = (data) => {
        const formData = {
            ...data,
            images,
        };

        console.log(formData);
    };

    return (
        <form
            className={styles.formWrapper}
            onSubmit={handleSubmit((data) => handleUpload(data))}
        >
            {Object.keys(inputField).map((key, index) => {
                return (
                    <Controller
                        key={`uploadCharForm-${key}-${index}`}
                        name={key}
                        defaultValue=""
                        control={control}
                        render={({ field }) => (
                            <div className={styles.formControl}>
                                <span className={styles.label}>
                                    {inputField[key]}
                                </span>
                                <input
                                    placeholder={inputField[key]}
                                    className={styles.input}
                                    {...field}
                                />
                                {errors[key]?.message && (
                                    <div className={styles.text_error}>
                                        {errors[key]?.message}
                                    </div>
                                )}
                            </div>
                        )}
                    />
                );
            })}
            <Dropzone
                onDrop={(acceptedFiles) => {
                    setImages(acceptedFiles);
                }}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                                Drag n drop some files here, or click to select
                                files
                            </p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <button type="submit">Upload ngay</button>
        </form>
    );
};

export default ContributionForm;
