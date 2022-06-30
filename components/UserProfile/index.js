import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import styles from "./styles.module.scss";
import { getCharactersClient } from "/apis/getCharactersClient";
import { getUserClient } from "/apis/getUserClient";

const columns = [
    { field: "id", headerName: "STT", width: 90 },
    { field: "chineseName", headerName: "Từ", width: 130 },
    { field: "pinyin", headerName: "Pinyin", width: 150 },
    {
        field: "date",
        headerName: "Ngày đóng góp",
        type: "dateTime",
        width: 180,
    },
    {
        field: "status",
        headerName: "Trạng thái",
        type: "boolean",
        width: 90,
    },
];

const mapListToRows = (contributedList) => {
    return contributedList.map((item, index) => {
        return {
            id: index + 1,
            chineseName: item.chineseName,
            pinyin: item.pinyin,
            date: new Date(item.timeUpload).toLocaleString(),
            status: item.isActive,
        };
    });
};

const UserProfile = () => {
    const [updateMode, setUpdateMode] = useState(false);
    const [email, setEmail] = useState("default@gmail.com");
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await getUserClient().getUserInfo();
                const tmp = await getCharactersClient().getMyChars();

                if (tmp?.success) {
                    const newRw = mapListToRows(tmp.characters);
                    setRows(newRw);
                }

                setEmail(res.data.email);
            } catch (error) {}
        };
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
                <Avatar
                    className={styles.avatar}
                    src="/images/avatar-cute.png"
                    alt=""
                />
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
                        {updateMode && (
                            <Button
                                variant="contained"
                                className="btnLightPrimiary"
                                type="button"
                                onClick={() => {
                                    handleChangeMode(false);
                                }}
                            >
                                Hủy
                            </Button>
                        )}
                    </Box>
                </Box>
            </div>

            <div
                className={styles.contributedList}
                style={{ height: rows.length !== 0 ? 420 : "initial" }}
            >
                <h2>Các từ đã đóng góp</h2>

                {rows.length !== 0 ? (
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        sx={{
                            padding: 2,
                        }}
                    />
                ) : (
                    <span>Chưa có đóng góp</span>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
