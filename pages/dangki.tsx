import React, { useContext, useEffect } from "react";
import { getAuthClient } from "../apis/getAuthClient";
import { useRouter } from "next/router";
import { NextPage } from "next";
import {
    AuthForm,
    ButtonSubmit,
    InputGroup,
    InputLabel,
    LoginContainer,
    LoginContent,
    LoginWrapper,
    RegisterText,
    ToggleShowPassword,
    Validator,
    ValidatorError,
} from "../containers/Auth/Auth.style";
import {
    EMAIL,
    MIN_LENGTH,
    PASSWORD,
    START_WITH_ALPHABET,
} from "../constants/validation";
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "../context/auth/auth.context";
import { toast } from "react-toastify";

const Register: NextPage = () => {
    const {
        authState: { isAuthenticated },
        authDispatch,
    } = useContext<any>(AuthContext);

    const [taiKhoan, setTaiKhoan] = React.useState("");
    const [matKhau, setMatKhau] = React.useState("");
    const [xacNhanMatKhau, setXacNhanMatKhau] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [hoTen, setHoTen] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [soDienThoai, setSoDienThoai] = React.useState("");
    const router = useRouter();

    const validateAll = () => {
        return (
            checkRegex(taiKhoan, MIN_LENGTH) &&
            checkRegex(taiKhoan, START_WITH_ALPHABET) &&
            checkRegex(matKhau, MIN_LENGTH) &&
            checkRegex(matKhau, PASSWORD) &&
            matKhau === xacNhanMatKhau
        );
    };

    const checkRegex = (value: string, regex: RegExp) => {
        if (!value) return false;
        return regex.test(value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            taiKhoan: taiKhoan,
            matKhau: matKhau,
            hoTen: hoTen || "Unnamed",
            email: email,
            soDienThoai: soDienThoai || "0123456789",
            maNhom: "GP01",
            maLoaiNguoiDung: "HV",
        };

        if (validateAll()) {
            const res = await getAuthClient().register(data);
            if (res.data) {
                const res = await getAuthClient().login(data);
                if (res.data) {
                    authDispatch({
                        type: "LOGIN",
                        payload: res.data,
                    });
                    window.location.href = "/";
                } else {
                    toast.error(res?.response?.data || "Có lỗi xảy ra!");
                }
            } else {
                toast.error(res?.response?.data || "Đăng kí thất bại!");
            }
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = "/";
        }
    });

    return (
        <>
            <Head>
                <title>Đăng kí | Cybersoft Elearning</title>
            </Head>
            <LoginWrapper>
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="/videos/background-video-auth.mp4" />
                </video>
                <LoginContainer>
                    <LoginContent>
                        <img src="/images/logo.png" alt="logo" />
                        <Validator>
                            <ValidatorError
                                className={`${
                                    !checkRegex(taiKhoan, MIN_LENGTH) && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        checkRegex(taiKhoan, MIN_LENGTH)
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Tài khoản có độ dài ít nhất 6 kí tự
                            </ValidatorError>
                            <ValidatorError
                                className={`${
                                    !checkRegex(
                                        taiKhoan,
                                        START_WITH_ALPHABET
                                    ) && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        checkRegex(
                                            taiKhoan,
                                            START_WITH_ALPHABET
                                        )
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Tài khoản bắt đầu bằng chữ cái
                            </ValidatorError>
                            <ValidatorError
                                className={`${
                                    !checkRegex(matKhau, MIN_LENGTH) && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        checkRegex(matKhau, MIN_LENGTH)
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Mật khẩu có độ dài ít nhất 6 kí tự
                            </ValidatorError>
                            <ValidatorError
                                className={`${
                                    !checkRegex(matKhau, PASSWORD) && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        checkRegex(matKhau, PASSWORD)
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Mật khẩu bao gồm chữ thường, chữ in hoa, chữ số
                                và kí tự đặc biệt
                            </ValidatorError>
                            <ValidatorError
                                className={`${
                                    matKhau !== xacNhanMatKhau && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        matKhau === xacNhanMatKhau
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Xác nhận mật khẩu trùng khớp
                            </ValidatorError>
                            <ValidatorError
                                className={`${
                                    !checkRegex(email, EMAIL) && "error"
                                }`}
                            >
                                <i
                                    className={`${
                                        checkRegex(matKhau, EMAIL)
                                            ? "fa-solid fa-circle-check"
                                            : "fa-solid fa-circle-xmark"
                                    }`}
                                ></i>
                                Email hợp lệ
                            </ValidatorError>
                        </Validator>
                    </LoginContent>
                    <LoginContent className="auth">
                        <h1>Đăng kí</h1>
                        <AuthForm
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <InputLabel>
                                <i className="fa-solid fa-user"></i>Tài khoản
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type="text"
                                    value={taiKhoan}
                                    onChange={(e) =>
                                        setTaiKhoan(e.target.value)
                                    }
                                    required
                                />
                            </InputGroup>

                            <InputLabel>
                                <i className="fa-solid fa-lock"></i>Mật khẩu
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={matKhau}
                                    onChange={(e) => setMatKhau(e.target.value)}
                                    required
                                />
                                <ToggleShowPassword
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    <i
                                        className={`fa-solid ${
                                            !showPassword
                                                ? "fa-eye"
                                                : "fa-eye-slash"
                                        }`}
                                    ></i>
                                </ToggleShowPassword>
                            </InputGroup>

                            <InputLabel>
                                <i className="fa-solid fa-lock-a"></i>Xác nhận
                                mật khẩu
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={xacNhanMatKhau}
                                    onChange={(e) =>
                                        setXacNhanMatKhau(e.target.value)
                                    }
                                    required
                                />
                                <ToggleShowPassword
                                    onClick={() => {
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        );
                                    }}
                                >
                                    <i
                                        className={`fa-solid ${
                                            !showConfirmPassword
                                                ? "fa-eye"
                                                : "fa-eye-slash"
                                        }`}
                                    ></i>
                                </ToggleShowPassword>
                            </InputGroup>

                            <InputLabel>
                                <i className="fa-solid fa-user"></i>Họ tên
                                (không bắt buộc)
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type="text"
                                    value={hoTen}
                                    onChange={(e) => setHoTen(e.target.value)}
                                />
                            </InputGroup>

                            <InputLabel>
                                <i className="fa-solid fa-envelope"></i>Email
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    title="Vui lòng nhập email hợp lệ"
                                />
                            </InputGroup>

                            <InputLabel>
                                <i className="fa-solid fa-phone"></i>Số điện
                                thoại (không bắt buộc)
                            </InputLabel>
                            <InputGroup>
                                <input
                                    type="tel"
                                    value={soDienThoai}
                                    onChange={(e) =>
                                        setSoDienThoai(e.target.value)
                                    }
                                    pattern="^[0-9]*$"
                                    title="Số điện thoại chỉ bao gồm chữ số"
                                />
                            </InputGroup>

                            <RegisterText>
                                Đã có tài khoản?{" "}
                                <Link href="/dangnhap">Đăng nhập</Link> ngay
                            </RegisterText>

                            <ButtonSubmit type="submit">Đăng kí</ButtonSubmit>
                        </AuthForm>
                    </LoginContent>
                </LoginContainer>
            </LoginWrapper>
        </>
    );
};

export default Register;
