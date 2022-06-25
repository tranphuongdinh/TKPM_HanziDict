import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { getAuthClient } from "../../apis/getAuthClient";
import { AuthContext } from "../../context/auth/auth.context";

export default function SignInForm() {
    const schema = yup
        .object({
            email: yup
                .string()
                .email("Email không hợp lệ")
                .required("Trường này là bắt buộc"),
            password: yup.string().required("Mật khẩu không được để trống"),
        })
        .required();

    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const { authDispatch } = useContext(AuthContext);

    const router = useRouter();

    const handleSignIn = async (data) => {
        try {
            const res = await getAuthClient().login(data);
            if (res.data.message === "Successful.") {
                toast.success("Đăng nhập thành công!");
                authDispatch({
                    type: "LOGIN",
                    payload: res.data.data,
                });
                router.push("/");
            } else {
                toast.error(`Có lỗi xảy ra: ${res.data.message}`);
            }
        } catch (e) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
        }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit((data) => handleSignIn(data))}
        >
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
                            label="Password"
                            helperText={errors?.password?.message}
                            variant="standard"
                            type="password"
                            {...field}
                        />
                    )}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Đăng nhập
                </Button>
            </Box>
        </Box>
    );
}
