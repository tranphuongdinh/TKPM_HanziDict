import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import {
    Button,
    HeaderBrand,
    HeaderContainer,
    HeaderWrapper,
    NavLink,
    PageInfo,
    PageNav,
    UserInfo,
    UserMenu,
} from "./Header.style";

import {
    DANG_KI,
    DANG_NHAP,
    KHOA_HOC,
    THONG_TIN_TAI_KHOAN,
} from "../../constants/navigation";
import { AuthContext } from "../../context/auth/auth.context";
import { HeaderProps } from "../../models/models";

const Header: React.FC<HeaderProps> = ({ user }) => {
    const { authDispatch } = useContext<any>(AuthContext);
    const [toggleUserMenu, setToggleUserMenu] = useState(false);
    const router = useRouter();

    const logout = () => {
        authDispatch({
            type: "LOGOUT",
        });
        window.location.replace("/");
    };

    return (
        <HeaderWrapper id="header">
            <HeaderContainer>
                <PageInfo>
                    <HeaderBrand>
                        <Link href="/">
                            <img src="./images/logo.png" alt="Hanzi Dict" />
                        </Link>
                    </HeaderBrand>
                </PageInfo>

                <PageNav>
                    <NavLink>
                        <ul>
                            <Link href="/">
                                <li
                                    className={
                                        router.pathname === "/" ? "active" : ""
                                    }
                                >
                                    Trang chủ
                                </li>
                            </Link>
                            <Link href={KHOA_HOC}>
                                <li
                                    className={
                                        router.pathname === KHOA_HOC
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Luyện viết
                                </li>
                            </Link>
                        </ul>
                    </NavLink>

                    {!user ? (
                        <UserInfo>
                            <Link href={DANG_NHAP}>
                                <Button className="no-outline">
                                    Đăng nhập
                                </Button>
                            </Link>
                            <Link href={DANG_KI}>
                                <Button>Đăng kí</Button>
                            </Link>
                        </UserInfo>
                    ) : (
                        <UserInfo>
                            {toggleUserMenu && (
                                <UserMenu>
                                    <a href={THONG_TIN_TAI_KHOAN}>
                                        <li>
                                            <i className="fa-solid fa-user-large"></i>
                                            Tài khoản
                                        </li>
                                    </a>
                                    <li onClick={logout}>
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                        Đăng xuất
                                    </li>
                                </UserMenu>
                            )}
                            <i
                                className={`fa-solid fa-circle-user ${
                                    toggleUserMenu && "active"
                                }`}
                                onClick={() => {
                                    setToggleUserMenu(!toggleUserMenu);
                                }}
                            ></i>
                            <p>
                                Xin chào,{" "}
                                <a
                                    href={THONG_TIN_TAI_KHOAN}
                                    className="username"
                                >
                                    {user.hoTen || "Unnamed"}
                                </a>
                            </p>
                        </UserInfo>
                    )}
                </PageNav>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
