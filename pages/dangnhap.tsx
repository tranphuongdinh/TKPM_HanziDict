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
} from "../containers/Auth/Auth.style";
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "../context/auth/auth.context";
import { toast } from "react-toastify";

const DangNhap: NextPage = () => {
    const {
        authState: { isAuthenticated, user },
        authDispatch,
    } = useContext<any>(AuthContext);

    const [taiKhoan, setTaiKhoan] = React.useState("");
    const [matKhau, setMatKhau] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            taiKhoan: taiKhoan,
            matKhau: matKhau,
        };

        const res = await getAuthClient().login(data);
        if (res.data) {
            authDispatch({
                type: "LOGIN",
                payload: res.data,
            });
            window.location.href = "/";
        } else {
            toast.error(res?.response?.data || "Đăng nhập thất bại!");
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
                <title>Đăng nhập | Cybersoft Elearning</title>
            </Head>
            <LoginWrapper>
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="/videos/background-video-auth.mp4" />
                </video>
                <LoginContainer>
                    <LoginContent>
                        <img src="/images/logo.png" alt="logo" />
                    </LoginContent>
                    <LoginContent className="auth">
                        <h1>Đăng nhập</h1>
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

                            <RegisterText>
                                Chưa có tài khoản?{" "}
                                <Link href="/dangki">Đăng kí</Link> ngay
                            </RegisterText>

                            <ButtonSubmit type="submit">Đăng nhập</ButtonSubmit>
                        </AuthForm>
                    </LoginContent>
                </LoginContainer>
            </LoginWrapper>
        </>
    );
};

export default DangNhap;
