import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { getAuthClient } from "/apis/getAuthClient";
import LoadingScreen from "/components/LoadingScreen";
import { AuthContext } from "/context/auth/auth.context";

export default function SignUpForm() {
    const schema = yup
        .object({
            email: yup
                .string()
                .email("Email không hợp lệ")
                .required("Trường này là bắt buộc"),
            password: yup.string().required("Mật khẩu không được để trống"),
            confirmedPassword: yup
                .string()
                .oneOf(
                    [yup.ref("password"), null],
                    "Xác nhận mật khẩu không đúng"
                ),
        })
        .required();

    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const { authDispatch } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const handleSignIn = async (data) => {
        setLoading(true);
        const res = await getAuthClient().login(data);
        if (res?.data?.message === "OK") {
            authDispatch({
                type: "LOGIN",
                payload: res.data.data,
            });
            setLoading(false);
            window.location.reload();
            return;
        }
        toast.error(
            res?.data?.message
                ? `Có lỗi xảy ra: ${res.data.message}`
                : "Email hoặc mật khẩu không đúng!"
        );
        setLoading(false);
    };

    const handleSignUp = async (data) => {
        setLoading(true);
        const res = await getAuthClient().signup(data);
        if (res?.data?.message === "OK") {
            toast.success("Đăng ký thành công!");
            const { email, password } = data;
            await handleSignIn({ email, password });
            return;
        }
        toast.error(
            res?.data?.message
                ? `Có lỗi xảy ra: ${res.data.message}`
                : "Email đã được đăng kí!"
        );
        setLoading(false);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit((data) => handleSignUp(data))}
        >
            {loading && <LoadingScreen />}
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <TextField
                            error={!!errors?.email}
                            label="Email"
                            helperText={errors?.email?.message}
                            variant="standard"
                            type="email"
                            sx={{ mb: 2 }}
                            {...field}
                        />
                    )}
                />

                <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <TextField
                            error={!!errors?.password}
                            label="Mật khẩu"
                            helperText={errors?.password?.message}
                            variant="standard"
                            type="password"
                            autoComplete="current-password"
                            sx={{ mb: 2 }}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="confirmedPassword"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <TextField
                            error={errors?.confirmedPassword}
                            label="Xác nhận mật khẩu"
                            helperText={errors?.confirmedPassword?.message}
                            variant="standard"
                            type="password"
                            autoComplete="confirm-current-password"
                            {...field}
                        />
                    )}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    className="btnPrimary"
                    variant="contained"
                    sx={{ mt: 2 }}
                    type="submit"
                >
                    Đăng ký
                </Button>
            </Box>
        </Box>
    );
}
