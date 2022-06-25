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
        .oneOf([yup.ref("password"), null], "Xác nhận mật khẩu không đúng"),
    })
    .required();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignUp = async (data) => {
    try {
      const res = await getAuthClient().signup(data);
      console.log(res.data);
      if (res.data.message === "User is saved successfully") {
        toast.success("Đăng ký thành công!");
      } else {
        toast.error(`Có lỗi xảy ra: ${res.data.message}`);
      }
    } catch (e) {
      toast.error("Email đã được đăng ký!");
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => handleSignUp(data))}
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
              label="Confirm Password"
              helperText={errors?.confirmedPassword?.message}
              variant="standard"
              type="password"
              {...field}
            />
          )}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Đăng ký
        </Button>
      </Box>
    </Box>
  );
}
