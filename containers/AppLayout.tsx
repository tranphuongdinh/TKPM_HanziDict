import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { DANG_KI, DANG_NHAP } from "../constants/navigation";
import { AuthContext } from "../context/auth/auth.context";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MobileHeader from "./Header/MobileHeader";
import "react-toastify/dist/ReactToastify.css";
import "react-dropdown/style.css";
import NextNProgress from "nextjs-progressbar";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR } from "../constants/style";
import ScrollToTop from "react-scroll-to-top";

const AppLayout: React.FC<any> = ({ children }) => {
    const {
        authState: { user },
    } = useContext<any>(AuthContext);
    const router = useRouter();
    return (
        <div>
            <NextNProgress color={PRIMARY_COLOR} height={5} />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {router.pathname !== DANG_NHAP && router.pathname != DANG_KI && (
                <>
                    <Header user={user} />
                    <MobileHeader user={user} />
                </>
            )}
            {children}
            {router.pathname !== DANG_NHAP && router.pathname != DANG_KI && (
                <Footer></Footer>
            )}
            <ScrollToTop smooth width="18" height="18" color={PRIMARY_BACKGROUND_COLOR} style={{border: "1px solid #ccc"}}/>
        </div>
    );
};

export default AppLayout;
