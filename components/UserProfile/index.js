import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import styles from "./styles.module.scss";
import { getUserClient } from "/apis/getUserClient";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const UserProfile = () => {
    const [updateMode, setUpdateMode] = useState(false);
    const [email, setEmail] = useState("default@gmail.com");

    const getUser = async () => {
        try {
            const res = await getUserClient().getUserInfo();
            setEmail(res.data.email);
        } catch (error) {}
    };
    useEffect(() => {
        getUser();
    }, []);

    const schema = yup
        .object({
            password: yup.string().required("Mật khẩu không được để trống"),
            newPassword: yup.string().required("Mật khẩu không được để trống"),
            confirmedNewPassword: yup
                .string()
                .oneOf(
                    [yup.ref("newPassword"), null],
                    "Xác nhận mật khẩu không đúng"
                ),
        })
        .required();
    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const handleChangePassword = async (data) => {
        if (!updateMode) {
            setUpdateMode(true);
        } else {
            const formData = {
                password: data.password,
                newPassword: data.newPassword,
            };
            const res = await getUserClient().updateUserInfo(formData);
            if (res?.message === "OK") {
                toast.success("Đổi mật khẩu thành công");
            } else {
                toast.error(
                    "Đã có lỗi xảy ra hoặc mật khẩu hiện tại không đúng"
                );
            }
            setUpdateMode(false);
        }
    };

    const handleChangeMode = (mode) => {
        setUpdateMode(mode);
    };

    return (
        <div className={styles.wapper}>
            <div className={styles.profile}>
                <Avatar className={styles.avatar} src="" alt="" />
                <Box
                    className={styles.info}
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit((data) =>
                        handleChangePassword(data)
                    )}
                >
                    <Box>
                        <TextField
                            className={styles.infoField}
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            disabled
                        />
                        <Controller
                            name="password"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    error={!!errors?.password}
                                    helperText={errors?.password?.message}
                                    className={styles.infoField}
                                    label="Mật khẩu cũ"
                                    variant="outlined"
                                    type="password"
                                    disabled={!updateMode}
                                    style={
                                        !updateMode
                                            ? { display: "none" }
                                            : {
                                                  display: "inline-flex",
                                                  width: "100%",
                                              }
                                    }
                                    {...field}
                                />
                            )}
                        />

                        <Controller
                            name="newPassword"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    className={styles.infoField}
                                    error={!!errors?.newPassword}
                                    helperText={errors?.newPassword?.message}
                                    label="Mật khẩu mới"
                                    variant="outlined"
                                    type="password"
                                    disabled={!updateMode}
                                    style={
                                        !updateMode
                                            ? { display: "none" }
                                            : {
                                                  display: "inline-flex",
                                                  width: "100%",
                                              }
                                    }
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="confirmedNewPassword"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    className={styles.infoField}
                                    error={!!errors?.confirmedNewPassword}
                                    helperText={
                                        errors?.confirmedNewPassword?.message
                                    }
                                    label="Xác nhận mật khẩu mới"
                                    variant="outlined"
                                    type="password"
                                    disabled={!updateMode}
                                    style={
                                        !updateMode
                                            ? { display: "none" }
                                            : {
                                                  display: "inline-flex",
                                                  width: "100%",
                                              }
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ width: "100%", textAlign: "center" }}>
                        {!updateMode && (
                            <Button
                                variant="contained"
                                className="btnPrimary"
                                type="button"
                                sx={{ marginRight: "20px" }}
                                onClick={() => {
                                    handleChangeMode(true);
                                }}
                            >
                                Đổi mật khẩu
                            </Button>
                        )}
                        {updateMode && (
                            <Button
                                variant="contained"
                                className="btnPrimary"
                                type="submit"
                                sx={{ marginRight: "20px" }}
                            >
                                Lưu thay đổi
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            className="btnLightPrimiary"
                            type="button"
                            onClick={() => {
                                handleChangeMode(false);
                            }}
                            sx={
                                updateMode
                                    ? { display: "inline-flex" }
                                    : { display: "none" }
                            }
                        >
                            Hủy
                        </Button>
                    </Box>
                </Box>
            </div>
            <div className={styles.contributedList}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default UserProfile;
