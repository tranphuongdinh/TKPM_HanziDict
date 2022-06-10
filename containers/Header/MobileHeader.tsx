import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { getCoursesClient } from "../../apis/getCoursesClient";
import {
    DANG_KI,
    DANG_NHAP,
    KHOA_HOC,
    THONG_TIN_TAI_KHOAN,
} from "../../constants/navigation";
import { AuthContext } from "../../context/auth/auth.context";
import { HeaderProps } from "../../models/models";
import { HeaderBrand, NavLink, PageInfo, UserInfo } from "./Header.style";
import {
    AuthInfo,
    BrandIcon,
    CloseMenu,
    MobileHeaderContainer,
    MobileHeaderWrapper,
    MobileMenu,
    ToggleMenu,
} from "./MobileHeader.style";

const MobileHeader: React.FC<HeaderProps> = ({ user }) => {
    const router = useRouter();
    const { authDispatch } = useContext<any>(AuthContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [searchValue, setSearchValue] = useState(
        router?.query?.tenKhoaHoc || ""
    );
    const [categoryOptions, setCategoryOptions] = useState([]);

    const logout = () => {
        authDispatch({
            type: "LOGOUT",
        });
        window.location.replace("/");
    };

    const getCategories = async () => {
        const res = await getCoursesClient().getCategory();
        if (res?.length) {
            const options = res.map((item: any) => {
                return {
                    value: item.maDanhMuc,
                    label: item.tenDanhMuc,
                };
            });
            setCategoryOptions(options);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <MobileHeaderWrapper>
            <MobileHeaderContainer>
                <PageInfo>
                    <HeaderBrand>
                        <Link href="/">
                            <img src="./images/logo.png" alt="Cybersoft" />
                        </Link>
                    </HeaderBrand>
                </PageInfo>

                <ToggleMenu onClick={() => setToggleMenu(true)}>
                    <i className="fa-solid fa-bars"></i>
                </ToggleMenu>
            </MobileHeaderContainer>

            <MobileMenu className={`${toggleMenu && "active"}`}>
                <AuthInfo>
                    {!user ? (
                        <NavLink>
                            <ul>
                                <Link href={DANG_KI}>
                                    <li>Đăng kí</li>
                                </Link>
                                <Link href={DANG_NHAP}>
                                    <li>Đăng nhập</li>
                                </Link>
                            </ul>
                        </NavLink>
                    ) : (
                        <UserInfo>
                            <p>
                                <i className="fa-solid fa-circle-user"></i>
                                Xin chào,{" "}
                                <a href={THONG_TIN_TAI_KHOAN}>{user.hoTen}</a>
                            </p>
                        </UserInfo>
                    )}
                </AuthInfo>
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

                        {user && (
                            <a href={THONG_TIN_TAI_KHOAN}>
                                <li
                                    className={
                                        router.pathname === THONG_TIN_TAI_KHOAN
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Tài khoản
                                </li>
                            </a>
                        )}
                        <Link href={KHOA_HOC}>
                            <li
                                className={
                                    router.pathname === KHOA_HOC ? "active" : ""
                                }
                            >
                                Luyện viết
                            </li>
                        </Link>
                        <li onClick={logout}>Đăng xuất</li>
                    </ul>
                </NavLink>

                <CloseMenu>
                    <i
                        className="fa-solid fa-times"
                        onClick={() => setToggleMenu(false)}
                    ></i>
                </CloseMenu>

                <BrandIcon>
                    <Link href="/">
                        <img src="/images/icon.png" alt="Cybersoft" />
                    </Link>
                </BrandIcon>
            </MobileMenu>
        </MobileHeaderWrapper>
    );
};

export default MobileHeader;
