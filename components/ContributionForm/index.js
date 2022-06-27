import { yupResolver } from "@hookform/resolvers/yup";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import NoSsr from "@mui/material/NoSsr";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import FileUpload from "../FileUploader";
import styles from "./styles.module.scss";
import { getCharactersClient } from "/apis/getCharactersClient";

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
    sino: "Từ Hán Việt",
    mean: "Nghĩa",
    deepMean: "Nghĩa mở rộng",
    explain: "Giải thích",
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [images, setImages] = useState([]);

  const handleUpload = async (data) => {
    const formData = {
      ...data,
      images,
    };

    const res = await getCharactersClient().uploadChar(formData);
  };

  const handleFileUploadError = (error) => {
    toast.error(error);
  };

  const handleFilesChange = (files) => {
    setImages(files);
  };

  return (
    <Card sx={{ p: 2 }}>
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
                sm={6}
                xl={4}
                key={`uploadCharForm-${key}-${index}`}
              >
                <Controller
                  name={key}
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      error={!!errors[key]}
                      label={inputField[key]}
                      multiline
                      defaultValue=""
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
              header="Drop your images here"
              leftLabel="or"
              rightLabel="to select files"
              buttonLabel="click here"
              buttonRemoveLabel="Remove all"
              maxFileSize={10}
              maxUploadFiles={0}
              maxFilesContainerHeight={357}
              errorSizeMessage={""}
              allowedExtensions={["jpg", "jpeg", "png"]}
              onFilesChange={handleFilesChange}
              onError={handleFileUploadError}
              imageSrc={"/images/icon.png"}
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
            Upload
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default ContributionForm;
